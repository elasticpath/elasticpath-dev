import React from 'react';
import { BoltIcon, PuzzlePieceIcon, CircleStackIcon, ShieldCheckIcon, CodeBracketIcon, LockClosedIcon, CloudIcon } from '@heroicons/react/24/outline';

const HeadlessCommerceCapabilities = () => {
  const capabilities = [
    { icon: <BoltIcon className="h-10 w-10 mb-2 mx-auto" />, title: 'Unmatched Agility', description: 'Our versionless platform eliminates upgrade headaches and allows for continuous innovation. Adapt to market changes swiftly and effortlessly with seamless updates and new feature releases.', cta: '' },
    { icon: <PuzzlePieceIcon className="h-10 w-10 mb-2 mx-auto" />, title: 'Limitless Extensibility', description: 'Extend your commerce capabilities without limits. Integrate any third-party system, customize every aspect of your storefront, and build unique shopping experiences that set you apart.', cta: '' },
    { icon: <ShieldCheckIcon className="h-10 w-10 mb-2 mx-auto" />, title: 'Rock-Solid Foundation', description: 'Built on a cloud-native infrastructure, Elastic Path delivers unmatched scalability, reliability, and performance. Scale your business with confidence, knowing your platform can handle peak demand.', cta: '' },
  ];

  return (
    <div className="p-8 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-3 gap-6 content-center">
          {capabilities.map((capability, index) => (
            <div key={index} className="p-4 rounded-lg flex flex-col items-center text-center">
              {capability.icon}
              <h2 className="font-bold mb-2 text-center">{capability.title}</h2>
              <p className="mb-4 text-center">{capability.description}</p>
              {capability.cta && (<button className="border-2 border-gray-900 border-solid text-white py-2 px-4 rounded-md bg-transparent hover:bg-green-500 hover:text-white transition duration-300">{capability.cta}</button>)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeadlessCommerceCapabilities;
