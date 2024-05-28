---
title: Organization Products
nav_label: Organization Products 
nav_position : 20
---

To create your organization products, you can:

- create your products directly in your organization. 
- import your products from your other company systems.

:::note
You must ensure that products in organizations and stores have unique SKUs. If a store product is created with a SKU that is already in use by an organization product, an error message is displayed. This helps maintain accurate inventory management and avoid potential conflicts between organization and store products.
:::

AllGoods have selected Commerce to support their multi-store needs. AllGoods decide to import products from their other company systems into their organization.

Once the products are available in Commerce, going forward, AllGoods can create all new products directly in Commerce.

## Importing Products into an Organization

Once you have an organization, you can import products from other company systems into your organization.

1. Generate a [client_credentials](/docs/authentication/Tokens/client-credential-token) access token using your organization's [application keys](/docs/authentication/application-keys/application-keys-overview).
1. [Upload your image files](/docs/api/pxm/files/create-a-file) to Commerce.
1. Generate a [.csv](/docs/api/pxm/products/product-import-bulk-update#characteristics-of-csv-import-files) file to import products, image files, and extension (flows) data using [product import](/docs/api/pxm/products/product-image-relationships).

Your organization products are automatically available to all the stores that belong to your organization.

## Creating Organization Products

Organization products are automatically available in all stores that belong to the organization.

1. Generate a [client_credentials](/docs/authentication/Tokens/client-credential-token) access token using your organization's [application keys](/docs/authentication/application-keys/application-keys-overview).
1. Create your organization products. See [Create a Product](/docs/api/pxm/products/create-product).
1. Upload your image [files](/docs/api/pxm/files/create-a-file). 
1. [Assign](/docs/api/pxm/products/create-product-main-image-relationships) your images to your products.

