import { themes as prismThemes } from "prism-react-renderer";

import fs from "fs";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import type * as SearchLocal from "@easyops-cn/docusaurus-search-local";

const elasticpath = {
  plain: {
    color: "#ebf4ff",
    backgroundColor: "#1d262f",
  },
  styles: [
    {
      types: ["prolog", "comment", "doctype", "cdata"],
      style: {
        color: "#fff",
      },
    },
    {
      types: ["punctuation"],
      style: {
        color: "#7eb6f6",
      },
    },
    {
      types: ["namespace"],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ["tag", "operator", "number"],
      style: {
        color: "#0aa370",
      },
    },
    {
      types: ["property", "function"],
      style: {
        color: "#7eb6f6",
      },
    },
    {
      types: ["tag-id", "selector", "atrule-id"],
      style: {
        color: "#ebf4ff",
      },
    },
    {
      types: ["attr-name", "language-javascript"],
      style: {
        color: "#7eb6f6",
      },
    },
    {
      types: [
        "boolean",
        "string",
        "entity",
        "url",
        "attr-value",
        "keyword",
        "control",
        "directive",
        "unit",
        "statement",
        "regex",
        "atrule",
        "language-css",
        "language-scss",
      ],
      style: {
        color: "#47ebb4",
      },
    },
    {
      types: ["placeholder", "variable"],
      style: {
        color: "#47ebb4",
      },
    },
    {
      types: ["deleted"],
      style: {
        textDecorationLine: "line-through",
      },
    },
    {
      types: ["inserted"],
      style: {
        borderBottom: "1px dotted #ebf4ff",
        textDecorationLine: "none",
      },
    },
    {
      types: ["italic"],
      style: {
        fontStyle: "italic",
      },
    },
    {
      types: ["important", "bold"],
      style: {
        fontWeight: "bold",
      },
    },
    {
      types: ["important"],
      style: {
        color: "#7eb6f6",
      },
    },
    {
      types: ["entity"],
      style: {
        cursor: "help",
      },
    },
  ],
};

const resourcesHTML = fs.readFileSync("./src/snippets/resources.html", "utf-8");
const resourceDOCS = fs.readFileSync(
  "./src/snippets/resourceDOCS.html",
  "utf-8",
);

