---
title: Create a Flow
nav_label: Create a Flow
sidebar_position: 3
---

## `POST` Create a Flow

```http
https://useast.api.elasticpath.com/v2/flows
```

:::caution
Custom names and values prefixed with `$` are not supported.
:::

## Parameters

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name          | Required | Type      | Description                           |
|:--------------|:---------|:----------|:--------------------------------------|
| `enabled`     | Required | `boolean` | `true` if enabled, `false` if not.    |
| `description` | Required | `string`  | Any description for this flow.        |
| `slug`        | Required | `string`  | A unique slug identifier for the flow. |
| `name`        | Required | `string`  | The name of the flow.                 |
| `type`        | Required | `string`  | Represents the type of object being returned. |

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
curl -X POST "https://useast.api.elasticpath.com/v2/flows" \
     -H "Authorization: XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
        "data": {
            "type": "flow",
            "name": "Products",
            "slug": "products",
            "description": "Extends the default product object",
            "enabled": true
        }
     }
```

### JavaScript SDK

```javascript
const data = {
    name: "Products flow",
    slug: "products",
    description: "Extends the default product object",
    enabled: true,
};

// Where `EPCC` is an authenticated client
await Moltin.Flows.Create(data);
```

## Response Example

`201 Created`

```json
{
    "data": {
        "id": "6d320b42-237d-4474-8452-d49f884d4ae1",
        "type": "flow",
        "name": "Products-1",
        "slug": "products-1",
        "description": "Extends the default product object",
        "enabled": true,
        "links": {
            "self": "https://useast.api.elasticpath.com/v2/flows/6d320b42-237d-4474-8452-d49f884d4ae1"
        },
        "relationships": {},
        "meta": {
            "owner": "organization",
            "timestamps": {
                "created_at": "2018-05-10T18:04:26.623Z",
                "updated_at": "2018-05-10T18:04:26.623Z"
            }
        }
    }
}
```
