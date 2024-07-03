---
title: Implement PayPal Express Checkout
nav_label: Implement PayPal Express Checkout
nav_position: 3
---

Implement PayPal Express checkout to authorize, capture, purchase, and refund payments.

## Prerequisites

- Ensure that you have a Commerce account, and Client ID and Client Secret of your store available from [Commerce Manager](https://elasticpath.dev/docs/commerce-manager/application-keys/application-keys-cm).
- Get An [access token](/guides/Getting-Started/your-first-api-request).
- Create an account in [developer.paypal.com](https://developer.paypal.com/).
- Configure products and gateway using Commerce Manager or API.
- Onboard PayPal Express Checkout. See [Onboarding PayPal Express Checkout](/docs/commerce-manager/payments/paypal).

## Procedure - Set up the Checkout Flow

Use the API to create a checkout flow. At minimum, you need the ability to setup and confirm the purchase and authorization workflow.

### `Purchase` workflow

You can use any URL safe value you want for your cart IDs. If a cart does not already exist with that ID, it will be created the first time you add an item. If the request is successful, you will get a `201` response with all of the cart items that exist in the updated cart.

You can set up and confirm a purchase by doing the following:

1. Checkout using a customer object. For more information, see [Checkout](/docs/carts-orders/account-checkout).

    :::caution
    Ensure that you use a valid country code. The URL used in this call is `http://localhost/v2/carts/{{cartID}}/checkout`.
    :::

1. Use the following request example to set up `purchase` from PayPal Express Checkout gateway. For more information, see [PayPal Express Checkout Payments](https://elasticpath.dev/docs/api/carts/authorize-setup).

    ```bash
        curl -X POST https://useast.api.elasticpath.com/v2/orders/:orderId/payments \
            -H "Authorization: Bearer XXXX" \
            -d $'{
	           "data" : {
		       "gateway" : "paypal_express_checkout",
		       "method" : "purchase",
		       "options" : {
                   "description": "Test description",
                   "soft_descriptor": "integration test",
                   "application_context": {
                       "brand_name": "TEST brand",
                       "locale": "en-US",
                       "landing_page": "LOGIN",
                       "shipping_preference": "SET_PROVIDED_ADDRESS",
                       "user_action": "PAY_NOW",
                       "return_url": "https://elasticpath.com",
                       "cancel_url": "https://elasticpath.com"
		        }
	        }
        }
    }'
    ```

    The following response example is returned:

    `200 OK`

    ```
        "data": {
        "id": "4e772a38-7ca1-43a6-9c99-a136d2856bff",
        "type": "transaction",
        "reference": "4KT84175RH321931J",
        "gateway": "paypal_express_checkout",
        "amount": 10000,
        "refunded_amount": 0,
        "currency": "USD",
        "transaction_type": "purchase",
        "status": "pending",
        "relationships": {
            "order": {
                "data": {
                    "type": "order",
                    "id": "a2c3aeef-1ea1-4029-aa92-53091a548220"
                }
            }
        },
        "meta": {
            "display_price": {
                "amount": 10000,
                "currency": "USD",
                "formatted": "$100.00"
            },
            "display_refunded_amount": {
                "total": {
                    "amount": 0,
                    "currency": "USD",
                    "formatted": "$0.00"
                }
            },
            "timestamps": {
                "created_at": "2022-03-10T22:04:44Z",
                "updated_at": "2022-03-10T22:04:45Z"
            }
        },
        "client_parameters": {
            "token": "",
            "redirect_url": "https://www.sandbox.paypal.com/checkoutnow?token=4KT84175RH321931J"
            }
        }
    }
    ```

1. Copy the `redirect_url` from the previous step and open in a browser. If you are not redirected to the personal account, sign in to the [developer.paypal.com](https://developer.paypal.com/) with your **Email ID** and **System Generated Password** or **Password** that you changed to. See [Accessing PayPal Developer Sandbox Accounts](/guides/How-To/paymentgateways/implement-paypal-express-checkout#accessing-paypal-developer-sandbox-accounts).
1. Click **Pay Now** to make the payment.

    You can see line item details such as item name, SKU, price, quantity, and taxes, and also order-level details such taxes, order total, and discounts corresponding to your payment request. See the following image as an example:

    ![PayPal example](/assets/SimplePayPalExample.png)

    :::note

    The maximum length of `name` and `sku` for an item is `127`. If `name` and `SKU` exceed `127`, we truncate the exceeding strings while sending order-level items to the PayPal payment gateway.
    
    :::

1. In postman, use the following request example to confirm the purchase.

    ```bash
       curl -X POST https://useast.api.elasticpath.com/v2/orders/:orderId/transactions/:transactionId/confirm \
            -H "Authorization: Bearer XXXX" \
            -d $'{
	           "data" : {
		       "gateway" : "paypal_express_checkout",
	      }
      }'
      ```

     The following response is returned:

    ```json
    {
      "data": {
        "id": "xxxxxx-xxxx-xxxx-xxxx-xxxxxxx",
        "type": "transaction",
        "reference": "xxxxxxxxxxx",
        "gateway": "paypal_express_checkout",
        "amount": 10000,
        "refunded_amount": 0,
        "currency": "USD",
        "transaction_type": "purchase",
        "status": "complete",
        "relationships": {
            "order": {
                "data": {
                    "type": "order",
                    "id": "xxxxxx-xxxx-xxxx-xxxx-xxxxxxx"
                }
            }
        },
        "meta": {
            "display_price": {
                "amount": 10000,
                "currency": "USD",
                "formatted": "$100.00"
            },
            "display_refunded_amount": {
                "total": {
                    "amount": 0,
                    "currency": "USD",
                    "formatted": "$0.00"
                    }
            },
            "timestamps": {
                "created_at": "2020-05-12T23:28:11Z",
                "updated_at": "2020-05-12T23:29:11Z"
                }
            }
        }
    }
    ```

1. Go to Commerce Manager.
1. Go to **Orders**, and find the order. The payment status shows `Paid` and under the **Transaction**, the status shows `Complete`.

### `Authorization` workflow

You can use any URL safe value you want for your cart IDs. If a cart doesn’t already exist with that ID, it will be created the first time you add an item. If the request is successful, you will get a `201` response with all of the cart items that exist in the updated cart.

You can set up the authorization and capture the payment by doing the following:

1. Checkout using a customer object. For more information, see [Checkout](/docs/api/carts/checkout).

    :::note

    Ensure that you use a valid country code. The URL used in this call is `http://localhost/v2/carts/{{cartID}}/checkout`.

    :::

1. Use the following request example to setup authorization from PayPal Express Checkout gateway. For more information, see [PayPal Express Checkout Payments](https://elasticpath.dev/docs/api/carts/authorize-setup).

    ```bash
       curl -X POST https://useast.api.elasticpath.com/v2/orders/:orderId/payments \
            -H "Authorization: Bearer XXXX" \
            -d $'{
	           "data" : {
		       "gateway" : "paypal_express_checkout",
		       "method" : "authorize",
		       "options" : {
                   "description": "Test description",
                   "soft_descriptor": "integration test",
                   "application_context": {
                       "brand_name": "TEST brand",
                       "locale": "en-US",
                       "landing_page": "LOGIN",
                       "shipping_preference": "SET_PROVIDED_ADDRESS",
                       "user_action": "PAY_NOW",
                       "return_url": "https://elasticpath.com",
                       "cancel_url": "https://elasticpath.com"
		        }
	        }
        }
    }'
    ```

    The following response is returned:

    ```JSON
       {
         "data": {
             "id": "367933ca-35f5-4283-b599-0b7a85a002f1",
             "type": "transaction",
             "reference": "3L516367V9884024E",
             "gateway": "paypal_express_checkout",
             "amount": 10000,
             "refunded_amount": 0,
             "currency": "USD",
             "transaction_type": "authorize",
             "status": "pending",
             "relationships": {
                 "order": {
                     "data": {
                         "type": "order",
                         "id": "a7e7dd2f-daed-4010-9432-0d88a6f5c74f"
                     }
                 }
             },
             "meta": {
                 "display_price": {
                     "amount": 10000,
                     "currency": "USD",
                     "formatted": "$100.00"
                 },
                 "display_refunded_amount": {
                     "total": {
                         "amount": 0,
                         "currency": "USD",
                         "formatted": "$0.00"
                     }
                 },
                 "timestamps": {
                     "created_at": "2022-03-10T19:26:34Z",
                     "updated_at": "2022-03-10T19:26:35Z"
                 }
             },
             "client_parameters": {
                 "redirect_url": "https://www.sandbox.paypal.com/checkoutnow?token=3L516367V9884024E"
             }
         }
     }
     ```

1. Copy the `redirect_url` from the previous step and open in a browser. If you are not redirected to the personal account, sign in to [developer.paypal.com](https://developer.paypal.com/) with your **Email ID** and **System Generated Password** or **Password** that you changed to. See [Accessing PayPal Developer Sandbox Accounts](#accessing-pay-pal-developer-sandbox-accounts).

1. Click **Pay Now** to make the payment. 

    You can see line item details such as item name, SKU, price, quantity, and taxes, and also order-level details such taxes, order total, and discounts corresponding to your payment request. See the following image:

    ![PayPal example](/assets/SimplePayPalExample.png)

    :::note

    The maximum length of `name` and `sku` for an item is `127`. If `name` and `SKU` exceed `127`, we truncate the exceeding strings while sending order-level items to the PayPal payment gateway.

    :::

1. In postman, use the following request example to confirm the payment.

    ```bash
       curl -X POST https://useast.api.elasticpath.com/v2/orders/:orderId/transactions/:transactionId/confirm \
            -H "Authorization: Bearer XXXX" \
            -d $'{
               "data" : {
               "gateway" : "paypal_express_checkout",
           }
       }'
      ```

    To confirm multiple payments in postman, update multiple payments settings in your PayPal account. See [Updating Multiple Payment Settings in PayPal](/guides/How-To/paymentgateways/implement-paypal-express-checkout#updating-multiple-payment-settings-in-paypal-account).

1. Capture the authorized funds. See [Capture a Transaction](/docs/api/carts/capture-a-transaction).
1. Go to Commerce Manager.
1. Go to **Orders**, and find the order. The payment status shows `Paid`, and the **Transaction** status shows `Complete`.

### `Refund` workflow

You can `refund` the `paid` order. See [Refund a Payment](/docs/api/carts/refund-a-transaction).

## Accessing PayPal Developer Sandbox Accounts

### Prerequisite

Ensure that you create an account in [developer.paypal.com](https://developer.paypal.com/). You can create either a personal account or a business account.

### Procedure

1. Log in to [developer.paypal.com](https://developer.paypal.com/).
1. Go to your **Profile > My Account**.
1. On the **Sandbox** sidebar, click **Accounts**. The **Sandbox test accounts** page is displayed with a list of all the sandbox accounts.
1. In the **Manage accounts** column, click the three dots associated with the account and select **view/edit account**.
1. Make a note of the **Email ID**, **System Generated Password**, and **Account ID** to set up your PayPal Express Checkout for commerce cloud. See [Configure PayPal Express Checkout](https://elasticpath.dev/docs/api/carts/authorize-setup).

## Updating Multiple Payment Settings in PayPal Account

To confirm multiple payments, follow the instructions to update multiple payment settings in your sandbox PayPal account.

1. Log in to your [Sandbox PayPal account](https://www.sandbox.paypal.com).
1. Go to your **profile > Account Settings**.
1. On the sidebar menu, click **Payment preferences**.
1. On the **Payment preferences** page, click **Update** in the **Block payments** row.
1. On the **Preferences for receiving payments** page, under **Block accidental payments**, choose **No, allow multiple payments per invoice ID** to confirm multiple payments.

## Related Resources

- [PayPal Express Checkout Payments](https://elasticpath.dev/docs/api/carts/authorize-setup)
- [Checkout workflow](/docs/carts-orders/checkout/)
- [Carts API](/docs/api/carts/cart-management)
