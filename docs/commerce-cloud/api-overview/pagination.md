---
title: Pagination
nav_label: Pagination
sidebar_position: 60
---

Many Commerce endpoints support pagination.  The general syntax of pagination within the API is described below.

Pagination is also supported within [JavaScript SDK](/docs/developer-tools).

## Usage and Syntax

### Query parameters

| Name           | Required | Type     | Description                           |
|:---------------|:---------|:---------|:--------------------------------------|
| `page[limit]` | Optional | `number` | The number of records per page. |
| `page[offset]` | Optional | `number` | The number of records to offset the results by. |


### Response
The API response with pagination provides following information:

- The `page` attribute includes the following information about the current page:

    - `page[limit]`: The maximum number of records per page for this response. You can set this value up to 100.
    - `page[offset]`: The current offset by number of records, not pages. Offset is zero-based.
    - `page[current]`: The current page.
    - `page[total]`: The total page count.

- The `results` attribute includes complete information about the result, and includes `total`, which is the total number of results after applying filters, if any, or all results.

Even if the result is zero, pagination fields are always included in the response. 

## Supported Endpoints

* [Get All Accounts](/docs/commerce-cloud/accounts/using-account-management-api/get-all-accounts)
* [Get All Account Members](/docs/commerce-cloud/accounts/using-account-members-api/get-all-account-members)
* [Get all User Authentication Info](/docs/commerce-cloud/authentication/single-sign-on/user-authentication-info-api/get-all-user-authentication-info.md)
* [Get all Entries](/docs/commerce-cloud/custom-data/custom-data-flows-api/entries/get-all-entries)
* [Get all Customers](/docs/commerce-cloud/customer-management/customer-managment-api/get-all-customers)
* [Get Integration Logs](/docs/commerce-cloud/integrations/integrations-api/get-integration-logs)
* [Get all Orders](/docs/commerce-cloud/orders/orders-api/get-all-orders)
* [Get all Promotions](/docs/commerce-cloud/promotions/promotion-management/get-all-promotions)
* [Get all Catalogs](/docs/pxm/catalogs/catalog-configuration/get-all-catalogs)
* [Get a Hierarchyʼs Child Nodes in the Latest Release](/docs/pxm/catalogs/catalog-latest-release/get-a-hierarchys-children-in-a-release)
* [Get a Hierarchyʼs Nodes in the Latest Release](/docs/pxm/catalogs/catalog-latest-release/get-a-hierarchys-nodes-in-a-release)
* [Get a Product's Children](/docs/pxm/catalogs/catalog-latest-release/get-all-child-products)
* [Get all Hierarchies in the Latest Release](/docs/pxm/catalogs/catalog-latest-release/get-all-hierarchies-in-a-release)
* [Get all Nodes in the Latest Release](/docs/pxm/catalogs/catalog-latest-release/get-all-nodes-in-a-release)
* [Get all Products in the Latest Release](/docs/pxm/catalogs/catalog-latest-release/get-all-products-in-a-release)
* [Get a Nodeʼs Children in the Latest Release](/docs/pxm/catalogs/catalog-latest-release/get-node-children-in-a-release)
* [Get Products by Hierarchy in the Latest Release](/docs/pxm/catalogs/catalog-latest-release/get-products-by-hierarchy-in-a-release)
* [Get Products by Node in the Latest Release](/docs/pxm/catalogs/catalog-latest-release/get-products-by-node-in-a-release)
* [Get all Catalog Rules](/docs/pxm/catalogs/catalog-rules/get-all-catalog-rules)
* [Get a Hierarchyʼs Child Nodes](/docs/pxm/catalogs/shopper-catalog/get-a-hierarchys-children)
* [Get a Hierarchyʼs Nodes](/docs/pxm/catalogs/shopper-catalog/get-a-hierarchys-nodes)
* [Get a Product's Children](/docs/pxm/catalogs/shopper-catalog/get-all-child-products-shopper)
* [Get all Hierarchies](/docs/pxm/catalogs/shopper-catalog/get-all-hierarchies)
* [Get all Nodes](/docs/pxm/catalogs/shopper-catalog/get-all-nodes)
* [Get all Products](/docs/pxm/catalogs/shopper-catalog/get-all-products)
* [Get a Nodeʼs Children](/docs/pxm/catalogs/shopper-catalog/get-node-children)
* [Get Products by Hierarchy](/docs/pxm/catalogs/shopper-catalog/get-products-by-hierarchy)
* [Get Products by Node](/docs/pxm/catalogs/shopper-catalog/get-products-by-node)
* [Get a Product's Nodes](/docs/pxm/products/product-asset-relationships/get-a-products-nodes)
* [Get a Nodeʼs Children](/docs/pxm/hierarchies/node-relationships-api/get-node-children)
* [Get a Nodeʼs Products](/docs/pxm/hierarchies/node-relationships-api/get-node-products)
* [Get all Price Modifiers](/docs/pxm/pricebooks/pxm-pricebooks-modifiers/get-all-price-modifiers)
* [Get All Prices in a Price Book](/docs/pxm/pricebooks/pxm-pricebooks-prices/get-all-prices-in-a-pricebook)
* [Get all Inventory](/docs/pxm/inventories/get-all-inventory)
* [Get all Files](/docs/pxm/products/product-assets/get-all-files)
* [Get all Jobs](/docs/pxm/jobs-api/get-all-jobs)

## Limitations

### Page Length

By default, page length is set to `25`. You can adjust this setting globally for your project using the [settings endpoint](/docs/commerce-cloud/global-project-settings/settings-overview) or override the setting in any single call. The maximum page length is set to `100` for any paginated call.


### Page Offset 
- Requests to `/v2/orders` and `/v2/files` have a hard offset limit of `10,000` records.
- Requests to other endpoints have a soft offset limit of `10,000` records.

## Performance

In general, requests with a large `page[offset]` are less performant in the Commerce API, especially at scale (either with high
frequency requests or with a high amount of data) and care should be taken when using them.

A common use case for high `page[offset]` is the need to retrieve all the data from a specific endpoint. As an alternative to using high page offsets, many endpoints support the use of an alternative pattern that leverages [filtering](/docs/api-overview/filtering) and [sorting](/docs/api-overview/sorting). 
 
To use the approach you first decide on which attribute to sort on, with `created_at`, `updated_at`, `id` being the most common. Next you request the first page using the `sort` attribute selected. To get the next page, supply a filter where the attribute has a value greater than or equal to the last value.

For example, to retrieve all [orders](/docs/orders/orders-api/get-all-orders) in the system, pass the following queries (the dates come from the last result on the previous page):

1. `GET /v2/orders?sort=created_at`
2. `GET /v2/orders?sort=created_at&filter=ge(created_at,2018-04-16T10:11:59.715Z)` 
3. `GET /v2/orders?sort=created_at&filter=ge(created_at,2018-04-16T12:26:12.868Z)`

To use this approach, the main requirement is that the endpoint needs to support comparison operator on a sortable field.

The following are a few other implementation details to consider when using this approach:
1. If using a timestamp value, the granularity of the time stamp on the endpoint might mean you still need to paginate to another page if lots of updates or creates happen at the same time, you can determine if this is necessary by checking if the first timestamp and last timestamp on a page are identical.
2. Due to [eventual consistency](/docs/api-overview/eventual-consistency) timestamp values close to the present may not be complete, so you should consider using some buffer if trying to build a complete list.
3. When using `updated_at`, you may see values more than once if a record is updated while this is being processed.
4. Using `updated_at` is a great way to keep another system in sync with delta's because it allows you to see changes in records (except deletes).

### Example: Exporting all accounts to CSV format

The following bash script uses curl and [jq](https://jqlang.github.io/jq/) to build a CSV of all [Accounts](/docs/commerce-cloud/accounts/accounts) sorted by `id`.

```bash
#!/usr/bin/env bash
PAGE_LENGTH=100

# Get first page (sorted by id only)
curl -s -H "Authorization: Bearer: $BEARER_TOKEN " -X GET "$EPCC_API_BASE_URL/v2/accounts?sort=id&page%5Blimit%5D=${PAGE_LENGTH}" > last_page.json

# Get count of elements on the page for a termination condition
RESULT_COUNT=$(jq '.data | length' last_page.json)

# Retrieve the last id, used as the filter for the next page.
LAST_ID=$(jq -r '.data[-1].id' last_page.json)

# Output CSV Header
echo '"Name", "Legal Name", "Registration ID", "ID"' > export.csv

# Output CSV For Page (sorted by id, using the last id as a filter to start the next page)
jq -r '.data[] | "\"\(.name)\", \"\(.legal_name)\", \"\(.registration_id)\", \"\(.id)\", "' last_page.json >> export.csv

while [ ${RESULT_COUNT} != "0" ]; do
  # Get next page
  curl -s -H "Authorization: Bearer: $BEARER_TOKEN " -X GET "$EPCC_API_BASE_URL/v2/accounts?sort=id&page%5Blimit%5D=${PAGE_LENGTH}&filter=gt(id,${LAST_ID})" > last_page.json

  # Get count of elements on the page for a termination condition.
  RESULT_COUNT=$(jq '.data | length' last_page.json)

  # Get the last id, used for filter of the next page.
  LAST_ID=$(jq -r '.data[-1].id' last_page.json)

  # Output to CSV
  jq -r '.data[] | "\"\(.name)\", \"\(.legal_name)\", \"\(.registration_id)\", \"\(.id)\", "' last_page.json >> export.csv

  echo "Processed up to: ${LAST_ID}"
done
```
