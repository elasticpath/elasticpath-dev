---
title: Curating Products
nav_label: Curating Products
sidebar_position: 20
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

You can curate your products in your nodes product lists. Product curation allows you to promote specific products within each node in a hierarchy, enabling you to create unique product collections in your storefront. Having unique product collections means you can appeal to niche customer bases, driving increased customer engagement and sales. For example, you may find you have an abundance of cotton T-Shirts and you want to promote these products to the top of the product list. When a shopper navigates to **T-shirts**, the cotton T-Shirts are displayed first. 

You can do this using the [update a hierarchy node](https://beta.elasticpath.dev/docs/api/pxm/products/update-hierarchy) endpoint and adding a `curated_products` attribute to the body of the request and adding an array of product IDs to the attribute. You should add the products IDs in the order you want them to be displayed in your node. The first product ID is displayed first in the product list.

```json
{
    “data”: {
            “type”: “product”,
            “attributes”: {
            /*** other product attributes ommitted ***/
               "curated_products": [
                   "c166dabf-eb42-4364-98a6-3802e0bb7582",
                   "c166dabf-eb42-4364-98a6-3802e0bb7582",
                   "7b8a1cac-bfe0-4ae9-90b1-c7a1393cccc5"
               ]
           }
      }
 }
```

- You can only curate 20 products or less. You cannot have more than 20 curated products.
- The product IDs you provide must exist in the specified node.
- If a curated product is removed from a node, the product is also removed from the `curated_products` list.

Once you have curated the products in a node, you can use the [get node products](https://beta.elasticpath.dev/docs/api/pxm/products/get-node-products) endpoint to retrieve a list of curated products. The products are returned in the order specified in the `curated_products` attribute in the body of the [update a hierarchy node](https://beta.elasticpath.dev/docs/api/pxm/products/update-hierarchy) request. A product that is curated has the `"curated_product": true` attribute displayed. 

You can then display your curated products in your catalogs using the following catalog endpoints:

- [Get a node in your latest catalog release](https://beta.elasticpath.dev/docs/pxm/catalogs/catalog-latest-release/get-a-node-in-a-release).
- [Get a node in a catalog](https://beta.elasticpath.dev/docs/pxm/catalogs/shopper-catalog/get-a-node).
- [Get all nodes in your latest catalog release](https://beta.elasticpath.dev/docs/pxm/catalogs/catalog-latest-release/get-all-nodes-in-a-release).
- [Get all nodes in a catalog](https://beta.elasticpath.dev/docs/pxm/catalogs/shopper-catalog/get-all-nodes).
- [Get node children in your latest catalog release](https://beta.elasticpath.dev/docs/pxm/catalogs/catalog-latest-release/get-node-children-in-a-release).
- [Get node children in a catalog](https://beta.elasticpath.dev/docs/pxm/catalogs/shopper-catalog/get-node-children).

If products are curated, they are displayed in `curated_products`.

- If you don't provide any `curated_products`, products are listed by their `updated_at` time in descending order, with the most recently updated product first.
- If you configure `curated_products` for only a few products, the curated products are displayed first and the other products are displayed in the order of `updated_at` time.

## Related Resources

- [Locales](https://beta.elasticpath.dev/docs/commerce-manager/product-experience-manager/locales/)
- [Catalogs](https://beta.elasticpath.dev/docs/pxm/catalogs)
- [Price Books](https://beta.elasticpath.dev/docs/api/pxm/pricebooks/price-books)
- [Products](https://beta.elasticpath.dev/docs/api/pxm/products/products)
- [Curating Products in Commerce Manager](https://beta.elasticpath.dev/docs/commerce-manager/product-experience-manager/Products/curating-products)
