---
title: Organization Pricing
nav_label: Organization Pricing
nav_position : 23
---

An organization can create its own price books. You can:

- create your price books directly in your organization.
- import your price books from other company systems.
 
A price book contains the prices for the products. Price books can be associated with different catalogs.

- You can create organization price books. Your organization price books are available for your stores to use.
- Your stores can create their own price books.
- Your stores can create catalogs that have a combination of organization price books and store price books.

For example, AllGoods sell their goods in 15 different countries in 25 different languages with 10 different currencies.

- AllGoods can create price books for each country. All the stores in each country would use the price book created for their country.
- AllGoods can create one price book for their top-selling distributors and another one for those distributors who achieve less sales. 
- For all the stores in North America, AllGoods have one price book. Using the same price book, AllGoods can create prices for specific promotions that are scheduled for use at a specific time.

In the API, when an organization creates a new currency or if there is a mismatch between the store currencies and organization currencies, pass an empty request body on a store-level currency using the [Update a Currency](/docs/api/pxm/currencies/update-a-currency) endpoint to invalidate the cache. This ensures that the store currencies are updated with the new organization currency.

## Importing Price Books and Prices into an Organization

You can create and update product price books and prices in bulk, at both organization and store level, using the Price Book Import API. This is useful, for example, if you have a promotion and want to update 50,000 product prices. Rather than having to go to each price book and manually edit 50,000 prices, you can use the Price Book Import API to bulk update all your product prices at the same time, including setting different prices for different currencies.

You can create/update:

- price books.
- prices.
   - sales pricing for products and product bundles with SKUs.
   - volume (tiers) pricing.

The following are not supported by the Price Book Import API:

- price modifiers
- SKUless bundles
- Bundle sale prices

The API can use a [JSONL](https://jsonlines.org/) file. The JSONL file can be compressed to a GZIP file. Here is an [example of a JSONL file](/assets/example_file_all.jsonl).

A file can include up to 50,000 objects. If you have more than 50,000 objects, then you must create a separate file, and import each file, one at a time.

1. Generate a [client_credentials](/docs/authentication/Tokens/client-credential-token) access token using your organization's [application keys](/docs/authentication/application-keys/application-keys-overview).
1. Generate a [.JSONL](/docs/api/pxm/pricebooks/import-a-price-book-and-prices#price-book-import-file) file to import price books and product prices using [price book import](/docs/api/pxm/pricebooks/import-pricebook).

Your organization price books and prices are automatically available to all the stores that belong to your organization.

## Creating Organization Price Books and Prices

To create price books in organizations:

1. Generate a [client_credentials](/docs/authentication/Tokens/client-credential-token) access token using your organization's [application keys](/docs/authentication/application-keys/application-keys-overview).
1. Create your [price books](/docs/api/pxm/pricebooks/create-pricebook). 
1. Create your [product prices](/docs/api/pxm/pricebooks/create-product-price). Depending on your requirements, when creating product prices:

    - create tiers to specify prices per quantity of product sold.
    - create sale prices for product promotions.

Your organization price books are automatically available to all the stores within your organization.
