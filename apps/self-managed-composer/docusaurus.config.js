// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

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

const lightCodeTheme = require("prism-react-renderer/themes/vsLight");
const darkCodeTheme = require("prism-react-renderer/themes/vsDark");

const fs = require("fs");
const resourcesHTML = fs.readFileSync("./src/snippets/resources.html", "utf-8");
const resourceDOCS = fs.readFileSync(
  "./src/snippets/resourceDOCS.html",
  "utf-8",
);

/** @type {import('@docusaurus/plugin-content-docs').Options} */
//const defaultSettings = {
//  breadcrumbs: true,
//  showLastUpdateTime: true,
//  sidebarCollapsible: true,
//  sidebarPath: require.resolve('./sidebars-default.js'),
//};
/**
 * Create a section
 * @param {import('@docusaurus/plugin-content-docs').Options} options
 */

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Elastic Path Documentation",
  tagline: "API, Commerce Manager, Guides and Documentation 🚀",
  url: "https://stover.io",
  baseUrl: "/self-managed/composer/",
  favicon: "/favicon.ico",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "elasticpath", // Usually your GitHub org/user name.
  projectName: "self-managed-composer", // Usually your repo name.
  markdown: {
    mermaid: true,
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebar-composer.js"),
          path: "composer",
          routeBasePath: "/",
          editUrl: "https://github.com/elasticpath/elasticpath-dev/tree/main/",
          exclude: [
            "**/_*/**", // Allow for .md files prepended with underscores, like for our API
            "**/*.test.{js,jsx,ts,tsx}",
            "**/__tests__/**",
          ],
        },
        blog: false, // Optional: disable the blog plugin if not needed
        pages: false, // Optional: disable the pages plugin if not needed
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          ignorePatterns: ["/tags/**"],
        },
        gtag: {
          trackingID: 'G-NZ3NL8DLLD',
          anonymizeIP: true,
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
            to: "https://elasticpath.dev/guides",
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
            to: "pathname:///changelog-landing",
            target: "_self",
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
            href: "pathname:///get-in-touch",
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
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
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
    [
      "posthog-docusaurus",
      {
        apiKey: "phc_NsCAwFSbBegeJ8eRtU9T53pOVH8m7uoeMMwRXULdjVY",
        //appUrl: "<ph_client_api_host>", // optional, defaults to "https://us.i.posthog.com"
        enableInDevelopment: false, // optional
      },
    ],
  ],
  themes: [
    "@docusaurus/theme-mermaid",
    "@docusaurus/theme-live-codeblock",
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        indexDocs: true,
        indexBlog: false,
        docsRouteBasePath: ["composer"],
        highlightSearchTermsOnTargetPage: false,
        searchContextByPaths: ["composer"],
        useAllContextsWithNoSearchContext: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      }),
    ],
  ],
};

module.exports = config;
