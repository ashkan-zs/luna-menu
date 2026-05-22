"use client";

import Image from "next/image";
import {
  AtSign,
  CalendarCheck,
  Clock,
  MapPin,
  Navigation,
  Phone,
  Quote,
  Sparkles,
} from "lucide-react";


import type { ReactNode } from "react";
import type { SupportedLanguage } from "@/types/menu";
import { motion, HTMLMotionProps, useReducedMotion } from "motion/react";

type RestaurantInfoSectionProps = {
  language: SupportedLanguage;
  restaurantName: string;
  backgroundImage: string;
  contact: {
    phone: string;
    instagramUrl: string;
    googleMapsUrl: string;
  };
};

const copy = {
  en: {
    eyebrow: "Luna at Night",
    heading: "A quieter kind of luxury.",
    story:
      "Luna Bistro is designed for slow evenings, polished plates, and the kind of hospitality that feels personal without asking for attention. Seasonal Mediterranean cooking meets a candlelit room, measured service, and a bar program built for lingering.",
    quote:
      "Our menu follows the season, but the mood stays constant: warm light, generous tables, and a little ceremony in every detail.",
    quoteBy: "Chef's note",
    hoursTitle: "Opening Hours",
    contactTitle: "Contact",
    addressLabel: "Location",
    address: "Nisantasi, Tesvikiye Cd. No:18, Istanbul",
    phoneLabel: "Reservations",
    reserve: "Reserve a Table",
    maps: "Open Maps",
    instagram: "Instagram",
    atmosphere: "Dining & Cocktails",
    hours: [
      { days: "Mon - Thu", time: "17:00 - 00:00" },
      { days: "Fri - Sat", time: "17:00 - 01:30" },
      { days: "Sunday", time: "12:00 - 23:00" },
    ],
  },
  tr: {
    eyebrow: "Luna'da Gece",
    heading: "Daha sakin bir lüks.",
    story:
      "Luna Bistro, yavaş akan akşamlar, rafine tabaklar ve kendini gösterişsiz hissettiren kişisel bir misafirperverlik için tasarlandı. Mevsimsel Akdeniz mutfağı; loş ışıklı bir salon, ölçülü servis ve uzun sohbetlere eşlik eden bir bar programıyla buluşur.",
    quote:
      "Menümüz mevsimi takip eder; atmosferimiz ise aynı kalır: sıcak ışık, cömert masalar ve her detayda küçük bir tören hissi.",
    quoteBy: "Şefin notu",
    hoursTitle: "Açılış Saatleri",
    contactTitle: "İletişim",
    addressLabel: "Konum",
    address: "Nişantaşı, Teşvikiye Cd. No:18, İstanbul",
    phoneLabel: "Rezervasyon",
    reserve: "Masa Ayırt",
    maps: "Haritada Aç",
    instagram: "Instagram",
    atmosphere: "Yemek & Kokteyl",
    hours: [
      { days: "Pzt - Per", time: "17:00 - 00:00" },
      { days: "Cum - Cmt", time: "17:00 - 01:30" },
      { days: "Pazar", time: "12:00 - 23:00" },
    ],
  },
} satisfies Record<
  SupportedLanguage,
  {
    eyebrow: string;
    heading: string;
    story: string;
    quote: string;
    quoteBy: string;
    hoursTitle: string;
    contactTitle: string;
    addressLabel: string;
    address: string;
    phoneLabel: string;
    reserve: string;
    maps: string;
    instagram: string;
    atmosphere: string;
    hours: { days: string; time: string }[];
  }
>;

