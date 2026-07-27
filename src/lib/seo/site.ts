export const SITE_NAME = "Speed Coffee";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.speedcoffee.shop";

export const SITE_DESCRIPTION_CS =
  "Speed Coffee — specialty káva, matcha a mobilní coffee van v Brně. Obchod, akce, rezervace coffee vanu na festivaly a firemní události.";

export const SITE_DESCRIPTION_EN =
  "Speed Coffee — specialty coffee, matcha and a mobile coffee van in Brno. Shop, events, and coffee van bookings for festivals and corporate events.";

export const DEFAULT_OG_IMAGE = "/placeholder.jpg";

export const BUSINESS = {
  name: SITE_NAME,
  legalName: "Michaela Sedláková",
  email: "orders@speedcoffee.shop",
  phone: "+420605295099",
  instagram: "https://www.instagram.com/speedcoffeehouse",
  address: {
    street: "Kounicova 271/13",
    city: "Brno",
    region: "Jihomoravský kraj",
    postalCode: "602 00",
    country: "CZ",
  },
  registeredAddress:
    "Špitálka 547/5a, Zábrdovice, Brno, Jihomoravský kraj",
  openingHours: [
    {
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "19:00",
    },
    {
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "10:00",
      closes: "19:00",
    },
  ],
} as const;

export const INDEXABLE_ROUTES = [
  "/",
  "/shop",
  "/events",
  "/contact",
  "/form",
  "/cookies",
] as const;
