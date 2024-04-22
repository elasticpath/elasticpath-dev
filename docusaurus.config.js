// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/vsLight");
const darkCodeTheme = require("prism-react-renderer/themes/vsDark");

const fs = require('fs');
const resourcesHTML = fs.readFileSync('./src/snippets/resources.html', 'utf-8');
const resourceDOCS = fs.readFileSync('./src/snippets/resourceDOCS.html', 'utf-8');

/** @type {import('@docusaurus/plugin-content-docs').Options} */
const defaultSettings = {
  breadcrumbs: true,
  showLastUpdateTime: true,
  sidebarCollapsible: true,
  sidebarPath: require.resolve('./sidebars-default.js'),
};

/** @type {import('@docusaurus/plugin-content-docs').Options[]} */
const docs = [
  // PXM
  {
    id: 'pxm',
    path: 'docs/pxm',
    routeBasePath: '/docs/pxm',
    versions: {
      current: {
        label: 'v2',
      },
    },
  },
  {
    id: 'subscriptions',
    path: 'docs/subscriptions',
    routeBasePath: '/docs/subscriptions',
    versions: {
      current: {
        label: 'v2',
      },
    },
  },
  {
    id: 'getting-started',
    path: 'docs/getting-started',
    routeBasePath: '/docs/getting-started',
    versions: {
      current: {
        label: 'v2',
      },
    },
  },
  {
    id: 'analytics',
    path: 'docs/analytics',
    routeBasePath: '/docs/commerce-cloud/analytics',
    versions: {
      current: {
        label: 'v2',
      },
    },
  },
  {
    id: 'accounts',
    path: 'docs/accounts',
    routeBasePath: '/docs/accounts',
    versions: {
      current: {
        label: 'v2',
      },
    },
  },
  {
    id: 'addresses',
    path: 'docs/addresses',
    routeBasePath: '/docs/commerce-cloud/addresses',
    versions: {
      current: {
        label: 'v2',
      },
    },
  },
  // Commerce Cloud
  {
    id: 'authentication',
    path: 'docs/authentication',
    routeBasePath: '/docs/commerce-cloud/authentication',
    versions: {
      current: {
        label: 'v2',
      },
    },
  },
  {
    id: 'carts',
    path: 'docs/carts',
    routeBasePath: '/docs/commerce-cloud/carts',
    versions: {
      current: {
        label: 'v2',
      },
    },
  },
  {
    id: 'checkout',
    path: 'docs/checkout',
    routeBasePath: '/docs/commerce-cloud/checkout',
    versions: {
      current: {
        label: 'v2',
      },
    },
  },
  {
    id: 'custom-data',
    path: 'docs/custom-data',
    routeBasePath: '/docs/commerce-cloud/custom-data',
    versions: {
      current: {
        label: 'v2',
      },
    },
  },
  {
    id: 'customer-management',
    path: 'docs/customer-management',
    routeBasePath: '/docs/commerce-cloud/customer-management',
    versions: {
      current: {
        label: 'v2',
      },
    },
  },
  {
    id: 'global-project-settings',
    path: 'docs/global-project-settings',
    routeBasePath: '/docs/commerce-cloud/global-project-settings',
    versions: {
      current: {
        label: 'v2',
      },
    },
  },
  {
    id: 'integrations',
    path: 'docs/integrations',
    routeBasePath: '/docs/commerce-cloud/integrations',
    versions: {
      current: {
        label: 'v2',
      },
    },
  },
  {
    id: 'orders',
    path: 'docs/orders',
    routeBasePath: '/docs/commerce-cloud/orders',
    versions: {
      current: {
        label: 'v2',
      },
    },
  },
  {
    id: 'organizations',
    path: 'docs/organizations',
    routeBasePath: '/docs/commerce-cloud/organizations',
    versions: {
      current: {
        label: 'v2',
      },
    },
  },
  {
    id: 'payment',
    path: 'docs/payment',
    routeBasePath: '/docs/commerce-cloud/payments',
    versions: {
      current: {
        label: 'v2',
      },
    },
  },
  {
    id: 'personal-data',
    path: 'docs/personal-data',
    routeBasePath: '/docs/commerce-cloud/personal-data',
    versions: {
      current: {
        label: 'v2',
      },
    },
  },
  {
    id: 'promotions',
    path: 'docs/promotions',
    routeBasePath: '/docs/commerce-cloud/promotions',
    versions: {
      current: {
        label: 'v2',
      },
    },
  },
  {
    id: 'shipping-groups',
    path: 'docs/shipping-groups',
    routeBasePath: '/docs/commerce-cloud/shipping-groups',
    versions: {
      current: {
        label: 'v2',
      },
    },
  },
  {
    id: 'team-management',
    path: 'docs/team-management',
    routeBasePath: '/docs/commerce-cloud/team-management',
    versions: {
      current: {
        label: 'v2',
      },
    },
  },
  // Composer
  {
    id: 'composer',
    path: 'docs/composer',
    routeBasePath: '/docs/composer',
    versions: {
      current: {
        label: 'v2',
      },
    },
  },
  // Developer Tools
  {
    id: 'developer',
    path: 'docs/developer-tools',
    routeBasePath: '/docs/commerce-cloud/developer-tools',
    versions: {
      current: {
        label: 'v2',
      },
    },
  },
];
/**
 * Create a section
 * @param {import('@docusaurus/plugin-content-docs').Options} options
 */
