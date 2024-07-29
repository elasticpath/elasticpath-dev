---
title: Filtering
nav_label: Filtering
sidebar_position: 90
---

Many Commerce API endpoints support filtering. The general syntax is described below, but you must 
go to a specific endpoint page to understand the attributes and operators an endpoint supports.  

:::note
Elastic Path is constantly improving the filtering and search capabilities. The new syntax is an evolution of the original syntax. The new syntax allows more characters and formats. In addition, the new syntax has a simpler encoding scheme that allows more flexible searching. See [Beta Filtering](#beta-filtering).
:::

## Supported Endpoints

Filtering is currently supported on the following endpoints:

* [Get all accounts](/docs/api/accounts/get-v-2-accounts)
* [Get all account members](/docs/api/accounts/get-v-2-account-members)
* [Get all account memberships](/docs/api/accounts/get-v-2-accounts-account-id-account-memberships)
* [Get all account memberships on account member](/docs/api/accounts/get-v-2-account-members-account-member-id-account-memberships)
* [Get all unassigned account members](/docs/api/accounts/get-v-2-accounts-account-id-account-memberships-unassigned-account-members)
* [Get all user authentication info](/docs/authentication/single-sign-on/user-authentication-info-api/get-all-user-authentication-info)
* [Get all customers](/docs/customer-management/customer-management-api/get-all-customers)
* [Get all orders](/docs/api/carts/get-customer-orders)
* [Get personal data erasure requests](/docs/personal-data/personal-data-erasure-requests-api/get-personal-data-erasure-requests)
* [Get personal data logs](/docs/personal-data/personal-data-logs-api/get-personal-data-logs)
* [Get personal data related data entries](/docs/personal-data/personal-data-related-data-entries-api/get-personal-data-related-data-entries)
* [Get all promotions](/docs/api/promotions/get-all-promotions)
* [Get a hierarchy's children in the latest release](/docs/api/pxm/catalog/get-hierarchy-child-nodes)
* [Get a hierarchy's nodes in the latest release](/docs/api/pxm/catalog/get-hierarchy-nodes)
* [Get a node in the latest release](/docs/api/pxm/catalog/get-node)
* [Get a product's children](/docs/api/pxm/catalog/get-child-products)
* [Get all hierarchies in the latest release](/docs/api/pxm/catalog/get-all-hierarchies)
* [Get all nodes in the latest release](/docs/api/pxm/catalog/get-all-nodes)
* [Get all products in the latest release](/docs/api/pxm/catalog/get-all-products)
* [Get a nodeʼs Children in the latest release](/docs/api/pxm/catalog/get-child-nodes)
* [Get all products in a hierarchy in the latest release](/docs/api/pxm/catalog/get-products-for-hierarchy)
* [Get all products by node in the latest release](/docs/api/pxm/catalog/get-products-for-node)
* [Get a hierarchy's children in a shopper catalog](/docs/api/pxm/catalog/get-by-context-hierarchy-child-nodes)
* [Get a hierarchy's nodes in a shopper catalog](/docs/api/pxm/catalog/get-by-context-hierarchy-nodes)
* [Get a product's child products in a shopper catalog](/docs/api/pxm/catalog/get-by-context-child-products)
* [Get all hierarchies in a shopper catalog](/docs/api/pxm/catalog/get-by-context-all-hierarchies)
* [Get all nodes in a shopper catalog](/docs/api/pxm/catalog/get-by-context-all-nodes)
* [Get all Products in a shopper catalog](/docs/api/pxm/catalog/get-by-context-all-products)
* [Get a nodeʼs children in a shopper catalog](/docs/api/pxm/catalog/get-by-context-child-nodes)
* [Get all products in a hierarchy in a shopper catalog](/docs/api/pxm/catalog/get-by-context-products-for-hierarchy)
* [Get all products in a node in a shopper catalog](/docs/api/pxm/catalog/get-by-context-products-for-node)
* [Get all catalog rules](/docs/api/pxm/catalog/get-rules)
* [Get all price books](/docs/api/pxm/pricebooks/get-pricebooks)
* [Get all price modifiers](/docs/api/pxm/pricebooks/get-price-modifiers)
* [Get all prices in a price book](/docs/api/pxm/pricebooks/get-product-prices)
* [Get all products](/docs/api/pxm/products/get-all-products)
* [Get all product prices](/docs/api/pxm/pricebooks/get-prices)
* [Get all entries](/docs/api/flows/get-all-entries)
* [Get all files](/docs/api/pxm/files/get-all-files)
* [Get Jobs](/docs/api/pxm/products/get-all-jobs)
* [Get all Custom APIs](/docs/api/commerce-extensions/get-all-custom-apis)
* [Get all Custom Fields](/docs/api/commerce-extensions/get-all-custom-fields)
* [Get all Custom API Entries](/docs/api/commerce-extensions/get-all-custom-entries)

## Filtering Syntax

You can filter results returned from the API using a standard URI format.

- You can only filter on base-object attributes, such as, `name`, `slug` and `sku`. Filtering on flow fields is not supported. See the individual endpoint for a list of supported filter attributes and operators.
- A maximum of 10 filters is allowed on a single request.
- A request containing filters must not exceed 8KB.  This is equal to approximately 200 IDs when using an `in` filter.

  ![filter restriction](/assets/filter_restriction_api.png)

- Passing an incorrectly formatted filter or using an unsupported operator returns a `400` response with the following
  error:

    ```json
    {
       "errors": [
         {
           "title": "Bad Request",
           "detail": "Could not parse the supplied filter"
         }
       ]
    }
    ```

### Supported Characters

As filters are passed as URL query string parameters, you must ensure all filters are URL safe and be strict about the
characters that are used in a filter.

| Characters                 | Can be used in filter?                             |
|:---------------------------|:---------------------------------------------------|
| `A-Z` (upper & lower case) | Yes                                                |
| `0-9`                      | Yes                                                |
| `$` `-` `_` `*` `.`        | Yes                                                |
| " " (space)                | Yes (an unencoded `+` is also treated as a space). |
| `+`                        | Only when URL encoded (`%2B`).                     |

### Supported Date Formats

If you need to specify a date, specify the date in `YYYY-MM-DD` format, for example 2022-04-27. You can also specify the
date as an integer number of milliseconds since 1970-01-01 00:00:00. This is also known as UNIX time. For example,
`640912546584`.

### URL Encoding Filters

We recommend URL encoding filters. For ease of use, you can encode the full filter,
so `filter=eq(email,ron+1@swanson.com)` becomes `filter=eq%28email%2Cron%2B1%40swanson.com%29`.

### Performance

Filtered queries may be less performant than non-filtered queries, especially at scale (either with high
frequency requests or with a high amount of data) and care should be taken when using them. In particular:

1. The `like` operator can take longer, for example, when there is a leading wildcard or a wildcard on both sides of the search term.
2. The `in` operator with a large number of options can result in degraded performance.

Best practices are:

1. Using `eq` when possible instead of `like`.
2. Adding another search operator to narrow down the request. For example, adding `eq(status,paid)`, or `gt(updated_at,<DATE>)` to `like(contact.name,<SEARCH>)` may have higher performance.
3. Storing a copy of the filtered results in a [Custom Data (Flows)](/docs/api/flows/flows-service-introduction) and querying the flow. The flow can be populated using a combination of batch processing or [Events](/docs/api/integrations/integrations-introduction).

### Supported Operators

The following search operators are supported with the original filtering syntax.

| **Operator** | Description                                                                                                                                            |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------|
| `eq`         | Equals. Checks if the values of two operands are equal. If they are, the condition is true.                                                            |
| `like`       | Like. Checks if the operand contains the specified string. Wildcards are supported.                                                                    |
| `in`         | In. Checks if the values are included in the specified, comma separated, list. If they are, the condition is true. Wildcards are not supported.        |
| `gt`         | Greater than. Checks if the value of the first operand is greater than that of the second. If they are, the condition is true.                         |
| `ge`         | Greater than or equal to. Checks if the value of the first operand is greater than or equal to that of the second. If they are, the condition is true. |
| `lt`         | Less than. Checks if the value of the first operand is less than that of the second. If they are, the condition is true.                               |
| `le`         | Less than or equal to. Checks if the value of the first operand is less than or equal to that of the second. If they are, the condition is true.       |

Multiple filters can be supplied at once seperated by a colon \(`:`\) which will logically AND the results.

For more detail on filtering, see the Filtering section under each endpoint.

## Beta Filtering

The `filter` query parameter can be supplied to supported endpoints. The value of this query parameter is a series of
one or more operators, along with its operands. For instance `filter=eq(email,ron@swanson.com)` has an operator of `eq`
and operands of `email` and `ron@swanson.com`. The first operand for all operators is the field on the resource that is being filtered.

:::note
The new filtering algorithm is used automatically when the existing filtering algorithm cannot understand the filter,
one way to ensure it is used is to always use [quoted operands](#quoted-operands).

If you do not want to use beta filtering, in your request set the header `EP-Disable-Beta-Filtering` to `true`. In some cases this may entirely disable filtering for an endpoint so use this option selectively only when needed on particular endpoints.
:::

### Supported Operators

In general, the following operators are supported. However, not every field supports every operator. See the Filtering section for each endpoint to see the operators an endpoint supports.

| **Operator** | Description                                                                                                                                                  |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `eq`         | Equals. Checks if the field in the first operand is equal to the second operand. If they are, the condition is true.                                         |
| `like`       | Like. Checks if the field in the first operand contains the specified string. Wildcards are supported, at either the beginning, end or both.                 |
| `in`         | In. Checks if the field in the first operand matches any of the remaining specified values. If they are, the condition is true. Wildcards are not supported. |
| `gt`         | Greater than. Checks if the field in the first operand is greater than that of the second. If they are, the condition is true.                               |
| `ge`         | Greater than or equal to. Checks if the field in the first operand is greater than or equal to that of the second. If they are, the condition is true.       |
| `lt`         | Less than. CChecks if the field in the first operand is less than that of the second. If they are, the condition is true.                                    |
| `le`         | Less than or equal to. Checks if the field in the first operand is less than or equal to that of the second. If they are, the condition is true.             |
| `is_null`    | Is null. Checks if the value of the operand is null. If it is, the condition is true.                                                                     |

Multiple filters can be supplied at once seperated by a colon \(`:`\) which will logically AND the results.

### Specifying Operands

The following characters can be used when constructing an operand:

- Alphanumeric characters: `a-z`, `A-Z`, `0-9`
- Special Characters: `@`, `$`, `_`, `*`, `.`, `{`, `}`, `|`, `+`, `:`, `/`, `-`
- Spaces, however leading spaces are dropped, and it is recommended you use quoted operands described next when you have
  white space.

### Quoted Operands

:::note
As this feature is in beta, quoted operands are only working with the following endpoints:

- [Get all accounts](/docs/api/accounts/get-v-2-accounts)
- [Get all account members](/docs/api/accounts/get-v-2-account-members)
- [Get all unassigned account members](/docs/api/accounts/get-v-2-accounts-account-id-account-memberships-unassigned-account-members)
- [Get all user authentication info](/docs/authentication/single-sign-on/user-authentication-info-api/get-all-user-authentication-info)
- [Get all customers](/docs/customer-management/customer-management-api/get-all-customers)
- [Get all orders](/docs/api/carts/get-customer-orders)
- [Get all files](/docs/api/pxm/files/get-all-files)
- [Get all price books](/docs/api/pxm/pricebooks/get-pricebooks)
- [Get all prices in a price book](/docs/api/pxm/pricebooks/get-product-prices)
- [Get all price modifiers](/docs/api/pxm/pricebooks/get-price-modifiers)
- [Get all promotions](/docs/api/promotions/get-all-promotions)
- [Get all product prices](/docs/api/pxm/pricebooks/get-prices)
- [Get all products](/docs/api/pxm/products/get-all-products)
:::

If you need to search for unsupported operands, or white space is significant (for example, a value starts with a
space), you can also quote the operand, as shown below:

- `filter=eq(name,"Ron Swanson")`
- `filter=gt(updated_at,"2018-04-16T10:11:59.715Z")`

:::note
You can use `'`, or `"` as the quoting character, and should escape nested quotes with a `\`. For
example: `filter=eq(name,'Food \'n Stuff')`  
:::

### URL Encoding Filters

As filters are supplied in the URL, they need to be URL encoded before being sent. In most cases your User Agent should
handle this automatically.

### Supported Date Formats

You can use both Dates and Timestamps in the filters and pass them in as arguments.

### Limitations

- You can only filter on base object attributes, such as, `name`, `description`, `slug` and `sku`. Filtering on flow fields is not supported.
- A maximum of 10 filters is allowed on a single request.
- A request containing filters must not exceed 8KB.

### Errors

An incorrectly formatted filter or an unsupported operator returns a `400` response with the following error:

```json
{
  "errors": [
    {
      "title": "Bad Request",
      "detail": "Could not parse the supplied filter"
    }
  ]
}
```

### Performance

Filtered queries may be less performant than non-filtered queries, especially at scale (either with high
frequency requests or with a high amount of data) and care should be taken when using them. In particular:

1. The `like` operator can take a noticeably longer amount of time, especially when there is a leading wildcard or wildcard on both sides of the search term.
2. The `in` operator with a large number of options can also result in degraded performance.

Best practices are:

1. Using `eq` when possible instead of `like`.
2. Adding another search operator can often narrow down the request. For example, adding `eq(status,paid)`, or `gt(updated_at,<DATE>)` to `like(contact.name,<SEARCH>)` may have higher performance.
3. Storing a copy of the filtered results in a [Custom Data (Flows)](/docs/api/flows/flows-service-introduction) and querying that. The flow can be populated using a combination of batch processing or [Events](/docs/api/integrations/integrations-introduction).
