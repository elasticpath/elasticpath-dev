---
title: Checkout workflow
nav_label: Checkout workflow
sidebar_position: 10
---

The checkout workflow ties together many of the key concepts covered in this section. When a customer initiates the checkout process, an order is created from the cart. The order is incomplete until after a successful payment is made. A complete order can be shipped and the product deducted from inventory counts.

![Checkout workflow](/assets/checkout-flow.png)

## Summary of the checkout workflow

1. Add a product to a cart. A cart and its reference number is generated.
2. Manage the cart items. For example, you might add items, remove items, and change quantities.
3. Check out the cart. An **incomplete order** is created.
4. Pay for an order: provide billing and shipping details, if youʼre a new customer. The order is now in the **processing** status.
5. If using a manual gateway, after you authorize and capture it, Composable Commerce considers the order **complete**. If you use a third-party integration supported by Composable Commerce (such as Stripe), after the third-party gateway authorizes and captures the payment, the order becomes **complete**. Usually capture does not occur at the same time as authorization. For more information, see the [Capture](https://beta.elasticpath.dev/docs/api/payments/payment-gateway-introduction) section.
6. After the order is shipped, you can manually flag it as **fulfilled**.

## Carts

When a product is added to a cart, a cart is generated together with its unique reference ID that on checkout becomes a part of the order ID. If youʼre using our JavaScript software development kit, generating a cart reference ID is done for you; otherwise, add a cart reference generator to your functionality.

## Promotions and custom items

Optionally, apply a promotion `code` on a cart, or add `custom_items` to modify the product price (typically to handle taxes, customs, or shipping). Custom cart items are only available through [implicit authentication](https://beta.elasticpath.dev/docs/authentication/Tokens/implicit-token).

## Checkout

You can checkout a cart with an associated customer name and email (`customer` object). Typically, this would be used for new customers or ones that prefer to shop as guests. Use the `customer.id` checkout option to checkout for an existing customer. After a successful checkout is completed, the response contains an order.

Email addresses that either begin or end with a period, or contain consecutive periods, are considered invalid, resulting in the following error:

```json
{
    "errors": [
        {
            "status": 400,
            "source": "data.customer.email",
            "title": "format",
            "detail": "Does not match format 'email"
        }
    ]
}
```

## Payment

On checkout, an incomplete order is created. You can then use a third-party integration to handle your payment gateway. If the payment gateway is supported by Composable Commerce, such as Stripe, the payment is processed externally but handled internally. When a successful validation is returned, Composable Commerce flags the order as `complete`.

If you are using a payment method not officially supported by Composable Commerce, the gateway needs to be implemented and handled manually. After the payment has been authorized and captured either through Commerce Manager or API, the status of an order becomes `complete`.

## Shipping

The status of an order and the status of shipping are handled separately, and so an order can be complete but not shipped. Orders that have not been shipped yet have a status of **unfulfilled**. This flag is generated automatically by Composable Commerce when an order is created. Currently, you can only update the shipping status manually, through the API. After the order is shipped, flag its shipping status as **fulfilled**.

## Inventory

If enabled, you can manage your stock. As such, your stock is automatically updated as soon as a product is checked out.

## Related Resources

- [Carts](https://beta.elasticpath.dev/docs/api/carts/cart-management)
- [Promotions](https://beta.elasticpath.dev/docs/api/promotions/promotions-standard-introduction)
- [Orders](https://beta.elasticpath.dev/docs/api/carts/orders)
- [Payments](https://beta.elasticpath.dev/docs/api/payments/payment-gateways-introduction)
- [Inventory](https://beta.elasticpath.dev/docs/api/pxm/inventory/inventories-introduction)
- [API Reference](/guides/Getting-Started/api-reference)
