import React from "react";
import { Icons } from "./Icons";

export default function Composer() {
  return (
    <div className="px-10 pb-12 lg:py-24 lg:px-40 flex flex-col lg:grid mx-auto grid-cols-2">
      <div className="flex items-center min-h-80 justify-center w-full">
        <Icons />
      </div>
      <div className="flex flex-col justify-center text-center lg:text-left lg:pl-20 py-5">
        <p className="font-mono text-sm m-0 mb-0.5 p-0">
          ELASTIC PATH COMPOSER
        </p>
        <h2 className="mb-4 text-3xl lg:text-5xl  dark:text-white dark:drop-shadow-md font-semibold tracking-tight lg:leading-[3.6rem]">
          Quickly connect <br /> commerce data to every tool in your arsenal
        </h2>
        <p className="text-base m-0 px-0 my-4 leading-[1.7rem]">
          Composer comes preconfigured with dozens of instant-on integrations.
          Need more? Quickly customize how data flows between tools in your
          stack
        </p>
        <div className="flex flex-col 2xl:flex-row items-center text-black gap-4 2xl:gap-8 mt-8">
          <a
            href="/docs/composer/integration-hub/integrations-hub"
            className="bg-transparent text-center tracking-tight rounded-full ring-2 ring-gray-300 lg:py-3 lg:px-8 py-1.5 px-4 hover:ring-green-500 transition-all border-0 lg:text-base text-sm font-semibold hover:no-underline text-black dark:text-white hover:text-black dark:hover:text-white"
          >
            30+ Instant-on integrations
          </a>
          <a
            href="/docs/composer/builder/getting-started/build-first-integration"
            className="bg-transparent text-center tracking-tight rounded-full ring-2 ring-gray-300 lg:py-3 lg:px-8 py-1.5 px-4 hover:ring-green-500 transition-all border-0 lg:text-base text-sm font-semibold hover:no-underline text-black dark:text-white hover:text-black dark:hover:text-white"
          >
            Or build your own
          </a>
        </div>
      </div>
    </div>
  );
}
