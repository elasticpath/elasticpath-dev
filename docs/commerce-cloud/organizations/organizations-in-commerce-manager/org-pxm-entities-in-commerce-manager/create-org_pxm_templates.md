---
title: Organization Templates
nav_label: Organization Templates
nav_position : 2
---

You can create templates for your products at both the organization and store level. Templates are a collection of attributes. Use attributes to define the characteristics of products in an organization or store or to provide an input for other purposes, such as Search Engine Optimization (SEO) or product specification. For example, a Book template might contain attributes, such as ISBN, Author, Number of pages, Year Published, or Condition (New/Used).

Although, you can create product templates for both organization and store, stores can use organization templates for store-level products. This is useful, if you have an attribute that applies to all products in all stores. You can define the template once at organization-level and relate the template to all products across all your stores.

In Commerce Manager, an Org Admin can manage templates in both organization and stores.

:::caution
- A Store Admin and Org Admin cannot create entries for the same product ID. In other words, a Store Admin cannot create an entry for a product if an Org Admin has already created an entry for the product.
- If a Store Admin creates or updates entries on an organization's template's attributes that have relationships with an organization's products, the entries do not appear on the organization's products.
:::

For example, AllGoods have a unique identifier for all their organization and store products. AllGoods can define a template for this attribute that can be applied to all their organization and store products.

## Creating Organization Product Templates

1. Log into Commerce Manager as an Org Admin.
1. Select **Organizations**.
1. On the **Your organizations** page, select the organization you would like to manage from the list.
1. Go to **Product Experience Manager** > **Configurations** > **Templates**.
1. Click **Add Template**.
1. Enter the template details and select **Save**.
1. Click **Attributes** tab.
1. Click **Add Attribute**.
1. Enter the attribute details and select **Save**.

Your organization templates are automatically available to all the stores within your organization.

![organization PXM templates](/assets/org_templates.png)

Your products can have attributes from organization templates or a combination of organization and store templates.

![organization PXM templates](/assets/org_attribute.png)


