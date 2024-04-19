import React from 'react';
import Link from '@docusaurus/Link';
import {
  ShoppingBagRegular,
  BookRegular,
  ArrowSyncFilled,
  PersonCircleRegular,
  AppsListRegular,
  WalletCreditCardRegular,
  ContactCardGroupRegular,
  BookDatabaseRegular,
  ConnectedRegular,
  ArrowExportLtrFilled,
} from '@fluentui/react-icons';
import clsx from 'clsx';

const PRODUCTS = [
  {
    title: 'Product Experience Manager',
    link: '/docs/api/pxm/pricebooks',
    icon: BookRegular,
    // lightImage: '/static/landing-page/hero/voice-graphic.png',
    // darkImage: '/static/landing-page/hero/voice-graphic-dark.png',
    text: 'Create unique product experiences that exceed your customer expectations and drive growth, all with less reliance on IT for custom work.'
  },
  {
    title: 'Promotions',
    beta: false,
    link: '/docs/api/promotions',
    icon: AppsListRegular,
    // lightImage: '/static/landing-page/hero/chat-graphic.png',
    // darkImage: '/static/landing-page/hero/chat-graphic-dark.png',
    text: 'Manage your promotions with industry leading capabilities.',
  },
  {
    title: 'Subscriptions',
    link: '/docs/api/subscriptions',
    icon: ArrowSyncFilled,
    // lightImage: '/static/landing-page/hero/livestream-graphic.png',
    // darkImage: '/static/landing-page/hero/livestream-graphic-dark.png',
    text: 'Easy deploy paid memberships, subscribe & save, and more to drive recurring revenue and improved average order value.',
  },
  {
    title: 'Account Management',
    link: '/docs/api/accounts',
    icon: PersonCircleRegular,
    // lightImage: '/static/landing-page/hero/video-graphic.png',
    // darkImage: '/static/landing-page/hero/video-graphic-dark.png',
    text: 'Create accounts and account members. Associated account members can log in to the store and create orders for their accounts.',
  },
  {
    title: 'Addresses',
    beta: false,
    link: '/docs/api/addresses',
    icon: ContactCardGroupRegular,
    // lightImage: '/static/landing-page/hero/chat-graphic.png',
    // darkImage: '/static/landing-page/hero/chat-graphic-dark.png',
    text: 'Store customer addresses for billing and shipping.',
  },
  {
    title: 'Carts, Checkout, Orders',
    beta: false,
    link: '/docs/api/carts',
    icon: ShoppingBagRegular,
    // lightImage: '/static/landing-page/hero/chat-graphic.png',
    // darkImage: '/static/landing-page/hero/chat-graphic-dark.png',
    text: 'Create unique product experiences that exceed your customer expectations and drive growth, all with less reliance on IT for custom work.',
  },
  {
    title: 'Payments',
    beta: false,
    link: '/docs/api/payments',
    icon: WalletCreditCardRegular,
    // lightImage: '/static/landing-page/hero/chat-graphic.png',
    // darkImage: '/static/landing-page/hero/chat-graphic-dark.png',
    text: 'Create unique product experiences that exceed your customer expectations and drive growth, all with less reliance on IT for custom work.',
  },
  {
    title: 'Custom Data',
    beta: false,
    link: '/docs/api/flows',
    icon: BookDatabaseRegular,
    // lightImage: '/static/landing-page/hero/chat-graphic.png',
    // darkImage: '/static/landing-page/hero/chat-graphic-dark.png',
    text: 'Create unique product experiences that exceed your customer expectations and drive growth, all with less reliance on IT for custom work.',
  },
  {
    title: 'Integrations',
    beta: false,
    link: '/docs/api/integrations',
    icon: ConnectedRegular,
    // lightImage: '/static/landing-page/hero/chat-graphic.png',
    // darkImage: '/static/landing-page/hero/chat-graphic-dark.png',
    text: 'Create unique product experiences that exceed your customer expectations and drive growth, all with less reliance on IT for custom work.',
  },
  {
    title: 'Exporter',
    beta: false,
    link: '/docs/api/exporter',
    icon: ArrowExportLtrFilled,
    // lightImage: '/static/landing-page/hero/chat-graphic.png',
    // darkImage: '/static/landing-page/hero/chat-graphic-dark.png',
    text: 'Create unique product experiences that exceed your customer expectations and drive growth, all with less reliance on IT for custom work.',
  },
];

function HeroAPI({
  link,
  title,
  icon: Icon,
  text,
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
        'group relative cursor-pointer overflow-clip rounded-3xl from-primary/30 via-transparent to-transparent text-black transition-all hover:bg-gradient-to-tr hover:text-primary hover:no-underline dark:text-white',
        'border-secondary-700 bg-secondary-900 hover:!border-primary dark:border-secondary-800'
      )}
    >
      <div className="p-6 !pb-6">
        <h3 className="mb-1.5 flex items-center gap-3 font-jakarta group-hover:text-primary">
          <Icon className="h-7 w-7" />
          <div>
            {title}
            {beta && <span className="font-normal text-text-400"> (Beta)</span>}
          </div>
        </h3>
        <p className="mb-0 text-sm text-text-400">{text}</p>
      </div>
    </Link>
  );
}

export default function HeroSectionAPIs() {
  return (
    <>
      <section className="no-underline-links px-4 pt-16 lg:py-0">
        <div className="flex flex-col items-center justify-between py-14">
          <h2 className="mb-4 font-jakarta text-3xl font-bold">
            Documentation for Elastic Path's APIs
          </h2>
          <p className="max-w-3xl text-center text-text-400">
            Use our interactive documentation directly on our site or download the OpenAPI specification file for the services you are interested in.
          </p>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl grid-cols-1 grid-rows-2 gap-6 px-4 md:grid-cols-2">
        {PRODUCTS.map((product) => (
          <HeroAPI {...product} key={product.title} />
        ))}
      </section>
    </>
  );
}
