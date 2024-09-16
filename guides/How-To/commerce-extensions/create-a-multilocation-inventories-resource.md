---
title: Create a Multi-location Inventories Resource
nav_label: Create a Multi-location Inventories Resource
nav_position: 3
---

Imagine managing inventory across multiple locations effortlessly. Commerce Extensions makes this possible with Custom APIs designed to handle specific data points like SKU, Collection Name, Location Name, and Inventory amount. This functionality allows businesses to quickly provide inventory information to customers, enhancing the shopping experience.

In this guide you will learn how to:

* Create a Custom API to store your location inventory data.
* Streamline your data import and sync processes using upserts and accessing entries with well-known identifiers.
* Ensure the accuracy of your inventory amounts using Conditional Updates to prevent lost updates and other data conistency issues.

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
        "allow_upserts": true,
        "type": "custom_api"
      }
    }
```

Make sure to take note of the Custom API ID [returned](/docs/api/commerce-extensions/create-a-custom-api#responses), you must replace `:customApiId` in the following step with the Custom API ID. In addition, notice that `data.allow_upserts` is set to `true`, this allows to perform [upserts](/guides/How-To/commerce-extensions/create-a-multilocation-inventories-resource#update-custom-api-entries) of Custom API Entries.

## Create Custom Fields

### Create Custom Field - sku

In this step, you will create a Custom Field `sku`, this stores a string to represent this SKU.

```sh
curl -X POST "https://useast.api.elasticpath.com/v2/settings/extensions/custom-apis/:customApiId/fields" \
     -H "Authorization: XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
      "data": {
        "slug": "sku",
        "name": "Slug",
        "description": "Slug of the entry",
        "field_type": "string",
        "validation": {
          "string": {
            "min_length": 12,
            "allow_null_values": false,
            "unique": "yes",
            "unique_case_insensitivity": true
          }
        },
        "use_as_url_slug": true
        "type": "custom_field"
      }
    }
```

Some things to note about the sample request above:
* `data.validation.string.min_value`: Ensures that `slug` values have at least 12 characters.
* `data.validation.string.allow_null_values`: Will reject any `null` values from being stored as a `sku`.
* `data.validation.unique`: Blocks any duplicate values from being stored as a `sku`.
* `data.validation.unique_case_insensitivity`: Controls whether values with different cases (for example, `ABC` and `abc`) should conflict. Only applies when `unique` is set to `yes`.

Each of these can be tailored to fit your business see [Custom Fields Overview](/docs/api/commerce-extensions/custom-fields) for more.

"use_as_url_slug" is enabled this will allow access to your data using well-known identifiers in your domain rather than having to rely on identifiers generated from our platform, we will build on this later.

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
Take note of `data.validation.integer.min_value` in the step above, this field is restricted to not allow negative values. For more information, see [integer validation](/docs/api/commerce-extensions/custom-fields#integer-validation).

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
Take note of `data.validation.string` in the step above, this field is restricted to only allow the following values:
* Paris
* London
* New York

For more information, see [string validation](/docs/api/commerce-extensions/custom-fields#string-validation).

## Create Custom API Entries 

With your Custom API configured, create Custom API Entries to store you location inventories.

```sh
curl -X POST "https://useast.api.elasticpath.com/v2/extensions/location-inventories" \
     -H "Authorization: XXXX" \
     -H "Content-Type: application/json" \
     -d ${
      "data": {
        "type": "location_inventory_ext",
        "sku": "TBL-DIN-6WD-OAK-0034",
        "amount": 40,
        "location-name": "Paris"
      }
    }
```

Notice that the URL you made this request is slightly different, you were able to create a Custom API Entry against the `slug` of the Custom API you created earlier.

In addition, the `type` in the request body was the `api_type` of the Custom API you created earlier.

Finally, take note that the keys (`slug`, `amount` and `location-name`) of the attributes used in the request body are the `slug` of the Custom Fields you created earlier.

## Update Custom API Entries

Recall that [earlier](/guides/How-To/commerce-extensions/create-a-multilocation-inventories-resource#create-custom-api-entries) when you created the Custom Field `sku` that you marked it for `use_as_url_slug`. This allows you to access a Custom API Entry by the value that is stored in that Custom Field for that record rather than having to:

1. Filter for that record.
2. Save the `data.id` attribute for that record.
3. Update that record using an auto-generated identifier.

Given a Custom API Entry exists with `"sku": "TBL-DIN-6WD-OAK-0034"`
When you want to update the inventory `amount` you make the following request:

```sh
curl -X PUT "https://useast.api.elasticpath.com/v2/extensions/location-inventories/TBL-DIN-6WD-OAK-0034" \
     -H "Authorization: XXXX" \
     -H "Content-Type: application/json" \
     -d ${
      "data": {
        "type": "location_inventory_ext",
        "amount": 43
      }
    }
```

Notice that the resource identifier in the request above is one that should be well-known to you and your processes and not a random UUID generated by the platform `/v2/extensions/location-inventories/:customApiEntryId`.

## Upsert Custom API Entries

To further simplify and optimize your data import and synchronization processes you can upsert Custom API Entries. Instead of first having to check whether a record exists and then deciding to create or update a Custom API Entries, you can upsert a record, if it exists it is updated, and if it doesn't, then it is inserted or created. This is made possible by your setting of `data.allow_upserts` when you (created this Custom API)[/guides/How-To/commerce-extensions/create-a-multilocation-inventories-resource#create-a-new-custom-api---location-inventories].

```sh
curl -X PUT "https://useast.api.elasticpath.com/v2/extensions/location-inventories/FURN-SOFA-3S-LTH-BLK-0021" \
     -H "Authorization: XXXX" \
     -H "Content-Type: application/json" \
     -d ${
      "data": {
        "sku": "FURN-SOFA-3S-LTH-BLK-0021",
        "type": "location_inventory_ext",
        "amount": 12,
        "location-name": "Paris"
      }
    }
```

## Conditional Updates

When using Custom API Entries, if multiple independent clients update the same resource, you should have them use the `If-Match` header to prevent lost updates and other data consistency issues in the inventory amounts. For example, if two users simultaneously see an amount of 3 and each allocate 1, both would update the amount to 2. The `If-Match` header ensures that only one of these requests succeeds. It works by comparing the provided ETag value with the current ETag value of the resource. If the resource hasn't changed since you last read it, the ETag will not change, ensuring the update is safe. 

To update a resource, include the `If-Match` header in your request and set its value to the ETag. For more information, see [update a custom entry](/docs/api/commerce-extensions/update-a-custom-entry). If the value of the header matches the current ETag, the request completes successfully. If not, `HTTP 412 Precondition Failed` is returned. If a client receives an `HTTP 412`, they should re-read the resource to get the latest version, ensure the update is safe, that is check that the amount is greater than zero, and try again.

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

For more information, see [Filtering](/docs/api/commerce-extensions/get-all-custom-entries#filtering).
