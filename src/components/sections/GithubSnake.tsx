import Section, { Reveal } from "@/components/Section";

// The SVGs are generated daily by .github/workflows/snake.yml and pushed to the `output` branch.
const base = "https://raw.githubusercontent.com/moosakhalil/MoosaKhalil-Portfolio/output";

export default function GithubSnake() {
  return (
    <Section id="activity" label="Activity" title="Always building." intro="My GitHub contributions over the past year.">
      <Reveal>
        <a
          href="https://github.com/moosakhalil"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View my GitHub profile"
          className="block rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/40 p-4 sm:p-8 overflow-x-auto"
        >
          {/* eslint-disable @next/next/no-img-element */}
          <img
            src={`${base}/github-contribution-grid-snake.svg`}
            alt="Snake animation eating my GitHub contribution graph"
            className="block dark:hidden w-full min-w-[640px] h-auto"
            loading="lazy"
          />
          <img
            src={`${base}/github-contribution-grid-snake-dark.svg`}
            alt="Snake animation eating my GitHub contribution graph"
            className="hidden dark:block w-full min-w-[640px] h-auto"
            loading="lazy"
          />
          {/* eslint-enable @next/next/no-img-element */}
        </a>
      </Reveal>
    </Section>
  );
}