function create_doc_plugin({
                             sidebarPath = require.resolve('./sidebars-default.js'),
                             ...options
                           }) {
  return [
    '@docusaurus/plugin-content-docs',
    /** @type {import('@docusaurus/plugin-content-docs').Options} */
    ({
      ...defaultSettings,
      sidebarPath,
      ...options,
    }),
  ];
}
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Elastic Path Documentation',
  tagline: 'API, Commerce Manager, Guides and Documentation 🚀',
  url: 'https://elasticpath.dev',
  baseUrl: '/',
  favicon: '/favicon.ico',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.
  markdown: {
    mermaid: true,
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars-default.js"),
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/elasticpath/elasticpath-dev"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          ignorePatterns: ['/tags/**'],
        },
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        docs: {
          sidebar: {
            hideable: true,
            autoCollapseCategories: true,
          },
        },
        announcementBar: { //comment out when not needed, please do not remove
          id: 'support_us',
          content:
              'We have rebuilt our documentation site and now include OpenAPI specifications for most endpoints.',
          backgroundColor: '#0E1521',
          textColor: '#FFFFFF',
          isCloseable: true,
        },
        colorMode: {
          defaultMode: 'light',
          disableSwitch: false,
          respectPrefersColorScheme: true,
        },
        navbar: {
          logo: {
            href: '/',
            src: '/logo/light.svg',
            srcDark: '/logo/dark.svg',
            alt: 'Elastic Path Docs',
            height: '60px',
            width: '120px',
          },
          hideOnScroll: true,
          items: [
            {
              label: 'Guides',
              to: 'docs/guides',
              className: 'guides-top-header',
            },
            {
              label: 'Docs',
              type: 'dropdown',
              className: 'nav-dropdown',
              items: [
                {
                  type: 'html',
                  value: resourceDOCS,
                  className: 'nav-dropdown',
                },
              ],
            },
            {
              label: 'API Documentation',
              to: '/api/',
            },
            {
              label: 'Resources',
              type: 'dropdown',
              className: 'nav-dropdown resources-dropdown',
              items: [
                {
                  type: 'html',
                  value: resourcesHTML,
                  className: 'nav-dropdown',
                },
              ],
            },
            {
              label: 'Support',
              to: 'https://support.elasticpath.com',
            },
            {
              type: 'search',
              position: 'right',
            },
            {
              label: 'Get in Touch',
              href: 'https://www.elasticpath.com/get-in-touch',
              position: 'right',
              className: 'navbar-book-demo',
            },
            {
              label: 'Free Trial',
              href: 'https://useast.cm.elasticpath.com',
              position: 'right',
              className: 'dev-portal-signup dev-portal-link',
            },
          ],
        },
        footer: {
          style: "dark",
          links: [
            {
              title: "Docs",
              items: [
                {
                  label: "Tutorial",
                  to: "/docs/intro",
                },
              ],
            },
            {
              title: "Community",
              items: [
                {
                  label: "Stack Overflow",
                  href: "https://stackoverflow.com/questions/tagged/docusaurus",
                },
                {
                  label: "Discord",
                  href: "https://discordapp.com/invite/docusaurus",
                },
                {
                  label: "Twitter",
                  href: "https://twitter.com/docusaurus",
                },
              ],
            },
            {
              title: "More",
              items: [
                {
                  label: "Blog",
                  to: "/blog",
                },
                {
                  label: "GitHub",
                  href: "https://github.com/facebook/docusaurus",
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} Elastic Path Software`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
          additionalLanguages: ["dart",
            "ruby",
            "groovy",
            "kotlin",
            "java",
            "swift",
            "objectivec",
            "javascript",
            "bash",
          ],
          magicComments: [
            {
              className: 'theme-code-block-highlighted-line',
              line: 'highlight-next-line',
              block: { start: 'highlight-start', end: 'highlight-end' },
            },
            {
              className: 'code-block-error-line',
              line: 'highlight-next-line-error',
            },
          ],
        },
        algolia: {
          appId: 'R6IQGTOQJY',
          apiKey: '337676fe582da532ec7bcbca3332f590',
          indexName: 'docs',
          contextualSearch: true,
          searchParameters: {},
        },
      }),

  plugins: [
    async function tailwind(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
      //define OpenAPI Specs to transform and include in documentation
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic",
        config: {
          accounts: {
            specPath: "openapispecs/accounts/OpenAPISpec.yaml",
            outputDir: "docs/api/accounts",
            downloadUrl:
                "https://openapi-documentation.vercel.app//openapispecs/accounts/OpenAPISpec.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          addresses: {
            specPath: "openapispecs/addresses/OpenAPISpec.yaml",
            outputDir: "docs/api/addresses",
            downloadUrl:
                "https://openapi-documentation.vercel.app/openapispecs/addresses/OpenAPISpec.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          //catalog: {
          //  specPath: "openapispecs/catalog/catalog_view.yaml",
          //  outputDir: "docs/api/pxm/catalog",
          //  downloadUrl:
          //      "https://openapi-documentation.vercel.appopenapispecs/catalog_view.yaml",
          //  sidebarOptions: {
          //    groupPathsBy: "tag",
          //    categoryLinkSource: "tag",
          //  },
          //},
          cartsorders: {
            specPath: "openapispecs/cartsorders/OpenAPISpec.yaml",
            outputDir: "docs/api/carts",
            downloadUrl:
                "https://openapi-documentation.vercel.app/openapispecs/OpenAPISpec.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          exporter: {
            specPath: "openapispecs/exporter/exporter.yaml",
            outputDir: "docs/api/exporter",
            downloadUrl:
                "https://openapi-documentation.vercel.app/openapispecs/exporter.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          files: {
            specPath: "openapispecs/files/files.yaml",
            outputDir: "docs/api/files",
            downloadUrl:
                "https://openapi-documentation.vercel.app/openapispecs/files.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          flows: {
            specPath: "openapispecs/flows/flows.yaml",
            outputDir: "docs/api/flows",
            downloadUrl:
                "https://openapi-documentation.vercel.app/openapispecs/flows/flows.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          integrations: {
            specPath: "openapispecs/integrations/openapi.yaml",
            outputDir: "docs/api/integrations",
            downloadUrl:
                "https://openapi-documentation.vercel.app/openapispecs/integrations.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          inventory: {
            specPath: "openapispecs/inventory/openapi.yaml",
            outputDir: "docs/api/pxm/inventory",
            downloadUrl:
                "https://openapi-documentation.vercel.app/openapispecs/inventory.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          payments: {
            specPath: "openapispecs/payments/OpenAPISpec.yaml",
            outputDir: "docs/api/payments",
            downloadUrl:
                "https://openapi-documentation.vercel.app/openapispecs/payments.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
         // pim: {
         //   specPath: "openapispecs/pim/pim.yaml",
         //   outputDir: "docs/api/pxm/products",
         //   downloadUrl:
         //       "https://openapi-documentation.vercel.appopenapispecs/pim.yaml",
          //  sidebarOptions: {
          //    groupPathsBy: "tag",
          //    categoryLinkSource: "tag",
          //  },
          //},
          pricebooks: {
            specPath: "openapispecs/pricebooks/pricebooks.yaml",
            outputDir: "docs/api/pxm/pricebooks",
            downloadUrl:
                "https://openapi-documentation.vercel.app/openapispecs/pricebooks.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          promotions: {
            specPath: "openapispecs/promotions/OpenAPISpec.yml",
            outputDir: "docs/api/promotions",
            downloadUrl:
                "https://openapi-documentation.vercel.app/openapispecs/promotions.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          subscriptions: {
            specPath: "openapispecs/subscriptions/public_openapi.yaml",
            outputDir: "docs/api/subscriptions",
            downloadUrl:
                "https://raw.githubusercontent.com/davidmoltin/subscriptions/main/subscriptions.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
        },
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        /**
         * Required for any multi-instance plugin
         */
        id: 'changelog-pxm',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: 'changelog/pxm',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: './changelog/pxm',
      },
    ],
  ],
  themes: ['docusaurus-theme-openapi-docs','@docusaurus/theme-mermaid','@docusaurus/theme-live-codeblock'],
};

module.exports = config;