const config: Config = {
  title: "Elastic Path Documentation",
  tagline: "API, Commerce Manager, Guides and Documentation 🚀",
  url: "https://elasticpath.dev",
  baseUrl: "/",
  favicon: "/favicon.ico",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "ignore",
  onBrokenAnchors: "ignore",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "elasticpath", // Usually your GitHub org/user name.
  projectName: "elasticpath-dev", // Usually your repo name.
  markdown: {
    mermaid: true,
  },
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/elasticpath/elasticpath-dev/tree/main/",
          docItemComponent: "@theme/ApiItem",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        sitemap: {
          ignorePatterns: ["/tags/**"],
        },
        gtag: {
          trackingID: "G-NZ3NL8DLLD",
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    // announcementBar: {
    //comment out when not needed, please do not remove
    //   id: "support_us",
    //   content:
    //     "The new OpenAPI specifications are here. Navigate to Docs, then API Documentation to learn more.",
    //   backgroundColor: "#0E1521",
    //   textColor: "#FFFFFF",
    //   isCloseable: true,
    // },
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      logo: {
        href: "/",
        src: "/logo/light.svg",
        srcDark: "/logo/dark.svg",
        alt: "Elastic Path Docs",
        height: "60px",
        width: "120px",
      },
      hideOnScroll: true,
      items: [
        {
          label: "Guides",
          to: "guides",
        },
        {
          label: "Docs",
          type: "dropdown",
          className: "nav-dropdown",
          items: [
            {
              type: "html",
              value: resourceDOCS,
              className: "nav-dropdown",
            },
          ],
        },
        {
          label: "Resources",
          type: "dropdown",
          className: "nav-dropdown resources-dropdown",
          items: [
            {
              type: "html",
              value: resourcesHTML,
              className: "nav-dropdown",
            },
          ],
        },
        {
          label: "Changelog",
          to: "/changelog-landing",
        },
        {
          label: "Support",
          to: "https://support.elasticpath.com",
        },
        {
          type: "search",
          position: "right",
        },
        {
          label: "Get in Touch",
          href: "https://www.elasticpath.com/get-in-touch",
          position: "right",
          className: "navbar-book-demo",
        },
        {
          label: "Free Trial",
          href: "https://useast.cm.elasticpath.com/free-trial",
          position: "right",
          className: "dev-portal-signup dev-portal-link",
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
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: [
        "dart",
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
          className: "theme-code-block-highlighted-line",
          line: "highlight-next-line",
          block: { start: "highlight-start", end: "highlight-end" },
        },
        {
          className: "code-block-error-line",
          line: "highlight-next-line-error",
        },
      ],
    },
  } satisfies Preset.ThemeConfig,

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
    [
      "posthog-docusaurus",
      {
        apiKey: "phc_NsCAwFSbBegeJ8eRtU9T53pOVH8m7uoeMMwRXULdjVY",
        //appUrl: "<ph_client_api_host>", // optional, defaults to "https://us.i.posthog.com"
        enableInDevelopment: false, // optional
      },
    ],
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
              "https://raw.githubusercontent.com/elasticpath/elasticpath-dev/main/openapispecs/accounts/OpenAPISpec.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          addresses: {
            specPath: "openapispecs/addresses/AccountAddresses.yaml",
            outputDir: "docs/api/addresses",
            downloadUrl:
              "https://raw.githubusercontent.com/elasticpath/elasticpath-dev/main/openapispecs/addresses/AccountAddresses.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          authentication: {
            specPath: "openapispecs/authentication/OpenAPISpec.yaml",
            outputDir: "docs/api/authentication",
            downloadUrl:
              "https://raw.githubusercontent.com/elasticpath/elasticpath-dev/main/openapispecs/authentication/OpenAPISpec.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          customeraddresses: {
            specPath: "openapispecs/customeraddresses/CustomerAddresses.yaml",
            outputDir: "docs/api/customer-addresses",
            downloadUrl:
              "https://raw.githubusercontent.com/elasticpath/elasticpath-dev/main/openapispecs/customeraddresses/CustomerAddresses.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          applicationkeys: {
            specPath: "openapispecs/applicationkeys/OpenAPISpec.yaml",
            outputDir: "docs/api/application-keys",
            downloadUrl:
              "https://raw.githubusercontent.com/elasticpath/elasticpath-dev/main/openapispecs/applicationkeys/OpenAPISpec.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          merchantrealmmappings: {
            specPath: "openapispecs/merchantrealmmappings/OpenAPISpec.yaml",
            outputDir: "docs/api/merchant-realm-mappings",
            downloadUrl:
              "https://raw.githubusercontent.com/elasticpath/elasticpath-dev/main/openapispecs/merchant-realm-mappings/OpenAPISpec.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          catalog: {
            specPath: "openapispecs/catalog/catalog_view.yaml",
            outputDir: "docs/api/pxm/catalog",
            downloadUrl:
              "https://raw.githubusercontent.com/elasticpath/elasticpath-dev/main/openapispecs/catalog_view.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          cartsorders: {
            specPath: "openapispecs/cartsorders/OpenAPISpec.yaml",
            outputDir: "docs/api/carts",
            downloadUrl:
              "https://raw.githubusercontent.com/elasticpath/elasticpath-dev/main/openapispecs/cartsorders/OpenAPISpec.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          currencies: {
            specPath: "openapispecs/currencies/OpenAPISpec.yaml",
            outputDir: "docs/api/pxm/currencies",
            downloadUrl:
              "https://raw.githubusercontent.com/elasticpath/elasticpath-dev/main/openapispecs/currencies/OpenAPISpec.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          commerceextensions: {
            specPath: "openapispecs/commerceextensions/OpenAPISpec.yaml",
            outputDir: "docs/api/commerce-extensions/",
            downloadUrl:
              "https://raw.githubusercontent.com/elasticpath/elasticpath-dev/main/openapispecs/commerceextensions/OpenAPISpec.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          personaldata: {
            specPath: "openapispecs/personaldata/OpenAPISpec.yaml",
            outputDir: "docs/api/personal-data/",
            downloadUrl:
              "https://raw.githubusercontent.com/elasticpath/elasticpath-dev/main/openapispecs//OpenAPISpec.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          exporter: {
            specPath: "openapispecs/exporter/exporter.yaml",
            outputDir: "docs/api/exporter",
            downloadUrl:
              "https://raw.githubusercontent.com/elasticpath/elasticpath-dev/main/openapispecs/exporter/exporter.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          files: {
            specPath: "openapispecs/files/files.yaml",
            outputDir: "docs/api/pxm/files",
            downloadUrl:
              "https://raw.githubusercontent.com/elasticpath/elasticpath-dev/main/openapispecs/files/files.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          flows: {
            specPath: "openapispecs/flows/flows.yaml",
            outputDir: "docs/api/flows",
            downloadUrl:
              "https://raw.githubusercontent.com/elasticpath/elasticpath-dev/main/openapispecs/flows/flows.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          integrations: {
            specPath: "openapispecs/integrations/openapi.yaml",
            outputDir: "docs/api/integrations",
            downloadUrl:
              "https://raw.githubusercontent.com/elasticpath/elasticpath-dev/main/openapispecs/integrations/openapi.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          inventory: {
            specPath: "openapispecs/inventory/public_openapi.yaml",
            outputDir: "docs/api/pxm/inventory",
            downloadUrl:
              "https://raw.githubusercontent.com/elasticpath/elasticpath-dev/main/openapispecs/inventory/openapi.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          payments: {
            specPath: "openapispecs/payments/OpenAPISpec.yaml",
            outputDir: "docs/api/payments",
            downloadUrl:
              "https://raw.githubusercontent.com/elasticpath/elasticpath-dev/main/openapispecs/payments/OpenAPISpec.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          pim: {
            specPath: "openapispecs/pim/pim.yaml",
            outputDir: "docs/api/pxm/products",
            downloadUrl:
              "https://raw.githubusercontent.com/elasticpath/elasticpath-dev/main/openapispecs/pim/pim.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          pricebooks: {
            specPath: "openapispecs/pricebooks/pricebooks.yaml",
            outputDir: "docs/api/pxm/pricebooks",
            downloadUrl:
              "https://raw.githubusercontent.com/elasticpath/elasticpath-dev/main/openapispecs/pricebooks.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          promotions: {
            specPath: "openapispecs/promotions/OpenAPISpec.yaml",
            outputDir: "docs/api/promotions",
            downloadUrl:
              "https://raw.githubusercontent.com/elasticpath/elasticpath-dev/main/openapispecs/promotions.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          settings: {
            specPath: "openapispecs/settings/OpenAPISpec.yaml",
            outputDir: "docs/api/settings",
            downloadUrl:
              "https://raw.githubusercontent.com/elasticpath/elasticpath-dev/main/openapispecs/settings/OpenAPISpec.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          subscriptions: {
            specPath: "openapispecs/subscriptions/public_openapi.yaml",
            outputDir: "docs/api/subscriptions",
            downloadUrl:
              "https://raw.githubusercontent.com/elasticpath/elasticpath-dev/main/openapispecs/subscriptions/public_openapi.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
        },
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "guides",
        path: "guides",
        routeBasePath: "guides",
        sidebarPath: "./sidebar-guides.ts",
        editUrl: "https://github.com/elasticpath/elasticpath-dev/tree/main/",
        // ... other options
      },
    ],
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          // /docs/oldDoc -> /docs/newDoc
          {
            to: "/docs/studio/developers/custom-themes/css-variables",
            from: "/docs/cx-studio/developers/custom-themes/css-variables",
          },
          {
            to: "/docs/studio/Insights/Setting-up-an-AB-Test",
            from: "/docs/cx-studio/Insights/Setting-up-an-AB-Test",
          },
          {
            to: "/changelog/Studio-Release-Notes/2022/Release-145-July-17-2022",
            from: "/docs/cx-studio/Release-Notes/2022/Release-145-July-17-2022",
          },
          {
            to: "/docs/studio/content/advanced-page-editing/Adding-Meta-Keywords",
            from: "/docs/cx-studio/content/advanced-page-editing/Adding-Meta-Keywords",
          },
          {
            to: "/docs/studio/Integrations/Integrating-Zapier",
            from: "/docs/cx-studio/Integrations/Integrating-Zapier",
          },
          {
            to: "/changelog/Studio-Release-Notes/2021/Release-120-Nov-2-2021",
            from: "/docs/cx-studio/Release-Notes/2021/Release-120-Nov-2-2021",
          },
          {
            to: "/docs/studio/Integrations/Integrating-Triple-Whale",
            from: "/docs/cx-studio/Integrations/Integrating-Triple-Whale",
          },
          {
            to: "/docs/studio/Integrations/Adding-Typekit-Fonts",
            from: "/docs/cx-studio/Integrations/Adding-Typekit-Fonts",
          },
          {
            to: "/docs/studio/Integrations/Integrating-Salesforce",
            from: "/docs/cx-studio/Integrations/Integrating-Salesforce",
          },
          {
            to: "/docs/studio/Integrations/Integrating-Privy",
            from: "/docs/cx-studio/Integrations/Integrating-Privy",
          },
          {
            to: "/docs/studio/Integrations/Integrating-ActiveCampaign",
            from: "/docs/cx-studio/Integrations/Integrating-ActiveCampaign",
          },
          {
            to: "/docs/studio/content/advanced-page-editing/Using-Dynamic-Text-Content",
            from: "/docs/cx-studio/content/advanced-page-editing/Using-Dynamic-Text-Content",
          },
          {
            to: "/docs/studio/content/Basic-Page-Editing/Padding-Controls",
            from: "/docs/cx-studio/content/Basic-Page-Editing/Padding-Controls",
          },
          {
            to: "/docs/organizations/org-level-pxm-entities/pxm-org-pricebooks",
            from: "/docs/commerce-cloud/organizations/org-level-pxm-entities/pxm-org-pricebooks",
          },
          {
            to: "/docs/studio/content/Basic-Page-Editing/Page-Settings",
            from: "/docs/cx-studio/content/Basic-Page-Editing/Page-Settings",
          },
          {
            to: "/docs/studio/Settings/Domain-Management/Connecting-your-cPANEL-Domain",
            from: "/docs/cx-studio/Settings/Domain-Management/Connecting-your-cPANEL-Domain",
          },
          {
            to: "/docs/studio/Settings/Domain-Management/Connecting-your-OVH-Domain",
            from: "/docs/cx-studio/Settings/Domain-Management/Connecting-your-OVH-Domain",
          },
          {
            to: "/docs/studio/Integrations/Integrating-Tidio",
            from: "/docs/cx-studio/Integrations/Integrating-Tidio",
          },
          {
            to: "/docs/studio/Integrations/Integrating-Intercom",
            from: "/docs/cx-studio/Integrations/Integrating-Intercom",
          },
          {
            to: "/docs/studio/Integrations/Integrating-ConvertFlow",
            from: "/docs/cx-studio/Integrations/Integrating-ConvertFlow",
          },
          {
            to: "/docs/studio/Integrations/Integrating-authorize.net",
            from: "/docs/cx-studio/Integrations/Integrating-authorize.net",
          },
          {
            to: "/docs/studio/content/Forms-&-Contacts/Building-Forms",
            from: "/docs/cx-studio/content/Forms-&-Contacts/Building-Forms",
          },
          {
            to: "/docs/commerce-manager/product-experience-manager/pricebooks/pxm-pricebooks",
            from: "/docs/pxm/pricebooks/pxm-pricebooks",
          },
          {
            to: "/docs/studio/Integrations/stripe-connect",
            from: "/docs/cx-studio/Integrations/stripe-connect",
          },
          {
            to: "/docs/studio/Settings/Domain-Management/Connecting-your-Edgecast-Domain",
            from: "/docs/cx-studio/Settings/Domain-Management/Connecting-your-Edgecast-Domain",
          },
          {
            to: "/docs/studio/Integrations/Klaviyo-Overview-and-Integration-Guide",
            from: "/docs/cx-studio/Integrations/Klaviyo-Overview-and-Integration-Guide",
          },
          {
            to: "/docs/studio/content/Basic-Page-Editing/Smart-Links",
            from: "/docs/cx-studio/content/Basic-Page-Editing/Smart-Links",
          },
          {
            to: "/docs/studio/Integrations/Integrating-Drift",
            from: "/docs/cx-studio/Integrations/Integrating-Drift",
          },
          {
            to: "/changelog/Studio-Release-Notes/2022/Release-147-August-10-2022",
            from: "/docs/cx-studio/Release-Notes/2022/Release-147-August-10-2022",
          },
          {
            to: "/docs/studio/Integrations/stripe-payment-intents",
            from: "/docs/cx-studio/Integrations/stripe-payment-intents",
          },
          {
            to: "/docs/studio/Integrations/Integrating-Google-Tag-Manager",
            from: "/docs/cx-studio/Integrations/Integrating-Google-Tag-Manager",
          },
          {
            to: "/docs/studio/design/Header-and-Footer/Managing-Social-Links-in-your-Footer",
            from: "/docs/cx-studio/design/Header-and-Footer/Managing-Social-Links-in-your-Footer",
          },
          {
            to: "/docs/studio/content/Media-Management/Hyperlinking-Images",
            from: "/docs/cx-studio/content/Media-Management/Hyperlinking-Images",
          },
          {
            to: "/docs/studio/Integrations/Integrating-DISQUS",
            from: "/docs/cx-studio/Integrations/Integrating-DISQUS",
          },
          {
            to: "/docs/studio/developers/features/properties",
            from: "/docs/cx-studio/developers/features/properties",
          },
          {
            to: "/docs/studio/Integrations/integrating-google-analytics-4",
            from: "/docs/cx-studio/Integrations/integrating-google-analytics-4",
          },
          {
            to: "/docs/studio/Integrations/Integrating-Rewardful",
            from: "/docs/cx-studio/Integrations/Integrating-Rewardful",
          },
          {
            to: "/docs/studio/content/Basic-Page-Editing/Using-Anchor-Links",
            from: "/docs/cx-studio/content/Basic-Page-Editing/Using-Anchor-Links",
          },
          {
            to: "/changelog/Studio-Release-Notes/Older-Release-Notes",
            from: "/docs/cx-studio/Release-Notes/Older-Release-Notes",
          },
          {
            to: "/docs/studio/Shopify/Change-Cart-Bag-Language-and-Icon",
            from: "/docs/cx-studio/Shopify/Change-Cart-Bag-Language-and-Icon",
          },
          {
            to: "/docs/studio/Integrations/Integrating-Google-Search-Console",
            from: "/docs/cx-studio/Integrations/Integrating-Google-Search-Console",
          },
          {
            to: "/docs/studio/policies/How-to-change-the-email-shown-in-your-billing-invoices",
            from: "/docs/cx-studio/policies/How-to-change-the-email-shown-in-your-billing-invoices",
          },
          {
            to: "/docs/studio/content/Forms-&-Contacts/Managing-your-Contacts",
            from: "/docs/cx-studio/content/Forms-&-Contacts/Managing-your-Contacts",
          },
          {
            to: "/changelog/Studio-Release-Notes/2022/Release-130-Feb-7-2022",
            from: "/docs/cx-studio/Release-Notes/2022/Release-130-Feb-7-2022",
          },
          {
            to: "/docs/studio/content/Blog-Management/Import-&-Export-XML",
            from: "/docs/cx-studio/content/Blog-Management/Import-&-Export-XML",
          },
          {
            to: "/docs/studio/Settings/Domain-Management/Connecting-your-Shopify-Domain",
            from: "/docs/cx-studio/Settings/Domain-Management/Connecting-your-Shopify-Domain",
          },
          {
            to: "/docs/studio/Integrations/Integrating-Weglot",
            from: "/docs/cx-studio/Integrations/Integrating-Weglot",
          },
          {
            to: "/changelog/Studio-Release-Notes/2022/Release-129-Jan-16-2022",
            from: "/docs/cx-studio/Release-Notes/2022/Release-129-Jan-16-2022",
          },
          {
            to: "/docs/studio/design/Header-and-Footer/How-to-customize-header-color",
            from: "/docs/cx-studio/design/Header-and-Footer/How-to-customize-header-color",
          },
          {
            to: "/docs/studio/design/Header-and-Footer/Removing-the-Unstack-Branding-from-your-Footer",
            from: "/docs/cx-studio/design/Header-and-Footer/Removing-the-Unstack-Branding-from-your-Footer",
          },
          {
            to: "/docs/commerce-manager/subscriptions/subscription-plans/managing-subscription-plans-cm",
            from: "/docs/subscriptions/subscription-plans/managing-subscription-plans-cm",
          },
          {
            to: "/docs/studio/Integrations/Integrating-Calendly",
            from: "/docs/cx-studio/Integrations/Integrating-Calendly",
          },
          {
            to: "/docs/studio/design/Header-and-Footer/How-to-add-a-button-to-your-header",
            from: "/docs/cx-studio/design/Header-and-Footer/How-to-add-a-button-to-your-header",
          },
          {
            to: "/docs/studio/developers/eCommerce/Content-for-a-non-converting-user-who-visits-a-popular-product-page",
            from: "/docs/cx-studio/developers/eCommerce/Content-for-a-non-converting-user-who-visits-a-popular-product-page",
          },
          {
            to: "/docs/studio/content/advanced-page-editing/Saving-a-Page-as-a-Template",
            from: "/docs/cx-studio/content/advanced-page-editing/Saving-a-Page-as-a-Template",
          },
          {
            to: "/docs/commerce-manager/organizations/org-pxm-entities-in-commerce-manager/create-org_pxm_hierarchy",
            from: "/docs/commerce-cloud/organizations/organizations-in-commerce-manager/org-pxm-entities-in-commerce-manager/create-org_pxm_hierarchy",
          },
          {
            to: "/docs/studio/Integrations/advanced-commerce",
            from: "/docs/cx-studio/Integrations/advanced-commerce",
          },
          {
            to: "/docs/api/merchant-realm-mappings/update-merchant-realm-mapping",
            from: "/docs/commerce-cloud/authentication/single-sign-on/merchant-realm-mappings/update-merchant-realm-mapping",
          },
          {
            to: "/docs/studio/content/Blog-Management/Adding-an-image-to-a-blog-article",
            from: "/docs/cx-studio/content/Blog-Management/Adding-an-image-to-a-blog-article",
          },
          {
            to: "/docs/rule-promotions/rule-promotions-api/cart-rule-promotions/create-a-cart-percent-discount-rule-promotion",
            from: "/docs/commerce-cloud/rule-promotions/rule-promotions-api/cart-rule-promotions/create-a-cart-percent-discount-rule-promotion",
          },
          {
            to: "/docs/commerce-manager/product-experience-manager/variations/",
            from: "/docs/pxm/products/pxm-product-variations/variations",
          },
          {
            to: "/docs/studio/developers/custom-themes/headers-footers",
            from: "/docs/cx-studio/developers/custom-themes/headers-footers",
          },
          {
            to: "/docs/api/merchant-realm-mappings/get-merchant-realm-mapping",
            from: "/docs/commerce-cloud/authentication/single-sign-on/merchant-realm-mappings/get-merchant-realm-mapping",
          },
          {
            to: "/docs/studio/Integrations/Using-the-Facebook-Pixel",
            from: "/docs/cx-studio/Integrations/Using-the-Facebook-Pixel",
          },
          {
            to: "/guides/How-To/Custom-Data/create-a-wishlist-resource",
            from: "/docs/commerce-cloud/custom-data/create-a-wishlist-resource",
          },
          {
            to: "/docs/rule-promotions/rule-promotions-api/item-rule-promotions/create-limitation-and-condition-rule-promotion",
            from: "/docs/commerce-cloud/rule-promotions/rule-promotions-api/item-rule-promotions/create-limitation-and-condition-rule-promotion",
          },
          {
            to: "/docs/studio/design/Design-&-Styles/Using-your-Style-Guide",
            from: "/docs/cx-studio/design/Design-&-Styles/Using-your-Style-Guide",
          },
          {
            to: "/docs/studio/developers/e-commerce/cart-and-drawer-soon",
            from: "/docs/cx-studio/developers/e-commerce/cart-and-drawer-soon",
          },
          {
            to: "/docs/studio/design/Header-and-Footer/Adding-&-Removing-Header-Dropdowns",
            from: "/docs/cx-studio/design/Header-and-Footer/Adding-&-Removing-Header-Dropdowns",
          },
          {
            to: "/docs/studio/Integrations/Integrating-Mailchimp",
            from: "/docs/cx-studio/Integrations/Integrating-Mailchimp",
          },
          {
            to: "/docs/studio/content/Forms-&-Contacts/Warning-when-using-email-less-form",
            from: "/docs/cx-studio/content/Forms-&-Contacts/Warning-when-using-email-less-form",
          },
          {
            to: "/docs/api/personal-data/post-erasure-request",
            from: "/docs/commerce-cloud/personal-data/personal-data-erasure-requests-api/create-personal-data-erasure-request",
          },
          {
            to: "/docs/rule-promotions/rule-promotions-api/cart-rule-promotions/create-a-cart-percent-custom-attribute-rule-promotion",
            from: "/docs/commerce-cloud/rule-promotions/rule-promotions-api/cart-rule-promotions/create-a-cart-percent-custom-attribute-rule-promotion",
          },
          {
            to: "/docs/api/merchant-realm-mappings/merchant-realm-mappings-introduction",
            from: "/docs/commerce-cloud/authentication/single-sign-on/merchant-realm-mappings/merchant-realm-mappings-overview",
          },
          {
            to: "/changelog/Studio-Release-Notes/2021/Release-121-Nov-7-2021",
            from: "/docs/cx-studio/Release-Notes/2021/Release-121-Nov-7-2021",
          },
          {
            to: "/docs/authentication/single-sign-on/user-authentication-openid-connect-profile-api/create-a-user-authentication-oidc-profile-info",
            from: "/docs/commerce-cloud/authentication/single-sign-on/user-authentication-openid-connect-profile-api/create-a-user-authentication-oidc-profile-info",
          },
          {
            to: "/docs/studio/Integrations/Integrating-Continually",
            from: "/docs/cx-studio/Integrations/Integrating-Continually",
          },
          {
            to: "/docs/studio/Settings/Domain-Management/Adding-SSL-to-your-account",
            from: "/docs/cx-studio/Settings/Domain-Management/Adding-SSL-to-your-account",
          },
          {
            to: "/docs/commerce-manager/organizations/org-pxm-entities-in-commerce-manager/create-org_pxm_pricebooks",
            from: "/docs/commerce-cloud/organizations/organizations-in-commerce-manager/org-pxm-entities-in-commerce-manager/create-org_pxm_pricebooks",
          },
          {
            to: "/docs/studio/Settings/account-management/Setting-your-Timezone-in-CX-Studio",
            from: "/docs/cx-studio/Settings/account-management/Setting-your-Timezone-in-CX-Studio",
          },
          {
            to: "/docs/authentication/single-sign-on/user-authentication-openid-connect-profile-api/openid-connect-profile-overview",
            from: "/docs/commerce-cloud/authentication/single-sign-on/user-authentication-openid-connect-profile-api/openid-connect-profile-overview",
          },
          {
            to: "/docs/authentication/single-sign-on/user-authentication-openid-connect-profile-api/update-a-user-authentication-oidc-profile-info",
            from: "/docs/commerce-cloud/authentication/single-sign-on/user-authentication-openid-connect-profile-api/update-a-user-authentication-oidc-profile-info",
          },
          {
            to: "/guides/How-To/Authentication/how-to-utilize-one-time-password-tokens",
            from: "/docs/commerce-cloud/authentication/single-sign-on/password-profiles-api/how-to-utilize-one-time-password-tokens",
          },
          {
            to: "/guides/How-To/Products/build-pxm-variations",
            from: "/docs/pxm/products/pxm-product-variations/build-pxm-variations",
          },
          {
            to: "/changelog/Studio-Release-Notes/2022/Release-128-Jan-9-2022",
            from: "/docs/cx-studio/Release-Notes/2022/Release-128-Jan-9-2022",
          },
          {
            to: "/docs/studio/developers/features/literals",
            from: "/docs/cx-studio/developers/features/literals",
          },
          {
            to: "/docs/rule-promotions/rule-promotions-api/item-rule-promotions/create-an-item-fixed-discount-rule-promotion",
            from: "/docs/commerce-cloud/rule-promotions/rule-promotions-api/item-rule-promotions/create-an-item-fixed-discount-rule-promotion",
          },
          {
            to: "/docs/rule-promotions/rule-promotions-api/item-rule-promotions/create-an-item-fixed-price-rule-promotion",
            from: "/docs/commerce-cloud/rule-promotions/rule-promotions-api/item-rule-promotions/create-an-item-fixed-price-rule-promotion",
          },
          {
            to: "/docs/studio/content/Basic-Page-Editing/Publishing",
            from: "/docs/cx-studio/content/Basic-Page-Editing/Publishing",
          },
          {
            to: "/changelog/Studio-Release-Notes/Release-197-April-30-2024",
            from: "/docs/cx-studio/Release-Notes/2022/Release-139-April-17-2022",
          },
          {
            to: "/changelog/Studio-Release-Notes/Release-197-April-30-2024",
            from: "/docs/cx-studio/Release-Notes/2022/Release-138-April-10-2022",
          },
          {
            to: "/changelog/Studio-Release-Notes/Release-197-April-30-2024",
            from: "/docs/cx-studio/Release-Notes/Release-195-April-8-2024",
          },
          {
            to: "/docs/organizations/org-level-pxm-entities/pxm-org-entities-in-store-level-catalogs",
            from: "/docs/commerce-cloud/organizations/org-level-pxm-entities/pxm-org-entities-in-store-level-catalogs",
          },
          {
            to: "/docs/studio/Integrations/Integrating-paypal",
            from: "/docs/cx-studio/Integrations/Integrating-paypal",
          },
          {
            to: "/docs/commerce-manager/product-experience-manager/bundles/bundle-configuration",
            from: "/docs/pxm/products/pxm-bundles/bundle-configuration",
          },
          {
            to: "/docs/rule-promotions/rule-promotions-api/cart-rule-promotions/create-a-cart-fixed-discount-rule-promotion",
            from: "/docs/commerce-cloud/rule-promotions/rule-promotions-api/cart-rule-promotions/create-a-cart-fixed-discount-rule-promotion",
          },
          {
            to: "/docs/api/personal-data/get-erasure-request",
            from: "/docs/commerce-cloud/personal-data/personal-data-erasure-requests-api/get-personal-data-erasure-requests",
          },
          {
            to: "/docs/studio/content/Media-Management/Managing-video-settings",
            from: "/docs/cx-studio/content/Media-Management/Managing-video-settings",
          },
          {
            to: "/docs/api/personal-data/get-related-data-entries",
            from: "/docs/commerce-cloud/personal-data/personal-data-related-data-entries-api/get-personal-data-related-data-entries",
          },
          {
            to: "/docs/studio/developers/custom-themes/custom-codeblocks",
            from: "/docs/cx-studio/developers/custom-themes/custom-codeblocks",
          },
          {
            to: "/docs/studio/developers/tags/articles",
            from: "/docs/cx-studio/developers/tags/articles",
          },
          {
            to: "/docs/studio/content/Forms-&-Contacts/Customers",
            from: "/docs/cx-studio/content/Forms-&-Contacts/Customers",
          },
          {
            to: "/docs/api/personal-data/get-erasure-request",
            from: "/docs/commerce-cloud/personal-data/personal-data-erasure-requests-api/get-personal-data-erasure-request-by-id",
          },
          {
            to: "/docs/organizations/org-level-pxm-entities/pxm-org-templates",
            from: "/docs/commerce-cloud/organizations/org-level-pxm-entities/pxm-org-templates",
          },
          {
            to: "/docs/rule-promotions/rule-promotions-api/item-rule-promotions/create-condition-rule-promotion",
            from: "/docs/commerce-cloud/rule-promotions/rule-promotions-api/item-rule-promotions/create-condition-rule-promotion",
          },
          {
            to: "/changelog/Studio-Release-Notes/2022/Release-137-April-4-2022",
            from: "/docs/cx-studio/Release-Notes/2022/Release-137-April-4-2022",
          },
          {
            to: "/docs/studio/Integrations/Adding-HTML-CSS-or-JavaScript-to-all-your-pages",
            from: "/docs/cx-studio/Integrations/Adding-HTML-CSS-or-JavaScript-to-all-your-pages",
          },
          {
            to: "/docs/rule-promotions/rule-promotions-api/action-limitations/create-limitations-and-exclusion-rule-promotion",
            from: "/docs/commerce-cloud/rule-promotions/rule-promotions-api/action-limitations/create-limitations-and-exclusion-rule-promotion",
          },
          {
            to: "/docs/studio/developers/components/header-and-footer",
            from: "/docs/cx-studio/developers/components/header-and-footer",
          },
          {
            to: "/docs/authentication/single-sign-on/user-authentication-password-profiles-api/update-a-user-authentication-password-profile",
            from: "/docs/commerce-cloud/authentication/single-sign-on/user-authentication-password-profiles-api/update-a-user-authentication-password-profile",
          },
          {
            to: "/docs/authentication/single-sign-on/user-authentication-password-profiles-api/create-a-user-authentication-password-profile",
            from: "/docs/commerce-cloud/authentication/single-sign-on/user-authentication-password-profiles-api/create-a-user-authentication-password-profile",
          },
          {
            to: "/docs/authentication/single-sign-on/user-authentication-password-profiles-api/password-profile-overview",
            from: "/docs/commerce-cloud/authentication/single-sign-on/user-authentication-password-profiles-api/password-profile-overview",
          },
          {
            to: "/docs/studio/design/Design-&-Styles/Styling-for-light-and-dark-backgrounds",
            from: "/docs/cx-studio/design/Design-&-Styles/Styling-for-light-and-dark-backgrounds",
          },
          {
            to: "/docs/studio/policies/Downgrading-or-Cancelling-your-Unstack-Account",
            from: "/docs/cx-studio/policies/Downgrading-or-Cancelling-your-Unstack-Account",
          },
          {
            to: "/changelog/Studio-Release-Notes/2021/Release-125-Dec-6-2021",
            from: "/docs/cx-studio/Release-Notes/2021/Release-125-Dec-6-2021",
          },
          {
            to: "/changelog/Studio-Release-Notes/2022/Release-149-August-30-2022",
            from: "/docs/cx-studio/Release-Notes/2022/Release-149-August-30-2022",
          },
          {
            to: "/changelog/Studio-Release-Notes/Release-194-March-27-2024",
            from: "/docs/cx-studio/Release-Notes/Release-193-March-22-2024",
          },
          {
            to: "/changelog/Studio-Release-Notes/Release-194-March-27-2024",
            from: "/docs/cx-studio/Release-Notes/Release-192-March-13-2024",
          },
          {
            to: "/changelog/Studio-Release-Notes/Release-194-March-27-2024",
            from: "/docs/cx-studio/Release-Notes/Release-194-March-27-2024",
          },
          {
            to: "/changelog/Studio-Release-Notes/Release-194-March-27-2024",
            from: "/docs/cx-studio/Release-Notes/2022/Release-136-March-27-2022",
          },
          {
            to: "/changelog/Studio-Release-Notes/Release-194-March-27-2024",
            from: "/docs/cx-studio/Release-Notes/2022/Release-135-March-15-2022",
          },
          {
            to: "/changelog/Studio-Release-Notes/Release-194-March-27-2024",
            from: "/docs/cx-studio/Release-Notes/2022/Release-134-March-3-2022",
          },
          {
            to: "/docs/studio/policies/Acceptable-Use-Policy",
            from: "/docs/cx-studio/policies/Acceptable-Use-Policy",
          },
          {
            to: "/docs/studio/content/Basic-Page-Editing/Building-your-first-landing-page",
            from: "/docs/cx-studio/content/Basic-Page-Editing/Building-your-first-landing-page",
          },
          {
            to: "/docs/studio/Integrations/Integrating-Hotjar",
            from: "/docs/cx-studio/Integrations/Integrating-Hotjar",
          },
          {
            to: "/docs/commerce-manager/product-experience-manager/catalogs/catalog-configuration",
            from: "/docs/pxm/catalogs/catalogs-cm/catalog-configuration",
          },
          {
            to: "/docs/authentication/single-sign-on/user-authentication-openid-connect-profile-api/get-a-user-authentication-oidc-profile-info",
            from: "/docs/commerce-cloud/authentication/single-sign-on/user-authentication-openid-connect-profile-api/get-a-user-authentication-oidc-profile-info",
          },
          {
            to: "/docs/authentication/single-sign-on/user-authentication-openid-connect-profile-api/delete-a-user-authentication-oidc-profile-info",
            from: "/docs/commerce-cloud/authentication/single-sign-on/user-authentication-openid-connect-profile-api/delete-a-user-authentication-oidc-profile-info",
          },
          {
            to: "/docs/studio/Insights/Interpreting-Insights",
            from: "/docs/cx-studio/Insights/Interpreting-Insights",
          },
          {
            to: "/docs/studio/Settings/Domain-Management/Setting-up-your-Custom-Domain",
            from: "/docs/cx-studio/Settings/Domain-Management/Setting-up-your-Custom-Domain",
          },
          {
            to: "/docs/studio/Integrations/Integrating-stripe",
            from: "/docs/cx-studio/Integrations/Integrating-stripe",
          },
          {
            to: "/docs/studio/Integrations/Integrating-Typeform",
            from: "/docs/cx-studio/Integrations/Integrating-Typeform",
          },
          {
            to: "/docs/studio/Settings/account-management/shopper-sso",
            from: "/docs/cx-studio/Settings/account-management/shopper-sso",
          },
          {
            to: "/docs/authentication/single-sign-on/openid-connect-profiles-api/openid-connect-profiles-api-overview",
            from: "/docs/commerce-cloud/authentication/single-sign-on/openid-connect-profiles-api/openid-connect-profiles-api-overview",
          },
          {
            to: "/docs/authentication/single-sign-on/user-authentication-password-profiles-api/get-all-user-authentication-password-profile-info",
            from: "/docs/commerce-cloud/authentication/single-sign-on/user-authentication-password-profiles-api/get-all-user-authentication-password-profile-info",
          },
          {
            to: "/docs/commerce-manager/subscriptions/offerings/editing-offerings",
            from: "/docs/subscriptions/offerings/editing-offerings",
          },
          {
            to: "/docs/authentication/single-sign-on/user-authentication-password-profiles-api/get-a-user-authentication-password-profile",
            from: "/docs/commerce-cloud/authentication/single-sign-on/user-authentication-password-profiles-api/get-a-user-authentication-password-profile",
          },
          {
            to: "/docs/commerce-manager/organizations/org-pxm-entities-in-commerce-manager/create-org_pxm_catalogs",
            from: "/docs/commerce-cloud/organizations/organizations-in-commerce-manager/org-pxm-entities-in-commerce-manager/create-org_pxm_catalogs",
          },
          {
            to: "/docs/rule-promotions/rule-promotions-api/rule-promotions-management/get-a-rule-promotion-by-id",
            from: "/docs/commerce-cloud/rule-promotions/rule-promotions-api/rule-promotions-management/get-rule-promotions",
          },
          {
            to: "/docs/studio/Shopify/Using-Add-to-Cart-Buttons",
            from: "/docs/cx-studio/Shopify/Using-Add-to-Cart-Buttons",
          },
          {
            to: "/docs/rule-promotions/rule-promotions-api/rule-promotions-management/get-a-rule-promotion-by-id",
            from: "/docs/commerce-cloud/rule-promotions/rule-promotions-api/rule-promotions-management/get-a-rule-promotion-by-id",
          },
          {
            to: "/docs/studio/design/Header-and-Footer/Header-Formatting-Options",
            from: "/docs/cx-studio/design/Header-and-Footer/Header-Formatting-Options",
          },
          {
            to: "/docs/authentication/single-sign-on/user-authentication-password-profiles-api/delete-a-user-authentication-password-profile",
            from: "/docs/commerce-cloud/authentication/single-sign-on/user-authentication-password-profiles-api/delete-a-user-authentication-password-profile",
          },
          {
            to: "/docs/rule-promotions/rule-promotion-codes/delete-multiple-rule-promotion-codes",
            from: "/docs/commerce-cloud/rule-promotions/rule-promotion-codes/delete-multiple-rule-promotion-codes",
          },
          {
            to: "/docs/studio/content/advanced-page-editing/Managing-Redirects",
            from: "/docs/cx-studio/content/advanced-page-editing/Managing-Redirects",
          },
          {
            to: "/docs/rule-promotions/rule-promotions-api/rule-promotions-management/update-a-rule-promotion",
            from: "/docs/commerce-cloud/rule-promotions/rule-promotions-api/rule-promotions-management/update-a-rule-promotion",
          },
          {
            to: "/changelog/Studio-Release-Notes/2022/Release-154-October-13-2022",
            from: "/docs/cx-studio/Release-Notes/2022/Release-154-October-13-2022",
          },
          {
            to: "/docs/studio/developers/features/values",
            from: "/docs/cx-studio/developers/features/values",
          },
          {
            to: "/docs/studio/Settings/account-management/Adjusting-User-Roles",
            from: "/docs/cx-studio/Settings/account-management/Adjusting-User-Roles",
          },
          {
            to: "/docs/commerce-manager/product-experience-manager/currencies/manage-currencies",
            from: "/docs/pxm/currencies/manage-currencies",
          },
          {
            to: "/docs/studio/content/advanced-page-editing/Version-Control",
            from: "/docs/cx-studio/content/advanced-page-editing/Version-Control",
          },
          {
            to: "/docs/commerce-manager/subscriptions/products/managing-products-cm",
            from: "/docs/subscriptions/products/managing-products-cm",
          },
          {
            to: "/docs/authentication/single-sign-on/openid-connect-profiles-api/create-an-oidc-profile",
            from: "/docs/commerce-cloud/authentication/single-sign-on/openid-connect-profiles-api/create-an-oidc-profile",
          },
          {
            to: "/docs/studio/content/Blog-Management/Adding-an-article-to-multiple-categories",
            from: "/docs/cx-studio/content/Blog-Management/Adding-an-article-to-multiple-categories",
          },
          {
            to: "/docs/authentication/single-sign-on/openid-connect-profiles-api/update-an-oidc-profile",
            from: "/docs/commerce-cloud/authentication/single-sign-on/openid-connect-profiles-api/update-an-oidc-profile",
          },
          {
            to: "/docs/studio/content/Media-Management/Background-media",
            from: "/docs/cx-studio/content/Media-Management/Background-media",
          },
          {
            to: "/docs/authentication/single-sign-on/password-profiles-api/create-one-time-password-token-request",
            from: "/docs/commerce-cloud/authentication/single-sign-on/password-profiles-api/create-one-time-password-token-request",
          },
          {
            to: "/docs/studio/Integrations/Troubleshooting-PageSpeed-Insights-Issues",
            from: "/docs/cx-studio/Integrations/Troubleshooting-PageSpeed-Insights-Issues",
          },
          {
            to: "/docs/studio/Settings/account-management/Unstack-&-AMP",
            from: "/docs/cx-studio/Settings/account-management/Unstack-&-AMP",
          },
          {
            to: "/guides/How-To/Catalogs/breadcrumbs",
            from: "/docs/pxm/catalogs/breadcrumbs",
          },
          {
            to: "/docs/studio/Insights/Activity",
            from: "/docs/cx-studio/Insights/Activity",
          },
          {
            to: "/docs/studio/developers/tags/box",
            from: "/docs/cx-studio/developers/tags/box",
          },
          {
            to: "/docs/commerce-manager/subscriptions/subscription-plans/deleting-plans",
            from: "/docs/subscriptions/subscription-plans/deleting-plans",
          },
          {
            to: "/docs/studio/developers/custom-themes/custom-components",
            from: "/docs/cx-studio/developers/custom-themes/custom-components",
          },
          {
            to: "/docs/studio/design/Design-&-Styles/Adjusting-Quotation-Mark-Styling",
            from: "/docs/cx-studio/design/Design-&-Styles/Adjusting-Quotation-Mark-Styling",
          },
          {
            to: "/docs/studio/content/advanced-page-editing/Using-Conditional-Content",
            from: "/docs/cx-studio/content/advanced-page-editing/Using-Conditional-Content",
          },
          {
            to: "/changelog/Studio-Release-Notes/2022/Release-140-May-9-2022",
            from: "/docs/cx-studio/Release-Notes/2022/Release-140-May-9-2022",
          },
          {
            to: "/docs/rule-promotions/rule-promotions-api/item-rule-promotions/create-an-Item-percent-product-attribute",
            from: "/docs/commerce-cloud/rule-promotions/rule-promotions-api/item-rule-promotions/create-an-Item-percent-product-attribute",
          },
          {
            to: "/docs/studio/policies/Browser-Support-Policy",
            from: "/docs/cx-studio/policies/Browser-Support-Policy",
          },
          {
            to: "/docs/authentication/single-sign-on/authentication-realm-api/update-an-authentication-realm",
            from: "/docs/commerce-cloud/authentication/single-sign-on/authentication-realm-api/update-an-authentication-realm",
          },
          {
            to: "/docs/studio/Settings/account-management/Unstack-&-GDPR-Compliance",
            from: "/docs/cx-studio/Settings/account-management/Unstack-&-GDPR-Compliance",
          },
          {
            to: "/guides/How-To/Subscriptions/getting-started/merchandizer-getting-started/managing-subscriptions",
            from: "/docs/subscriptions/getting-started/merchandizer-getting-started/managing-subscriptions",
          },
          {
            to: "/docs/authentication/single-sign-on/user-authentication-openid-connect-profile-api/get-all-user-authentication-oidc-profile-info",
            from: "/docs/commerce-cloud/authentication/single-sign-on/user-authentication-openid-connect-profile-api/get-all-user-authentication-oidc-profile-info",
          },
          {
            to: "/docs/studio/developers/custom-themes/custom-integrations",
            from: "/docs/cx-studio/developers/custom-themes/custom-integrations",
          },
          {
            to: "/docs/api/pxm/products/hierarchies",
            from: "/docs/pxm/hierarchies/hierarchies",
          },
          {
            to: "/docs/authentication/single-sign-on/user-authentication-info-api/create-a-user-authentication-info",
            from: "/docs/commerce-cloud/authentication/single-sign-on/user-authentication-info-api/create-a-user-authentication-info",
          },
          {
            to: "/docs/studio/content/Media-Management/Embedding-Videos",
            from: "/docs/cx-studio/content/Media-Management/Embedding-Videos",
          },
          {
            to: "/docs/authentication/single-sign-on/user-authentication-info-api/update-a-user-authentication-info",
            from: "/docs/commerce-cloud/authentication/single-sign-on/user-authentication-info-api/update-a-user-authentication-info",
          },
          {
            to: "/docs/authentication/single-sign-on/authentication-realm-api/authentication-realm-api-overview",
            from: "/docs/commerce-cloud/authentication/single-sign-on/authentication-realm-api/authentication-realm-api-overview",
          },
          {
            to: "/docs/studio/Integrations/Integrating-MailerLite",
            from: "/docs/cx-studio/Integrations/Integrating-MailerLite",
          },
          {
            to: "/docs/ship-groups/shipping-groups/shipping-groups-api/get-cart-shipping-groups",
            from: "/docs/commerce-cloud/shipping-groups/shipping-groups-api/get-a-cart-shipping-group-by-id",
          },
          {
            to: "/docs/ship-groups/shipping-groups/shipping-groups-api/update-cart-shipping-group",
            from: "/docs/commerce-cloud/shipping-groups/shipping-groups-api/update-cart-shipping-group",
          },
          {
            to: "/docs/commerce-manager/organizations/org-pxm-entities-in-commerce-manager/create-org_pxm_templates",
            from: "/docs/commerce-cloud/organizations/organizations-in-commerce-manager/org-pxm-entities-in-commerce-manager/create-org_pxm_templates",
          },
          {
            to: "/changelog/Studio-Release-Notes/2022/Release-143-June-23-2022",
            from: "/docs/cx-studio/Release-Notes/2022/Release-143-June-23-2022",
          },
          {
            to: "/docs/commerce-manager/product-experience-manager/variations/assign-variations-build-child-products",
            from: "/docs/pxm/products/pxm-products-commerce-manager/assign-variations-build-child-products",
          },
          {
            to: "/docs/authentication/single-sign-on/openid-connect-profiles-api/delete-an-oidc-profile",
            from: "/docs/commerce-cloud/authentication/single-sign-on/openid-connect-profiles-api/delete-an-oidc-profile",
          },
          {
            to: "/docs/organizations/",
            from: "/docs/commerce-cloud/organizations/overview",
          },
          {
            to: "/guides/How-To/Carts/manage-abandoned-carts",
            from: "/docs/commerce-cloud/carts/manage-abandoned-carts",
          },
          {
            to: "/docs/studio/Integrations/Integrating-Helpscout",
            from: "/docs/cx-studio/Integrations/Integrating-Helpscout",
          },
          {
            to: "/docs/authentication/single-sign-on/openid-connect-profiles-api/get-all-oidc-profiles",
            from: "/docs/commerce-cloud/authentication/single-sign-on/openid-connect-profiles-api/get-all-oidc-profiles",
          },
          {
            to: "/docs/authentication/single-sign-on/authentication-realm-api/get-all-authentication-realms",
            from: "/docs/commerce-cloud/authentication/single-sign-on/authentication-realm-api/get-all-authentication-realms",
          },
          {
            to: "/docs/authentication/single-sign-on/openid-connect-profiles-api/get-an-oidc-profile",
            from: "/docs/commerce-cloud/authentication/single-sign-on/openid-connect-profiles-api/get-an-oidc-profile",
          },
          {
            to: "/docs/studio/Integrations/Integrating-yotpo",
            from: "/docs/cx-studio/Integrations/Integrating-yotpo",
          },
          {
            to: "/docs/studio/design/Header-and-Footer/How-to-make-my-header-transparent",
            from: "/docs/cx-studio/design/Header-and-Footer/How-to-make-my-header-transparent",
          },
          {
            to: "/guides/How-To/paymentgateways/integrate-applepay-with-swift",
            from: "/docs/commerce-cloud/payments/payments-developer/integrate-applepay-with-swift",
          },
          {
            to: "/docs/studio/content/Basic-Page-Editing/Deleting-a-Page",
            from: "/docs/cx-studio/content/Basic-Page-Editing/Deleting-a-Page",
          },
          {
            to: "/docs/api/application-keys/application-keys-introduction",
            from: "/docs/commerce-cloud/authentication/application-keys/application-keys-overview",
          },
          {
            to: "/docs/studio/developers/e-commerce/product",
            from: "/docs/cx-studio/developers/e-commerce/product",
          },
          {
            to: "/docs/authentication/single-sign-on/user-authentication-info-api/delete-a-user-authentication-info",
            from: "/docs/commerce-cloud/authentication/single-sign-on/user-authentication-info-api/delete-a-user-authentication-info",
          },
          {
            to: "/docs/rule-promotions/rule-promotions-api/rule-promotions-management/delete-a-rule-promotion",
            from: "/docs/commerce-cloud/rule-promotions/rule-promotions-api/rule-promotions-management/delete-a-rule-promotion",
          },
          {
            to: "/docs/studio/developers/tags/actions",
            from: "/docs/cx-studio/developers/tags/actions",
          },
          {
            to: "/docs/studio/policies/Support-Scope",
            from: "/docs/cx-studio/policies/Support-Scope",
          },
          {
            to: "/guides/How-To/Products/generate-pxm-variations",
            from: "/docs/pxm/products/pxm-product-variations/generate-pxm-variations",
          },
          {
            to: "/docs/api/personal-data/personal-data-logs",
            from: "/docs/commerce-cloud/personal-data/personal-data-logs-api/personal-data-logs-api-overview",
          },
          {
            to: "/docs/authentication/single-sign-on/authentication-realm-api/get-an-authentication-realm",
            from: "/docs/commerce-cloud/authentication/single-sign-on/authentication-realm-api/get-an-authentication-realm",
          },
          {
            to: "/docs/authentication/single-sign-on/user-authentication-info-api/get-a-user-authentication-info",
            from: "/docs/commerce-cloud/authentication/single-sign-on/user-authentication-info-api/get-a-user-authentication-info",
          },
          {
            to: "/docs/studio/content/Media-Management/Media-Overview",
            from: "/docs/cx-studio/content/Media-Management/Media-Overview",
          },
          {
            to: "/docs/api/personal-data/get-personal-data-logs",
            from: "/docs/commerce-cloud/personal-data/personal-data-logs-api/get-personal-data-logs",
          },
          {
            to: "/docs/authentication/single-sign-on/user-authentication-info-api/get-all-user-authentication-info",
            from: "/docs/commerce-cloud/authentication/single-sign-on/user-authentication-info-api/get-all-user-authentication-info",
          },
          {
            to: "/docs/studio/developers/eCommerce/Content-for-returning-customers",
            from: "/docs/cx-studio/developers/eCommerce/Content-for-returning-customers",
          },
          {
            to: "/docs/authentication/single-sign-on/password-profiles-api/get-all-password-profiles",
            from: "/docs/commerce-cloud/authentication/single-sign-on/password-profiles-api/get-all-password-profiles",
          },
          {
            to: "/guides/Getting-Started/rate-limits",
            from: "/docs/commerce-cloud/api-overview/rate-limits",
          },
          {
            to: "/guides/How-To/paymentgateways/implement-payment-gateways",
            from: "/docs/commerce-cloud/payments/payments-developer/implement-payment-gateways",
          },
          {
            to: "/guides/Getting-Started/your-first-api-request",
            from: "/docs/commerce-cloud/api-overview/your-first-api-request",
          },
          {
            to: "/docs/studio/content/Basic-Page-Editing/Cloning-a-Page",
            from: "/docs/cx-studio/content/Basic-Page-Editing/Cloning-a-Page",
          },
          {
            to: "/docs/studio/content/advanced-page-editing/",
            from: "/docs/cx-studio/content/advanced-page-editing/Advanced-Page-Editing",
          },
          {
            to: "/docs/commerce-manager/subscriptions/offerings/deleting-offerings",
            from: "/docs/subscriptions/offerings/deleting-offerings",
          },
          {
            to: "/docs/studio/Shopify/Shopify-Media",
            from: "/docs/cx-studio/Shopify/Shopify-Media",
          },
          {
            to: "/docs/studio/content/Blog-Management/Adding-tags-to-blog-posts",
            from: "/docs/cx-studio/content/Blog-Management/Adding-tags-to-blog-posts",
          },
          {
            to: "/docs/studio/developers/components",
            from: "/docs/cx-studio/developers/components",
          },
          {
            to: "/docs/studio/content/Basic-Page-Editing/Understanding-page-structure",
            from: "/docs/cx-studio/content/Basic-Page-Editing/Understanding-page-structure",
          },
          {
            to: "/docs/studio/developers/utility/generator",
            from: "/docs/cx-studio/developers/utility/generator",
          },
          {
            to: "/docs/studio/developers/e-commerce/product-options",
            from: "/docs/cx-studio/developers/e-commerce/product-options",
          },
          {
            to: "/docs/rule-promotions/rule-promotions-api/item-rule-promotions/create-a-mixed-of-cart-and-item-percent-discount",
            from: "/docs/commerce-cloud/rule-promotions/rule-promotions-api/item-rule-promotions/create-a-mixed-of-cart-and-item-percent-discount",
          },
          {
            to: "/docs/authentication/Tokens/implicit-token",
            from: "/docs/commerce-cloud/authentication/Tokens/implicit-token",
          },
          {
            to: "/docs/api/personal-data/get-logs-ttl",
            from: "/docs/commerce-cloud/personal-data/logs-ttl-settings/get-logs-ttl-settings",
          },
          {
            to: "/docs/api/personal-data/personal-data-erasure-requests",
            from: "/docs/commerce-cloud/personal-data/personal-data-erasure-requests-api/personal-data-erasure-request-overview",
          },
          {
            to: "/docs/api/personal-data/put-logs-ttl",
            from: "/docs/commerce-cloud/personal-data/logs-ttl-settings/update-logs-ttl-settings",
          },
          {
            to: "/docs/commerce-manager/subscriptions/subscription-plans/creating-plans",
            from: "/docs/subscriptions/subscription-plans/creating-plans",
          },
          {
            to: "/docs/studio/Integrations/Integrating-Profitwell-Retain",
            from: "/docs/cx-studio/Integrations/Integrating-Profitwell-Retain",
          },
          {
            to: "/guides/How-To/Custom-Data/extend-any-resource",
            from: "/docs/commerce-cloud/custom-data/extend-any-resource",
          },
          {
            to: "/docs/studio/design/Design-&-Styles/Editing-Bullet-Point-Color",
            from: "/docs/cx-studio/design/Design-&-Styles/Editing-Bullet-Point-Color",
          },
          {
            to: "/docs/api/pxm/currencies/delete-a-currency",
            from: "/docs/pxm/currencies/currencies-api/delete-a-currency",
          },
          {
            to: "/docs/studio/Settings/Domain-Management/Connecting-your-Dreamhost-Domain",
            from: "/docs/cx-studio/Settings/Domain-Management/Connecting-your-Dreamhost-Domain",
          },
          {
            to: "/docs/studio/Integrations/Integrating-reCAPTCHA",
            from: "/docs/cx-studio/Integrations/Integrating-reCAPTCHA",
          },
          {
            to: "/docs/commerce-manager/subscriptions/overview",
            from: "/docs/subscriptions/overview",
          },
          {
            to: "/docs/studio/content/Forms-&-Contacts/Enabling-notifications-for-new-leads",
            from: "/docs/cx-studio/content/Forms-&-Contacts/Enabling-notifications-for-new-leads",
          },
          {
            to: "/docs/studio/developers/components/section",
            from: "/docs/cx-studio/developers/components/section",
          },
          {
            to: "/guides/How-To/Subscriptions/subscription-models/subscribe-save",
            from: "/docs/subscriptions/subscription-models/subscribe-save",
          },
          {
            to: "/docs/authentication/Tokens/account-management-authentication-token",
            from: "/docs/commerce-cloud/authentication/Tokens/account-management-authentication-token",
          },
          {
            to: "/docs/authentication/single-sign-on/customer-authentication-settings/get-customer-authentication-settings",
            from: "/docs/commerce-cloud/authentication/single-sign-on/customer-authentication-settings/get-customer-authentication-settings",
          },
          {
            to: "/docs/api/pxm/currencies/get-all-currencies",
            from: "/docs/pxm/currencies/currencies-api/get-all-currencies",
          },
          {
            to: "/docs/api/pxm/currencies/get-all-currencies",
            from: "/docs/pxm/currencies/currencies-api/get-a-currency",
          },
          {
            to: "/docs/api/personal-data/personal-data-introduction",
            from: "/docs/commerce-cloud/personal-data/personal-data",
          },
          {
            to: "/docs/commerce-manager/subscriptions/products/deleting-products",
            from: "/docs/subscriptions/products/deleting-products",
          },
          {
            to: "/guides/How-To/Carts/manage-carts",
            from: "/docs/commerce-cloud/carts/manage-carts",
          },
          {
            to: "/docs/api/carts/create-cart-payment-intent",
            from: "/docs/commerce-cloud/carts/cart-payment-intent/overview",
          },
          {
            to: "/docs/organizations/org-level-pxm-entities/",
            from: "/docs/commerce-cloud/organizations/org-level-pxm-entities/overview",
          },
          {
            to: "/changelog/Studio-Release-Notes/2022/Release-161-December-19-2022",
            from: "/docs/cx-studio/Release-Notes/2022/Release-161-December-19-2022",
          },
          {
            to: "/guides/How-To/orders/create-formatted-orders",
            from: "/docs/commerce-cloud/orders/create-formatted-orders",
          },
          {
            to: "/guides/How-To/Checkout/checkout-workflow",
            from: "/docs/commerce-cloud/checkout/checkout-workflow",
          },
          {
            to: "/docs/commerce-manager/promotions-builder/",
            from: "/docs/commerce-cloud/rule-promotions/promotions-in-commerce-manager/overview",
          },
          {
            to: "/docs/commerce-manager/subscriptions/products/creating-pxm-products",
            from: "/docs/subscriptions/products/creating-pxm-products",
          },
          {
            to: "/docs/commerce-manager/product-experience-manager/hierarchies/duplicating",
            from: "/docs/pxm/hierarchies/hierarchies-cm/duplicating",
          },
          {
            to: "/docs/organizations/organization_authentication",
            from: "/docs/commerce-cloud/organizations/organization_authentication",
          },
          {
            to: "/docs/commerce-manager/subscriptions/offerings/creating-offerings",
            from: "/docs/subscriptions/offerings/creating-offerings",
          },
          {
            to: "/docs/rule-promotions/rule-promotion-codes/delete-a-single-rule-promotion-code",
            from: "/docs/commerce-cloud/rule-promotions/rule-promotion-codes/delete-a-single-rule-promotion-code",
          },
          {
            to: "/docs/commerce-manager/authentication/",
            from: "/docs/commerce-cloud/authentication/single-sign-on/authentication",
          },
          {
            to: "/docs/studio/content/advanced-page-editing/Changing-your-homepage",
            from: "/docs/cx-studio/content/advanced-page-editing/Changing-your-homepage",
          },
          {
            to: "/guides/How-To/Carts/Taxes/store-data-for-taxes",
            from: "/docs/commerce-cloud/carts/tax-items/store-data-for-taxes",
          },
          {
            to: "/guides/How-To/Subscriptions/subscription-models/repeat-products",
            from: "/docs/subscriptions/subscription-models/repeat-products",
          },
          {
            to: "/guides/How-To/Subscriptions/getting-started/developer-getting-started/managing_subscriptions",
            from: "/docs/subscriptions/getting-started/developer-getting-started/managing_subscriptions",
          },
          {
            to: "/docs/carts-orders/update-cart-payment-intent",
            from: "/docs/commerce-cloud/carts/cart-payment-intent/update-cart-payment-intent",
          },
          {
            to: "/guides/How-To/commerce-extensions/create-a-multilocation-inventories-resource",
            from: "/docs/commerce-cloud/commerce-extensions/create-a-multilocation-inventories-resource",
          },
          {
            to: "/docs/rule-promotions/rule-promotion-codes/get-rule-promotion-codes",
            from: "/docs/commerce-cloud/rule-promotions/rule-promotion-codes/get-rule-promotion-codes",
          },
          {
            to: "/changelog/Studio-Release-Notes/2022/Release-132-Feb-21-2022",
            from: "/docs/cx-studio/Release-Notes/2022/Release-132-Feb-21-2022",
          },
          {
            to: "/docs/studio/policies/Support-Identification-Policy",
            from: "/docs/cx-studio/policies/Support-Identification-Policy",
          },
          {
            to: "/docs/studio/Integrations/algolia",
            from: "/docs/cx-studio/Integrations/algolia",
          },
          {
            to: "/docs/studio/Settings/sso",
            from: "/docs/cx-studio/Settings/sso",
          },
          {
            to: "/guides/How-To/Promotions-Standard/apply-promotions",
            from: "/docs/commerce-cloud/promotions/apply-promotions",
          },
          {
            to: "/docs/commerce-manager/subscriptions/overview",
            from: "/docs/subscriptions",
          },
          {
            to: "/guides/How-To/paymentgateways/integrate-payment-request-api",
            from: "/docs/commerce-cloud/payments/payments-developer/integrate-payment-request-api",
          },
          {
            to: "/docs/studio/content/Blog-Management/Scheduling-a-blog-post",
            from: "/docs/cx-studio/content/Blog-Management/Scheduling-a-blog-post",
          },
          {
            to: "/guides/How-To/Products/add-custom-data-to-pxm-products",
            from: "/docs/pxm/products/extending-pxm-products/add-custom-data-to-pxm-products",
          },
          {
            to: "/docs/authentication/single-sign-on/customer-authentication-settings/overview",
            from: "/docs/commerce-cloud/authentication/single-sign-on/customer-authentication-settings/overview",
          },
          {
            to: "/docs/api/pxm/currencies/create-a-currency",
            from: "/docs/pxm/currencies/currencies-api/create-a-currency",
          },
          {
            to: "/guides/Getting-Started/filtering",
            from: "/docs/commerce-cloud/api-overview/filtering",
          },
          {
            to: "/guides/How-To/Integrations/sqs-queues",
            from: "/docs/commerce-cloud/integrations/sqs-queues",
          },
          {
            to: "/changelog/Studio-Release-Notes/Release-188-January-17-2024",
            from: "/docs/cx-studio/Release-Notes/Release-188-January-17-2024",
          },
          {
            to: "/docs/api/pxm/products/variations",
            from: "/docs/pxm/products/pxm-product-variations/pxm-variations",
          },
          {
            to: "/guides/How-To/Personal-Data/set-logs-ttl",
            from: "/docs/commerce-cloud/personal-data/set-logs-ttl",
          },
          {
            to: "/docs/commerce-manager/promotions-builder/creating-a-promotion-in-promotions-builder",
            from: "/docs/commerce-cloud/rule-promotions/promotions-in-commerce-manager/creating-a-promotion-in-promotions-builder",
          },
          {
            to: "/guides/How-To/orders/send-order-confirmations",
            from: "/docs/commerce-cloud/orders/send-order-confirmations",
          },
          {
            to: "/changelog/Studio-Release-Notes/2022/Release-150-September-12-2022",
            from: "/docs/cx-studio/Release-Notes/2022/Release-150-September-12-2022",
          },
          {
            to: "/guides/How-To/Personal-Data/erase-personal-data",
            from: "/docs/commerce-cloud/personal-data/erase-personal-data",
          },
          {
            to: "/docs/studio/design/Header-and-Footer/Adjusting-the-Header-color-of-a-Landing-page",
            from: "/docs/cx-studio/design/Header-and-Footer/Adjusting-the-Header-color-of-a-Landing-page",
          },
          {
            to: "/docs/studio/Integrations/Stock-Media-Integrations",
            from: "/docs/cx-studio/Integrations/Stock-Media-Integrations",
          },
          {
            to: "/docs/studio/developers/e-commerce/product-price",
            from: "/docs/cx-studio/developers/e-commerce/product-price",
          },
          {
            to: "/docs/api/integrations/get-integration",
            from: "/docs/commerce-cloud/integrations/integrations-api/get-an-integration",
          },
          {
            to: "/docs/api/integrations/get-integration",
            from: "/docs/commerce-cloud/integrations/integrations-api/get-all-integrations",
          },
          {
            to: "/docs/commerce-manager/product-experience-manager/jobs/",
            from: "/docs/pxm/jobs-api/jobs",
          },
          {
            to: "/guides/How-To/Custom-Data/create-a-blog-resource",
            from: "/docs/commerce-cloud/custom-data/create-a-blog-resource",
          },
          {
            to: "/docs/commerce-manager/promotions-standard/item-level-promotions/item-percentage-discount-promotions",
            from: "/docs/commerce-cloud/promotions/promotions-cm/item-level-promotions/item-percentage-discount-promotions",
          },
          {
            to: "/guides/How-To/Products/get-started-pxm",
            from: "/docs/pxm/products/get-started-pxm",
          },
          {
            to: "/docs/commerce-manager/team-management/",
            from: "/docs/commerce-cloud/team-management/team-management",
          },
          {
            to: "/guides/How-To/Subscriptions/subscription-models/membership",
            from: "/docs/subscriptions/subscription-models/membership",
          },
          {
            to: "/docs/api/promotions/get-all-promotions",
            from: "/docs/commerce-cloud/promotions/promotion-management/get-all-promotions",
          },
          {
            to: "/docs/studio/content/Blog-Management/Adding-a-Table-of-Contents-to-your-articles",
            from: "/docs/cx-studio/content/Blog-Management/Adding-a-Table-of-Contents-to-your-articles",
          },
          {
            to: "/guides/Getting-Started/pagination",
            from: "/docs/commerce-cloud/api-overview/pagination",
          },
          {
            to: "/docs/commerce-manager/analytics/",
            from: "/docs/commerce-cloud/analytics/analytics",
          },
          {
            to: "/docs/studio/Settings/account-management/GDPR-Messaging-&-Cookie-Consent",
            from: "/docs/cx-studio/Settings/account-management/GDPR-Messaging-&-Cookie-Consent",
          },
          {
            to: "/guides/How-To/Customers/manage-customers",
            from: "/docs/commerce-cloud/customer-management/manage-customers",
          },
          {
            to: "/docs/studio/content/Blog-Management/Adding-a-dividing-line-to-a-blog-post",
            from: "/docs/cx-studio/content/Blog-Management/Adding-a-dividing-line-to-a-blog-post",
          },
          {
            to: "/docs/studio/content/Dynamic-Pages-&-Databases/Data-Driven-Content",
            from: "/docs/cx-studio/content/Dynamic-Pages-&-Databases/Data-Driven-Content",
          },
          {
            to: "/docs/ship-groups/shipping-groups/shipping-groups-api/get-cart-shipping-groups",
            from: "/docs/commerce-cloud/shipping-groups/shipping-groups-api/get-cart-shipping-groups",
          },
          {
            to: "/docs/studio/developers/utility/jsonparser",
            from: "/docs/cx-studio/developers/utility/jsonparser",
          },
          {
            to: "/docs/commerce-manager/subscriptions/products/creating-products",
            from: "/docs/subscriptions/products/creating-products",
          },
          {
            to: "/docs/commerce-manager/promotions-standard/cart-level-promotions/cart-level-percentage-discount",
            from: "/docs/commerce-cloud/promotions/promotions-cm/cart-level-promotions/cart-level-percentage-discount",
          },
          {
            to: "/guides/How-To/paymentgateways/implement-manual-gateways",
            from: "/docs/commerce-cloud/payments/payments-developer/implement-manual-gateways",
          },
          {
            to: "/docs/commerce-manager/payments/ep-payments-powered-by-stripe",
            from: "/docs/commerce-cloud/payments/payment-gateway-cm/ep-payments-powered-by-stripe",
          },
          {
            to: "/guides/How-To/Carts/calculate-totals",
            from: "/docs/commerce-cloud/carts/calculate-totals",
          },
          {
            to: "/docs/api/personal-data/personal-data-related-data-entries",
            from: "/docs/commerce-cloud/personal-data/personal-data-related-data-entries-api/personal-data-related-entries-overview",
          },
          {
            to: "/docs/studio/content/Basic-Page-Editing/Hyperlinking-Text",
            from: "/docs/cx-studio/content/Basic-Page-Editing/Hyperlinking-Text",
          },
          {
            to: "/docs/api/personal-data/logs-time-to-live-settings",
            from: "/docs/commerce-cloud/personal-data/logs-ttl-settings/logs-ttl-settings-overview",
          },
          {
            to: "/docs/studio/Settings/Domain-Management/Connecting-your-Google-Domain",
            from: "/docs/cx-studio/Settings/Domain-Management/Connecting-your-Google-Domain",
          },
          {
            to: "/docs/authentication/single-sign-on/openid",
            from: "/docs/commerce-cloud/authentication/single-sign-on/openid",
          },
          {
            to: "/docs/studio/Settings/account-management/adding-a-user-to-your-account",
            from: "/docs/cx-studio/Settings/account-management/adding-a-user-to-your-account",
          },
          {
            to: "/docs/studio/content/Blog-Management/",
            from: "/docs/cx-studio/content/Blog-Management/Blog-Management",
          },
          {
            to: "/docs/api/integrations/delete-integration",
            from: "/docs/commerce-cloud/integrations/integrations-api/delete-an-integration",
          },
          {
            to: "/docs/api/carts/get-order-items",
            from: "/docs/commerce-cloud/orders/orders-api/get-order-items",
          },
          {
            to: "/docs/studio/Integrations/Adding-a-Google-Form-to-your-page",
            from: "/docs/cx-studio/Integrations/Adding-a-Google-Form-to-your-page",
          },
          {
            to: "/docs/commerce-manager/payments/paypal",
            from: "/docs/commerce-cloud/payments/payment-gateway-cm/paypal",
          },
          {
            to: "/docs/ship-groups/shipping-groups/shipping-groups-api/get-order-shipping-group-by-id",
            from: "/docs/commerce-cloud/shipping-groups/shipping-groups-api/get-order-shipping-groups",
          },
          {
            to: "/docs/commerce-manager/promotions-standard/item-level-promotions/x-for-amount-discount-promotions",
            from: "/docs/commerce-cloud/promotions/promotions-cm/item-level-promotions/x-for-amount-discount-promotions",
          },
          {
            to: "/docs/api/application-keys/get-all-keys",
            from: "/docs/commerce-cloud/authentication/application-keys/get-application-keys",
          },
          {
            to: "/docs/commerce-manager/promotions-standard/item-level-promotions/free-gift-promotions",
            from: "/docs/commerce-cloud/promotions/promotions-cm/item-level-promotions/free-gift-promotions",
          },
          {
            to: "/docs/api/pxm/catalog/delete-rule-by-id",
            from: "/docs/pxm/catalogs/catalog-rules/delete-a-catalog-rule",
          },
          {
            to: "/docs/commerce-manager/subscriptions/offerings/managing-subscription-offerings",
            from: "/docs/subscriptions/offerings/managing-subscription-offerings",
          },
          {
            to: "/docs/ship-groups/shipping-groups/",
            from: "/docs/commerce-cloud/shipping-groups/Overview",
          },
          {
            to: "/docs/authentication/security",
            from: "/docs/commerce-cloud/authentication/security",
          },
          {
            to: "/docs/commerce-manager/promotions-standard/item-level-promotions/item-fixed-discount-promotions",
            from: "/docs/commerce-cloud/promotions/promotions-cm/item-level-promotions/item-fixed-discount-promotions",
          },
          {
            to: "/docs/commerce-manager/product-experience-manager/catalogs/editing-catalogs",
            from: "/docs/pxm/catalogs/catalogs-cm/editing-catalogs",
          },
          {
            to: "/docs/studio/developers/custom-themes/",
            from: "/docs/cx-studio/developers/custom-themes/style-guide",
          },
          {
            to: "/docs/commerce-manager/product-experience-manager/product-assets/files",
            from: "/docs/pxm/products/product-assets/files",
          },
          {
            to: "/docs/studio/content/Basic-Page-Editing/Types-of-Lists",
            from: "/docs/cx-studio/content/Basic-Page-Editing/Types-of-Lists",
          },
          {
            to: "/docs/customer-management/customer-management-api/get-all-customers",
            from: "/docs/commerce-cloud/customer-management/customer-managment-api/get-all-customers",
          },
          {
            to: "/docs/studio/Settings/account-management/Updating-your-credit-card",
            from: "/docs/cx-studio/Settings/account-management/Updating-your-credit-card",
          },
          {
            to: "/docs/commerce-manager/product-experience-manager/hierarchies/overview",
            from: "/docs/pxm/hierarchies/hierarchies-cm/overview",
          },
          {
            to: "/guides/How-To/Accounts/authenticate-using-passwordless-authentication",
            from: "/docs/commerce-cloud/accounts/authenticate-using-passwordless-authentication",
          },
          {
            to: "/docs/studio/design/Header-and-Footer/Adjusting-Header-&-Footer-Logo-Size",
            from: "/docs/cx-studio/design/Header-and-Footer/Adjusting-Header-&-Footer-Logo-Size",
          },
          {
            to: "/docs/studio/Shopify/Managing-the-URLs-of-Shopify-Landing-Pages",
            from: "/docs/cx-studio/Shopify/Managing-the-URLs-of-Shopify-Landing-Pages",
          },
          {
            to: "/docs/commerce-manager/product-experience-manager/Products/overview",
            from: "/docs/pxm/products/pxm-products-commerce-manager/overview",
          },
          {
            to: "/docs/commerce-manager/promotions-standard/cart-level-promotions/cart-level-fixed-discount",
            from: "/docs/commerce-cloud/promotions/promotions-cm/cart-level-promotions/cart-level-fixed-discount",
          },
          {
            to: "/docs/api/promotions/get-a-promotion-history",
            from: "/docs/commerce-cloud/promotions/promotion-management/get-promotion-history",
          },
          {
            to: "/guides/How-To/Subscriptions/getting-started/developer-getting-started/first-api-call",
            from: "/docs/subscriptions/getting-started/developer-getting-started/first-api-call",
          },
          {
            to: "/guides/Getting-Started/maintenance",
            from: "/docs/commerce-cloud/getting-started/maintenance",
          },
          {
            to: "/docs/commerce-manager/payments/ep-payments-powered-by-stripe",
            from: "/docs/commerce-cloud/payments/payment-gateway/configure-elastic-path-payments-powered-by-stripe",
          },
          {
            to: "/docs/api/accounts/account-members",
            from: "/docs/commerce-cloud/accounts/using-account-members-api/get-all-account-members",
          },
          {
            to: "/guides/How-To/Personal-Data/view-personal-data-logs-all-related-items",
            from: "/docs/commerce-cloud/personal-data/view-personal-data-logs-all-related-items",
          },
          {
            to: "/docs/api/carts/create-a-cart",
            from: "/docs/commerce-cloud/carts/cart-management/create-multi-cart",
          },
          {
            to: "/docs/studio/content/Basic-Page-Editing/Working-with-Page-Previews",
            from: "/docs/cx-studio/content/Basic-Page-Editing/Working-with-Page-Previews",
          },
          {
            to: "/docs/api/pxm/inventory/get-single-stock-transaction",
            from: "/docs/pxm/inventories/get-a-product-stock-transaction",
          },
          {
            to: "/docs/studio/content/Basic-Page-Editing/Content-vs-Screen-Height",
            from: "/docs/cx-studio/content/Basic-Page-Editing/Content-vs-Screen-Height",
          },
          {
            to: "/docs/api/accounts/account-membership-settings",
            from: "/docs/commerce-cloud/accounts/account-membership-settings",
          },
          {
            to: "/docs/api/pxm/pricebooks/replicate-pricebook",
            from: "/docs/pxm/pricebooks/pxm-pricebooks/replicate-a-pricebook",
          },
          {
            to: "/docs/api/accounts/account-members",
            from: "/docs/commerce-cloud/accounts/using-account-members-api/get-an-account-member",
          },
          {
            to: "/docs/api/pxm/currencies/update-a-currency",
            from: "/docs/pxm/currencies/currencies-api/update-a-currency",
          },
          {
            to: "/docs/commerce-manager/promotions-standard/item-level-promotions/x-for-y-discount-promotions",
            from: "/docs/commerce-cloud/promotions/promotions-cm/item-level-promotions/x-for-y-discount-promotions",
          },
          {
            to: "/docs/studio/design/Design-&-Styles/Adding-a-pricing-table-to-your-page",
            from: "/docs/cx-studio/design/Design-&-Styles/Adding-a-pricing-table-to-your-page",
          },
          {
            to: "/docs/authentication/single-sign-on/user-authentication-info-api/create-a-user-authentication-info",
            from: "/docs/commerce-cloud/authentication/single-sign-on/user-authentication-info-api/overview",
          },
          {
            to: "/docs/api/pxm/inventory/get-stock-transactions",
            from: "/docs/pxm/inventories/get-a-product-stock-transactions",
          },
          {
            to: "/guides/How-To/Catalogs/full-publish",
            from: "/docs/pxm/catalogs/full-publish",
          },
          {
            to: "/docs/commerce-manager/organizations/manage-org-currencies",
            from: "/docs/commerce-cloud/organizations/organizations-in-commerce-manager/manage-org-currencies",
          },
          {
            to: "/guides/Getting-Started/quotas",
            from: "/docs/commerce-cloud/api-overview/quotas",
          },
          {
            to: "/docs/api/application-keys/delete-key",
            from: "/docs/commerce-cloud/authentication/application-keys/delete-an-application-key",
          },
          {
            to: "/guides/How-To/Accounts/authenticate-using-self-signup",
            from: "/docs/commerce-cloud/accounts/authenticate-using-self-signup",
          },
          {
            to: "/guides/How-To/Carts/Taxes/create-tax-rates",
            from: "/docs/commerce-cloud/carts/tax-items/create-tax-rates",
          },
          {
            to: "/docs/studio/Shopify/Conversion-Tracking-for-Shopify-Purchases",
            from: "/docs/cx-studio/Shopify/Conversion-Tracking-for-Shopify-Purchases",
          },
          {
            to: "/docs/api/payments/payment-gateways-introduction",
            from: "/docs/commerce-cloud/payments/payments",
          },
          {
            to: "/guides/Getting-Started/eventual-consistency",
            from: "/docs/commerce-cloud/api-overview/eventual-consistency",
          },
          {
            to: "/docs/studio/Shopify/Syncing-your-Shopify-Products-Where-are-my-products",
            from: "/docs/cx-studio/Shopify/Syncing-your-Shopify-Products-Where-are-my-products",
          },
          {
            to: "/docs/api/carts/delete-all-cart-items",
            from: "/docs/commerce-cloud/carts/cart-items/delete-cart-items",
          },
          {
            to: "/docs/commerce-manager/product-experience-manager/locales/",
            from: "/docs/pxm/products/locales/locales",
          },
          {
            to: "/docs/studio/content/Media-Management/Adding-parallax-to-background-media",
            from: "/docs/cx-studio/content/Media-Management/Adding-parallax-to-background-media",
          },
          {
            to: "/docs/customer-management/customer-management-api/customer-management-api-overview",
            from: "/docs/commerce-cloud/customer-management/customer-managment-api/customer-management-api-overview",
          },
          {
            to: "/guides/How-To/Accounts/add-account-and-member",
            from: "/docs/commerce-cloud/accounts/add-account-and-member",
          },
          {
            to: "/docs/rule-promotions/rule-promotion-codes/create-rule-promotion-codes",
            from: "/docs/commerce-cloud/rule-promotions/rule-promotion-codes/create-rule-promotion-codes",
          },
          {
            to: "/docs/api/accounts/account-membership",
            from: "/docs/commerce-cloud/accounts/using-account-membership-api/get-an-account-membership",
          },
          {
            to: "/guides/How-To/Carts/create-custom-cart-items",
            from: "/docs/commerce-cloud/carts/create-custom-cart-items",
          },
          {
            to: "/guides/How-To/Personal-Data/view-personal-data-logs",
            from: "/docs/commerce-cloud/personal-data/view-personal-data-logs",
          },
          {
            to: "/docs/studio/Integrations/Integrating-segment",
            from: "/docs/cx-studio/Integrations/Integrating-segment",
          },
          {
            to: "/docs/studio/Shopify/Shopify-Purchases",
            from: "/docs/cx-studio/Shopify/Shopify-Purchases",
          },
          {
            to: "/docs/studio/Shopify/Removing-from-Shopify",
            from: "/docs/cx-studio/Shopify/Removing-from-Shopify",
          },
          {
            to: "/docs/api/pxm/pricebooks/get-pricebooks",
            from: "/docs/pxm/pricebooks/pxm-pricebooks/get-all-pricebooks",
          },
          {
            to: "/docs/api/pxm/pricebooks/get-pricebooks",
            from: "/docs/pxm/pricebooks/pxm-pricebooks/get-a-pricebook",
          },
          {
            to: "/docs/studio/content/Blog-Management/Generating-dynamic-pages-for-tags",
            from: "/docs/cx-studio/content/Blog-Management/Generating-dynamic-pages-for-tags",
          },
          {
            to: "/docs/api/promotions/create-promotion-codes",
            from: "/docs/commerce-cloud/promotions/promotion-codes/create-promotion-codes",
          },
          {
            to: "/docs/api/integrations/update-integration",
            from: "/docs/commerce-cloud/integrations/integrations-api/update-an-integration",
          },
          {
            to: "/docs/api/pxm/products/get-all-product-tags",
            from: "/docs/pxm/products/ep-pxm-products-api/get-product-tags",
          },
          {
            to: "/changelog/Studio-Release-Notes/2022/Release-144-July-4-2022",
            from: "/docs/cx-studio/Release-Notes/2022/Release-144-July-4-2022",
          },
          {
            to: "/changelog/Studio-Release-Notes/2022/Release-144-July-4-2022",
            from: "/docs/cx-studio/Release-Notes/2022/Release-146-July-26-2022",
          },
          {
            to: "/docs/studio/developers/e-commerce/product-inventory",
            from: "/docs/cx-studio/developers/e-commerce/product-inventory",
          },
          {
            to: "/docs/api/promotions/promotions-standard-introduction",
            from: "/docs/commerce-cloud/promotions/promotions-overview",
          },
          {
            to: "/docs/api/pxm/pricebooks/price-book-modifiers",
            from: "/docs/pxm/pricebooks/pxm-pricebooks-modifiers/create-a-price-modifier",
          },
          {
            to: "/docs/api/promotions/get-all-promotions",
            from: "/docs/commerce-cloud/promotions/promotion-management/get-a-promotion",
          },
          {
            to: "/docs/api/pxm/products/get-all-nodes-in-hierarchy",
            from: "/docs/pxm/hierarchies/nodes-api/get-a-hierarchy-node",
          },
          {
            to: "/docs/commerce-manager/product-experience-manager/catalogs/catalog-rules",
            from: "/docs/pxm/catalogs/catalogs-cm/catalog-rules",
          },
          {
            to: "/docs/api/accounts/account-membership",
            from: "/docs/commerce-cloud/accounts/using-account-membership-api/create-an-account-membership",
          },
          {
            to: "/docs/api/pxm/products/product-export",
            from: "/docs/pxm/products/exporting-products/product-export-csv",
          },
          {
            to: "/guides/Getting-Started/errors",
            from: "/docs/commerce-cloud/api-overview/errors",
          },
          {
            to: "/docs/commerce-manager/product-experience-manager/catalogs/publishing-catalogs",
            from: "/docs/pxm/catalogs/catalogs-cm/publishing-catalogs",
          },
          {
            to: "/docs/authentication/single-sign-on/password-profiles-api/delete-a-password-profile",
            from: "/docs/commerce-cloud/authentication/single-sign-on/password-profiles-api/delete-a-password-profile",
          },
          {
            to: "/docs/api/accounts/account-membership",
            from: "/docs/commerce-cloud/accounts/using-account-membership-api/get-all-account-memberships",
          },
          {
            to: "/guides/Getting-Started/partial-updates",
            from: "/docs/commerce-cloud/api-overview/partial-updates",
          },
          {
            to: "/guides/Getting-Started/api-reference",
            from: "/docs/commerce-cloud/getting-started/api-reference",
          },
          {
            to: "/docs/studio/developers/tags/media",
            from: "/docs/cx-studio/developers/tags/media",
          },
          {
            to: "/guides/How-To/Subscriptions/getting-started/merchandizer-getting-started/commerce-manager-setup",
            from: "/docs/subscriptions/getting-started/merchandizer-getting-started/commerce-manager-setup",
          },
          {
            to: "/docs/studio/content/Forms-&-Contacts/Exporting-Contacts",
            from: "/docs/cx-studio/content/Forms-&-Contacts/Exporting-Contacts",
          },
          {
            to: "/guides/Getting-Started/test-with-postman-collection",
            from: "/docs/commerce-cloud/api-overview/test-with-postman-collection",
          },
          {
            to: "/docs/api/carts/tax-items",
            from: "/docs/commerce-cloud/carts/tax-items/taxes",
          },
          {
            to: "/docs/api/pxm/products/create-node-child-relationships",
            from: "/docs/pxm/hierarchies/node-relationships-api/create-node-child-relationships",
          },
          {
            to: "/docs/api/pxm/products/bundle-component-products-relationships",
            from: "/docs/pxm/products/pxm-bundles/pxm-bundles-api/get-component-products-relationships",
          },
          {
            to: "/docs/api/pxm/pricebooks/prices",
            from: "/docs/pxm/pricebooks/price-books",
          },
          {
            to: "/docs/api/pxm/products/create-variation-option",
            from: "/docs/pxm/products/pxm-product-variations/pxm-variation-options-api/create-option",
          },
          {
            to: "/docs/api/carts/bulk-delete-tax-items-from-cart",
            from: "/docs/commerce-cloud/carts/tax-items/bulk-delete-tax-items",
          },
          {
            to: "/docs/ship-groups/shipping-groups/shipping-groups-api/create-cart-shipping-group",
            from: "/docs/commerce-cloud/shipping-groups/shipping-groups-api/create-cart-shipping-group",
          },
          {
            to: "/docs/studio/Integrations/Integrating-HubSpot",
            from: "/docs/cx-studio/Integrations/Integrating-HubSpot",
          },
          {
            to: "/docs/commerce-manager/organizations/org-pxm-entities-in-commerce-manager/create-org_pxm_products",
            from: "/docs/commerce-cloud/organizations/organizations-in-commerce-manager/org-pxm-entities-in-commerce-manager/create-org_pxm_products",
          },
          {
            to: "/docs/ship-groups/shipping-groups/shipping-groups-api/get-order-shipping-group-by-id",
            from: "/docs/commerce-cloud/shipping-groups/shipping-groups-api/get-order-shipping-group-by-id",
          },
          {
            to: "/docs/api/pxm/products/create-hierarchy",
            from: "/docs/pxm/hierarchies/hierarchies-api/create-a-hierarchy",
          },
          {
            to: "/docs/api/pxm/pricebooks/delete-product-price",
            from: "/docs/pxm/pricebooks/pxm-pricebooks-prices/delete-product-prices",
          },
          {
            to: "/docs/api/carts/delete-a-cart",
            from: "/docs/commerce-cloud/carts/cart-management/delete-a-cart",
          },
          {
            to: "/guides/How-To/Promotions-Standard/creating-promotion",
            from: "/docs/commerce-cloud/promotions/creating-promotion",
          },
          {
            to: "/docs/api/pxm/products/update-variation-option",
            from: "/docs/pxm/products/pxm-product-variations/pxm-variation-options-api/update-option",
          },
          {
            to: "/docs/authentication/single-sign-on/password-profiles-api/overview",
            from: "/docs/commerce-cloud/authentication/single-sign-on/password-profiles-api/overview",
          },
          {
            to: "/docs/api/pxm/pricebooks/import-a-price-book-and-prices",
            from: "/docs/pxm/pricebooks/price-import/overview",
          },
          {
            to: "/docs/commerce-manager/payments/overview",
            from: "/docs/commerce-cloud/payments/payment-gateway-cm/overview",
          },
          {
            to: "/guides/How-To/paymentgateways/implement-paypal-express-checkout",
            from: "/docs/commerce-cloud/payments/payments-developer/implement-paypal-express-checkout",
          },
          {
            to: "/docs/commerce-manager/promotions-standard/item-level-promotions/free-gift-promotions",
            from: "/docs/commerce-cloud/promotions/promotion-management/create-free-gift-promotion",
          },
          {
            to: "/docs/organizations/org-level-entities",
            from: "/docs/commerce-cloud/organizations/org-level-entities",
          },
          {
            to: "/docs/api/application-keys/create-key",
            from: "/docs/commerce-cloud/authentication/application-keys/application-keys-cm",
          },
          {
            to: "/changelog/Studio-Release-Notes/2022/Release-142-June-2-2022",
            from: "/docs/cx-studio/Release-Notes/2022/Release-142-June-2-2022",
          },
          {
            to: "/docs/commerce-manager/Invoicing/create-invoices",
            from: "/docs/commerce-cloud/payments/invoicing/create-invoices",
          },
          {
            to: "/docs/api/pxm/products/update-node",
            from: "/docs/pxm/hierarchies/nodes-api/update-a-hierarchy-node",
          },
          {
            to: "/docs/api/pxm/products/get-all-jobs",
            from: "/docs/pxm/jobs-api/get-a-job",
          },
          {
            to: "/docs/api/pxm/products/get-all-jobs",
            from: "/docs/pxm/jobs-api/get-all-jobs",
          },
          {
            to: "/docs/authentication/single-sign-on/password-profiles-api/update-a-password-profile",
            from: "/docs/commerce-cloud/authentication/single-sign-on/password-profiles-api/update-a-password-profile",
          },
          {
            to: "/guides/Getting-Started/safe-characters",
            from: "/docs/commerce-cloud/api-overview/safe-characters",
          },
          {
            to: "/docs/api/pxm/catalog/delete-catalog-by-id",
            from: "/docs/pxm/catalogs/catalog-configuration/delete-a-catalog",
          },
          {
            to: "/guides/Getting-Started/includes",
            from: "/docs/commerce-cloud/api-overview/includes",
          },
          {
            to: "/docs/api/promotions/get-promotion-jobs",
            from: "/docs/commerce-cloud/promotions/promotion-codes/jobs-api/get-jobs",
          },
          {
            to: "/docs/studio/developers/tags/richtext",
            from: "/docs/cx-studio/developers/tags/richtext",
          },
          {
            to: "/docs/api/pxm/products/update-variation",
            from: "/docs/pxm/products/pxm-product-variations/pxm-product-variations-api/update-variation",
          },
          {
            to: "/docs/api/carts/bulk-delete-custom-discounts-from-cart",
            from: "/docs/commerce-cloud/carts/custom-discounts/bulk-delete-custom-discount-from-cart",
          },
          {
            to: "/docs/commerce-manager/product-experience-manager/hierarchies/assigning-products",
            from: "/docs/pxm/hierarchies/hierarchies-cm/assigning-products",
          },
          {
            to: "/docs/api/promotions/promotion-jobs",
            from: "/docs/commerce-cloud/promotions/promotion-codes/jobs-api/overview",
          },
          {
            to: "/docs/api/flows/entry-relationships",
            from: "/docs/commerce-cloud/custom-data/custom-data-flows-api/entry-relationship/create-an-entry-relationship",
          },
          {
            to: "/docs/api/accounts/account-membership",
            from: "/docs/commerce-cloud/accounts/using-account-membership-api/update-an-account-membership",
          },
          {
            to: "/docs/api/promotions/cancel-a-job",
            from: "/docs/commerce-cloud/promotions/promotion-codes/jobs-api/cancel-a-job",
          },
          {
            to: "/docs/studio/policies/Moving-a-subscription-to-another-account",
            from: "/docs/cx-studio/policies/Moving-a-subscription-to-another-account",
          },
          {
            to: "/docs/api/promotions/delete-a-promotion-code",
            from: "/docs/commerce-cloud/promotions/promotion-codes/delete-a-promotion-code",
          },
          {
            to: "/guides/How-To/Personal-Data/personal-data-management",
            from: "/docs/commerce-cloud/personal-data/personal-data-management",
          },
          {
            to: "/docs/commerce-manager/product-experience-manager/hierarchies/deleting",
            from: "/docs/pxm/hierarchies/hierarchies-cm/deleting",
          },
          {
            to: "/docs/studio/Shopify/Adding-Users-in-Shopify",
            from: "/docs/cx-studio/Shopify/Adding-Users-in-Shopify",
          },
          {
            to: "/docs/api/pxm/inventory/get-product-stock",
            from: "/docs/pxm/inventories/get-a-product-stock",
          },
          {
            to: "/docs/customer-management/customers",
            from: "/docs/commerce-cloud/customer-management/customers",
          },
          {
            to: "/docs/rule-promotions/rule-promotions-api/rule-promotions-management/get-rule-promotions",
            from: "/docs/commerce-cloud/rule-promotions/rule-promotions-api/rule-promotions-api-overview",
          },
          {
            to: "/docs/api/promotions/update-a-promotion",
            from: "/docs/commerce-cloud/promotions/promotion-management/update-promotions",
          },
          {
            to: "/docs/commerce-manager/flows/",
            from: "/docs/commerce-cloud/custom-data/flows",
          },
          {
            to: "/docs/studio/Settings/Domain-Management/Removing-your-custom-domain",
            from: "/docs/cx-studio/Settings/Domain-Management/Removing-your-custom-domain",
          },
          {
            to: "/docs/api/pxm/catalog/delete-catalog-by-id",
            from: "/docs/pxm/catalogs/catalogs-cm/deleting-catalogs",
          },
          {
            to: "/docs/api/pxm/inventory/get-stock-for-multiple-products",
            from: "/docs/pxm/inventories/get-multiple-stocks",
          },
          {
            to: "/docs/studio/developers/tags/plaintext",
            from: "/docs/cx-studio/developers/tags/plaintext",
          },
          {
            to: "/guides/How-To/paymentgateways/generate-cardconnect-token",
            from: "/docs/commerce-cloud/payments/payments-developer/generate-cardconnect-token",
          },
          {
            to: "/docs/studio/design/Header-and-Footer/Adding-links-to-your-Header-&-Footer-Navigation",
            from: "/docs/cx-studio/design/Header-and-Footer/Adding-links-to-your-Header-&-Footer-Navigation",
          },
          {
            to: "/guides/How-To/paymentgateways/generate-cybersource-keys-tokens",
            from: "/docs/commerce-cloud/payments/payments-developer/generate-cybersource-keys-tokens",
          },
          {
            to: "/docs/api/commerce-extensions",
            from: "/docs/commerce-cloud/commerce-extensions/commerce-extension-in-cm",
          },
          {
            to: "/docs/api/pxm/products/create-hierarchy",
            from: "/docs/pxm/hierarchies/hierarchies-cm/creating_hierarchies",
          },
          {
            to: "/docs/commerce-manager/promotions-builder/creating-promotion-codes",
            from: "/docs/commerce-cloud/rule-promotions/promotions-in-commerce-manager/creating-promotion-codes",
          },
          {
            to: "/docs/api/accounts/account-membership",
            from: "/docs/commerce-cloud/accounts/using-account-membership-api/get-all-account-memberships-on-account-member",
          },
          {
            to: "/docs/carts-orders/confirm-an-order",
            from: "/docs/commerce-cloud/orders/orders-api/confirm-an-order",
          },
          {
            to: "/docs/studio/Settings/account-management/Enabling-two-factor-authentication",
            from: "/docs/cx-studio/Settings/account-management/Enabling-two-factor-authentication",
          },
          {
            to: "/docs/api/flows/create-a-flow",
            from: "/docs/commerce-cloud/custom-data/custom-data-flows-api/Flows/create-a-flow",
          },
          {
            to: "/docs/authentication/single-sign-on/password-profiles-api/get-a-password-profile",
            from: "/docs/commerce-cloud/authentication/single-sign-on/password-profiles-api/get-a-password-profile",
          },
          {
            to: "/guides/How-To/Products/curating-products",
            from: "/docs/pxm/products/curating-products",
          },
          {
            to: "/docs/api/carts/delete-all-cart-items",
            from: "/docs/commerce-cloud/carts/cart-items/delete-a-cart-item",
          },
          {
            to: "/docs/api/pxm/pricebooks/create-pricebook",
            from: "/docs/pxm/pricebooks/pxm-pricebooks/create-a-pricebook",
          },
          {
            to: "/docs/api/accounts/get-v-2-accounts-account-id-account-memberships-unassigned-account-members",
            from: "/docs/commerce-cloud/accounts/using-account-membership-api/get-all-unassigned-account-members",
          },
          {
            to: "/docs/customer-management/customer-management-api/customer-tokens",
            from: "/docs/commerce-cloud/customer-management/customer-managment-api/customer-tokens",
          },
          {
            to: "/docs/studio/content/advanced-page-editing/Feature-Image-&-Social-Share-Image",
            from: "/docs/cx-studio/content/advanced-page-editing/Feature-Image-&-Social-Share-Image",
          },
          {
            to: "/docs/api/carts/customer-cart-associations",
            from: "/docs/commerce-cloud/carts/customer-cart-associations/customer-cart-associations-overview",
          },
          {
            to: "/docs/api/carts/account-cart-associations",
            from: "/docs/commerce-cloud/carts/account-cart-associations/account-cart-associations-overview",
          },
          {
            to: "/guides/Getting-Started/links",
            from: "/docs/commerce-cloud/api-overview/links",
          },
          {
            to: "/docs/authentication/single-sign-on/password-profiles-api/create-a-password-profile",
            from: "/docs/commerce-cloud/authentication/single-sign-on/password-profiles-api/create-a-password-profile",
          },
          {
            to: "/docs/authentication/Tokens/client-credential-token",
            from: "/docs/commerce-cloud/authentication/Tokens/client-credential-token",
          },
          {
            to: "/docs/api/pxm/catalog/publish-release",
            from: "/docs/pxm/catalogs/catalog-release-admin/publish-a-catalog",
          },
          {
            to: "/docs/api/promotions/delete-multiple-promotion-codes",
            from: "/docs/commerce-cloud/promotions/promotion-codes/delete-multiple-promotion-codes",
          },
          {
            to: "/docs/api/pxm/products/duplicate-hierarchy",
            from: "/docs/pxm/hierarchies/hierarchies-api/duplicate-a-hierarchy",
          },
          {
            to: "/docs/commerce-manager/product-experience-manager/Products/configure-locales",
            from: "/docs/pxm/products/pxm-products-commerce-manager/configure-locales",
          },
          {
            to: "/docs/api/pxm/products/get-all-jobs",
            from: "/docs/commerce-cloud/orders/jobs-api/get-all-jobs",
          },
          {
            to: "/docs/api/pxm/currencies/create-a-currency",
            from: "/docs/pxm/currencies/currencies-api/currencies-api-overview",
          },
          {
            to: "/docs/studio/developers/eCommerce/Displaying-search-term-in-your-landing-pages",
            from: "/docs/cx-studio/developers/eCommerce/Displaying-search-term-in-your-landing-pages",
          },
          {
            to: "/docs/api/application-keys/get-all-keys",
            from: "/docs/commerce-cloud/authentication/application-keys/get-an-application-key",
          },
          {
            to: "/docs/studio/content/Blog-Management/Adding-a-video,-image,-form,-or-divider-to-your-blog",
            from: "/docs/cx-studio/content/Blog-Management/Adding-a-video,-image,-form,-or-divider-to-your-blog",
          },
          {
            to: "/docs/api/exporter/create-job",
            from: "/docs/commerce-cloud/orders/jobs-api/create-a-job",
          },
          {
            to: "/changelog/Studio-Release-Notes/2022/Release-159-November-28-2022",
            from: "/docs/cx-studio/Release-Notes/2022/Release-157-November-14-2022",
          },
          {
            to: "/changelog/Studio-Release-Notes/2022/Release-159-November-28-2022",
            from: "/docs/cx-studio/Release-Notes/2022/Release-159-November-28-2022",
          },
          {
            to: "/changelog/Studio-Release-Notes/Release-198-May-29-2024",
            from: "/docs/cx-studio/Release-Notes/2022/Release-141-May-16-2022",
          },
          {
            to: "/guides/Getting-Started/elastic-path-domains",
            from: "/docs/commerce-cloud/api-overview/elastic-path-domains",
          },
          {
            to: "/docs/api/accounts/delete-v-2-accounts-account-id-account-memberships-membership-id",
            from: "/docs/commerce-cloud/accounts/using-account-membership-api/delete-an-account-membership",
          },
          {
            to: "/docs/commerce-manager/product-experience-manager/catalogs/creating-catalogs",
            from: "/docs/pxm/catalogs/catalogs-cm/creating-catalogs",
          },
          {
            to: "/docs/api/promotions/get-promotion-code-exported-file",
            from: "/docs/commerce-cloud/promotions/promotion-codes/jobs-api/get-exported-codes",
          },
          {
            to: "/docs/commerce-manager/promotions-standard/overview",
            from: "/docs/commerce-cloud/promotions/promotions-cm/overview",
          },
          {
            to: "/docs/studio/developers/eCommerce/Provide-a-coupon-code-to-users-who-visited-your-site-multiple-times-without-converting",
            from: "/docs/cx-studio/developers/eCommerce/Provide-a-coupon-code-to-users-who-visited-your-site-multiple-times-without-converting",
          },
          {
            to: "/docs/studio/Settings/account-management/Upgrading-your-Unstack-Account",
            from: "/docs/cx-studio/Settings/account-management/Upgrading-your-Unstack-Account",
          },
          {
            to: "/docs/api/pxm/products/get-all-jobs",
            from: "/docs/commerce-cloud/orders/jobs-api/get-a-job",
          },
          {
            to: "/docs/api/pxm/pricebooks/import-pricebook",
            from: "/docs/pxm/pricebooks/price-import/pricebook-import-jsonl",
          },
          {
            to: "/docs/api/pxm/products/create-node",
            from: "/docs/pxm/hierarchies/nodes-api/create-a-hierarchy-node",
          },
          {
            to: "/docs/studio/content/Basic-Page-Editing/Adding-or-Removing-Animations",
            from: "/docs/cx-studio/content/Basic-Page-Editing/Adding-or-Removing-Animations",
          },
          {
            to: "/docs/api/pxm/pricebooks/delete-pricebook-by-id",
            from: "/docs/pxm/pricebooks/pxm-pricebooks/delete-a-pricebook",
          },
          {
            to: "/docs/api/flows/entry-relationships",
            from: "/docs/commerce-cloud/custom-data/custom-data-flows-api/entry-relationship/update-entry-relationships",
          },
          {
            to: "/docs/studio/developers/tags/collection",
            from: "/docs/cx-studio/developers/tags/collection",
          },
          {
            to: "/docs/api/accounts/account-membership",
            from: "/docs/commerce-cloud/accounts/using-account-membership-api/overview",
          },
          {
            to: "/docs/api/pxm/products/product-import-bulk-update",
            from: "/docs/pxm/products/importing-products/product-importer-csv",
          },
          {
            to: "/changelog/Studio-Release-Notes/Release-189-January-29-2024",
            from: "/docs/cx-studio/Release-Notes/Release-189-January-29-2024",
          },
          {
            to: "/docs/authentication/",
            from: "/docs/commerce-cloud/authentication/overview",
          },
          {
            to: "/docs/api/carts/create-cart-payment-intent",
            from: "/docs/commerce-cloud/carts/cart-payment-intent/create-payment-intent-against-cart",
          },
          {
            to: "/docs/commerce-manager/product-experience-manager/Products/search-products",
            from: "/docs/pxm/products/pxm-products-commerce-manager/search-products",
          },
          {
            to: "/docs/studio/developers/eCommerce/Using-dynamic-parameters-to-customize-ecommerce-pages",
            from: "/docs/cx-studio/developers/eCommerce/Using-dynamic-parameters-to-customize-ecommerce-pages",
          },
          {
            to: "/docs/api/payments/update-paypal-express-checkout-gateway",
            from: "/docs/commerce-cloud/payments/payment-gateway/configure-paypal-express-checkout",
          },
          {
            to: "/docs/api/carts/cart-items",
            from: "/docs/commerce-cloud/carts/cart-items/cart-items-overview",
          },
          {
            to: "/docs/carts-orders/refund-a-transaction",
            from: "/docs/commerce-cloud/payments/transactions/refund-a-transaction",
          },
          {
            to: "/docs/studio/developers/eCommerce/Reminding-users-to-use-a-coupon-code",
            from: "/docs/cx-studio/developers/eCommerce/Reminding-users-to-use-a-coupon-code",
          },
          {
            to: "/docs/api/payments/update-manual-gateway",
            from: "/docs/commerce-cloud/payments/payment-gateway/configure-manual-gateway",
          },
          {
            to: "/docs/studio/content/advanced-page-editing/Preventing-a-page-from-being-indexed",
            from: "/docs/cx-studio/content/advanced-page-editing/Preventing-a-page-from-being-indexed",
          },
          {
            to: "/docs/api/promotions/delete-a-promotion",
            from: "/docs/commerce-cloud/promotions/promotion-management/delete-a-promotion",
          },
          { to: "/docs/studio/", from: "/docs/cx-studio" },
          {
            to: "/docs/studio/developers/eCommerce/Show-content-to-users-who-have-previously-spent-a-certain-amount",
            from: "/docs/cx-studio/developers/eCommerce/Show-content-to-users-who-have-previously-spent-a-certain-amount",
          },
          {
            to: "/docs/api/pxm/pricebooks/import-pricebook",
            from: "/docs/pxm/pricebooks/price-import/import-prices",
          },
          {
            to: "/docs/api/pxm/pricebooks/get-price-modifiers",
            from: "/docs/pxm/pricebooks/pxm-pricebooks-modifiers/get-all-price-modifiers",
          },
          {
            to: "/docs/api/pxm/inventory/inventory",
            from: "/docs/pxm/inventories/get-all-inventory",
          },
          {
            to: "/docs/api/pxm/products/delete-hierarchy",
            from: "/docs/pxm/hierarchies/hierarchies-api/delete-hierarchy",
          },
          {
            to: "/docs/api/carts/custom-discounts",
            from: "/docs/commerce-cloud/carts/custom-discounts/add-custom-discount-to-cart",
          },
          {
            to: "/docs/api/pxm/pricebooks/price-book-modifiers",
            from: "/docs/pxm/pricebooks/pxm-pricebooks-modifiers/get-a-price-modifier",
          },
          {
            to: "/docs/api/pxm/products/get-job-errors",
            from: "/docs/pxm/jobs-api/get-a-job-error",
          },
          {
            to: "/docs/api/carts/get-carts",
            from: "/docs/commerce-cloud/carts/cart-management/get-all-carts",
          },
          {
            to: "/changelog/Studio-Release-Notes/Release-189-January-29-2024",
            from: "/docs/cx-studio/Release-Notes/2023/Release-163-January-17-2023",
          },
          {
            to: "/docs/api/accounts/account-authentication-settings",
            from: "/docs/commerce-cloud/authentication/single-sign-on/account-authentication-settings/get-account-authentication-settings",
          },
          {
            to: "/docs/api/accounts/account-members",
            from: "/docs/commerce-cloud/accounts/using-account-members-api/overview",
          },
          {
            to: "/docs/api/accounts/post-v-2-accounts",
            from: "/docs/commerce-cloud/accounts/using-account-management-api/create-an-account",
          },
          {
            to: "/docs/commerce-manager/product-experience-manager/hierarchies/deleting",
            from: "/docs/pxm/hierarchies/nodes-api/delete-a-hierarchy-node",
          },
          {
            to: "/guides/How-To/paymentgateways/generate-adyen-token",
            from: "/docs/commerce-cloud/payments/payments-developer/generate-adyen-token",
          },
          {
            to: "/docs/api/application-keys/update-key",
            from: "/docs/commerce-cloud/authentication/application-keys/update-an-application-key",
          },
          {
            to: "/docs/api/pxm/products/create-variation",
            from: "/docs/pxm/products/pxm-product-variations/pxm-product-variations-api/create-variation",
          },
          {
            to: "/docs/api/flows/get-all-flows",
            from: "/docs/commerce-cloud/custom-data/custom-data-flows-api/Flows/get-a-flow",
          },
          {
            to: "/docs/commerce-manager/product-experience-manager/catalogs/catalog-rules",
            from: "/docs/pxm/catalogs/catalog-rules/catalog-rules",
          },
          {
            to: "/changelog/Studio-Release-Notes/2021/Release-118-Oct-11-2021",
            from: "/docs/cx-studio/Release-Notes/2021/Release-119-Oct-20-2021",
          },
          {
            to: "/changelog/Studio-Release-Notes/2021/Release-118-Oct-11-2021",
            from: "/docs/cx-studio/Release-Notes/2021/Release-118-Oct-11-2021",
          },
          {
            to: "/docs/api/pxm/products/get-all-modifiers",
            from: "/docs/pxm/products/pxm-product-variations/pxm-variation-modifiers-api/modifiers",
          },
          {
            to: "/docs/api/carts/delete-custom-discount-from-cart",
            from: "/docs/commerce-cloud/carts/custom-discounts/delete-a-custom-discount-from-cart",
          },
          {
            to: "/docs/api/pxm/products/jobs",
            from: "/docs/pxm/jobs-api/jobs-api-overview",
          },
          {
            to: "/docs/studio/Settings/account-management/User-Role-Definitions",
            from: "/docs/cx-studio/Settings/account-management/User-Role-Definitions",
          },
          {
            to: "/docs/api/payments/gateways",
            from: "/docs/commerce-cloud/payments/payment-gateway/get-all-gateways",
          },
          {
            to: "/docs/api/application-keys/create-key",
            from: "/docs/commerce-cloud/authentication/application-keys/create-an-application-key",
          },
          {
            to: "/docs/api/pxm/products/get-all-node-children",
            from: "/docs/pxm/hierarchies/node-relationships-api/get-node-children",
          },
          {
            to: "/docs/api/flows/delete-an-entry-relationship",
            from: "/docs/commerce-cloud/custom-data/custom-data-flows-api/entry-relationship/delete-entry-relationships",
          },
          {
            to: "/docs/api/pxm/products/get-all-product-tags",
            from: "/docs/pxm/products/pxm-products-commerce-manager/tagging-products",
          },
          {
            to: "/guides/How-To/Products/curating-products",
            from: "/docs/pxm/products/pxm-products-commerce-manager/curating-products",
          },
          {
            to: "/docs/api/pxm/pricebooks/create-pricebook",
            from: "/docs/pxm/pricebooks/pxm-pricebooks/pxm-pricebooks-overview",
          },
          {
            to: "/docs/api/accounts/get-v-2-accounts-account-id",
            from: "/docs/commerce-cloud/accounts/using-account-management-api/get-an-account",
          },
          {
            to: "/changelog/Studio-Release-Notes/2022/Release-162-January-5-2022",
            from: "/docs/cx-studio/Release-Notes/2022/Release-162-January-5-2022",
          },
          {
            to: "/docs/api/carts/delete-custom-discount-from-cart-item",
            from: "/docs/commerce-cloud/carts/custom-discounts/delete-a-custom-discount-from-cart-item",
          },
          {
            to: "/docs/api/carts/cancel-a-transaction",
            from: "/docs/commerce-cloud/payments/transactions/cancel-a-transaction",
          },
          {
            to: "/docs/api/carts/add-custom-discount-to-cart-item",
            from: "/docs/commerce-cloud/carts/custom-discounts/add-custom-discount-to-cart-item",
          },
          {
            to: "/docs/api/pxm/pricebooks/price-book-modifiers",
            from: "/docs/pxm/pricebooks/pxm-pricebooks-modifiers/update-a-price-modifier",
          },
          {
            to: "/docs/studio/developers/eCommerce/Show-content-to-users-to-users-who-previously-interacted-with-a-form",
            from: "/docs/cx-studio/developers/eCommerce/Show-content-to-users-to-users-who-previously-interacted-with-a-form",
          },
          {
            to: "/docs/commerce-manager/subscriptions/products/creating-pxm-products",
            from: "/docs/pxm/products/pxm-products-commerce-manager/subscription-products",
          },
          {
            to: "/docs/api/pxm/products/create-node-product-relationship",
            from: "/docs/pxm/hierarchies/node-relationships-api/create-node-product-relationships",
          },
          {
            to: "/docs/api/pxm/products/get-all-product-tags",
            from: "/docs/pxm/products/products_tags",
          },
          {
            to: "/docs/carts-orders/bulk-add-to-cart",
            from: "/docs/commerce-cloud/carts/cart-items/bulk-add-to-cart",
          },
          {
            to: "/docs/api/accounts/delete-v-2-accounts-account-id",
            from: "/docs/commerce-cloud/accounts/using-account-management-api/delete-an-account",
          },
          {
            to: "/docs/api/pxm/pricebooks/get-product-prices",
            from: "/docs/pxm/pricebooks/pxm-pricebooks-prices/get-a-products-prices",
          },
          {
            to: "/docs/commerce-manager/product-experience-manager/Products/delete-products",
            from: "/docs/pxm/products/pxm-products-commerce-manager/delete-products",
          },
          {
            to: "/docs/api/promotions/create-a-promotion",
            from: "/docs/commerce-cloud/promotions/promotion-management/create-a-cart-fixed-discount-promotion",
          },
          {
            to: "/docs/api/carts/bulk-add-tax-items-to-cart",
            from: "/docs/commerce-cloud/carts/tax-items/bulk-add-tax-items",
          },
          {
            to: "/docs/api/pxm/products/update-hierarchy",
            from: "/docs/pxm/hierarchies/hierarchies-api/update-hierarchy",
          },
          {
            to: "/docs/api/pxm/inventory/inventory",
            from: "/docs/pxm/inventories/create-inventory",
          },
          {
            to: "/docs/api/carts/update-custom-discount-for-cart-item",
            from: "/docs/commerce-cloud/carts/custom-discounts/update-custom-discount-for-cart-item",
          },
          {
            to: "/docs/commerce-manager/product-experience-manager/Products/add-product-templates",
            from: "/docs/pxm/products/pxm-products-commerce-manager/add-product-templates",
          },
          {
            to: "/changelog/Studio-Release-Notes/2021/Release-126-Dec-12-2021",
            from: "/docs/cx-studio/Release-Notes/2021/Release-127-Dec-20-2021",
          },
          {
            to: "/changelog/Studio-Release-Notes/2021/Release-126-Dec-12-2021",
            from: "/docs/cx-studio/Release-Notes/2021/Release-126-Dec-12-2021",
          },
          {
            to: "/docs/api/carts/get-cart-items",
            from: "/docs/commerce-cloud/carts/cart-items/get-cart-items",
          },
          {
            to: "/docs/api/pxm/catalog/rules",
            from: "/docs/pxm/catalogs/catalog-rules/create-a-catalog-rule",
          },
          {
            to: "/docs/api/flows/get-an-entry",
            from: "/docs/commerce-cloud/custom-data/custom-data-flows-api/entries/get-all-entries",
          },
          {
            to: "/guides/How-To/Personal-Data/personal-data-management",
            from: "/docs/commerce-cloud/personal-data/personal-data-cm",
          },
          {
            to: "/docs/api/pxm/products/get-all-children",
            from: "/docs/pxm/hierarchies/hierarchies-api/get-a-hierarchies-children",
          },
          {
            to: "/docs/api/carts/get-order-items",
            from: "/docs/commerce-cloud/carts/cart-items/add-custom-item-to-cart",
          },
          {
            to: "/docs/api/accounts/get-v-2-accounts-account-id",
            from: "/docs/commerce-cloud/accounts/using-account-management-api/get-all-accounts",
          },
          {
            to: "/docs/api/flows/entry-relationships",
            from: "/docs/commerce-cloud/custom-data/custom-data-flows-api/entry-relationship",
          },
          {
            to: "/docs/api/carts/update-custom-discount-for-cart",
            from: "/docs/commerce-cloud/carts/custom-discounts/update-custom-discount-for-cart",
          },
          {
            to: "/docs/studio/Integrations/stripe-payment-intents",
            from: "/docs/commerce-cloud/payments/payment-gateway/configure-stripe-payment-intents",
          },
          {
            to: "/changelog/Studio-Release-Notes/2021/Release-121-Nov-7-2021",
            from: "/docs/cx-studio/Release-Notes/2021/Release-124-Nov-28-2021",
          },
          {
            to: "/changelog/Studio-Release-Notes/2021/Release-121-Nov-7-2021",
            from: "/docs/cx-studio/Release-Notes/2021/Release-123-Nov-22-2021",
          },
          {
            to: "/changelog/Studio-Release-Notes/2021/Release-121-Nov-7-2021",
            from: "/docs/cx-studio/Release-Notes/2021/Release-122-Nov-14-2021",
          },
          {
            to: "/docs/commerce-manager/product-experience-manager/catalogs/catalog-rules",
            from: "/docs/pxm/catalogs/catalog-rules/get-all-catalog-rules",
          },
          {
            to: "/docs/studio/developers/eCommerce/Showing-content-to-users-in-a-specific-location",
            from: "/docs/cx-studio/developers/eCommerce/Showing-content-to-users-in-a-specific-location",
          },
          {
            to: "/guides/Getting-Started/sorting",
            from: "/docs/commerce-cloud/api-overview/sorting",
          },
          {
            to: "/docs/commerce-manager/product-experience-manager/catalogs/catalog-rules",
            from: "/docs/pxm/catalogs/catalog-rules/update-a-catalog-rule",
          },
          {
            to: "/guides/How-To/Products/personalized-products-pxm",
            from: "/docs/pxm/products/pxm-products-commerce-manager/personalizing-products",
          },
          {
            to: "/docs/api/pxm/inventory/inventory",
            from: "/docs/pxm/inventories/inventory-api-overview",
          },
          {
            to: "/docs/studio/developers/eCommerce/Offering-users-a-coupon-code-after-form-submission",
            from: "/docs/cx-studio/developers/eCommerce/Offering-users-a-coupon-code-after-form-submission",
          },
          {
            to: "/docs/studio/content/Basic-Page-Editing/Creating-a-Section-Carousel",
            from: "/docs/cx-studio/content/Basic-Page-Editing/Creating-a-Section-Carousel",
          },
          {
            to: "/docs/api/promotions/create-a-promotion",
            from: "/docs/commerce-cloud/promotions/promotion-management/create-X-for-Y-discount-promotion",
          },
          {
            to: "/docs/api/carts/account-cart-associations",
            from: "/docs/commerce-cloud/carts/account-cart-associations/get-account-carts",
          },
          {
            to: "/docs/api/accounts/account-management-authentication",
            from: "/docs/commerce-cloud/accounts/account-management-authentication/account-member-authentication-api-overview",
          },
          {
            to: "/docs/commerce-manager/promotions-builder/creating-promotion-codes",
            from: "/docs/commerce-cloud/promotions/promotion-codes/get-promotion-codes",
          },
          {
            to: "/docs/api/accounts/account-authentication-settings",
            from: "/docs/commerce-cloud/authentication/single-sign-on/account-authentication-settings",
          },
          {
            to: "/docs/api/pxm/pricebooks/price-book-modifiers",
            from: "/docs/pxm/pricebooks/pxm-pricebooks-modifiers/delete-a-price-modifier",
          },
          {
            to: "/docs/api/carts/cart-management",
            from: "/docs/commerce-cloud/carts/cart-management/cart-management-overview",
          },
          {
            to: "/docs/api/pxm/products/create-hierarchy",
            from: "/docs/pxm/hierarchies/hierarchies-api/get-all-hierarchies",
          },
          {
            to: "/docs/api/pxm/products/create-hierarchy",
            from: "/docs/pxm/hierarchies/hierarchies-api/get-a-hierarchy",
          },
          {
            to: "/docs/api/payments/update-braintree-gateway",
            from: "/docs/commerce-cloud/payments/payment-gateway/configure-braintree",
          },
          {
            to: "/docs/api/exporter/create-job",
            from: "/docs/commerce-cloud/orders/jobs-api/jobs-api-overview",
          },
          {
            to: "/docs/api/pxm/catalog/get-release-by-id",
            from: "/docs/pxm/catalogs/catalog-release-admin/get-all-releases-of-a-catalog",
          },
          {
            to: "/docs/authentication/Tokens/customer-token",
            from: "/docs/commerce-cloud/authentication/Tokens/customer-token",
          },
          {
            to: "/docs/api/flows/entries",
            from: "/docs/commerce-cloud/custom-data/custom-data-flows-api/entries/update-an-entry",
          },
          {
            to: "/docs/commerce-manager/organizations/org-pxm-entities-in-commerce-manager/create-org_pxm_hierarchy",
            from: "/docs/pxm/products/pxm-products-commerce-manager/hierarchy",
          },
          {
            to: "/docs/api/pxm/pricebooks/update-pricebook",
            from: "/docs/pxm/pricebooks/pxm-pricebooks/update-a-pricebook",
          },
          {
            to: "/docs/api/pxm/catalog/releases",
            from: "/docs/pxm/catalogs/catalogs",
          },
          {
            to: "/docs/api/pxm/products/get-all-variations",
            from: "/docs/pxm/products/pxm-product-variations/pxm-product-variations-api/get-variation",
          },
          {
            to: "/docs/api/pxm/products/get-all-variations",
            from: "/docs/pxm/products/pxm-product-variations/pxm-product-variations-api/get-all-variations",
          },
          {
            to: "/docs/api/promotions/create-a-promotion",
            from: "/docs/commerce-cloud/promotions/promotion-management/create-item-fixed-discount-promotion",
          },
          {
            to: "/docs/api/promotions/create-a-promotion",
            from: "/docs/commerce-cloud/promotions/promotion-management/create-X-for-amount-discount-promotion",
          },
          {
            to: "/docs/commerce-manager/product-experience-manager/Products/manage-product-media",
            from: "/docs/pxm/products/pxm-products-commerce-manager/manage-product-media",
          },
          {
            to: "/docs/api/payments/update-adyen-gateway",
            from: "/docs/commerce-cloud/payments/payment-gateway/configure-adyen",
          },
          {
            to: "/docs/api/carts/delete-a-tax-item",
            from: "/docs/commerce-cloud/carts/tax-items/delete-a-tax-item",
          },
          {
            to: "/docs/api/flows/get-an-entry",
            from: "/docs/commerce-cloud/custom-data/custom-data-flows-api/entries/get-an-entry",
          },
          {
            to: "/docs/api/pxm/products/products",
            from: "/docs/pxm/products/pxm-bundles/pxm-bundles",
          },
          {
            to: "/docs/api/pxm/catalog/get-catalogs",
            from: "/docs/pxm/catalogs/catalog-configuration/catalog-configuration-overview",
          },
          {
            to: "/docs/api/pxm/files/files",
            from: "/docs/pxm/products/product-assets/create-a-file",
          },
          {
            to: "/docs/commerce-manager/product-experience-manager/catalogs/catalog-rules",
            from: "/docs/pxm/catalogs/catalog-rules/get-a-catalog-rule",
          },
          {
            to: "/docs/studio/Settings/account-management/Resetting-your-Account",
            from: "/docs/cx-studio/Settings/account-management/Resetting-your-Account",
          },
          {
            to: "/docs/api/pxm/products/delete-variation",
            from: "/docs/pxm/products/pxm-product-variations/pxm-product-variations-api/delete-variation",
          },
          {
            to: "/docs/api/settings/get-v-2-settings-cart",
            from: "/docs/commerce-cloud/carts/cart-management/cart-settings/get-cart-settings",
          },
          {
            to: "/docs/api/promotions/cancel-a-job",
            from: "/docs/pxm/jobs-api/cancel-a-job",
          },
          {
            to: "/docs/studio/Integrations/Integrating-Google-Maps",
            from: "/docs/cx-studio/Integrations/Integrating-Google-Maps",
          },
          {
            to: "/docs/commerce-manager/",
            from: "/docs/commerce-cloud/getting-started/cm-overview",
          },
          {
            to: "/docs/studio/Shopify/How-do-I-enable-a-product-for-a-sales-channel-in-Shopify",
            from: "/docs/cx-studio/Shopify/How-do-I-enable-a-product-for-a-sales-channel-in-Shopify",
          },
          {
            to: "/docs/api/pxm/pricebooks/price-book-modifiers",
            from: "/docs/pxm/pricebooks/pxm-pricebooks-modifiers/get-a-price-modifier-by-name",
          },
          {
            to: "/docs/commerce-manager/product-experience-manager/product-export/export-products-cm",
            from: "/docs/pxm/products/exporting-products/export-products-cm",
          },
          {
            to: "/docs/api/payments/gateways",
            from: "/docs/commerce-cloud/payments/payment-gateway/get-a-gateway",
          },
          {
            to: "/docs/api/pxm/products/create-hierarchy",
            from: "/docs/pxm/hierarchies/hierarchies-api/hierarchies-api-overview",
          },
          {
            to: "/docs/studio/Settings/Domain-Management/Connecting-your-SquareSpace-Domain",
            from: "/docs/cx-studio/Settings/Domain-Management/Connecting-your-SquareSpace-Domain",
          },
          {
            to: "/docs/studio/policies/Transferring-Account-Ownership",
            from: "/docs/cx-studio/policies/Transferring-Account-Ownership",
          },
          {
            to: "/docs/organizations/org-level-pxm-entities/create-pxm-org-entities",
            from: "/docs/commerce-cloud/organizations/org-level-pxm-entities/create-pxm-org-entities",
          },
          {
            to: "/docs/commerce-manager/promotions-standard/overview",
            from: "/docs/commerce-cloud/promotions/promotion-management/promotion-management-overview",
          },
          {
            to: "/docs/api/pxm/pricebooks/get-product-prices",
            from: "/docs/pxm/pricebooks/pxm-pricebooks-prices/get-all-prices-in-a-pricebook",
          },
          {
            to: "/docs/api/exporter/jobs",
            from: "/docs/commerce-cloud/promotions/promotion-codes/jobs-api/jobs-api-overview",
          },
          {
            to: "/docs/api/flows/create-a-field",
            from: "/docs/commerce-cloud/custom-data/custom-data-flows-api/fields/create-a-field",
          },
          {
            to: "/docs/api/flows/delete-a-flow",
            from: "/docs/commerce-cloud/custom-data/custom-data-flows-api/Flows/delete-a-flow",
          },
          {
            to: "/docs/commerce-manager/product-experience-manager/extending-products/templates",
            from: "/docs/pxm/products/extending-pxm-products/templates",
          },
          {
            to: "/docs/api/pxm/products/delete-product-variation-relationships",
            from: "/docs/pxm/products/product-asset-relationships/variation-relationships/delete-variation-relationships",
          },
          {
            to: "/docs/api/carts/create-customer-cart-association",
            from: "/docs/commerce-cloud/carts/customer-cart-associations/create-an-association",
          },
          {
            to: "/docs/api/pxm/products/products",
            from: "/docs/pxm/products/pxm-bundles/pxm-bundles-api/create-a-bundle",
          },
          {
            to: "/docs/api/carts/create-a-cart",
            from: "/docs/commerce-cloud/carts/cart-management/update-a-cart",
          },
          {
            to: "/docs/studio/developers/tags/element",
            from: "/docs/cx-studio/developers/tags/element",
          },
          {
            to: "/docs/studio/Settings/Domain-Management/Connecting-your-GoDaddy-Domain",
            from: "/docs/cx-studio/Settings/Domain-Management/Connecting-your-GoDaddy-Domain",
          },
          {
            to: "/docs/studio/Shopify/Adding-a-product-to-a-page",
            from: "/docs/cx-studio/Shopify/Adding-a-product-to-a-page",
          },
          {
            to: "/docs/api/pxm/products/products",
            from: "/docs/pxm/products/pxm-bundles/bundles-of-bundles",
          },
          {
            to: "/docs/studio/content/advanced-page-editing/Reusing-Customized-Sections-on-Other-Pages",
            from: "/docs/cx-studio/content/advanced-page-editing/Reusing-Customized-Sections-on-Other-Pages",
          },
          {
            to: "/docs/commerce-manager/product-experience-manager/product-export/export-products-cm",
            from: "/docs/pxm/products/exporting-products/export-products",
          },
          {
            to: "/docs/studio/Settings/account-management/Creating-additional-CX-Studio-Accounts",
            from: "/docs/cx-studio/Settings/account-management/Creating-additional-CX-Studio-Accounts",
          },
          {
            to: "/docs/api/carts/transactions",
            from: "/docs/commerce-cloud/payments/transactions/get-a-transaction",
          },
          {
            to: "/docs/api/flows/delete-a-field",
            from: "/docs/commerce-cloud/custom-data/custom-data-flows-api/fields/delete-a-field",
          },
          {
            to: "/docs/commerce-manager/promotions-standard/item-level-promotions/bundle-discount-promotions",
            from: "/docs/commerce-cloud/promotions/promotions-cm/item-level-promotions/bundle-discount-promotions",
          },
          {
            to: "/docs/api/flows/entries",
            from: "/docs/commerce-cloud/custom-data/custom-data-flows-api/entries/create-an-entry",
          },
          {
            to: "/docs/api/promotions/create-a-promotion",
            from: "/docs/commerce-cloud/promotions/promotion-management/create-a-cart-percent-discount-promotion",
          },
          {
            to: "/docs/api/pxm/products/products",
            from: "/docs/pxm/products/pxm-bundles/bundle-pricing",
          },
          {
            to: "/docs/api/flows/entries",
            from: "/docs/commerce-cloud/custom-data/custom-data-flows-api/entries/delele-an-entry",
          },
          {
            to: "/docs/api/carts/get-an-order",
            from: "/docs/commerce-cloud/orders/orders-api/get-an-order",
          },
          {
            to: "/docs/api/pxm/pricebooks/delete-product-price",
            from: "/docs/pxm/pricebooks/pxm-pricebooks-prices/update-product-prices",
          },
          {
            to: "/docs/api/pxm/currencies/create-a-currency",
            from: "/docs/pxm/currencies/currencies",
          },
          {
            to: "/docs/api/pxm/products/update-product-variation-relationships",
            from: "/docs/pxm/products/product-asset-relationships/variation-relationships/replace-variation-relationships",
          },
          {
            to: "/docs/api/pxm/products/get-product-variation-relationships",
            from: "/docs/pxm/products/product-asset-relationships/variation-relationships/get-variation-relationships",
          },
          {
            to: "/docs/api/pxm/catalog/get-by-context-all-nodes",
            from: "/docs/pxm/catalogs/shopper-catalog/get-products-by-node",
          },
          {
            to: "/docs/api/pxm/catalog/get-by-context-all-nodes",
            from: "/docs/pxm/catalogs/shopper-catalog/get-all-nodes",
          },
          {
            to: "/docs/rule-promotions/rule-promotions-api/action-limitations/action-limitations-overview",
            from: "/docs/commerce-cloud/rule-promotions/rule-promotions-api/action-limitations/action-limitations-overview",
          },
          {
            to: "/docs/api/pxm/catalog/get-by-context-node",
            from: "/docs/pxm/catalogs/shopper-catalog/get-a-node",
          },
          {
            to: "/docs/api/accounts/put-v-2-accounts-account-id",
            from: "/docs/commerce-cloud/accounts/using-account-management-api/update-an-account",
          },
          {
            to: "/docs/commerce-manager/product-experience-manager/hierarchies/creating_nodes",
            from: "/docs/pxm/hierarchies/hierarchies-cm/creating_nodes",
          },
          {
            to: "/docs/customer-management/customer-management-api/delete-a-customer",
            from: "/docs/commerce-cloud/customer-management/customer-managment-api/delete-a-customer",
          },
          {
            to: "/changelog/Studio-Release-Notes/2022/Release-152-September-26-2022",
            from: "/docs/cx-studio/Release-Notes/2022/Release-151-September-19-2022",
          },
          {
            to: "/docs/api/flows/update-a-flow",
            from: "/docs/commerce-cloud/custom-data/custom-data-flows-api/Flows/update-a-flow",
          },
          {
            to: "/changelog/Studio-Release-Notes/2022/Release-152-September-26-2022",
            from: "/docs/cx-studio/Release-Notes/2022/Release-152-September-26-2022",
          },
          {
            to: "/docs/studio/Settings/Domain-Management/Connecting-your-Namecheap-Domain",
            from: "/docs/cx-studio/Settings/Domain-Management/Connecting-your-Namecheap-Domain",
          },
          {
            to: "/docs/api/pxm/catalog/get-catalog-by-id",
            from: "/docs/pxm/catalogs/catalog-configuration/get-all-catalogs",
          },
          {
            to: "/docs/api/carts/transactions",
            from: "/docs/commerce-cloud/payments/transactions/get-all-transactions",
          },
          {
            to: "/docs/api/pxm/catalog/get-by-context-all-nodes",
            from: "/docs/pxm/catalogs/shopper-catalog/get-a-hierarchys-nodes",
          },
          {
            to: "/changelog/Studio-Release-Notes/Release-190-February-14-2024",
            from: "/docs/cx-studio/Release-Notes/Release-190-February-14-2024",
          },
          {
            to: "/changelog/Studio-Release-Notes/Release-190-February-14-2024",
            from: "/docs/cx-studio/Release-Notes/Release-191-February-27-2024",
          },
          {
            to: "/docs/api/pxm/products/build-child-products",
            from: "/docs/pxm/products/pxm-product-variations/child-products-api/build-child-products",
          },
          {
            to: "/docs/api/settings/delete-v-2-settings",
            from: "/docs/commerce-cloud/global-project-settings/delete-settings",
          },
          {
            to: "/docs/api/carts/delete-a-tax-item",
            from: "/docs/commerce-cloud/carts/tax-items/update-a-tax-item",
          },
          {
            to: "/docs/api/pxm/products/delete-node-product-relationships",
            from: "/docs/pxm/hierarchies/node-relationships-api/delete-node-product-relationships",
          },
          {
            to: "/docs/api/carts/get-cart-items",
            from: "/docs/commerce-cloud/carts/cart-items/add-promotion-to-cart",
          },
          {
            to: "/docs/api/carts/carts-checkout-orders-introduction",
            from: "/docs/commerce-cloud/carts/carts",
          },
          {
            to: "/docs/api/flows/get-a-field",
            from: "/docs/commerce-cloud/custom-data/custom-data-flows-api/fields/get-a-field",
          },
          {
            to: "/docs/api/pxm/inventory/inventory",
            from: "/docs/pxm/inventories/update-inventory",
          },
          {
            to: "/docs/studio/content/Media-Management/Understanding-Image-Optimization-Settings",
            from: "/docs/cx-studio/content/Media-Management/Understanding-Image-Optimization-Settings",
          },
          {
            to: "/docs/commerce-manager/product-experience-manager/catalogs/deleting-catalogs",
            from: "/docs/pxm/catalogs/catalog-release-admin/delete-a-published-catalog",
          },
          {
            to: "/docs/studio/content/Basic-Page-Editing/embedding-custom-code-in-a-page",
            from: "/docs/cx-studio/content/Basic-Page-Editing/embedding-custom-code-in-a-page",
          },
          {
            to: "/docs/api/pxm/products/delete-product-main-image-relationships",
            from: "/docs/pxm/products/product-asset-relationships/image-relationship/delete-main-image-relationship",
          },
          {
            to: "/docs/api/flows/entries",
            from: "/docs/pxm/products/extending-pxm-products/pxm-product-entries-api/get-an-entry",
          },
          {
            to: "/docs/api/promotions/create-a-promotion",
            from: "/docs/commerce-cloud/promotions/promotion-management/create-item-percent-discount-promotion",
          },
          {
            to: "/docs/api/pxm/products/get-products-nodes",
            from: "/docs/pxm/products/product-asset-relationships/get-a-products-nodes",
          },
          {
            to: "/docs/api/pxm/catalog/get-catalog-by-id",
            from: "/docs/pxm/catalogs/catalog-configuration/get-a-catalog",
          },
          {
            to: "/docs/api/pxm/products/delete-modifier",
            from: "/docs/pxm/products/pxm-product-variations/pxm-variation-modifiers-api/delete-a-modifier",
          },
          {
            to: "/guides/Getting-Started/",
            from: "/docs/commerce-cloud/getting-started/overview",
          },
          {
            to: "/docs/api/integrations/integrations",
            from: "/docs/commerce-cloud/integrations/integrations-api/overview",
          },
          {
            to: "/docs/api/pxm/products/product-image-relationships",
            from: "/docs/pxm/products/product-asset-relationships/image-relationship/create-main-image-relationship",
          },
          {
            to: "/changelog/Studio-Release-Notes/2022/Release-153-October-4-2022",
            from: "/docs/cx-studio/Release-Notes/2022/Release-153-October-4-2022",
          },
          {
            to: "/changelog/Studio-Release-Notes/2022/Release-153-October-4-2022",
            from: "/docs/cx-studio/Release-Notes/2022/Release-156-October-30-2022",
          },
          {
            to: "/changelog/Studio-Release-Notes/2022/Release-153-October-4-2022",
            from: "/docs/cx-studio/Release-Notes/2022/Release-155-October-23-2022",
          },
          {
            to: "/docs/api/flows/entries",
            from: "/docs/pxm/products/extending-pxm-products/pxm-product-entries-api/get-all-entries",
          },
          {
            to: "/docs/api/pxm/catalog",
            from: "/docs/pxm/catalogs/catalog-configuration/create-a-catalog",
          },
          {
            to: "/docs/api/carts/get-a-cart",
            from: "/docs/commerce-cloud/carts/cart-management/get-a-cart",
          },
          {
            to: "/docs/api/accounts/account-authentication-settings",
            from: "/docs/commerce-cloud/authentication/single-sign-on/account-authentication-settings/update-account-authentication-settings",
          },
          {
            to: "/docs/studio/Settings/Domain-Management/Connecting-your-AWS-Route-53-Domain",
            from: "/docs/cx-studio/Settings/Domain-Management/Connecting-your-AWS-Route-53-Domain",
          },
          {
            to: "/docs/api/carts/transactions",
            from: "/docs/commerce-cloud/payments/transactions/transactions-overview",
          },
          {
            to: "/docs/api/carts/manage-carts",
            from: "/docs/commerce-cloud/carts/cart-items/add-product-to-cart",
          },
          {
            to: "/docs/api/pxm/products/create-product-variation-relationships",
            from: "/docs/pxm/products/product-asset-relationships/variation-relationships/attach-variation-relationships",
          },
          {
            to: "/docs/carts-orders/bulk-add-to-cart",
            from: "/docs/commerce-cloud/carts/cart-items/bulk-update-in-cart",
          },
          {
            to: "/docs/api/pxm/catalog/shopper-catalog-api",
            from: "/docs/pxm/catalogs/shopper-catalog/catalog-shopper-overview",
          },
          {
            to: "/docs/api/payments/update-stripe-connect-gateway",
            from: "/docs/commerce-cloud/payments/payment-gateway/configure-stripe-connect",
          },
          {
            to: "/docs/api/pxm/products/update-product-main-image-relationships",
            from: "/docs/pxm/products/product-asset-relationships/image-relationship/replace-main-image-relationship",
          },
          {
            to: "/docs/api/customer-addresses/customer-addresses",
            from: "/docs/commerce-cloud/addresses/about-addresses-api",
          },
          {
            to: "/docs/api/pxm/products/get-product-main-image-relationships",
            from: "/docs/pxm/products/product-asset-relationships/image-relationship/get-main-image-relationship",
          },
          {
            to: "/docs/api/pxm/inventory/inventory",
            from: "/docs/pxm/inventories/delete-inventory",
          },
          {
            to: "/guides/Getting-Started/api-contract",
            from: "/docs/commerce-cloud/api-overview/api-contract",
          },
          {
            to: "/docs/api/pxm/catalog/releases",
            from: "/docs/pxm/catalogs/catalog-release-admin/delete-all-published-catalog-releases",
          },
          {
            to: "/docs/api/pxm/products/get-products-nodes",
            from: "/docs/pxm/hierarchies/node-relationships-api/get-node-products",
          },
          {
            to: "/docs/api/commerce-extensions/create-a-custom-entry",
            from: "/docs/commerce-cloud/commerce-extensions/commerce-extensions-api/custom-api-entries/get-a-custom-api-entry",
          },
          {
            to: "/docs/api/pxm/files/delete-a-file",
            from: "/docs/pxm/products/product-assets/delete-a-file",
          },
          {
            to: "/docs/customer-management/customer-management-api/update-a-customer",
            from: "/docs/commerce-cloud/customer-management/customer-managment-api/update-a-customer",
          },
          {
            to: "/docs/api/commerce-extensions/create-a-custom-entry",
            from: "/docs/commerce-cloud/commerce-extensions/commerce-extensions-api/custom-api-entries/get-all-custom-api-entries",
          },
          {
            to: "/docs/api/pxm/products/get-all-variation-options",
            from: "/docs/pxm/products/pxm-product-variations/pxm-variation-options-api/variation-options-api-overview",
          },
          {
            to: "/docs/api/pxm/products/create-variation",
            from: "/docs/pxm/products/pxm-product-variations/pxm-product-variations-api/variation-api-overview",
          },
          {
            to: "/docs/api/settings/get-v-2-settings",
            from: "/docs/commerce-cloud/global-project-settings/get-all-settings",
          },
          { to: "/docs/studio/", from: "/docs/cx-studio/overview" },
          { to: "/guides/Getting-Started/", from: "/docs/commerce-cloud" },
          {
            to: "/docs/api/carts/create-a-cart",
            from: "/docs/commerce-cloud/carts/cart-management/cart-settings/update-cart-settings",
          },
          {
            to: "/docs/api/carts/delete-customer-cart-association",
            from: "/docs/commerce-cloud/carts/customer-cart-associations/delete-an-association",
          },
          {
            to: "/docs/carts-orders/bulk-add-to-cart",
            from: "/docs/commerce-cloud/carts/cart-items/update-cart-item",
          },
          {
            to: "/docs/api/pxm/pricebooks/import-a-price-book-and-prices",
            from: "/docs/pxm/pricebooks/price-import/pricebook-import-results",
          },
          {
            to: "/docs/commerce-manager/product-experience-manager/Products/view-product-details",
            from: "/docs/pxm/products/pxm-products-commerce-manager/view-product-details",
          },
          {
            to: "/docs/api/addresses",
            from: "/docs/commerce-cloud/addresses/create-an-address",
          },
          {
            to: "/docs/api/carts/add-tax-item-to-cart",
            from: "/docs/commerce-cloud/carts/tax-items/create-a-tax-item",
          },
          {
            to: "/docs/api/pxm/catalog",
            from: "/docs/pxm/catalogs/catalog-configuration/update-a-catalog",
          },
          {
            to: "/docs/api/pxm/catalog/get-by-context-child-nodes",
            from: "/docs/pxm/catalogs/shopper-catalog/get-a-hierarchys-children",
          },
          {
            to: "/docs/api/accounts",
            from: "/docs/commerce-cloud/accounts/accounts",
          },
          {
            to: "/docs/api/payments/update-stripe-gateway",
            from: "/docs/commerce-cloud/payments/payment-gateway/configure-stripe",
          },
          {
            to: "/docs/api/pxm/products/update-node-parent",
            from: "/docs/pxm/hierarchies/node-relationships-api/update-node-parent-relationship",
          },
          {
            to: "/docs/api/carts/delete-a-cart-item",
            from: "/docs/commerce-cloud/carts/cart-items/remove-cart-item",
          },
          {
            to: "/docs/api/pxm/catalog/get-by-context-child-nodes",
            from: "/docs/pxm/catalogs/shopper-catalog/get-node-children",
          },
          {
            to: "/docs/api/flows/entries",
            from: "/docs/pxm/products/extending-pxm-products/pxm-product-entries-api/create-an-entry",
          },
          {
            to: "/docs/api/pxm/catalog/get-by-context-all-hierarchies",
            from: "/docs/pxm/catalogs/shopper-catalog/get-products-by-hierarchy",
          },
          {
            to: "/docs/api/pxm/files/get-a-file",
            from: "/docs/pxm/products/product-assets/get-all-files",
          },
          {
            to: "/docs/api/pxm/files/get-a-file",
            from: "/docs/pxm/products/product-assets/get-a-file",
          },
          {
            to: "/docs/api/pxm/products/get-all-variation-options",
            from: "/docs/pxm/products/pxm-product-variations/pxm-variation-options-api/get-option",
          },
          {
            to: "/docs/api/pxm/products/delete-product",
            from: "/docs/pxm/products/ep-pxm-products-api/delete-a-product",
          },
          {
            to: "/docs/api/pxm/pricebooks/get-price-modifiers",
            from: "/docs/pxm/pricebooks/pxm-pricebooks-modifiers/pxm-pricemodifiers-overview",
          },
          {
            to: "/docs/api/carts/bulk-add-custom-discounts-to-cart",
            from: "/docs/commerce-cloud/carts/custom-discounts/bulk-add-custom-discount-to-cart",
          },
          {
            to: "/docs/api/carts/delete-a-tax-item",
            from: "/docs/commerce-cloud/carts/tax-items/tax-items",
          },
          {
            to: "/docs/api/pxm/products/extending-products-with-templates",
            from: "/docs/pxm/products/extending-pxm-products/pxm-product-templates-api/create-a-template",
          },
          {
            to: "/changelog/Studio-Release-Notes/2022/Release-133-Feb-27-2022",
            from: "/docs/cx-studio/Release-Notes/2022/Release-133-Feb-27-2022",
          },
          {
            to: "/docs/subscriptions/observable-events",
            from: "/docs/commerce-cloud/integrations/observable-events",
          },
          {
            to: "/docs/api/pxm/products/delete-node-parent",
            from: "/docs/pxm/hierarchies/node-relationships-api/delete-node-parent-relationship",
          },
          {
            to: "/guides/Getting-Started/team-management",
            from: "/docs/commerce-cloud/team-management/roles",
          },
          {
            to: "/docs/api/pxm/catalog/shopper-catalog-api",
            from: "/docs/pxm/catalogs/shopper-catalog/get-the-catalog",
          },
          {
            to: "/docs/api/pxm/products/extending-products-with-templates",
            from: "/docs/pxm/products/extending-pxm-products/pxm-product-templates-api/pxm-product-templates-overview",
          },
          {
            to: "/docs/studio/Settings/Domain-Management/Connecting-your-Cloudflare-Domain",
            from: "/docs/cx-studio/Settings/Domain-Management/Connecting-your-Cloudflare-Domain",
          },
          {
            to: "/docs/api/pxm/catalog/releases",
            from: "/docs/pxm/catalogs/catalog-latest-release/overview",
          },
          {
            to: "/docs/api/flows/get-all-flows",
            from: "/docs/commerce-cloud/custom-data/custom-data-flows-api/Flows",
          },
          {
            to: "/docs/studio/content/advanced-page-editing/Managing-Device-Visibility",
            from: "/docs/cx-studio/content/advanced-page-editing/Managing-Device-Visibility",
          },
          {
            to: "/docs/api/pxm/catalog/get-by-context-all-hierarchies",
            from: "/docs/pxm/catalogs/shopper-catalog/get-all-hierarchies",
          },
          {
            to: "/docs/api/pxm/products/delete-product-template-relationship",
            from: "/docs/pxm/products/product-asset-relationships/template-relationships/delete-product-template-relationships",
          },
          {
            to: "/docs/api/customer-addresses/put-v-2-customer-address",
            from: "/docs/commerce-cloud/addresses/update-an-address",
          },
          {
            to: "/docs/rule-promotions/rule-promotions-api/item-rule-promotions/create-condition-rule-promotion",
            from: "/docs/commerce-cloud/rule-promotions/overview",
          },
          {
            to: "/docs/commerce-manager/product-experience-manager/product-import/product-importer",
            from: "/docs/pxm/products/importing-products/product-importer",
          },
          {
            to: "/changelog/Studio-Release-Notes/2022/Release-133-Feb-27-2022",
            from: "/docs/cx-studio/Release-Notes/2022/Release-131-Feb-16,-2022",
          },
          {
            to: "/docs/api/flows/delete-an-entry",
            from: "/docs/pxm/products/extending-pxm-products/pxm-product-entries-api/delele-an-entry",
          },
          {
            to: "/guides/How-To/orders/create-short-order-ids",
            from: "/docs/commerce-cloud/orders/create-short-order-ids",
          },
          {
            to: "/docs/api/pxm/catalog/get-by-context-all-hierarchies",
            from: "/docs/pxm/catalogs/shopper-catalog/get-a-hierarchy",
          },
          {
            to: "/docs/api/carts/get-order-items",
            from: "/docs/commerce-cloud/orders/orders-api/order-items",
          },
          {
            to: "/guides/How-To/Accounts/authenticate-using-self-signup",
            from: "/docs/commerce-cloud/accounts/account-management-authentication/account-management-authentication-api/self-sign-up",
          },
          {
            to: "/docs/api/carts/checkout",
            from: "/docs/commerce-cloud/checkout/account-checkout",
          },
          {
            to: "/docs/api/payments/update-authorize-net-gateway",
            from: "/docs/commerce-cloud/payments/payment-gateway/configure-authorize.net",
          },
          {
            to: "/docs/commerce-manager/product-experience-manager/Products/edit-products",
            from: "/docs/pxm/products/pxm-products-commerce-manager/edit-products",
          },
          {
            to: "/docs/api/flows/entries",
            from: "/docs/pxm/products/extending-pxm-products/pxm-product-entries-api/update-an-entry",
          },
          {
            to: "/docs/api/accounts",
            from: "/docs/commerce-cloud/accounts/using-account-management-api/account-management-api-overview",
          },
          {
            to: "/guides/How-To/paymentgateways/implement-payment-gateways",
            from: "/docs/commerce-cloud/payments/payment-gateway-cm/configure-other-payment-gateways",
          },
          {
            to: "/docs/api/commerce-extensions/delete-a-custom-entry",
            from: "/docs/commerce-cloud/commerce-extensions/commerce-extensions-api/custom-api-entries/delete-a-custom-api-entry",
          },
          {
            to: "/docs/customer-management/customer-management-api/create-a-customer",
            from: "/docs/commerce-cloud/customer-management/customer-managment-api/create-a-customer",
          },
          {
            to: "/docs/organizations/org-level-pxm-entities/pxm-org-hierarchies",
            from: "/docs/commerce-cloud/organizations/org-level-pxm-entities/pxm-org-hierarchies",
          },
          {
            to: "/docs/api/carts/delete-customer-cart-association",
            from: "/docs/commerce-cloud/carts/account-cart-associations/delete-an-association",
          },
          {
            to: "/docs/commerce-manager/product-experience-manager/Products/manage-product-inventory",
            from: "/docs/pxm/products/pxm-products-commerce-manager/manage-product-inventory",
          },
          {
            to: "/docs/api/pxm/products/extending-products-with-templates",
            from: "/docs/pxm/products/extending-pxm-products/pxm-product-templates-api/get-a-template",
          },
          {
            to: "/docs/api/commerce-extensions/create-a-custom-entry",
            from: "/docs/commerce-cloud/commerce-extensions/commerce-extensions-api/custom-api-entries/create-a-custom-api-entry",
          },
          {
            to: "/docs/api/pxm/products/create-product-template-relationship",
            from: "/docs/pxm/products/product-asset-relationships/template-relationships/create-product-template-relationships",
          },
          {
            to: "/docs/api/settings/put-v-2-settings-cart",
            from: "/docs/commerce-cloud/carts/cart-management/cart-settings/overview",
          },
          {
            to: "/docs/authentication/single-sign-on/password-profiles-api/create-one-time-password-token-request",
            from: "/docs/commerce-cloud/accounts/account-management-authentication/account-management-authentication-api/one-time-password-token",
          },
          {
            to: "/docs/commerce-manager/product-experience-manager/Products/filter-products",
            from: "/docs/pxm/products/pxm-products-commerce-manager/filter-products",
          },
          {
            to: "/docs/commerce-manager/orders/orders-cm",
            from: "/docs/commerce-cloud/orders/orders-cm",
          },
          {
            to: "/docs/api/pxm/products/delete-variation-option",
            from: "/docs/pxm/products/pxm-product-variations/pxm-variation-options-api/delete-option",
          },
          {
            to: "/docs/commerce-manager/product-experience-manager/locales/",
            from: "/docs/pxm/products/locales/pxm-locales",
          },
          {
            to: "/docs/api/pxm/catalog/get-products-for-node",
            from: "/docs/pxm/catalogs/catalog-latest-release/get-all-nodes-in-a-release",
          },
          {
            to: "/docs/api/pxm/products/extending-products-with-templates",
            from: "/docs/pxm/products/extending-pxm-products/pxm-product-templates-api/update-a-template",
          },
          {
            to: "/docs/api/pxm/products/update-product",
            from: "/docs/pxm/products/ep-pxm-products-api/update-a-product",
          },
          {
            to: "/docs/api/customer-addresses/get-v-2-customer-addresses",
            from: "/docs/commerce-cloud/addresses/get-all-addresses",
          },
          {
            to: "/docs/api/pxm/products/build-child-products",
            from: "/docs/pxm/products/pxm-product-variations/child-products-api/get-child-products",
          },
          {
            to: "/docs/api/pxm/products/get-product-template-relationships",
            from: "/docs/pxm/products/product-asset-relationships/template-relationships/get-product-template-relationships",
          },
          {
            to: "/docs/docs/api/exporter/exporter-service-api",
            from: "/docs/commerce-cloud/orders/orders-api/export-orders",
          },
          {
            to: "/docs/api/accounts/post-v-2-accounts",
            from: "/docs/commerce-cloud/accounts/account_management",
          },
          {
            to: "/docs/api/integrations/integrations",
            from: "/docs/commerce-cloud/integrations/integrations-examples",
          },
          {
            to: "/changelog/Studio-Release-Notes/2022/Release-160-December-5-2022",
            from: "/docs/cx-studio/Release-Notes/2022/Release-160-December-5-2022",
          },
          {
            to: "/docs/api/pxm/catalog/get-release-by-id",
            from: "/docs/pxm/catalogs/catalog-latest-release/get-a-release-of-a-catalog",
          },
          {
            to: "/docs/commerce-manager/product-experience-manager/Products/overview",
            from: "/docs/pxm/products/pxm-products",
          },
          {
            to: "/docs/api/flows/get-a-field",
            from: "/docs/commerce-cloud/custom-data/custom-data-flows-api/fields/get-all-fields",
          },
          {
            to: "/docs/customer-management/customer-management-api/get-a-customer",
            from: "/docs/commerce-cloud/customer-management/customer-managment-api/get-a-customer",
          },
          {
            to: "/docs/api/pxm/pricebooks/delete-product-price",
            from: "/docs/pxm/pricebooks/pxm-pricebooks-prices/pxm-prices-overview",
          },
          {
            to: "/docs/api/customer-addresses/get-v-2-customer-addresses",
            from: "/docs/commerce-cloud/addresses/get-an-address",
          },
          {
            to: "/docs/commerce-manager/promotions-standard/item-level-promotions/bundle-discount-promotions",
            from: "/docs/commerce-cloud/promotions/promotion-management/create-fixed-bundle-discount-promotion",
          },
          {
            to: "/guides/How-To/paymentgateways/generate-adyen-token",
            from: "/docs/commerce-cloud/payments/paying-for-an-order/adyen-payments",
          },
          {
            to: "/docs/api/carts/account-cart-associations",
            from: "/docs/commerce-cloud/carts/account-cart-associations/create-an-association",
          },
          {
            to: "/docs/api/flows/entries",
            from: "/docs/commerce-cloud/custom-data/custom-data-flows-api/entries",
          },
          {
            to: "/docs/api/promotions/promotion-jobs",
            from: "/docs/commerce-cloud/promotions/promotion-codes/jobs-api/create-a-job",
          },
          {
            to: "/docs/api/customer-addresses/delete-v-2-customer-address",
            from: "/docs/commerce-cloud/addresses/delete-an-address",
          },
          {
            to: "/docs/api/pxm/products/get-all-variation-options",
            from: "/docs/pxm/products/pxm-product-variations/pxm-variation-options-api/get-all-options",
          },
          {
            to: "/docs/api/pxm/products/products",
            from: "/docs/pxm/products/pxm-bundles/pxm-bundles-api/update-a-bundle",
          },
          {
            to: "/docs/api/integrations/integrations-introduction",
            from: "/docs/commerce-cloud/integrations/integration-payload",
          },
          {
            to: "/docs/studio/Insights/Understanding-AB-Test-Results",
            from: "/docs/cx-studio/Insights/Understanding-AB-Test-Results",
          },
          {
            to: "/guides/Getting-Started/content-type",
            from: "/docs/commerce-cloud/api-overview/content-type",
          },
          {
            to: "/docs/api/payments/update-cyber-source-gateway",
            from: "/docs/commerce-cloud/payments/payment-gateway/configure-cybersource",
          },
          {
            to: "/docs/studio/Settings/Domain-Management/Connecting-your-Ionos-(1&1)-Domain",
            from: "/docs/cx-studio/Settings/Domain-Management/Connecting-your-Ionos-(1&1)-Domain",
          },
          {
            to: "/docs/api/pxm/catalog/get-node",
            from: "/docs/pxm/catalogs/catalog-latest-release/get-a-node-in-a-release",
          },
          {
            to: "/guides/How-To/paymentgateways/generate-cardconnect-token",
            from: "/docs/commerce-cloud/payments/paying-for-an-order/cardconnect-payments",
          },
          {
            to: "/docs/api/pxm/products/extending-products-with-templates",
            from: "/docs/pxm/products/extending-pxm-products/pxm-product-templates-api/delete-a-template",
          },
          {
            to: "/docs/api/pxm/catalog/get-all-nodes",
            from: "/docs/pxm/catalogs/catalog-latest-release/get-a-hierarchys-nodes-in-a-release",
          },
          {
            to: "/docs/api/pxm/products/update-product",
            from: "/docs/pxm/products/ep-pxm-products-api/create-a-product",
          },
          {
            to: "/docs/api/subscriptions/imports",
            from: "/docs/pxm/products/importing-products/import-products",
          },
          {
            to: "/guides/How-To/paymentgateways/generate-cardconnect-token",
            from: "/docs/commerce-cloud/payments/payment-gateway/configure-cardconnect",
          },
          {
            to: "/docs/api/pxm/products/products",
            from: "/docs/pxm/products/pxm-bundles/pxm-bundles-api/pxm-bundles-api-overview",
          },
          {
            to: "/docs/studio/Integrations/Connecting-to-Shopify",
            from: "/docs/cx-studio/Integrations/Connecting-to-Shopify",
          },
          {
            to: "/docs/commerce-manager/customer-management/cm-customers",
            from: "/docs/commerce-cloud/customer-management/cm-customers",
          },
          {
            to: "/docs/api/pxm/products/delete-modifier",
            from: "/docs/pxm/products/pxm-product-variations/pxm-variation-modifiers-api/create-a-modifier",
          },
          {
            to: "/docs/api/pxm/products/delete-modifier",
            from: "/docs/pxm/products/pxm-product-variations/pxm-variation-modifiers-api/update-a-modifier",
          },
          {
            to: "/docs/api/promotions/get-promotion-code-exported-file",
            from: "/docs/commerce-cloud/promotions/promotion-codes/jobs-api/export-codes",
          },
          {
            to: "/docs/api/exporter/jobs",
            from: "/docs/pxm/jobs-api/overview",
          },
          {
            to: "/guides/How-To/Customers/extend-customer-resources",
            from: "/docs/commerce-cloud/customer-management/extend-customer-resources",
          },
          {
            to: "/docs/api/pxm/products/products",
            from: "/docs/pxm/products/pxm-bundles/bundle-inventory",
          },
          {
            to: "/docs/api/pxm/products/products",
            from: "/docs/pxm/products/pxm-bundles/dynamic-bundles",
          },
          {
            to: "/docs/commerce-manager/product-experience-manager/Products/configure-product-price",
            from: "/docs/pxm/products/pxm-products-commerce-manager/configure-product-price",
          },
          {
            to: "/docs/api/pxm/pricebooks/get-price-modifiers",
            from: "/docs/pxm/products/pxm-product-variations/pxm-variation-modifiers-api/get-all-modifiers",
          },
          {
            to: "/docs/api/pxm/pricebooks/get-price-modifiers",
            from: "/docs/pxm/products/pxm-product-variations/pxm-variation-modifiers-api/get-a-modifier",
          },
          {
            to: "/docs/carts-orders/elastic-path-payments-stripe",
            from: "/docs/commerce-cloud/payments/paying-for-an-order/stripe-payments",
          },
          {
            to: "/docs/studio/developers/tags/code",
            from: "/docs/cx-studio/developers/tags/code",
          },
          {
            to: "/docs/api/settings/put-v-2-settings",
            from: "/docs/commerce-cloud/global-project-settings/update-settings",
          },
          {
            to: "/docs/api/commerce-extensions/custom-ap-is",
            from: "/docs/commerce-cloud/commerce-extensions/overview",
          },
          {
            to: "/docs/api/carts/anonymize-orders",
            from: "/docs/commerce-cloud/orders/orders-api/anonymize-orders",
          },
          {
            to: "/docs/api/commerce-extensions/update-a-custom-entry",
            from: "/docs/commerce-cloud/commerce-extensions/commerce-extensions-api/custom-api-entries/update-a-custom-entry",
          },
          {
            to: "/docs/api/pxm/catalog/get-products-for-node",
            from: "/docs/pxm/catalogs/catalog-latest-release/get-products-by-node-in-a-release",
          },
          {
            to: "/docs/api/carts/custom-discounts",
            from: "/docs/commerce-cloud/carts/custom-discounts/overview",
          },
          {
            to: "/docs/authentication/single-sign-on/user-authentication-openid-connect-profile-api/openid-connect-profile-overview",
            from: "/docs/commerce-cloud/accounts/account-management-authentication/account-management-authentication-api/openid-connect-authentication",
          },
          {
            to: "/docs/authentication/Tokens/permissions",
            from: "/docs/commerce-cloud/authentication/Tokens/permissions",
          },
          {
            to: "/docs/api/carts/payments",
            from: "/docs/commerce-cloud/payments/paying-for-an-order/overview",
          },
          {
            to: "/docs/commerce-manager/product-experience-manager/product-assets/files",
            from: "/docs/pxm/products/product-assets/files-overview",
          },
          {
            to: "/docs/commerce-manager/organizations/home-page",
            from: "/docs/commerce-cloud/organizations/organizations-in-commerce-manager/home-page",
          },
          { to: "/pxm", from: "/docs/pxm" },
          {
            to: "/docs/commerce-manager/commerce-extension/commerce-extension-in-cm",
            from: "/docs/commerce-cloud/commerce-extensions/commerce-extensions-api/custom-apis/get-a-custom-api",
          },
          {
            to: "/docs/studio/content/advanced-page-editing/Configuring-Premium-Content-(Gating-Content)",
            from: "/docs/cx-studio/content/advanced-page-editing/Configuring-Premium-Content-(Gating-Content)",
          },
          {
            to: "/docs/api/pxm/catalog/get-all-hierarchies",
            from: "/docs/pxm/catalogs/catalog-latest-release/get-a-hierarchy-in-a-release",
          },
          {
            to: "/docs/api/pxm/catalog/get-all-hierarchies",
            from: "/docs/pxm/catalogs/catalog-latest-release/get-all-hierarchies-in-a-release",
          },
          {
            to: "/docs/api/integrations/list-integration-logs",
            from: "/docs/commerce-cloud/integrations/integrations-api/get-integration-logs",
          },
          {
            to: "/docs/studio/Integrations/epcc",
            from: "/docs/cx-studio/Integrations/epcc",
          },
          {
            to: "/docs/api/pxm/catalog/get-child-nodes",
            from: "/docs/pxm/catalogs/catalog-latest-release/get-node-children-in-a-release",
          },
          {
            to: "/docs/api/carts/manage-carts",
            from: "/docs/commerce-cloud/carts/cart-items/merging-carts",
          },
          {
            to: "/docs/api/commerce-extensions/delete-a-custom-api",
            from: "/docs/commerce-cloud/commerce-extensions/commerce-extensions-api/custom-apis/delete-a-custom-api",
          },
          {
            to: "/docs/api/payments/payment-gateways-introduction",
            from: "/docs/commerce-cloud/payments/paying-for-an-order/manual-payments",
          },
          {
            to: "/docs/api/payments/update-braintree-gateway",
            from: "/docs/commerce-cloud/payments/paying-for-an-order/braintree-payments",
          },
          {
            to: "/docs/api/carts/get-customer-orders",
            from: "/docs/commerce-cloud/orders/orders-api/get-all-orders",
          },
          {
            to: "/docs/api/flows/create-a-field",
            from: "/docs/commerce-cloud/custom-data/custom-data-flows-api/fields",
          },
          {
            to: "/docs/api/promotions/promotion-codes",
            from: "/docs/commerce-cloud/carts/cart-items/remove-promotion-code-from-cart",
          },
          {
            to: "/docs/api/commerce-extensions/get-all-custom-apis",
            from: "/docs/commerce-cloud/commerce-extensions/commerce-extensions-api/custom-apis/get-all-custom-apis",
          },
          {
            to: "/guides/How-To/Carts/extend-cart-and-order-resources",
            from: "/docs/commerce-cloud/carts/extend-cart-and-order-resources",
          },
          {
            to: "/guides/How-To/paymentgateways/generate-cybersource-keys-tokens",
            from: "/docs/commerce-cloud/payments/paying-for-an-order/cybersource-payments",
          },
          {
            to: "/docs/commerce-manager/payments/paypal",
            from: "/docs/commerce-cloud/payments/paying-for-an-order/paypal-express-checkout-payments",
          },
          {
            to: "/docs/api/commerce-extensions",
            from: "/docs/commerce-cloud/commerce-extensions/commerce-extensions-api/custom-apis/overview",
          },
          {
            to: "/docs/api/commerce-extensions/create-a-custom-field",
            from: "/docs/commerce-cloud/commerce-extensions/commerce-extensions-api/custom-fields/get-a-custom-field",
          },
          {
            to: "/docs/commerce-manager/product-experience-manager/product-export/export-products-cm",
            from: "/docs/pxm/products/exporting-products/overview",
          },
          {
            to: "/docs/api/commerce-extensions/delete-a-custom-field",
            from: "/docs/commerce-cloud/commerce-extensions/commerce-extensions-api/custom-fields/delete-a-custom-field",
          },
          {
            to: "/docs/commerce-manager/integrations/cm-integrations",
            from: "/docs/commerce-cloud/integrations/cm-integrations",
          },
          {
            to: "/docs/api/pxm/catalog/get-child-nodes",
            from: "/docs/pxm/catalogs/catalog-latest-release/get-a-hierarchys-children-in-a-release",
          },
          {
            to: "/docs/api/flows/get-a-field",
            from: "/docs/commerce-cloud/custom-data/custom-data-flows-api/fields/update-a-field",
          },
          {
            to: "/docs/api/pxm/products/products",
            from: "/docs/pxm/catalogs/shopper-catalog/configure-shopper-bundle",
          },
          {
            to: "/docs/api/carts/get-carts",
            from: "/docs/commerce-cloud/carts/customer-cart-associations/get-customer-carts",
          },
          {
            to: "/guides/How-To/Integrations/sqs-queues-cloudformation",
            from: "/docs/commerce-cloud/integrations/sqs-queues-cloudformation",
          },
          {
            to: "/docs/api/pxm/products/get-products-nodes",
            from: "/docs/pxm/products/ep-pxm-products-api/assign-nodes",
          },
          {
            to: "/docs/api/pxm/products/extending-products-with-templates",
            from: "/docs/pxm/products/extending-pxm-products/extend-products-overview",
          },
          {
            to: "/docs/studio/Integrations/stripe-payment-intents",
            from: "/docs/commerce-cloud/payments/paying-for-an-order/stripe-payment-intents",
          },
          {
            to: "/docs/api/pxm/inventory/create-product-stock",
            from: "/docs/pxm/inventories/inventory",
          },
          {
            to: "/docs/api/pxm/products/product-file-relationships",
            from: "/docs/pxm/products/product-asset-relationships/file-relationship/create-product-file-relationships",
          },
          {
            to: "/docs/api/pxm/products/product-file-relationships",
            from: "/docs/pxm/products/product-asset-relationships/file-relationship/update-product-file-relationships",
          },
          {
            to: "/docs/api/accounts/account-management-authentication",
            from: "/docs/commerce-cloud/accounts/account-management-authentication/account-management-authentication-api/switching-accounts",
          },
          {
            to: "/docs/commerce-manager/settings/general-settings",
            from: "/docs/commerce-cloud/global-project-settings/general-settings",
          },
          {
            to: "/docs/api/pxm/products/delete-product-file-relationships",
            from: "/docs/pxm/products/product-asset-relationships/file-relationship/delete-product-file-relationships",
          },
          {
            to: "/docs/api/flows",
            from: "/docs/commerce-cloud/custom-data/custom-data-flows-api/custom-data-flows-api-overview",
          },
          {
            to: "/docs/api/pxm/products/product-file-relationships",
            from: "/docs/pxm/products/product-asset-relationships/file-relationship/get-product-file-relationships",
          },
          {
            to: "/docs/api/pxm/catalog/get-by-context-child-nodes",
            from: "/docs/pxm/catalogs/catalog-latest-release/get-all-child-products",
          },
          {
            to: "/docs/api/pxm/catalog/get-by-context-child-nodes",
            from: "/docs/pxm/catalogs/shopper-catalog/get-all-child-products-shopper",
          },
          {
            to: "/docs/api/commerce-extensions/get-all-custom-fields",
            from: "/docs/commerce-cloud/commerce-extensions/commerce-extensions-api/custom-fields/get-all-custom-fields",
          },
          {
            to: "/docs/carts-orders/capture-a-transaction",
            from: "/docs/commerce-cloud/payments/transactions/capture-a-transaction",
          },
          {
            to: "/docs/api/pxm/pricebooks/prices",
            from: "/docs/pxm/pricebooks/pxm-pricebooks-prices/create-product-prices",
          },
          {
            to: "/docs/api/pxm/catalog/get-by-context-component-product-i-ds",
            from: "/docs/pxm/catalogs/shopper-catalog/get-all-products",
          },
          {
            to: "/docs/api/pxm/catalog/get-by-context-product",
            from: "/docs/pxm/catalogs/shopper-catalog/get-a-product",
          },
          {
            to: "/docs/carts-orders/elastic-path-payments-stripe",
            from: "/docs/commerce-cloud/payments/paying-for-an-order/elastic-path-payments-stripe",
          },
          {
            to: "/docs/api/pxm/catalog/get-by-context-product",
            from: "/docs/pxm/products/ep-pxm-products-api/get-a-product",
          },
          {
            to: "/docs/commerce-manager/product-experience-manager/product-import/product-importer",
            from: "/docs/pxm/products/importing-products/overview",
          },
          {
            to: "/docs/commerce-manager/subscriptions/overview",
            from: "/docs/commerce-cloud/carts/cart-items/add-subscription-to-cart",
          },
          {
            to: "/docs/api/carts/update-an-order",
            from: "/docs/commerce-cloud/orders/orders-api/update-an-order",
          },
          {
            to: "/docs/commerce-manager/commerce-extension/commerce-extension-in-cm",
            from: "/docs/commerce-cloud/commerce-extensions/commerce-extensions-api/custom-fields/create-a-custom-field",
          },
          {
            to: "/docs/api/commerce-extensions/create-a-custom-entry",
            from: "/docs/commerce-cloud/commerce-extensions/commerce-extensions-api/custom-api-entries/overview",
          },
          {
            to: "/docs/api/integrations/integrations-introduction",
            from: "/docs/commerce-cloud/integrations/integration-types",
          },
          {
            to: "/docs/commerce-manager/product-experience-manager/Products/personalizing-products",
            from: "/docs/pxm/products/personalized-products-pxm",
          },
          {
            to: "/docs/api/carts/orders",
            from: "/docs/commerce-cloud/orders/orders",
          },
          {
            to: "/docs/studio/Integrations/Integrating-authorize.net",
            from: "/docs/commerce-cloud/payments/paying-for-an-order/authorize.net-payments",
          },
          {
            to: "/docs/api/pxm/products/product-experience-manager-introduction",
            from: "/docs/pxm/products/product-content-management",
          },
          {
            to: "/docs/api/pxm/catalog/administrator-latest-releases-catalog-api",
            from: "/docs/pxm/catalogs/catalog-latest-release/get-products-by-hierarchy-in-a-release",
          },
          {
            to: "/docs/api/accounts/account-management-authentication",
            from: "/docs/commerce-cloud/accounts/account-management-authentication/overview",
          },
          {
            to: "/docs/api/carts/manage-carts",
            from: "/docs/commerce-cloud/carts/cart-items/re-order",
          },
          {
            to: "/docs/commerce-manager/product-experience-manager/Products/overview",
            from: "/docs/pxm/catalogs/catalog-latest-release/get-a-product-in-a-release",
          },
          {
            to: "/docs/api/pxm/catalog/get-by-context-release",
            from: "/docs/pxm/catalogs/catalog-latest-release/get-all-products-in-a-release",
          },
          {
            to: "/docs/api/pxm/products/get-all-products",
            from: "/docs/pxm/products/ep-pxm-products-api/get-all-products",
          },
          {
            to: "/guides/How-To/Authentication/how-to-utilize-one-time-password-tokens",
            from: "/docs/commerce-cloud/accounts/account-management-authentication/account-management-authentication-api/username-password-authentication",
          },
          {
            to: "/docs/api/commerce-extensions/update-a-custom-api",
            from: "/docs/commerce-cloud/commerce-extensions/commerce-extensions-api/custom-apis/update-a-custom-api",
          },
          {
            to: "/docs/api/integrations/integrations",
            from: "/docs/commerce-cloud/integrations/integrations",
          },
          {
            to: "/docs/api/payments/payment-gateways-introduction",
            from: "/docs/commerce-cloud/payments/paying-for-an-order/stripe-payment-connect",
          },
          {
            to: "/changelog/Studio-Release-Notes/2022/Release-148-August-23-2022",
            from: "/docs/cx-studio/Release-Notes/2022/Release-148-August-23-2022",
          },
          {
            to: "/docs/api/commerce-extensions/create-a-custom-api",
            from: "/docs/commerce-cloud/commerce-extensions/commerce-extensions-api/custom-apis/create-a-custom-api",
          },
          {
            to: "/docs/api/carts/orders",
            from: "/docs/commerce-cloud/orders/orders-api/orders-api-overview",
          },
          {
            to: "/docs/api/commerce-extensions/get-all-custom-fields",
            from: "/docs/commerce-cloud/commerce-extensions/commerce-extensions-api/custom-fields/update-a-custom-field",
          },
          { to: "/", from: "/learn/power-of-the-catalog/group-pricing" },
          {
            to: "/docs/commerce-manager/product-experience-manager/Products/add-product-details",
            from: "/docs/pxm/products/pxm-products-commerce-manager/add-product-details",
          },
          {
            to: "/docs/api/flows/fields",
            from: "/docs/commerce-cloud/commerce-extensions/commerce-extensions-api/custom-fields/overview",
          },
          {
            to: "/docs/api/integrations/create-integration",
            from: "/docs/commerce-cloud/integrations/integrations-api/create-an-integration",
          },
          {
            to: "/docs/commerce-manager/product-experience-manager/Products/overview",
            from: "/docs/pxm/products/ep-pxm-products-api/pxm-products-api-overview",
          },
          {
            to: "/docs/api/pxm/products/delete-product",
            from: "/docs/pxm/products/extending-pxm-products/pxm-product-attributes-api/delete-attribute",
          },
          {
            to: "/docs/studio/getting-started-with-epcc",
            from: "/docs/cx-studio/getting-started-with-epcc",
          },
          {
            to: "/docs/commerce-manager/product-experience-manager/Products/create-products",
            from: "/docs/pxm/products/pxm-products-commerce-manager/create-products",
          },
          {
            to: "/docs/api/carts/checkout",
            from: "/docs/commerce-cloud/checkout/checkout",
          },
          {
            to: "/docs/api/pxm/currencies/get-a-currency",
            from: "/learn/power-of-the-catalog/regional-currencies",
          },
          {
            to: "/docs/api/settings/get-v-2-settings",
            from: "/docs/commerce-cloud/global-project-settings/settings-overview",
          },
          { to: "/", from: "/docs" },
          {
            to: "/docs/api/pxm/catalog/get-catalog-by-id",
            from: "/learn/power-of-the-catalog/catalog-switching",
          },
          {
            to: "/docs/api/flows/flows",
            from: "/docs/commerce-cloud/custom-data/custom-data-flows",
          },
          {
            to: "/docs/commerce-manager/product-experience-manager/hierarchies/assigning-products",
            from: "/docs/pxm/products/ep-pxm-products-api/dissociate-multiple-products",
          },
          {
            to: "/",
            from: "/learn/creating-an-online-store/process-customer-orders",
          },
          { to: "/", from: "/learn/custom-data-flows" },
          {
            to: "/docs/studio/Integrations/stripe-payment-intents",
            from: "/docs/commerce-cloud/payments/paying-for-an-order/configure-epcc-plugin-for-stripe",
          },
          {
            to: "/docs/api/accounts/get-v-2-settings-account-authentication",
            from: "/docs/commerce-cloud/api-overview/api-overview",
          },
          {
            to: "/docs/studio/getting-started-with-epcc",
            from: "/learn/foundations-single-page",
          },
          {
            to: "/docs/commerce-manager/product-experience-manager/extending-products/templates",
            from: "/docs/pxm/products/extending-pxm-products/pxm-product-attributes-api/create-attribute",
          },
          {
            to: "/docs/customer-management/customer-management-api/update-a-customer",
            from: "/docs/pxm/products/extending-pxm-products/pxm-product-attributes-api/update-attribute",
          },
          {
            to: "/docs/commerce-manager/product-experience-manager/extending-products/templates",
            from: "/docs/pxm/products/extending-pxm-products/pxm-product-attributes-api/get-attribute",
          },
          { to: "/", from: "/learn/power-of-the-catalog/complete" },
          {
            to: "/",
            from: "/learn/creating-an-online-store/lets-get-some-sales",
          },
          { to: "/", from: "/learn/creating-an-online-store/store-preview" },
          {
            to: "/",
            from: "/learn/creating-an-online-store/getting-your-products",
          },
          {
            to: "/",
            from: "/learn/creating-an-online-store/show-product-details",
          },
          { to: "/", from: "/learn/power-of-the-catalog/mixed-navigation" },
          { to: "/", from: "/learn/sign-up" },
          { to: "/", from: "/docs/products" },
          {
            to: "/",
            from: "/learn/creating-an-online-store/navigate-around-the-store",
          },
          { to: "/", from: "/learn/creating-an-online-store/complete" },
        ],
      },
    ],
  ],
  themes: [
    "docusaurus-theme-openapi-docs",
    "@docusaurus/theme-mermaid",
    "@docusaurus/theme-live-codeblock",
    [
      "@easyops-cn/docusaurus-search-local",
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        indexDocs: true,
        indexBlog: true,
        blogRouteBasePath: "changelog",
        docsRouteBasePath: ["docs", "guides"],
        highlightSearchTermsOnTargetPage: false,
        searchContextByPaths: ["docs", "guides", "changelog"],
        useAllContextsWithNoSearchContext: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      } satisfies SearchLocal.PluginOptions,
    ],
  ],
};

module.exports = config;
