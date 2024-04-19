---
title: Get Started with Product Experience Manager API
nav_label: Get Started with Product Experience Manager API
sidebar_position: 21
---

:::caution
These endpoints are for Administrator use only. Do not use these endpoints on your customer-facing frontends.
:::

Learn how to create and publish a catalog. A catalog requires at least one hierarchy of products and a price book.

In this walkthrough, you will:

1. Get an access token.
1. Create a hierarchy with three nodes.
1. Create two products and associate them with nodes in the hierarchy.
1. Create a price book with prices for the products in two currencies.
1. Create a catalog that references the hierarchy and price book.
1. Create a catalog rule that describes the context in which to display the catalog.

To create a test catalog in your own environment, cut and paste the sample cURL requests. As you create resources, keep a log of the generated IDs. You will need to refer to them in multiple requests.

| Object name | ID type |
| --- | --- |
| `Major Appliances` | `hierarchyId` |
| `Ranges` | `nodeId` |
| `Electric Ranges` | `nodeId` |
| `Gas Ranges` | `nodeId` |  |
| `BestEver Electric Range` | `productId` |
| `BestEver Gas Range` | `productId` |
| `Preferred Pricing` | `pricebookId` |
| `Ranges Catalog` | `catalogId` |

## Before you begin

Create a store separate from your production store where you can work with the Product Experience Manager APIs. Sign in to the store to get your client ID and secret.

## Get an access token

Get an access token with the grant type `client_credentials`.

```bash
curl -X POST https://useast.api.elasticpath.com/oauth/access_token \
     -d "client_id=<your_id>" \
     -d "client_secret=<your_secret>" \
     -d "grant_type=client_credentials"
```

The JSON response returns the access token. Copy the value of the access token. You will need to pass the token in the header of requests, as shown in the following example.

```bash
    -H "Authorization: Bearer 6b2ec7f3fc4d4b6681a9d2a9e07a4717e09a3b22" \
```

## Create a hierarchy and nodes

Letʼs create the following hierarchy and nodes:

- Major Appliances
    - Ranges
        - Electric Ranges
        - Gas Ranges

### Create the hierarchy

Create the hierarchy called Major Appliances. This is also the root node of the hierarchy.

```bash
curl -X POST https://useast.api.elasticpath.com/pcm/hierarchies/ \
     -H "Authorization: Bearer <your_access_token>" \
     -d $'{
        "data":{
            "type":"hierarchy",
            "attributes":{
                "name": "Major Appliances",
                "description": "Free standing appliances",
                "slug": "Major-Appliances-MA0"
            }
        }
    }'
```

A successful JSON response contains the generated hierarchy ID.

### Create the nodes

Copy the hierarchy ID and insert it in the path of the following request.

```bash
curl -X POST https://useast.api.elasticpath.com/pcm/hierarchies/:hierarchyId/nodes \
     -H "Authorization: Bearer <your_access_token>" \
     -d $'{
        "data": {
            "type": "node",
            "attributes":{
                "name": "Ranges",
                "description": "All stoves and ovens",
                "slug": "Ranges-MA1"
            }
        }
    }'
```

The JSON response contains the generated node ID for Ranges. The node is created as a child of the root node by default. To create the next two nodes as children of Ranges, use the same request with the same hierarchy, but add the node ID in a `relationships` section in the body.

```bash
curl -X POST https://useast.api.elasticpath.com/pcm/hierarchies/:hierarchyId/nodes \
     -H "Authorization: Bearer <your_access_token>" \
     -H "Content-Type: application/json" \
     -d $'{
        "data": {
            "type": "node",
            "attributes":{
                "name": "Electric Ranges",
                "description": "Electric stoves and ovens",
                "slug": "Electric-Ranges-MA2"
            },
            "relationships": {
                "parent": {
                    "data": {
                        "id": "<nodeId of Ranges>",
                        "type": "node"
                    }
                }
            }
        }
    }'
```

```bash
curl -X POST https://useast.api.elasticpath.com/pcm/hierarchies/:hierarchyId/nodes \
     -H "Authorization: Bearer <your_access_token>" \
     -d $'{
        "data": {
            "type": "node",
            "attributes":{
                "name": "Gas Ranges",
                "description": "Gas stoves and ovens",
                "slug": "Gas-Ranges-MA2"
            },
            "relationships": {
                "parent": {
                    "data": {
                        "id": "<nodeId of Ranges>",
                        "type": "node"
                    }
                }
            }
        }
    }'
```

