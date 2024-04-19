---
title: Price Book Import API Results
nav_label: Import Results
sidebar_position: 4
---

The API works on a "best endeavours" approach. In other words, the API does its best to create/update the price book objects based on the file that you provide.

Price book imports are asynchronous. When you send a request to the price book import API, it triggers an asynchronous job to create/update the price books and product prices. The Price Book Import API processes objects in batches of 1000. You can see the status of a job using [Get a job](/docs/pxm/jobs-api/get-a-job).

If there are any errors, then the import is aborted and the job fails with an error. You can then use the job results to understand what objects the API created/updated until the import failed and to troubleshoot any errors. 

Once you have fixed any errors, you can then use the [price book import endpoint](/docs/pxm/pricebooks/price-import/import-prices) to send the request again.

The following table describes the import messages reported by the API.

{% table %}
* Import Message
* Description
---
*
  {% list type="checkmark" %}
  * import price book_id: '%v' belongs to Organization", price book.ID))
  * "import price book external_ref: '%v' belongs to Organization", *price book.ExternalRef)
  {% /list %}
* This group of messages tells you that these imported objects belong to an organization.
---
*
  {% list type="checkmark" %}
  * matched price with pricebook_id - had different external_ref
  * matched price with pricebook_id - belongs to different price book
  * matched price with pricebook_id - price_id not found
  * matched price with pricebook_id - price_id belongs to an organization.
  * matched price with pricebook_id - duplicate external_ref detected
  * matched price with pricebook_id - duplicate SKU detected - required SKU.
  {% /list %}

* This group of messages is telling you that the price was updated but there is an issue with another attribute that requires fixing. 
{% /table %}

The following table describes the import errors reported by the API.

{% table %}
* Error
* Description
---
*
  {% list type="checkmark" %}
  * error processing gzip file
  * error processing object '%v' invalid json provided
  {% /list %}
* This group of errors indicates that there is a problem with the JSONL file. You must fix the problems with the file and try the import again.
---
*
  {% list type="checkmark" %}
  * duplicate price book Id '%s' in imported price books
  * missing attributes for price book
  * invalid type for external_ref for price book
  * missing attributes for price
  * missing sku for price
  * missing sku for price
  * invalid type for external_ref for price
  * invalid type for sku for price
  * missing price book_id/price book_external_ref for price
  * price book id(s) not found
  * price book external ref(s) not found
  * price book id not found:
  * duplicate external ref found
  * price Ids not found
  * price book external refs not found
  {% /list %}
* This group of errors indicates that there is some information missing from the objects you are trying to create/update.
{% /table %}



