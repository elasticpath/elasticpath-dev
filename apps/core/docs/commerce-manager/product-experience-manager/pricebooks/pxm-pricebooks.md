---
title: Price Books
sidebar_label: Price Books
sidebar_position: 10
---

A price book contains the prices for the products in a catalog. Catalogs with the same hierarchies of products can be associated with different price books. 

A price book contains a list of product SKUs and the prices you want to charge for those products. If your store supports multiple currencies, a price book can contain product prices in each of the supported currencies. See [Manage Currencies in Stores](/docs/commerce-manager/product-experience-manager/currencies/manage-currencies).

Each catalog must have at least one price book.  A price book can be associated with multiple catalogs. 

You can configure your catalog to have up to 5 price books. Price book stacking allows you to create multiple price books for different scenarios, such as seasonal sales, business versus retail customer pricing, and reward programs. If you have multiple price books, when you create a catalog, you must configure a priority for your price books. Product prices are displayed in the catalog according to the priority of the price books. For example, you may have products that have different prices based on region. You can have a price book with the standard retail pricing and then have a second price book that has different pricing for a different region. See [Create a catalog](/docs/commerce-manager/product-experience-manager/catalogs/creating-catalogs).

With catalog rules, you can specify when to display these catalogs based on the shopper context. See [Configure Shopper Catalogs](/docs/commerce-manager/product-experience-manager/catalogs/creating-catalogs) and [Configure Shopper Catalog Rules](/docs/commerce-manager/product-experience-manager/catalogs/catalog-rules).

You can use price modifiers to change the prices of your child products. By default, child products inherit the same price as their parent products. Using price modifiers, you can enable child products to inherit a different price. For example, this enables you to configure the price of child products to be lower than its parent product, without having to individually update the prices of your child products. There are two types of price modifier.

| Modifier    | Description |
|:------------| :--- |
| `Increment` | Increases the price of a product. |
| `Decrement` | Decreases the price of a product. |

You can create and update product price books and prices in bulk, at both organization and store level, using the Price Book Import API. This is useful, for example, if you have a promotion and want to update 50,000 product prices. Rather than having to go to each price book and manually edit 50,000 prices, you can use the Price Book Import API to bulk update all your product prices at the same time, including setting different prices for different currencies.

In your storefront, the product prices are displayed in the currencies you have configured for your store. If a product in the catalog does not have a price for a currency in the price book, the product is displayed without a price.

## Importing Price Books and Prices

You can create/update:

- price books.
- prices.
   - sales pricing for products and product bundles with SKUs.
   - volume (tiers) pricing.

The following are not supported by the Price Book Import API:

- price modifiers
- SKUless bundles
- Bundle sale prices

