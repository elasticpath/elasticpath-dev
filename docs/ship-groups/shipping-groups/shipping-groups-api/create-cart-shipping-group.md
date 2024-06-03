---
title: Create a Cart Shipping Group
nav_label: Create a Cart Shipping Group
sidebar_position: 3
---

## `POST` Create a Cart Shipping Group

```http
https://useast.api.elasticpath.com/v2/carts/:id/shipping-groups
```

Use this endpoint to create a cart shipping group. Once you have created a cart shipping group, assign the shipping group to the cart item by associating the cart item with the shipping group ID. This is important because it is necessary to associate items with shipping groups in order to include shipping groups in the corresponding cart, order, and totals.

Use any one of the following endpoints to associate the cart shipping group to the cart item:

- [Add custom items to cart](/docs/api/carts/cart-merge#add-custom-item-to-cart)
- [Update cart item](/docs/api/carts/update-a-cart-item)

:::note
- Ensure that the currency of the cart matches with the currency of the cart shipping group. For example, when creating the cart shipping group, the currency must be in USD if the cart currency is in USD.
- If multiple cart items have the same shipping group ID, the shipping price is only calculated once.
:::

## Parameters

### Path parameters

| Name | Required | Type     | Description                             |
|:-----|:---------|:---------|:----------------------------------------|
| `id` | Required | `string` | The unique identifier of the cart to create a shipping group. |


### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |
| `X-MOLTIN-CURRENCY` | Optional | `string` | Specifies the currency to be used other than the store's default currency when creating a cart shipping group and linking it to the desired cart items. |

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
| `address` | Optional | `object` | Specifies the details of the shipping address. |
| `address.first_name` | Optional | `string` | Specifies first name of the shipping recipient. | 
| `address.last_name` | Optional | `string` | Specifies last name of the shipping recipient. |
| `address.company_name` | Optional | `string` | Specifies company name of the shipping recipient. |
| `address.line_1` | Optional | `string` | Indicates first line of the shipping address. |
| `address.line_2` | Optional | `string` | Indicates second line of the shipping address. |
| `address.postcode` | Optional | `string` | Represents postal code of the shipping address. |
| `address.county` | Optional | `string` | Specifies the county of the shipping address. |
| `address.country` | Optional | `string` | Specifies the country of the shipping address. |
| `address.region`	| Optional | `string` |	Specifies the state, province, or region of the shipping address. |
| `address.instructions` |	Optional |`string` | Specifies shipping instructions. |

## Request Example

```bash
curl -X POST https://useast.api.elasticpath.com/v2/carts/:id/shipping-groups
    -H "Authorization: Bearer XXXX" \
    -H "Content-Type: application/json" \
    -d $ {
     "data": {
       "type": "shipping_group",
       "shipping_type": "UPS Ground",
        "tracking_reference": "ground_1234",
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

`201 Created`

```json
{
    "data": {
        "type": "shipping_group",
        "id": "eb063818-939a-458f-97a4-2601c0c2b445",
        "relation": "cart",
        "order_id": "",
        "cart_id": "2b5cb684-7fdf-4a50-9e6a-9e880f7150ba",
        "shipping_type": "UPS Ground",
        "tracking_reference": "ground_1234",
        "address": {
            "first_name": "Ron",
            "last_name": "Swanson",
            "company_name": "Ron Swanson Enterprises",
            "phone_number": "",
            "line_1": "1 Sunny Street",
            "line_2": "",
            "postcode": "92802",
            "county": "Orange",
            "country": "US",
            "region": "CA",
            "instructions": ""
        },
        "delivery_estimate": {
            "start": "2023-04-25T00:00:00Z",
            "end": "2023-04-29T00:00:00Z"
        },
        "created_at": "2023-06-23T16:36:10.71799334Z",
        "updated_at": "2023-06-23T16:36:10.717994647Z",
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

## Errors

When the currency of the cart shipping group does not match the currency of the cart, the following error response is returned:

```json
{
    "errors": [
        {
            "status": 400,
            "source": "request",
            "title": "Cart Currency Mismatch",
            "detail": "This cart uses USD, cannot add shipping group with currency GBP"
        }
    ]
}
```
