---
title: Orders API Overview
nav_label: Orders API Overview
sidebar_position: 1
---

An Order is created through the [checkout](/docs/carts-orders/checkout) endpoint within the `Carts` API.

## The Order Object

The `Order` object is a representation of an order in Composable Commerce.

### Parameters

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | Specifies the unique identifier for this order. |
| `type` | `string` | Specifies the type of object being returned. You must use `order`. |
| `status` | `string` | Specifies the status of the order, such as `incomplete`, `complete`, `processing`, or `cancelled`. |
| `payment` | `string` | Specifies the status of the payment, such as `unpaid`, `authorized`, `paid`, or `refunded`. |
| `shipping` | `string` | Specifies the status of the shipment, such as `fulfilled`, `unfulfilled`. |
| `customer` | `object` | Specifies the customer object associated with this order. |
| `customer.name` | `string` | Specifies the name of the customer. |
| `customer.email` | `string` | Specifies the email address of the customer. |
| `shipping_address` | `object` | Specifies the shipping address object. |
| `shipping_address.first_name` | `string` | Specifies the first name of the address holder. |
| `shipping_address.last_name` | `string` | Specifies the last name of the address holder. |
| `shipping_address.phone_number` | `string` | Specifies the phone number of the address holder. |
| `shipping_address.company_name` | `string` | Specifies the company name. |
| `shipping_address.line_1` | `string` | Specifies the first line of the address. |
| `shipping_address.line_2` | `string` | Specifies the second line of the address. |
| `shipping_address.city` | `string` | Specifies the name of the city in the shipping address. |
| `shipping_address.county` | `string` | Specifies the county of the shipping address. |
| `shipping_address.region` | `string` | Specifies the state, province, or region of the shipping address. |
| `shipping_address.postcode` | `string` | Specifies the postcode or ZIP code of the address. |
| `shipping_address.country` | `string` | Specifies the country in the shipping address. |
| `shipping_address.instructions` | `string` | Specifies any instructions provided with the shipping address. |
| `billing_address` | `object` | Specifies the billing address object. |
| `billing_address.first_name` | `string` | Specifies the first name of the billing address holder. |
| `billing_address.last_name` | `string` | Specifies the last name of the billing address holder. |
| `billing_address.company_name` | `string` | Specifies the billing company name. |
| `billing_address.line_1` | string | Specifies the first line of the billing address. |
| `billing_address.line_2` | `string` | Specifies the second line of the billing address. |
| `billing_address.city` | `string` | Specifies the city. |
| `billing_address.county` | `string` | Specifies the county of the billing address. |
| `billing_address.region` | `string` | Specifies the state, province, or region of the billing address. |
| `billing_address.postcode` | `string` | Specifies the postcode or ZIP code of the billing address. |
| `billing_address.country` | `string` | Specifies the country in the billing address. |
| `custom_inputs` | `object` | The custom text to be added to a product. |
| `links` | `object` | Displays the URLs related to this resource. |
| `meta` | `object` | Displays the additional information [calculated](/guides/How%20To/Carts/calculate-totals) for this order. |
| `meta.display_price` | `object` | Displays the fields related to the totals and currency of this order. |
| `meta.display_price.with_tax` | `object` | Displays the total amount including tax. |
| `meta.display_price.with_tax.amount` | `integer` | Specifies the raw total of this order, including tax. |
| `meta.display_price.with_tax.currency` | `string` | Specifies the currency set for this order. |
| `meta.display_price.with_tax.formatted` | `string` | Specifies the tax inclusive formatted total based on the currency. |
| `meta.display_price.without_tax` | `object` | Specifies the tax exclusive totals. |
| `meta.display_price.without_tax.amount` | `integer` | Specifies the raw total of this cart, excluding tax. |
| `meta.display_price.without_tax.currency` | `string` | Specifies the currency set for this order. |
| `meta.display_price.without_tax.formatted` | `string` | Specifies the tax exclusive formatted total based on the currency. |
| `meta.timestamps` | `object` | Displays the timestamps for this order. |
| `meta.timestamps.created_at` | `string` | Specifies the creation date of this order. |
| `meta.timestamps.updated_at` | `string` | Specifies the last updated date of this order. |
| `meta.timestamps.updated_at` | `string` | Specifies the last updated date of this order. |
| `relationships` | `object` | Displays the relationships related to this resource. |
| `relationships.items` | `object` | Specifies the order items object. |
| `relationships.items.data` | `array` | Displays an array of order items. |
| `relationships.items.data.type` | `string` | Represents the type of object being returned. For example, `item`. |
| `relationships.items.data.id` | `string` | Specifies the unique identifier for this order item. |
| `relationships.customer` | `object` | Specifies the customer object. |
| `relationships.customer.data` | `object` | Specifies the customer object associated with this order. |
| `relationships.customer.data.type` | `string` | Represents the type of object being returned. For example, `customer` |
| `relationships.customer.data.id` | `string` | Specifies the unique identifier for this customer. |
| `relationships.account` | `object` | Specifies the account object. |
| `relationships.account.data` | `object` | Specifies the account object associated with the order. |
| `relationships.account.data.type` | `string` | Specifies the type of object returned. Use `account` for this setting. |
| `relationships.account.data.id` | `string` | Specifies the unique identifier for the account. |
| `relationships.account_member` | `object` | Specifies the `account_member` object. |
| `relationships.account_member.data` | `object` | Specifies the `account_member` object associated with the order. |
| `relationships.account_member.data.type` | `string` | Represents the type of object returned. Use `account-member` for this setting. |
| `relationships.account_member.data.id` | `string` | Specifies the unique identifier for the account member. |
| `included` | `object` | Specifies the included resources. |
| `included.accounts` | `array` | Displays an array of accounts that exists in the relationships of this order.  |
| `included.accounts[].id` | `string` | Specifies the unique identifier for the account. |
| `included.accounts[].type` | `string` | Specifies the type of object returned. Use `account` for this setting. |
| `included.accounts[].name` | `string` | Specifies the name of the account. |
| `included.accounts[].legal_name` | `string` | Specifies the legal name of the account. |
| `included.account_members` | `array` | Displays an array of account members that exists in the relationships of this order. |
| `included.account_members[].id` | `string` |Specifies the unique identifier for the account member. |
| `included.account_members[].type` | `string` | Specifies the type of object returned. Use `account-member`  for this setting. |
| `included.account_members[].name` | `string` | Specifies the name of the account member. |
| `included.account_members[].email` | `string` | Specifies the email address of the account member. |

