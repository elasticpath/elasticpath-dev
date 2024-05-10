---
title: Managing Subscriptions
nav_label: Managing Subscriptions
sidebar_position: 20
---

The Subscriptions API is set of APIs used to manage subscriptions. Learn how to use the Subscriptions API to manage your subscriptions. 

:::note
This guide uses the command line to make requests via cURL, but you can also use a supported SDK.
:::

## Objectives

The following steps describe how to manage subscriptions using the Subscriptions API.

1. Create a product. The products and services are what you want to offer in a subscription.
2. Create plans. Plans are the rules that govern your subscription, for example, delivery frequency, the quantity and any discount. You can combine and reuse plans for as many products as you want, making it quick and easy to create your subscription offerings.
3. Create an offering. Offerings are the products and plans that a customer can choose. An offering can consist of many combinations of products or plans, depending on the products and services you offer.

## Creating a Product

You can create the products and services that you want to offer in a subscription. Products can have additional attributes, such as price, and rich media assets, such as images or files containing additional product details.

The following request creates a **4K Streaming** product, including a description and a SKU.

```bash
curl -X POST https://useast.api.elasticpath.com/subscriptions/products \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
    "data": {
       "type": "subscription-product",
       "attributes": {
       "name": "4K Streaming",
       "description": "What is 4K Streaming? Its the highest resolution available, giving excellent picture quality and crisp, clear details. 4K Streaming elevates your viewing experience to the next level.",
       "sku": "77012025"
       }
     }
 }'  
```

The response contains the subscription product.

```json
{
    "data": {
        "attributes": {
            "created_at": "2023-11-28T14:13:56.219902965Z",
            "description": "What is 4K Streaming? It's the highest resolution available, giving excellent picture quality and crisp, clear details. 4K Streaming elevates your viewing experience to the next level.",
            "name": "4K Streaming",
            "sku": "77012025",
            "updated_at": "2023-11-28T14:13:56.219902965Z"
        },
        "id": "cc04b3a7-602d-4aeb-bcf1-f7254fefae61",
        "meta": {
            "owner": "store"
        },
        "type": "subscription-product"
    }
}
```

