---
title: Update a Template
nav_label: Update a Template
sidebar_position: 40
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `PUT` Update a Template

```http
https://useast.api.elasticpath.com/v2/flows/:id
```

## Parameters

### Path parameters

| Name | Required | Type     | Description                                     |
|:-----|:---------|:---------|:------------------------------------------------|
| `id` | Required | `string` | Specifies the ID for the template that you want to update. |

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name          | Required | Type      | Description                           |
|:--------------|:---------|:----------|:--------------------------------------|
| `type`        | Required | `string`  | Specifies the type of the resource. You must use `flow`. |
| `name`        | Required | `string`  | Specifies the name of the template.   |
| `slug`        | Required | `string`  | Specifies the unique slug identifier for the template. You must use the `products(my-template-slug`) format. For example, `products(Skincare)`. |
| `description` | Required | `string`  | Provides a description for the template. |
| `enabled`     | Required | `boolean` | Specifies whether the template is enabled. Set this parameter `true` to assign the template to an attribute. |

## Request Examples

### Curl

```bash
curl -X POST "https://useast.api.elasticpath.com/v2/flows/:id" \
     -H "Authorization: XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
        "data": {
            "id": "{FLOW_ID}",
            "type": "flow",
            "name": "products(Skincare)",
            "slug": "products(Skincare)",
            "description": "Description updated",
            "enabled": true
        }
     }'
```

### JavaScript SDK

```javascript
const MoltinGateway = require("@moltin/sdk").gateway;
const Moltin = MoltinGateway({
    client_id: "X",
});
const flowId = "XXX";
const data = {
    name: "products(Skincare)",
    slug: "products(Skincare)",
    description: "Description updated",
};
Moltin.Flows.Update(flowId, data).then((flow) => {
    // Do something
});
```

## Response Example

`200 OK`

```json
{
    "data": {
        "id": "6d320b42-237d-4474-8452-d49f884d4ae1",
        "type": "flow",
        "name": "extraFieldRenamed",
        "slug": "products-1",
        "description": "Description updated",
        "enabled": true,
        "links": {
            "self": "https://useast.api.elasticpath.com/v2/flows/6d320b42-237d-4474-8452-d49f884d4ae1"
        },
        "relationships": {},
        "meta": {
            "owner": "organization",
            "timestamps": {
                "created_at": "2018-05-10T18:04:26.623Z",
                "updated_at": "2018-05-10T18:11:47.469Z"
            }
        }
    }
}
```
