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
    <section className="px-4 py-44 text-center leading-tight tracking-tight">
      <div className="flex flex-col items-center justify-between dark:text-white">
        <h1 className="mb-4 text-[6.5rem] font-bold drop-shadow-lg">
          Enterprise-ready commerce
        </h1>
        <p className="text-[1.75rem] font-light max-w-5xl text-center">
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
        <div className="flex items-center justify-center gap-12">
          <SerenaLily />
          <United />
          <Pokemon />
          <Remarkable />
          <CharlotteTilbury />
        </div>
      </div>
    </section>
  );
}
