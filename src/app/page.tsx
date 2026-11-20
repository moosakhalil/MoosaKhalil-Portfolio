import fs from "node:fs";
import path from "node:path";
import PortfolioEffects from "@/components/portfolio/PortfolioEffects";

// The page markup lives in src/content/portfolio.html (edit text, links and images there).
// Behaviour (animations, galleries, scroll effects) lives in src/components/portfolio/initPortfolio.ts.
export default function Home() {
  const html = fs.readFileSync(path.join(process.cwd(), "src/content/portfolio.html"), "utf8");
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <PortfolioEffects />
    </>
  );
}
