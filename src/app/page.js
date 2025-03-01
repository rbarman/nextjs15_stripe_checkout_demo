'use client';

export default function Home() {
  const handlePurchase = async () => {
    try {
      // 1) Create a Stripe Checkout Session
      const response = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // Stripe Product Price ID
          // find or create a product and price in Stripe Dashboard (https://dashboard.stripe.com/)
          priceId: 'price_1QwwYV046dhYqJ0wYIorNn3x',
        }),
      });
      if (!response.ok) {
        throw new Error(`Server Error: ${response.status}`);
      }

      // 2) Redirect to Stripe Checkout Page
      const { url } = await response.json();
      window.location.href = url;
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold mb-4">Programming 101</h1>
          
          <div className="flex gap-6 mb-6">
            <div className="w-1/3">
              <img 
                src="/book-placeholder.jpg" 
                alt="Book Cover"
                className="w-full rounded-lg shadow"
              />
            </div>
            
            <div className="w-2/3">
              <p className="text-gray-600 mb-4">
                Master the fundamentals of programming with this comprehensive guide.
                Perfect for beginners and intermediate developers looking to strengthen
                their core programming concepts.
              </p>
              
              <div className="mb-4">
                <span className="text-2xl font-bold">$29.99</span>
              </div>
              
              <button 
                onClick={handlePurchase}
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Purchase Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
