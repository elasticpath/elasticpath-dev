import React, { useEffect, useRef, useState } from "react";
import "asciinema-player/dist/bundle/asciinema-player.css";
import BrowserOnly from "@docusaurus/core/lib/client/exports/BrowserOnly";
import clsx from "clsx";
import CodeBlock from "@theme/CodeBlock";
import codeSamples from "./apis/code-samples";

const AsciinemaPlayer = ({ src, ...props }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    if (playerRef.current) {
      props.create(src, playerRef.current, props);
    }
  }, [src, props]);

  return <div ref={playerRef}></div>;
};

type ActiveBlockType = "composable-frontend" | "react-hooks" | "sdk";

export default function ToolsForDevs() {
  const [activeBlock, setActiveBlock] = useState<ActiveBlockType>(
    "composable-frontend",
  );

  const Trigger = ({
    heading,
    text,
    reference,
  }: {
    heading: string;
    text: string;
    reference: ActiveBlockType;
  }) => (
    <div
      onClick={() => setActiveBlock(reference)}
      className={clsx(
        "flex w-full flex-col cursor-pointer gap-3 p-8 rounded-2xl dark:text-white transition-all",
        activeBlock === reference && "bg-[#1FEC90] text-black dark:!text-black",
      )}
    >
      <h3 className="font-manrope leading-tight text-xl md:text-2xl">
        {heading}
      </h3>
      <p className="text-sm md:text-base">{text}</p>
    </div>
  );

  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => {
        const { create } = require("asciinema-player");
        return (
          <section
            id="Tools"
            className="flex flex-col py-12 px-20 2xl:py-28 2xl:px-40 gap-10"
          >
            <h2 className="mb-4 text-5xl md:text-[4rem] text-center dark:text-white font-semibold tracking-tight dark:drop-shadow-md">
              Tools for developers
            </h2>
            <div className="flex flex-col 2xl:grid grid-cols-3 gap-20 mx-auto">
              <div className="flex order-2 2xl:order-1 flex-col md:flex-row 2xl:flex-col items-start justify-center col-span-1 mx-auto text-center 2xl:text-left">
                <Trigger
                  heading={"Composable Frontend"}
                  text={
                    "Quickly generate NextJS storefronts with our Elastic Path CLI."
                  }
                  reference={"composable-frontend"}
                />
                <Trigger
                  heading={"React Hooks"}
                  text={"Friendly hooks for our APIs for React applications."}
                  reference={"react-hooks"}
                />
                <Trigger
                  heading={"JavaScript SDK"}
                  text={"Access our APIs through our JavaScript SDKs."}
                  reference={"sdk"}
                />
              </div>
              <div className="max-w-5xl flex order-1 2xl:order-2 flex-col col-span-2 2xl:mx-4">
                {activeBlock === "composable-frontend" && (
                  <div className="shadow-xl 2xl:shadow-2xl">
                    <div className="bg-black rounded-t p-2 2xl:p-4 flex items-center justify-between w-full">
                      <div className="flex gap-1 2xl:gap-2 mr-auto flex-1">
                        <i className="size-2 2xl:size-4 rounded-full bg-red-500 hover:bg-red-600 block"></i>
                        <i className="size-2 2xl:size-4 rounded-full bg-yellow-500 hover:bg-yellow-600 block"></i>
                        <i className="size-2 2xl:size-4 rounded-full bg-green-500 hover:bg-green-600 block"></i>
                      </div>
                      <span className="font-medium text-xs 2xl:text-sm mx-auto text-white">
                        Composable Frontend
                      </span>
                      <span className="flex-1"></span>
                    </div>
                    <AsciinemaPlayer
                      src="/assets/homepage/642538.cast"
                      create={create}
                      autoPlay
                      loop
                    />
                  </div>
                )}
                {activeBlock === "react-hooks" && (
                  <div className="shadow-xl 2xl:shadow-2xl">
                    <div className="bg-black rounded-t p-2 2xl:p-4 flex items-center justify-between w-full">
                      <div className="flex gap-1 2xl:gap-2 mr-auto flex-1">
                        <i className="size-2 2xl:size-4 rounded-full bg-red-500 hover:bg-red-600 block"></i>
                        <i className="size-2 2xl:size-4 rounded-full bg-yellow-500 hover:bg-yellow-600 block"></i>
                        <i className="size-2 2xl:size-4 rounded-full bg-green-500 hover:bg-green-600 block"></i>
                      </div>
                      <span className="font-medium text-xs 2xl:text-sm mx-auto text-white">
                        React Hooks
                      </span>
                      <span className="flex-1"></span>
                    </div>
                    <div className="[&>*]:!mb-0">
                      <CodeBlock showLineNumbers language="js">
                        {codeSamples["React Hooks"]}
                      </CodeBlock>
                    </div>
                  </div>
                )}
                {activeBlock === "sdk" && (
                  <div className="shadow-xl 2xl:shadow-2xl">
                    <div className="bg-black rounded-t p-2 2xl:p-4 flex items-center justify-between w-full">
                      <div className="flex gap-1 2xl:gap-2 mr-auto flex-1">
                        <i className="size-2 2xl:size-4 rounded-full bg-red-500 hover:bg-red-600 block"></i>
                        <i className="size-2 2xl:size-4 rounded-full bg-yellow-500 hover:bg-yellow-600 block"></i>
                        <i className="size-2 2xl:size-4 rounded-full bg-green-500 hover:bg-green-600 block"></i>
                      </div>
                      <span className="font-medium text-xs 2xl:text-sm mx-auto text-white">
                        JS-SDK
                      </span>
                      <span className="flex-1"></span>
                    </div>
                    <div className="[&>*]:!mb-0">
                      <CodeBlock showLineNumbers language="js">
                        {codeSamples["sdk"]}
                      </CodeBlock>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        );
      }}
    </BrowserOnly>
  );
}
