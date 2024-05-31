import React from "react";
import { Icons } from "./Icons";

export default function Composer() {
  return (
    <div className="py-24 px-40 grid mx-auto grid-cols-2">
      <div className="flex items-center justify-center">
        <Icons />
      </div>
      <div className="flex flex-col justify-center text-left pl-20 py-5">
        <p className="font-mono text-sm m-0 mb-0.5 p-0 text-left">
          ELASTIC PATH COMPOSER
        </p>
        <h2 className="mb-4 text-5xl text-white font-semibold tracking-tight leading-[3.6rem]">
          Quickly connect <br /> commerce data to every <br /> tool in your arsenal
        </h2>
        <p className="text-sm m-0 p-0 text-left leading-[1.7rem]">
          Composer comes preconfigured with dozens of instant-on integrations.
          <br />
          Need more? Quickly customize how data flows between tools in your stack
        </p>
        <div className="flex text-black gap-8 mt-8">
          <a
            href=""
            className="bg-transparent tracking-tight rounded-full ring-2 ring-gray-300 py-3 px-8 hover:ring-green-500 transition-all border-0 text-base font-semibold hover:no-underline text-white hover:text-white"
          >
            30+ Instant-on integrations
          </a>
          <a
            href=""
            className="bg-transparent tracking-tight rounded-full ring-2 ring-gray-300 py-3 px-8 hover:ring-green-500 transition-all border-0 text-base font-semibold hover:no-underline text-white hover:text-white"
          >
            Or build your own
          </a>
        </div>
      </div>
    </div>
  );
}
