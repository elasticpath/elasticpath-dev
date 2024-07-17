---
title: Add Custom-Data to Extend Products
nav_label: Add Custom-Data to Extend Products
sidebar_position: 31
---

With extension templates, you can attach a specific set of custom fields to your products in Product Experience Manage.

## Prerequisites

Before you start, ensure that the following requirements are met:

- An Commerce account and the Client ID and Client Secret for your
  store, available from [Commerce Manager](https://beta.elasticpath.dev/docs/commerce-manager/).
- An [access token](https://beta.elasticpath.dev/guides/Getting-Started/your-first-api-request).
- The product to attach custom fields to must be created. See [The Stationary Store Example](#the-stationery-store-example).

## The Stationery Store Example

In this example, we want to add custom fields to add books to capture the International Standard Book Number (ISBN) and the author. For the books that include second-hand books, we want to capture the condition of the book, such as new, used, or poor.

An example product is shown below. This example shows the standard fields for a product.

```json
{
    "data": {
      "type": "product",
      "id": "90a16ab4-a1ee-4210-94fd-55cab2ea673a",
      "attributes": {
        "commodity_type": "physical",
        "description": "a paperback book",
        "mpn": "1234-5678-ABCD",
        "name": "To Kill a Mockingbird",
        "sku": "to-kill-a-mockingbird",
        "slug": "to-kill-a-mockingbird",
        "status": "live",
        "upc_ean": "123456"
      }
    }
  }
}
```

## Step-by-step Walkthrough

To create and associate templates for your products, perform the following steps.

1. Create a template for each set of fields that you want to add to a product.
2. Add fields to define the custom data.
3. Associate the template to the products you want to extend.
4. Add entries to capture the custom data for your products.
5. View your product with the custom data.

## Create the Templates

When you create a template, use the convention `type(template-name)` format for the slug field. The `type` variable specifies the entity to which the template is applied. In this example, the entity is product. The slug is used to provide a namespace for extensions on the entity. You can apply multiple templates to an entity without any duplicates to an entity that has fields with the same names.

1. Use the following example and create a template to describe a book.

    ```sh
    POST /v2/flows
    {
      "data": {
        "type": "flow",
        "name": "Book",
        "slug": "products(book)",
        "description": "Extends the default product object with book fields",
        "enabled": true
      }
    }
    ```

1. Use the following example to create another template to describe the condition.

    ```sh
    POST /v2/flows
    {
      "data": {
        "type": "flow",
        "name": "Condition",
        "slug": "products(condition)",
        "description": "Extends the default product object with condition fields",
        "enabled": true
      }
    }
    ```

:::note
The response to these calls contain an `id` field, which is `{{bookFlowID}}` for book template and `{{conditionFlowID}}` for condition template.
:::

## Add Fields to Define Custom Data

In this section, define your custom data by adding fields to the templates.

### Book template custom fields

For the book template that you created in the [Create the Templates](https://beta.elasticpath.dev/docs/api/flows/create-a-flow) section, to capture the ISBN and author, you need to create fields for each of these custom fields. Each field gets a description. You can set validation rules, such as:

- The type of the field.
- Whether the field is required.
- The order in which the fields are presented.

1. Use the following example and create the book template ISBN field.

    ```sh
    POST /v2/fields
    {
        "data": {
            "type": "field",
            "name": "isbn",
            "slug": "isbn",
            "field_type": "string",
            "description": "International standard book number",
            "required": false,
            "enabled": true,
            "order": 1,
            "omit_null": false,
            "relationships": {
                "flow": {
                    "data": {
                        "type": "flow",
                        "id": "{{bookFlowID}}"
                    }
                }
            }
        }
    }
    ```

2. Use the following example and create the field for the books author.

    ```sh
    {
          "data": {
            "type": "field",
            "name": "author",
            "slug": "author",
            "field_type": "string",
            "description": "author",
            "required": false,
            "enabled": true,
            "order": 1,
            "omit_null": false,
            "relationships": {
                "flow": {
                    "data": {
                        "type": "flow",
                        "id": "{{bookFlowID}}"
                    }
                }
            }
        }
    }
    ```

### Condition template

The `condition` field is the only field in a condition template. Use the following example to create the `condition` field.

```sh
{
      "data": {
        "type": "field",
        "name": "condition",
        "slug": "condition",
        "field_type": "string",
        "description": "condition",
        "required": false,
        "enabled": true,
        "order": 1,
        "omit_null": false,
        "relationships": {
            "flow": {
                "data": {
                    "type": "flow",
                    "id": "{{conditionFlowID}}"
                }
            }
        }
    }
}
```

## Associate the Templates to the Products

After you create the templates, associate the templates to the products for which you want to add custom data. In this scenario, you can apply the `book` and `condition` templates to all products in `The Stationary Store` that represents books. You can also add ISBN, author and condition data for each book.

```sh
POST /pcm/products/{{productID}}/relationships/templates
{
  "data": [
    {
      "type": "template",
      "id": "{{bookFlowID}}"
    },
    {
      "type": "template",
      "id": "{{conditionFlowID}}"
    }
  ]
}
```

## Add Flow Entries to Add Data for your Products

By using flow entries, you can add ISBN, author, and condition data for each book.

1. Use the following example and add the flow entry to add the book data:

    ```sh
    POST /v2/flows/products(book)/entries
    {
          "data": {
            "type": "entry",
            "id": "{{productID}}",
            "isbn": "9780099419785",
            "author": "Harper Lee"
        }
    }
    ```

2. Use the following example and add condition data to add the flow entry:

    ```sh
    POST /v2/flows/products(condition)/entries
    {
          "data": {
            "type": "entry",
            "id": "{{productID}}",
            "Condition": "fair"
          }
    }
    ```

:::note

- Any store level entry associated with an organization level product template appears only when you fetch details of the store. The store level entry will not appear on organization products.
- 
:::

## View Your Product With the Custom Data

When you request to view a product, the custom data similar to the following example is returned:

```sh
GET /pcm/products/{{productID}}
{
    "data": {
        "type": "product",
        "id": "90a16ab4-a1ee-4210-94fd-55cab2ea673a",
        "attributes": {
            "commodity_type": "physical",
            "description": "a paperback book",
            "extensions": {
                "products(book)": {
                    "author": "Harper Lee",
                    "isbn": "9780099419785"
                },
                "products(condition)": {
                    "condition": "fair",
                }
            },
            "mpn": "1234-5678-ABCD",
            "name": "To Kill a Mockingbird",
            "sku": "to-kill-a-mockingbird",
            "slug": "to-kill-a-mockingbird",
            "status": "live",
            "upc_ean": "123456"
        },
        "relationships": {
            "files": {
                "data": [],
                "links": {
                    "self": "/products/90a16ab4-a1ee-4210-94fd-55cab2ea673a/relationships/files"
                }
            },
            "templates": {
                "data": [],
                "links": {
                    "self": "/products/90a16ab4-a1ee-4210-94fd-55cab2ea673a/relationships/templates"
                }
            }
        }
    }
}
```
