---
title: Delete a Catalog Rule
nav_label: Delete a Rule
sidebar_position: 60
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `DELETE` a Catalog Rule by ID

```text
https://useast.api.elasticpath.com/pcm/catalogs/rules/:catalogRuleId
```

Deletes the specified catalog rule.

## Parameters

### Path parameters

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `catalogRuleId` | Required | `string` | Specifies the unique identifier of the catalog rule. |

### Headers

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. Note that this must be a client credentials token. |

## Request Example

```bash
curl -X DELETE https://useast.api.elasticpath.com/pcm/catalogs/rules/ac7d1ea8-6220-44b6-978d-a55bf111772d \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

## Response Example

`204 No Content`
