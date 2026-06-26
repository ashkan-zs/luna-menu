import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  Globe2,
  Languages,
  LayoutTemplate,
  Palette,
  QrCode,
  Search,
  Sparkles,
  Star,
  Wand2,
  Zap,
} from "lucide-react";

import type { Locale } from "@/types/i18n";

type MarketingLink = {
  label: string;
  href: string;
};

type MarketingFeature = {
  title: string;
  description: string;
};

type MarketingTheme = {
  name: string;
  description: string;
};

type MarketingStep = {
  title: string;
  description: string;
};

type MarketingFaq = {
  question: string;
  answer: string;
};

export type MarketingHomepageContent = {
  nav: {
    ariaLabel: string;
    demo: string;
    contact: string;
    contactSubject: string;
    instagram: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    description: string;
    demoCta: string;
    contactCta: string;
    previewLabel: string;
    previewBadge: string;
    previewRestaurant: string;
    previewCategory: string;
    previewItems: string[];
    previewNavStart: string;
    previewNavEnd: string;
  };
  problemSolution: {
    eyebrow: string;
    heading: string;
    problemTitle: string;
    problemDescription: string;
    solutionTitle: string;
    solutionDescription: string;
  };
  features: {
    eyebrow: string;
    heading: string;
    items: MarketingFeature[];
  };
  themes: {
    eyebrow: string;
    heading: string;
    previewCta: string;
    items: MarketingTheme[];
  };
  demos: {
    eyebrow: string;
    heading: string;
    description: string;
    links: MarketingLink[];
  };
  howItWorks: {
    eyebrow: string;
    heading: string;
    steps: MarketingStep[];
  };
  faq: {
    eyebrow: string;
    heading: string;
    items: MarketingFaq[];
  };
  finalCta: {
    eyebrow: string;
    heading: string;
    description: string;
    demoCta: string;
    contactCta: string;
  };
  footer: {
    brand: string;
    demo: string;
    contact: string;
    instagram: string;
  };
};

type MarketingHomepageProps = {
  locale: Locale;
  content: MarketingHomepageContent;
};

const featureIcons = [
  LayoutTemplate,
  Palette,
  Languages,
  QrCode,
  Star,
  Search,
  Zap,
  Globe2,
  Wand2,
];

const themeAccents = [
  "from-[#d8ba7c]/28 to-[#fff4dd]/8",
  "from-[#9f6f43]/28 to-[#e8d8bf]/8",
  "from-[#1e88e5]/24 to-[#f59e0b]/10",
];

const themePreviewPathByIndex = [
  (locale: Locale) => `/${locale}/luna-bistro`,
  (locale: Locale) => `/${locale}/preview/oteki`,
  (locale: Locale) => `/${locale}/mavi-balloon`,
];

function getDemoPath(locale: Locale) {
  return `/${locale}/luna-bistro`;
}

function SectionIntro({
  eyebrow,
  heading,
  align = "left",
}: {
  eyebrow: string;
  heading: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-3xl text-center"
          : "max-w-3xl text-left"
      }
    >
      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-theme-accent">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-serif text-3xl leading-tight text-theme-text-strong sm:text-4xl lg:text-5xl">
        {heading}
      </h2>
    </div>
  );
}

function MarketingButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: string;
  variant?: "primary" | "secondary";
}) {
  const className =
    variant === "primary"
      ? "bg-theme-accent text-[#14100a] shadow-[0_18px_50px_rgb(216_186_124_/_0.18)] hover:bg-theme-accent-hover"
      : "border border-theme-text/20 bg-theme-text/5 text-theme-text-strong hover:border-theme-accent/70 hover:bg-theme-text/10";

  return (
    <a
      href={href}
      className={`inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-theme-accent ${className}`}
    >
      {children}
      <ArrowRight aria-hidden="true" className="size-4" />
    </a>
  );
}

