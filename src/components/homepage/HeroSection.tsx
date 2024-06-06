import React from "react";
import {
  CharlotteTilbury,
  Pokemon,
  Remarkable,
  SerenaLily,
  United,
} from "./HeroBrandLogos";
export default function HeroSection() {
  return (
    <section className="px-4 py-28 md:py-44 text-center leading-tight tracking-tight">
      <div className="flex flex-col items-center justify-between dark:text-white">
        <h1 className="mb-4 text-6xl text-left md:text-center md:text-[6.5rem] font-bold dark:drop-shadow-lg">
          Enterprise-ready commerce
        </h1>
        <p className="text-base text-justify md:text-center md:text-[1.75rem] font-light max-w-5xl">
          Launch faster, solve complex problems, and build world-class
          experiences with our suite of interconnected{" "}
          <a
            href=""
            className="dark:text-white text-black font-bold decoration-2 underline decoration-green-500"
          >
            e-Commerce Apps
          </a>
          ,{" "}
          <a
            href=""
            className="dark:text-white text-black font-bold decoration-2 underline decoration-green-500"
          >
            APIs{" "}
          </a>
          , &{" "}
          <a
            href=""
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
          <Remarkable className="max-w-full invert dark:invert-0" />
          <CharlotteTilbury className="hidden md:block max-w-full invert dark:invert-0" />
        </div>
      </div>
    </section>
  );
}
