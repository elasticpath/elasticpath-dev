---
title: Organization Product Relationships
nav_label: Organization Product Relationships
nav_position : 2
---

You can create product relationships between products in Product Experience Manager, allowing you to link or associate your products in certain ways based on criteria of your choosing. These relationships help improve user experience, boost sales, and enhance product discoverability. You can create product relationships in both the [Product Experience Manager API](/docs/api/pxm/products/product-experience-manager-introduction) and [Commerce Manager](/ui). For more information, see [Custom Relationships](/docs/partials/pxm/custom-relationships/croverview).

:::note

In the Product Experience Manager Open API, product relationships are called custom relationships.

:::

An organization can create up to 5 product relationships. Organization products can be associated to organization products in organization product relationships. Similarly, a store in an organization can create up to 5 product relationships, and store products can be associated with store products in store product relationships. 

Product relationships in organizations and stores can have the same slug. However, when a store admin gets a product relationship by specifying a slug, only the store custom relationship is returned.

In addition, each store within an organization can access and use the organization's custom relationships and products. Furthermore, stores can also associate their custom relationships with organization-level products, even if those products are already associated to products in 5 custom relationships defined at organization level.

When different stores within an organization have their own products linked to the same organization-level product or custom relationship, each store will only see its own products and their specific associations with the organization-level product or relationship.

For more information, see [Organization and Store Entities](/guides/key-concepts/organizations/org-level-entities).

In Commerce Manager, an Org Admin can manage custom relationships in both organization and stores.

## Creating Organization Custom Relationships

To create a custom relationship in your organization:

1. Log into Commerce Manager as an Org Admin.
1. Select **Organizations**.
1. On the **Your organizations** page, select the organization you would like to manage from the list.
1. Go to **Product Experience Manager** > **Configurations** > **Custom Relationships**.
1. Click **Create Custom Relationship**.
1. Enter the custom relationship details and select **Save Custom Relationship**.

Your organization custom relationships are automatically available to all the stores within your organization.

## Adding a Product to a Custom Relationship

To add a product to a custom relationship in your organization:

1. Go to **Product Experience Manager** > **Products**. A list of your organization products is displayed.
1. Select the product that you want to add to a custom relationship.
1. Expand **Product Relationships**.
1. Select **Add a Product Relationship**. A list of product relationships is displayed.
1. Choose **Select** next to the product relationship where you want to add your product. 

## Associate Products to Products in a Product Relationship



