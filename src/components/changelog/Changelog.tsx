import React from 'react';
import Link from '@docusaurus/Link';
import {
  ShoppingBagRegular,
  BookRegular,
  ArrowSyncFilled,
  PersonCircleRegular,
  WalletCreditCardRegular,
  ContactCardGroupRegular,
  BookDatabaseRegular,
  ConnectedRegular,
  LockClosedKeyRegular,
  BuildingRetailRegular,
  BuildingRetailMoneyRegular,
  BoxMultipleRegular,
  PeopleTeamRegular,
  DatabasePersonRegular,
  SettingsRegular,
} from '@fluentui/react-icons';
import clsx from 'clsx';

const PRODUCTS = [
  {
    title: 'Commerce Manager (Admin UI)',
    beta: false,
    link: '/changelog/product/commerce-manager',
    icon: ContactCardGroupRegular,
  },
  {
    title: 'Studio',
    beta: false,
    link: '/docs/studio',
    icon: ContactCardGroupRegular,
  },
  {
    title: 'Authentication',
    beta: false,
    link: '/changelog/product/authentication',
    icon: LockClosedKeyRegular,
  },
  {
    title: 'Account Management',
    link: '/changelog/product/account-management',
    icon: PeopleTeamRegular,
    // lightImage: '/static/landing-page/hero/video-graphic.png',
    // darkImage: '/static/landing-page/hero/video-graphic-dark.png',
  },
  {
    title: 'Carts, Checkout, Orders',
    beta: false,
    link: '/changelog/product/carts-orders',
    icon: ShoppingBagRegular,
    // lightImage: '/static/landing-page/hero/chat-graphic.png',
    // darkImage: '/static/landing-page/hero/chat-graphic-dark.png',
  },
  {
    title: 'Custom APIs (Commerce Extensions)',
    link: '/changelog/product/commerce-extensions',
    icon: BookDatabaseRegular,
    // lightImage: '/static/landing-page/hero/video-graphic.png',
    // darkImage: '/static/landing-page/hero/video-graphic-dark.png',
  },
  {
    title: 'Custom-Data (Flows)',
    beta: false,
    link: '/changelog/product/flows',
    icon: BookDatabaseRegular,
    // lightImage: '/static/landing-page/hero/chat-graphic.png',
    // darkImage: '/static/landing-page/hero/chat-graphic-dark.png',
  },
  {
    title: 'Integrations',
    beta: false,
    link: '/changelog/product/integrations',
    icon: ConnectedRegular,
    // lightImage: '/static/landing-page/hero/chat-graphic.png',
    // darkImage: '/static/landing-page/hero/chat-graphic-dark.png',
  },
  {
    title: 'Integrations Hub, Builder, Monitor',
    beta: false,
    link: '/changelog/product/composer',
    icon: ConnectedRegular,
    // lightImage: '/static/landing-page/hero/chat-graphic.png',
    // darkImage: '/static/landing-page/hero/chat-graphic-dark.png',
  },
  {
    title: 'Organizations',
    beta: false,
    link: '/changelog/product/organizations',
    icon: BoxMultipleRegular,
    // lightImage: '/static/landing-page/hero/chat-graphic.png',
    // darkImage: '/static/landing-page/hero/chat-graphic-dark.png',
  },
  {
    title: 'Payments',
    beta: false,
    link: '#',
    icon: WalletCreditCardRegular,
    // lightImage: '/static/landing-page/hero/chat-graphic.png',
    // darkImage: '/static/landing-page/hero/chat-graphic-dark.png',
  },
  {
    title: 'Personal-Data Service',
    beta: false,
    link: '#',
    icon: DatabasePersonRegular,
    // lightImage: '/static/landing-page/hero/chat-graphic.png',
    // darkImage: '/static/landing-page/hero/chat-graphic-dark.png',
  },
  {
    title: 'Product Experience Manager',
    link: '/docs/api/pxm/products/product-experience-manager-introduction',
    icon: BookRegular,
    // lightImage: '/static/landing-page/hero/voice-graphic.png',
    // darkImage: '/static/landing-page/hero/voice-graphic-dark.png',
  },
  {
    title: 'Promotions Builder',
    beta: false,
    link: '/changelog/product/promotions-builder',
    icon: BuildingRetailMoneyRegular,
    // lightImage: '/static/landing-page/hero/chat-graphic.png',
    // darkImage: '/static/landing-page/hero/chat-graphic-dark.png',
  },
  {
    title: 'Subscriptions',
    link: '/changelog/product/subscriptions',
    icon: ArrowSyncFilled,
    // lightImage: '/static/landing-page/hero/livestream-graphic.png',
    // darkImage: '/static/landing-page/hero/livestream-graphic-dark.png',
  },
  {
    title: 'Settings',
    beta: false,
    link: '/changelog/product/settings',
    icon: SettingsRegular,
    // lightImage: '/static/landing-page/hero/chat-graphic.png',
    // darkImage: '/static/landing-page/hero/chat-graphic-dark.png',
  },
  {
    title: 'Promotions-Standard',
    beta: false,
    link: '/changelog/product/promotions-standard',
    icon: BuildingRetailRegular,
    // lightImage: '/static/landing-page/hero/chat-graphic.png',
    // darkImage: '/static/landing-page/hero/chat-graphic-dark.png',
  },
  {
    title: 'Customers',
    link: '/changelog/product/customers',
    icon: PersonCircleRegular,
    // lightImage: '/static/landing-page/hero/video-graphic.png',
    // darkImage: '/static/landing-page/hero/video-graphic-dark.png',
  },
];

