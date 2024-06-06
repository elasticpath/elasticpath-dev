---
title: Add Subscription to Cart
nav_label: Add Subscription to Cart
nav_position: 100
---

## `POST` Add Subscription to Cart

```http
https://useast.api.elasticpath.com/v2/carts/subscriptions/items
```

Elastic Path Subscriptions allows you to offer your customers subscriptions and recurring billing for your product and services. When a customer chooses a subscription, they must add the subscription to a cart, then checkout out the cart and pay for the order.

## Parameters

### Headers

| Name                      | Required | Type     | Description                                                                                                                                                                                            |
|:--------------------------|:---------|:---------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `Authorization`           | Required | `string` | The Bearer token to grant access to the API.          |                                   

### Body

| Name                         | Required | Type      | Description                                                                                                                                                                  |
|:-----------------------------|:---------|:----------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`                         | Required | `string`  | The unique identifier of the offering to add to a cart.                                                                                                                      |
| `type`                       | Required | `string`  | Specifies the type of the resource, always `subscription_item`.                                                                                                              |
| `subscription_configuration` | Required | `array`   | Specifies the unique identifier of the plan within the offering that you want to add to a cart. You can view an offering's plan using the `List an Offering's plans` endpoint. |
| `quantity`                   | Required | `integer` | Specifies the number of subscriptions to add to the cart.                                                                                                                    |

## Request Example 

### Curl

```bash
curl -X POST https://euwest.api.elasticpath.com/v2/carts/subscriptions/items \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
            "data": {
              "id": "140ea4ad-11b0-4778-91a1-576df688c31c",
              "type": "subscription_item",
              "subscription_configuration": {
                  "plan": "6bf86e7a-2548-485d-a595-1be022a1eb42"
              },
              "quantity": 1
              }
          }
```

## Response Example

`201 Created`

```json
{
   
```