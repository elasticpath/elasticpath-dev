import React from "react";

import CodeBlock from "@theme/CodeBlock";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

import codeSamples from "./code-samples";

const TabbedCodeSample = ({ codeSamples }) => {
  return (
    <div className="homepage-code-block w-full max-w-4xl mx-auto">
      <Tabs className="">
        <TabItem value="react" label="React Hooks">
          <CodeBlock showLineNumbers language="js">
            {codeSamples["React Hooks"]}
          </CodeBlock>
        </TabItem>
        <TabItem value="node" label="node.js">
          <CodeBlock showLineNumbers language="js">
            {codeSamples["node.js"]}
          </CodeBlock>
        </TabItem>
        <TabItem value="python" label="Python">
          <CodeBlock showLineNumbers language="python">
            {codeSamples["Python"]}
          </CodeBlock>
        </TabItem>
        <TabItem value="go" label="go">
          <CodeBlock showLineNumbers language="go">
            {codeSamples["go"]}
          </CodeBlock>
        </TabItem>
        <TabItem value="java" label="Java">
          <CodeBlock showLineNumbers language="java">
            {codeSamples["Java"]}
          </CodeBlock>
        </TabItem>
        <TabItem value="curl" label="cUrl">
          <CodeBlock showLineNumbers language="bash">
            {codeSamples["curl"]}
          </CodeBlock>
        </TabItem>
      </Tabs>

      <div className="mt-8">
        <div className="bg-[#1d262f] text-white !rounded-b-none !rounded-t-lg !p-2 text-center">
          <span className="font-mono text-xs">HTTP 200</span>
        </div>
        <CodeBlock
          language="json"
          className="!rounded-none h-full"
          showLineNumbers
        >
          {JSON.stringify(
            {
              data: {
                id: "00000000-0000-0000-0000-000000000000",
                type: "subscription-product",
                attributes: {
                  external_ref: "abc123",
                  name: "Magazine",
                  description:
                    "A lovely magazine that is published every month.",
                  sku: "MAGAZINE1",
                  main_image: "https://magazine.com/cover.jpg",
                },
              },
            },
            null,
            "  ",
          )}
        </CodeBlock>
      </div>
    </div>
  );
};

