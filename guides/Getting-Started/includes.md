---
title: Including Resources 
nav_label: Including Resources
sidebar_position: 101
---

Using the `include` parameter, you can retrieve top-level resources, such as:

- Files or main image.
- Component product data.
- Key attribute data, such as SKU or slug.

The `include` query parameter you choose depends on the API endpoint you are using. 

The following endpoints support the `include` parameter:

- [Get a product in the latest catalog release](/docs/api/pxm/catalog/get-product)
- [Get all products in the latest release](/docs/api/pxm/catalog/get-all-products)
- [Get all products in a shopper catalog](/docs/api/pxm/catalog/get-by-context-all-products)
- [Get a product in a shopper catalog](/docs/api/pxm/catalog/get-by-context-product)

## Characteristics of Include Parameter

The `include` parameter has the following characteristics:

- You can use multiple values with the `include` query parameter. Use a comma to separate the values. For example, `include=files,main_image`.
- If you request a resource to be included, but no related entities of that resource type exist, the response does not have an `included` section.
- Similarly, if you request to include a resource that is not supported as an include by the endpoint, there is no `included` section in the response.
- There is a soft limit of five included resources per request, where one included resource can be `main_image`, another can be `categories`, and so on.
- We recommend you do not include a resource if the response for the resource may contain more than 100 entities.
