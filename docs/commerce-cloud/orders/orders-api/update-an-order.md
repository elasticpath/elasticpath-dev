---
title: Update an Order
nav_label: Update an Order
sidebar_position: 6
---

You can only update custom data, `shipping`, `shipping_address`, and `status` on orders. All other settings in the order object are immutable.

:::caution
You can update `shipping`, `shipping_address`, and `status` of an order only if the order is not fulfilled. You can use the refund API to refund an order only if the payment status is `paid`. Cancelling an order does not automatically refund a payment. You must refund the orders manually.
:::

:::note

- This request is only accessible to `client_credentials` token users with `Seller Admin` role.
- Non `client_credentials` token users cannot access this endpoint. See [Permissions](/docs/commerce-cloud/authentication/Tokens/permissions).

:::

## `PUT` Update by ID

```http
https://useast.api.elasticpath.com/v2/orders/:id
```

### Parameters

#### Path parameters

| Name | Required | Type     | Description                             |
|:-----|:---------|:---------|:----------------------------------------|
| `id` | Required | `string` | The ID of the order you want to update. |

#### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

#### Body

| Name   | Required | Type     | Description |
|:-------|:---------|:---------|:------------|
| `type` | Required | `string` | Represents the object being returned. It is always `order`. |
| `external_ref` | Optional | `string` | Represents an optional external ID reference for an order. It can contain alphanumeric characters, special characters, and spaces, and does not required to be unique. The maximum allowed length is 64 characters. It can be used to include an external reference from a separate company system. |

### Request examples

#### Curl

```bash
curl -X PUT https://useast.api.elasticpath.com/v2/orders/:id \
    -H "Authorization: Bearer XXXX" \
    -H "Content-Type: application/json" \
    -d $ {
      "data": {
        "type": "order"
        "external_ref": "external_order_123",
        "shipping_address": {
          "first_name": "John"
        }
      }
    }
```

#### JavaScript SDK

```javascript
const MoltinGateway = require("@moltin/sdk").gateway;
const Moltin = MoltinGateway({
    client_id: "X",
    client_secret: "X",
});
const id = "XXXX";
const order = {
    shipping_address: {
        first_name: "John",
    },
};
Moltin.Orders.Update(id, order).then((order) => {
    // Do something
});
```

### Response example

`200 OK`

```json
{
    "data": {
        "type": "order",
        "id": "369ad4a4-ee67-48b0-x347-t50a6e61d83d",
        "status": "incomplete",
        "payment": "unpaid",
        "shipping": "unfulfilled",
        "customer": {
            "name": "Mr John Doe",
            "email": "johndoe@example.com"
        },
        "external_ref": "external_order_123",
        "shipping_address": {
            "first_name": "James",
            "last_name": "Doe",
            "phone_number": "",
            "company_name": "",
            "line_1": "1234 Disney Drive",
            "line_2": "Disney Resort",
            "city": "Anaheim",
            "county": "Orange",
            "region": "CA",
            "postcode": "92802",
            "country": "US",
            "instructions": ""
        },
        "billing_address": {
            "first_name": "John",
            "last_name": "Doe",
            "company_name": "",
            "line_1": "1234 Disney Drive",
            "line_2": "Disney Resort",
            "city": "Anaheim",
            "county": "Orange",
            "region": "CA",
            "postcode": "92802",
            "country": "US"
        },
        "links": {},
        "meta": {
            "display_price": {
                "with_tax": {
                    "amount": 237500,
                    "currency": "USD",
                    "formatted": "$2175.00"
                },
                "without_tax": {
                    "amount": 237500,
                    "currency": "USD",
                    "formatted": "$2175.00"
                }
            },
            "timestamps": {
                "created_at": "2018-04-16T10:11:59.715Z",
                "updated_at": "2018-04-16T10:11:59.715Z"
            }
        },
        "relationships": {
            "items": {
                "data": [
                    {
                        "type": "item",
                        "id": "de9fddf5-011b-4485-abf8-ebb8f53c39ff"
                    }
                ]
            }
        }
    }
}
```

## `PUT` Cancel an Order by ID

You can cancel an order only if the order is not fulfilled.

```http
https://useast.api.elasticpath.com/v2/orders/:id
```

### Parameters

#### Path parameters

| Name | Required | Type     | Description                             |
|:-----|:---------|:---------|:----------------------------------------|
| `id` | Required | `string` | The ID of the order you want to cancel. |

#### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

#### Body

| Name     | Required | Type     | Description                                 |
|:---------|:---------|:---------|:--------------------------------------------|
| `type`   | Required | `string` | The type of the resource. You must use `order`. |
| `status` | Required | `string` | The status of the order. You can only update the status to `cancelled`. |

### Request example

```bash
curl -X PUT https://useast.api.elasticpath.com/v2/orders/:id \
    -H "Authorization: Bearer XXXX" \
    -H "Content-Type: application/json" \
    -d $'{
      "data": {
        "type": "order",
        "status": "cancelled"
        }
      }
    }'
```

### Response example

`200 OK`

