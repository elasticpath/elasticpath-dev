---
title: Product Templates Attributes in Commerce Manager
nav_label: Templates and Attributes in Commerce Manager
sidebar_position: 40
---

## Templates

Templates are a collection of attributes. Attributes are grouped together to match a particular product type or to provide an input for other purposes, such as Search Engine Optimization (SEO) or product specification. For example, a *Book* template might contain the attributes, such as *ISBN*, *Author*, *Number of pages*, *Year Published*, or *Condition (New/Used)*.

:::caution
Custom names and values prefixed with `$` are not supported.
:::

You must create a template before creating attributes.

You can only assign an attribute to one template. If you want to assign an attribute to more than one template, you must create an attribute for each template.

If you want to delete a template, we recommend deleting all attributes assigned to a template before deleting the template.

Once a template is deleted, you cannot reassign a new template to the attributes or use the attributes again.

### Creating templates

1. In the **Product Experience Manager > Configurations** page, click **Templates** tab.
1. Click **Add Template**.
1. Enter the following details:

    - **Name**
    - **Slug**
    - **Description**

1. To change the status, click the **Status** toggle. You can set either **Live** or **Draft** status for the template.
1. Click **Save**

### Viewing and editing templates

1. In the **Product Experience Manager > Configurations** page, click **Templates** tab.
1. Click a template.
1. View or update the following details as required:

    - **Name**
    - **Slug**
    - **Description**
    - **Status**

1. All attributes assigned to the template are displayed in a table. However, you can only view the attributes, you cannot edit or delete the attributes. If you want to remove an attribute from the template, see [Deleting Attributes](/docs/pxm/products/extending-pxm-products/pxm-product-attributes-api/delete-attribute).
1. Click **Save** to save your template.

### Deleting templates

We recommend [deleting Attributes](#deleting-attributes) assigned to a template before deleting the template. You cannot assign a new template to the attributes or use the attributes again after deleting the template.

1. Go to **Product Experience Manager > Configurations**.
1. Select **Templates**.
    - If you want to delete more than one template, select the checkboxes of the templates that you want to delete. In **Actions**, select **...** and select **Delete**.
    - If you only want to delete one template, in **Actions**, select **...** next to the template you want to delete and select **Delete**.
1. A dialog is displayed that warns you that the template will no longer be available to use or to associate attributes to.
1. Click **Delete** to close the dialog box and delete the template.

## Attributes

Use attributes to define the characteristics of products in a store. For example, you can assign attributes such as, color and size, to a shirt. When a shopper searches for a specific item, attributes help stores to return the products that match the search criteria. For example, when a shopper searches for a large blue shirt, all shirts that are large and blue are returned as the search result.

In attributes configuration, you can specify whether an attribute is required. For example, you can set *size* attribute as required for a T-shirt and *color* attribute as optional. This feature helps to avoid using all attributes in a flow if those attributes in the flow are not necessary for the product. With this option, you can set attributes that you don’t need for a specific product as optional and still use the template. For example, if the template has 50 attributes, and you need only three attributes for a single product, you can set all attributes except the ones you need as optional. This helps to avoid returning product with all attributes when you search for it.

### Creating attributes

#### Before you begin

- Ensure that at least one template is created.

#### Procedure

1. Go to **Product Experience Manager > Configurations**.
1. Select **Attributes**.
1. Select **Add Attribute**.
1. In the **Name** field, enter a name for the attribute.
1. To mark an attribute as required, select the **Required Attribute** toggle.
1. To set the status of an attribute to *Live*, select the **Attribute Status** toggle.
1. If you want to hide this attribute in your published catalog if no data has been set, select the **Hide Empty Template Fields** toggle.
1. In the **Description** field, enter a description for the attribute.
1. In the **Slug** field, enter a unique slug for the attribute. These slugs are shown in the results when you search for a product with attributes.
1. (Optional) In the **Default Value** field, enter a default value. You can set this value to use when a user does not provide a value for the attribute and the attribute value is required.
1. In the **Field Type** field, select one of the following options:

    - **Boolean**
    - **Float**
    - **Integer**
    - **Date**
    - **String**

1. In the **Template** field, select a template. You can link an attribute to only one template.
1. In the **Order** field, specify the order in which this attribute is returned relative to the rest of the flow fields.
1. Click **Save**.

### Editing attributes

Ensure that you republish the catalog release after editing hierarchies to reflect the changes in the storefront.

:::caution
You cannot edit the **Field Type** or **Template** settings. In other words, once an attribute is created, you cannot change it's field type or assign it to another template.
:::

1. Go to **Product Experience Manager > Configurations**.
1. Select **Attributes**.
1. Double-click the attribute that you want to edit.
1. Update the details as required.
1. Click **Save**.

For the changes to appear in the storefront, you must republish the affected catalogs.

### Deleting attributes

1. Go to **Product Experience Manager > Configurations**.
1. Select **Attributes**.
    - If you want to delete more than one attribute, select the checkboxes of the attributes that you want to delete. In **Actions**, select **...** and select **Delete**.
    - If you only want to delete one attribute, in **Actions**, select **...** next to the attribute you want to delete and select **Delete**.

## Related Resources

- [Product Templates](/docs/pxm/products/extending-pxm-products/pxm-product-templates-api/pxm-product-templates-overview)
- [Product Attributes](/docs/pxm/products/pxm-products#product-attributes)
- [Price books](/docs/pxm/pricebooks/price-books)
- [Catalog](/docs/pxm/catalogs/catalogs)
- [Create a template](/docs/pxm/products/extending-pxm-products/pxm-product-templates-api/create-a-template)
- [Create an attribute](/docs/pxm/products/extending-pxm-products/pxm-product-attributes-api/create-attribute)

### Demos

- [Understanding Attributes and Templates](https://share.vidyard.com/watch/gGq3m4uK7wqKcjrbyos5My?)
