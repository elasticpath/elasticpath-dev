---
title: Dynamic Variables for Product Experience Manager
nav_label: Dynamic Variables for Product Experience Manager
sidebar_position: 110
---

You can dynamically set up your product detail (PDP) and product listing pages (PLP) using data from Product Experience Manager.

The following table describes how the attributes in Product Experience Manager map to the dynamic variables in Studio that you can use to populate your PDPs and PLPs.

## Product Experience Manager Products

The following tables describe how the Product Experience Manager product attributes map to Studio dynamic variables. For more information on Product Experience Manager product attributes, see [Create a Product](/docs/api/pxm/products/create-product).

### Products

Product Experience Manager products have the following attributes. For more information on Product Experience Manager product attributes, see [Create a Product](/docs/api/pxm/products/create-product).

| PXM Attribute | Studio Dynamic Variable              |
| --- |--------------------------------------| 
| external_ref | {{product.attributes.externalref}}   | 
| name | {{product.attributes.name}}          |
| description | {{product.attributes.description}}   |
| slug | {{product.attributes.slug}}          | 
| sku | {{product.attributes.sku}}           |
| status | {{product.attributes.status}}        |
| commodity_type | {{product.attributes.commoditytype}} |
| upc_ean | {{product.attributes.upcean}}        |
| mpn | {{product.attributes.mpn}}           |

### Locales

Product Experience Manager supports localization of products. For more information on Product Experience Manager localization attributes, see [Create a Product](/docs/api/pxm/products/create-product).

| PXM Attribute | Studio Dynamic Variable            |
|---------------|------------------------------------| 
| property name | {{locale.attributes.propertyname}} | 
| name          | {{locale.attributes.name}}         |
| description   | {{locale.attributes.description}}  |

### Tags

You can use product tags to store or assign a key word against a product. The product tag can then be used to describe or label that product. For more information on Product Experience Manager tag attributes, see [Create a Product](/docs/api/pxm/products/create-product).

| PXM Attribute | Studio Dynamic Variable    |
|---------------|----------------------------| 
| tags          | {{locale.attributes.tags}} | 

### Build Rules

Product Experience Manager allows you to build a combination of child products associated with a product, based on build rules that you specify. For more information on Product Experience Manager variation attributes, see [Create a Product](/docs/api/pxm/products/create-product).

| PXM Attribute | Studio Dynamic Variable      |
|---------------|------------------------------| 
| default       | {{build.attributes.default}} | 
| include       | {{build.attributes.include}} |
| exclude       | {{build.attributes.exclude}} |

### Custom Inputs

Product Experience Manager allows your shoppers to add custom text to a product when adding product items to a cart. For more information on Product Experience Manager custom attributes, see [Create a Product](/docs/api/pxm/products/create-product).

| PXM Attribute    | Studio Dynamic Variable                |
|------------------|----------------------------------------| 
| property name    | {{custom.attributes.propertyname}}     | 
| name             | {{custom.attributes.name}}             |
| validation_rules | {{custom.attributes.vallidationrules}} |
| type | {{custom.attributes.type}}             |
| options | {{custom.attributes.options}}          |
| max_length | {{custom.attributes.maxlength}}        | 
| required | {{custom.attributes.required}}         |

### Components

Product Experience Manager allows you to create and manage bundles. A bundle is a purchasable product, comprising of one or more products that you want to sell together. You can create multiple components within a bundle. Each component must have at least one or more options. Each option is a product and a quantity. For more information on Product Experience Manager bundle attributes, see [Create a Product](/docs/api/pxm/products/create-product).

| PXM Attribute | Studio Dynamic Variable                |
|---------------|----------------------------------------| 
| property name | {{custom.attributes.propertyname}}     | 
| name          | {{custom.attributes.name}}             |
| min           | {{custom.attributes.vallidationrules}} |
| max           | {{custom.attributes.type}}             |
| sort_order    | {{custom.attributes.options}}          |

#### Options

Each bundle component must have at least one or more options. Each option is a product and a quantity. For more information on Product Experience Manager bundle attributes, see [Create a Product](/docs/api/pxm/products/create-product).

| PXM Attribute | Studio Dynamic Variable         |
|---------------|---------------------------------| 
| id            | {{custom.attributes.id}}        | 
| type          | {{custom.attributes.type}}      |
| quantity      | {{custom.attributes.quantity}}  |
| sort_order    | {{custom.attributes.sortorder}} |
| default       | {{custom.attributes.default}}   |

## Product Experience Manager Hierarchies

The following tables describe how the Product Experience Manager hierarchy and node attributes map to Studio dynamic variables. For more information on Product Experience Manager hierarchy attributes, see [Create a hierarchy](/docs/api/pxm/products/create-hierarchy).

### Hierarchies

Product Experience Manager hierarchies have the following attributes. For more information on Product Experience Manager hierarchy attributes, see [Create a hierarchy](/docs/api/pxm/products/create-hierarchy).

| PXM Attribute  | Studio Dynamic Variable             |
|----------------|-------------------------------------| 
| name           | {{category.attributes.name}}        |
| description    | {{category.attributes.description}} |
| slug           | {{category.attributes.slug}}        |

### Locales

Product Experience Manager supports localization of hierarchies. For more information on Product Experience Manager hierarchy localization attributes, see [Create a hierarchy](/docs/api/pxm/products/create-hierarchy).

| PXM Attribute | Studio Dynamic Variable            |
|---------------|------------------------------------| 
| property name | {{locale.attributes.propertyname}} | 
| name          | {{locale.attributes.name}}         |
| description   | {{locale.attributes.description}}  |

### Relationships

A hierarchy can have parent and child nodes. For more information on Product Experience Manager hierarchy parent/child attributes, see [Create a hierarchy](/docs/api/pxm/products/create-hierarchy).


| PXM Attribute | Studio Dynamic Variable                 |
|---------------|-----------------------------------------| 
| data          | {{relationship.attributes.data}}        | 
| related       | {{relationship.attributes.related}}     |


