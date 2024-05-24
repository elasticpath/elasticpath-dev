---
title: Create a wishlist resource
nav_label: Create a wishlist resource
sidebar_position: 6
---

In your store or organization, you can provide customers with one or more wishlists. Use Flows to create a wishlist resource and associate it with the product and customer resources.

## Prerequisites

If you want to follow along, you need the following items:

- A Composable Commerce account and the Client ID and Client Secret of your store
- An [access token](https://beta.elasticpath.dev/guides/Getting-Started/your-first-api-request#get-an-access-token)
- Good understanding of object-oriented programming or JavaScript.

## Step-by-step walkthrough

1. Create a Flow that contains your wishlist object.
2. Create products Field to store the customerʼs desired products.
3. Create empty Entries to associate with products.
4. Create a relationship between an Entry and a product. This is created every time a customer adds a product to a wishlist.
5. Associate a wishlist with a customer by adding a customers Flow
6. Create a one-to-many relationship between a customer and a wishlist.

### Create a new custom Flow

Using the Custom Data (Flows) API, go ahead and create a flow for `Wishlist`.

```sh
curl -X POST "https://useast.api.elasticpath.com/v2/flows" \
     -H "Authorization: XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
      "data": {
        "type": "flow",
        "name": "wishlist",
        "slug": "wishlist",
        "description": "Allow customers to store products they want to purchase at a later date",
        "enabled": true
      }
    }'
```

Make sure to take note of the Flow ID returned. You must replace `WISHLIST-FLOW-ID` in the following example with the Flow ID.

### Tell a wishlist it has Products (create a Flow Field)

In this step, we create a field for `products`. This field stores the customer’s desired products.

```sh
curl -X POST "https://useast.api.elasticpath.com/v2/fields" \
     -H "Authorization: XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
      "data": {
        "type": "field",
        "name": "Products",
        "slug": "products",
        "field_type": "relationship",
        "validation_rules": [{
          "type": "one-to-many",
          "to": "product"
        }],
        "description": "Wishlist Products",
        "required": false,
        "enabled": true,
        "relationships": {
          "flow": {
            "data": {
              "type": "flow",
              "id": "WISHLIST-FLOW-ID"
            }
          }
        }
      }
    }
```

### Create an empty wishlist (Flow Entry)

With our custom Flow configured, we next create an empty Entry so we can associate products.

```sh
curl -X POST "https://useast.api.elasticpath.com/v2/flows/wishlist/entries" \
     -H "Authorization: XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
      "data": {
        "type": "entry"
      }
    }'
```

### Add Product to wishlist

With our custom Flow entry, we can now associate products with a wishlist entry. You need `ENTRY-ID` and `PRODUCT-FIELD-SLUG` specified previously to complete this request.

```sh
curl -X POST https://useast.api.elasticpath.com/v2/flows/wishlist/entries/:entry-id/relationships/:product-field-slug \
     -H "Authorization: XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
      "data": [
        {
            "type": "product",
            "id": "ba9ba29d-06da-4ba9-9e2e-f0e776703324"
        }
      ]
    }'
```

### Get all wishlists

```sh
curl https://useast.api.elasticpath.com/v2/flows/wishlist/entries \
     -H "Authorization: Bearer XXXX"
```

The response contains the associated products **per entry** as seen in the following example.

```json
{
  "data": {
    "id": "ENTRY-ID",
    "type": "entry",
    "relationships": {
      "products": {
        "data": [
          {
            "type": "product",
            "id": "ba9ba29d-06da-4ba9-9e2e-f0e776703324"
          }]
      }
    }
  }
}
```

Due to the implicit grant type, it is important we connect wishlist and customers. We do that next by extending the customer resource.

### Extend the Customers Entity (create a Customer Flow)

We now need to associate a wishlist to a customer.

If you already have a Flow for customers, skip this step.

```sh
curl -X POST https://useast.api.elasticpath.com/v2/flows \
     -H "Authorization: XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
      "data": {
        "type": "flow",
        "name": "Customers",
        "slug": "customers",
        "description": "Extends the default customer object",
        "enabled": true
      }
    }'
```

### Link a customer to a wishlist (configure relationship)

Now let’s create the relationships field that links a customer to a wishlist. We’re going to create a one-to-many relationship because we might want customers to create multiple wishlists:

```sh
curl -X POST https://useast.api.elasticpath.com/v2/fields \
     -H "Authorization: XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
      "data": {
        "type": "field",
        "name": "Wishlists",
        "slug": "wishlists",
        "field_type": "relationship",
        "validation_rules": [{
          "type": "one-to-many",
          "to": "product"
        }],
        "description": "Customers wishlists",
        "required": false,
        "enabled": true,
        "relationships": {
          "flow": {
            "data": {
              "type": "flow",
              "id": “CUSTOMER-FLOW-ID"
            }
          }
        }
      }
    }'
```

We now have the ability to send updates to customers, including their relationships:

```sh
curl -X POST https://useast.api.elasticpath.com/v2/customers/:customer-id/relationships/wishlists \
    -H "Authorization: Bearer XXXX" \
    -d $'{
     "data": [{
        "type": "wishlist",
        "id": "WISHLIST-ENTRY-ID}"
      }]
    }'
```

### Get a customerʼs wishlists

We saved the wishlist to a customer, so when we make API calls to get that customer we see the wishlist(s) directly on the customer data object. Donʼt forget to set `?include=wishlists` to get the wishlist objects.

```sh
curl -X GET https://useast.api.elasticpath.com/v2/customers/:customer-id?include=wishlists \
     -H "Authorization: Bearer XXXX"
```

The response looks like this:

```json
{
  "data": {
    "id": "c8c1c511-beef-4812-9b7a-9f92c587217c",
    "type": "customer",
    "name": "Ron Swanson",
    "email": "ron@swanson.com",
    "password": true,
    "relationships": [
      ("wishlists": [
        {
          "type": "entry",
          "id": "WISHLIST-ENTRY-ID"
        }
      ])
    ],
    "included": {
      "wishlists": [
        {
          "id": "wishlist-ENTRY-ID",
          "type": "entry",
          "relationships": {
            "products": {
              "data": [
                {
                  "type": "product",
                  "id": "ba9ba29d-06da-4ba9-9e2e-f0e776703324"
                },
                {
                  "type": "product",
                  "id": "394916e8-1d47-44a0-b5d0-a5a61b71bab8"
                }
              ]
            }
          }
        }
      ]
    }
  }
}
```

## Deleting a wishlist

To delete the wishlist, you need its entry ID. After you have the ID, you can make the following request:

```sh
curl -X DELETE https://useast.api.elasticpath.com/v2/flows/wishlist/entries/:entry-id \
     -H "Authorization: XXXX"
```

After you have done this, delete the relationship which exists on the customer.

## Updating a wishlist

If your customer wants to add another product to their wishlist, you can append a new relationship without affecting the existing related products. If your customer wants to remove a product from their wishlist, follow the delete method.
