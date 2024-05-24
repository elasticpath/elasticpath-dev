---
title: Extend any resource
nav_label: Extend any resource
sidebar_position: 4
---

Extend any existing resource in an organization or store with custom data. You can extend any resource to enable
pre-defined information for display or to power custom business logic elsewhere in your application that requires this
additional data to function.

This guide gives you a general idea and know-how around extending an existing resource with custom schema. For how-to
guides about extending specific types of resources, see:

- [Extend customer resources](/guides/How-To/Customers/extend-customer-resources)
- [Extend product resources](https://beta.elasticpath.dev/guides/Products/add-custom-data-to-pxm-products)
- [Extend cart and order resources](/guides/How-To/Carts/extend-cart-and-order-resources)

## Prerequisites

If you want to follow along, you need the following items:

- A Composable Commerce account and the Client ID and Client Secret of your store
- An [access token](https://beta.elasticpath.dev/guides/Getting-Started/your-first-api-request#get-an-access-token)
- A basic understanding of object-oriented programming or JavaScript

## Step-by-step walkthrough

The walkthrough shows you how to extend an existing resource with a core Flow, so it can have all of the JSON you want
and need.

1. Create a core Flow.
2. Create a Flow Field.
3. Create an object that includes your custom data.
4. Verify your new field.

### Create a core Flow

Let us start with creating a new Flow. The slug must match the plural name of the resource you are extending, such
as `addresses`.

If you already have a Flow for your existing resource, skip to [Create a Flow Field](#create-a-flow-field). You need the
ID of the `addresses` Flow to continue.

```
POST /v2/flows
{
  "data": {
    "type": "flow",
    "name": "addresses extended",
    "slug": "addresses",
    "description": "flow description",
    "enabled": true
  }
}
```

Take note of the Flow ID that is returned. You need the Flow ID to create a Flow field.

### Response example for creating a flow

```
{
    "data": {
        "id": "f209d4ac-8199-48b4-975a-769719ee9eac",
        "type": "flow",
        "name": "addresses extended",
        "slug": "addresses",
        "description": "flow description",
        "enabled": true,
        ...
    }
}
```

### Create a Flow Field

The Field is returned when you call the object you have extended. Replace `FLOW-ID` with the generated Flow ID.

```

POST /v2/fields
{
    "data": {
        "type": "field",
        "name": "Address Priority",
        "slug": "address-priority",
        "field_type": "integer",
        "description": "Priority number for addresses",
        "required": false,
        "default": 0,
        "enabled": true,
        "order": 1,
        "relationships": {
            "flow": {
                "data": {
                    "type": "flow",
                    "id": "FLOW-ID"
                }
            }
        }
    }
}'

```

### Create an object that includes your custom data

Now, all you need to do is to create an object that includes all your custom data. In addition to your custom fields,
you need to include all fields required for that object. Replace `FIELD-SLUG` with the actual slug you used for the
Field you want to create an Entry for.

```

POST /v2/customers/:customerID/addresses
{
    "data": {
        "type": "address",
        "first_name": "Ron",
        "last_name": "Swanson",
        "name": "Home",
        "phone_number": "(555) 555-1234",
        "instructions": "Leave behind bin",
        "company_name": "Ron Swanson Enterprises",
        "line_1": "1 Sunny Street",
        "line_2": "",
        "city": "Sunny Town",
        "county": "Sunnyville",
        "postcode": "SU33 1YY",
        "country": "GB",
        "address-priority": 1
    }
}

```

### Verify your new field

To verify whether your existing resource has been expanded with new fields, call (`GET`) this resource, such
as `addresses`. The fields are also available in Commerce Manager under custom data for each resource you have there.

```

GET /v2/customers/:customerID/addresses

{
    "data": [
        {
            "id": "e654fa73-a072-4a9e-846a-ce13bf7433c6",
            "type": "address",
            "address-priority": 1, // the entry is present here
            "name": "Home",
            "first_name": "Ron",
            "last_name": "Swanson",
            "company_name": "Ron Swanson Enterprises",
            "phone_number": "(555) 555-1234",
            "line_1": "1 Sunny Street",
            "line_2": "",
            "city": "Sunny Town",
            "postcode": "SU33 1YY",
            "county": "Sunnyville",
            "region": "",
            "country": "GB",
            "instructions": "Leave behind bin",
            "links": {
                "self": "..."
            },
            "meta": {
                "timestamps": {
                    "created_at": "2023-08-31T16:13:03.265Z",
                    "updated_at": "2023-08-31T16:13:03.265Z"
                }
            }
        }
    ]
}

```
