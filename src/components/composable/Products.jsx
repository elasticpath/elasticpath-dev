import React from 'react';

const Products = () => {
  const capabilities = [
    { title: 'Cart & Checkout', description: 'Integrate our fast cart and checkout with your e-commerce stack, regardless of platform, payment provider, or catalog complexity. Boost conversions and delight customers without the need for a costly replatform.', cta: '' },
    { title: 'Product Merchandising', description: 'Curate shopping journeys that truly resonate with your customers. Design captivating product pages, craft compelling narratives and merchandise your products together, however you choose.', cta: '' },
    { title: 'Automated Re-Orders', description: '"Turn everyday purchases into lasting customer relationships. Use subscriptions and automated reorders to build loyalty and drive recurring revenue with ease. Create \'subscribe and save\' offers, personalized schedules and curated boxes with ease.', cta: '' },
    { title: 'Membership Subscriptions', description: 'Unlock a new revenue stream and build lasting customer loyalty with our flexible membership platform. Create exclusive tiers offering premium content, special deals, and unique product experiences. Turn one-time buyers into loyal members.', cta: '' },
    { title: 'Custom APIs & DBaaS', description: 'Design and deploy any API with unmatched flexibility. Skip database management, our hosted service takes care of it. Speed up development and scale effortlessly.', cta: '' },
    { title: 'Configurable Bundles', description: 'Build fixed or dynamic bundles tailored to customer needs, and offer full support for configurable products and assembly options to deliver exactly what you envision.', cta: ''},
    { title: 'Complex Catalogs', description: 'Design catalogs that match your complex products perfectly. Organize with unlimited categories for easy navigation and precise searches. Combine with Price Books for a tailored experience.', cta: '' },
    { title: 'Complex Promotions', description: 'Our rules-based promotion service empowers you to craft precisely targeted offers, from simple discounts to complex tiered rewards and beyond. Drive engagement, boost average order value, and incentivize desired behaviors with unparalleled promotional power.', cta: '' },
    { title: 'Pricing Management', description: 'Our flexible pricing solution lets you pair any price book with any catalog, enabling limitless possibilities for omnichannel experiences, targeted flash sales, and tiered pricing. Easily manage complex bundle pricing and adjust strategies dynamically to boost revenue and drive conversions.', cta: '' },
    { title: 'Orders & Inventory', description: 'You have the orders, get em shipped', cta: '' },
    { title: 'Account Management', description: 'Get the acount, get the sales', cta: '' },
    { title: 'B2B2C Management', description: 'Organizations on steriods', cta: '' },
    { title: 'Payment Gateways', description: 'SO many gateways', cta: '' },
  ];

  return (
    <div className="p-8 text-gray-900 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold mb-4 text-center">Meet the APIs That Power Commerce Innovation</h1>
        <p className="text-md mb-8 text-center">
          Our modular approach empowers you to create unique and engaging shopping journeys across all channels, enhancing customer experiences and drive business growth. With Elastic Path, you can accelerate your time-to-market, adapt to changing demands with ease, and future-proof your commerce solution.
        </p>
        <p className={"text-md mb-8 text-center"}>

        </p>
        <div className="grid grid-cols-4 gap-6 content-center">
          {capabilities.map((capability, index) => (
            <div key={index} className="p-4 rounded-lg flex flex-col items-center text-center">
              <h1 className="text-xl font-bold hover:underline hover:underline-offset-4 hover:text-green-700 relative group cursor-pointer">
                {capability.title}
                <span
                  className="absolute opacity-0 text-green-700 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-4">
                  &rarr;
                </span>
              </h1>
              <p className="mb-4 text-center text-md">{capability.description}</p>
              {capability.cta && (<button
                className="border-2 border-gray-900 border-solid text-white py-2 px-4 rounded-md bg-transparent hover:bg-green-500 hover:text-white transition duration-300">{capability.cta}</button>)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
