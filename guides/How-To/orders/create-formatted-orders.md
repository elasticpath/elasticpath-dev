---
title: Create formatted orders
nav_label: Create formatted orders
sidebar_position: 10
---

This walkthrough shows how you can generate a Comma-Separated Values (CSV) list of orders that include cart items.

## Prerequisites

If you want to follow along, you need the following items:

- A Composable Commerce account with existing orders
- An [access token](https://beta.elasticpath.dev/guides/Getting-Started/your-first-api-request#get-an-access-token)

## Step-by-step walkthrough

1. Fetch your existing orders.
2. Create an array including all orders with cart items.
3. Add the array in a CSV file.

### Fetch all of your orders

You can use filters to only grab the orders you want. An example of that is to filter based on time. In the example, we are grabbing them all.

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
//This global orders array is used throughout the example code snippets.
let orders;

const Moltin = MoltinGateway({
  client_id: 'X',
  client_secret: 'X'
})

Moltin.Orders.All().then(orders => {
  this.orders = orders
})
```

### Create an array of orders and cart items

Using the previous API response, loop through the data and create an array that has all the data you need.

```javascript
exports.itemsLookup(orders.data[0], orders.included.items).then((order) => {
    console.log(order.relationships.items);
});
```

The itemLookup function is taking an order which includes an array of items. The lookup loops through the orders and assigns the items to the id.

```javascript
exports.itemsLookup = function(order, items) {
    return new Promise(function(resolve, reject) {

      var itemsProcessed = 0;
      let itemsArray = [];
      //for each of the orders related items
      order.relationships.items.data.forEach(function(item) {
        // ID for the orders item
        let id = item.id;
        // simple counter
        itemsProcessed++;
        // look up each item
        items.forEach(function(item) {
          if(item.id === id) {
            console.log('matching order item object found');
            itemsArray.push(item);
            console.log(itemsArray);
          }
        });

        // if there are not order items left to process
        if(itemsProcessed === order.relationships.items.data.length) {
          console.log('finished processing items');
          order.relationships.items = itemsArray;
          resolve(order);
        };
      })
  })
};
```

### Add the array to a CSV file

All you need to do now is to add the array to a CSV file.

```javascript
Moltin.Orders
.With('items')
.All()
.then((orders) => {
	exports.formatOrders(orders, orders.included.items)
    .then((formattedOrders) => {
      console.log(formattedOrders);
    })

})
.catch((e) => {
	console.log(e);
})
```

To see the full code, visit GitHub.

## Related Resources

- [Orders](https://beta.elasticpath.dev/docs/commerce-manager/orders/orders-cm)
- [Orders API](https://beta.elasticpath.dev/docs/api/carts/orders)
