# Deploying Scalex Studio to Vercel

This project runs on Lovable (Cloudflare Workers preview) **and** on Vercel,
using two separate Vite configs so neither environment breaks the other.

| Environment | Config used                  | Target              |
| ----------- | ---------------------------- | ------------------- |
| Lovable     | `vite.config.ts`             | Cloudflare (auto)   |
| Vercel      | `vite.config.vercel.ts`      | `vercel` (TanStack) |

The Vercel build is wired through `vercel.json` — you don't need to set
anything in the Vercel UI.

## One-time setup

1. **Push the repo to GitHub** (Lovable → top-right → GitHub → Connect).
2. Go to <https://vercel.com/new> and **Import** the repository.
3. On the import screen:
   - **Framework Preset:** *Other* (Vercel will read `vercel.json`)
   - Leave Build / Install / Output blank — `vercel.json` overrides them.
4. Click **Deploy**.

## Environment variables

Add any secrets in **Vercel → Project → Settings → Environment Variables**:

- Server-only secrets: no prefix (e.g. `STRIPE_SECRET_KEY`)
- Client-exposed values: must start with `VITE_` (e.g. `VITE_PUBLIC_URL`)

Server functions (`createServerFn`) read them via `process.env.X` at runtime.

## Local Vercel build (optional sanity check)

```bash
npm install --legacy-peer-deps
npx vite build --config vite.config.vercel.ts
```

Output goes to `.vercel/output/` in the format Vercel expects.

## Notes

- Don't delete `vite.config.ts` or `wrangler.jsonc` — Lovable's preview needs them.
- Both configs share the same source code in `src/` — no duplication.
- TanStack Start handles SSR + server functions on Vercel automatically (Node serverless).
