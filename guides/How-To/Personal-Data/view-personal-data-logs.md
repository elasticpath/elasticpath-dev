---
title: View Personal-Data Logs
nav_label: View Personal-Data Logs
sidebar_position: 20
---

## Before you begin

- Ensure that the user is signed into the store with appropriate seller permissions.

:::note
Only sellers with Seller Admins, Support and IT roles can access the API
:::

## Procedure

1. Note the ID and type of the data item that you want logs for.

    Most get/update/create responses in the Commerce API contain mandatory fields `id` and `type`. You will need to pass this information to the logs endpoint in the next step.

   :::note
   Currently the personal data management functionality is only enabled for entities under `v2/accounts`, `v2/customers` and `v2/authentication-realms` URL prefixes.
   :::

2. Call the `logs` endpoint and specify the `id` and `type` in the filter

   See the [Personal Data Logs](https://beta.elasticpath.dev/docs/personal-data/personal-data-logs-api/get-personal-data-logs) page for more information

3. You can use pagination links inside the `meta` field to navigate. Visit the [pagination](https://beta.elasticpath.dev/guides/Getting-Started/pagination) page for more information.
