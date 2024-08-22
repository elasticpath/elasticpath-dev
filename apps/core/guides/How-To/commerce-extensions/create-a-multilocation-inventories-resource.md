---
title: Create a Multi-location Inventories Resource
nav_label: Create a Multi-location Inventories Resource
nav_position: 3
---

Imagine managing inventory across multiple locations effortlessly. Commerce Extensions makes this possible with Custom APIs designed to handle specific data points like SKU, Collection Name, Location Name, and Inventory amount. This functionality allows businesses to quickly provide inventory information to customers, enhancing the shopping experience.

## Prerequisites

If you want to follow along, you need a [Client credential token](/docs/authentication/Tokens/client-credential-token).

## Step-by-step Walkthrough

1. Create a Custom API location inventories.
2. Create Custom Fields to store the relevant fields for your data.
3. Create Custom API Entries to store your location inventory data.
4. Update Custom API Entries to track changes to your location inventory data.

## Create a new Custom API - location inventories

```sh
curl -X POST "https://useast.api.elasticpath.com/v2/settings/extensions/custom-apis" \
     -H "Authorization: XXXX" \
     -H "Content-Type: application/json" \
     -d ${
      "data": {
        "slug": "location-inventories",
        "api_type": "location-inventories_ext",
        "name": "Location Inventories",
        "description": "Inventory entries for all SKUs at all retail locations.",
        "type": "custom_api"
      }
    }
```