```json
{
    "data": {
        "type": "order",
        "id": "50ca1ec7-cb04-45f0-b7a9-3613ef7c23d3",
        "status": "cancelled",
        "payment": "authorized",
        "shipping": "unfulfilled",
        "anonymized": false,
        "customer": {
            "name": "Andy",
            "email": "andy@example.com"
        },
        "shipping_address": {
            "first_name": "Andy",
            "last_name": "Dwyer",
            "phone_number": "123-456-1111",
            "company_name": "Elasticpath",
            "line_1": "1234 Disney Drive",
            "line_2": "Disney Resort",
            "city": "Anaheim",
            "county": "Orange",
            "region": "CA",
            "postcode": "92802",
            "country": "US",
            "instructions": ""
        },
        "billing_address": {
            "first_name": "Andy",
            "last_name": "Dwyer",
            "company_name": "Elasticpath",
            "line_1": "1234 Disney Drive",
            "line_2": "Disney Resort",
            "city": "Anaheim",
            "county": "Orange",
            "region": "CA",
            "postcode": "92802",
            "country": "US"
        },
        "links": {},
        "meta": {
            "display_price": {
                "with_tax": {
                    "amount": 10000,
                    "currency": "USD",
                    "formatted": "$100.00"
                },
                "without_tax": {
                    "amount": 10000,
                    "currency": "USD",
                    "formatted": "$100.00"
                },
                "tax": {
                    "amount": 0,
                    "currency": "USD",
                    "formatted": "$0.00"
                },
                "discount": {
                    "amount": 0,
                    "currency": "USD",
                    "formatted": "$0.00"
                }
            },
            "timestamps": {
                "created_at": "2022-02-16T00:30:24Z",
                "updated_at": "2022-02-16T00:32:25Z"
            }
        },
        "relationships": {
            "items": {
                "data": [
                    {
                        "type": "item",
                        "id": "df6f9b0c-b4b6-4fbe-b94c-c36bab71f121"
                    }
                ]
            }
        }
    }
}
```

You cannot cancel a payment using manual gateway. You can only cancel an order. The following error response is returned when you can cancel a payment using manual gateway:

```json
 "errors": [
        {
            "status": 422,
            "title": "Unsupported gateway operation",
            "detail": "Cancellation is not supported for Manual payment gateway"
        }
    ]
}
```

## `PUT` Fulfill an Order by ID

You can fulfill a paid order only.

```http
https://useast.api.elasticpath.com/v2/orders/:id
```

### Parameters

#### Path parameters

| Name | Required | Type     | Description                                   |
|:-----|:---------|:---------|:----------------------------------------------|
| `id` | Required | `string` | The ID of the order that you want to fulfill. |

#### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

#### Body

| Name       | Required | Type     | Description                               |
|:-----------|:---------|:---------|:------------------------------------------|
| `type`     | Required | `string` | The type of the resource. You must use `order`. |
| `shipping` | Required | `string` | The shipping status of the order. You can only update the `shipping` status to `fulfilled`. |

### Request example

```bash
curl -X PUT https://useast.api.elasticpath.com/v2/orders/:id \
    -H "Authorization: Bearer XXXX" \
    -H "Content-Type: application/json" \
    -d $ {
      "data": {
        "type": "order",
        "shipping": "fulfilled"
        }
      }
```

### Response example

`200 OK`

```json
{
    "data": {
        "type": "order",
        "id": "369ad4a4-ee67-48b0-x347-t50a6e61d83d",
        "status": "complete",
        "payment": "paid",
        "shipping": "fulfilled",
        "customer": {
            "name": "Mr John Doe",
            "email": "johndoe@example.com"
        },
        "shipping_address": {
            "first_name": "James",
            "last_name": "Doe",
            "phone_number": "",
            "company_name": "",
            "line_1": "1234 Disney Drive",
            "line_2": "Disney Resort",
            "city": "Anaheim",
            "county": "Orange",
            "region": "CA",
            "postcode": "92802",
            "country": "US",
            "instructions": ""
        },
        "billing_address": {
            "first_name": "John",
            "last_name": "Doe",
            "company_name": "",
            "line_1": "1234 Disney Drive",
            "line_2": "Disney Resort",
            "city": "Anaheim",
            "county": "Orange",
            "region": "CA",
            "postcode": "92802",
            "country": "US"
        },
        "links": {},
        "meta": {
            "display_price": {
                "with_tax": {
                    "amount": 237500,
                    "currency": "USD",
                    "formatted": "$2175.00"
                },
                "without_tax": {
                    "amount": 237500,
                    "currency": "USD",
                    "formatted": "$2175.00"
                }
            },
            "timestamps": {
                "created_at": "2018-04-16T10:11:59.715Z",
                "updated_at": "2018-04-16T10:11:59.715Z"
            }
        },
        "relationships": {
            "items": {
                "data": [
                    {
                        "type": "item",
                        "id": "de9fddf5-011b-4485-abf8-ebb8f53c39ff"
                    }
                ]
            }
        }
    }
}
```
