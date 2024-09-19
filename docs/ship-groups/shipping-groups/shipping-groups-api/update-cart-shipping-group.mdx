---
title: Update a Cart Shipping Group
nav_label: Update a Cart Shipping Group
sidebar_position: 4
---

## `PUT` Update a Cart Shipping Group

```http
https://useast.api.elasticpath.com/v2/carts/:cartID/shipping-groups/shippingGroupID
```

## Parameters 

### Path parameters

| Name | Required | Type     | Description                             |
|:-----|:---------|:---------|:----------------------------------------|
| `cartID` | Required | `string` | The unique identifier of the cart to retreive a shipping group for a cart. |
| `shippingGroupID` | Required | `string` | The unique identifier of the shipping group related to a cart. |

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name   | Required | Type     | Description |
|:-------|:---------|:---------|:------------|
| `type` | Required | `string` | Represents the type of object being returned. Must be set to `shipping_group`. |
| `shipping_type` | Optional | `string` | Represents the type of shipment. The maximum character allowed is 50. For example, UPS Ground, Canada Post Expedited. |
| `tracking_reference` | Optional | `string` | Specifies the tracking reference of the shipment. The maximum character allowed is 50. For example, ground_1234. |
| `shipping_price` | Optional | `object` | Includes `shipping_price.base`,`shipping_price.tax`, and `shipping_price.fees`. |
| `shipping_price.base` | Optional | `number` | Specifies the base price of the shipment. If not provided, it is zero. |
| `shipping_price.tax` | Optional | `number` | Specifies the tax price applied to the shipment. If not provided, it is zero. |
| `shipping_price.fees` | Optional | `number` | Specifies the shipping fees applied to the shipment. If not provided, it is zero. |
| `delivery_estimate` | Optional | `object` | Specifies the delivery estimate object. |
| `delivery_estimate.start` | Optional | `string` | Represents the start date of the delivery. |
| `delivery_estimate.end` | Optional | `string` | Represents the end date of the delivery. |
|  `address` | Optional | `object` | Specifies the details of the shipping address. |
| `address.first_name` | Optional | `string` | Specifies first name of the shipping recipient. | 
| `address.last_name` | Optional | `string` | Specifies last name of the shipping recipient. |
| `address.company_name` | Optional | `string` | Specifies company name of the shipping recipient. |
| `address.line_1` | Optional | `string` | Indicates first line of the shipping address. |
| `address.line_2` | Optional | `string` | Indicates second line of the shipping address. |
| `address.postcode` | Optional | `string` | Represents postal code of the shipping address. |
| `address.county` | Optional | `string` | Specifies the county of the shipping address. |
| `address.country` | Optional | `string` | Specifies the country of the shipping address. |
| `address.region`	| Optional | `string` |	Specifies the state, province, or region of the shipping address. |
| `address.instructions` | Optional |`string` | Specifies shipping instructions. |

## Request Example

```bash
curl -X PUT https://useast.api.elasticpath.com/v2/carts/:cartID/shipping-groups/shippingGroupID
    -H "Authorization: Bearer XXXX" \
    -H "Content-Type: application/json" \
    -d $ {
     "data": {
       "type": "shipping_group",
       "shipping_type": "shipping-type-updated",
        "tracking_reference": "tracking-reference-updated",
        "shipping_price": {
            "base":500,
            "tax":100,
            "fees":100
        },
        "delivery_estimate": {
            "start": "2023-04-25T00:00:00.000+00:00",
            "end": "2023-04-29T00:00:00.000+00:00"
        },
        "address": {
            "first_name": "Ron",
            "last_name": "Swanson",
            "phone_number": "",
            "company_name": "Ron Swanson Enterprises",
            "line_1": "1 Sunny Street",
            "line_2": "",
            "postcode": "92802",
            "county": "Orange",
            "country": "US",
            "region": "CA",
            "instructions": ""
        }
    }
}
```

## Response Example

`200 OK`

```json
{
    "data": {
        "type": "shipping_group",
        "id": "eb063818-939a-458f-97a4-2601c0c2b445",
        "relation": "cart",
        "order_id": "",
        "cart_id": "2b5cb684-7fdf-4a50-9e6a-9e880f7150ba",
        "shipping_type": "shipping-type-updated",
        "tracking_reference": "tracking-reference-updated",
        "address": {
            "first_name": "Andy",
            "last_name": "Dwyer",
            "company_name": "Ron Swanson Enterprises",
            "phone_number": "",
            "line_1": "1 Sunny Street",
            "line_2": "",
            "city": "Vancouver",
            "postcode": "92802",
            "county": "Orange",
            "country": "US",
            "region": "WA",
            "instructions": ""
        },
        "delivery_estimate": {
            "start": "2023-04-26T22:52:19Z",
            "end": "2023-04-27T22:52:19Z"
        },
        "created_at": "2023-06-23T16:36:10.717Z",
        "updated_at": "2023-06-26T15:44:14.620214165Z",
        "relationships": {
            "cart": {
                "data": {
                    "type": "cart",
                    "id": "2b5cb684-7fdf-4a50-9e6a-9e880f7150ba"
                }
            }
        },
        "meta": {
            "shipping_display_price": {
                "total": {
                    "amount": 700,
                    "currency": "USD",
                    "formatted": "$7.00"
                },
                "base": {
                    "amount": 500,
                    "currency": "USD",
                    "formatted": "$5.00"
                },
                "tax": {
                    "amount": 100,
                    "currency": "USD",
                    "formatted": "$1.00"
                },
                "fees": {
                    "amount": 100,
                    "currency": "USD",
                    "formatted": "$1.00"
                }
            }
        }
    }
}
```
