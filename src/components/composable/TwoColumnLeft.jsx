import React from 'react';

const TwoColumnRight = () => {
  return (
    <div className="mt-0 mb-0">
      <div className="mx-auto flex flex-col md:flex-row items-center max-w-7xl gap-6 justify-between">
        <div className="md:w-7/12 mt-0">
          <h2 className="font-extrabold text-3xl mb-4">Escape Rigid Commerce and Empower Your Merchandisers</h2>
          <p className="text-gray-700">
            Traditional commerce platforms confine merchandisers with rigid product and catalog management, stifling creativity and hindering the ability to craft truly unique shopping experiences.
          </p>
          <p className="font-bold">
            Elastic Path breaks the mold.
          </p>
          <p>
            We've reimagined commerce at the core, empowering your merchandisers with complete and unfettered flexibility. With Elastic Path, your merchandisers gain the flexibility to build the exact product experiences they envision, driving engagement, conversions, and customer loyalty.
          </p>
        </div>
        <div className="md:w-5/12 mb-0">
          <img
            src="https://elastic-path.transforms.svdcdn.com/production/images/Stylized-Product-Page-Images/Fendi-PDP.png?w=900&h=900&q=90&fm=webp&fit=crop&dm=1691707283&s=d50937651a7c5a0aca64f0b9b009162b"
            alt="Placeholder"
            className="max-h-[500px] max-w-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default TwoColumnRight;
