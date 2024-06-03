---
title: Manage abandoned carts
nav_label: Manage abandoned carts
sidebar_position: 11
---

There are three aspects of how Commerce carts operate:

1. Carts are not automatically deleted when the cart is checked out, they are therefore, re-usable.
2. Existing cart sessions are automatically deleted after seven days.
3. Cart sessions are identified by a given ID. You do not create a cart session before adding an item to it. Instead, you add an item to a cart by specifying the item and a cart ID. This automatically creates the cart associated with that cart ID and add the item.

Based on these facts, we need to store the fact that:

1. A cart session has been created.
2. A cart session has been deleted.
3. A cart session has been used to checkout.

If we can store that information somewhere, we can build an up-to-date list of cart sessions which have not been checked out or deleted. Our Flows feature can be used for this purpose, and we learn how to do that in the following section.

## Prerequisites

If you want to follow along, you need the following items:

- A Composable Commerce account and the Client ID and Client Secret of your store
- An [access token](https://beta.elasticpath.dev/guides/Getting-Started/your-first-api-request#get-an-access-token)

## Summary of steps required

1. Create a custom Flow for abandoned carts:
    1. Create abandoned carts Flow.
    2. Create a cart-id and a date-created Fields.
    3. Create an Entry to store each new cart session.
2. Add logic in case the abandon cart is checked out:
    1. Delete the cart.
    2. Delete the Flow Entry with that cart-id.
3. Add logic to update abandoned carts Flow after seven days:
    1. `GET` all entries on the abandoned-cart flow.
    2. Loop over each entry and check the created_at date.
    3. If the created_at date is more than seven days ago, remove the entry.

## Step-by-step walkthrough

You can use Commerce Manager to create and manage Flows, but we explain how to do it through API calls.

### Create a custom Flow (abandoned carts)

You first create a Flow called "Abandoned Carts". Make sure to note the returned ID of the created Flow, as we need it in the next step. You can find the full reference for this call in our API Reference.

```sh
curl -X POST https://useast.api.elasticpath.com/v2/flows \
     -H "Authorization: XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
        "data": {
          "type": "flow",
          "name": "Abandoned Carts",
          "slug": "abandoned-carts",
          "description": "Entity to hold abandoned cart information",
          "enabled": true
        }
     }'
```

### Create a Flow Field for cart IDs

Letʼs create a Field to hold our cart IDs for carts that have been abandoned and a field to hold the date the cart session was created. You can find the full reference for the call to add a Flow Field in our API Reference.

```sh
curl -X POST https://useast.api.elasticpath.com/v2/fields \
     -H "Authorization: XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
      "data": {
        "type": "field",
        "name": "Cart ID",
        "slug": "cart-id",
        "field_type": "string",
        "description": "Abandoned cart ID",
        "required": false,
        "default": "",
        "enabled": true,
        "omit_null": false,
        "relationships": {
            "flow": {
                "data": {
                    "type": "flow",
                    "id": "FLOW-ID"
                }
            }
        }
      }
    }'
```

Repeat this call for the `date-created` Field. The Field type in this case is date and the name and `slug` must be changed to reflect the new Field details.

### Set up your application

We have a data structure ready to hold cart IDs. Next we need to identify when to add them and remove them from that list and how to do so.

#### Adding a cart to the list

In order for a cart to be abandoned, it must first be created and used. This is the easiest point at which to add a cart ID to the list. The most basic way to do this is to create a Flow Entry every time a new cart session is created.

You know this is a new cart if there is no Composable Commerce cart already associated with the user of your application. In this case, you make the following `POST` call to `v2/flows/abandoned-carts/entries`.

```sh
curl -X POST https://useast.api.elasticpath.com/v2/flows/:flow-slug/entries \
     -H "Authorization: XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
       "data": {
         "type": "entry",
         "cart-id": "CART_ID_GOES_HERE",
         "date-created": "DATE_GOES_HERE"
       }
     }'
```

### Removing a cart from the list

There are two points where you might want to delete a cart: after checkout and after seven days.

#### After checkout

If the shopper checks out their cart up to seven days after it was first used, we want to make sure that the cart is no longer marked as abandoned. We also want to make sure that cart is deleted so there is no conflict in cart sessions.

You can add two calls from your application to Composable Commerce after the user has successfully checked out:

1. Delete the cart (see the Carts API).
2. Delete the Flow Entry for that cart ID:

```sh
curl -X DELETE https://useast.api.elasticpath.com/v2/flows/:flow-slug/entries/:entry-id \
    -H "Authorization: Bearer XXXX"
```

To make this call, you first need to fetch the Flow Entries, loop through them, and check if the cart ID is present in any of the Entries. If you find it, you have the Entry ID, which you can then use in the URL of the `DELETE` call specified previously.

#### After seven days

If the user has not checked out after seven days, the cart session is automatically deleted by Composable Commerce. We want to make sure that our list is kept in line with that fact. Therefore, you can write a short script which runs once a day.

The script needs to perform the following actions:

1. `GET` all entries on the abandoned-cart flow.
2. Loop over each entry and check the date-created.
3. If the date-created is more than seven days ago, remove the entry.

## Related Resources

- [Custom Data (Flows)](https://beta.elasticpath.dev/docs/commerce-manager/flows)
- [Custom Data (Flows) API](https://beta.elasticpath.dev/docs/api/flows/flows-service-introduction)
- [Extend a resource with custom data](/docs/commerce-manager/flows/)
