import React from 'react';

const TwoColumnRight = () => {
  return (
    <div className="mt-0 mb-0">
      <div className="mx-auto flex flex-col md:flex-row items-center max-w-7xl gap-6 justify-between">
        <div className="md:w-5/12">
          <img
            src="https://elastic-path.transforms.svdcdn.com/production/images/Stylized-Product-Page-Images/integrations-hub_2023-08-10-160744_byek.png?w=900&h=900&q=90&fm=webp&fit=crop&dm=1691683664&s=c2ed775b9f4457eaeb22b678a3f27f6e"
            alt="Placeholder"
            className="max-h-[500px] max-w-[500px]"
          />
        </div>
        <div className="md:w-7/12 mt-0">
          <h2 className="font-extrabold text-3xl mb-4">One Platform, Endless Possibilities</h2>
          <p className="text-gray-700">
            Elastic Path is more than just a commerce platform – it's a comprehensive ecosystem designed to empower your business at every level.  From seamless backend integrations to a flexible core and a truly composable frontend, we provide everything you need to create exceptional customer experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TwoColumnRight;
