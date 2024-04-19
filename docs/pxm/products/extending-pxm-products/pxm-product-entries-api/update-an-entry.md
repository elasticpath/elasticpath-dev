---
title: Update an Entry
nav_label: Update an Entry
sidebar_position: 40
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `PUT` Update an entry

```http
https://useast.api.elasticpath.com/v2/flows/:slug/entries/:id
```

## Parameters

### Path parameters

| Name   | Required | Type     | Description                                   |
|:-------|:---------|:---------|:----------------------------------------------|
| `slug` | Required | `string` | Specifies the slug of the template to update an entry for an attribute within the template. |
| `id`   | Required | `string` | Specifies the ID of the entry that you want to update. |

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name         | Required | Type     | Description                             |
|:-------------|:---------|:---------|:----------------------------------------|
| `type`       | Required | `string` | Specifies the type of object. You must use `entry`. |
| `FIELD_SLUG` | Required | `string` | Specifies the attribute slug for each attribute in this template along with the corresponding value for this entry. |
| `entryID`    | Required | `string` | Specifies the ID of the entry.          |

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
         "{FIELD_SLUG}": "a new value",
       }
     }
```

## JavaScript SDK

```javascript
const MoltinGateway = require("@moltin/sdk").gateway;
const Moltin = MoltinGateway({
    client_id: "X",
    client_secret: "X",
});
const flowSlug = "XXXX";
const entryId = "XXXX";
const data = {
    "{FIELD_SLUG}": "A new value",
};
Moltin.Flows.UpdateEntry(flowSlug, entryId, data).then((entry) => {
    // Do something
});
```

## Response Example

`200 OK`

```json
{
    "data": {
        "id": "03224af8-da41-4761-99fb-a125fa81ed99",
        "type": "entry",
        "SkinType": "Dry",
        "ml": "200",
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

:::note
You can have multiple `{FIELD_SLUG}`values in the request corresponding to attributes if the attributes are assigned to the same template.
:::
