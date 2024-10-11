import React from 'react';

const Architecture = () => {
  return (
    <div className="mt-0 mb-0">
      <div className="mx-auto flex flex-col md:flex-row items-center max-w-7xl gap-6 justify-between">
        <div className="md:w-6/12 mt-0">
          <h2 className="font-extrabold text-3xl mb-4">Composable, API-First, Headless Architecture</h2>
          <p className="text-gray-700">
            Flexible. Secure. Performant. Open.  Our composable architecture gives you the control and confidence to build exceptional experiences.
          </p>
        </div>
        <div className="md:w-6/12 mb-0">
          <img
            src="https://elastic-path.transforms.svdcdn.com/production/images/Composable-Commerce_1494x-1088_W-Padding.png?w=1536&h=1140&q=90&fm=webp&fit=crop&dm=1692376726&s=1907bf37b600776ce1c047f2725d5649"
            alt="Placeholder"
            className="max-h-[500px] max-w-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Architecture;
