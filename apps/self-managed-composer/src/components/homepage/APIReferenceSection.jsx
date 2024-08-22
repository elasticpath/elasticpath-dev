import React from 'react';
import Link from '@docusaurus/Link';
import { ArrowUpRight } from 'react-feather';
import Head from '@docusaurus/Head';
import ThemedImage from '@theme/ThemedImage';

export default function APIReferenceSection() {
  return (
    <section className="no-underline-links relative px-6 pt-16 pb-16">
      <Head>
        <link rel="prefetch" href="/static/landing-page/api-ref-light.png" />
        <link rel="prefetch" href="/static/landing-page/api-ref-dark.png" />
      </Head>
      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-10 rounded-2xl bg-gray-900 px-6 py-20 text-center text-white dark:bg-gray-900 dark:text-white lg:flex-row lg:p-20 lg:text-left">
        <Link
          href="/api"
          aria-title="API Reference"
          target="_blank"
          className="absolute top-8 right-8 flex h-16 w-16 items-center justify-center rounded-full docs-color-background dark:bg-transparent"
        >
          <ArrowUpRight className="h-6 w-6 text-zinc-400 dark:text-black" />
        </Link>
        <div className="flex-1">
          <h2 className="text-4xl">REST API Reference</h2>
          <p className="text-zinc-400">
            Don&apos;t worry, they aren&apos;t complex. Use our
            developer-friendly REST APIs in our OpenAPI Spec.
          </p>
          <Link
            href="/api"
            className="font-medium text-primary-100 dark:text-primary"
          >
            Get started with Elastic Path REST APIs &rarr;
          </Link>
          <ul className="mt-10 flex list-none flex-col gap-4 text-left lg:pl-0">
            <li className="flex flex-col gap-1">
              <Link
                href="/docs/api/pxm/pricebooks/create-pricebook"
                className="group font-jakarta font-semibold text-current"
              >
                Create a Product
                <span className="ml-2 opacity-0 transition group-hover:translate-x-2 group-hover:opacity-100">
                  &rarr;
                </span>
              </Link>
              <div className="text-zinc-400">
                Your catalog starts with products, get started now
              </div>
            </li>
            <li className="flex flex-col gap-1">
              <Link
                href="/docs/api/subscriptions/create-plan"
                className="group font-jakarta font-semibold text-current"
              >
                Create a Subscription Plan
                <span className="ml-2 opacity-0 transition group-hover:translate-x-2 group-hover:opacity-100">
                  &rarr;
                </span>
              </Link>
              <div className="text-zinc-400">
                Add a new subscription plan
              </div>
            </li>
            <li className="flex flex-col gap-1">
              <Link
                href="/docs/api/accounts/post-v-2-accounts"
                className="group font-jakarta font-semibold text-current"
              >
                Create an Account
                <span className="ml-2 opacity-0 transition group-hover:translate-x-2 group-hover:opacity-100">
                  &rarr;
                </span>
              </Link>
              <div className="text-zinc-400">
                Create an account in your store
              </div>
            </li>
          </ul>
        </div>
        <div className="flex flex-1 justify-end">
          <ThemedImage
            sources={{
              light: '/static/landing-page/api-ref-light.png',
              dark: '/static/landing-page/api-ref-dark.png',
            }}
            alt="API Reference Preview"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
