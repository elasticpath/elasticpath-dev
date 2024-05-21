---
title: Delete a Customer-Cart Association
nav_label: Delete an Association
sidebar_position: 4
---

You can delete an association between a customer and a cart.

## `DELETE` Delete an association

```http
https://useast.api.elasticpath.com/v2/carts/:cartId/relationships/customers
```

Deletes an association between a cart (`:cartId`) and a customer.

## Parameters

### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `cartId` | Required | `string` | The id for the cart created by the customer. |

### Headers

| Name | Required | Type | Description                                             |
| --- | --- | --- |---------------------------------------------------------|
| `X-Moltin-Customer-Token` | Required | `string` | A customer token to access a specific customer's carts. |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API.     |

### Body

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `data[].type`| Required | `string` | The type of related object. Ensure that it is `customer`. |
| `data[].id` | Required | `string` | The id of the customer.|

## Request Examples

### With customer token

Requires an [`implicit` token](/guides/Getting%20Started/authentication/Tokens/implicit-token) with a [`customer` token](/docs/customer-management/customer-managment-api/customer-tokens).

:::note
Pass the `X-Moltin-Customer-Token` header to limit carts to a specific customer. For more information, see [Using a token](/docs/customer-management/customer-managment-api/customer-tokens#using-a-token).
:::

```bash
curl -X DELETE https://useast.api.elasticpath.com/v2/carts/:cartId/relationships/customers \
     -H "X-Moltin-Customer-Token: XXXX" \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
      "data": [{
          "type": "customer",
          "id": "b3f2b6de-8fd4-4cdf-a9d9-c5f7cecccdfe"
          }]
      }
```

### Without customer token

Requires a [`client_credentials` token](/guides/Getting%20Started/authentication/Tokens/client-credential-token).

```bash
curl -X DELETE https://useast.api.elasticpath.com/v2/carts/:cartId/relationships/customers \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
      "data": [{
          "type": "customer",
          "id": "b3f2b6de-8fd4-4cdf-a9d9-c5f7cecccdfe"
          }]
      }
```

## Response Example

`204 No Content`


```json

```
