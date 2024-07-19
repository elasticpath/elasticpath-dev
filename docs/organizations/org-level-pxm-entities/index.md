---
title: Overview 
nav_label: Overview
nav_position : 1
---

Organizations is a powerful tool that allows you to streamline your eCommerce operations, manage your multi-store use cases and unlock additional revenue opportunities. This unique capability enables our multi-store management solution which is used by your franchises, distributor networks, multi-geo and multi-brand companies and more. The term store in this context refers to an Commerce store, which supports data segregation and access management across multiple business units in an organization.

For example, AllGoods has just achieved a critical business milestone. They just launched their 100th digital storefront, enabling their brand of brands business to sell their goods in 15 different countries in 25 different languages with 10 different currencies.

- AllGoods can create their products and publish them in catalogs that are automatically available to their stores.
- AllGoods distributors can publish catalogs in their stores, combining AllGoods products with the other products that they sell.
- AllGoods stores in different regions can use the AllGoods catalogs, but use different product pricing to reflect their regional differences.

You can create and manage Product Experience Manager entities in your organization and stores using:

- Product Experience Manager API
- Commerce Manager

## Managing Entities Using Product Experience Manager API

All Product Experience Manager entities have an `owner` attribute. An `owner` attribute is either `organization` or `store`. 

The following example shows a product created in an organization.

```json
{
    "data": {
        "type": "product",
        "id": "254dba52-67b6-48a2-8eea-9c77133be44d",
        "attributes": {
            "commodity_type": "physical",
            "name": "Berry Glow Face Mask",
            "sku": "h75rfghu",
            "slug": "berry-glow-face-mask",
            "status": "live"
        },
        "relationships": {
            "children": {
                "data": [],
                "links": {
                    "self": "/products/254dba52-67b6-48a2-8eea-9c77133be44d/children"
                }
            },
            "component_products": {
                "data": [],
                "links": {
                    "self": "/products/254dba52-67b6-48a2-8eea-9c77133be44d/relationships/component_products"
                }
            },
            "files": {
                "data": [],
                "links": {
                    "self": "/products/254dba52-67b6-48a2-8eea-9c77133be44d/relationships/files"
                }
            },
            "main_image": {
                "data": null
            },
            "templates": {
                "data": [],
                "links": {
                    "self": "/products/254dba52-67b6-48a2-8eea-9c77133be44d/relationships/templates"
                }
            },
            "variations": {
                "data": [],
                "links": {
                    "self": "/products/254dba52-67b6-48a2-8eea-9c77133be44d/relationships/variations"
                }
            }
        },
        "meta": {
            "created_at": "2023-07-25T08:43:49.772Z",
            "owner": "organization",
            "updated_at": "2023-07-25T12:45:39.514Z",
            "variation_matrix": {}
        }
    }
}
```

## Managing Product Experience Manager Entities Using Commerce Manager

All Product Experience Manager entities that belong to an organization have an `ORG` label. 

![organization PXM entity](/assets/org_label.png)
