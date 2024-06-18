---
title: Managing Personal-Data
sidebar_label: Managing Personal-Data
sidebar_position: 10
---


You can find all data items that belong to a user (not only a specific data item) and see logs for them.

## Before you begin

- Ensure that the user is signed into the store with appropriate seller permissions.

:::note
Only sellers with Seller Admins, Support and IT roles can access the API.
:::

## Procedure

1. Note the ID and type of the data item for which you want to find related data items.

    It could be any data item that belongs to the user of interest (for example, a customer or address.)

    Most get/update/create responses in the Commerce API contain mandatory fields `id` and `type`. You need to pass this information to the endpoint in the next step.

   :::note
   Currently, the personal data management functionality is only enabled for entities under `v2/accounts`, `v2/customers` and `v2/authentication-realms` URL prefixes.
   :::

1. Call the `related-data-entries` endpoint and specify the `id` and `type` in the filter.

   See [Personal Data Related Data Entries](https://beta.elasticpath.dev/docs/personal-data/personal-data-related-data-entries-api/get-personal-data-related-data-entries) for more information.

1. You can use pagination links inside the `meta` field to navigate. See [pagination](https://beta.elasticpath.dev/guides/Getting-Started/pagination) for more information.
1. You can view the logs for the original data item from Step 1 or any of the related data items found in Step 2.
1. Call the `logs` endpoint and specify the `id` and `type` in the filter
gg
   See the [Personal Data Logs](https://beta.elasticpath.dev/docs/personal-data/personal-data-logs-api/get-personal-data-logs) page for more information.
