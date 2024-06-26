---
title: Dynamic Variables for Product Experience Manager
nav_label: Dynamic Variables for Product Experience Manager
sidebar_position: 110
---

You can dynamically set up your product detail (PDP) and product listing pages (PLP) using data from Product Experience Manager.

The following table describes how the attributes in Product Experience Manager map to the dynamic variables in Studio that you can use to populate your PDPs and PLPs.

# Product Experience Manager Products

The following tables describe how the Product Experience Manager product attributes map to Studio dynamic variables. For more information on Product Experience Manager product attributes, see [Create a Product](/docs/api/pxm/products/create-product).

## Products

Product Experience Manager products have the following attributes. For more information on Product Experience Manager product attributes, see [Create a Product](/docs/api/pxm/products/create-product).

| PXM Attribute | Studio Dynamic Variable                      |
| --- |----------------------------------------------| 
| ID | {{product.id}}                               |
| external_ref | {{product.attributes.external_ref}}          | 
| name | {{product.attributes.name}}                  |
| description | {{product.attributes.description}}           |
| slug | {{product.attributes.slug}}                  | 
| sku | {{product.attributes.sku}}                   |
| status | {{product.attributes.status}}                |
| commodity_type | {{product.attributes.commodity_type}}        |
| upc_ean | {{product.attributes.upc_ean}}               |
| mpn | {{product.attributes.manufacturer_part_num}} |

### Locales

Product Experience Manager supports localization of products. For more information on Product Experience Manager localization attributes, see [Create a Product](/docs/api/pxm/products/create-product).

| PXM Attribute | Studio Dynamic Variable              |
|---------------|--------------------------------------| 
| property name | {{product.attributes.property_name}} | 
| name          | {{product.attributes.name}}          |
| description   | {{product.attributes.description}}    |


<!--- 

Waiting for the bug to be fixed that means a value can not be a list or an array

### Tags

You can use product tags to store or assign a key word against a product. The product tag can then be used to describe or label that product. For more information on Product Experience Manager tag attributes, see [Create a Product](/docs/api/pxm/products/create-product).

| PXM Attribute | Studio Dynamic Variable    |
|---------------|----------------------------| 
| tags          | {{product.attributes.tags}} | 

--->

### Build Rules

Product Experience Manager allows you to build a combination of child products associated with a product, based on build rules that you specify. For more information on Product Experience Manager variation attributes, see [Create a Product](/docs/api/pxm/products/create-product).

| PXM Attribute | Studio Dynamic Variable      |
|---------------|------------------------------| 
| default       | {{product.attributes.default}} | 
| include       | {{product.attributes.include}} |
| exclude       | {{product.attributes.exclude}} |

### Custom Inputs

Product Experience Manager allows your shoppers to add custom text to a product when adding product items to a cart. For more information on Product Experience Manager custom attributes, see [Create a Product](/docs/api/pxm/products/create-product).

| PXM Attribute    | Studio Dynamic Variable                  |
|------------------|------------------------------------------| 
| property name    | {{product.attributes.property_name}}     | 
| name             | {{product.attributes.name}}              |
| validation_rules | {{product.attributes.vallidation_rules}} |
| type | {{product.attributes.type}}              |
| options | {{product.attributes.options}}           |
| max_length | {{product.attributes.max_length}}        | 
| required | {{product.attributes.required}}          |

### Components

Product Experience Manager allows you to create and manage bundles. A bundle is a purchasable product, comprising of one or more products that you want to sell together. You can create multiple components within a bundle. Each component must have at least one or more options. Each option is a product and a quantity. For more information on Product Experience Manager bundle attributes, see [Create a Product](/docs/api/pxm/products/create-product).

| PXM Attribute | Studio Dynamic Variable               |
|---------------|---------------------------------------| 
| property name | {{product.attributes.property_name}}  | 
| name          | {{product.attributes.name}}            |
| min           | {{product.attributes.validationrules}} |
| max           | {{product.attributes.type}}            |
| sort_order    | {{product.attributes.options}}         |

#### Options

Each bundle component must have at least one or more options. Each option is a product and a quantity. For more information on Product Experience Manager bundle attributes, see [Create a Product](/docs/api/pxm/products/create-product).

| PXM Attribute | Studio Dynamic Variable          |
|---------------|----------------------------------| 
| id            | {{product.attributes.id}}         | 
| type          | {{product.attributes.type}}       |
| quantity      | {{product.attributes.quantity}}   |
| sort_order    | {{product.attributes.sort_order}} |
| default       | {{product.attributes.default}}    |

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

