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

* [Get All Accounts](/docs/api/accounts/get-v-2-accounts)
* [Get All Account Members](/docs/api/accounts/get-v-2-account-members)
* [Get all User Authentication Info](/docs/authentication/single-sign-on/user-authentication-info-api/get-all-user-authentication-info)
* [Get all Entries](/docs/api/flows/get-all-entries)
* [Get all Customers](/docs/customer-management/customer-management-api/get-all-customers)
* [Get Integration Logs](/docs/api/integrations/list-integration-logs)
* [Get all Orders](/docs/api/carts/get-customer-orders)
* [Get all Promotions](/docs/api/promotions/get-all-promotions)
* [Get all Catalogs](/docs/api/pxm/catalog/get-catalogs)
* [Get a Hierarchyʼs Child Nodes in the Latest Release](/docs/api/pxm/catalog/get-hierarchy-child-nodes)
* [Get a Hierarchyʼs Nodes in the Latest Release](/docs/api/pxm/catalog/get-hierarchy-nodes)
* [Get a Product's Children](/docs/api/pxm/catalog/get-child-products)
* [Get all Hierarchies in the Latest Release](/docs/api/pxm/catalog/get-all-hierarchies)
* [Get all Nodes in the Latest Release](/docs/api/pxm/catalog/get-all-nodes)
* [Get all Products in the Latest Release](/docs/api/pxm/catalog/get-all-products)
* [Get a Nodeʼs Children in the Latest Release](/docs/api/pxm/catalog/get-child-nodes)
* [Get Products by Hierarchy in the Latest Release](/docs/api/pxm/catalog/get-products-for-hierarchy)
* [Get Products by Node in the Latest Release](/docs/api/pxm/catalog/get-products-for-node)
* [Get all Catalog Rules](/docs/api/pxm/catalog/get-rules)
* [Get a Hierarchyʼs Child Nodes](/docs/api/pxm/catalog/get-by-context-hierarchy-child-nodes)
* [Get a Hierarchyʼs Nodes](/docs/api/pxm/catalog/get-by-context-hierarchy-nodes)
* [Get a Product's Children](/docs/api/pxm/catalog/get-by-context-child-products)
* [Get all Hierarchies](/docs/api/pxm/catalog/get-by-context-all-hierarchies)
* [Get all Nodes](/docs/api/pxm/catalog/get-by-context-all-nodes)
* [Get all Products](/docs/api/pxm/catalog/get-by-context-all-products)
* [Get a Nodeʼs Children](/docs/api/pxm/catalog/get-by-context-child-nodes)
* [Get Products by Hierarchy](/docs/api/pxm/catalog/get-by-context-products-for-hierarchy)
* [Get Products by Node](/docs/api/pxm/catalog/get-by-context-products-for-node)
* [Get a Product's Nodes](/docs/api/pxm/products/get-products-nodes)
* [Get a Nodeʼs Children](/docs/api/pxm/products/get-all-node-children)
* [Get a Nodeʼs Products](/docs/api/pxm/products/get-node-products)
* [Get all Price Modifiers](/docs/api/pxm/pricebooks/get-price-modifiers)
* [Get All Prices in a Price Book](/docs/api/pxm/pricebooks/get-product-prices)
* [Get all Inventory](/docs/api/pxm/inventory/get-stock-for-all-products)
* [Get all Files](/docs/api/pxm/files/get-all-files)
* [Get all Jobs](/docs/api/pxm/products/get-all-jobs)

## Limitations

### Page Length

By default, page length is set to `25`. You can adjust this setting globally for your project using the [settings endpoint](/docs/api/settings/settings-introduction) or override the setting in any single call. The maximum page length is set to `100` for any paginated call.


### Page Offset 
- Requests to `/v2/orders` and `/v2/files` have a hard offset limit of `10,000` records.
- Requests to other endpoints have a soft offset limit of `10,000` records.

## Performance

In general, requests with a large `page[offset]` are less performant in the Commerce API, especially at scale (either with high
frequency requests or with a high amount of data) and care should be taken when using them.

A common use case for high `page[offset]` is the need to retrieve all the data from a specific endpoint. As an alternative to using high page offsets, many endpoints support the use of an alternative pattern that leverages [filtering](/guides/Getting-Started/filtering) and [sorting](/guides/Getting-Started/sorting). 
 
To use the approach you first decide on which attribute to sort on, with `created_at`, `updated_at`, `id` being the most common. Next you request the first page using the `sort` attribute selected. To get the next page, supply a filter where the attribute has a value greater than or equal to the last value.

For example, to retrieve all [orders](/docs/api/carts/get-customer-orders) in the system, pass the following queries (the dates come from the last result on the previous page):

1. `GET /v2/orders?sort=created_at`
2. `GET /v2/orders?sort=created_at&filter=ge(created_at,2018-04-16T10:11:59.715Z)` 
3. `GET /v2/orders?sort=created_at&filter=ge(created_at,2018-04-16T12:26:12.868Z)`

To use this approach, the main requirement is that the endpoint needs to support comparison operator on a sortable field.

The following are a few other implementation details to consider when using this approach:
1. If using a timestamp value, the granularity of the time stamp on the endpoint might mean you still need to paginate to another page if lots of updates or creates happen at the same time, you can determine if this is necessary by checking if the first timestamp and last timestamp on a page are identical.
2. Due to [eventual consistency](/guides/Getting-Started/eventual-consistency) timestamp values close to the present may not be complete, so you should consider using some buffer if trying to build a complete list.
3. When using `updated_at`, you may see values more than once if a record is updated while this is being processed.
4. Using `updated_at` is a great way to keep another system in sync with delta's because it allows you to see changes in records (except deletes).

### Example: Exporting all accounts to CSV format

The following bash script uses curl and [jq](https://jqlang.github.io/jq/) to build a CSV of all [Accounts](/docs/api/accounts/account-management-introduction) sorted by `id`.

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
