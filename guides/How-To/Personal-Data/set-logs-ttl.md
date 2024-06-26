---
title: Set Logs Time-to-live (TTL)
nav_label: Set Logs TTL
sidebar_position: 50
---

In Commerce, logs are kept in the system for a limited time. You can configure the retention period using the respective API. The default retention period is 365 days for production store types and 7 days for other store types.

## Before You Begin

Ensure that you are signed into the store with appropriate permissions. Only sellers with Seller Admins and IT roles have write access to the API. Support users have read access.

## Procedure

1. Call the `logs-ttl` PUT endpoint and specify the `days` and `type` in the filter. See [Update Logs Time-to-Live (TTL) Settings](https://beta.elasticpath.dev/docs/personal-data/logs-ttl-settings/update-logs-ttl-settings) for more information.
1. Call the `logs-ttl` GET endpoint and make sure that the `days` field in the response is the same as the one you specified in the previous step. See [Get Logs Time-to-live (TTL)](https://beta.elasticpath.dev/docs/personal-data/logs-ttl-settings/get-logs-ttl-settings) for more information.
