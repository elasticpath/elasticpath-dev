import React from "react";
import {
  CharlotteTilbury,
  Norgren,
  Pokemon,
  SerenaLily,
  United,
} from "./HeroBrandLogos";
export default function HeroSection() {
  return (
    <section className="px-4 py-28 md:py-44 text-center leading-tight tracking-tight">
      <div className="flex flex-col items-center justify-between dark:text-white">
        <h1 className="mb-4 text-center text-[4.5rem] md:text-[6.5rem] font-bold dark:drop-shadow-lg dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-[#394464] -from-3% via-[#1F8552] via-32% to-[#2BCC7E] to-64%">
          Enterprise-ready commerce
        </h1>
        <p className="text-base text-center md:text-[1.75rem] leading-10 font-light max-w-5xl">
          Launch faster, solve complex problems, and build world-class
          experiences with our suite of interconnected{" "}
          <a
            href="#CommerceApps"
            className="dark:text-white text-black font-bold decoration-2 underline decoration-green-500"
          >
            e-Commerce Apps
          </a>
          ,{" "}
          <a
            href="#APIs"
            className="dark:text-white text-black font-bold decoration-2 underline decoration-green-500"
          >
            APIs{" "}
          </a>
          , &{" "}
          <a
            href="#Tools"
            className="dark:text-white text-black font-bold decoration-2 underline decoration-green-500"
          >
            tools for developers
          </a>
          .
        </p>
        <p className="mt-8">Trusted by these leading brands...</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12">
          <SerenaLily className="max-w-full invert dark:invert-0" />
          <United className="max-w-full invert dark:invert-0" />
          <Pokemon className="max-w-full" />
          <Norgren className="max-w-full invert dark:invert-0" />
          <CharlotteTilbury className="hidden md:block max-w-full invert dark:invert-0" />
        </div>

        <svg
          width="31"
          height="108"
          viewBox="0 0 31 108"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hidden md:block animate-bounce mt-12"
        >
          <path
            d="M15.5 2V105.5M15.5 105.5L29 92M15.5 105.5L2 92"
            stroke="#1FEC90"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
