---
title: Overview
nav_label: Overview
nav_position: 1
---

Commerce Extensions allows for the creation of Custom APIs that can manage large, private data sets efficiently, offering both simple and complex multidimensional filtering options. The combination of Commerce Extensions with Composer, enables you to deploy custom behaviors and integrations to enable capabilities unique to your business without building that functionality from scratch and then hosting yourself. 

Commerce Extensions is the next generation of Flows. Flows are not going anywhere, but going forward as we add new features, Commerce Extensions will eventually provide all the capabilities and more that Flows does. We recommend using Custom APIs for any of your new use cases.

A **Custom API** is an API defined by you, these are designed to replace the functionality offered by non-Core flows today. A Custom API describes a collection of **Custom Fields**. A Field represents a single field of data. A **Custom API Entry** is a specific instance of a resource, such as a single product. In database terms, you can think of Custom API as a table, Fields as columns, and Entries as database records.

## Custom APIs vs Non-Core Flows

Here is a comparison of current features of Non-Core Flows and Custom APIs. This will be updated as we release more capabilities.

| Feature        | Non-Core Flows | Commerce Extensions     |
|----------------|----------------|-------------------------|
| Build new APIs | ✅              | ✅                       |
| Access Level   | Implicit       | Client Credentials only |
| Filtering      | ⛔️             | ✅                       |
| Sorting        | ⛔️             | ✅ *                     |
| Events         | ⛔️             | Coming soon             |

*supported attributes: `created_at`, `updated_at` and `id`.

The Custom Fields [Overview](/docs/commerce-cloud/commerce-extensions/commerce-extensions-api/custom-fields/overview) page lists the comparison of different types and validation available in Custom APIs vs Non-Core Flows.
