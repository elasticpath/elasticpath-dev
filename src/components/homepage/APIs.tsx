import React from 'react';
import Link from '@docusaurus/Link';
import { Icon } from '../Icon';

function API({ to, name }: { name: string; to?: string }) {
  return (
    <Link
      to={to}
      className="flex cursor-pointer items-center rounded-lg border border-secondary-700 p-2.5 text-inherit hover:border-primary hover:text-primary hover:no-underline"
    >
      <span className="font-medium">{name}</span>
    </Link>
  );
}

export default function APIs() {
  return (
    <section className="mx-auto mb-32 flex w-full max-w-6xl flex-col p-4 py-20">
      <span className="mb-2 uppercase tracking-wider text-text-400">
        Explore our OpenAPI Specifications
      </span>

      <h3 className="mb-12 text-4xl">
        Elastic Path Composable Commerce
      </h3>

      <div className="mb-10">
        <p className="mb-6 text-text-400">
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          <API
            name="Product Experience Manager"
            to="/docs/pxm/products"
          />
          <API
            name="Promotions"
            to="/docs/api/promotions"
          />
          <API
            name="Subscriptions"
            to="/docs/api/subscriptions"
          />
          <API
            name="Accounts"
            to="/docs/api/accounts"
          />
          <API
            name="Addresses"
            to="/docs/api/addresses"
          />
          <API
            name="Carts, Checkout, Orders"
            to="/docs/api/carts"
          />
          <API
            name="Payments"
            to="/docs/api/payments"
          />
          <API
              name="Custom Data"
              to="/docs/api/flows"
          />
          <API
              name="Integrations"
              to="/docs/api/integrations"
          />
          <API
              name="Exporter"
              to="/docs/api/exporter"
          />
        </div>
      </div>

      <div>
        <h4 className="mb-2 text-2xl">Frontends</h4>

        <p className="mb-6 text-text-400">
          Our easy to use frontends allow you to launch new experiences quickly
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          <API
            name="Studio"
            to="/docs/studio"
          />
          <API
            name="Composable CLI"
            to="/docs/developer-tools/composable-cli/installation"
          />
          <API
            name="JS SDK"
            to="https://github.com/moltin/js-sdk"
          />
        </div>
      </div>
    </section>
  );
}
