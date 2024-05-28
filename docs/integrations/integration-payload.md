---
title: Integration Payload
nav_label: Integration Payload
nav_position: 40
---

## Webhooks

The payload delivered to your webhook `url` contains information about the fired event.

The payload attributes and types are defined in the following table.

| Attribute      | Type                             | Description                                                                                       |
| :------------- | :------------------------------- | :------------------------------------------------------------------------------------------------ |
| `id`           | `string`                         | A unique ID for this event.                                                                       |
| `integration`  | `object`                         | The events `integration_type` being fired.                                                        |
| `triggered_by` | [`string`](/docs/api/integrations/integrations-introduction#observable-events) | The [observable event](/docs/api/integrations/integrations-introduction#observable-events) that triggered this event.                           |
| `attempt`      | `integer`                        | The number of attempts to deliver this event.                                                     |
| `resources`    | `string`                         | The resources affected by this event. This field is now deprecated. Please use `payload` instead. |
| `payload`      | `object`                         | The resources affected by this event.                                                             |

{% callout %}
Store-level events contain `store_id` and `org_id` whereas, organization-level events contain only `org_id`.
{% /callout %}

### Example: Typical payload

The following example payload [observes](/docs/api/integrations/integrations-introduction#observable-events) the `order.paid` event. The configured URL receives the following payload.

```javascript
{
  "id": "21a361c9-b117-4d16-be2d-5ed2dbdaa95b",
  "triggered_by": "order.paid",
  "attempt": 1,
  "integration": {
    "id": "af7bbcc7-f77f-4a8f-abdb-4f039c5c9d81",
    "integration_type": "webhook",
    "name": "Order paid notification",
    "description": "Fire an event on order paid"
  },
  "resources": "{\"data\":{\"type\":\"order\",\"id\":\"1d67160d-dacb-43ed-80ef-c3c4e7ddf764\",\"status\":\"complete\",\"payment\":\"paid\",\"shipping\":\"unfulfilled\",\"customer\":{\"name\":\"Ron Swanson\",\"email\":\"ron.swanson@moltin.com\"},\"shipping_address\":{\"first_name\":\"Jack\",\"last_name\":\"Macdowall\",\"phone_number\":\"123456789\",\"company_name\":\"Macdowalls\",\"line_1\":\"Second Floor, British India House\",\"line_2\":\"15 Carliol Square\",\"city\":\"Newcastle upon Tyne\",\"postcode\":\"NE1 6UF\",\"county\":\"Tyne and Wear\",\"country\":\"GB\",\"instructions\":\"Leave in porch\"},\"billing_address\":{\"first_name\":\"Jack\",\"last_name\":\"Macdowall\",\"company_name\":\"Macdowalls\",\"line_1\":\"Second Floor, British India House\",\"line_2\":\"15 Carliol Square\",\"city\":\"Newcastle upon Tyne\",\"postcode\":\"NE1 6UF\",\"county\":\"Tyne and Wear\",\"country\":\"GB\"},\"links\":{},\"meta\":{\"display_price\":{\"with_tax\":{\"amount\":10000,\"currency\":\"GBP\",\"formatted\":\"£100.00\"},\"without_tax\":{\"amount\":10000,\"currency\":\"GBP\",\"formatted\":\"£100.00\"},\"tax\":{\"amount\":0,\"currency\":\"GBP\",\"formatted\":\"£0.00\"}},\"timestamps\":{\"created_at\":\"2019-07-04T11:12:23Z\",\"updated_at\":\"2019-07-04T11:12:23Z\"}},\"relationships\":{\"items\":{\"data\":[{\"type\":\"item\",\"id\":\"395763ee-1878-4aa0-a7a2-8d4877310d6b\"}]}}},\"included\":{\"items\":[{\"type\":\"order_item\",\"id\":\"395763ee-1878-4aa0-a7a2-8d4877310d6b\",\"quantity\":1,\"product_id\":\"4f28f222-aa5b-442c-9ce9-c223dc7cf15a\",\"name\":\"Spam Fritters\",\"sku\":\"spam-fritters-0716\",\"unit_price\":{\"amount\":10000,\"currency\":\"GBP\",\"includes_tax\":false},\"value\":{\"amount\":10000,\"currency\":\"GBP\",\"includes_tax\":false},\"links\":{},\"meta\":{\"display_price\":{\"with_tax\":{\"unit\":{\"amount\":10000,\"currency\":\"GBP\",\"formatted\":\"£100.00\"},\"value\":{\"amount\":10000,\"currency\":\"GBP\",\"formatted\":\"£100.00\"}},\"without_tax\":{\"unit\":{\"amount\":10000,\"currency\":\"GBP\",\"formatted\":\"£100.00\"},\"value\":{\"amount\":10000,\"currency\":\"GBP\",\"formatted\":\"£100.00\"}},\"tax\":{\"unit\":{\"amount\":0,\"currency\":\"GBP\",\"formatted\":\"£0.00\"},\"value\":{\"amount\":0,\"currency\":\"GBP\",\"formatted\":\"£0.00\"}}},\"timestamps\":{\"created_at\":\"2019-07-04T11:12:23Z\",\"updated_at\":\"2019-07-04T11:12:23Z\"}},\"relationships\":{\"cart_item\":{\"data\":{\"type\":\"cart_item\",\"id\":\"a498b15a-2cc7-49ea-93b3-22143bb403ac\"}}}}]}}",
  "payload": {
    "data": {
      "type": "order",
      "id": "1d67160d-dacb-43ed-80ef-c3c4e7ddf764",
      "status": "complete",
      "payment": "paid",
      "shipping": "unfulfilled",
      "customer": {
        "name": "Ron Swanson",
        "email": "ron.swanson@moltin.com"
      },
      "shipping_address": {
        "first_name": "Jack",
        "last_name": "Macdowall",
        "phone_number": "123456789",
        "company_name": "Macdowalls",
        "line_1": "Second Floor, British India House",
        "line_2": "15 Carliol Square",
        "city": "Newcastle upon Tyne",
        "postcode": "NE1 6UF",
        "county": "Tyne and Wear",
        "country": "GB",
        "instructions": "Leave in porch"
      },
      "billing_address": {
        "first_name": "Jack",
        "last_name": "Macdowall",
        "company_name": "Macdowalls",
        "line_1": "Second Floor, British India House",
        "line_2": "15 Carliol Square",
        "city": "Newcastle upon Tyne",
        "postcode": "NE1 6UF",
        "county": "Tyne and Wear",
        "country": "GB"
      },
      "links": {},
      "meta": {
        "display_price": {
          "with_tax": {
            "amount": 10000,
            "currency": "GBP",
            "formatted": "£100.00"
          },
          "without_tax": {
            "amount": 10000,
            "currency": "GBP",
            "formatted": "£100.00"
          },
          "tax": {
            "amount": 0,
            "currency": "GBP",
            "formatted": "£0.00"
          }
        },
        "timestamps": {
          "created_at": "2019-07-04T11:12:23Z",
          "updated_at": "2019-07-04T11:12:23Z"
        }
      },
      "relationships": {
        "items": {
          "data": [
            {
              "type": "item",
              "id": "395763ee-1878-4aa0-a7a2-8d4877310d6b"
            }
          ]
        }
      }
    },
    "included": {
      "items": [
        {
          "type": "order_item",
          "id": "395763ee-1878-4aa0-a7a2-8d4877310d6b",
          "quantity": 1,
          "product_id": "4f28f222-aa5b-442c-9ce9-c223dc7cf15a",
          "name": "Spam Fritters",
          "sku": "spam-fritters-0716",
          "unit_price": {
            "amount": 10000,
            "currency": "GBP",
            "includes_tax": false
          },
          "value": {
            "amount": 10000,
            "currency": "GBP",
            "includes_tax": false
          },
          "links": {},
          "meta": {
            "display_price": {
              "with_tax": {
                "unit": {
                  "amount": 10000,
                  "currency": "GBP",
                  "formatted": "£100.00"
                },
                "value": {
                  "amount": 10000,
                  "currency": "GBP",
                  "formatted": "£100.00"
                }
              },
              "without_tax": {
                "unit": {
                  "amount": 10000,
                  "currency": "GBP",
                  "formatted": "£100.00"
                },
                "value": {
                  "amount": 10000,
                  "currency": "GBP",
                  "formatted": "£100.00"
                }
              },
              "tax": {
                "unit": {
                  "amount": 0,
                  "currency": "GBP",
                  "formatted": "£0.00"
                },
                "value": {
                  "amount": 0,
                  "currency": "GBP",
                  "formatted": "£0.00"
                }
              }
            },
            "timestamps": {
              "created_at": "2019-07-04T11:12:23Z",
              "updated_at": "2019-07-04T11:12:23Z"
            }
          },
          "relationships": {
            "cart_item": {
              "data": {
                "type": "cart_item",
                "id": "a498b15a-2cc7-49ea-93b3-22143bb403ac"
              }
            }
          }
        }
      ]
    }
  },
  "configuration": {
    "secret_key": "secret_squirrel",
    "url": "https://webhook.url"
  }
}
```

### Example: Deleted resources payload

When resources are deleted and you observe an event, you receive a payload which **only** \__contains the resource type and ID_.\_

```javascript
{
  "id": "c138854a-5311-4543-a368-01e099f5519b",
  "triggered_by": "product.deleted",
  "attempt": 1,
  "integration": {
    "id": "4596d5e1-26b6-444a-964d-2b6ec46477fd",
    "integration_type": "webhook",
    "name": "Product deleted notification",
    "description": "Let me know when products are deleted from my store."
  },
  "resources": {
    "id": "a34a378b-2c39-41e4-a240-6b7e65f5bb55",
    "type": "product"
  },
  "payload": {
    "type": "product",
    "id": "a34a378b-2c39-41e4-a240-6b7e65f5bb55"
  },
  "configuration": {
    "secret_key": "secret_squirrel",
    "url": "https://webhook.url"
  }
}
```

## Message Queue Services

The payload of messages delivered to your message queue contains information about the fired event. The information takes the form of a standard cloud event.

The following table defines the payload attributes and types:

| Attribute       | Type                             | Description                                                             |
| :-------------- | :------------------------------- | :---------------------------------------------------------------------- |
| `id`            | `string`                         | A unique ID for this event.                                             |
| `integrationid` | `string`                         | The ID of the integration being fired.                                  |
| `type`          | [`string`](/docs/api/integrations/integrations-introduction#observable-events) | The [observable event](/docs/api/integrations/integrations-introduction#observable-events) that triggered this event. |
| `data`          | `object`                         | The resource affected by this event.                                    |

### Example: Typical payload

The following example payload [observes](/docs/api/integrations/integrations-introduction#observable-events) the `cart.updated` event. The configured queue receives the following message payload:

```javascript
{
  "data": {
    "description": "",
    "id": "a-cart-id",
    "links": {
      "self": "https://epcc-integration.global.ssl.fastly.net/v2/carts/a-cart-id"
    },
    "meta": {
      "display_price": {
        "discount": {
          "amount": 0,
          "currency": "USD",
          "formatted": "$0.00"
        },
        "tax": {
          "amount": 0,
          "currency": "USD",
          "formatted": "$0.00"
        },
        "with_tax": {
          "amount": 200,
          "currency": "USD",
          "formatted": "$2.00"
        },
        "without_tax": {
          "amount": 200,
          "currency": "USD",
          "formatted": "$2.00"
        }
      },
      "timestamps": {
        "created_at": "2021-05-17T11:30:07Z",
        "expires_at": "2021-05-24T11:31:08Z",
        "updated_at": "2021-05-17T11:31:08Z"
      }
    },
    "name": "Cart",
    "relationships": {
      "customers": {},
      "items": {
        "data": [
          {
            "id": "4d28bc2b-9db3-4c96-801b-df0ac5b41552",
            "type": "custom_item"
          }
        ]
      }
    },
    "type": "cart"
  },
  "datacontenttype": "application/json",
  "id": "9a21fb54-6c3b-432a-bade-82a60da6b59a",
  "integrationid": "e17db0d8-467b-4bf3-9c26-3dfe8b96e9d7",
  "source": "https://epcc-integration.global.ssl.fastly.net",
  "specversion": "1.0",
  "storeid": "b33e328f-31a8-4d57-b0a3-ebf1039b3756",
  "type": "cart.updated"
}
```

### Example: Deleted resources payload

When resources are deleted, and you observe an event, the resource delivered in the message only contains the resource type and ID.

```javascript
{
  "data": {
    "id": "a2733958-1273-4385-9a05-f1ca7684f760",
    "type": "product"
  },
  "datacontenttype": "application/json",
  "id": "efca76df-9fc1-4434-ba26-82339d9b723c",
  "integrationid": "e17db0d8-467b-4bf3-9c26-3dfe8b96e9d7",
  "source": "https://epcc-integration.global.ssl.fastly.net",
  "specversion": "1.0",
  "storeid": "b33e328f-31a8-4d57-b0a3-ebf1039b3756",
  "type": "product.deleted"
}
```