export default function RestaurantInfoSection({
  language,
  restaurantName,
  backgroundImage,
  contact,
}: RestaurantInfoSectionProps) {
  const labels = copy[language];
  const phoneHref = `tel:${contact.phone.replaceAll(" ", "")}`;
  const shouldReduceMotion = useReducedMotion();
  const motionProps: HTMLMotionProps<"section"> = shouldReduceMotion
    ? { initial: false }
    : {
        initial: { opacity: 0, y: 28 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-12% 0px" },
        transition: { duration: 0.55, ease: "easeOut" },
      };

  return (
    <motion.section
      id="restaurant-info"
      aria-labelledby="restaurant-info-heading"
      className="relative isolate overflow-hidden px-5 pb-16 pt-4 sm:px-8 sm:pb-20 lg:px-12"
      {...motionProps}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-10 -z-10 h-80 bg-[radial-gradient(circle_at_18%_30%,rgb(var(--menu-brass-rgb)/0.14),transparent_34%),radial-gradient(circle_at_82%_10%,rgb(255_255_255/0.07),transparent_28%)]"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[minmax(0,1.08fr)_minmax(22rem,0.92fr)] lg:items-stretch">
        <div className="relative min-h-136 overflow-hidden rounded-[2.25rem] border border-white/10 bg-menu-night/55 shadow-[0_30px_100px_rgb(0_0_0_/0.38)] sm:rounded-[2.5rem]">
          <Image
            src={backgroundImage}
            alt={`${restaurantName} dining room atmosphere`}
            fill
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="scale-105 object-cover opacity-72 transition duration-700 ease-out motion-safe:hover:scale-110"
          />
          <div
            className="absolute inset-0 bg-linear-to-t from-menu-night via-menu-night/62 to-black/24"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgb(var(--menu-brass-rgb)/0.2),transparent_28%),linear-gradient(120deg,rgb(0_0_0/0.1),rgb(0_0_0/0.46))]"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "18px 18px",
            }}
            aria-hidden="true"
          />

          <div className="relative flex min-h-136 flex-col justify-end p-6 sm:p-8 lg:p-10">
            <div className="mb-8 inline-flex w-fit items-center gap-3 rounded-full border border-menu-brass/24 bg-menu-night/44 px-4 py-2 text-[0.66rem] font-medium uppercase tracking-[0.24em] text-menu-brass backdrop-blur-xl">
              <Sparkles className="size-3.5" aria-hidden="true" />
              {labels.eyebrow}
            </div>

            <p className="text-sm uppercase tracking-[0.34em] text-menu-cream/60">
              {restaurantName}
            </p>
            <h2
              id="restaurant-info-heading"
              className="mt-3 max-w-2xl font-serif text-4xl leading-[0.98] text-menu-ivory sm:text-5xl lg:text-6xl"
            >
              {labels.heading}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-menu-cream/76 sm:text-lg">
              {labels.story}
            </p>

            <figure className="mt-8 max-w-xl rounded-3xl border border-white/10 bg-white/5.5 p-5 shadow-[0_20px_70px_rgb(0_0_0_/0.28)] backdrop-blur-xl">
              <Quote className="size-5 text-menu-brass" aria-hidden="true" />
              <blockquote className="mt-4 font-serif text-xl leading-8 text-menu-warm-white">
                {labels.quote}
              </blockquote>
              <figcaption className="mt-4 text-[0.68rem] font-medium uppercase tracking-[0.24em] text-menu-brass/78">
                {labels.quoteBy}
              </figcaption>
            </figure>
          </div>
        </div>

        <aside className="relative lg:-ml-10 lg:py-10">
          <div className="overflow-hidden rounded-4xl border border-white/10 bg-white/5.5 p-5 shadow-[0_24px_90px_rgb(0_0_0_/0.32)] backdrop-blur-2xl sm:rounded-[2.25rem] sm:p-6 lg:p-7">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <p className="text-[0.66rem] font-medium uppercase tracking-[0.24em] text-menu-brass/78">
                  {labels.atmosphere}
                </p>
                <h3 className="mt-2 font-serif text-2xl text-menu-ivory">
                  {labels.hoursTitle}
                </h3>
              </div>
              <span className="grid size-12 shrink-0 place-items-center rounded-full border border-menu-brass/24 bg-menu-brass/10 text-menu-brass">
                <Clock className="size-5" aria-hidden="true" />
              </span>
            </div>

            <div className="divide-y divide-white/10">
              {labels.hours.map((item) => (
                <div
                  key={item.days}
                  className="flex items-center justify-between gap-4 py-4"
                >
                  <span className="text-sm text-menu-cream/66">
                    {item.days}
                  </span>
                  <span className="font-serif text-lg text-menu-warm-white">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-3xl border border-menu-brass/16 bg-menu-night/42 p-5">
              <h3 className="font-serif text-2xl text-menu-ivory">
                {labels.contactTitle}
              </h3>

              <address className="mt-5 space-y-4 not-italic">
                <InfoLine
                  icon={<MapPin className="size-4" aria-hidden="true" />}
                  label={labels.addressLabel}
                  value={labels.address}
                />
                <InfoLine
                  icon={<Phone className="size-4" aria-hidden="true" />}
                  label={labels.phoneLabel}
                  value={contact.phone}
                  href={phoneHref}
                />
              </address>

              <div className="mt-6 grid gap-3">
                <a
                  href={phoneHref}
                  className="inline-flex min-h-13 items-center justify-center gap-3 rounded-full border border-menu-brass/36 bg-menu-brass/18 px-5 text-sm font-medium uppercase tracking-[0.16em] text-menu-button-text shadow-(--shadow-menu-button-hover) transition duration-300 hover:-translate-y-0.5 hover:border-menu-brass-hover/70 hover:bg-menu-brass/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-menu-brass/80"
                >
                  <CalendarCheck className="size-4" aria-hidden="true" />
                  {labels.reserve}
                </a>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={contact.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5.5 px-4 text-xs font-medium uppercase tracking-[0.14em] text-menu-cream/76 transition duration-300 hover:border-menu-brass/34 hover:text-menu-warm-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-menu-brass/80"
                  >
                    <Navigation className="size-4" aria-hidden="true" />
                    {labels.maps}
                  </a>
                  <a
                    href={contact.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5.5 px-4 text-xs font-medium uppercase tracking-[0.14em] text-menu-cream/76 transition duration-300 hover:border-menu-brass/34 hover:text-menu-warm-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-menu-brass/80"
                  >
                    <AtSign className="size-4" aria-hidden="true" />
                    {labels.instagram}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </motion.section>
  );
}

function InfoLine({
  icon,
  label,
  value,
  href,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="grid size-10 shrink-0 place-items-center rounded-full border border-menu-brass/18 bg-menu-brass/10 text-menu-brass">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-[0.64rem] font-medium uppercase tracking-[0.22em] text-menu-brass/70">
          {label}
        </span>
        <span className="mt-1 block text-sm leading-6 text-menu-cream/76">
          {value}
        </span>
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="flex min-h-12 items-center gap-3 rounded-2xl transition duration-300 hover:text-menu-warm-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-menu-brass/80"
      >
        {content}
      </a>
    );
  }

  return <div className="flex min-h-12 items-center gap-3">{content}</div>;
}