Commerce Manager uses a [JSONL](https://jsonlines.org/) file. The JSONL file can be compressed to a GZIP file. Here is an [example of a JSONL file](/assets/example_file_all.jsonl).

A file can include up to 50,000 objects. If you have more than 50,000 objects, then you must create a separate file, and import each file, one at a time.

1. Go to **Product Experience Manager** > **Price Books**.
2. Select **Import**. Price book imports a processed sequentially in the order that you select **Import**.
3. Browse to the location of your JSONL file.
4. Select your file and click **Open**. A notification indicating whether the operation is successful is displayed. The imported price books and prices are displayed in the **All Price Books** tab. 
5. Select a price book to display the imported/updated prices.
6. The import works on a "best endeavours" approach. In other words, Commerce Manager does its best to create/update the price book objects based on the file that you provide. If there are any errors, then the import is aborted and the job fails with an error. You can then use the results of the job to understand what objects were created/updated up to the point the import failed and to troubleshoot any errors. See [Import Results](/docs/api/pxm/pricebooks/import-pricebook#tag/Price-Book-Import).

## Creating Price Books

Create a price book. Add a product by SKU and then add prices in each currency supported in the store. You can add new currencies under **System** in [Store Settings > Currencies](/docs/commerce-manager/product-experience-manager/currencies/manage-currencies).

1. Go to **Product Experience Manager > Price Books**.
1. Click **Add Price Book**.
1. In the **Name** field, enter a name for the price book. Price books must have a unique name.
1. (Optional) In the **Description** field, enter a description for the price book.
1. Click **Save**.

You can add products and price only after creating a price book.

## Adding Products and Prices to a Price Book

To add products and prices to a price book:

1. Go to **Product Experience Manager > Price Books**.
1. Click a price book.
1. Click **Add SKUs**. 
1. In the **Add SKUs** field, do one of the following:

    - Enter the SKU number and search for the product you want to add.
    - Select a product from the list.

1. Click **+** in the product listing for the products you want to add. The products are added.
1. Enter the price for the product in the appropriate currency. You can add new currencies under **System** in [Store Settings > Currencies](/docs/commerce-manager/product-experience-manager/currencies/manage-currencies).
1. Click **Save**.

## Creating and Using Price Modifiers

You must perform the following steps to use price modifiers.

1. Create your price modifier.
1. Apply your price modifier to your product options.

### Creating price modifiers

To create a price modifier:

1. Go to **Product Experience Manager** > **Price Books**.
1. Click the price book where you want to create your price modifiers.
1. Click **Price Modifiers**.
1. Click **Create New Price Modifier**.
1. From **Price Modifier Type** drop-down list, select either:

    - **Increment** to increase the price of your child products.
    - **Decrement** to decrease the price of your child products.

1. In **Name**, type a name for your price modifier. You must give the price modifier a unique name, for example, **tax_modifier**.
1. We recommend that you select **Copy** to copy the name of the product modifier. This is because you must make sure the price modifier name that you use matches exactly with the price modifier name you specified when creating your price modifier.
1. The currencies you have configured for Commerce Manager are displayed. For each currency, type the amount to modify the base product price by. You can add currencies to Commerce Manager in **Settings** > **Currencies**.
1. Click **Save**.

### Applying price modifiers 

To apply a price modifier to a product option:

1. Go to **Product Experience Manager** > **Configurations**.
1. Click **Variations**.
1. Click the variation whose options you want to apply a price modifier to.
1. Click **Options**.
1. In **Actions**, click **...** next to the option you want to apply a price modifier to.
1. From the menu, select **Edit Modifiers**.
1. From the **Modifier** drop-down list, select **price**.
1. In the **Price Modifier Name** field, type or paste the name of the price modifier you want to use. Make sure the price modifier name you use matches exactly the price modifier name you specified when creating your price modifier.
1. Click **Save**. You can edit and delete a price modifier at anytime. See [Variations, Options, and Modifiers](/docs/commerce-manager/product-experience-manager/variations/assign-variations-build-child-products).

## Updating price books and prices

You can update product SKUs and prices.

1. Go to **Product Experience Manager > Price Books**.
1. Do one of the following:

    - Click a price book.
    - Click **...** next to the price book you want to edit and click **Edit**.

1. Click **Add SKUs** to add more products to the price book. 
1. In the **Add SKUs** field, do one of the following:

    - Enter a SKU and search for a product.
    - Select a product from the list.

1. Click **+** for the products you want to add.
1. To amend a product's price:

   1. Find the product whose price you want to update. In **Search**, you can search for a product SKU. 
   1. (Optional) In **SKU**, click the field to update a product SKU. 
   1. In *Currency*, where *currency* is the currency of the price you want to update, click the field to update the price. 
   1. (Optional) Turn on the **Include tax** toggle if you want the price to include tax.

1. To delete a product, in **Actions**, click the trash can next to the product you want to delete.
1. Click **Save**.

## Deleting Price Books

Deleting a price book deletes the product prices in the price book. However, it does not delete the products. The pricing details in the orders referring to the deleted price book are also not deleted.

1. To delete a price book, in the **Price Books** page, do one of the following:

    - Click **...** next to the price book you want to delete and click **Delete**.
    - Select the checkbox of the price book you want to delete and click **Actions > Delete**.

1. To delete more than one price book, select the checkboxes of the price books that you want to delete and click **Actions > Delete**.

## Related Resources

- [Products](/docs/commerce-manager/product-experience-manager/Products/overview)
- [Catalogs](/docs/commerce-manager/product-experience-manager/catalogs/creating-catalogs)
- [Catalog Rules](/docs/commerce-manager/product-experience-manager/catalogs/catalog-rules)


### Demos

<iframe width="560" height="315" src="https://www.youtube.com/embed/oqdkiiMTN4s" title="Understanding Price Books" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/5FbnzyNR1-w" title="Configuring Price Books in Commerce Manager" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/diC3CeCTChU" title="Configuring Price Modifiers in Commerce Manager" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