function ChangelogLanding({
  link,
  title,
  icon: Icon,
  //text,
 // lightImage,
 // darkImage,
  beta,
}: (typeof PRODUCTS)[0]) {
  return (
    <Link
      to={link}
      style={{
        borderWidth: '1px',
      }}
      className={clsx(
        'group relative cursor-pointer overflow-clip rounded-lg from-primary/30 to-transparent text-primary transition-all hover:bg-gradient-to-tr hover:text-primary hover:no-underline dark:text-white',
        'border-secondary-700 bg-secondary-900 hover:!border-primary dark:border-secondary-800'
      )}
    >
      <div className="p-2 !pb-2">
        <h5 className="mb-1 flex items-center gap-4 font-jakarta group-hover:text-primary">
          <Icon className="h-5 w-5" />
          <div>
            {title}
            {beta && <span className="font-normal text-text-400"> (Beta)</span>}
          </div>
        </h5>
      </div>
    </Link>
  );
}

export default function Changelog() {
  return (
    <>
      <section className="no-underline-links px-4 lg:py-0 max-w-6xl mx-auto grid w-full grid-cols-1 grid-rows-1 gap-3">
        <div className="pb-12 pt-8">
          <h1>Elastic Path Changelog</h1>
          The changelog contains updates and modifications in Commerce, Composer, Product Experience Manager,
          Subscriptions and Payments products. The changelog does not include:
          <p></p>
          <ul>
            <li>Underlying security patches</li>
            <li>Routine library updates</li>
          </ul>

          <p>Find the latest release notes for <a href="https://elasticpath.dev/docs/studio">Studio here</a>.</p>
          Keep up with changes to Elastic Path services by subscribing to our <a
          href="https://elasticpath.dev/changelog/rss.xml">RSS Feed</a>, <a
          href="https://elasticpath.dev/changelog/atom.xml">Atom Feed</a>, or <a
          href="https://elasticpath.dev/changelog/feed.json">JSON Feed</a>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl grid-cols-1 px-4 pb-12">
        <Link
          to="/changelog"
          style={{
            borderWidth: '1px',
          }}
          className={clsx(
            'group relative cursor-pointer overflow-clip rounded-lg hover:text-white hover:no-underline text-white',
            'border-secondary-700 bg-secondary-900 hover:!border-primary dark:border-secondary-800'
          )}
        >
          <div className="mx-auto w-full max-w-6xl px-2 py-2 pt-3 bg-primary hover:bg-black">
            <h5 className="mb-1 flex items-center font-jakarta">
              <div>
                Changelog for All APIs and Commerce Manager
              </div>
            </h5>
          </div>
        </Link>
      </section>
      <section className="mx-auto grid w-full max-w-6xl grid-cols-1 px-4 pb-4">
        <h3>Changelog by Service</h3>
      </section>
      <section className="mx-auto grid w-full max-w-6xl grid-cols-1 grid-rows-2 gap-3 px-4 pb-16 md:grid-cols-3">
        {PRODUCTS.map((product) => (
          <ChangelogLanding {...product} key={product.title} />
        ))}
      </section>
    </>
  );
}
