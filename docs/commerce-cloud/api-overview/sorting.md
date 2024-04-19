---
title: Sorting
nav_label: Sorting
sidebar_position: 100
---

Many Commerce endpoints support sorting.  The general syntax of sorting within the API is described below.

Sorting is also supported within [JavaScript SDK](/docs/api-overview/sdk).

## Usage and Syntax

### Query parameters

| Name           | Required | Type     | Description                                                              |
|:---------------|:---------|:---------|:-------------------------------------------------------------------------|
| `sort`         | Optional | `string` | The attribute to sort by. Supported attributes differ based on endpoint. |


## Supported Endpoints

* [Get All Accounts](/docs/commerce-cloud/accounts/using-account-management-api/get-all-accounts)
* [Get All Account Members](/docs/commerce-cloud/accounts/using-account-members-api/get-all-account-members)
* [Get All Account Memberships](/docs/commerce-cloud/accounts/using-account-membership-api/get-all-account-memberships)
* [Get all User Authentication Info](/docs/commerce-cloud/authentication/single-sign-on/user-authentication-info-api/get-all-user-authentication-info.md)
* [Get all Customers](/docs/commerce-cloud/customer-management/customer-managment-api/get-all-customers)
* [Get all Orders](/docs/commerce-cloud/orders/orders-api/get-all-orders)
