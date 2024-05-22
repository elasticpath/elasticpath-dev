/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebarsDefault = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docsSidebar: [{ type: 'autogenerated', dirName: '.' }],
  eppaymentsSidebar: [
      {
        type: 'autogenerated',
        dirName: 'payments'
      }
      ],
  developerSidebar: [
    {
      type: "category",
      label: "Developer Tools",
      link: {
        type: "generated-index",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "developer-tools",
        },
      ],
    },
  ],
  commerceSidebar: [
    //{
    //  type: "html",
    //  value: `<img src="https://elastic-path.transforms.svdcdn.com/production/images/Stylized-Product-Page-Images/Stylized-product-image_1080x960.png?w=900&h=900&q=90&fm=webp&fit=crop&dm=1691683044&s=4b3b3fdbbe15d5d37f82d76379402b9a">`, // The HTML to be rendered
    //  defaultStyle: true, // Use the default menu item styling
    //},
        {
          type: 'autogenerated',
          dirName: 'commerce-cloud',
        },
  ],
  cm: [
    {
      type: 'autogenerated',
      dirName: 'commerce-manager',
    },
  ],
  //this is for the subscription service, non-api documentation
  subscriptionsSidebar: [
    {
      type: 'autogenerated',
      dirName: 'subscriptions',
    },
  ],
  // Studio Documentation
  studio: [
    {
      type: 'autogenerated',
      dirName: 'studio',
    },
  ],
  //paymentSidebar: [
  //  {
  //    type: "html",
  //    value: `<p style="color: var(--ifm-color-secondary-darkest)">PAYMENTS</p>`, // The HTML to be rendered
  //    defaultStyle: true, // Use the default menu item styling
  //  },
  //  {
  //    type: 'autogenerated',
  //    dirName: 'payments'
  //  }
  //],
  pxmSidebar: [
  {
    type: 'autogenerated',
    dirName: 'pxm',
  },
],
  composerSidebar: [
    {
      type: 'autogenerated',
      dirName: 'composer',
    },
  ],
  accounts: [
    {
      type: "category",
      label: "Accounts",
      link: {
        type: "generated-index",
        title: "Account Management API",
        slug: "/api/accounts",
      },
      // @ts-ignore
      items: require("./docs/api/accounts/sidebar.js")
    },
    {
      type: "category",
      label: "Addresses",
      link: {
        type: "generated-index",
        title: "Addresses API",
        slug: "/api/addresses",
      },
      // @ts-ignore
      items: require("./docs/api/addresses/sidebar.js")
    },
  ],
  carts: [
    {
      type: "category",
      label: "Carts, Checkout, Orders",
      link: {
        type: "generated-index",
        title: "Carts, Checkout Orders API",
        slug: "/api/carts"
      },
      // @ts-ignore
      items: require("./docs/api/carts/sidebar.js")
    },
    {
      type: "category",
      label: "Order Exporter",
      link: {
        type: "generated-index",
        title: "Order Exporter API",
        slug: "/docs/api/exporter/exporter-service-api"
      },
      // @ts-ignore
      items: require("./docs/api/exporter/sidebar.js")
    },
  ],
  commerceextensions: [
    {
      type: "category",
      label: "Commerce Extensions",
      link: {
        type: "generated-index",
        title: "Commerce Extensions",
        slug: "/api/commerce-extensions"
      },
      // @ts-ignore
      items: require("./docs/api/commerceextensions/sidebar.js")
    },
  ],
  exporter: [
    {
      type: "category",
      label: "Exporter",
      link: {
        type: "generated-index",
        title: "Exporter API",
        slug: "/api/exporter"
      },
      // @ts-ignore
      items: require("./docs/api/exporter/sidebar.js")
    },
  ],
  flows: [
    {
      type: "category",
      label: "Flows",
      link: {
        type: "generated-index",
        title: "Flows API",
        slug: "/api/flows"
      },
      // @ts-ignore
      items: require("./docs/api/flows/sidebar.js")
    },
  ],
  integrations: [
    {
      type: "category",
      label: "Integrations",
      link: {
        type: "generated-index",
        title: "Integrations API",
        slug: "/api/integrations"
      },
      // @ts-ignore
      items: require("./docs/api/integrations/sidebar.js")
    },
  ],
  payments: [
    {
      type: "category",
      label: "Payments",
      link: {
        type: "generated-index",
        title: "Payments API",
        slug: "/api/payments"
      },
      // @ts-ignore
      items: require("./docs/api/payments/sidebar.js")
    },
  ],
  promotions: [
    {
      type: "category",
      label: "Promotions",
      link: {
        type: "generated-index",
        title: "Promotions API",
        slug: "/api/promotions"
      },
      // @ts-ignore
      items: require("./docs/api/promotions/sidebar.js")
    },
  ],
  pxm: [
    {
      type: "category",
      label: "Product Information Manager",
      link: {
        type: "generated-index",
        title: "Product Information Manager API",
        slug: "/api/pxm/products"
      },
      // @ts-ignore
      items: require("./docs/api/pxm/products/sidebar.js")
    },
    {
      type: "category",
      label: "Files",
      link: {
        type: "generated-index",
        title: "Files API",
        slug: "/api/pxm/files"
      },
      // @ts-ignore
      items: require("./docs/api/pxm/files/sidebar.js")
    },
    //Price Books
    {
      type: "category",
      label: "Price Books",
      link: {
        type: "generated-index",
        title: "Price Books API",
        slug: "/api/pxm/pricebooks"
      },
      // @ts-ignore
      items: require("./docs/api/pxm/pricebooks/sidebar.js")
    },
    //Catalog
    //{
    //  type: "category",
    //  label: "Catalog",
    //  link: {
    //    type: "generated-index",
    //    title: "Catalog API",
    //    slug: "/api/pxm/catalog"
    //  },
      // @ts-ignore
    //  items: require("./docs/api/pxm/catalog/sidebar.js")
    //},
    // Inventory
    {
      type: "category",
      label: "Inventory",
      link: {
        type: "generated-index",
        title: "Inventory API",
        slug: "/api/pxm/inventory"
      },
      // @ts-ignore
      items: require("./docs/api/pxm/inventory/sidebar.js")
    },
    // Currencies
      {
      type: "category",
      label: "Currencies",
      link: {
        type: "generated-index",
        title: "Currencies API",
        slug: "/api/pxm/currencies"
      },
        // @ts-ignore
        items: require("./docs/api/pxm/currencies/sidebar.js")
    },
    //{
    //  type: 'category',
    //  label: 'Includes',
    //  items: ['pxm/includes'],
   // },
  ],
  settings: [
    {
      type: "category",
      label: "Settings API",
      link: {
        type: "generated-index",
        title: "Settings API",
        slug: "/api/settings"
      },
      // @ts-ignore
      items: require("./docs/api/settings/sidebar.js")
    },
  ],
  subscriptions: [
    {
      type: "category",
      label: "Subscriptions API",
      link: {
        type: "generated-index",
        title: "Subscriptions API",
        slug: "/api/subscriptions"
      },
      // @ts-ignore
      items: require("./docs/api/subscriptions/sidebar.js")
    },
    //Link not in the API spec
    {
      type: 'link',
      label: 'Observable Events',
      href: '/docs/api/subscriptions/observable-events', // The internal path
    },
  ],
  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */

};

module.exports = sidebarsDefault;
