export type Project = { url: string; title: string; category: "Web Design" | "Shopify" | "SEO" };

const titleFromUrl = (u: string) =>
  u.replace(/^https?:\/\/(www\.)?/, "").split(".")[0]
   .replace(/-/g, " ")
   .replace(/\b\w/g, (c) => c.toUpperCase());

const mk = (url: string, category: Project["category"], title?: string): Project => ({
  url,
  title: title ?? titleFromUrl(url),
  category,
});

export const featuredProjects: Project[] = [
  mk("https://valhallakrafts.com", "Shopify", "Valhalla Krafts"),
  mk("https://castlehomegoods.com", "Shopify", "Castle Home Goods"),
  mk("https://mmmessence.com", "Shopify", "MMM Essence"),
  mk("https://asgwear.com", "Shopify", "ASG Wear"),
  mk("https://zimartllc.com", "Web Design", "Zimart LLC"),
  mk("https://narimaantraders.com", "Web Design", "Narimaan Traders"),
  mk("https://furnitome.com", "Shopify", "Furnitome"),
  mk("https://asifandshahzadfurniture.ae", "Web Design", "Asif & Shahzad Furniture"),
  mk("https://propschallengesmaster.com", "Web Design", "Props Challenges Master"),
  mk("https://windsorhomebuyers.com", "SEO", "Windsor Home Buyers"),
];

export const moreProjects: Project[] = [
  mk("https://elitegleamcleaning.com", "Web Design", "Elite Gleam Cleaning"),
  mk("https://normaspotless.com", "Web Design", "Norma Spotless"),
  mk("https://l1taxpros.com", "Web Design", "L1 Tax Pros"),
  mk("https://pvirtualstaffing.com", "Web Design", "P Virtual Staffing"),
  mk("https://aaanexus.com", "Web Design", "AAA Nexus"),
  mk("https://nextlevelacquisitions.com", "SEO", "Next Level Acquisitions"),
  mk("https://dealershipautodetail.com", "Web Design", "Dealership Auto Detail"),
  mk("https://elegantestatesbysircharles.com", "Web Design", "Elegant Estates"),
  mk("https://fasthouseguy.com", "SEO", "Fast House Guy"),
  mk("https://fasthousesdeals.com", "SEO", "Fast Houses Deals"),
  mk("https://www.universaltechservices.com", "Web Design", "Universal Tech Services"),
  mk("https://vemac.us", "Web Design", "Vemac"),
  mk("https://medixdelivery.com", "Web Design", "Medix Delivery"),
  mk("https://ftmofirmteam.com", "Web Design", "FTMO Firm Team"),
  mk("https://valknutwarrior.com", "Shopify", "Valknut Warrior"),
  mk("https://joyrestoredindependentliving.com", "Web Design", "Joy Restored Living"),
];
