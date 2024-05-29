import React, { useEffect, useRef } from "react";
import "asciinema-player/dist/bundle/asciinema-player.css";
import { create } from "asciinema-player";

const AsciinemaPlayer = ({ src, ...props }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    if (playerRef.current) {
      create(src, playerRef.current, props);
    }
  }, [src, props]);

  return <div ref={playerRef}></div>;
};

export default function ToolsForDevs() {
  return (
    <div className="p-24">
      <h2 className="mb-4 text-[4rem] text-center text-white font-semibold tracking-tight">
        Tools for developers
      </h2>
      <div className="grid grid-cols-2">
        <div className="flex flex-col max-w-xl">
          <div className="inline-flex flex-col gap-3 p-8 rounded-2xl">
            <h3 className="font-manrope text-white leading-tight">
              Composable Frontend
            </h3>
            <p>Quickly generate NextJS storefronts with our ElasticPath CLI</p>
          </div>
          <div className="inline-flex flex-col gap-3 p-8 rounded-2xl">
            <h3 className="font-manrope text-white leading-tight">
              React Hooks
            </h3>
            <p>Friendly hooks for our APIs for React applications.</p>
          </div>
          <div className="inline-flex flex-col gap-3 p-8 rounded-2xl">
            <h3 className="font-manrope text-white leading-tight">
              JavaScript SDK
            </h3>
            <p>Access our APIs through our JavaScript SDKs</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="bg-black rounded-t p-4 flex items-center justify-between w-full">
            <div className="flex gap-2 mr-auto flex-1">
              <i className="size-4 rounded-full bg-red-500 hover:bg-red-600 block"></i>
              <i className="size-4 rounded-full bg-yellow-500 hover:bg-yellow-600 block"></i>
              <i className="size-4 rounded-full bg-green-500 hover:bg-green-600 block"></i>
            </div>
            <span className="font-medium text-sm mx-auto">
              Composable Frontend
            </span>
            <span className="flex-1"></span>
          </div>
          <AsciinemaPlayer src="/assets/homepage/642538.cast" autoPlay loop />
        </div>
      </div>
    </div>
  );
}
