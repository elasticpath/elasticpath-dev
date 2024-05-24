---
title: Create Custom Cart Items
nav_label: Create Custom Cart Items
sidebar_position: 10
---

Custom cart items allow you to process an order for any type of item you want to sell. The item does not need to exist in Commerce, which means custom cart items can be used for all sort of use cases.

Places in the user flow you would use custom cart:

- To store a product that does not live in Composable Commerce for a user to buy
- To adjust a product price the user is going to buy
- To add an incremental fee to the user, that is not a product

## Prerequisites

We walk you through the three common ways custom carts are leveraged. There is a playground site set up that you can use experiment with your own specific use cases.

If you want to follow along, you need the following items:

- An [access token](https://beta.elasticpath.dev/guides/Getting-Started/your-first-api-request#get-an-access-token)

- The [code](https://gist.github.com/gje4)


## Scenario 1: Allow a user to buy a product thatʼs not in Composable Commerce

Setup: A made-up product that does not exist in Composable Commerce. This means it does not have a `product_id`.

Scenario: A user is purchasing an item that was custom made on your site.

### Cart Item example

| Field Name | Type | Description |
| --- | --- | --- |
| name | string | Product name. |
| sku | string | The unique SKU of the product. |
| description | string | Product description. |
| quantity | integer | Product quantity. Should default to 1. |
| price.amount | integer | Product price. |

### Composable Commerce object

```javascript
{
	type: "custom_item",
	name: "Black t-shirt with dragon",
	sku: "123029123",
	description: "This is a custom made t-shirt",
	quantity: 1,
	price: {
		amount: 10000
	}
}
```

Custom cart example

```javascript
 const item = {
    //Type is always custom_item
    type: "custom_item",
    name: productName.value,
    sku: productSku.value,
    description: productDesc.value,
    quantity: productQty.value,
    price: {
      amount: productAmount.value
    }
  }

    Moltin.Cart(customCartId)
      .AddCustomItem(item)
      .then(cart => {
        console.log(JSON.stringify(cart))
	})
```

## Scenario 2: Adding shipping fees to a product

Setup: A user may want to buy a product from a different country which requires an additional shipping fee. In this example, we apply a flat fee. This is meant to give you a basic example of how this could work with your own internal shipping logic or a third party shipping API.

Scenario: A user based in Newcastle, UK wants to buy a shirt from Boston, US. This is going to cost more than what was originally accounted for in shipping fees.

### Cart Item example

| Field Name | Type | Description |
| --- | --- | --- |
| name | string | Product name. |
| sku | string | The unique SKU of the product. |
| description | string | Product description. |
| quantity | integer | Product quantity. Should default to 1. |
| price.amount | integer | Product price. |

### Composable Commerce object

```javascript
{
	type: "custom_item",
	name: "Black t-shirt with dragon",
	sku: "123029123",
	description: "This is a custom made t-shirt",
	quantity: 1,
	price: {
		amount: 10000
	}
}
```

### Custom cart example

```javascript
const shippingCountry = "UK"
let item
if (shippingCountry != "US") {
	item = {
		type: "custom_item",
		name: "Black t-shirt with dragon",
		sku: "123029123",
		description: "This is a custom made t-shirt",
		quantity: 1,
		price: {
			amount: 10000 + 500
		}
	}
}
Moltin.Cart(exampleCart2).AddCustomItem(item).then(cart => {
	console.log(JSON.stringify(cart))
})
```

## Scenario 3: Adding tax to a cart

Setup: When you find out the shipping destination, you may want to collect a set amount of tax. You are able to add a tax amount as an item to the userʼs order to account for the tax you need to collect. This is a basic example of how this could work with your own internal tax logic or a third party API.

Scenario: A user based in Boston wants to buy a bottle of wine from your California vineyard. You need to collect 7.25% tax on the order.

### Cart Item example

| Field Name | Type | Description |
| --- | --- | --- |
| name | string | Product name. |
| sku | string | The unique SKU of the product. |
| description | string | Product description. |
| quantity | integer | Product quantity. Default to 1. |
| price.amount | integer | Product price. |

### Composable Commerce object

```javascript
{
	type: "custom_item",
	name: "CA TAX",
	sku: "9238091",
	description: "TAX from CA to ship out of state.",
	quantity: 1,
	price: {
		amount: 210000 * .0725
	}
}
```

### Custom cart example

```javascript
 const shippingCountry = "NY"
let item
if (shippingState != "CA") {
	item = {
		//Type is always custom_item
		type: "custom_item",
		name: "CA TAX",
		sku: "9238091",
		description: "TAX from CA to ship out of state.",
		quantity: 1,
		price: {
			amount: 210000 * .0725
		}
	}
}
Moltin.Cart(exampleCart3)
	.AddCustomItem(item)
	.then(cart => {
		document.example3Frame.document.body.innerHTML = JSON.stringify(cart)
		console.log(JSON.stringify(cart))
	})
}
```

## Summary

The cart service flexibility is a powerful service, and allows you to enable all sorts of commerce. The use cases are endless for the custom cart, and can be used to solve any roadblocks you might have when interacting with customers.

## Next Steps

These basic examples are meant to give you an idea of how you could use a custom cart. A logical next step would be to integrate your own or third-party logic with the custom cart. An example of third-party API to get tax rates or arrange shipping would be TaxJar or Shippo.