## Create products and associate them with hierarchy nodes

Now letʼs create two products. Most of the attributes should be familiar to you, but if not, see [the product_attributes object](/docs/pxm/products/ep-pxm-products-api/pxm-products-api-overview#the-product-attributes-object).

:::caution
To display the products from a published catalog, the products must be `live` and belong to a hierarchy that is part of the catalog.
:::

Create an electric range. We create the products in the `live` status for this example. In a real-world scenario, you would likely create products in the `draft` status and have someone approve the content before setting it to `live`.

```bash
curl -X POST https://useast.api.elasticpath.com/pcm/products \
     -H "Authorization: Bearer <your_access_token>" \
     -H "Content-Type: application/json" \
     -d $'{
        "data": {
            "type": "product",
            "attributes": {
                "name": "BestEver Electric Range",
                "sku": "BE-Electric-Range-1a1a",
                "slug": "bestever-range-1a1a",
                "description": "This electric model offers an induction heating element and convection oven.",
                "status": "live",
                "commodity_type": "physical",
                "upc_ean": "111122223333",
                "mpn": "BE-R-1111-aaaa-1a1a"
            }
        }
    }'
```

Associate the product with the hierarchy node Electric Ranges. You need the generated hierarchy ID and node ID in the path, and the product ID in the body.

```bash
curl -X POST https://useast.api.elasticpath.com/pcm/hierarchies/:hierarchyId/nodes/:nodeIdforElectricRanges/relationships/products \
     -H "Authorization: Bearer <your_access_token>" \
     -d $'{
        "data": [
            {
            "type": "product",
            "id": "<productId of BestEver Electric Range>"
            }
        ]
     }'
```

Create a gas range.

```bash
curl -X POST https://useast.api.elasticpath.com/pcm/products \
     -H "Authorization: Bearer <your_access_token>" \
     -H "Content-Type: application/json" \
     -d $'{
        "data": {
            "type": "product",
            "attributes": {
                "name": "BestEver Gas Range",
                "sku": "BE-Gas-Range-2b2b",
                "slug": "bestever-range-2b2b",
                "description": "This gas model includes a convection oven.",
                "status": "live",
                "commodity_type": "physical",
                "upc_ean": "222233334444",
                "mpn": "BE-R-2222-bbbb-2b2b"
            }
        }
    }'
```

Associate the product with the hierarchy node Gas Ranges. You need the generated hierarchy ID and node ID in the path, and the product ID in the body.

```bash
curl -X POST https://useast.api.elasticpath.com/pcm/hierarchies/:hierarchy Id/nodes/:nodeIdforGasRanges/relationships/products \
     -H "Authorization: Bearer <your_access_token>" \
     -d $'{
        "data": [
            {
            "type": "product",
            "id": "<productId of BestEver Gas Range>"
            }
        ]
     }'
```

:::tip
At this point, you might want to pause and try out some of the `GET` requests to retrieve the resources you created. Browse the API documentation to see what endpoints are available. When you are ready, move on to the next section.
:::

## Create a price book

Each product will have a price in two currencies: United States dollar and British Pound sterling. We need to set currencies at the store level.

The United States Dollar already exists as the default currency, so let’s add the British Pound sterling.

```bash
curl -X POST https://useast.api.elasticpath.com/v2/currencies \
     -H "Authorization: Bearer <your_access_token>" \
     -H "Content-Type: application/json" \
     -d $'{
        "data": {
            "type": "currency",
            "code": "GBP",
            "exchange_rate": 1,
            "format": "£{price}",
            "decimal_point": ".",
            "thousand_separator": ",",
            "decimal_places": 2,
            "default": false,
            "enabled": true
        }
     }'
```

Create the price book.

```bash
curl -X POST https://useast.api.elasticpath.com/pcm/pricebooks \
     -H "Authorization: Bearer <your_access_token>" \
     -H "Content-Type: application/json" \
     -d $'{
        "data": {
            "type": "pricebook",
            "attributes": {
                "name": "Preferred Pricing",
                "description": "Catalog with pricing suitable for high-volume customers."
            }
        }
    }'
```

To create prices, add the generated pricebook ID in the request path and the product prices in the body. Create product prices for the BestEver Electric Range.

```bash
curl -X POST https://useast.api.elasticpath.com/pcm/pricebooks/:pricebookId/prices \
     -H "Authorization: Bearer <your_access_token>" \
     -H "Content-Type: application/json" \
     -d $'{
        "data": {
            "type": "product-price",
            "attributes": {
                "currencies": {
                    "USD": {
                    "amount": 300000,
                    "includes_tax": false
                    },
                    "GBP": {
                    "amount": 250000,
                    "includes_tax": false
                    }
                },
            "sku": "BE-Electric-Range-1a1a"
            }
        }
    }'
```

Create prices for the BestEver Gas Range product.

```bash
curl -X POST https://useast.api.elasticpath.com/pcm/pricebooks/2cf0d38c-58aa-420d-8658-4385dccea609/prices \
     -H "Authorization: Bearer <your_access_token>" \
     -H "Content-Type: application/json" \
     -d $'{
        "data": {
            "type": "product-price",
            "attributes": {
                "currencies": {
                    "USD": {
                    "amount": 350000,
                    "includes_tax": false
                    },
                    "GBP": {
                    "amount": 300000,
                    "includes_tax": false
                    }
                },
            "sku": "BE-Gas-Range-2b2b"
            }
        }
    }'
```

## Create and publish a catalog

With the hierarchy ID and the price book ID, you are ready to create a catalog. While this example catalog has one hierarchy, you can add multiple hierarchies in the `hierarchy_id` array.

```bash
curl -X POST https://useast.api.elasticpath.com/pcm/catalogs \
     -H "Authorization: Bearer <your_access_token>" \
     -H "Content-Type: application/json" \
     -d $'{
        "data": {
            "type": "catalog",
            "attributes": {
                "name": "Ranges Catalog",
                "description" : "Ranges Catalog",
                "pricebook_id": "<pricebookID>",
                "hierarchy_ids": [
                    "<hierarchyID>"
                ]
            },
            "links": {
                "self": "string"
            }
        }
    }'
```

To be able to view the catalog in the store, you need to publish it. Add the generated catalog ID to the following request.

```bash
curl -X POST https://useast.api.elasticpath.com/pcm/catalogs/:catalogId/releases \
     -H "Authorization: Bearer <your_access_token>" \
     -H "Content-Type: application/json" \
```

The response contains the release ID. You can retrieve the catalog release with the following request.

```bash
curl -X GET https://useast.api.elasticpath.com/pcm/catalogs/:catalogId/releases/:releaseId  \
     -H "Authorization: Bearer <your_access_token>" \
```

## Create a catalog rule

If you have only one catalog in your store, it is displayed to all shoppers by default and you do not need a catalog rule.

For this example, the catalog we created uses the pricebook for preferred customers, so we will create a catalog rule.

Create two customers then add their IDs to the `customer_ids` array to create a catalog rule.

```bash
curl -X POST https://useast.api.elasticpath.com/pcm/catalogs/rules \
     -H "Authorization: Bearer <your_access_token>" \
     -H "Content-Type: application/json" \
     -d $'{
        "data": {
            "type": "catalog_rule",
            "attributes": {
                "name": "Preferred customer pricing",
                "description" : "Preferred customer pricing",
                "catalog_id": "<catalogId>",
                "customer_ids": ["<customerId>", "<customerId>"]
            }
        }
    }'
```

If you have a storefront attached to your test store, you can try signing in as your preferred customer and verify that you can see the catalog.

## Summary

In this walkthrough, we created a hierarchy with a few nodes, associated products with the nodes, and created a price book with product prices. Then we created and published a catalog. Finally, we showed how to create a catalog rule to display that catalog to preferred customers in a store.

## Next steps

If you want to test showing two different catalogs under different circumstances, create a second catalog to use for all other shoppers. After you create the second catalog, create a base catalog rule that has only a `name` and the `catalog_id` of this catalog for all shoppers. Finally, in your storefront, test the base catalog rule by browsing the catalog as an unregistered shopper. Then, log in as your preferred customer and see the preferred pricing catalog change for that customer.
