---
title: Update an Entry
nav_label: Update an Entry
sidebar_position: 5
---

## `PUT` Update an entry

```http
https://useast.api.elasticpath.com/v2/flows/:slug/entries/:id
```

## Parameters

### Path parameters

| Name   | Required | Type     | Description                                   |
|:-------|:---------|:---------|:----------------------------------------------|
| `slug` | Required | `string` | The slug for the Flow you are requesting an entry for. |
| `id`   | Required | `string` | The ID of the entry you are updating.         |

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name         | Required | Type     | Description                             |
|:-------------|:---------|:---------|:----------------------------------------|
| `type`       | Required | `string` | This is always `entry`.                 |
| `:fieldSlug` | Required | `string` | The field slug for each field in this flow along with the corresponding value for this entry. |
| `entryID`    | Required | `string` | The ID of the entry.                    |

:::note
You can have multiple `{FIELD_SLUG}`values in the request body if they are related to the flow.
:::

## Request Examples

### Curl

```bash
curl -X PUT https://useast.api.elasticpath.com/v2/flows/:flowSlug/entries/:entryId \
     -H "Authorization: XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
       "data": {
         "id": "{ENTRY_ID}",
         "type": "entry",
         "{FIELD_SLUG}": "a new value"
       }
     }
```

### JavaScript SDK

```javascript
cconst flowSlug = "flow-slug";
const entryId = "25617d3e-14a6-434c-bfab-3fda87517aaf";

const data = {
  "{FIELD_SLUG}": "A new value",
};

// Where `EPCC` is an authenticated client
await EPCC.Flows.UpdateEntry(flowSlug, entryId, data);
```

## Response Example

`200 OK`

```json
{
    "data": {
        "id": "03224af8-da41-4761-99fb-a125fa81ed99",
        "type": "entry",
        "brand-image": "a new image",
        "meta": {
            "owner": "organization",
            "timestamps": {
                "created_at": "2018-06-06T14:42:39.312Z",
                "updated_at": "2018-06-06T14:42:39.312Z"
            }
        },
        "links": {
            "self": "https://useast.api.elasticpath.com/v2/flows/brands/entries/03224af8-da41-4761-99fb-a125fa81ed99"
        }
    }
}
```
