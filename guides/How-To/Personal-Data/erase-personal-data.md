---
title: Erase Personal-Data
nav_label: Erase Personal-Data
sidebar_position: 40
---


In Commerce, you can trigger the erasure of customer personal data in an automated way.

## Before You Begin

- Ensure that you are signed into the store with appropriate permissions.

:::note
Only sellers with Seller Admins and IT roles have write access to the API. Support users have read access.
:::

## Procedure

1. Note the ID and type of the data item for which you want to initiate an erasure request.

    Most get/update/create responses in the Commerce API contain mandatory fields `id` and `type`. You need to pass this information to the endpoint in the next step.

    It could be any data item that belongs to the user of interest (for example, a customer or address.)

   :::note
   Currently, personal data management is only enabled for a limited set of endpoints. Please see the [personal data](https://beta.elasticpath.dev/docs/personal-data) for the list of endpoints that support personal data management.
   :::

2. Call the `erasure-requests` POST endpoint and specify the `id` and `type` in the filter.

   See [Create Personal Data Erasure Request](https://beta.elasticpath.dev/docs/personal-data/personal-data-erasure-requests-api/create-personal-data-erasure-request) for more information.

3. Note the erasure request `id` in the response and periodically poll the `erasure-requests` GET endpoint.

   See [Get Personal Data Erasure Request](https://beta.elasticpath.dev/docs/personal-data/personal-data-erasure-requests-api/get-personal-data-erasure-request-by-id).

4. Finally, if the `status` field in the response is `SUCCESS`, it means that all personal data is removed. Otherwise, you are advised to retry creating an erasure request, and if the problem persists, contact Support.
