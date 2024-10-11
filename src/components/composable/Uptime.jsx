import { CloudIcon } from "@heroicons/react/24/outline";
import React from "react";

const Uptime = () => {
  return (
    <div className="mt-0 mb-0">
      <div className="mx-auto flex flex-col md:flex-row items-center max-w-7xl gap-6 justify-between">
        <div className="mt-10">
          <h2 className="font-extrabold text-3xl mb-4 text-green-700">Unprecedented Uptime - 99.999%</h2>
          <p className="text-gray-700">
            100% Update during Black Friday and all major holiday sales events. Experience best-in-class resiliency that keeps your commerce operations running smoothly, even during peak traffic or unexpected disruptions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Uptime;
