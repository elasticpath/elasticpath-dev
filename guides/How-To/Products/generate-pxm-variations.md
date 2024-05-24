---
title: Create Child Products Using Variations and Modifiers
nav_label: Create Child Products Using Variations
sidebar_position: 40
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

With product variations in Product Experience Manager, you can create product variations and different options for each variation and use both to create child products for a product. Each child product is a unique combination of options associated with the product. 

Child products inherit attributes from their parent products. When you make changes to the attributes of the parent products, you can rebuild your child products, ensuring that changes to the parent products are propagated to the child products.

Alternatively, you can modify a child product independently, without impacting its parent product. For example, you may prefer the status of your child product to be `live`, while keeping the parent product's status as `draft`. When you directly update a child product, it becomes independent of its parent product. In other words, any subsequent changes made to the parent product are not automatically reflected in the child product when you rebuild the parent product and its child products. Once a child product is independent of its parent, you cannot recreate the association between the child product and its parent. You must delete the child product and rebuild the parent to recreate the child product.

Following on from that, if you add the same flow to both a parent and child product, the child flow values are not affected by changes to the parent flow values in a rebuild.

This topic describes:

- Creating product variations and options.
- Building all child products. You can also build a combination of child products associated with a product, based on build rules that you specify. This is useful, for example, if you have a variation option that you do not sell. See [Building Child Products Using Variations](/guides/How-To/Products/build-pxm-variations).
- Checking the status of the request to create child products.

## Creating Child Products for a Product

This topic provides instructions to create child products for the product *shirt* with variation *Shirt Size* that has the options *Small*, *Medium*, and *Large*. This example also provides instructions to create a modifier to append the value of each option to its child product slug.

Re-building child products after adding or removing a new variation changes the total number of child products that you can generate from a base product. When you rebuild the child products after updating variations associated with the base product, all existing child products that belong to a base product are deleted. New child products are created with new product IDs. 

If you have any bundles that reference child products directly, then you must update the bundles with the new child product IDs.

However, re-building child products after adding or removing an option does not change the existing product IDs.

### Before you begin

Ensure that you have the following:

