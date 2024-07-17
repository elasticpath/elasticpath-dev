import React, { useEffect, useState } from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import BrowserOnly from "@docusaurus/BrowserOnly";

const customers = [
  {
    name: "Customer Success Team",
    href: "https://www.elasticpath.com/customer-success/team",
  },
  {
    name: "Global Services",
    href: "https://www.elasticpath.com/customer-success/global-services",
  },
  {
    name: "Support",
    href: "https://support.elasticpath.com/hc/en-us",
  },
  { name: "US East Login", href: "https://useast.cm.elasticpath.com/" },
  { name: "EU West Login", href: "https://euwest.cm.elasticpath.com/" },
];

const partners = [
  {
    name: "Partner Program",
    href: "https://www.elasticpath.com/partners",
  },
  {
    name: "Partner Directory",
    href: "https://www.elasticpath.com/partners/directory",
  },
  {
    name: "Become a Partner",
    href: "https://www.elasticpath.com/partners#form",
  },
];

const developers = [
  {
    name: "Technologies",
    href: "https://www.elasticpath.com/products/architecture#technologies",
  },
  {
    name: "Dev Center",
    href: "https://elasticpath.dev/?_gl=1*ugmkpl*_ga*ODk1MjQyNDE2LjE2NzgyMTYwNjU.*_ga_KMLE7BQGFN*MTcwMTk2NTE2NS4yOTMuMS4xNzAxOTY3NTcwLjU5LjAuMA..",
  },
  { name: "Free Trial", href: "https://useast.cm.elasticpath.com/free-trial" },
];

const company = [
  { name: "About Us", href: "https://www.elasticpath.com/company/about-us" },
  { name: "Careers", href: "https://www.elasticpath.com/company/careers" },
  {
    name: "Contact Us",
    href: "https://www.elasticpath.com/company/contact-us",
  },
  { name: "Pricing", href: "https://www.elasticpath.com/pricing" },
];

function Safety({ className }) {
  return (
    <div
      className={clsx(
        "flex h-24 max-w-[418px] overflow-clip rounded-2xl bg-white",
        className,
      )}
    ></div>
  );
}

function Status({ className }) {
  const [status, setStatus] = useState({
    indicator: "none",
    description: "All Systems Operational",
  });

  useEffect(() => {
    if (typeof StatusPage !== "undefined") {
      // eslint-disable-next-line no-undef
      const sp = new StatusPage.page({ page: "wjlxrzb5h09l" });
      sp.status({
        success: function (data) {
          setStatus({
            indicator: data.status.indicator,
            description: data.status.description,
          });
        },
      });
    }
  }, []);

  return (
    <Link
      href="https://status.elasticpath.com"
      className={clsx(
        "flex items-center gap-2 rounded-lg border border-transparent dark:text-white text-black transition-colors font-normal hover:decoration-[#1FEC90]",
        className,
      )}
      target="_blank"
    >
      <div
        className={clsx(
          "h-4 w-4 rounded-full !bg-[#1FEC90] dark:shadow-[0px_0px_28px_0px_#1FEC90]",
          status.indicator === "none" ? "bg-[#2DB002]" : "bg-yellow-500",
        )}
      ></div>
      <div>{status.description}</div>
    </Link>
  );
}

function Links({ name, links }) {
  return (
    <div>
      <h3 className="text-base font-medium dark:text-white/80">{name}</h3>
      <div className="flex flex-col gap-3">
        {links.map(({ name, href }) => (
          <Link
            href={href}
            className="text-base dark:text-gray-100 text-black hover:text-primary hover:no-underline"
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative z-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-6 py-12">
        <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <img src="/logo/dark.svg" alt="Elastic Path" className="h-9 w-fit lg:h-12 hidden dark:block" />
          <img src="/logo/light.svg" alt="Elastic Path" className="h-9 w-fit lg:h-12 dark:hidden block" />
          <Safety className="hidden lg:flex" />
          <BrowserOnly>
            {() => {
              return <Status className="lg:hidden" />;
            }}
          </BrowserOnly>
        </div>

        <div className="grid grid-cols-2 gap-6 gap-y-12 md:justify-between lg:flex lg:flex-wrap">
          <Links name="For Customers" links={customers} />
          <Links name="For Partners" links={partners} />
          <Links name="For Developers" links={developers} />
          <Links name="Company" links={company} />
        </div>

        <hr className="my-12 bg-white/30" />

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
          <BrowserOnly>
            {() => {
              return <Status className="hidden lg:flex" />;
            }}
          </BrowserOnly>
          <Safety className="flex w-full max-w-full sm:hidden" />

          <div className="flex flex-wrap gap-2 text-sm dark:text-white">
            <Link
              href="https://www.elasticpath.com/company/privacy-policy"
              className="text-inherit hover:text-black hover:underline"
            >
              Privacy Policy
            </Link>
            &bull;
            <Link
              href="https://www.elasticpath.com/company/termsofuse"
              className="text-inherit hover:text-black hover:underline"
            >
              Terms & Conditions
            </Link>
            &bull;
            <span className="text-inherit">
              &copy; {new Date().getFullYear()} Elastic Path Software, Inc.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
