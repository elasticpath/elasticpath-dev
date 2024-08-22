---
title: Extend cart and order resources
nav_label: Extend cart and order resources
sidebar_position: 9
---

Extend the cart and order resources to add shipping provider and a consignment number to apply a shipping charge and to display shipping details on the order. You might have to do additional programming on the front end to ensure seamless checkout experience.

Commerce does not provide any shipping capabilities by default. This example explains a simple use case with couple of shipping options that are valid across all scenarios.

This example only describes `flows` API calls and does not provide code that you may need to work with shipping provider and charges and explains how to:

1. Create a custom flow to store shipping providers.
1. Extend the existing resource `carts`, so that you can charge your customer for shipping.
1. Extend an existing resource `orders`, so that the order details includes shipping provider details and the consignment number for each order charged with a shipping fee.

## Prerequisites

Ensure that you have the following:

- A Commerce account and the Client ID and Client Secret for your store, available from [Commerce Manager](https://beta.elasticpath.dev/ui).
- An [access token](https://beta.elasticpath.dev/guides/Getting-Started/your-first-api-request#get-an-access-token).
- Basic understanding of object-oriented programming or JavaScript.
- A store set up with products and payment details.

This scenario assumes you already have an order. The order created in this example is unpaid. However, you typically need to authorize and capture the payment for all orders.

## High-level Procedure

1. Create a custom flow for shipping providers by doing the following:

    1. Create shipping provider flow.
    1. Create name and cost fields.

1. Extend orders flow by doing the following:

    1. Create consignment ID field.
    1. Create shipping provider relationship field that links to the orders flow.

1. Create shipping providers by creating entries that store your shipping providers.

1. Extend a cart by doing the following:

    1. Extend carts flow.
    1. Create shipping provider relationship field that links to the carts flow.

1. Create an order by doing the following:

    1. Get a cart.
    2. Add the shipping provider to the cart.
    3. Add an item to the cart using the product ID.
    4. Add a custom item, such as shipping charge, to the cart.
    5. Check out the cart with the customer object.
    6. Add the shipping provider to the order.
    7. Update the order with the consignment ID returned by the shipper.
    8. Get the order with the shipping details.

## Step-by-step walkthrough

1. Create a custom flow for shipping providers by making the following request:

    ```sh
    curl -X POST https://useast.api.elasticpath.com/v2/flows \
         -H "Authorization:XXXX" \
         -H "Content-Type:application/json" \
         -d $'{
            "data":{
              "type": "flow",
              "name": "shipping_provider",
              "slug": "shipping_provider",
              "description": "Creates a new shipping provider resource",
              "enabled": true
            }
         }'
    ```

1. Create `Name` field for the shipping provider by making the following request:

    ```sh
        curl -X POST https://useast.api.elasticpath.com/v2/fields \
             -H "Authorization: XXXX" \
             -H "Content-Type: application/json" \
             -d $'{
          	"data": {
            	  "type": "field",
            	  "name": "Name",
            	  "slug": "name",
            	  "field_type": "string",
            	  "description": "Shipping provider name",
            	  "required": false,
            	  "default": 0,
            	  "enabled": true,
            	  "order": 1,
            	  "relationships": {
                     "flow": {
                       "data": {
                         "type": "flow",
                         "id": "SHIPPING-PROVIDER-FLOW-ID"
                        }
                    }
                }
            }
        }'
    ```

    Replace `SHIPPING-PROVIDER-FLOW-ID` with the ID that is generated for the flow in the previous step.

1. Repeat step 2 and create a **Cost** field to store the shipping charges.

    :::caution
    - Define cost as integer type.
    - If you already have a flow for your existing resource, skip the following step. You need the ID of the orders flow to continue.
    :::

1. Create a new core flow that extends the orders resource by making the following request:

    ```sh
    curl -X POST https://useast.api.elasticpath.com/v2/flows \
         -H "Authorization: XXXX" \
         -H "Content-Type: application/json" \
         -d $'{
            "data": {
              "type": "flow",
              "name": "orders",
              "slug": "orders",
              "description": "Extending the orders resource",
              "enabled": true
            }
         }'
    ```

    The `slug` must match the plural name of the resource you extend, such as `orders`. Note the flow ID in the response to use when creating a flow field.

1. Create a `Consignment ID` field to store and display the consignment number for each order as in the following example:

    ```sh
    curl -X POST https://useast.api.elasticpath.com/v2/fields \
         -H "Authorization: XXXX" \
         -H "Content-Type: application/json" \
         -d $'{
              "data": {
                "type": "field",
                "name": "Consignment ID",
                "slug": "consignment-id",
                "field_type": "string",
                "description": "Consignment number for each order",
                "required": false,
                "default": 0,
                "enabled": true,
                "order": 1,
                "relationships": {
                    "flow": {
                        "data": {
                            "type": "flow",
                            "id": "ORDERS-FLOW-ID"
            }
          }
        }
      }
    }'
    ```

    Replace `ORDERS-FLOW-ID` with the ID that is generated for the flow in the previous step. The `field` value is returned when you call the object you extend.

1. Create a `Shipping Provider` relationship field as in the following example:

    ```sh
    curl -X POST https://useast.api.elasticpath.com/v2/fields \
         -H "Authorization: XXXX" \
         -H "Content-Type: application/json" \
         -d $'{
          "data":{
          "type": "field",
          "name": "Shipping Provider",
          "slug": "shipping-provider",
          "description": "The shipping provider used to send the order",
          "required": false,
          "field_type": "relationship",
          "relationships": {
            "flow": {
              "data": {
                "type": "flow",
                "id": "ORDERS-FLOW-ID"
              }
            }
          },
          "validation_rules": [{
            "type": "one-to-one",
            "to": "shipping-provider"
          }]
        }
       }'
    ```

    This scenario is based on the assumption that every order can only have one shipping provider associated with it. To do this, you must add a relationship field on the `Orders` flow. You must also include a `one-to-one` relationship as part of the validation rules between the `orders` and `shipping provider` flows.

1. Create entries for the `Shipping Provider` flow fields that you created in the previous step as in the following example:

    ```sh
    curl -X POST https://useast.api.elasticpath.com/v2/flows/shipping_provider/entries \
         -H "Authorization: XXXX" \
         -H "Content-Type: application/json" \
         -d $'{
            "data": {
       	    "type": "entry",
            "name": "Ralphio 720",
            "cost": 720
      	   }
    	}'
    ```

      In this example, entries, such as the name of a shipping provider and associated cost of shipping, are added. Note the `entryId` for adding this shipping provider to the `Carts` flow in the next step.

1. If you don’t have any existing flow for the cart resource, create a new core flow for carts that extends your carts resource as in the following example:

    ```sh
    curl -X POST https://useast.api.elasticpath.com/v2/flows \
         -H "Authorization: XXXX" \
         -H "Content-Type: application/json" \
         -d $'{
            "data": {
              "type": "flow",
              "name": "carts",
              "slug": "carts",
              "description": "Extending the carts resource",
              "enabled": true
            }
         }'
    ```

    The slug must match the plural name of the resource that you extend, such as `carts`. Skip this step if you already have a flow for your existing resource. Note the ID of the `carts` flow to use in the next steps.

1. Create a relationship field between the `shipping provider` flow and the `carts` flow as in the following example:

    ```sh
    curl -X POST https://useast.api.elasticpath.com/v2/fields \
         -H "Authorization: XXXX" \
         -H "Content-Type: application/json" \
         -d $'{
         	"data":{
       	  "type": "field",
       	  "name": "Shipping Provider",
       	  "slug": "shipping-provider",
       	  "description": "The shipping provider used to send the order",
       	  "required": false,
       	  "field_type": "relationship",
       	  "relationships":{
            "flow": {
              "data":{
                "type": "flow",
                "id": "CARTS-FLOW-ID"
              }
            }
          },
          "validation_rules": [{
            "type": "one-to-one",
            "to": "shipping-provider"
          }]
        }
       }'
    ```

    You can now see the shipping costs in the cart.

1. Do the following and create an order:

    1. Replace the :cart-reference with a value, such as `1234` in the following request and get the cart:

        ```sh
        curl -X GET https://useast.api.elasticpath.com/v2/carts/:cart-reference \
             -H "Authorization: Bearer XXXX"
        ```

    1. Make the following request with the product id that you created in the store earlier and add the item to the cart:

        ```sh
        curl -X POST https://useast.api.elasticpath.com/v2/carts/:cart-reference/items \
             -H "Authorization: Bearer XXXX" \
             -H "Content-Type: application/json" \
             -d $'{
              "data": {
                  "id": "PRODUCT-ID",
                  "type": "cart_item",
                  "quantity": 1
                }
              }'
        ```

    1. Add the shipping provider to the cart by creating a relationship entry for the `Ralphio 720` as in the following example:

        ```sh
        curl -X POST https://useast.api.elasticpath.com/v2/flows/carts/entries/:cart-reference/relationships/shipping-provider \
             -H "Authorization: Bearer XXXX" \
             -H "Content-Type: application/json" \
             -d $'{
              "data": {
                 "id": "RALPHIO-ENTRY-ID",
                 "type": "entry"
                }
              }'
        ```

    1. Make the following request and add the custom item, `shipping charge`, to the cart:

        ```sh
        curl -X POST https://useast.api.elasticpath.com/v2/carts/:cart-reference/items \
             -H "Authorization: Bearer XXXX" \
             -H "Content-Type: application/json" \
             -d $'{
              "data": {
                "type": "custom_item",
                "name": "Ralphio 720",
                "sku": "ralphio-720",
                "description": "Adds charges for shipping",
                "quantity": 1,
                "price": {
                  "amount": 720
                }
              }
            }'
        ```

    1. To Checkout the cart as an anonymous user, use the customer object and make the following request:

        ```sh
        curl -X POST https://useast.api.elasticpath.com/v2/carts/:cart-reference/checkout \
             -H "Authorization: Bearer XXXX" \
             -H "Content-Type: application/json" \
             -d $'{
               "data": {
                 "customer": {
                   "email": "leslie.knope@gov.com",
                   "name": "Leslie Knope"
                 },
                 "billing_address": {
                   "first_name": "Leslie",
                   "last_name": "Knope",
                   "company_name": "Parks and Recreations Dept.",
                   "line_1": "2nd Floor British India House",
                   "line_2": "15 Carliol Square",
                   "city": "Pawnee",
                   "postcode": "NE1 6UF",
                   "county": "Indiana",
                   "country": "US"
                 },
                 "shipping_address": {
                   "first_name": "Leslie",
                   "last_name": "Knope",
                   "company_name": "Parks and Recreations Dept.",
                   "phone_number": "(555) 555-1234",
                   "line_1": "2nd Floor British India House",
                   "line_2": "15 Carliol Square",
                   "city": "Pawnee",
                   "postcode": "NE1 6UF",
                   "county": "Indiana",
                   "country": "US",
                   "instructions": "Leave with Ron Swanson"
                 }
               }
            }'
        ```

        An order is created with an `orderId`. Note the `orderId` to use in the next step.
    1. To add `Ralphio 720` to the order, make the following request and create a relationship entry for the shipping provider:

        ```sh
        curl -X POST https://useast.api.elasticpath.com/v2/flows/orders/:order-id/relationships/shipping-provider \
             -H "Authorization: Bearer XXXX" \
             -H "Content-Type: application/json" \
             -d $'{
              "data": {
                 "id": "RALPHIO-ENTRY-ID",
                 "type": "entry"
                }
              }'
        ```

        Typically, after the order is sent for shipping, the shipping provider returns a consignment ID by which you can track the shipment.
    1. Make the following request and update the order with the consignment ID:

        ```sh
        curl -X PUT https://useast.api.elasticpath.com/v2/orders/:order-id \
            -H "Authorization: Bearer XXXX" \
            -H "Content-Type: application/json" \
            -d $'{
              "data": {
                "type": "order"
                "consignment-id": "JRTH720666"
                }
              }
            }'
        ```

1. Make the following request and get the order with the shipping details:

    ```sh
    curl -X GET https://useast.api.elasticpath.com/v2/orders/:order-id \
          -H "Authorization: Bearer XXXX"
    ```

    The response provides order details  with the shipping information as in the following example:

    ```json
    {
        "data": {
            "id": "e4d2899e-5ce3-479c-96bf-523bd27b5e2f",
            "type": "order",
            "consignment-id": "JRTH720666",
            "relationships": {
                "items": {
                    "data": [
                        {
                            "type": "item",
                            "id": "cc16271e-bf1a-4fd1-abe0-9ef52b4dcc9d"
                        },
                        {
                            "type": "item",
                            "id": "6b47b1dc-7f32-438b-830a-8ce6665cd69e"
                        }
                    ]
                },
                "shipping-provider": {
                    "data": {
                        "id": "7fa14e44-927a-4f35-a7fc-3fb5e1a9fe7a",
                        "type": "entry"
                    }
                }
            },
            "status": "incomplete",
            "payment": "unpaid",
            "shipping": "unfulfilled",
            "customer": {
                "name": "Leslie Knope",
                "email": "leslie.knope@gov.com"
            },
            "shipping_address": {
                "first_name": "Leslie",
                "last_name": "Knope",
                "phone_number": "(555) 555-1234",
                "company_name": "Parks and Recreations Dept.",
                "line_1": "2nd Floor British India House",
                "line_2": "15 Carliol Square",
                "city": "Pawnee",
                "postcode": "NE1 6UF",
                "county": "Indiana",
                "country": "US",
                "instructions": "Leave with Ron Swanson"
            },
            "billing_address": {
                "first_name": "Leslie",
                "last_name": "Knope",
                "company_name": "Parks and Recreations Dept.",
                "line_1": "2nd Floor British India House",
                "line_2": "15 Carliol Square",
                "city": "Pawnee",
                "postcode": "NE1 6UF",
                "county": "Indiana",
                "country": "US"
            },
            "links": {},
            "meta": {
                "display_price": {
                    "with_tax": {
                        "amount": 7720,
                        "currency": "USD",
                        "formatted": "$77.20"
                    },
                    "without_tax": {
                        "amount": 7720,
                        "currency": "USD",
                        "formatted": "$77.20"
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
                    "created_at": "2021-11-01T17:37:59Z",
                    "updated_at": "2021-11-01T17:44:03Z"
                }
            }
        }
    }
    ```

## Related Resources

- [Custom Data (Flows) Commerce Manager](https://beta.elasticpath.dev/docs/commerce-manager/flows/)
- [Orders Commerce Manager](https://beta.elasticpath.dev/docs/commerce-manager/orders/orders-cm)
- [Checkout workflow](https://beta.elasticpath.dev/docs/api/carts/checkout)
- [Custom Data (Flows) API](https://beta.elasticpath.dev/docs/api/flows/flows-service-introduction)
- [Orders API](https://beta.elasticpath.dev/docs/api/carts/orders)
- [Extend a resource with custom data](/docs/commerce-manager/flows/)