| PXM Attribute | Studio Dynamic Variable              |
|---------------|--------------------------------------| 
| property name | {{category.attributes.property_name}} | 
| name          | {{category.attributes.name}}           |
| description   | {{category.attributes.description}}    |

### Relationships

A hierarchy can have parent and child nodes. Relationships allow you to move between requests and includes links to the child nodes associated with a hierarchy or node. For more information on Product Experience Manager hierarchy relationship attributes, see [Create a hierarchy](/docs/api/pxm/products/create-hierarchy).


| PXM Attribute | Studio Dynamic Variable                 |
|---------------|-----------------------------------------| 
| data          | {{category.attributes.data}}        | 
| related       | {{category.attributes.related}}     |

### Meta

A hierarchy can have meta data. For more information on Product Experience Manager hierarchy meta data, see [Create a hierarchy](/docs/api/pxm/products/create-hierarchy).

| PXM Attribute | Studio Dynamic Variable            |
|---------------|------------------------------------| 
| created_at    | {{category.attributes.created_at}} | 
| updated_at    | {{category.attributes.updated_at}} |
| owner | {{category.attributes.owner}}      |

### Nodes

A hierarchy can have parent and child nodes. For more information on Product Experience Manager hierarchy parent/child nodes attributes, see [Create a node](/docs/api/pxm/products/create-node).

| PXM Attribute  | Studio Dynamic Variable              |
|----------------|--------------------------------------| 
| name           | {{node.attributes.name}}             |
| description    | {{node.attributes.description}}      |
| slug           | {{node.attributes.slug}}             |
| curated_products | {{node.attributes.curated_products}} | 

### Locales

Product Experience Manager supports localization of nodes. For more information on Product Experience Manager node localization attributes, see [Create a node](/docs/api/pxm/products/create-node).

| PXM Attribute | Studio Dynamic Variable           |
|---------------|-----------------------------------| 
| property name | {{node.attributes.property_name}} | 
| name          | {{node.attributes.name}}          |
| description   | {{node.attributes.description}}   |

### Relationships

A hierarchy can have parent and child nodes. Relationships allow you to move between requests and includes links to the child/parent nodes and products associated with a node. For more information on Product Experience Manager node relationship attributes, see [Create a hierarchy](/docs/api/pxm/products/create-hierarchy).

#### Children

| PXM Attribute | Studio Dynamic Variable     |
|---------------|-----------------------------| 
| data          | {{node.attributes.data}}    | 
| related       | {{node.attributes.related}} |

#### Parent

| PXM Attribute | Studio Dynamic Variable     |
|---------------|-----------------------------| 
| data          | {{node.attributes.data}}    | 
| related       | {{node.attributes.related}} |

#### Products

| PXM Attribute | Studio Dynamic Variable     |
|---------------|-----------------------------| 
| data          | {{node.attributes.data}}    | 
| related       | {{node.attributes.related}} |

### Meta

A hierarchy can have meta data. For more information on Product Experience Manager hierarchy meta data, see [Create a hierarchy](/docs/api/pxm/products/create-hierarchy).

| PXM Attribute | Studio Dynamic Variable         |
|---------------|---------------------------------| 
| created_at    | {{node.attributes.created_at}}  | 
| updated_at    | {{node.attributes.updated_at}}  |
| parent_name | {{node.attributes.parent_name}} | 
| owner | {{node.attributes.owner}}       |

## Contacts

Studio identifies a person when a form is a submitted. If you configure a form in Studio that is then submitted by a shopper on your site, you can use the following dynamic variables to populate other pages on your site with the shoppers contact details. 

| PXM Attribute | Studio Dynamic Variable  |
|---------------|--------------------------| 
| id            | {{contact.id}}           | 
| type          | {{contact.type}}         |
| persona       | {{contact.persona}}      | 
| first_name    | {{contact.first_name}}   |
| last_name | {{contact.last_name}}    |
| title | {{contact.title}}        |
| email | {{contact.email}}        |
| phone | {{contact.phone}}        |
| organization | {{contact.organization}} |
| website | {{contact.website}}      |
| address1 | {{contact.address1}}     |
| address2 | {{contact.address2}}     |
| city | {{contact.city}}         |
| state | {{contact.state}}        |
| zip | {{contact.zip}}          |
| country | {{contact.country}}      |
| params | {{contact.params}}       |





