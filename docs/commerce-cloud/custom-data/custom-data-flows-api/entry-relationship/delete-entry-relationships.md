---
title: Delete Entry Relationships
nav_label: Delete Entry Relationships
sidebar_position: 4
---

:::caution
Removing a relationship between an entry and resources deletes the relationships specified in the payload.
:::

## `DELETE` Delete Entry Relationships

```http
https://useast.api.elasticpath.com/v2/flows/:flowSlug/entries/:entryId/relationships/:fieldSlug
```

Remove all relationships between an entry and resources.

## Parameters

### Path parameters

| Name        | Required | Type     | Description                                  |
|:------------|:---------|:---------|:---------------------------------------------|
| `fieldSlug` | Required | `string` | The slug of the entry this field belongs to. |
| `entryId`   | Required | `string` | The ID of the entry this field belongs to.   |
| `flowSlug`  | Required | `string` | The slug of the Flow the entry belongs to.   |

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Examples

### Curl

```bash
curl -X DELETE https://useast.api.elasticpath.com/v2/flows/:flowSlug/entries/:entryId/relationships/:fieldSlug \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

### JavaScript SDK

```javascript
const flowSlug = "flow-slug";
const entryId = "25617d3e-14a6-434c-bfab-3fda87517aaf";
const fieldSlug = "field-slug";

// Where `EPCC` is an authenticated client
await EPCC.Flows.DeleteEntryRelationship(flowSlug, entryId, fieldSlug);
```

## Response Example

`204 No Content`
