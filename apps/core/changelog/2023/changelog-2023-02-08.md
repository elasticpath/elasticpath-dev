---
title: 'Imports, Salsify, Pimberly, Curated Products'
date: '2023-02-08'
tag: ['Integations Hub','Product Experience Manager']
---
**Major**
You can now use the Elastic Path Commerce Cloud Store Node Import in the **Integrations Hub** in Commerce Manager to import node data from one Elastic Path Commerce Cloud store to another. See [Elastic Path Commerce Cloud Node Import](https://elasticpath.dev/docs/integration-hub/store-management/node-import).

**Major**
You can now use the Elastic Path Commerce Cloud Store Price Import in the **Integrations Hub** in Commerce Manager to import price data from one Elastic Path Commerce Cloud store to another. See [Elastic Path Commerce Cloud Price Import](https://elasticpath.dev/docs/integration-hub/store-management/price-import).

**Major**
You can curate your products in your nodes product lists. Product curation allows you to promote specific products within each of your hierarchies, enabling you to create unique product collections in your storefront.

  You can add a `curated_products` attribute to the body of a [`update a hierarchy node`](/docs/pxm/hierarchies/nodes-api/update-a-hierarchy-node) request.

  You can use the [`get node products`](/docs/pxm/hierarchies/node-relationships-api/get-node-products) endpoint to retrieve a list of curated products.

  You can then display your curated products in your catalogs using the following catalog endpoints:

  - [Get a node in your latest catalog release](/docs/pxm/catalogs/catalog-latest-release/get-a-node-in-a-release).
  - [Get a node in a catalog](/docs/pxm/catalogs/shopper-catalog/get-a-node).
  - [Get all nodes in your latest catalog release](/docs/pxm/catalogs/catalog-latest-release/get-all-nodes-in-a-release).
  - [Get all nodes in a catalog](/docs/pxm/catalogs/shopper-catalog/get-all-nodes).
  - [Get node children in your latest catalog release](/docs/pxm/catalogs/catalog-latest-release/get-node-children-in-a-release).
  - [Get node children in a catalog](/docs/pxm/catalogs/shopper-catalog/get-node-children).

**Major**
You can now use Salsify in the **Integrations Hub** in Commerce Manager to synchronize catalog data such as products, price, images, and categories between Elastic Path Commerce Cloud and Salsify. See [Salsify Integration](/docs/composer/integration-hub/product-information/salsify).

**Major**
You can now use Pimberly in the **Integrations Hub** in Commerce Manager to synchronize catalog data such as products, price, images, and categories from Pimberly to Elastic Path Commerce Cloud. See [Pimberly Integration](/docs/composer/integration-hub/product-information/pimberly).
