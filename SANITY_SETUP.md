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

## 3. Admin panel (embedded Studio — “Shopify-like” back office)

**Sanity Studio is your admin:** one place to manage **products**, **orders**, and anything else you model in Sanity. It is not Shopify (no built-in payments dashboard, shipping labels, or app store), but it covers **catalog + order records** tied to this site.

### Option A — Same app as the storefront (recommended)

1. Run the Next.js app: `npm run dev`
2. Open **`http://localhost:3000/studio`**
3. Sign in with your **Sanity account** (only people invited to the project can edit)

The Studio is embedded at `/studio` (`src/app/studio/[[...tool]]/`). The desk shows **Products** and **Orders** first (`src/sanity/adminStructure.ts`).

After you deploy, add your production URL to **CORS** in [sanity.io/manage](https://www.sanity.io/manage) → your project → API → CORS origins (e.g. `https://your-domain.com`).

### Option B — Standalone Studio (CLI)

From the project root:

```bash
npm run studio
```

(`sanity dev` with `.env.local`.) With `basePath: '/studio'` in `sanity.config.ts`, open **`http://localhost:3333/studio`** (not the site root).

If the CLI can’t find your project, set env vars in the shell or use a root `.env` file, since the Sanity CLI may not load `.env.local`.

Schema lives under `schemas/`; the storefront reads products (and order lookup reads orders) via the Sanity API.

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

## 6. Orders and “Track order” (`/orders`)

Order documents are defined in `schemas/order.ts` (same Studio as products). Customers can look up an order at **`/orders`** using:

- **Order number** (e.g. `SC-1001`) – must match the `orderNumber` field in Sanity.
- **Email** – must match `customerEmail` on that order (case-insensitive).

The lookup runs only on the **server** (`/api/order-lookup`) so your GROQ query is not exposed in the browser.

**Creating orders today:** add **Order** documents manually in Studio (or automate later with a Stripe webhook). Fill in order number, status, customer email, shipping address, line items (product references), and totals.

**If the dataset is private** (recommended when storing customer data), create a read token in [sanity.io/manage](https://www.sanity.io/manage) → Project → API → Tokens, then add to `.env.local` (server-only, never `NEXT_PUBLIC_`):

```env
SANITY_API_READ_TOKEN=your_read_token
```

Restart Next.js after adding it. Public datasets can work without a token for server-side reads, but locking the dataset and using a token is safer.

## 7. Payments and “full Shopify”

**Stripe** remains where you reconcile cards, refunds, and webhooks. **Sanity** is the operational admin for **what you sell** and **order status / details** you choose to store. For analytics, tax, and multi-channel retail at Shopify’s level, you would either adopt a platform like Shopify or add more integrations (Stripe Dashboard, custom dashboards, etc.).

Further reading: [Embedding the Studio](https://www.sanity.io/docs/embedding-the-studio).
