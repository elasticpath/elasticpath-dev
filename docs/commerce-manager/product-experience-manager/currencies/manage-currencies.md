---
title: Manage Currencies in Stores
nav_label: Manage Currencies in Stores
sidebar_position: 40
---

In your store, you can display prices to customers in their local currency. You can configure up to ten currencies per store.

You can do this using:

- [Commerce Manager](#managing-currencies)
- [Currencies API](/docs/api/pxm/currencies/currencies-introduction)

After a customer selects a locale, the product prices in the catalog, carts, and orders are displayed in the currency for that locale. Order totals and taxes are calculated in the same currency. See [Using Currencies in Catalogs, Carts and Orders](#using-currencies-in-ep-pxm-products-and-catalogs-carts-and-orders).

In Commerce Manager, under **SYSTEM > Store Settings > Currencies** tab, an **ORG** tag is displayed to indicate that the currency belongs to your organization. For more information about organization-level currencies, see [Managing Currencies in Organizations](/docs/commerce-manager/organizations/manage-org-currencies).

## Currency Use Cases

You can use [Currencies API](/docs/api/pxm/currencies/elastic-path-composable-commerce)) or Commerce Manager to achieve the following goals:

- [Set-up default currency](#set-a-default-currency)
- [Set-up multiple currencies](#create-a-currency)
- [Delete or disable existing currencies](#delete-or-disable-currency)
- [Edit existing currencies](#edit-currency)

:::note
In Commerce Manager, when you create a new currency in your organization, a store belonging to that organization may not immediately inherit that currency. You might have to click the three dots associated with the currency **Code**, select **Edit**, and then click **Save** to see the new organization-level currency. See [Edit a Currency](#edit-a-currency).
:::

## Managing Currencies

Configure currencies only for the locales in which you do business, and select one of the currencies to be the default currency. If a default currency is not selected, the store uses the United States Dollar (USD).

### Create a Currency

You can create a currency using [Create a Currency](/docs/api/pxm/currencies/create-a-currency) endpoint or Commerce Manager. You can configure several currency types for your project. 

1. In Commerce Manager, go to **SYSTEM > Store Settings > Currencies** tab.
1. Click **New Currency**.
1. Enter the following information:

     | Field names   | Description |
     | :------------- | :------------- |
     | **Code** | A three-letter currency code. For example: `JPY` for the Japanese Yen. It is recommended that you use the ISO 4217 currency code standard. See [https://www.iso.org/iso-4217-currency-codes.html](https://www.iso.org/iso-4217-currency-codes.html) or [https://en.wikipedia.org/wiki/ISO_4217](https://en.wikipedia.org/wiki/ISO_4217). |
     | **Exchange Rate** | The exchange rate from the default currency. |
     | **Format** |  Specify how the price currency is displayed. For example, `¥{price}` is the format of the Japanese Yen when displayed in text. Depending on localization, a common value for this field might be something like `${price}`, if the currency is to be USD. Canadian French however, uses the symbol as a suffix, so in that case it would be `{price}$`. |
     | **Decimal point** | The decimal point character. For example, `.`. |
     | **Thousands separator** | The thousand separator character. For example, `,`. |
     | **Decimal places** | How many decimal places the currency is formatted to? For example, the US dollar is formatted to two decimal places.

1. (Optional) Select the **Default** checkbox if you want to set this as the default currency for your store.
1. Select the **Enabled** checkbox to enable this currency in your store.
1. Click **Save**.

### Delete or Disable a Currency

If a currency is no longer needed, you can delete it. Deleting destroys that currency object. The currency is automatically deleted from all products that have used it. If this was the only currency set up for the product, the product has no currency, and if used in a request, the default currency is used instead. 

You cannot delete the default currency. If you want to delete the default currency, you must make another currency the default. See [Set a default currency](#set-a-default-currency).

You can do this using the [Delete a Currency](/docs/api/pxm/currencies/delete-a-currency) endpoint or Commerce Manager.

If a currency is no longer needed but you still want to retain it for archiving purposes, disable it. Disabled currencies still show in the currency header, but they can’t be actively used. You can do this using the [Update a Currency](/docs/api/pxm/currencies/update-a-currency) endpoint or Commerce Manager.

#### Disable a currency in Commerce Manager

1. In Commerce Manager, go to **SYSTEM** > **Store Settings** > **Currencies** tab.
1. On the currency you want to disable, from **Actions**, select the ellipsis.
1. Select **Edit**. The **Edit *currency name* currency** dialog is displayed.
1. Clear the **Enabled** checkbox.
1. Click **Save**. 

#### Delete a currency in Commerce Manager

1. In Commerce Manager, go to **SYSTEM** > **Store Settings** > **Currencies** tab.
1. On the currency you want to delete, from **Actions**, select the ellipsis.
1. Select **Delete**. 

### Edit a Currency

Editing the existing currency updates all products that have that currency set-up. You can edit the currency using the [Update a Currency](/docs/api/pxm/currencies/update-a-currency) endpoint or Commerce Manager.

1. In Commerce Manager, go to **SYSTEM** > **Store Settings** > **Currencies** tab.
1. On the currency you want to edit, from **Actions**, select the ellipsis.
1. Select **Edit**. 
    
    The **Edit *currency name* currency** dialog is displayed.
1. Make your changes and click **Save**. 

### Sort and filter currencies in Commerce Manager

You can sort the currencies list by **Code** or **Status**.

You can filter the currencies list to show which currencies are **Enabled** or **Disabled**.

### Set a Default Currency

The default currency is USD and it’s also enabled by default. You can set up any currency as default, as long as the currency is enabled.

In the API, the default currency is used as a fallback currency in a request, if no currency header is provided.

You can configure a default currency using either the [Update a Currency](/docs/api/pxm/currencies/update-a-currency) endpoint or Commerce Manager.

1. In Commerce Manager, go to **SYSTEM** > **Store Settings** > **Currencies** tab.
1. On the currency you want to set as default, from **Actions**, select the ellipsis.
1. Select **Edit**. The **Edit *currency name* currency** dialog is displayed.
1. Select the **Default** checkbox.
1. Click **Save**. 

## Using Currencies in Catalogs, Carts and Orders

After a customer selects a locale, the product prices in the catalog, carts, and orders are displayed in the currency for that locale. Order totals and taxes are calculated in the same currency. You cannot have a cart or order where product prices are in mixed currencies.

## Catalogs 

When a request comes into a gateway, the currency settings are attached to the request based on the `x-moltin-currency` header the user passes in. If the currency is not specified, the project’s default currency is used. The currency settings are responsible for adapting the price format to the currency in use.

For projects that support multiple currency, use the `x-moltin-currencies` header that contains the formatting detail for all currencies available to the project.

```json
[
    {
        "code": "GBP",
        "exchange_rate": 1,
        "format": "\u00A3{price}",
        "decimal_point": ".",
        "thousand_separator": ",",
        "decimal_places": 2
    },
    {
        "code": "USD",
        "exchange_rate": 0,
        "format": "${price}",
        "decimal_point": ".",
        "thousand_separator": ",",
        "decimal_places": 2
    }
]
```

This allows you to have a collection of all currencies, including ones that are disabled.

### Carts and Orders

Carts don’t support multiple currencies. If you add products with mixed currencies, the products automatically fall back and use the default currency. Otherwise, `display_price` is `0`.

Price formatting is handled by Composable Commerce. After a cart converts into an order, the header provides all formatting details available for the currency specified in the order. If the currency doesn’t exist in the project, then currencies `GET` returns sensible defaults, so the `display_price` values won’t be formatted, but the correct order currency is displayed.

When the request gets to orders, the `currency-related` information from the header is put into the meta object of the response.

The formatted price can be found outside the regular price object for a product, in the meta object, which also includes timestamps, stock detail, etc. When getting a list of orders, every order is displayed in the currency the order was taken in.

## Related Resources

- [Currencies](/docs/api/pxm/currencies/elastic-path-composable-commerce)
- [Managing Currencies in Organizations](/docs/commerce-manager/organizations/manage-org-currencies)
