---
title: Build Child Products Using Variations
nav_label: Build Child Products Using Variations
sidebar_position: 50
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

With product variations in Product Experience Manager, you can create product variations and different options for each variation and use both to create child products for a product. Each child product is a unique combination of options associated with the product.  

Child products inherit attributes from their parent products. When you make changes to the attributes of the parent products, you can rebuild your child products, ensuring that changes to the parent products are propagated to the child products.

Alternatively, you can modify a child product independently, without impacting its parent product. For example, you may prefer the status of your child product to be `live`, while keeping the parent product's status as `draft`. When you directly update a child product, it becomes independent of its parent product. In other words, any subsequent changes made to the parent product are not automatically reflected in the child product when you rebuild the parent product and its child products. Once a child product is independent of its parent, you cannot recreate the association between the child product and its parent. You must delete the child product and rebuild the parent to recreate the child product.

Following on from that, if you add the same flow to both a parent and child product, the child flow values are not affected by changes to the parent flow values in a rebuild.

When building your child products, you can:

- Build all products related to a product. See [Create child products using variations](/guides/How-To/Products/generate-pxm-variations).
- Build a combination of child products associated with a product, based on build rules that you specify. This is useful, for example, if you have a variation option that you do not sell. This makes managing and building your child products quick and easy.

This topic describes building a combination of child products associated with product, based on build rules that you specify.

Consider the following example.

![The sizes are across the top row and the colors are in the first column.](/assets/variatio.png)

Using the example above, maybe you do not sell large, red, T-shirts. Rather than build your child products and then manually delete the large, red, T-shirt option, you can exclude that option when you build your child products.  Similarly, if you only sell large, red, T-shirts, you can include only that option when you build your child products. This makes managing and building your child products quick and easy.

You can do this using `build_rules`. `build_rules` are combinations of variation option IDs that you wish to include or exclude when building your child products.

```json
{
    “data”: {
            “type”: “product”,
            “attributes”: {
            /*** other product attributes ommitted ***/
               "build_rules": {
               "default": "include",
               "exclude": [
                  [
                   "c166dabf-eb42-4364-98a6-3802e0bb7582"
                  ]
               ],
               "include": [
                  [
                   "c166dabf-eb42-4364-98a6-3802e0bb7582",
                   "7b8a1cac-bfe0-4ae9-90b1-c7a1393cccc5"
                  ]
               ]
            }
         }
     }
}
```

:::caution
You do not need to configure any `build_rules` in the following scenarios:

- Child products must be built with all variation options. Simply, use the `Create a product` or `Update a product` endpoints with no `build_rules` specified.
- Child products must be built apart from all options for a specific variation. In this case, you must remove the variation and use the `Create a product` or `Update a product` endpoints with no `build_rules` specified. In other words, using our example, if none of the `size` options should be included, then remove the `size` variation.
:::

The `build_rules` contain:

