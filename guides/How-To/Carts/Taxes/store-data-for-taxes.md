---
title: Store data for a tax calculation service
nav_label: Store data for taxes
nav_position: 6
---

After you integrate a tax calculation service with Composable Commerce, you can configure nexus locations. Nexus locations are added to carts to calculate the correct tax rate.

:::note

Tax categories are not covered in this guide.

:::

## Prerequisites

If you want to follow along, you need the following items:

- A Composable Commerce account
- The Client ID and Client Secret of your store
- At least one configured product
- An integrated tax calculation service, such as TaxJar.
- An [access token](/guides/Getting-Started/your-first-api-request)


## Step-by-step walkthrough

The walkthrough assumes that you are using TaxJar as the tax calculation service.

1. Create a custom Flow to store the nexus location.
2. Add Flow Fields to store location details like country, state, zip code, etc.
3. Create Entries for nexus locations you need for your store.
4. Extend the carts resource with the core Flow carts.
5. Create a nexus relationship field that links to the carts Flow.
6. Update checkout flow:
    1. Get a cart.
    2. Add a cart item.
    3. Add checkout logic to call nexus Flow and select the appropriate nexus.
    4. Send nexus details to the TaxJar API. The API sends back the tax rate.
    5. Add a tax item that includes the tax rate.
    6. Update the cart with nexus location.

### Create a custom Flow to store nexus

Weʼll start by creating a custom Flow that stores nexus locations.

```bash
curl -X POST https://useast.api.elasticpath.com/v2/flows \
     -H "Authorization:XXXX" \
     -H "Content-Type:application/json" \
     -d ${
        "data":{
          "type":"flow",
          "name":"Nexus",
          "slug":"nexus",
          "description":"Creates a new object",
          "enabled":true
        }
     }
```

### Create Fields to store nexus location details

The Fields are returned when you call the object youʼve created. Replace `FLOW-ID` with the ID that was generated for the Flow.

In this scenario, we create the fields required by the TaxJar API: Country, State, and Zip. The following example shows how to create the Country field. Repeat the request for the State and Zip field, changing the details accordingly.

```bash
curl -X POST https://useast.api.elasticpath.com/v2/fields \
     -H "Authorization: XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
      "data": {
        "type": "field",
        "name": "Country",
        "slug": "country",
        "field_type": "string",
        "description": "Country name",
        "required": false,
        "default": 0,
        "enabled": true,
        "order": 1,
        "relationships": {
            "flow": {
                "data": {
                    "type": "flow",
                    "id": "NEXUS-FLOW-ID"
                }
            }
        }
      }
    }
```

### Create nexus locations Entries

Entries represent the actual content each Field contains. Create an Entry for every Field added.

The following example adds an Entry for the Country, State, and Zip fields.

```bash
curl -X POST https://useast.api.elasticpath.com/v2/flows/:flowSlug/entries \
     -H "Authorization: XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
       "data": {
         "type": "entry",
         "country": "Canada",
         "state": "Indiana",
         "zip": "46077"
       }
     }
```

### Create a core Flow for carts

Create a new core Flow that extends your carts resource. The slug must match the plural name of the resource you are extending, such as `carts`.

If you already have a Flow for your existing resource, skip this step. You need the ID of the `carts` Flow to continue.

```bash
curl -X POST https://useast.api.elasticpath.com/v2/flows \
     -H "Authorization: XXXX" \
     -H "Content-Type: application/json" \
     -d ${
        "data": {
          "type": "flow",
          "name": "carts",
          "slug": "carts",
          "description": "flow description",
          "enabled": true
        }
     }
```

### Create a nexus relationship Field

Create a relationship between the Nexus Flow and the `carts` Flow. To do this, we need to add a relationship type of a field_type.

```bash
curl -X POST https://useast.api.elasticpath.com/v2/flows \
     -H "Authorization: XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
     	"data":{
   	    "type":"field",
   	    "name":"Nexus",
   	    "slug":"nexus",
   	    "description":"Nexus location",
   	    "required":false,
   	    "field_type":"relationship",
   	    "relationships":{
      	    "flow":{
              "data":{
            	 "type":"flow",
            	 "id":"CARTS-FLOW-ID",
                       }
      		     }
   		   },
   	   "validation_rules": [{
             "type":"one-to-one",
             "to":"nexus"
      }]
   }
```

### Update the checkout flow

Youʼve just created custom fields to store your nexus locations. Update your checkout flow so that you can add it to your cart to apply the correct state tax.

#### Get a cart

```bash
curl -X POST https://useast.api.elasticpath.com/v2/carts/:carts-reference \
     -H "Authorization: XXXX"
```

#### Add a cart item

This scenario assumes that you have already set up at least one product that you can add to the cart. You need the `PRODUCT_ID` and the `:cart-reference` from previous step.

```bash
curl -X POST https://useast.api.elasticpath.com/v2/carts/:cart-reference/items \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d ${
      "data": {
          "id": "PRODUCT-ID",
          "type": "cart_item",
          "quantity": 1
        }
      }
```

#### Add checkout logic to communicate with a tax calculator API

Add checkout logic to call nexus Flow and select the appropriate nexus. Then, send nexus details to the TaxJar API. The API sends you back the tax rate.

#### Add a tax item

Apply the rate returned by the tax calculator API to your cart item.

```bash
curl -X POST https://useast.api.elasticpath.com/v2/carts/:cart-reference/items/:item-id/taxes \
    -H "Content-Type: application/json" \
    -H "Authorization: XXXX" \
    -d ${
        "data": {
            "type": "tax_item",
            "name": "TaxJar tax rate",
            "jurisdiction" : "US",
            "code": "MYTAX01",
            "rate": 0.2
        }
    }
```

#### Update the cart with nexus location

Optionally, you can update your cart so that it displays which nexus location was used for transaction. You need the `ENTRY-ID` of the nexus location you used. In this case, we had one entry for the state of Indiana.

```bash
curl -X POST https://useast.api.elasticpath.com/v2/carts/:cart-reference/relationship/nexus \
    -H "Content-Type: application/json" \
    -H "Authorization: XXXX" \
    -d ${
        "data": {
            "id": "NEXUS-ENTRY-ID",
            "type": "nexus"
        }
    }
```

The response now includes the details of the nexus location applied to the cart.

## Further reading

- [Custom Data (Flows)](/docs/api/flows/flows)