export default function APIs() {
  return (
    <section id="APIs" className="py-16 md:py-28 px-10 max-w-7xl mx-auto">
      <h2 className="hidden md:block mb-20 text-[4rem] text-center dark:text-white dark:drop-shadow-md font-semibold tracking-tight">
        Modern commerce APIs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="hidden md:flex items-center justify-center">
          <TabbedCodeSample codeSamples={codeSamples} />
        </div>
        <div className="flex flex-col py-5 gap-7">
          <h2 className="text-[2rem] font-semibold leading-12 tracking-tight text-left dark:text-white dark:drop-shadow-md">
            Elastic Path provides an elegant set of composable APIs for building
            eCommerce experiences.
          </h2>
          <div className="flex flex-col md:flex-row text-center items-center text-black gap-5">
            <a
              href="/api"
              className="bg-transparent order-2 md:order-1 tracking-tight rounded-full ring-2 ring-gray-300 py-3 px-8 hover:ring-green-500 transition-all border-0 text-base font-semibold hover:no-underline text-black dark:text-white hover:text-black dark:hover:text-white"
            >
              Read the docs
            </a>
            <a
              href="/guides/Getting-Started/test-with-postman-collection"
              className="bg-transparent order-1 md:order-2 tracking-tight rounded-full ring-2 ring-gray-300 py-3 px-8 hover:ring-green-500 transition-all border-0 text-base font-semibold hover:no-underline text-black dark:text-white hover:text-black dark:hover:text-white"
            >
              Get Postman collection
            </a>
          </div>
          <div className="flex flex-col mt-5 gap-8">
            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
              <div className="md:w-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="none"
                  viewBox="0 0 40 40"
                >
                  <rect width="40" height="40" fill="#1FEC90" rx="12"></rect>
                  <path
                    fill="#0E1521"
                    fillRule="evenodd"
                    d="M10.35 12.24a1 1 0 011.41.11l6 7a1 1 0 010 1.3l-6 7a1 1 0 01-1.52-1.3L15.684 20l-5.442-6.35a1 1 0 01.109-1.41z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    stroke="#0E1521"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M18 28h11"
                  ></path>
                </svg>
                <p className="font-semibold text-md md:text-lg text-black dark:text-white">
                  RESTful APIs, JSON responses, and normalized objects
                </p>
              </div>
              <div className="md:w-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="none"
                  viewBox="0 0 40 40"
                >
                  <rect width="40" height="40" fill="#1FEC90" rx="12"></rect>
                  <path
                    fill="#0E1521"
                    d="M17 28c0 .552-.45 1.008-.999.951C13.731 28.72 12 26.627 12 24c0-2.212-.74-2.904-1.502-2.946C9.75 21 9 20.552 9 20s.75-1 1.498-1.054C11.26 18.904 12 18.212 12 16c0-2.626 1.73-4.72 4.001-4.951.55-.056.999.399.999.951 0 .553-.454.986-1.002 1.062-2.045.284-2.019 2.507-1.992 3.79.025 1.174-.45 2.398-2.006 2.998v.3c1.557.6 2.03 1.824 2.006 2.997-.027 1.283-.053 3.507 1.992 3.791.547.076 1.002.51 1.002 1.062zm6 0c0 .552.45 1.008.999.951C26.269 28.72 28 26.627 28 24c0-2.212.738-2.904 1.5-2.946C30.25 21 31 20.552 31 20s-.75-1-1.5-1.054c-.762-.042-1.5-.734-1.5-2.946 0-2.626-1.73-4.72-4.001-4.951-.55-.056-.999.399-.999.951 0 .553.454.986 1.002 1.062 2.045.284 2.019 2.507 1.992 3.79-.025 1.174.45 2.398 2.006 2.998v.3c-1.557.6-2.03 1.824-2.006 2.997.027 1.283.053 3.507-1.992 3.791-.547.076-1.002.51-1.002 1.062z"
                  ></path>
                </svg>
                <p className="font-semibold text-md md:text-lg text-black dark:text-white">
                  Modern, easy to use SDKs for JavaScript and React
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
              <div className="md:w-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="none"
                  viewBox="0 0 40 40"
                >
                  <rect width="40" height="40" fill="#1FEC90" rx="12"></rect>
                  <path
                    stroke="#0E1521"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M28.021 24.651C26.91 23.017 26 21.115 26 18a6 6 0 00-12 0c0 3.115-.91 5.017-2.021 6.651-.608.895-.979 1.934-.979 3.016V28h18v-.333c0-1.082-.37-2.121-.979-3.016z"
                  ></path>
                  <path
                    fill="#0E1521"
                    d="M20 32a2 2 0 002-2h-4a2 2 0 002 2z"
                  ></path>
                  <path
                    fill="#0E1521"
                    fillRule="evenodd"
                    d="M21.985 10.248a2 2 0 10-3.97 0A8.016 8.016 0 0120 10c.685 0 1.35.086 1.985.248z"
                    clipRule="evenodd"
                  ></path>
                </svg>

                <p className="font-semibold text-md md:text-lg text-black dark:text-white">
                  Get updates on catalogs, orders, carts, accounts, users, and
                  more via webhooks
                </p>
              </div>
              <div className="md:w-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="none"
                  viewBox="0 0 40 40"
                >
                  <rect width="40" height="40" fill="#1FEC90" rx="12"></rect>
                  <path
                    fill="#0E1521"
                    fillRule="evenodd"
                    d="M10.293 10.293a1 1 0 011.1-.212l19.8 8.485a1 1 0 01-.12 1.88l-8.265 2.362-2.361 8.266a1 1 0 01-1.88.119l-8.486-19.8a1 1 0 01.212-1.1zm9.004 17.527l1.74-6.095a1 1 0 01.688-.687l6.095-1.741-14.916-6.393 6.393 14.916z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <p className="font-semibold text-md md:text-lg text-black dark:text-white">
                  Build or customize low- or no-code integrations
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
              <div className="md:w-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="none"
                  viewBox="0 0 40 40"
                >
                  <rect width="40" height="40" fill="#1FEC90" rx="12"></rect>
                  <g
                    stroke="#0E1521"
                    strokeWidth="2"
                    clipPath="url(#clip0_11040_4598)"
                  >
                    <circle cx="20" cy="20" r="11"></circle>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12.155 12.987c0 1.49-.6 3.587.565 4.875.61.675.23 1.648.773 2.248.093.103.431.212.431.276.078 0 .629-.125.601-.276-.516-2.81.207-.898.56.66.483 2.137 1.071 3.658 2.765 4.594.853.47 2.41 1.6 3.339 1.76.248.041-.689 1.2-.689 2.876m8.5-5.588c-2.267-.56-4.404-.457-5.552.993-.097-.107-.26-.445-.491-.497-.232-.05-.828-.128-.982 0-.213-.128-.591.208-.684-.1-.224-.74.585-1.602-.638-1.602-.724 0-1.192-.107-.638-1.025.365-.605.014-1.65-.986-1.743-1.643-.153-1.382-1.036-.066-1.525 1.38-.512 1.863-.066 2.676.832.14.154.534.895.88.646.188-.134.834-.07.896-.305.207-.789-.522-1.766-.557-2.346-.051-.862-.483-1.467.177-2.126.608-.606 2.063-2.248 1.031-2.529.774 0 2.446-.1 2.446-.517 0-.44-.402-1.339-.61-1.568"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_11040_4598">
                      <path fill="#fff" d="M8 8h24v24H8z"></path>
                    </clipPath>
                  </defs>
                </svg>
                <p className="font-semibold text-md md:text-lg text-black dark:text-white">
                  Multi-region hosting and full GDPR & CCPA compliance. Fully
                  SOC2 certified.
                </p>
              </div>
              <div className="md:w-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="none"
                  viewBox="0 0 40 40"
                >
                  <rect width="40" height="40" fill="#1FEC90" rx="12"></rect>
                  <path
                    stroke="#0E1521"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18 14h11m-11 6h11m-11 6h11"
                  ></path>
                  <rect
                    width="4"
                    height="4"
                    x="11"
                    y="24"
                    stroke="#0E1521"
                    strokeWidth="2"
                    rx="2"
                  ></rect>
                  <path
                    stroke="#0E1521"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 13l1.5 1.5L15 11m-4 8l1.5 1.5L15 17"
                  ></path>
                </svg>
                <p className="font-semibold text-md md:text-lg text-black dark:text-white">
                  Business user tooling seamlessly integrates Elastic Path into
                  your site
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
