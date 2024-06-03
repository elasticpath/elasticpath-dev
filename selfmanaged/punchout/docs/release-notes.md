---
id: release-notes
title: PunchOut Release Notes
original_id: release-notes
---

## `1.4.0.0da7259960`

Released: August 2023

### Release Highlights

#### Added support for cart item modifiers in PunchOut Lambda setup and sales order calls

The [setup API](api.md#setting-up-the-lambda-endpoint) now supports specifying cart item modifiers when populating the cart, as in the following example:

```json
{
  "cart-transfer-url":"https://connect.tradecentric.com/gateway/link/return/id/AH5e39b48e23f3d",
  "ids": [
     {
       "code": "physical_sku",
       "quantity": 1,
       "configuration": {
         "engraving": "Bob and Alice 2023",
         "special-notes": "This is for a wedding, please treat with care."
       }
     },
     {
       "code": "digital_sku",
       "quantity": 1
     }
  ]
}
```

Also, the [sales order API](api.md#sales-order-lambda-endpoint) now supports specifying cart item modifiers when creating a sales order, as in the following example:

```json
{
    "billing-address": {
        "address": {
            "country-name": "CA",
            "locality": "Vancouver",
            "postal-code": "V6A 1N4",
            "region": "BC",
            "street-address": "1234 Hogwarts Avenue",
            "extended-address": ""
        },
        "name" : {
            "family-name": "Doe",
            "given-name": "John"
        },
        "organization": "Staples",
        "phone-number": "1-555-123-0000"
    },
    "shipping-address": {
        "address": {
            "country-name": "CA",
            "locality": "BC",
            "postal-code": "V6A0H3",
            "region": "BC",
            "street-address": "123 Fake Street",
            "extended-address": ""
        },
        "name": {
            "family-name": "Doe",
            "given-name": "John"
        },
        "organization": "Staples",
        "phone-number": "1-555-555-1111"
    },
    "shipping": {
        "option": "CanadaPostExpress"
    },
    "payment": {
        "method": "Smart Path Config",
        "attributes": {
            "display-name": "Sample Payment Method"
        }
    },
    "ids": [
        {
            "code": "physical_sku",
            "quantity": 1,
            "configuration": {
                "engraving": "Bob and Alice 2023",
                "special-notes": "This is for a wedding, please treat with care."
            }
        },
        {
            "code": "digital_sku",
            "quantity": 1
        }
    ]
}
```

## `1.3.0.2d7d9fd9fe`

Released: December 2022

### Release Highlights

#### Added restriction on which headers can be forwarded to Cortex

Forwarding some headers (such as `host`) was causing problems with the Lambda to Cortex integration. Therefore, we have created a block list of certain headers that will not be forwarded from the incoming request to Cortex.

The following headers are restricted and will not be forwarded from the Lambda request to Cortex. Note that some of these headers may still be generated and sent to Cortex.

```text
accept
accept-charset
accept-encoding
cache-control
connection
content-length
content-type
cookie
date
dnt
expect
host
keep-alive
origin
permissions-policy
proxy-*
sec-*
referer
te
trailer
transfer-encoding
upgrade
user-agent
via
```

## `1.2.0.fd14a6fc21`

Released: December 2022

### Release Highlights

#### Update lambda to forward all headers to Cortex

Modified the behaviour of the lambda so that it will forward any headers that are passed to the lambda to the Cortex requests. Previously only the `Authorization` header would be forwared.

For example, the following headers could be passed and will be forwarded to Cortex:

```text
"Authorization": "bearer 5b1aa46f-1cd0-4100-b400-4115c7642147"
"X-Ep-User-Traits": "CURRENCY=USD"
```

## `1.1.0.bc6fe61af7`

Released: November 2022

### Release Highlights

#### Updated lambda to use Cortex Java SDK version 3.0.0

This new version of the Cortex Java SDK has better Cortex error handling, so that the reason for a failure is contained in an exception instead of throwing a `NullPointerException`. It also makes use of updated versions of the `jackson`, `jersey`, `guava`, `httpclient`, and `guice` dependencies.

## `1.0.0`

Released: July 2020

### Release Highlights

#### Setup Lambda Endpoint

The PunchOut Lambda exposes a `/setup` endpoint.  This is intended for use by the PunchOut gateway to initiate the PunchOut session and retrieve the storefront URL.

For more information, see the [API definition](api.md).

#### Cart Transfer Lambda Endpoint

The PunchOut Lambda exposes a `/cart` endpoint. This is intended for use by the PunchOut gateway to transfer the cart contents back to the eProcurement system.

For more information, see the [API definition](api.md).

#### Sales Order Lambda Endpoint

The PunchOut Lambda exposes a `/salesorder` endpoint. This is intended for use by the PunchOut gateway to create a sales order.

For more information, see the [API definition](api.md)
