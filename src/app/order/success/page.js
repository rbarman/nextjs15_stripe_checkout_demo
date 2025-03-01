import { stripe } from '@/lib/stripe';

export default async function SuccessPage({ searchParams }) {
  
  const params = await searchParams; 
  const { session_id } = params;
  // docs: https://docs.stripe.com/api/checkout/sessions/retrieve
  const session = await stripe.checkout.sessions.retrieve(session_id);

  // Verify payment status
  // docs: https://docs.stripe.com/api/checkout/sessions/object
  if (session.payment_status !== 'paid') {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Payment Processing</h1>
        <p className="mb-8">Your payment is still being processed. Please wait a moment.</p>
      </div>
    );
  }
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-3xl font-bold text-green-600 mb-4">Payment Successful</h1>
      <p className="mb-8">Your order has been successfully placed.</p>
      {/* <p className="mb-8">Order ID: {session_id}</p> */}
    </div>
  );
}