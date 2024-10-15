import React from 'react';
import { CheckCircleIcon, CubeIcon, ChartBarIcon, GlobeAltIcon } from '@heroicons/react/24/solid';
import CountUp from 'react-countup';

const StatsComponent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center p-10 justfy-center items-center">
      {/* First Column */}
      <div className="flex flex-col items-center">
        <CheckCircleIcon className="h-12 w-12 text-green-700 mb-4" />
        <h2 className="text-4xl font-bold">
          <CountUp end={99.999} decimals={3} duration={6} />
          %
        </h2>
        <p className="text-lg mt-2">Unprecedented Uptime</p>
      </div>

      {/* Second Column */}
      <div className="flex flex-col items-center">
        <CubeIcon className="h-12 w-12  mb-4 text-green-700" />
        <h2 className="text-4xl font-bold">
          <CountUp end={3} duration={10} />
        </h2>
        <p className="text-lg mt-0">Months to Launch</p>
      </div>

      {/* Third Column */}
      <div className="flex flex-col items-center">
        <ChartBarIcon className="h-12 w-12 text-green-700 mb-4" />
        <h2 className="text-4xl font-bold">
          <CountUp end={40} duration={10} />
          %
        </h2>
        <p className="text-lg mt-2">TCO Reduction</p>
      </div>

      {/* Fourth Column */}
      <div className="flex flex-col items-center">
        <GlobeAltIcon className="h-12 w-12 text-green-700 mb-4" />
        <h2 className="text-4xl font-bold">
          $<CountUp end={1200000000000} duration={10} separator="," />
        </h2>
        <p className="text-lg mt-2">Transactions Processed</p>
      </div>
    </div>
  );
};

export default StatsComponent;
