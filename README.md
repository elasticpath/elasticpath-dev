<h1>Docusaurus OpenAPI Doc Generator for Elastic Path APIs</h1>

<div>
<img alt="docusaurus" width="200" src="https://user-images.githubusercontent.com/9343811/165975569-1bc29814-884c-4931-83df-860043b625b7.svg" />
</div>

<div>

This repo utilizes (https://github.com/PaloAltoNetworks/docusaurus-openapi-docs/) Palo AltoNetworks OpenAPI Doc Generator for generating API reference docs in Docusaurus v2.

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/PaloAltoNetworks/docusaurus-openapi-docs/blob/HEAD/LICENSE) [![npm latest package](https://img.shields.io/npm/v/docusaurus-plugin-openapi-docs/latest.svg)](https://www.npmjs.com/package/docusaurus-plugin-openapi-docs) [![npm downloads](https://img.shields.io/npm/dm/docusaurus-plugin-openapi-docs.svg)](https://www.npmjs.com/package/docusaurus-plugin-openapi-docs) [![npm canary package](https://img.shields.io/npm/v/docusaurus-plugin-openapi-docs/canary.svg)](https://www.npmjs.com/package/docusaurus-plugin-openapi-docs) [![npm beta package](https://img.shields.io/npm/v/docusaurus-plugin-openapi-docs/beta.svg)](https://www.npmjs.com/package/docusaurus-plugin-openapi-docs)
<br/>
[![build](https://github.com/PaloAltoNetworks/docusaurus-openapi-docs/actions/workflows/validate.yaml/badge.svg)](https://github.com/PaloAltoNetworks/docusaurus-openapi-docs/actions/workflows/validate.yaml) [![prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier) [![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/) [![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/PaloAltoNetworks/docusaurus-openapi-docs/blob/HEAD/CONTRIBUTING.md#pull-requests)
<br />

</div>


# Template

This template is built with [Docusaurus 2](https://docusaurus.io/).

### Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
yarn build
```

It is recommended that you run build prior to updating the repository with any changes. The build process is what the hosting provider uses to generate the static website. Failures locally in build will result in failures at the hosting provider. 

This command generates static content into the `build` directory and can be served using any static contents hosting service.

# Frequently Asks Questions:

### How do you create a link from one Open API spec to another?

The easiest method is by navigating the site and copy the link from the URL of the file you are linking to without the `https://your_url` portion of the request unless you are linking from other content docs such as Guides or Blog or any additional content docs that have been added. Essentially, the location should be `/docs/api/service/tag/api_request`

Where: 

- `service` = service name in OpenAPI spec
- `tag` = Tag in OpenAPI spec
- `api_request` = CRUD 

### What CSS library is utilized?

We utilize both the standard Docusaurus custom theme and TailwindCSS for styling of pages.

### Where do I modify the dropdown menu contained under docs and resources?

 - Docs menu is located at `/src/snippets/resoureDOCS.html`
 - Resource menu is located at `/src/snippets/resources.html`

### What are OpenAPI specifications stored?

All specifications are stored under `/openapispecs/service_name/spec_name.yaml`

### Where do I store shared partials markdown docs?

Partials are stored in the standard Docusaurus location of `/docs/partials` using a convention of `_name-section.mdx`

### How do I add in additional API links on the `/api/` page?

Update HeroSectionAPIs.tsx located at `/src/components/api/HeroSectionAPIs.tsx`. Be sure to include a new icon for every service being added. We utilize [!FluentUI Icons Regular (not filled)](https://react.fluentui.dev/?path=/docs/icons-catalog--page)

## PaloAlto Networks OpenAPI Docs Overview

The `docusaurus-plugin-openapi-docs` package extends the Docusaurus CLI with commands for generating MDX using the OpenAPI specification as the source. The resulting MDX is fully compatible with [plugin-content-docs](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs) and can be used to render beautiful reference API docs by setting `docItemComponent` to `@theme/ApiItem`, a custom component included in the `docusaurus-theme-openapi-docs` theme.

Key Features:

- **Compatible:** Works with Swagger 2.0 and OpenAPI 3.0.
- **Fast:** Convert large OpenAPI specs into MDX docs in seconds. 🔥
- **Stylish:** Based on the same [Infima styling framework](https://infima.dev/) that powers the Docusaurus UI.
- **Flexible:** Supports single, multi and _even micro_ OpenAPI specs.

## Compatibility Matrix

| Docusaurus OpenAPI Docs | Docusaurus      |
| ----------------------- | --------------- |
| 3.0.0-beta.x (beta)     | `3.0.1 - 3.1.1` |
| 2.0.x (current)         | `2.4.1 - 2.4.3` |
| 1.7.3 (legacy)          | `2.0.1 - 2.2.0` |

## Plugin Configuration Options

The `docusaurus-plugin-openapi-docs` plugin can be configured with the following options:

| Name           | Type     | Default                           | Description                                                                                                                                                   |
| -------------- | -------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`           | `string` | `null`                            | A unique plugin ID.                                                                                                                                           |
| `docsPlugin`   | `string` | `@docusaurus/plugin-content-docs` | The plugin used to render the OpenAPI docs (ignored if the plugin instance referenced by `docsPluginId` is a `preset`).                                       |
| `docsPluginId` | `string` | `null`                            | The plugin ID associated with the `preset` or configured `docsPlugin` instance used to render the OpenAPI docs (e.g. "your-plugin-id", "classic", "default"). |

### config

`config` can be configured with the following options:

| Name                 | Type      | Default | Description                                                                                                                                     |
| -------------------- | --------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `specPath`           | `string`  | `null`  | Designated URL or path to the source of an OpenAPI specification file or directory of multiple OpenAPI specification files.                     |
| `ouputDir`           | `string`  | `null`  | Desired output path for generated MDX and sidebar files.                                                                                        |
| `proxy`              | `string`  | `null`  | _Optional:_ Proxy URL to prepend to base URL when performing API requests from browser.                                                         |
| `template`           | `string`  | `null`  | _Optional:_ Customize MDX content with a desired template.                                                                                      |
| `downloadUrl`        | `string`  | `null`  | _Optional:_ Designated URL for downloading OpenAPI specification. (requires `info` section/doc)                                                 |
| `hideSendButton`     | `boolean` | `null`  | _Optional:_ If set to `true`, hides the "Send API Request" button in API demo panel                                                             |
| `showExtensions`     | `boolean` | `null`  | _Optional:_ If set to `true`, renders operation-level vendor-extensions in description.                                                         |
| `sidebarOptions`     | `object`  | `null`  | _Optional:_ Set of options for sidebar configuration. See below for a list of supported options.                                                |
| `version`            | `string`  | `null`  | _Optional:_ Version assigned to single or micro-spec API specified in `specPath`.                                                               |
| `label`              | `string`  | `null`  | _Optional:_ Version label used when generating version selector dropdown menu.                                                                  |
| `baseUrl`            | `string`  | `null`  | _Optional:_ Version base URL used when generating version selector dropdown menu.                                                               |
| `versions`           | `object`  | `null`  | _Optional:_ Set of options for versioning configuration. See below for a list of supported options.                                             |
| `markdownGenerators` | `object`  | `null`  | _Optional:_ Customize MDX content with a set of options for specifying markdown generator functions. See below for a list of supported options. |
| `showSchemas`        | `boolean` | `null`  | _Optional:_ If set to `true`, generates schema pages and adds them to the sidebar.                                                              |

`sidebarOptions` can be configured with the following options:

| Name                 | Type      | Default | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -------------------- | --------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `groupPathsBy`       | `string`  | `null`  | Organize and group sidebar slice by specified option. Note: Currently, `groupPathsBy` only contains support for grouping by `tag` and `tagGroup`.                                                                                                                                                                                                                                                                                                                                                                                                        |
| `categoryLinkSource` | `string`  | `null`  | Defines what source to use for rendering category link pages when grouping paths by tag. <br/><br/>The supported options are as follows: <br/><br/> `tag`: Sets the category link config type to `generated-index` and uses the tag description as the link config description. <br/><br/>`info`: Sets the category link config type to `doc` and renders the `info` section as the category link (recommended only for multi/micro-spec scenarios). <br/><br/>`none`: Does not create pages for categories, only groups that can be expanded/collapsed. |
| `sidebarCollapsible` | `boolean` | `true`  | Whether sidebar categories are collapsible by default.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `sidebarCollapsed`   | `boolean` | `true`  | Whether sidebar categories are collapsed by default.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `customProps`        | `object`  | `null`  | Additional props for customizing a sidebar item.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

> You may optionally configure a `sidebarOptions`. In doing so, an individual `sidebar.js` slice with the configured options will be generated within the respective `outputDir`.

`versions` can be configured with the following options:

| Name       | Type     | Default | Description                                                                                                              |
| ---------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------ |
| `specPath` | `string` | `null`  | Designated URL or path to the source of an OpenAPI specification file or directory of micro OpenAPI specification files. |
| `ouputDir` | `string` | `null`  | Desired output path for versioned, generated MDX files.                                                                  |
| `label`    | `string` | `null`  | _Optional:_ Version label used when generating version selector dropdown menu.                                           |
| `baseUrl`  | `string` | `null`  | _Optional:_ Version base URL used when generating version selector dropdown menu.                                        |

> All versions will automatically inherit `sidebarOptions` from the parent/base config.

### markdownGenerators

`markdownGenerators` can be configured with the following options:

| Name                 | Type       | Default | Description                                                                                                                                    |
| -------------------- | ---------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `createApiPageMD`    | `function` | `null`  | _Optional:_ Returns a string of the raw markdown body for API pages.<br/><br/>**Function type:** `(pageData: ApiPageMetadata) => string`       |
| `createInfoPageMD`   | `function` | `null`  | _Optional:_ Returns a string of the raw markdown body for info pages.<br/><br/>**Function type:** `(pageData: InfoPageMetadata) => string`     |
| `createTagPageMD`    | `function` | `null`  | _Optional:_ Returns a string of the raw markdown body for tag pages.<br/><br/>**Function type:** `(pageData: TagPageMetadata) => string`       |
| `createSchemaPageMD` | `function` | `null`  | _Optional:_ Returns a string of the raw markdown body for schema pages.<br/><br/>**Function type:** `(pageData: SchemaPageMetadata) => string` |

## CLI Usage

```bash
Usage: docusaurus <command> [options]

Options:
  -V, --version                                            output the version number
  -h, --help                                               display help for command

Commands:
  build [options] [siteDir]                                Build website.
  swizzle [options] [themeName] [componentName] [siteDir]  Wraps or ejects the original theme files into website folder for customization.
  deploy [options] [siteDir]                               Deploy website to GitHub pages.
  start [options] [siteDir]                                Start the development server.
  serve [options] [siteDir]                                Serve website locally.
  clear [siteDir]                                          Remove build artifacts.
  write-translations [options] [siteDir]                   Extract required translations of your site.
  write-heading-ids [options] [siteDir] [files...]         Generate heading ids in Markdown content.
  docs:version <version>                                   Tag a new docs version
  gen-api-docs <id>                                        Generates OpenAPI docs in MDX file format and sidebar.js (if enabled).
  gen-api-docs:version <id:version>                        Generates versioned OpenAPI docs in MDX file format, versions.js and sidebar.js (if enabled).
  clean-api-docs <id>                                      Clears the generated OpenAPI docs MDX files and sidebar.js (if enabled).
  clean-api-docs:version <id:version>                      Clears the versioned, generated OpenAPI docs MDX files, versions.json and sidebar.js (if
                                                           enabled).
```

### Generating OpenAPI Docs

To generate all OpenAPI docs, run the following command from the root directory of your project:

Starting the project will remove and regenerate all spec files from your OpenAPI specification files:

```bash
yarn start
```

Building the project will remove and regenerate all spec files from your OpenAPI specification files and output static content:

```bash
yarn start
```

Available manual commands:

```bash
yarn docusaurus gen-api-docs all
```

> This will generate API docs for all of the OpenAPI specification (OAS) files referenced in your `docusaurus-plugin-openapi-docs` config.

You may also generate OpenAPI docs for a single path or OAS by specifying the unique `id`:

```bash
yarn docusaurus gen-api-docs <id>
```

Example:

```bash
yarn docusaurus gen-api-docs burgers
```

> The example above will only generate API docs relative to `burgers`.

### Cleaning API Docs

To clean/remove all API Docs, run the following command from the root directory of your project:

```bash
yarn docusaurus clean-api-docs all
```

You may also remove a particular set of API docs by specifying the unique `id` of your desired spec instance.

```bash
yarn docusaurus clean-api-docs <id>
```

Example:

```bash
yarn docusaurus clean-api-docs burgers
```

> The example above will remove all API docs relative to `burgers`.

### Versioning OpenAPI docs

To generate _all_ versioned OpenAPI docs, run the following command from the root directory of your project:

```bash
yarn docusaurus gen-api-docs:version <id>:all
```

Example:

```bash
yarn docusaurus gen-api-docs:version petstore:all
```

> This will generate API docs for all the OpenAPI specification (OAS) files referenced in your `versions` config and will also generate a `versions.json` file.

> Substitue `all` with a specific version ID to generate/clean a specific version. Generating for `all` or a specific version ID will automatically update the `versions.json` file.

## Developer Quick Start

> Looking to make a contribution? Make sure to checkout out our contributing guide.

After [forking](https://github.com/elasticpath/elasticpath-dev) the main repository, run the following:

```bash
git clone https://github.com/<your account>/elasticpath-dev.git
cd elasticpath-dev
yarn
yarn build-packages
yarn watch:demo
```

## Credits

Special thanks to @bourdakos1 (Nick Bourdakos), the author of [docusaurus-openapi](https://github.com/cloud-annotations/docusaurus-openapi), which this project is heavily based on.
