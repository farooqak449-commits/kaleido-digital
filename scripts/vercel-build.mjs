// Post-build script: assemble Vercel Build Output API v3 from dist/.
// TanStack Start's installed version doesn't ship a `vercel` target, so we
// build with the default config and adapt the output here.
import { cp, mkdir, writeFile, rm, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");
const out = path.join(root, ".vercel", "output");

if (!existsSync(path.join(dist, "client")) || !existsSync(path.join(dist, "server", "server.js"))) {
  console.error("Expected dist/client and dist/server/server.js. Did `vite build` run?");
  process.exit(1);
}

await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });

// 1) Static client assets -> .vercel/output/static
await cp(path.join(dist, "client"), path.join(out, "static"), { recursive: true });

// 2) SSR Node serverless function -> .vercel/output/functions/index.func
const fnDir = path.join(out, "functions", "index.func");
await mkdir(fnDir, { recursive: true });
await cp(path.join(dist, "server"), fnDir, { recursive: true });

// Vercel Node function entrypoint (CommonJS-style filename, ESM via package.json type:module).
// We wrap the SSR fetch handler into a (req, res) Node handler.
const handler = `import server from "./server.js";

// Convert Node IncomingMessage -> Web Request
async function toWebRequest(req) {
  const protocol = req.headers["x-forwarded-proto"] || "https";
  const host = req.headers["x-forwarded-host"] || req.headers.host;
  const url = new URL(req.url, \`\${protocol}://\${host}\`);
  const headers = new Headers();
  for (const [k, v] of Object.entries(req.headers)) {
    if (Array.isArray(v)) v.forEach((vv) => headers.append(k, vv));
    else if (v != null) headers.set(k, String(v));
  }
  const method = req.method || "GET";
  let body;
  if (method !== "GET" && method !== "HEAD") {
    const chunks = [];
    for await (const c of req) chunks.push(c);
    body = Buffer.concat(chunks);
  }
  return new Request(url, { method, headers, body });
}

export default async function vercelHandler(req, res) {
  try {
    const webReq = await toWebRequest(req);
    const webRes = await server.fetch(webReq);
    res.statusCode = webRes.status;
    webRes.headers.forEach((value, key) => res.setHeader(key, value));
    if (webRes.body) {
      const reader = webRes.body.getReader();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        res.write(Buffer.from(value));
      }
    }
    res.end();
  } catch (err) {
    console.error("SSR handler error:", err);
    res.statusCode = 500;
    res.end("Internal Server Error");
  }
}
`;
await writeFile(path.join(fnDir, "index.mjs"), handler);

await writeFile(
  path.join(fnDir, "package.json"),
  JSON.stringify({ type: "module" }, null, 2),
);

await writeFile(
  path.join(fnDir, ".vc-config.json"),
  JSON.stringify(
    {
      runtime: "nodejs20.x",
      handler: "index.mjs",
      launcherType: "Nodejs",
      shouldAddHelpers: false,
      supportsResponseStreaming: true,
    },
    null,
    2,
  ),
);

// 3) Top-level config.json — filesystem first, then SSR fallback.
await writeFile(
  path.join(out, "config.json"),
  JSON.stringify(
    {
      version: 3,
      routes: [
        { handle: "filesystem" },
        { src: "/(.*)", dest: "/index" },
      ],
    },
    null,
    2,
  ),
);

console.log("Vercel build output assembled at .vercel/output");
