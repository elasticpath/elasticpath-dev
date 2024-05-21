---
id: get-products-by-node
title: Get Products by Node
sidebar_label: Get Products by Node
sidebar_position: 160
---

## `GET` Get the List of Products in a Hierarchy Node

```text
https://useast.api.elasticpath.com/catalog/nodes/:nodeId/relationships/products
```

Returns the products associated with the specified hierarchy node in the catalog. The product must be in the `live` status. Returns the products associated with the specified hierarchy node from a published catalog. The product must be in the `live` status. If the products have been curated using the [`update a hierarchy node`](/docs/pxm/hierarchies/hierarchies-api/update-a-hierarchy#curating-products-in-a-node) endpoint, then the products are returned in the order specified in the `curated_products` attribute in the body of the [`update a hierarchy node`](/docs/pxm/hierarchies/hierarchies-api/update-a-hierarchy#curating-products-in-a-node) request. A product that is curated has the `"curated_product": true` attribute displayed. 

If you have multiple catalog rules defined, the rule that best matches the shopperʼs context is used to determine which catalog is retrieved. For information about how rules are matched, see [Resolving Catalog Rules](/docs/pxm/catalogs/shopper-catalog/catalog-shopper-overview#resolving-catalog-rules).

You can see the parent nodes a product is associated with in the `bread_crumbs` and `bread_crumb_nodes` metadata for each product. This is useful if you want to improve how your shoppers search your store, for example. For more information, see [Catalog Releases Overview](/docs/pxm/catalogs/catalog-latest-release/overview).

## Parameters

### Path parameters

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `nodeId` | Required | `string` | The unique identifier of a hierarchy node. |

### Headers

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. Implicit Bearer token only returns products with live status; products with draft status won’t be included. |
| `X-Moltin-Customer-Token` | Optional | `string` | The unique identifier of a signed-in customer. Corresponds to the `customer_ids` attribute in a `rule` object. |
| `EP-Channel` | Optional | `string` | The channel, such as website or mobile app. Corresponds to the `channel` attribute in a `rule` object. |
| `EP-Context-Tag` | Optional | `string` | A tag defined in the store, such as `clearance`. Corresponds to the `tag` attribute in a `rule` object. |
| `accept-language` | Optional | `string` | The natural language and locale that your storefront prefers. See [accept-language](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language). |

### Query parameters

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `filter`| Optional | `string` | Specifies the filter attributes. See [Filtering](#filtering). |
| `page[limit]` | Optional | `integer` | The number of items to return per page. Minimum value is `1`. See [Pagination](/guides/Getting%20Started/api-overview/pagination). |
| `page[offset]` | Optional | `integer` | The number of items to offset the results by. Offset is zero-based. See [Pagination](/guides/Getting%20Started/api-overview/pagination). |

## Filtering

The following operators and attributes are available when filtering on this endpoint.


| Operator | Description                                                                                                                                        | Supported Attributes                                                  | Example Endpoints |
|:--- |:---------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------|:--- |
| `Eq` | Checks if the values of two operands are equal. If they are, the condition is true. For `product_tags` and `tags`, you can specify more than one.  | `name`, `sku`, `slug`, `mpn`, `upc_ean`, `product_types`, `tags`      | `filter=eq(name,some-name)` |
| `In` | Checks if the values are included in the specified string. If they are, the condition is true. For `product_types` and `tags`, you can specify more than one.                                                    | `id`, `name`, `sku`, `slug`, `mpn`, `upc_ean`, `product_types`, `tags` | `filter=in(id,some-id)` |

For more information, see [Filtering](/guides/Getting%20Started/api-overview/filtering).

### Building breadcrumbs in a storefront

In a catalog, you can use a filter to return a list of nodes in a hierarchy structure that a product belongs to. You can use this to build breadcrumbs in your storefront. An example is shown below.

`filter=in(id,c83bfe55-0d87-4302-a86d-ab19e7e323f1,6003d7ef-84f3-49bb-a8bd-4cbfa203dcbb)`

- Specify the node Ids in the filter expression.
- You can have as many node Ids as you want.
- It does not matter what order you specify the node Ids. The nodes are returned in the order they were last updated.

## Request Example

```bash
curl -X GET https://useast.api.elasticpath.com/catalog/nodes/f26c613b-320a-4744-a4cb-841a451c95ab/relationships/products \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

## Response Example

`200 OK`

```json
},
  "data": [
    {
      "attributes": {
        "availability": "available",
        "published_at": "2021-01-01T00:00:00.000",
        "base_product": false,
        "base_product_id": "cdf574bc-e36e-48fc-9eac-01c87839b285",
        "commodity_type": "physical",
        "upc_ean": "0123456",
        "manufacturer_part_num": "mfn1",
        "created_at": "2020-01-01T00:00:00.000",
        "description": "This is a product",
        "dimensions": "4x5x2",
        "manage_stock": false,
        "name": "Blue shirt",
        "price": {
          "USD": {
            "amount": 100,
            "includes_tax": false
          },
          "CAD": {
            "amount": 100,
            "includes_tax": false
          },
          "GBP": {
            "amount": 100,
            "includes_tax": false
          }
        },
        "tiers": {
          "min_5": {
            "minimum_quantity": 5,
            "price": {
              "USD": {
                "amount": 100,
                "includes_tax": false
              },
              "CAD": {
                "amount": 100,
                "includes_tax": false
              },
              "GBP": {
                "amount": 100,
                "includes_tax": false
              }
            }
          },
          "min_10": {
            "minimum_quantity": 10,
            "price": {
              "USD": {
                "amount": 150,
                "includes_tax": false
              },
              "CAD": {
                "amount": 150,
                "includes_tax": false
              },
              "GBP": {
                "amount": 150,
                "includes_tax": false
              }
            }
          },
          "min_15": {
            "minimum_quantity": 15,
            "price": {
              "USD": {
                "amount": 175,
                "includes_tax": false
              },
              "CAD": {
                "amount": 175,
                "includes_tax": false
              },
              "GBP": {
                "amount": 175,
                "includes_tax": false
              }
            }
          }
        },
        "components": {
          "buttons": {
            "name": "Button down shirt",
            "sort_order": 1,
            "options": [
              {
                "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "type": "product",
                "quantity": 2
              }
            ]
          },
          "pockets": {
            "name": "Shirt with pockets",
            "sort_order": 2,
            "options": [
              {
                "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "type": "product",
                "quantity": 2,
                "sort_order": 2,
              }
            ]
          },
          "collar": {
            "name": "Shirt with collar",
            "sort_order": 3,
            "options": [
              {
                "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "type": "product",
                "quantity": 2
              }
            ]
          }
        },
        "product_hash": "string",
        "sku": "blue-shirt",
        "slug": "blue-shirt",
        "status": "live",
        "updated_at": "1970-01-01T00:00:00.000",
        "weight": {
          "g": 997.903,
          "kg": 1,
          "lb": 2.20,
          "oz": 32
        },
        "extensions": {
          "size": {
            "size": {},
            "medium": {},
            "large": {}
          },
          "additionalProp2": {
            "additionalProp1": {},
            "additionalProp2": {},
            "additionalProp3": {}
          },
          "additionalProp3": {
            "additionalProp1": {},
            "additionalProp2": {},
            "additionalProp3": {}
          }
        }
      },
      "id": "8fccaa19-dba9-4621-8d11-31a222a68c7c",
      "relationships": {
        "categories": [
          {
            "id": "65477ce0-fcb8-436b-a120-3d57979421dd",
            "label": "category",
            "name": "Formal dresswear"
          }
        ],
        "brands": [
          {
            "id": "65477ce0-fcb8-436b-a120-3d57979421dd",
            "label": "category",
            "name": "Formal dresswear"
          }
        ],
        "collections": [
          {
            "id": "65477ce0-fcb8-436b-a120-3d57979421dd",
            "label": "category",
            "name": "Formal dresswear"
          }
        ],
        "parent": {
          "data": {
            "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "type": "product"
          }
        },
        "children": {
          "data": [
            {
              "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
              "type": "product"
            }
          ]
        },
        "files": {
          "data": [
            {
              "type": "file",
              "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
              "created_at": "1970-01-01T00:00:00.000"
            }
          ]
        },
        "main_image": {
          "data": {
            "type": "main_image",
            "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
          }
      },
      "type": "product",
      "meta": {
        "catalog_id": "362a16dc-f7c6-4280-83d6-4fcc152af091",
        "display_price": {
          "with_tax": {
            "amount": 47500,
            "currency": "USD",
            "formatted": "$475.00"
          },
          "without_tax": {
            "amount": 47500,
            "currency": "USD",
            "formatted": "$475.00"
          }
        },
        "catalog_source": "pim",
        "product_types": [
            "child"
        ],
        "bread_crumb_nodes": [
                   "04e748f1-83db-4013-85c8-9edfb0e1b5fa",
                   "a96a898b-444c-40b6-9c27-5fc74d08e685"
         ],
        "bread_crumbs": {
          "04e748f1-83db-4013-85c8-9edfb0e1b5fa": [
            "e5a64eae-56c2-48cd-b8b1-f5d3be734d52",
            "94b882fa-85de-470e-acb3-5b11358e02de"
          ],
          "a96a898b-444c-40b6-9c27-5fc74d08e685": [
            "e5a64eae-56c2-48cd-b8b1-f5d3be734d52"
          ]
        },
        "sale_id": "string",
        "sale_expires": "2023-01-01T00:00:00.000",
        "original_price": {
          "USD": {
            "amount": 100,
            "includes_tax": false
          },
          "CAD": {
            "amount": 100,
            "includes_tax": false
          },
          "GBP": {
            "amount": 100,
            "includes_tax": false
          }
        },
        "original_display_price": {
          "with_tax": {
            "amount": 47500,
            "currency": "USD",
            "formatted": "$475.00"
          },
          "without_tax": {
            "amount": 47500,
            "currency": "USD",
            "formatted": "$475.00"
          }
        },
        "component_products": {
          "summerSale": {
            "sale_id": "summer_sale22",
            "sale_expires": "2022-08-01T00:00:00.000",
            "price": {
              "USD": {
                "amount": 100,
                "includes_tax": false
              },
              "CAD": {
                "amount": 100,
                "includes_tax": false
              },
              "GBP": {
                "amount": 100,
                "includes_tax": false
              }
            },
            "display_price": {
              "with_tax": {
                "amount": 47500,
                "currency": "USD",
                "formatted": "$475.00"
              },
              "without_tax": {
                "amount": 47500,
                "currency": "USD",
                "formatted": "$475.00"
              }
            },
            "original_price": {
              "USD": {
                "amount": 100,
                "includes_tax": false
              },
              "CAD": {
                "amount": 100,
                "includes_tax": false
              },
              "GBP": {
                "amount": 100,
                "includes_tax": false
              }
            },
            "original_display_price": {
              "with_tax": {
                "amount": 47500,
                "currency": "USD",
                "formatted": "$475.00"
              },
              "without_tax": {
                "amount": 47500,
                "currency": "USD",
                "formatted": "$475.00"
              }
            }
          },
          "fallSale": {
            "sale_id": "fall_sale22",
            "sale_expires": "2022-11-01T00:00:00.000",
            "price": {
              "USD": {
                "amount": 100,
                "includes_tax": false
              },
              "CAD": {
                "amount": 100,
                "includes_tax": false
              },
              "GBP": {
                "amount": 100,
                "includes_tax": false
              }
            },
            "display_price": {
              "with_tax": {
                "amount": 47500,
                "currency": "USD",
                "formatted": "$475.00"
              },
              "without_tax": {
                "amount": 47500,
                "currency": "USD",
                "formatted": "$475.00"
              }
            },
            "original_price": {
              "USD": {
                "amount": 100,
                "includes_tax": false
              },
              "CAD": {
                "amount": 100,
                "includes_tax": false
              },
              "GBP": {
                "amount": 100,
                "includes_tax": false
              }
            },
            "original_display_price": {
              "with_tax": {
                "amount": 47500,
                "currency": "USD",
                "formatted": "$475.00"
              },
              "without_tax": {
                "amount": 47500,
                "currency": "USD",
                "formatted": "$475.00"
              }
            }
          },
          "winterSale": {
            "sale_id": "winter_sale23",
            "sale_expires": "2023-01-01T00:00:00.000",
            "price": {
              "USD": {
                "amount": 100,
                "includes_tax": false
              },
              "CAD": {
                "amount": 100,
                "includes_tax": false
              },
              "GBP": {
                "amount": 100,
                "includes_tax": false
              }
            },
            "display_price": {
              "with_tax": {
                "amount": 47500,
                "currency": "USD",
                "formatted": "$475.00"
              },
              "without_tax": {
                "amount": 47500,
                "currency": "USD",
                "formatted": "$475.00"
              }
            },
            "original_price": {
              "USD": {
                "amount": 100,
                "includes_tax": false
              },
              "CAD": {
                "amount": 100,
                "includes_tax": false
              },
              "GBP": {
                "amount": 100,
                "includes_tax": false
              }
            },
            "original_display_price": {
              "with_tax": {
                "amount": 47500,
                "currency": "USD",
                "formatted": "$475.00"
              },
              "without_tax": {
                "amount": 47500,
                "currency": "USD",
                "formatted": "$475.00"
              }
            }
          }
        },
        "tiers": {
          "mid-winterSale": {
            "sale_id": "midWinter_sale22",
            "sale_expires": "2022-03-01T00:00:00.000",
            "display_price": {
              "with_tax": {
                "amount": 47500,
                "currency": "USD",
                "formatted": "$475.00"
              },
              "without_tax": {
                "amount": 47500,
                "currency": "USD",
                "formatted": "$475.00"
              }
            },
            "original_price": {
              "USD": {
                "amount": 100,
                "includes_tax": false
              },
              "CAD": {
                "amount": 100,
                "includes_tax": false
              },
              "GBP": {
                "amount": 100,
                "includes_tax": false
              }
            },
            "original_display_price": {
              "with_tax": {
                "amount": 47500,
                "currency": "USD",
                "formatted": "$475.00"
              },
              "without_tax": {
                "amount": 47500,
                "currency": "USD",
                "formatted": "$475.00"
              }
            }
          },
          "springSale": {
            "sale_id": "spring_sale22",
            "sale_expires": "2022-05-01T00:00:00.000",
            "display_price": {
              "with_tax": {
                "amount": 47500,
                "currency": "USD",
                "formatted": "$475.00"
              },
              "without_tax": {
                "amount": 47500,
                "currency": "USD",
                "formatted": "$475.00"
              }
            },
            "original_price": {
              "USD": {
                "amount": 100,
                "includes_tax": false
              },
              "CAD": {
                "amount": 100,
                "includes_tax": false
              },
              "GBP": {
                "amount": 100,
                "includes_tax": false
              }
            },
            "original_display_price": {
              "with_tax": {
                "amount": 47500,
                "currency": "USD",
                "formatted": "$475.00"
              },
              "without_tax": {
                "amount": 47500,
                "currency": "USD",
                "formatted": "$475.00"
              }
            }
          },
          "summerSale": {
            "sale_id": "summer_sale23",
            "sale_expires": "2023-08-01T00:00:00.000",
            "display_price": {
              "with_tax": {
                "amount": 47500,
                "currency": "USD",
                "formatted": "$475.00"
              },
              "without_tax": {
                "amount": 47500,
                "currency": "USD",
                "formatted": "$475.00"
              }
            },
            "original_price": {
              "USD": {
                "amount": 100,
                "includes_tax": false
              },
              "CAD": {
                "amount": 100,
                "includes_tax": false
              },
              "GBP": {
                "amount": 100,
                "includes_tax": false
              }
            },
            "original_display_price": {
              "with_tax": {
                "amount": 47500,
                "currency": "USD",
                "formatted": "$475.00"
              },
              "without_tax": {
                "amount": 47500,
                "currency": "USD",
                "formatted": "$475.00"
              }
            }
          }
        },
        "variation_matrix":
        {"3fa85f64-5717-4562-b3fc-2c963f66afa6": "4cd092fe-8878-4d93-8438-c305d2c6fb1f"
        },
        "variations": [
          {
            "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "name": "color",
            "sort_order": 1        
            "options": [
              {
                "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "name": "Red",
                "description": "Red"
                "sort_order": 1
              }
            ]
          }
        ],
        "language": "en-GB"
      }
    }
  ],
  "links": {
     "first": "/catalog/nodes/f26c613b-320a-4744-a4cb-841a451c95ab/relationships/products?page[limit]=25&page[offset]=0&",
     "last": "/catalog/nodes/f26c613b-320a-4744-a4cb-841a451c95ab/relationships/products?page[offset]=0&page[limit]=25&",
     "self": "/catalog/nodes/f26c613b-320a-4744-a4cb-841a451c95ab/relationships/products"
  }
}
```
