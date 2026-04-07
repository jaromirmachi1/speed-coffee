# Speed Coffee — Vercel Launch Checklist

This is the exact go-live sequence for your e-shop (Next.js + Stripe + Sanity).

## 1) Vercel project setup

- Import repo `jaromirmachi1/speed-coffee` into Vercel.
- Set **Production Branch** to `main`.
- Framework should auto-detect as **Next.js**.
- Run first deploy, then add env vars, then redeploy.

## 2) Environment variables (Vercel)

In **Project -> Settings -> Environment Variables**, add:

### Core

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `SANITY_API_READ_TOKEN` (recommended if dataset is private)
- `SANITY_API_WRITE_TOKEN` (required for order creation via webhook/manual API)

### Stripe

- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET` (add after webhook endpoint is created)

### Email

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `CONTACT_FROM` (recommended, e.g. `orders@yourdomain.com`)
- `CONTACT_TO` (for rental inquiry notifications)

Set at least for **Production**.  
After saving env vars, **redeploy**.

## 3) Sanity production setup

In Sanity Manage:

- Invite admin users who should access Studio.
- Add CORS origins:
  - `https://yourdomain.com`
  - `https://www.yourdomain.com` (if used)
- Ensure token permissions:
  - read token: read access
  - write token: write/create/update access for orders

Validate Studio:

- `https://yourdomain.com/studio`

## 4) Stripe webhook setup (critical)

In Stripe Dashboard (start in **test mode**):

- Developers -> Webhooks -> **Add endpoint**
- Endpoint URL:
  - `https://yourdomain.com/api/stripe/webhook`
- Subscribe event:
  - `payment_intent.succeeded`
- Save endpoint, copy signing secret (`whsec_...`)
- Put it into Vercel as `STRIPE_WEBHOOK_SECRET`
- Redeploy again.

## 5) Domain + DNS

In Vercel:

- Add your custom domain.
- Set DNS records shown by Vercel.
- Ensure HTTPS is active.
- Configure canonical domain (root or www).

## 6) End-to-end testing (before launch)

Use Stripe test card: `4242 4242 4242 4242`

### Card payment path

1. Add product to cart.
2. Go to checkout shipping page.
3. Fill customer + address.
4. Pay by card.
5. Confirm success page.
6. Verify:
   - order exists in Sanity (`/studio` -> Orders),
   - customer/address/items/total are saved,
   - confirmation email sent,
   - `/orders` lookup works with order number + email.

### Non-card path

1. Choose `delivery` or `bank`.
2. Submit order.
3. Verify pending order appears in Sanity.
4. Verify confirmation email is sent.

## 7) Final production safety checks

- Switch Stripe to **live keys** for production.
- Verify production webhook endpoint uses live mode.
- Use real SMTP sender domain to reduce spam folder risk.
- Keep only required Sanity admins.
- Ensure legal pages are present and linked:
  - Terms
  - Privacy
  - Returns/Refund
  - Shipping

## 8) Daily admin workflow (Shopify-style)

### Daily

- Open `/studio` -> Orders (newest first)
- Move statuses: `pending` -> `paid` -> `fulfilled`
- Handle refunds in Stripe and mirror status in Sanity

### Weekly

- Check Stripe webhook delivery logs (failed/retried events)
- Run one full checkout test
- Verify email delivery health

## 9) Copy-paste env template

```env
# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=
SANITY_API_WRITE_TOKEN=

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=

# Email
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
CONTACT_FROM=
CONTACT_TO=
```

---

If anything fails during launch, first inspect:

1. Vercel Function logs (`/api/stripe/webhook`, `/api/orders/manual`)
2. Stripe webhook delivery logs
3. Sanity token permissions
4. SMTP credentials and sender policy