For more information about product media and pricing, see [Repeat Products](https://beta.elasticpath.dev/docs/api/subscriptions/products).

## Creating Plans

You can use plans to model your subscription. Plans are a set of rules and conditions that manage the provision of repeat products in an offering. You can combine and reuse plans for as many products as you want, making it quick and easy to create your subscription offerings.

The following request creates the **Standard with Adverts** plan.

- The billing cycle is monthly and customers are billed on the 1st of the month.
- The plan length is 12 months and rolling. In other words, customers pay regularly and repeatedly, until the plan is cancelled.
- the plan has a fixed price.

```bash
curl -X POST https://useast.api.elasticpath.com/subscriptions/plans \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
    "data": {
    "type": "subscription-plan",
    "attributes": {
      "name": "Standard with Adverts",
      "status": "active",
      "billing_interval_type": "month",
      "billing_frequency": 12,
      "plan_length": 12,
      "end_behavior": "roll",
      "can_pause": true,
      "can_resume": true,
      "can_cancel": true,
      "description": "Our Standard with Adverts plan allows you to enjoy movies and TV shows at a lower price.",
      "billing_month_day": 1,
      "fixed_price": {
        "USD": {
          "amount": 699,
        }
      }
    }
  }
}
```

The response contains the subscription plan.

```json
{
    "data": {
        "attributes": {
            "billing_frequency": 12,
            "billing_interval_type": "month",
            "billing_month_day": 1,
            "can_cancel": true,
            "can_pause": true,
            "can_resume": true,
            "created_at": "2023-11-28T14:39:04.438924314Z",
            "description": "Our Standard with Adverts plan allows you to enjoy movies and TV shows at a lower price.",
            "end_behavior": "roll",
            "fixed_price": {
                "USD": {
                    "amount": 699,
                    "includes_tax": false
                }
            },
            "name": "Standard with Adverts",
            "plan_length": 12,
            "status": "active",
            "updated_at": "2023-11-28T14:39:04.438924314Z"
        },
        "id": "fd7f88dd-ac18-49fc-84c3-613353e0ac53",
        "meta": {
            "owner": "store"
        },
        "type": "subscription-plan"
    }
}
```

The following request describes how to create the **Standard** plan. This is the same as the **Standard with Adverts** plan, apart from the price. 

```bash
curl -X POST https://useast.api.elasticpath.com/subscriptions/plans \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
    "data": "data": {
    "type": "subscription-plan",
    "attributes": {
      "name": "Standard",
      "status": "active",
      "billing_interval_type": "month",
      "billing_frequency": 12,
      "plan_length": 12,
      "end_behavior": "roll",
      "can_pause": true,
      "can_resume": true,
      "can_cancel": true,
      "description": "Our Standard plan allows unlimited ad-free movies, TV shows, and mobile games.",
      "billing_month_day": 1,
      "fixed_price": {
        "USD": {
          "amount": 1599,
        }
      }
    }
  }
}
```

The response contains the subscription plan.

```json
{
   "data": {
      "attributes": {
         "billing_frequency": 12,
         "billing_interval_type": "month",
         "billing_month_day": 1,
         "can_cancel": true,
         "can_pause": true,
         "can_resume": true,
         "created_at": "2023-11-28T15:49:18.833148637Z",
         "description": "Our Standard plan allows unlimited ad-free movies, TV shows, and mobile games.",
         "end_behavior": "roll",
         "fixed_price": {
            "USD": {
               "amount": 1599,
               "includes_tax": false
            }
         },
         "name": "Standard",
         "plan_length": 12,
         "status": "active",
         "updated_at": "2023-11-28T15:49:18.833148637Z"
      },
      "id": "b50eb2c4-7871-4f7f-84bd-01dd8298d77f",
      "meta": {
         "owner": "store"
      },
      "type": "subscription-plan"
   }
}
```

## Creating an Offering

Offerings can contain any combination of products and plans.

The following requests creates an offering that combines the **4k Streaming** product with thr **Standard with Adverts** and **Standard** plans.

```bash
curl -X POST https://useast.api.elasticpath.com/subscriptions/offerings/build \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
     "data": {
       "name": "Dohi",
       "products": [
          "cc04b3a7-602d-4aeb-bcf1-f7254fefae61"
       ],
       "plans": [
          "b50eb2c4-7871-4f7f-84bd-01dd8298d77f", "fd7f88dd-ac18-49fc-84c3-613353e0ac53"
       ],
       "description": "Stream TV and Movies Online."
  }
}
```

The response contains the offering.

```json
{
    "data": {
        "attributes": {
            "created_at": "2023-11-28T15:55:29.052146375Z",
            "description": "Stream TV and Movies Online.",
            "name": "Dohi",
            "updated_at": "2023-11-28T15:55:29.052146375Z"
        },
        "id": "140ea4ad-11b0-4778-91a1-576df688c31c",
        "meta": {
            "owner": "store"
        },
        "relationships": {
            "plans": {
                "links": {
                    "related": "https://epcc-integration.global.ssl.fastly.net/v2/subscriptions/offerings/140ea4ad-11b0-4778-91a1-576df688c31c/plans"
                }
            },
            "products": {
                "links": {
                    "related": "https://epcc-integration.global.ssl.fastly.net/v2/subscriptions/offerings/140ea4ad-11b0-4778-91a1-576df688c31c/products"
                }
            }
        },
        "type": "subscription-offering"
    }
}
```

## Next steps

You can now quickly and easily create a new offering for a new product using the same plans.

1. Create a new product for high-definition video.
2. Create an offering.
    - Attach the new product 
    - Attach the plans you previously created.
