import React, { useState } from "react";
import {
  ComposerIcon,
  ExtensionsIcon,
  OrdersIcon,
  PaymentsIcon,
  ProductsIcon,
  StudioIcon,
  SubscriptionsIcon,
} from "./Icons";
import { ChevronDown } from "react-feather";
import clsx from "clsx";
import BrowserOnly from "@docusaurus/core/lib/client/exports/BrowserOnly";

function Tab({
  img,
  value,
  icon,
  tagline,
  listItems,
  linkItems,
}: {
  img: string;
  value: string;
  icon: JSX.Element;
  tagline: string;
  listItems: string[];
  linkItems: string[];
}) {
  const [open, setOpen] = useState(false);

  function toggleOpen() {
    setOpen(!open);
  }

  return (
    <BrowserOnly>
      {() => (
        <div className="relative w-full">
          <div className="dark:bg-white/20 bg-white mx-auto p-6 my-2 rounded-lg shadow-lg hover:shadow-xl dark:ring-0 ring-1 ring-gray-200">
            <div
              className="dark:text-white text-black flex items-center text-left"
              onClick={toggleOpen}
            >
              {icon}
              <div className="ml-2 flex flex-col">
                <p className="font-mono p-0 m-0 text-xs">ELASTIC PATH</p>
                <h3 className="p-0 m-0 text-2xl">{value}</h3>
              </div>

              <button
                className={clsx(
                  "bg-transparent border-0 transition-all ml-auto",
                  open && "rotate-180",
                )}
              >
                <ChevronDown />
              </button>
            </div>
            <div
              className={clsx(
                "transition-all",
                open ? "h-auto max-h-80" : "h-0 max-h-0",
              )}
            >
              <div
                className={clsx(
                  "opacity-0 transition-all",
                  open && "!opacity-100 delay-300",
                )}
              >
                <p
                  className={clsx(
                    "text-left dark:text-white/90 text-gray-500 text-base delay-100 transition-all",
                    open && "my-4",
                  )}
                >
                  {tagline}
                </p>
                <ul className="flex flex-col dark:text-white/90 text-black text-base font-semibold text-left list-image-[url('/assets/homepage/list-checkmark.svg')] gap-2 pl-6 my-7">
                  {listItems.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
                <div className="flex gap-4 mt-8 justify-center">
                  <a
                    href={linkItems[0]}
                    className="bg-transparent tracking-tight rounded-full ring-2 ring-gray-300 py-1.5 px-4 hover:ring-green-500 transition-all dark:text-white/90 text-black border-0 text-sm font-semibold hover:no-underline"
                  >
                    Watch a demo
                  </a>
                  <a
                    href={linkItems[1]}
                    className="bg-transparent tracking-tight rounded-full ring-2 ring-gray-300 py-1.5 px-4 hover:ring-green-500 transition-all dark:text-white/90 text-black border-0 text-sm font-semibold hover:no-underline"
                  >
                    Read the docs
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </BrowserOnly>
  );
}

export default function CommerceAppsMobile() {
  return (
    <section className="px-6 py-6 mx-auto w-full text-center leading-tight tracking-tight">
      <div className="flex flex-col items-center justify-between dark:text-white">
        <h2 className="mb-8 text-5xl md:text-[4rem] font-semibold tracking-tight dark:drop-shadow-md">
          Apps for commerce
        </h2>
        <div className="flex flex-col my-6 w-full">
          <Tab
            img="/assets/homepage/products-screenshot.jpg"
            value="Products"
            icon={<ProductsIcon className="size-12" />}
            tagline="Efficiently manage product catalogs and info across channels with our Product Information Management (PIM) app."
            listItems={[
              "Multiple catalogs & flexible pricing engine",
              "Bundles & promotions",
              "Up to 10,000 product variations",
            ]}
            linkItems={[
              "https://www.elasticpath.com/demo-library",
              "/docs/api/pxm/products/products",
            ]}
          />

          <Tab
            img="/assets/homepage/payments-screenshot.jpg"
            value="Payments"
            icon={<PaymentsIcon className="size-12" />}
            tagline="Best-in-class payment processing solution powered by Stripe
                  with concierge-level service, full price transparency, and no
                  hidden fees."
            listItems={[
              "Superior fraud protection",
              "135+ supported currencies",
              "Seamless checkout experiences",
            ]}
            linkItems={[
              "https://www.elasticpath.com/demo-library",
              "/docs/payments",
            ]}
          />

          <Tab
            img="/assets/homepage/orders-screenshot.jpg"
            value="Orders"
            icon={<OrdersIcon className="size-12" />}
            tagline="Your home for all things related to customer service."
            listItems={[
              "Quickly access orders and manage personal data",
              "Monitor your customer and account relationships",
              "Export your transactions",
            ]}
            linkItems={[
              "https://www.elasticpath.com/demo-library",
              "/docs/api/carts/carts-checkout-orders-introduction",
            ]}
          />

          <Tab
            img="/assets/homepage/subs-screenshot.jpg"
            value="Subscriptions"
            icon={<SubscriptionsIcon className="size-12" />}
            tagline="Drive shopper engagement, more recurring revenue, and higher lifetime value"
            listItems={[
              "Create, customize, and combine subscription products & plans for maximum flexibility",
              "Elevate customer choice with varied billing and subscription discounts",
              "Easily configure repeat purchases, memberships, subscribe & save, and more",
            ]}
            linkItems={[
              "https://www.elasticpath.com/demo-library",
              "/docs/api/subscriptions/subscriptions-introduction",
            ]}
          />

          <Tab
            img="/assets/homepage/cx-screenshot.jpg"
            value="Studio"
            icon={<StudioIcon className="size-12" />}
            tagline="A point & click visual page builder for business users. Implement full storefront websites or just landing pages."
            listItems={[
              "Leverage our rich out-of-the-box component set or use powerful tooling to craft your own",
              "Launch sooner with pre-configured integrations",
              "Showcase your brand with effortless customization",
            ]}
            linkItems={[
              "https://www.elasticpath.com/demo-library",
              "/docs/studio",
            ]}
          />

          <Tab
            img="/assets/homepage/integrations-screenshot.jpg"
            value="Composer"
            icon={<ComposerIcon className="size-12" />}
            tagline="Your commerce data, wherever you need it"
            listItems={[
              "Choose from more than 100 instant-on third-party integrations.",
              "Create your own custom integrations and hook up to more than 3,000 available actions.",
              "Monitor every component via a single pane of glass.",
            ]}
            linkItems={[
              "https://www.elasticpath.com/demo-library",
              "/docs/composer",
            ]}
          />

          <Tab
            img="/assets/homepage/extensions-screenshot.jpg"
            value="Extensions"
            icon={<ExtensionsIcon className="size-12" />}
            tagline="Bring-your-own data. In Elastic Path, it's a first-class asset."
            listItems={[
              "Efficiently manage vast private datasets with Custom APIs and multidimensional filtering.",
              "Deploy unique behaviors and integrations with ease using Commerce Extensions and Composer.",
              "Eliminate the need to build and host custom functionality from scratch.",
            ]}
            linkItems={[
              "https://www.elasticpath.com/demo-library",
              "/docs/extensions",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
