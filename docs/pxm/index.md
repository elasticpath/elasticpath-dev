---
title: Product Experience Manager
nav_label: Product Experience Manager
sidebar_position: 1
---

:::caution
Most of the Product Experience Manager APIs are for Administrator use only. Do not use these endpoints on your customer-facing frontends. To discover which ones, visit the individual pages of each endpoint.
:::

Product Experience Manager manages product information, hierarchies, and price books. Ideally, Product Experience Manager becomes the single source of truth for product data across your organization.

In Commerce, the product data is stored separately from pricing, catalogs, and inventory. This separation means that you retrieve all product data only when you are managing product data and assets. Otherwise, when setting prices or managing inventory, you retrieve a reference to the product rather than the entire product, which makes the response times very fast.

You also have the flexibility to create catalogs for different scenarios by combining hierarchies of products with a price book. Scenarios might include:

- **Multiple geographical regions**. Display different catalogs in different regions with suitable pricing or combine product hierarchies from two different regions to display in a third region.
- **Multiple channels**. Display different catalogs based on how a shopper accesses your store, such as through a mobile app or a web storefront.
- **Direct to business versus direct to customers**. Offer different products and prices for business customers versus retail customers.
- **Preferred customers**. Offer special pricing to preferred customers while displaying a standard price catalog to all other shoppers.
- **Reward programs**. Enable reward programs where catalog prices drop after a certain spending level is reached.
- **Product sales**. Offer sale items for a limited time.

Scenarios are created by defining the context within which a catalog is displays. Contexts can be a customer ID, a channel, or any other user-defined tag that can be passed to the APIs from the front-end shopper experiences.

## Related Resources

- [Catalogs](/docs/pxm/catalogs)
- [Catalog Rules](/docs/pxm/catalogs/catalog-rules)
- [Hierarchies](/docs/pxm/hierarchies/hierarchy)
- [Products](/docs/pxm/products/pxm-products)d
- [Price Books](/docs/pxm/pricebooks/price-books)
- [Getting Started with Product Experience Manager](/docs/pxm/products/get-started-pxm)

### Demos

<iframe width="560" height="315" src="https://www.youtube.com/embed/SdaSEgA5rTc" title="Understanding Products in Product Experience Manager" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
