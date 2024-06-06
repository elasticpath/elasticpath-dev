import React from "react";
import { Icons } from "./Icons";

export default function Composer() {
  return (
    <div className="px-10 pb-12 md:py-24 md:px-40 flex flex-col md:grid mx-auto grid-cols-2">
      <div className="flex items-center h-80 md:h-auto justify-center w-full">
        <Icons />
      </div>
      <div className="flex flex-col justify-center text-center md:text-left md:pl-20 py-5">
        <p className="font-mono text-sm m-0 mb-0.5 p-0">
          ELASTIC PATH COMPOSER
        </p>
        <h2 className="mb-4 text-3xl md:text-5xl  dark:text-white dark:drop-shadow-md font-semibold tracking-tight md:leading-[3.6rem]">
          Quickly connect <br /> commerce data to every tool in your arsenal
        </h2>
        <p className="text-base m-0 px-0 my-4 text-left leading-[1.7rem]">
          Composer comes preconfigured with dozens of instant-on integrations.
          <br />
          Need more? Quickly customize how data flows between tools in your
          stack
        </p>
        <div className="flex flex-col md:flex-row items-center text-black gap-4 md:gap-8 mt-8">
          <a
            href=""
            className="bg-transparent tracking-tight rounded-full ring-2 ring-gray-300 md:py-3 md:px-8 py-1.5 px-4 hover:ring-green-500 transition-all border-0 md:text-base text-sm font-semibold hover:no-underline text-black dark:text-white hover:text-black dark:hover:text-white"
          >
            30+ Instant-on integrations
          </a>
          <a
            href=""
            className="bg-transparent tracking-tight rounded-full ring-2 ring-gray-300 md:py-3 md:px-8 py-1.5 px-4 hover:ring-green-500 transition-all border-0 md:text-base text-sm font-semibold hover:no-underline text-black dark:text-white hover:text-black dark:hover:text-white"
          >
            Or build your own
          </a>
        </div>
      </div>
    </div>
  );
}
