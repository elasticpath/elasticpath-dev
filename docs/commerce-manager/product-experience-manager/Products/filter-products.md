---
title: Filtering Products
nav_label: Filtering Products
sidebar_position: 120
---

You can filter your products. The filter options that are available depend on the attribute you have chosen to filter your products on. 

## Filter Characteristics

Filters in Commerce Manager have the following characteristics.

- You can configure more than one filter at a time. For example, you may want to find all products whose name start with **T-Shirt** and whose SKU is like **287**. A chain of filters must not exceed 10 filters.
- Filters  must not exceed 8KB.  This is equal to approximately, for example, 200 IDs when using a `list` filter.

![filter restriction](/assets/filter_restriction.png)

- Filtering in Commerce Manager is case-sensitive. However, filtering on SKU is not case-sensitive.
- Filters do not work with attributes that contain commas. For example, filtering on this product name does not return any products: 

  ![attribute with comma](/assets/comma_filter.png)

## List Filter Characteristics

The **list** filter has the following characteristics.

- You cannot apply other filters with a **list** filter. The following error message is displayed: 

  ![list filter error](/assets/list_filter_error.png)

- When providing a list, you can separate the items in the list. 

    - (default) **Spaces**
    - **Line breaks**
    - **Comma separated**
    - **View as tags**
  
    The separator you choose depends on your requirements. For example, when using the **list** filter for product name in the following scenario:

    - Product names contain spaces.
    - There is more than one product with the same name.

    you should use **Comma separated** instead of **Spaces**. 

  ![list filter separator example](/assets/list_seperator.png)


:::tip
Filter query parameters are available in the URL. Bookmark your filter URL to automatically activate that filter without having to reapply the filter each time.
:::

## Supported Characters

The following table describes the supported characters that can be used in filters.

| Characters                 | Can be used in filter?                 |
|:---------------------------|:---------------------------------------|
| `A-Z` (upper & lower case) | Yes                                    |
| `0-9`                      | Yes                                    |
| `$` `-` `_` `*` `.`        | Yes                                    |
| " " (space)                | Yes (a`+` is also treated as a space). |


## Supported Date Formats

If you need to specify a date, specify the date in `YYYY-MM-DD` format, for example 2022-04-27. You can also specify the
date as an integer number of milliseconds since 1970-01-01 00:00:00. This is also known as UNIX time. For example,
`640912546584`.

## Filter Options

The following table describes the filter options available for each attribute.

