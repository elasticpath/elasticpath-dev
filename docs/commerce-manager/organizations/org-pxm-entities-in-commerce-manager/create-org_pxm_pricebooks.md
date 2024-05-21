---
title: Organization Price Books 
nav_label: Organization Price Books
nav_position : 4
---

An organization can create its own price books. You can:

- create your price books directly in your organization.
- import your price books from other company systems.

A price book contains the prices for the products. Price books can be associated with different catalogs.

- You can create organization price books. Your organization price books are available for your stores to use.  
- Your stores can create their own price books.
- Your stores can create catalogs that have a combination of organization price books and store price books.

For example, AllGoods sell their goods in 15 different countries in 25 different languages with 10 different currencies.

- AllGoods can create price books for each country. All the stores in each country would use the price book created for their country.
- AllGoods can create one price book for their top-selling distributors and another one for those distributors who achieve less sales.
- For all the stores in North America, AllGoods have one price book. Using the same price book, AllGoods can create prices for specific promotions that are scheduled for use at a specific time.

In Commerce Manager, an Org Admin can manage price books in both organization and stores.

## Importing Price Books and Prices

You can create and update product price books and prices in bulk, at both organization and store level, using the Price Book Import API. This is useful, for example, if you have a promotion and want to update 50,000 product prices. Rather than having to go to each price book and manually edit 50,000 prices, you can use the Price Book Import API to bulk update all your product prices at the same time, including setting different prices for different currencies.

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

1. Log into Commerce Manager as an Org Admin.
2. Select **Organizations**.
3. On the **Your organizations** page, select the organization you would like to manage from the list.
4. Go to **Product Experience Manager** > **Price Books**.
5. Select **Import**. Price book imports a processed sequentially in the order that you select **Import**.
6. Browse to the location of your JSONL file.
7. Select your file and click **Open**. A notification indicating whether the operation is successful is displayed. The imported price books and prices are displayed in the **All Price Books** tab.
8. Select a price book to display the imported/updated prices.
9. The import works on a "best endeavours" approach. In other words, Commerce Manager does its best to create/update the price book objects based on the file that you provide. If there are any errors, then the import is aborted and the job fails with an error. You can then use the results of the job to understand what objects were created/updated up to the point the import failed and to troubleshoot any errors. See [Import Results](/docs/pxm/pricebooks/price-import/pricebook-import-results).

## Creating Organization Price Books

Create a price book. Add a product by SKU and then add prices in each currency supported in the store. You can add new currencies under **SYSTEM** in [Organization Settings > Currencies](/docs/organizations/organizations-in-commerce-manager/manage-org-currencies).

1. Log into Commerce Manager as an Org Admin.
1. Select **Organizations**.
1. On the **Your organizations** page, select the organization you would like to manage from the list.
1. Go to **Product Experience Manager** > **Price Books**.
1. Click **Add Price Book**.
1. Click **Save**.
1. Click the price book you just created to edit it.
1. Click **Add SKUs** to select the products to add to the price book. A list of available products to add is displayed.
1. Click **+** next to the products you want to add.
1. Enter the price for the product in the appropriate currency.
1. Click **Save**.

Your organization price books are automatically available to all the stores within your organization. 

![organization PXM pricebook](/assets/organization_pricebook.png)

Your stores can publish catalogs with organization price books or a combination of organization and store price books.







