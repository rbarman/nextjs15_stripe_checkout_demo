Next JS 15 template project with Stripe Checkout Forms for internal micro saas

![demo](./demo.gif)

## Setup

Install dependencies:

- `npm install stripe @stripe/stripe-js`
- install [stripe cli](https://docs.stripe.com/cli) to run Stripe Webhooks locally

Stripe Store Setup:
- create a new product in Stripe
- note the price product id
- set the 

Local Webhook Setup:

- `stripe login`
- `stripe listen --forward-to http://localhost:3000/api/stripe/webhook`
- use `--events` for specific events:
    - `stripe listen --forward-to http://localhost:3000/api/stripe/webhook --events checkout.session.completed`
- update `STRIPE_WEBHOOK_SECRET` in `.env.local`

## Resources
- Stripe Checkout Forms: https://stripe.com/payments/checkout
- Stripe Checkout Forms docs: https://docs.stripe.com/checkout/quickstart
- Stripe Webhooks: https://docs.stripe.com/webhooks
- Stripe Test Cards: https://docs.stripe.com/testing#cards

----

<details>
<summary>Next JS Boilerplate readme content:</summary>

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
</details>