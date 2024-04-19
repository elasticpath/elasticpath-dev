---
title: Get an Entry
nav_label: Get an Entry
sidebar_position: 20
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `GET` Get an Entry

```http
https://useast.api.elasticpath.com/v2/flows/:slug/entries/:entryId
```

## Parameters

### Path parameters

| Name      | Required | Type     | Description                                |
|:----------|:---------|:---------|:-------------------------------------------|
| `entryId` | Required | `string` | Specifies the ID of the entry that you want to retrieve. |
| `slug`    | Required | `string` | Specifies the slug the slug of the template that contains the entry in an attribute. |

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Examples

### Curl

```bash
curl https://useast.api.elasticpath.com/v2/flows/:slug/entries/:entryId \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

### JavaScript SDK

```javascript
const MoltinGateway = require("@moltin/sdk").gateway;
const Moltin = MoltinGateway({
    client_id: "X",
});
const slug = "XXXX";
const entryId = "XXXX";
Moltin.Flows.GetEntry(slug, entryId).then((entry) => {
    // Do something
});
```

## Response Example

`200 OK`

```json
{
    "data": {
        "id": "4abb8316-d0a2-4c91-bf29-4d19ba932227",
        "type": "entry",
        "meta": {
            "owner": "organization",
            "timestamps": {
                "created_at": "2018-05-10T15:28:59.192Z",
                "updated_at": "2018-05-10T15:28:59.192Z"
            }
        },
        "links": {
            "self": "https://useast.api.elasticpath.com/v2/flows/products/entries/4abb8316-d0a2-4c91-bf29-4d19ba932227"
        }
    }
}
```
