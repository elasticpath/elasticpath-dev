import React from "react";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "../ui/Tabs";
import {
  ComposerIcon,
  ExtensionsIcon,
  OrdersIcon,
  PaymentsIcon,
  ProductsIcon,
  StudioIcon,
  SubscriptionsIcon
} from "./Icons";

const Trigger = ({name}: {name: string}) => {
  return (
    <TabsTrigger
      value={name}
      className="data-[state='active']:bg-[#1FEC90] data-[state='active']:shadow-[0px_0px_28px_0px_#1FEC90] data-[state='active']:text-black border-0 bg-transparent !rounded-full transition-all duration-500"
    >
      {name}
    </TabsTrigger>
  )
}

export default function CommerceApps() {
  return (
    <section className="px-4 py-44 text-center leading-tight tracking-tight">
      <div className="flex flex-col items-center justify-between dark:text-white">
        <h2 className="mb-4 text-[4rem] font-semibold tracking-tight">
          Apps for commerce
        </h2>
        <Tabs defaultValue="Products">
          <TabsList className="flex items-center justify-center gap-4">
            <Trigger name={"Products"}/>
            <Trigger name={"Payments"}/>
            <Trigger name={"Orders"}/>
            <Trigger name={"Subscriptions"}/>
            <Trigger name={"Studio"}/>
            <Trigger name={"Composer"}/>
            <Trigger name={"Extensions"}/>
          </TabsList>
          <div className="max-w-5xl my-8">
            <TabsContent className="relative" value="Products">
              <img
                alt="Commerce Manager product page"
                src="/assets/homepage/products-screenshot.jpg"
                className="rounded-2xl"
                rel="preload"
              />
              <div className="bg-white p-6 absolute -right-8 bottom-8 w-80 rounded-lg shadow-2xl ring-1 ring-gray-200">
                <div className="text-black flex items-center text-left">
                  <ProductsIcon/>
                  <div className="flex flex-col">
                    <p className="font-mono p-0 m-0 text-xs">ELASTIC PATH</p>
                    <h3 className="p-0 m-0 text-xl">Products</h3>
                  </div>
                </div>
                <p className="text-black text-justify text-gray-500 text-xs my-4">
                  Efficiently manage product catalogs and info across channels
                  with our Product Information Management (PIM) app.
                </p>
                <ul
                  className="text-black text-xs font-semibold text-left list-image-[url('/assets/homepage/list-checkmark.svg')] pl-6">
                  <li>Multiple catalogs & flexible pricing engine</li>
                  <li className="mt-2">Bundles & promotions</li>
                  <li className="mt-2">Up to 10,000 product variations</li>
                </ul>
                <div className="flex text-black justify-between mt-8">
                  <button
                    className="bg-transparent tracking-tight rounded-full ring-2 ring-gray-300 py-2 px-4 hover:ring-green-500 transition-all text-black border-0 text-xs font-semibold">
                    Watch Demo
                  </button>
                  <button
                    className="bg-transparent tracking-tight rounded-full ring-2 ring-gray-300 py-2 px-4 hover:ring-green-500 transition-all text-black border-0 text-xs font-semibold">
                    View Documentation
                  </button>
                </div>
              </div>
            </TabsContent>

            <TabsContent className="relative" value="Payments">
              <img
                alt="Storefront checkout page"
                src="/assets/homepage/payments-screenshot.jpg"
                className="rounded-2xl"
                rel="preload"
              />
              <div className="bg-white p-6 absolute -right-8 bottom-8 w-80 rounded-lg shadow-2xl ring-1 ring-gray-200">
                <div className="text-black flex items-center text-left">
                  <PaymentsIcon/>
                  <div className="flex flex-col ml-2">
                    <p className="font-mono p-0 m-0 text-xs">ELASTIC PATH</p>
                    <h3 className="p-0 m-0 text-xl">Payments</h3>
                  </div>
                </div>
                <p className="text-black text-justify text-gray-500 text-xs my-4">
                  Best-in-class payment processing solution powered by Stripe
                  with concierge-level service, full price transparency, and no
                  hidden fees.
                </p>
                <ul
                  className="text-black text-xs font-semibold text-left list-image-[url('/assets/homepage/list-checkmark.svg')] pl-6">
                  <li>Superior fraud protection</li>
                  <li className="mt-2">135+ supported currencies</li>
                  <li className="mt-2">Seamless checkout experiences</li>
                </ul>
                <div className="flex text-black justify-between mt-8">
                  <button
                    className="bg-transparent tracking-tight rounded-full ring-2 ring-gray-300 py-2 px-4 hover:ring-green-500 transition-all text-black border-0 text-xs font-semibold">
                    Watch Demo
                  </button>
                  <button
                    className="bg-transparent tracking-tight rounded-full ring-2 ring-gray-300 py-2 px-4 hover:ring-green-500 transition-all text-black border-0 text-xs font-semibold">
                    View Documentation
                  </button>
                </div>
              </div>
            </TabsContent>

            <TabsContent className="relative" value="Orders">
              <img
                alt="Storefront checkout page"
                src="/assets/homepage/orders-screenshot.jpg"
                className="rounded-2xl"
                rel="preload"
              />
              <div className="bg-white p-6 absolute -right-8 bottom-8 w-80 rounded-lg shadow-2xl ring-1 ring-gray-200">
                <div className="text-black flex items-center text-left">
                  <OrdersIcon/>
                  <div className="flex flex-col ml-4">
                    <p className="font-mono p-0 m-0 text-xs">ELASTIC PATH</p>
                    <h3 className="p-0 m-0 text-xl">Orders</h3>
                  </div>
                </div>
                <p className="text-black text-justify text-gray-500 text-xs my-4">
                  Your home for all things related to customer service.
                </p>
                <ul
                  className="text-black text-xs font-semibold text-left list-image-[url('/assets/homepage/list-checkmark.svg')] pl-6">
                  <li>
                    Quickly access orders and manage personal data
                  </li>
                  <li className="mt-2">Monitor your customer and account relationships</li>
                  <li className="mt-2">Export your transactions</li>
                </ul>
                <div className="flex text-black justify-between mt-8">
                  <button
                    className="bg-transparent tracking-tight rounded-full ring-2 ring-gray-300 py-2 px-4 hover:ring-green-500 transition-all text-black border-0 text-xs font-semibold">
                    Watch Demo
                  </button>
                  <button
                    className="bg-transparent tracking-tight rounded-full ring-2 ring-gray-300 py-2 px-4 hover:ring-green-500 transition-all text-black border-0 text-xs font-semibold">
                    View Documentation
                  </button>
                </div>
              </div>
            </TabsContent>

            <TabsContent className="relative" value="Subscriptions">
              <img
                alt="Storefront checkout page"
                src="/assets/homepage/subs-screenshot.jpg"
                className="rounded-2xl"
                rel="preload"
              />
              <div className="bg-white p-6 absolute -right-8 bottom-8 w-80 rounded-lg shadow-2xl ring-1 ring-gray-200">
                <div className="text-black flex items-center text-left">
                  <SubscriptionsIcon/>
                  <div className="flex flex-col ml-4">
                    <p className="font-mono p-0 m-0 text-xs">ELASTIC PATH</p>
                    <h3 className="p-0 m-0 text-xl">Subscriptions</h3>
                  </div>
                </div>
                <p className="text-black text-justify text-gray-500 text-xs my-4">
                  Desc
                </p>
                <ul
                  className="text-black text-xs font-semibold text-left list-image-[url('/assets/homepage/list-checkmark.svg')] pl-6">
                  <li>
                    Create, customize, and combine subscription products & plans
                    for maximum flexibility
                  </li>
                  <li className="mt-2">
                    Elevate customer choice with varied billing and subscription
                    discounts
                  </li>
                  <li className="mt-2">Easily configure repeat purchases, memberships, subscribe & save, and more</li>
                </ul>
                <div className="flex text-black justify-between mt-8">
                  <button
                    className="bg-transparent tracking-tight rounded-full ring-2 ring-gray-300 py-2 px-4 hover:ring-green-500 transition-all text-black border-0 text-xs font-semibold">
                    Watch Demo
                  </button>
                  <button
                    className="bg-transparent tracking-tight rounded-full ring-2 ring-gray-300 py-2 px-4 hover:ring-green-500 transition-all text-black border-0 text-xs font-semibold">
                    View Documentation
                  </button>
                </div>
              </div>
            </TabsContent>

            <TabsContent className="relative" value="Studio">
              <img
                alt="Storefront checkout page"
                src="/assets/homepage/cx-screenshot.jpg"
                className="rounded-2xl"
                rel="preload"
              />
              <div className="bg-white p-6 absolute -right-8 bottom-8 w-80 rounded-lg shadow-2xl ring-1 ring-gray-200">
                <div className="text-black flex items-center text-left">
                  <StudioIcon/>
                  <div className="flex flex-col ml-4">
                    <p className="font-mono p-0 m-0 text-xs">ELASTIC PATH</p>
                    <h3 className="p-0 m-0 text-xl">Studio</h3>
                  </div>
                </div>
                <p className="text-black text-justify text-gray-500 text-xs my-4">
                  A point & click visual page builder for business users.
                  Implement full storefront websites or just landing pages.
                </p>
                <ul
                  className="text-black text-xs font-semibold text-left list-image-[url('/assets/homepage/list-checkmark.svg')] pl-6">
                  <li>Leverage our rich out-of-the-box component set or use powerful tooling to craft your own</li>
                  <li className="mt-2">Launch sooner with pre-configured integrations</li>
                  <li className="mt-2">Showcase your brand with effortless customization</li>
                </ul>
                <div className="flex text-black justify-between mt-8">
                  <button
                    className="bg-transparent tracking-tight rounded-full ring-2 ring-gray-300 py-2 px-4 hover:ring-green-500 transition-all text-black border-0 text-xs font-semibold">
                    Watch Demo
                  </button>
                  <button
                    className="bg-transparent tracking-tight rounded-full ring-2 ring-gray-300 py-2 px-4 hover:ring-green-500 transition-all text-black border-0 text-xs font-semibold">
                    View Documentation
                  </button>
                </div>
              </div>
            </TabsContent>

            <TabsContent className="relative" value="Composer">
              <img
                alt="Storefront checkout page"
                src="/assets/homepage/integrations-screenshot.jpg"
                className="rounded-2xl"
                rel="preload"
              />
              <div className="bg-white p-6 absolute -right-8 bottom-8 w-80 rounded-lg shadow-2xl ring-1 ring-gray-200">
                <div className="text-black flex items-center text-left">
                  <ComposerIcon/>
                  <div className="flex flex-col ml-4">
                    <p className="font-mono p-0 m-0 text-xs">ELASTIC PATH</p>
                    <h3 className="p-0 m-0 text-xl">Composer</h3>
                  </div>
                </div>
                <p className="text-black text-justify text-gray-500 text-xs my-4">
                  Desc
                </p>
                <ul
                  className="text-black text-xs font-semibold text-left list-image-[url('/assets/homepage/list-checkmark.svg')] pl-6">
                  <li>Choose from more than 100 instant-on third-party integrations.</li>
                  <li className="mt-2">Create your own custom integrations and hook up to more than 3,000 available actions.</li>
                  <li className="mt-2">Monitor every component via a single pane of glass.</li>
                </ul>
                <div className="flex text-black justify-between mt-8">
                  <button
                    className="bg-transparent tracking-tight rounded-full ring-2 ring-gray-300 py-2 px-4 hover:ring-green-500 transition-all text-black border-0 text-xs font-semibold">
                    Watch Demo
                  </button>
                  <button
                    className="bg-transparent tracking-tight rounded-full ring-2 ring-gray-300 py-2 px-4 hover:ring-green-500 transition-all text-black border-0 text-xs font-semibold">
                    View Documentation
                  </button>
                </div>
              </div>
            </TabsContent>

            <TabsContent className="relative" value="Extensions">
              <img
                alt="Storefront checkout page"
                src="/assets/homepage/extensions-screenshot.jpg"
                className="rounded-2xl"
                rel="preload"
              />
              <div className="bg-white p-6 absolute -right-8 bottom-8 w-80 rounded-lg shadow-2xl ring-1 ring-gray-200">
                <div className="text-black flex items-center text-left">
                  <ExtensionsIcon/>
                  <div className="flex flex-col ml-4">
                    <p className="font-mono p-0 m-0 text-xs">ELASTIC PATH</p>
                    <h3 className="p-0 m-0 text-xl">Extensions</h3>
                  </div>
                </div>
                <p className="text-black text-justify text-gray-500 text-xs my-4">
                  Blurb
                </p>
                <ul
                  className="text-black text-xs font-semibold text-left list-image-[url('/assets/homepage/list-checkmark.svg')] pl-6">
                  <li>Efficiently manage vast private datasets with Custom APIs and multidimensional filtering.</li>
                  <li className="mt-2">Deploy unique behaviors and integrations with ease using Commerce Extensions and Composer.</li>
                  <li className="mt-2">Eliminate the need to build and host custom functionality from scratch.</li>
                </ul>
                <div className="flex text-black justify-between mt-8">
                  <button
                    className="bg-transparent tracking-tight rounded-full ring-2 ring-gray-300 py-2 px-4 hover:ring-green-500 transition-all text-black border-0 text-xs font-semibold">
                    Watch Demo
                  </button>
                  <button
                    className="bg-transparent tracking-tight rounded-full ring-2 ring-gray-300 py-2 px-4 hover:ring-green-500 transition-all text-black border-0 text-xs font-semibold">
                    View Documentation
                  </button>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
}
