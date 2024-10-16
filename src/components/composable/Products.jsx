import React from 'react';

const Products = () => {
  const capabilities = [
    { title: 'Cart & Checkout', description: 'Integrate our fast cart and checkout with your e-commerce stack, regardless of platform, payment provider, or catalog complexity. Boost conversions and delight customers without the need for a costly replatform.', cta: '' },
    { title: 'Product Merchandising', description: 'Curate shopping journeys that truly resonate with your customers. Design captivating product pages, craft compelling narratives and merchandise your products together, however you choose.', cta: '' },
    { title: 'Automated Re-Orders', description: 'Turn everyday purchases into lasting customer relationships. Automated reorders build loyalty and drive recurring revenue. Create "subscribe and save" offers, personalized schedules and curated boxes with ease.', cta: '' },
    { title: 'Membership Subscriptions', description: 'Unlock a new revenue stream and build lasting customer loyalty with memberships. Create exclusive tiers offering premium content, special deals, and unique product experiences. Turn one-time buyers into loyal members.', cta: '' },
    { title: 'Custom APIs & DBaaS', description: 'Coordinating data between systems to use on your commerce site is difficult. Create and launch custom APIs with unparalleled flexibility. Leave database management to us with our hosted service and accelerate development time.', cta: '' },
    { title: 'Bundles & Configurations', description: 'Create fixed or dynamic bundles customized to your merchandisers\' needs. Provide configurable products and assembly options, simplifying the delivery of complex or custom-built items with unmatched flexibility.', cta: ''},
    { title: 'Complex Catalogs', description: 'Design catalogs that match your complex products and merchandising needs perfectly. Organize with unlimited categories for easy navigation and precise searches. Combine with Price Books for a tailored experience and specialized pricing.', cta: '' },
    { title: 'Complex Promotions', description: 'Our rules-based promotion service empowers you to craft precisely targeted offers, from simple discounts to complex tiered rewards and beyond. Drive engagement, boost average order value, and incentivize desired behaviors with unparalleled promotional power.', cta: '' },
    { title: 'Pricing Management', description: 'Pair any price book with any catalog(s), enabling limitless possibilities for omnichannel experiences, targeted flash sales, and tiered pricing. Easily manage complex bundle pricing and adjust strategies dynamically to boost revenue and drive conversions.', cta: '' },
    { title: 'Orders & Inventory', description: 'Take control over your inventory and offer unparalleled flexibility to your customers.  Maintain precise stock visibility across all locations and empower shoppers with convenient options like "buy online, pick up in store" & "click and collect". Elevate customer satisfaction with our powerful inventory management solution.', cta: '' },
    { title: 'B2B2C Management', description: 'Expand your market presence and effortlessly manage complex distribution networks with our powerful B2B2C solution. Whether you work with resellers, franchises, or need to segment data by country, our platform provides the flexibility and control you need.  Empower your partners to sell through your Elastic Path instance while maintaining complete control over their own data and branding.  ', cta: '' },
    { title: 'Payment Gateways', description: 'Choose from ten out-of-the-box payment gateways or manual payment options to customize your checkout and optimize transaction flow. Effortlessly integrate your preferred providers which boosts conversions and improves customer satisfaction.', cta: '' },
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
        <div className="grid grid-cols-3 gap-6 content-center">
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
