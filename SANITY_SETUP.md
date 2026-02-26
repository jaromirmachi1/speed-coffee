# Sanity CMS setup (e-shop)

The e-shop can use **Sanity** as the CMS for products. When `NEXT_PUBLIC_SANITY_PROJECT_ID` is set, the shop and checkout load products from Sanity instead of Supabase.

## 1. Create a Sanity project

1. Go to [sanity.io/manage](https://www.sanity.io/manage) and create a project (or use an existing one).
2. Note your **Project ID** and choose a **Dataset** (e.g. `production`).

## 2. Environment variables

In `.env.local` add:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

Restart the Next.js dev server after changing env vars.

## 3. Run Sanity Studio to manage content

From the project root:

```bash
npx sanity dev
```

If the CLI can’t find your project, set the env vars for the shell (e.g. `export NEXT_PUBLIC_SANITY_PROJECT_ID=...`) or put them in a `.env` file in the project root, since the Sanity CLI may not load `.env.local`.

This starts Sanity Studio (usually at `http://localhost:3333`). There you can:

- Create and edit **Product** documents.
- Set titles and descriptions in EN and CZ, price, currency, image, alt text, display order, and active flag.

Schema is in `schemas/product.ts`; the app uses it for the GROQ query and for Studio.

## 4. Product schema (reference)

Products in Sanity have:

- **Title / Subtitle / Description** – EN and CZ.
- **Price** – number; **Currency** – EUR or CZK.
- **Image** – Sanity image (hotspot supported).
- **Alt text** – EN and CZ for the image.
- **Active** – if unchecked, the product is excluded from the shop.
- **Display order** – lower numbers appear first.

The shop shows only documents with **Active** checked, ordered by **Display order**.

## 5. Switching back to Supabase

Remove or comment out the Sanity env vars in `.env.local`. The app will fall back to Supabase for products.

## Optional: embed Studio in the app

To serve Sanity Studio under a route (e.g. `/studio`), you can add a Next.js route that renders the Studio. See [Sanity docs – Embedding the Studio](https://www.sanity.io/docs/embedding-the-studio) and the `next-sanity` package for the recommended setup.