| Attribute           | Filter                                                                                                      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|---------------------|-------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ID                  | <ul><li>**is**</li><li>**list**</li></ul>                                                                   | <ul><li>For **is**, type the value you want. You can use [supported characters](#supported-characters).</li><li>For **list**, specify a list of IDs. Only the products whose IDs you have specified are shown.</li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Name                | <ul><li>**starts with**</li><li>**is**</li><li>**is like**</li><li>**ends with**</li><li>**list**</li></ul> | <ul><li>For **starts with**, **is**, **is like**, and **ends with**, type the value you want. You can use [supported characters](#supported-characters).</li><li>For **list**, specify a list of names. Only the products whose names you have specified are shown.</li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| SKU                 | <ul><li>**starts with**</li><li>**is**</li><li>**is like**</li><li>**ends with**</li><li>**list**</li></ul> | <ul><li>For **starts with**, **is**, **is like**, and **ends with**, type the value you want. You can use [supported characters](#supported-characters).</li><li>For **list**, specify a list of SKUs. Only the products whose SKUs you have specified are shown.</li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Description         | <ul><li>**starts with**</li><li>**is**</li><li>**is like**</li><li>**ends with**</li></ul>                  | Type the value that you want. You can use [supported characters](#supported-characters).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Slug                | <ul><li>**starts with**</li><li>**is**</li><li>**is like**</li><li>**ends with**</li><li>**list**</li></ul> | <ul><li>For **starts with**, **is**, **is like**, and **ends with**, type the value you want. You can use [supported characters](#supported-characters).</li><li>For **list**, specify a list of slug. Only the products whose slugs you have specified are shown.</li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Commodity Type      | <ul><li>**Physical**</li><li>**Digital**</li></ul>                                                          | Select  **Physical** or **Digital** to display a list of physical or digital products.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| UPC/EAN             | <ul><li>**starts with**</li><li>**is**</li><li>**is like**</li><li>**ends with**</li><li>**list**</li></ul> | <ul><li>For **starts with**, **is**, **is like**, and **ends with**, type the value you want. You can use [supported characters](#supported-characters).</li><li>For **list**, specify a list of UPC/EANs. Only the products whose UPC/EANs you have specified are shown.</li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| MPN                 | <ul><li>**starts with**</li><li>**is**</li><li>**is like**</li><li>**ends with**</li><li>**list**</li></ul> | <ul><li>For **starts with**, **is**, **is like**, and **ends with**, type the value you want. You can use [supported characters](#supported-characters).</li><li>For **list**, specify a list of MPNs. Only the products whose MPNs you have specified are shown.</li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Status              | <ul><li>**Live**</li><li>**Draft**</li></ul>                                                                | Select **Live** or **Draft** to display a list of live or draft products.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Templates           | <ul><li>**is**</li><li>**list**</li></ul>                                                                   | Use this filter to filter template attributes. <ol><li>Select a template from the list.</li><li>In **Attributes**, select an attribute from the list. (Attributes with a `date` type are not displayed because Commerce Manager does not support filtering on template attributes with a `date` type.) The filter operators are displayed.</li><li>Select **is** or **list**. The **list** filter option does not support `integer`, `float`, or `boolean` attributes, hence no filter operators are displayed for attributes of these types.</li><li>Enter the values you want to search for.</li></ol>You can chain filters to search for more than one template attribute at a time.                                                                                                                                                                                                                                                                           |
| Owner               | <ul><li>**Organization**</li><li>**Store**</li></ul>                                                        | Select **Organization** or **Store** to display a list of organization or store products.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Has Node Assignment | **False**                                                                                                   | Use this filter to find orphaned products. Products must be assigned to nodes to be included in a catalog. **Note**: You cannot use this filter to show products that *are* assigned to nodes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| External Reference  | <ul><li>**starts with**</li><li>**is**</li><li>**is like**</li><li>**ends with**</li><li>**list**</li></ul> | <ul><li>For **starts with**, **is**, **is like**, and **ends with**, type the value you want. You can use [supported characters](#supported-characters).  External references have a maximum length of 2048 characters.</li><li>For **list**, specify a list of external references. Only the products whose external references you have specified are displayed.</li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | 
| Product Types       | <ul><li>**is**</li><li>**list**</li></ul>                                                                   | <ul><li>For **is**, enter the product type you want.</li><li>For **list**, specify a list of product types. Only those product types are displayed.</li><ul><li>`standard` - A standard product is a standalone product.</li><li>`parent` - A parent product is a product that has child products that have been built in Commerce Manager. See [Assigning Variations and Building Child Product](/docs/commerce-manager/product-experience-manager/variations/assign-variations-build-child-products).</li><li>`child` -  When you configure product variations and variation options for parent products, the child products derived from the parent products are automatically created in Commerce.</li><li>`bundle` - A bundle is a purchasable product, comprising one or more standalone products (in other words, `components`) to be sold together. See [Bundle Components and Options](/docs/commerce-manager/product-experience-manager/bundles/bundle-configuration#bundle-components-and-options).</li></ul></ul> |

## Creating Filters

The following steps describe how to create a filter.

1. Click **Products**.
1. Click **Filters**. 
1. From the list, select the attributes you want to filter your products on. The filter options are displayed. The options that display depend on the attributes you have selected.
1. Configure your filter. See [Filter Options](#filter-options).
1. Once you have configured your filter, either:

   - Press **Enter** to automatically apply your filter.
   - Click **Apply Filters**.
 
    Commerce Manager displays the number of products that match your filter.

![Product Filtering](/assets/cm_filtering.gif)

1. Your filters are retained even when you navigate away from the filter results. You can remove your filters at any time by, either, removing an individual filter or, clicking **Clear All**.

