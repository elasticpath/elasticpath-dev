import React from 'react';
import { BoltIcon, PuzzlePieceIcon, CircleStackIcon, ShieldCheckIcon, CodeBracketIcon, LockClosedIcon, CloudIcon } from '@heroicons/react/24/outline';

const DeveloperGrid = () => {
  const capabilities = [
    { icon: <CircleStackIcon className="h-10 w-10 mb-2 mx-auto" />, title: 'Data Freedom', description: 'Leverage a flexible data model to gain complete control over your commerce data. Connect any data source, create custom data structures, utilize our Custom API builder / Database-as-a-Service (DBaaS), and unlock powerful insights to drive business growth.', cta: '' },
    { icon: <CodeBracketIcon className="h-10 w-10 mb-2 mx-auto" />, title: 'Developer-Friendly', description: 'Empower your development team with tech-agnostic tools. Choose the best technologies for your needs and accelerate time-to-market with our low-code/no-code framework. Used our JS-SDK, Next.js App and Command Line Interface (CLI) to get up and running quickly.', cta: '' },
    { icon: <LockClosedIcon className="h-10 w-10 mb-2 mx-auto" />, title: 'Unwavering Security', description: 'Rest easy with enterprise-grade security features built into the core of our platform. Protect your business and your customers with robust security protocols and industry-leading compliance certifications including GDPR Compliance, SOC2 and HIPPA Certification.', cta: '' },
  ];

  return (
    <div className="p-8 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
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

export default DeveloperGrid;
