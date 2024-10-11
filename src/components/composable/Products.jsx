import React from 'react';

const Products = () => {
  const capabilities = [
    { title: 'Cart & Checkout', description: 'Start with the cart', cta: '' },
    { title: 'Product Merchandising', description: 'Merchandise with power', cta: '' },
    { title: 'Automated Re-Orders', description: 'The Power of Subscriptions', cta: '' },
    { title: 'Custom APIs & DBaaS', description: 'Create anything you want', cta: '' },
    { title: 'Complex Catalogs', description: 'Super Complex', cta: '' },
    { title: 'Complex Promotions', description: 'Rules and all', cta: '' },
    { title: 'Pricing Management', description: 'So much pricing to do', cta: '' },
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