### Sample object

```javascript
{
  "data": {
      "type": "order",
      "id": "6d809942-da51-4f07-9350-47fe759b2369",
      "status": "incomplete",
      "payment": "unpaid",
      "shipping": "unfulfilled",
      "customer": {
        "name": "Brad",
        "email": "brad@bobley.com"
      },
      "shipping_address": {
        "first_name": "Otis",
        "last_name": "Sedmak",
        "phone_number": "(555) 555-1234",
        "company_name": "Sedmak & Co.",
        "line_1": "1234 Disney Drive",
        "line_2": "Disney Resort",
        "city": "Anaheim",
        "county": "Orange",
        "region": "CA",
        "postcode": "92802",
        "country": "US",
        "instructions": "Leave in porch"
      },
      "billing_address": {
        "first_name": "Jack",
        "last_name": "Macdowall",
        "company_name": "Macdowalls",
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
            "amount": 45598,
            "currency": "USD",
            "formatted": "$455.98"
          },
          "without_tax": {
            "amount": 45598,
            "currency": "USD",
            "formatted": "$455.98"
          }
        },
        "timestamps": {
          "created_at": "2017-09-25T14:13:18.738Z",
          "updated_at": "2017-09-25T14:13:18.738Z"
        }
      },
      "relationships": {
        "items": {
          "data": [
            {
              "type": "item",
              "id": "52a88bad-16c4-49ff-8684-089cec3e3f35"
            }
          ]
        },
        "customer": {
          "data": {
            "type": "customer",
            "id": "c8c1c511-beef-4812-9b7a-9f92c587217c"
          }
        },
        "account": {
          "data": {
            "type": "account",
            "id": "b6e47478-7e7f-4127-b7e9-4a255564ae68"
          }
        },
        "account_member": {
          "data": {
            "type": "account-member",
            "id": "c8c1c511-beef-4812-9b7a-9f92c587217c"
          }
        }
      },
      "included": {
        "accounts": [{
          "id": "b6e47478-7e7f-4127-b7e9-4a255564ae68",
          "type": "account",
          "name": "acc-name",
          "legal_name": "acc-legal-name",
          "registration_id": "00000000-0000-1000-8000-000f00000300"
        }],
        "account_members": [{
          "id": "c8c1c511-beef-4812-9b7a-9f92c587217c",
          "type": "account_member",
          "name": "John Smith",
          "email": "john@smith.com"
        }]
      }
    }
}
```

:::note

* `with_tax` and `without_tax` should be integers without currency decimals, so a value of `10000` would be equivalent to `$100.00`.
* `product_id` and `product_sku` match orders where matching product has been ordered (but they cannot have been the only ordered items).
* `eq` shouldn’t be used with dates; instead, use a range (`gt` and `lt`) if you want orders for a specific day. Filtering on exact timestamps is not supported.
* A request containing filters must not exceed 8KB.
:::


## Payments

After an order is created, it is marked unpaid. See [Paying for an order](/docs/carts-orders/payments/paying-for-an-order/overview) for how you can mark this order as paid.