- A Composable Commerce account.
- The [client ID and client secret](https://beta.elasticpath.dev/docs/commerce-manager/application-keys/application-keys-cm) of your store.
- An [access token](https://beta.elasticpath.dev/guides/Getting-Started/your-first-api-request#get-an-access-token).

:::note
If you don’t have an access token, make the following request to get the access token:

```sh
curl -X POST https://useast.api.elasticpath.com/oauth/access_token \
     -d "client_id=XXXX" \
     -d "client_secret=XXXX" \
     -d "grant_type=client_credentials"
```

:::

### Procedure - API

1. [Create the product](https://beta.elasticpath.dev/docs/api/pxm/products/create-product).

1. Create the product variation `Shirt Size` using the following request:

    ```sh
    curl -X POST https://useast.api.elasticpath.com/pcm/variations \
         -H "Authorization: Bearer XXXX" \
         -H "Content-Type: application/json" \
         -d $'{
          "data": {
              "type": "product-variation",
              "attributes": {
                  "name": "Shirt Size"
              }
          }
        }'
    ```

    This request creates the variation and returns the variation ID. Ensure that you make a note of the variation ID. For more information about creating variations, see the [Create Variations](https://beta.elasticpath.dev/docs/api/pxm/products/create-variation) section.

1. Create the variation options. Option names can only contain A-Z, a-z, 0 to 9, hyphen, underscore, and period. Spaces or other special characters like ^, [], *, and $ are not allowed. 

    1. Create the option *small* by making the following request:

        ```sh
          curl -X POST https://useast.api.elasticpath.com/pcm/variations/:variationId/options \
               -H "Authorization: Bearer XXXX" \
               -H "Content-Type: application/json" \
               -d $'{
                  "data": {
                      "type": "product-variation-option",
                      "attributes": {
                          "name": "Small",
                          "description": "Size small"
                      }
                  }
              }'
          ```

        Replace the `:variationId` with variation ID generated in the response of Step 1. For more information on creating options, see the [Create Options](https://beta.elasticpath.dev/docs/api/pxm/products/create-variation-option) section.
    1. Repeat step 1 twice to create the options `Large` and `Medium`.

1. To define how the child product varies from the base product, create modifiers. Modifiers related to slugs can only contain A t Z, a-z, 0 to 9, hyphen, underscore, and period. Spaces or other special characters like ^, [], *, and $ are not allowed. 

    1. Create modifiers for your options as in the following example:

        ```sh
          curl -X POST https://useast.api.elasticpath.com/pcm/variations/:variationId/options/:optionID/modifiers \
               -H "Authorization: Bearer XXXX" \
               -H "Content-Type: application/json" \
               -d $'{
                  "data": {
                      "type": "product-variation-modifier",
                      "attributes": {
                          "type": "slug_append",
                          "value": "-small"
                      }
                   }
              }'
         ```

    1. Repeat step 1 and create modifier for each option, such as `-medium` and `-large`, as required.

        If you do not provide modifiers for SKU and slug in an option, the default modifier `sku_append` is used for SKU and `slug_append` is used for slug. For more information about modifiers, see [Modifiers API](https://beta.elasticpath.dev/docs/api/pxm/products/create-modifier).

1. To associate base product with a variation:
    1. Make the following request:

        ```sh
        curl -X POST \
          https://useast.api.elasticpath.com/pcm/products/:productId/relationships/variations \
          -H "Authorization: Bearer XXXX" \
          -H 'content-type: application/json' \
          -d '{
             "data": [ {
                 "type": "product-variation",
                 "id": "{{variationID}}"
              }]
         }'
         ```

         Use ID of the base product for `productId` and the ID of the variation that you want to associate with the product for `variationID`.
    1. Associate more products with the variation as required.

1. Build child products by making the following request:

    ```sh
    curl -X POST https://useast.api.elasticpath.com/pcm/products/:productId/build/ \
         -H "Content-Type: application/json" \
         -H "Authorization: Bearer XXXX"
    ```

    For `productId`, use the ID of the base product.

    You can also build a combination of child products associated with a product, based on build rules that you specify. This is useful, for example, if you have a variation option that you do not sell. See [Building Child Products Using Variations](/guides/How-To/Products/build-pxm-variations).

### Procedure - Commerce Manager

1. See [Create variations](https://beta.elasticpath.dev/docs/api/pxm/products/create-variation) and create the following options in the *Shirt Size* variation:

    - *Large*
    - *Medium*
    - *Small*
1. Create **SKU** modifier and provide the following values for the **append** field:

    - *-large* for *Large* option.
    - *-medium* for *Medium* option.
    - *-small* for *Small* option.

1. [Create a product](https://beta.elasticpath.dev/docs/api/pxm/products/create-product) with the name *Shirt*.
1. Associate the product with the variation and build the child products by following the instructions in the [Assigning variations and building child products](https://beta.elasticpath.dev/docs/commerce-manager/product-experience-manager/variations/assign-variations-build-child-products) section.

## View the Child Products Associated with a Base Product using API

To view all child products associated with a base product, make the following request:

```sh
curl -X GET https://useast.api.elasticpath.com/pcm/products/:{{productID}}/children \
    -H "Authorization: Bearer XXXX" \
```

You can navigate through the list using the pagination query parameters, `page[limit]` and `page[offset]`. For more information, see the [pagination](https://beta.elasticpath.dev/guides/Getting-Started/pagination) section.

## Adding a Child Product to the Cart Using API

To add a product defined by a variation to a cart and checking it out, ensure that you use the child product ID. You must not use the product ID of the base product.

To view the products variation relationships within the base product object, make the following request:

```sh
curl -X GET https://useast.api.elasticpath.com/pcm/products/::productId \
    -H "Authorization: Bearer XXXX" \
```

Whenever you update variations, options, or modifiers associated with a product, make a request to the `pcm/products/:productId/build/` endpoint to update the child products with the updated information.


## Related Resources

- [Products](https://beta.elasticpath.dev/docs/commerce-manager/product-experience-manager/Products/overview)
- [Products API](https://beta.elasticpath.dev/docs/api/pxm/products/products)
