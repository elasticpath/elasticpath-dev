---
title: Sorting
nav_label: Sorting
sidebar_position: 100
---

Many Commerce endpoints support sorting.  The general syntax of sorting within the API is described below.

Sorting is also supported within [JavaScript SDK](/docs/developer-tools#software-development-kits).

## Usage and Syntax

### Query parameters

| Name           | Required | Type     | Description                                                              |
|:---------------|:---------|:---------|:-------------------------------------------------------------------------|
| `sort`         | Optional | `string` | The attribute to sort by. Supported attributes differ based on endpoint. |


## Supported Endpoints

* [Get All Accounts](/docs/api/accounts/get-v-2-accounts)
* [Get All Account Members](/docs/api/accounts/get-v-2-account-members)
* [Get All Account Memberships](/docs/api/accounts/get-v-2-accounts-account-id-account-memberships)
* [Get all User Authentication Info](/docs/authentication/single-sign-on/user-authentication-info-api/get-all-user-authentication-info)
* [Get all Customers](/docs/customer-management/customer-management-api/get-all-customers)
* [Get all Orders](/docs/api/carts/get-customer-orders)