- (Required) `default`: specifies the default behavior.
- (Optional) `include`: specifies the option IDs to include when the child products are built. Each combination consists of a nested array of option IDs from one or more variations. Combinations of option IDs in the nested arrays must come from different variations. See [Invalid build rules](#invalid-build-rules).
- (Optional) `exclude`: specifies the option IDs to exclude when the child products are built. Each combination consists of a nested array of option IDs from one or more variations. Combinations of option IDs in the nested arrays must come from different variations. See [Invalid build rules](#invalid-build-rules).

When building child products, Commerce compares each combination of option IDs to these rules to determine how your child products should be built, depending on how you have configured the `build_rules`. It depends on your requirements how you configure your `build_rules`.

## Scenario 1

In this scenario, you want to include most of your variation options apart from one or two. Your `build_rules` could be like this.

```json
{
   “data”: {
        “type”: “product”,
        “attributes”: {
        /*** other product attributes ommitted  ***/
        "build_rules": {
           "default": "include",
           "exclude": [
              [
                 "c166dabf-eb42-4364-98a6-3802e0bb7582",
                 "7b8a1cac-bfe0-4ae9-90b1-c7a1393cccc5"
              ]
           ]
        }
     }
   }
}
```

Using the example above, where:

- `c166dabf-eb42-4364-98a6-3802e0bb7582` is the large T-shirt variation option ID.
- `7b8a1cac-bfe0-4ae9-90b1-c7a1393cccc5a` is the red T-shirt variation option ID.

The `build_rules` specify that all T-shirt variations and options are built apart from large, red, T-shirts.

## Scenario 2

In this scenario, you want to exclude most of your variation options apart from one or two. Your `build_rules` could be like this.

```json
{
    “data”: {
            “type”: “product”,
            “attributes”: {
            /*** other product attributes ommitted ***/
            "build_rules": {
               "default": "exclude",
               "include": [
                  [
                    "c166dabf-eb42-4364-98a6-3802e0bb7582",
                    "7b8a1cac-bfe0-4ae9-90b1-c7a1393cccc5"
                  ]
               ]
            }
         }
     }
}
```

Using the example above, where:

- `c166dabf-eb42-4364-98a6-3802e0bb7582` is the large T-shirt option ID.
- `7b8a1cac-bfe0-4ae9-90b1-c7a1393cccc5a` is the red T-shirt option ID.

The `build_rules` specify that no T-shirt variations and options are built apart from large and red, T-shirts.

## Scenario 3

In this scenario, you may want to:

- Include most of your variation options.
- Apart from a few variation options that you want to exclude.
- Include one of the variation options that you excluded above.

Your `build_rules` could be like this.

```json
{
        “data”: {
                “type”: “product”,
                “attributes”: {
                /*** other product attributes ommitted ***/
                "build_rules": {
                   "default": "include",
                   "exclude": [
                     [
                      "c166dabf-eb42-4364-98a6-3802e0bb7582",
                      "a2b8ebb2-853e-4141-9ca4-a449576ce165"
                     ]
                   ],
                   "include": [
                     [
                      "c166dabf-eb42-4364-98a6-3802e0bb7582",
                      "7b8a1cac-bfe0-4ae9-90b1-c7a1393cccc5",
                      "a2b8ebb2-853e-4141-9ca4-a449576ce165"
                     ]
                   ]
               }
            }
        }
}
```

Using the example above, where:

- `c166dabf-eb42-4364-98a6-3802e0bb7582` is the large T-shirt option ID.
- `7b8a1cac-bfe0-4ae9-90b1-c7a1393cccc5a` is the red T-shirt option ID.
- `a2b8ebb2-853e-4141-9ca4-a449576ce165` is the cotton T-shirt option ID.

The `build_rules` specify that all T-shirt variations and options are built apart from large, red T-shirts, but the large, red, cotton T-shirt is built.

When your `build_rules` contain both an `include` and `exclude` array then the most specific array takes precedence. The most specific array must be second in the `build_rules`. If the first array is more specific, it is ignored.

To illustrate this further, maybe you want to exclude all red or green T-shirts except for large, green T-shirts and small, red T-shirts. Your `build_rules` could be like this.

```json
{
    “data”: {
            “type”: “product”,
            “attributes”: {
            /*** other product attributes ommitted ***/
            "build_rules": {
            "default": "include",
            "exclude": [
                ["7b8a1cac-bfe0-4ae9-90b1-c7a1393cccc5a"],
                ["10d66b11-ae6b-4c22-a070-a424abbd9cf0"]
            ],
            "include": [
                ["7b8a1cac-bfe0-4ae9-90b1-c7a1393cccc5a", "6429c963-7c92-480a-a31e-51647ce20a03"],
                ["10d66b11-ae6b-4c22-a070-a424abbd9cf0", "c166dabf-eb42-4364-98a6-3802e0bb7582"]
            ]
         }
      }
   }
}
```

In the example above, where:

- `7b8a1cac-bfe0-4ae9-90b1-c7a1393cccc5a` is the red T-shirt option ID.
- `10d66b11-ae6b-4c22-a070-a424abbd9cf0` is the green T-shirt option ID.
- `6429c963-7c92-480a-a31e-51647ce20a03` is the small T-shirt option ID.
- `c166dabf-eb42-4364-98a6-3802e0bb7582` is the large T-shirt option ID.

The `build_rules` specify that green or red T-shirts are excluded as the most specific match is `exclude` red or green T-shirts. However, for large, green T-shirts or small, red T-shirts, the most specific rule is `include` as the `include` specifies the variation option IDs for green and large T-shirts and red and small T-shirts.

Following on from this, you might want to exclude all T-shirts that are either green or large, but include large, green T-shirts. Your `build_rules` could be like this.

```json
{
    “data”: {
            “type”: “product”,
            “attributes”: {
            /*** other product attributes ommitted for example ***/
            "build_rules": {
            "default": "include",
            "exclude": [
               ["c166dabf-eb42-4364-98a6-3802e0bb7582"],
               ["10d66b11-ae6b-4c22-a070-a424abbd9cf0"]
            ],
            "include": [
               ["10d66b11-ae6b-4c22-a070-a424abbd9cf0", "c166dabf-eb42-4364-98a6-3802e0bb7582"]
            ]
         }
      }
  }
}
```

In the example above, where:

- `c166dabf-eb42-4364-98a6-3802e0bb7582` is the large T-shirt option ID.
- `10d66b11-ae6b-4c22-a070-a424abbd9cf0` is the green T-shirt option ID.

The `build_rules` specify that all green or large T-shirts are excluded but large and green T-shirts are included.

## Invalid `build_rules`

These `build_rules` are invalid.

```json
{
    “data”: {
            “type”: “product”,
            “attributes”: {
            /*** other product attributes ommitted ***/
            "build_rules": {
            "default": "include",
            "exclude": [
               [
                 "c166dabf-eb42-4364-98a6-3802e0bb7582", "7b8a1cac-bfe0-4ae9-90b1-c7a1393cccc5"
               ]
            ]
         }
      }
   }
}
```

In the example above, where:

- `c166dabf-eb42-4364-98a6-3802e0bb7582` is the large T-shirt option ID.
- `10d66b11-ae6b-4c22-a070-a424abbd9cf0` is the small T-shirt option ID.

The `build_rules` specify that all T-shirts are built. This is because both the option IDs come from the same variation. Combinations of option IDs in the nested arrays must come from different variations.

If Commerce cannot resolve the `build_rules` a `could not determine whether to include or exclude a child product due to ambiguous rules` error is returned. This error can occur, for example, if you have the same number of variation option IDs in both the `include` and `exclude` arrays and the variation option IDs match.

## Before you begin

Ensure that you have the following:

- A Composable Commerce account.
- The [client ID and client secret](https://dashboard.elasticpath.com/app) of your store.
- An [access token](https://beta.elasticpath.dev/guides/Getting-Started/your-first-api-request).

:::note
If you don’t have an access token, make the following request to get the access token:

```sh
curl -X POST https://useast.api.elasticpath.com/oauth/access_token \
     -d "client_id=XXXX" \
     -d "client_secret=XXXX" \
     -d "grant_type=client_credentials"
```

:::

## Building a Child Products Based on a Combination of Variations

This topic provides instructions for creating a product **Shirt** with variations of:

- **Shirt Size** that has the options **Small**, **Medium**, and **Large**.
- **Shirt Color** that has the options **Red**, **Green**, and **Blue**.
- **Shirt Material** that has the options **Cotton**, **Denim**, and **Wool**.

Re-building child products after adding or removing a new variation changes the total number of child products that you can generate from a base product. When you rebuild the child products after updating variations associated with the base product, all existing child products that belong to a base product are deleted. New child products are created with new product IDs. However, re-building child products after adding or removing an option does not change the existing product IDs.

### Procedure - API

1. [Create the variations](https://beta.elasticpath.dev/docs/api/pxm/products/create-variation).
1. [Create your options](https://beta.elasticpath.dev/docs/api/pxm/products/create-variation-option).
1. The endpoint you use to build child products based on a combination of variations depends on your scenario.

    - Scenario 1: You want to create a product, associate the product with variations and build a combination of child products in one request. You can use [create a product](https://beta.elasticpath.dev/docs/api/pxm/products/create-product).
    - Scenario 2: You already have a product and/or associated variations and you want to build a combination of child products. You can use [update a product](https://beta.elasticpath.dev/docs/api/pxm/products/update-product).

1. To create a base product called **Shirt**, associate the **Shirt Size**, **Shirt Color** and **Shirt Material** variations with the **Shirt** product, configure the build rules to build all child products except small, red T-Shirts, make the following request:

    ```json
    curl -X POST https://useast.api.elasticpath.com/pcm/products \
         -H "Authorization: Bearer XXXX" \
         -H "Content-Type: application/json" \
         -d $'{
        "data": {
            "type": "product",
            "attributes": {
                "name": "Shirt",
                "sku": "978055216732567",
                "slug": "978055216732567",
                "description": "T-shirt.",
                "status": "live",
                "commodity_type": "physical",
                "mpn": "1234-5678-SSSS",
                "upc_ean": "135623456",
                "build_rules": {
                    "default": "include",
                    "exclude": [
                        [
                            "cbde9096-e0e1-43d8-a1aa-cb66cf1d299f",
                            "0b261f7d-753d-4af6-b9f4-62b436cca37d"
                        ]
                    ]
                },
                "locales": {
                    "fr-FR": {
                        "name": "Shirt",
                        "description": "T-shirt."
                    }
                }
            },
            "relationships": {
                "variations": {
                    "data": [
                        {
                            "type": "product-variation",
                            "id": "6c4b5caa-3819-4366-a14e-c5b85009544b"
                        },
                        {
                            "type": "product-variation",
                            "id": "f192e114-9f8a-4284-99d0-4d9ccd8a0275"
                        },
                        {
                            "type": "product-variation",
                            "id": "b1ae545e-3375-455f-b5ea-09669b60996f"
                        }

                    ]
                }
            }
        }
    }'
    ```

1. Build child products by making the following request:

    ```sh
    curl -X POST https://useast.api.elasticpath.com/pcm/products/:productId/build/ \
         -H "Content-Type: application/json" \
         -H "Authorization: Bearer XXXX"
    ```

    For `productId`, use the ID of the base product.

## View the Child Products Associated with a Base Product using API

To view all child products associated with a base product, make the following request:

```bash
    curl -X GET https://useast.api.elasticpath.com/pcm/products/:productID/children \
         -H "Authorization: Bearer XXXX" \
         -H "Content-Type: application/json" \
```

 You can navigate through the list using the pagination query parameters, `page[limit]` and `page[offset]`. For more information, see the [pagination](https://beta.elasticpath.dev/guides/Getting-Started/pagination) section.

## Adding a Child Product to the Cart Using API

To add a product defined by a variation to a cart and checking it out, ensure that you use the child product ID. You must not use the product ID of the base product.

To view the products variation relationships within the base product object, make the following request:

```bash
    curl -X GET https://useast.api.elasticpath.com/pcm/products/:productId \
         -H "Authorization: Bearer XXXX" \
         -H "Content-Type: application/json" \

```

Whenever you update variations, options, or modifiers associated with a product, make a request to the `pcm/products/:productId/build/` endpoint to update the child products with the updated information.

## Related Resources

- [Products](https://beta.elasticpath.dev/docs/commerce-manager/product-experience-manager/Products/overview)
- [Products API](https://beta.elasticpath.dev/docs/api/pxm/products/products)
