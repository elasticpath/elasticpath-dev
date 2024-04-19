---
title: Create an Entry
nav_label: Create an Entry
sidebar_position: 30
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `POST` Create an Entry

```http
https://useast.api.elasticpath.com/v2/flows/:slug/entries
```

## Parameters

### Path parameters

| Name   | Required | Type     | Description                                   |
|:-------|:---------|:---------|:----------------------------------------------|
| `slug` | Required | `string` | The slug of the template that contains the attribute you wish to create an entry for. |

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name           | Required | Type     | Description                           |
|:---------------|:---------|:---------|:--------------------------------------|
| `type`         | Required | `string` | The type of object. You must use `entry`. |
| `id`           | Required | `string` | The ID of the resource that uses the template to which this attribute is assigned. For example, if you are extending a product, you need to provide a product Id. |
| **FIELD_SLUG** | Required | `string` | Where **FIELD_SLUG** is the slug for each attribute in this template and a corresponding value. You must provide a **FIELD_SLUG** and a value for the entry. |


## Request Examples

### Curl

```bash
curl -X POST https://useast.api.elasticpath.com/v2/flows/:flowSlug/entries \
     -H "Authorization: XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
       "data": {
         "type": "entry",
         "id": "cea9fda7-e72a-4e85-87bb-66ca9027dbc6",
         "SkinType": "Oily",
         "ml": "200",
       }
     }'
```

### JavaScript SDK

```javascript
const MoltinGateway = require("@moltin/sdk").gateway;
const Moltin = MoltinGateway({
    client_id: "X",
    client_secret: "X",
});
const flowSlug = "XXXX";
const data = {
    "{FIELD_SLUG}": "A value",
};
Moltin.Flows.CreateEntry(flowSlug, data).then((entry) => {
    // Do something
});
```

## Response Example

`201 Created`

```json
{
    "data":
      {
      "type": "entry",
      "id": "169e8370-aace-42ce-a1f2-bbf802ec79a3",
      "SkinType": "Oily",
      "ml": "200"
    }
}
  "meta": {
        "owner": "organization",
        "timestamps": {
          "created_at": "2021-09-17T17:13:09.538Z",
          "updated_at": "2021-09-17T17:13:09.538Z"
        }
      },
      "links": {
        "self": "https://useast.api.elasticpath.com/v2/flows/products(Skincare)/entries/169e8370-aace-42ce-a1f2-bbf802ec79a3"
  }'
```
