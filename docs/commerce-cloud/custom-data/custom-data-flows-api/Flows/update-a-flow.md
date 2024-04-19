---
title: Update a Flow
nav_label: Update a Flow
sidebar_position: 4
---

## `PUT` Update a Flow

```http
https://useast.api.elasticpath.com/v2/flows/:id
```

:::caution
Custom names and values prefixed with `$` are not supported.
:::

## Parameters

### Path parameters

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `id` | Required | `string` | The ID for the flow you are changing. |

### Headers

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name          | Required | Type     | Description                                   |
| ------------- | -------- | -------- | --------------------------------------------- |
| `id`          | Required | `string` | The ID of the flow you’re requesting.         |
| `type`        | Required | `string` | Represents the type of object being returned. |
| `name`        | Optional | `string` | The name of the flow.                         |
| `slug`        | Optional | `string` | A unique slug identifier for this flow.       |
| `description` | Optional | `string` | Any description for this flow.                |
| `enabled`     | Optional | `string` | `true` if enabled `false` if not.             |

:::note
You cannot include the following  values in `data.slug`:

- `address`
- `brand`
- `cart`
- `category`
- `collection`
- `currency`
- `customer`
- `field`
- `file`
- `flow`
- `integration`
- `inventory`
- `language`
- `product`
- `order`
- `setting`
- `promotion`
:::

## Request Examples

### Curl

```bash
curl -X PUT "https://useast.api.elasticpath.com/v2/flows/:id" \
     -H "Authorization: XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
        "data": {
            "id": "{FLOW_ID}",
            "type": "flow",
            "name": "Categories",
            "slug": "categories",
            "description": "Extends the default category object",
            "enabled": true
        }
     }
```

### JavaScript SDK

```javascript

const flowId = "25617d3e-14a6-434c-bfab-3fda87517aaf";

const data = {
    id: flowId
    name: "Categories",
    slug: "categories",
    description: "Extends the default category object",
    enabled: true
};

await EPCC.Flows.Update(flowId, data)
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
        "description": "Extends the default product object",
        "enabled": true,
        "links": {
            "self": "https://useast.api.elasticpath.com/v2/flows/6d320b42-237d-4474-8452-d49f884d4ae1"
        },
        "relationships": {},
        "meta": {
            "owner": "store",
            "timestamps": {
                "created_at": "2018-05-10T18:04:26.623Z",
                "updated_at": "2018-05-10T18:11:47.469Z"
            }
        }
    }
}
```