Make sure to take note of the Custom API ID [returned](https://beta.elasticpath.dev/docs/api/commerce-extensions/create-a-custom-api#responses), you must replace `:customApiId` in the following step with the Custom API ID.

## Create Custom Fields

### Create Custom Field - slug
In this step, you will create a Custom Field `slug`, this stores a string to represent this SKU.

```sh
curl -X POST "https://useast.api.elasticpath.com/v2/settings/extensions/custom-apis/:customApiId/fields" \
     -H "Authorization: XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
      "data": {
        "slug": "slug",
        "name": "Slug",
        "description": "Slug of the entry",
        "field_type": "string",
        "type": "custom_field"
      }
    }
```

### Create Custom Field - amount
In this step, you will create a Custom Field `amount`, this stores the amount of inventory of this SKU at this location as an integer.

```sh
curl -X POST "https://useast.api.elasticpath.com/v2/settings/extensions/custom-apis/:customApiId/fields" \
     -H "Authorization: XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
      "data": {
        "slug": "amount",
        "name": "Location Inventory",
        "description": "Amount of inventory of this SKU at this location",
        "field_type": "integer",
        "validation": {
          "integer": {
            "min_value": 0
          }
        }
        "type": "custom_field"
      }
    }
```
Take note of `validation` in the step above, this field is restricted to not allow negative values. For more information, see [integer validation](https://beta.elasticpath.dev/docs/api/commerce-extensions/custom-fields#integer-validation).

### Create Custom Field - location-name
In this step, you will create a Custom Field `location-name`, this stores a string to represent where a SKU is stored. Additionally, you will restrict this value to specific options using regex.

```sh
curl -X POST "https://useast.api.elasticpath.com/v2/settings/extensions/custom-apis/:customApiId/fields" \
     -H "Authorization: XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
      "data": {
        "slug": "location-name",
        "name": "Location Name",
        "description": "Location Name",
        "field_type": "string",
        "validation": {
          "string": {
            "regex": "^(Paris|London|New York)$"
          }
        }
        "type": "custom_field"
      }
    }
```
Take note of `validation` in the step above, this field is restricted to only allow the following values:
* Paris
* London
* New York

For more information, see [string validation](https://beta.elasticpath.dev/docs/api/commerce-extensions/custom-fields#string-validation).

### Create Custom Field - collection-name
In this step, you will create a Custom Field `collection-name`, this stores a string to represent the collection a SKU is associated with.

```sh
curl -X POST "https://useast.api.elasticpath.com/v2/settings/extensions/custom-apis/:customApiId/fields" \
     -H "Authorization: XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
      "data": {
        "slug": "collection-name",
        "name": "Collection Name",
        "description": "Name of the collection",
        "field_type": "string",
        "type": "custom_field"
      }
    }
```

## Create Custom API Entries 

With your Custom API configured, create Custom API Entries to store you location inventories.

```sh
curl -X POST "https://useast.api.elasticpath.com/v2/extensions/location-inventories" \
     -H "Authorization: XXXX" \
     -H "Content-Type: application/json" \
     -d ${
      "data": {
        "type": "location_inventory_ext",
        "slug": "LR-SFA-201",
        "amount": 4,
        "location-name": "Paris"
      }
    }
```

Notice that the URL you made this request is slightly different, you were able to create a Custom API Entry against the `slug` of the Custom API you created earlier.

In addition, the `type` in the request body was the `api_type` of the Custom API you created earlier.

Finally, take note that the keys (`slug`, `amount` and `location-name`) of the attributes used in the request body are the `slug` of the Custom Fields you created earlier.

## Update Custom API Entries

With your Custom API Entry created, you can update it to modify inventory `amount`.

```sh
curl -X PUT "https://useast.api.elasticpath.com/v2/extensions/location-inventories/:customApiEntryId" \
     -H "Authorization: XXXX" \
     -H "Content-Type: application/json" \
     -d ${
      "data": {
        "type": "location_inventory_ext",
        "amount": 3
      }
    }
```

### Conditional Updates

When using Custom API Entries, if multiple independent clients update the same resource, you should have them use the `If-Match` header to prevent lost updates and other data consistency issues in the inventory amounts. For example, if two users simultaneously see an amount of 3 and each allocate 1, both would update the amount to 2. The `If-Match` header ensures that only one of these requests succeeds. It works by comparing the provided ETag value with the current ETag value of the resource. If the resource hasn't changed since you last read it, the ETag will not change, ensuring the update is safe. 

To update a resource, include the `If-Match` header in your request and set its value to the ETag. For more information, see [update a custom entry](https://elasticpath.dev/docs/api/commerce-extensions/update-a-custom-entry). If the value of the header matches the current ETag, the request completes successfully. If not, `HTTP 412 Precondition Failed` is returned. If a client receives an `HTTP 412`, they should re-read the resource to get the latest version, ensure the update is safe, that is check that the amount is greater than zero, and try again.

The following example shows how to perform a Conditional Update on a Custom API Entry for location inventories using the `If-Match` header:

```bash
curl -X PUT "https://useast.api.elasticpath.com/v2/extensions/location-inventories/:customApiEntryId" \
     -H "Authorization: XXXX" \
     -H "Content-Type: application/json" \
     -H "If-Match: W/\"{etag_id}\"" \
     -d $ {
      "data": {
        "type": "location_inventory_ext",
        "amount": 3
      }
    }
```

## Example filters for Common Queries

A customer is on a product page and lives near the Hamptons store and wants to know if this product in this color is available at their local store. Filtering on `slug` and `location-name` will retrieve the record for that location for that SKU.
```sh
curl -X GET "https://useast.api.elasticpath.com/v2/extensions/location-inventories?filter=eq(slug,ABC123):eq(location-name,London)" \
     -H "Authorization: XXXX" \
```

I am the buyer for the "Timeless" collection. Show me all SKUs that are out of stock in all locations for SKUs in my collection.
```sh
curl -X GET "https://useast.api.elasticpath.com/v2/extensions/location-inventories?filter=eq(amount,0):eq(collection-name,Timeless)" \
     -H "Authorization: XXXX" \
```

As a customer, I am looking to purchase several pieces that match for a room I am redoing. I want to know all products available for the collection I like. Filtering on `collection-name`, `location-name` and inventory `amount` greater than 0 will provide a list of all products in stock in that collection at that location.

```sh
curl -X GET "https://useast.api.elasticpath.com/v2/extensions/location-inventories?filter=eq(location-name,Hamptons):eq(collection-name,Timeless):gt(amount,0)" \
     -H "Authorization: XXXX" \
```

For more information, see [Filtering](https://beta.elasticpath.dev/docs/api/commerce-extensions/get-all-custom-entries#filtering).
