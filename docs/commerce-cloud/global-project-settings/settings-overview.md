---
title: Global Project Settings
nav_label: Overview
sidebar_position: 10
---

Use the Settings API to configure global settings for your project. You can define:

- [page length when paginating results](#page-length)
- [the calculation method you want to use for cart and order totals](#calculation-method)
- [mandatory address fields](#address-mandatory-fields)
- [readonly store settings for internal stores](#readonly-settings)

## Page Length

This defines the number of results per page when paginating results (**max**: `100`).

| Name | Type | Default | Max |
| :--- | :--- | :--- | :--- |
| `page_length` | `integer` | `25` | `100` |

For more information on pagination including a list of which resources support pagination, see [Pagination](/docs/commerce-cloud/api-overview/pagination).

## Calculation Method

This option defines the method used to calculate cart and order totals. Currenlty there are two methods: `{simple}` and `{line}`.

The `{simple}` method is our previous method for calculating cart and order totals which focuses on the total value of the cart. This should only be used in the case where Composable Commerce is not used for tax calculations. The `{line}` method treats each line item individually resulting in more accurate figures after taxes and promotions are applied.

| Name | Type | Value |
| :--- | :--- | :--- |
| `calculation_method` | `string` | `line` |
| `calculation_method` | `string` | `simple` |

:::caution
For stores created since February 2020, `{line}` is the default calculation method. Stores created before February 2020 use `{simple}` as their calculation method.
:::

:::note
Line-item discount promotions, such as `item_percent_discount` and `item_fixed_discount`, are only supported by the `line` calculation method. For more information, see [Promotions](/docs/commerce-cloud/promotions/promotion-management/promotion-management-overview).
:::

## Address Mandatory Fields

You can create an address to associate with an account in your storefront. This defines the address fields that you can use when creating an address in Commerce Manager. For more information, see [Addresses](/docs/commerce-cloud/addresses/about-addresses-api#the-address-object).

Address fields can be required or optional. You can choose which optional address fields to use in your address, depending on your requirements. To change which fields are mandatory for creating an address, see [Update Settings](/docs/commerce-cloud/global-project-settings/update-settings). Changing the mandatory fields does not impact the addresses of customers made before the change.

The following table describes the address fields, their type and whether they are required by default.

| Name | Type | Required |
| :--- | :--- |:---------|
| `type` |`string` | Default  |
| `first_name` |`string` | Default  |
| `last_name` |`string` | Default  |
| `name` |`string` | Optional |
| `phone_number` |`string` | Optional |
| `instructions` |`string` | Optional |
| `company_name` |`string` | Optional |
| `line_1` |`string` | Default  |
| `line_2` |`string` | Optional |
| `city` |`string` | Optional |
| `county` |`string` | Default  |
| `region` |`string` | Optional |
| `postcode` |`string` | Default  |
| `country` |`string` | Default  |

For more information, see [Addresses](/docs/commerce-cloud/addresses/about-addresses-api#the-address-object).

## Readonly Settings

For internal store configurations, read-only settings are used and updating these settings fails without returning any error. 

:::note
- Refer to the [Peformance](/docs/commerce-cloud/api-overview/pagination#performance) section in the Pagination documentation, which outlines patterns for retrieving all documents without using a higher page offset limit.
- To change any predefined configuration, contact [Elastic Path support team](https://support.elasticpath.com/hc/en-us).
:::

| Name                    | Type      | Default                                              |
|:------------------------|:----------|:-----------------------------------------------------|
| `currency_limit`        | `integer` | `10`                                                 |
| `field_limit`           | `integer` | `100`                                                |
| `integration_limit`     | `integer` | `100`                                                |
| `event_limit`           | `integer` | `5`                                                  |
| `filter_limit`          | `integer` | `10`                                                 |
| `tax_item_limit`        | `integer` | `5`                                                  |
| `promotions_limit`      | `integer` | `1000`                                               |
| `promotion_codes_limit` | `integer` | `1000`                                               |
| `page_offset_limit`     | `integer` | `10000` |

