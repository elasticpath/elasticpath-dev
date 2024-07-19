import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/Tabs";
import {
  ComposerIcon,
  ExtensionsIcon,
  OrdersIcon,
  PaymentsIcon,
  ProductsIcon,
  StudioIcon,
  SubscriptionsIcon,
} from "./Icons";

const Trigger = ({ name }: { name: string }) => {
  return (
    <TabsTrigger
      value={name}
      className="data-[state='active']:dark:bg-[#1FEC90] data-[state='active']:bg-[#61DEA6] data-[state='active']:shadow-lg dark:data-[state='active']:shadow-[0px_0px_28px_0px_#1FEC90] data-[state='active']:text-black border-0 bg-transparent !rounded-full transition-all duration-500 text-xl py-1 px-6"
    >
      {name}
    </TabsTrigger>
  );
};

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
  return (
    <TabsContent className="relative" value={value}>
      <img
        alt="Elastic Path screenshot"
        src={img}
        className="hidden md:block rounded-2xl shadow-2xl"
      />
      <div className="bg-white p-8 absolute -right-16 bottom-8 w-[32rem] rounded-lg shadow-2xl ring-1 ring-gray-200">
        <div className="text-black flex items-center text-left">
          {icon}
          <div className="flex flex-col">
            <p className="font-mono p-0 m-0 text-sm">ELASTIC PATH</p>
            <h3 className="p-0 m-0 text-[2rem]">{value}</h3>
          </div>
        </div>
        <p className="text-left text-gray-500 text-base my-4 leading-loose">
          {tagline}
        </p>
        <ul className="flex flex-col text-black text-base font-semibold text-left marker:content-['✓'] marker:text-green-500 gap-2 pl-6 my-7">
          {listItems.map((item) => (
            <li className="pl-4">{item}</li>
          ))}
        </ul>
        <div className="flex text-black gap-8 mt-8">
          <a
            href={linkItems[0]}
            className="bg-transparent tracking-tight rounded-full ring-2 ring-gray-300 py-3 px-8 hover:ring-green-500 transition-all text-black border-0 text-base font-semibold hover:no-underline"
          >
            Watch Demo
          </a>
          <a
            href={linkItems[1]}
            className="flex-1 bg-transparent tracking-tight rounded-full ring-2 ring-gray-300 py-3 px-8 hover:ring-green-500 transition-all text-black border-0 text-base font-semibold hover:no-underline"
          >
            View Documentation →
          </a>
        </div>
      </div>
    </TabsContent>
  );
}

export default function CommerceApps() {
  return (
    <section
      id="CommerceApps"
      className="px-20 py-12 md:py-24 text-center leading-tight tracking-tight"
    >
      <link
        rel="preload"
        as="image"
        href="/assets/homepage/products-screenshot.jpg"
      />
      <link
        rel="preload"
        as="image"
        href="/assets/homepage/payments-screenshot.jpg"
      />
      <link
        rel="preload"
        as="image"
        href="/assets/homepage/orders-screenshot.jpg"
      />
      <link
        rel="preload"
        as="image"
        href="/assets/homepage/subs-screenshot.jpg"
      />
      <link
        rel="preload"
        as="image"
        href="/assets/homepage/cx-screenshot.jpg"
      />
      <link
        rel="preload"
        as="image"
        href="/assets/homepage/integrations-screenshot.jpg"
      />
      <link
        rel="preload"
        as="image"
        href="/assets/homepage/extensions-screenshot.jpg"
      />

      <div className="flex flex-col items-center justify-between dark:text-white">
        <h2 className="mb-14 text-4xl md:text-[4rem] font-semibold tracking-tight dark:drop-shadow-md">
          Apps for commerce
        </h2>
        <Tabs defaultValue="Products">
          <TabsList className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Trigger name={"Products"} />
            <Trigger name={"Payments"} />
            <Trigger name={"Orders"} />
            <Trigger name={"Subscriptions"} />
            <Trigger name={"Studio"} />
            <Trigger name={"Composer"} />
            <Trigger name={"Extensions"} />
          </TabsList>
          <div className="max-w-7xl mx-auto my-12">
            <Tab
              img="/assets/homepage/products-screenshot.jpg"
              value="Products"
              icon={<ProductsIcon />}
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
              icon={<PaymentsIcon />}
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
              icon={<OrdersIcon />}
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
              icon={<SubscriptionsIcon />}
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
              icon={<StudioIcon />}
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
              icon={<ComposerIcon />}
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
              icon={<ExtensionsIcon />}
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
        </Tabs>
      </div>
    </section>
  );
}
