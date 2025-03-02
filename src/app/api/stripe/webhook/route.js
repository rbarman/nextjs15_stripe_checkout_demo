import { NextResponse } from 'next/server';
import { headers } from 'next/headers'
import { stripe } from '@/lib/stripe';

export async function POST(request) {
    
    try {
        const body = await request.text();
        const headersList = await headers();
        const signature = headersList.get('stripe-signature');

        if (!process.env.STRIPE_WEBHOOK_SECRET) {
            throw new Error('STRIPE_WEBHOOK_SECRET is not defined');
        }

        const event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET);
        // All types of events: https://docs.stripe.com/api/events
        // The Checkout Fullfillment docs recommend to listen for checkout.session.completed and checkout.session.async_payment_succeeded for a successful payment
        // (https://docs.stripe.com/checkout/fulfillment?payment-ui=stripe-hosted#create-payment-event-handler)
        if (event.type === 'checkout.session.completed' || event.type === 'checkout.session.async_payment_succeeded') {
            console.log('Payment successful:', event);
        }
        return NextResponse.json({ received: true }, { status: 200 });

    } catch (err) {
        console.error(`Webhook Error: ${err.message}`);
        return NextResponse.json({ error: err.message }, { status: 400 });
    }
}