function PhonePreview({ content }: { content: MarketingHomepageContent }) {
  return (
    <div className="relative mx-auto w-full max-w-[22rem] lg:mr-0">
      <div className="absolute inset-x-6 -top-8 h-32 rounded-full bg-theme-accent/20 blur-3xl" />
      <div className="relative rounded-[2rem] border border-theme-text/15 bg-[#130f0b] p-3 shadow-[0_30px_90px_rgb(0_0_0_/_0.46)]">
        <div className="overflow-hidden rounded-[1.5rem] border border-theme-text/10 bg-[#080705]">
          <div className="relative min-h-[34rem] bg-[radial-gradient(circle_at_50%_0%,rgb(216_186_124_/_0.28),transparent_34%),linear-gradient(180deg,#1b140e,#080705_52%)] p-5">
            <div className="flex items-center justify-between text-xs text-theme-text-muted">
              <span>{content.hero.previewLabel}</span>
              <span className="rounded-full bg-theme-accent/15 px-3 py-1 text-theme-accent">
                {content.hero.previewBadge}
              </span>
            </div>
            <div className="mt-16">
              <p className="text-xs uppercase tracking-[0.28em] text-theme-accent">
                {content.hero.previewCategory}
              </p>
              <h3 className="mt-3 font-serif text-4xl leading-none text-theme-text-strong">
                {content.hero.previewRestaurant}
              </h3>
            </div>
            <div className="mt-10 space-y-3">
              {content.hero.previewItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-2xl border border-theme-text/10 bg-theme-text/[0.06] p-4"
                >
                  <span className="text-sm text-theme-text">{item}</span>
                  <span className="size-2 rounded-full bg-theme-accent" />
                </div>
              ))}
            </div>
            <div className="absolute inset-x-8 bottom-6 flex items-center justify-between rounded-full border border-theme-text/10 bg-[#100c08]/90 px-5 py-3 text-xs text-theme-text-muted">
              <span>{content.hero.previewNavStart}</span>
              <Search aria-hidden="true" className="size-4 text-theme-accent" />
              <span>{content.hero.previewNavEnd}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MarketingHomepage({
  locale,
  content,
}: MarketingHomepageProps) {
  const demoHref = getDemoPath(locale);
  const contactHref = `mailto:hello@lunamenu.co?subject=${encodeURIComponent(
    content.nav.contactSubject,
  )}`;
  const instagramHref = process.env.NEXT_PUBLIC_INSTAGRAM_URL;

  return (
    <main className="min-h-screen overflow-hidden bg-theme-bg font-sans text-theme-text">
      <header className="sticky top-0 z-20 border-b border-theme-text/10 bg-theme-bg/82 backdrop-blur-xl">
        <nav
          aria-label={content.nav.ariaLabel}
          className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8"
        >
          <a
            href={`/${locale}`}
            className="cursor-pointer font-serif text-xl text-theme-text-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-theme-accent"
          >
            {content.footer.brand}
          </a>
          <div className="flex items-center gap-2 text-sm">
            <a
              href={demoHref}
              className="hidden min-h-11 cursor-pointer items-center rounded-full px-4 text-theme-text-muted transition-colors duration-200 hover:text-theme-text-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-theme-accent sm:inline-flex"
            >
              {content.nav.demo}
            </a>
            <a
              href={contactHref}
              className="inline-flex min-h-11 cursor-pointer items-center rounded-full border border-theme-text/15 px-4 text-theme-text-strong transition-colors duration-200 hover:border-theme-accent/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-theme-accent"
            >
              {content.nav.contact}
            </a>
          </div>
        </nav>
      </header>

      <section className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_10%,rgb(216_186_124_/_0.16),transparent_34%),linear-gradient(180deg,rgb(255_244_221_/_0.05),transparent_40%)]" />
        <div className="relative mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.02fr_0.78fr] lg:py-20">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.36em] text-theme-accent">
              {content.hero.eyebrow}
            </p>
            <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-[0.96] text-theme-text-strong sm:text-6xl lg:text-7xl">
              {content.hero.headline}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-theme-text-muted sm:text-xl">
              {content.hero.description}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <MarketingButton href={demoHref}>
                {content.hero.demoCta}
              </MarketingButton>
              <MarketingButton href={contactHref} variant="secondary">
                {content.hero.contactCta}
              </MarketingButton>
            </div>
          </div>
          <PhonePreview content={content} />
        </div>
      </section>

      <section className="border-y border-theme-text/10 bg-theme-text/[0.035] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow={content.problemSolution.eyebrow}
            heading={content.problemSolution.heading}
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <article className="rounded-lg border border-theme-text/10 bg-[#120e0a] p-6 sm:p-8">
              <Clock3 aria-hidden="true" className="size-6 text-theme-accent" />
              <h3 className="mt-6 text-2xl font-semibold text-theme-text-strong">
                {content.problemSolution.problemTitle}
              </h3>
              <p className="mt-4 leading-7 text-theme-text-muted">
                {content.problemSolution.problemDescription}
              </p>
            </article>
            <article className="rounded-lg border border-theme-accent/25 bg-theme-accent/10 p-6 sm:p-8">
              <BadgeCheck
                aria-hidden="true"
                className="size-6 text-theme-accent"
              />
              <h3 className="mt-6 text-2xl font-semibold text-theme-text-strong">
                {content.problemSolution.solutionTitle}
              </h3>
              <p className="mt-4 leading-7 text-theme-text-muted">
                {content.problemSolution.solutionDescription}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow={content.features.eyebrow}
            heading={content.features.heading}
            align="center"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {content.features.items.map((feature, index) => {
              const Icon = featureIcons[index] || Sparkles;

              return (
                <article
                  key={feature.title}
                  className="rounded-lg border border-theme-text/10 bg-theme-text/[0.045] p-6 transition-colors duration-200 hover:border-theme-accent/35 hover:bg-theme-text/[0.065]"
                >
                  <Icon aria-hidden="true" className="size-6 text-theme-accent" />
                  <h3 className="mt-5 text-xl font-semibold text-theme-text-strong">
                    {feature.title}
                  </h3>
                  <p className="mt-3 leading-7 text-theme-text-muted">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-theme-text/10 bg-[#100d09] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow={content.themes.eyebrow}
            heading={content.themes.heading}
          />
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {content.themes.items.map((theme, index) => (
              <article
                key={theme.name}
                className="group overflow-hidden rounded-lg border border-theme-text/10 bg-theme-bg"
              >
                <div
                  className={`h-40 bg-gradient-to-br ${
                    themeAccents[index] || themeAccents[0]
                  } p-5`}
                >
                  <div className="h-full rounded-lg border border-theme-text/15 bg-theme-bg/45 p-4">
                    <div className="h-3 w-24 rounded-full bg-theme-text/20" />
                    <div className="mt-10 h-4 w-36 rounded-full bg-theme-accent/70" />
                    <div className="mt-3 h-3 w-48 max-w-full rounded-full bg-theme-text/18" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-theme-text-strong">
                    {theme.name}
                  </h3>
                  <p className="mt-3 min-h-20 leading-7 text-theme-text-muted">
                    {theme.description}
                  </p>
                  <a
                    href={(themePreviewPathByIndex[index] || getDemoPath)(
                      locale,
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full text-sm font-semibold text-theme-accent transition-colors duration-200 hover:text-theme-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-theme-accent"
                  >
                    {content.themes.previewCta}
                    <ArrowRight aria-hidden="true" className="size-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <SectionIntro
              eyebrow={content.demos.eyebrow}
              heading={content.demos.heading}
            />
            <p className="mt-5 max-w-2xl leading-7 text-theme-text-muted">
              {content.demos.description}
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {content.demos.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex min-h-20 cursor-pointer items-center justify-between rounded-lg border border-theme-text/10 bg-theme-text/[0.045] px-5 text-theme-text-strong transition-colors duration-200 hover:border-theme-accent/45 hover:bg-theme-text/[0.07] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-theme-accent"
              >
                <span>{link.label}</span>
                <ArrowRight aria-hidden="true" className="size-5 text-theme-accent" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-theme-text/10 bg-theme-text/[0.035] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow={content.howItWorks.eyebrow}
            heading={content.howItWorks.heading}
            align="center"
          />
          <div className="mt-12 grid gap-4 md:grid-cols-5">
            {content.howItWorks.steps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-lg border border-theme-text/10 bg-theme-bg p-5"
              >
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-theme-accent text-sm font-bold text-[#14100a]">
                  {index + 1}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-theme-text-strong">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-theme-text-muted">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionIntro
            eyebrow={content.faq.eyebrow}
            heading={content.faq.heading}
            align="center"
          />
          <div className="mt-10 divide-y divide-theme-text/10 rounded-lg border border-theme-text/10 bg-theme-text/[0.045]">
            {content.faq.items.map((item) => (
              <details key={item.question} className="group p-6">
                <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-semibold text-theme-text-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-theme-accent">
                  {item.question}
                  <span className="text-theme-accent transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-7 text-theme-text-muted">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8">
        <div className="mx-auto max-w-7xl rounded-lg border border-theme-accent/25 bg-[linear-gradient(135deg,rgb(216_186_124_/_0.16),rgb(255_244_221_/_0.035))] p-8 sm:p-12 lg:p-16">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-theme-accent">
            {content.finalCta.eyebrow}
          </p>
          <h2 className="mt-4 max-w-4xl font-serif text-4xl leading-tight text-theme-text-strong sm:text-5xl">
            {content.finalCta.heading}
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-theme-text-muted">
            {content.finalCta.description}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <MarketingButton href={demoHref}>
              {content.finalCta.demoCta}
            </MarketingButton>
            <MarketingButton href={contactHref} variant="secondary">
              {content.finalCta.contactCta}
            </MarketingButton>
          </div>
        </div>
      </section>

      <footer className="border-t border-theme-text/10 px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-theme-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p className="font-serif text-lg text-theme-text-strong">
            {content.footer.brand}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={demoHref}
              className="cursor-pointer transition-colors duration-200 hover:text-theme-text-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-theme-accent"
            >
              {content.footer.demo}
            </a>
            <a
              href={contactHref}
              className="cursor-pointer transition-colors duration-200 hover:text-theme-text-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-theme-accent"
            >
              {content.footer.contact}
            </a>
            {instagramHref && (
              <a
                href={instagramHref}
                rel="noreferrer"
                target="_blank"
                className="cursor-pointer transition-colors duration-200 hover:text-theme-text-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-theme-accent"
              >
                {content.footer.instagram}
              </a>
            )}
          </div>
        </div>
      </footer>
    </main>
  );
}
