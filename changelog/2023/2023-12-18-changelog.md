December 18, 2023
-----------------

**MAJOR** We have introduced a new field called **auto\_add\_free\_gift** into the **[Free Gift Promotion](https://elasticpath.dev/docs/commerce-cloud/promotions/promotion-management/create-free-gift-promotion)** type where free gifts are automatically added to the shopping cart for all the eligible products. For more information, see **[Promotions Overview](https://elasticpath.dev/docs/commerce-cloud/promotions/promotions-overview)** section. This feature is still a work in progress.

Additionally, in Commerce Manager, we have also introduced the **Automatically add free gift items to the cart** toggle to add free gifts automatically to the shopping cart. For more information, see **[Creating Free Gift Promotions](https://elasticpath.dev/docs/commerce-cloud/promotions/promotions-cm/item-level-promotions/free-gift-promotions)**.

December 14, 2023
-----------------

**MAJOR** In Product Experience Manager, we have introduced a new product attribute called **Product Types**. This enables products to be categorized by type, for example, **standard**, **parent**, **child** and **bundle**. This is useful because it allows you to filter on the product types relevant to your business. Product types also allow you to segregate your catalogs, for example, by bundles or child products. To see the product types in your current catalogs, you must initiate a full catalog publish. To do this, modify your hierarchies or price books, for example, add a new hierarchy or price book to your catalog, then publish the catalog. (You can remove these once the full catalog publish has performed.) For more information, see **[Product Types](https://elasticpath.dev/docs/pxm/products/pxm-products#product-types)**.

December 13, 2023
-----------------

**MINOR** When duplicating a hierarchy using the **Duplicate a Hierarchy** endpoint, the response now returns the ID of the original hierarchy and the duplicated hierarchy ID. See **[Duplicate a Hierarchy](https://elasticpath.dev/docs/pxm/hierarchies/hierarchies-api/duplicate-a-hierarchy)**.

December 4, 2023
----------------

**MINOR** We have introduced a new optional field to the Orders API, known as **external\_ref**. This field is designed to store external references from other company systems, enhancing seamless integration between our platform and external entities. For more information, see **[Update an Order](https://elasticpath.dev/docs/commerce-cloud/orders/orders-api/update-an-order)**.

Additionally, in Commerce Manager, we have also introduced a new field called **External Reference ID,** both on the order page and when filtering an order**.** For more information, see **[Orders](https://elasticpath.dev/docs/commerce-cloud/orders/orders-cm)**.

November 28, 2023
-----------------

**MAJOR** Algolia – Full/Delta/Large Catalog Integration: Added three new flows to the integration and configured a webhook in Elastic Path Commerce Cloud to synchronize inventory when the corresponding option is enabled. This connects the **s****tock\_transaction.created** event to the **Single Entry Inventory UpdateObject to Algolia Direct** flow**.** Depending on the configuration, the flow retrieves either **available** or **total** inventory and sends the data to all Algolia indexes. There is an option to skip object creation if they do not already exist in that particular index. In version 58, a third flow is introduced to cache Algolia Mapping, refreshing on an **hourly** by default. This eliminates the need to fetch the mapping with every stock update.

**MINOR** When creating, updating, or retrieving an address, you can now see customer or account relationship details linked to that address. This is helpful for getting webhook payloads. For more information, see **[Addresses API](https://elasticpath.dev/docs/commerce-cloud/addresses/about-addresses-api)**[.](https://elasticpath.dev/docs/commerce-cloud/addresses/about-addresses-api)

November 17, 2023
-----------------

**MAJOR** You now have the ability to integrate Shopify with Elastic Path Commerce Cloud through the **Integrations Hub** in Commerce Manager. The Shopify integration ensures a seamless synchronization of catalog information such as products, prices, images, variations, templates, attributes and categories from Shopify to Elastic Path. For more information, see **[Shopify Integration](https://elasticpath.dev/docs/composer/integration-hub/product-information/shopify)**.

November 15, 2023
-----------------

**MINOR** A new Product Experience Manager **cancel a job** endpoint enables you to cancel a job whose status is **PENDING** if one job needs to be prioritized over another. For more information, see **[Cancel a Job](https://elasticpath.dev/docs/pxm/jobs-api/cancel-a-job)**.

November 9, 2023
----------------

**MINOR** The Shipping Groups or Split Shipping feature is no longer in Beta. For more more information, see **[Shipping Groups](https://elasticpath.dev/docs/commerce-cloud/shipping-groups/overview)**.

**MINOR** Algolia – Full/Delta/Large Catalog Integration: The integration now supports option indexing of inventory status and stock amounts through use of the **stockAmount** and **stockBoolean** flags.

November 6, 2023
----------------

**MINOR** Commerce Manager: If a job fails, you can now select **Open error list** when viewing a failed job in **Activity**. This enables you to view the error messages that led to a job's failure. For more information, see **[Jobs in Commerce Manager](https://elasticpath.dev/docs/pxm/jobs-api/jobs)**.

November 7, 2023
----------------

**MINOR** We have introduced a new optional field called **external\_ref** to the **[Accounts API](https://elasticpath.dev/docs/commerce-cloud/accounts/using-account-management-api/account-management-api-overview)**. This field is designed to store external references from other company systems, enhancing seamless integration between our platform and external entities.

**MINOR** When the **auto\_create\_account\_for\_account\_members** field is enabled, the corresponding account has the account name and legal name of the created account member. This enhancement streamlines efficient filtering, making it easier to identify auto-created accounts. For more information, see **[Update Account Authentication Settings](https://elasticpath.dev/docs/commerce-cloud/authentication/single-sign-on/account-authentication-settings/update-account-authentication-settings)**.

November 2, 2023
----------------

**MAJOR** Some Product Experience Manager endpoints operate as jobs (for example, Product Import API). Now, jobs are processed one at a time. You can continue to send requests using endpoints that function as jobs, but those jobs are queued. In other words, Commerce looks for any jobs that have a status of **PENDING** and starts the job with the earliest created date. This process is repeated until all jobs are processed. For more information, see **[Jobs](https://elasticpath.dev/docs/pxm/jobs-api/overview)**.

**MINOR** We have introduced a new optional field called **automatic\_payment\_methods** to **[Elastic Path Payments Powered by Stripe](https://elasticpath.dev/docs/commerce-cloud/payments/paying-for-an-order/elastic-path-payments-stripe#authorization-or-purchase-post-pay-using-stripe-payment-element)** gateway as per Stripe's recommendation. When this field is enabled, it displays all the payment methods that are enabled from the Stripe dashboard.

October 27, 2023
----------------

**MAJOR** Commerce Manager: You can now select **Activity** anywhere in Commerce Manager to see the status of your **[jobs](https://elasticpath.dev/docs/pxm/jobs-api/jobs)** and **[catalog publications](https://elasticpath.dev/docs/pxm/catalogs/catalogs-cm/publishing-catalogs#viewing-catalog-publications-status)**. This enables you to easily check their status and swiftly identify any potential issues.

October 26, 2023
----------------

**MAJOR** When managing Application Keys, you now have the ability to specify the minimum number of requests per second that are allowed, reserving a rate limit for each key. This enables you to finely adjust the performance and availability of your applications that are integrated with our platform. For more information, see **[Application Keys Overview](https://elasticpath.dev/docs/commerce-cloud/authentication/application-keys/application-keys-overview)**.

Additionally, in Commerce Manager, we have added a new **Requests per second** field. This field allows you to enter the reserved rate limit for the key when **[Creating an Application Key](https://elasticpath.dev/docs/commerce-cloud/authentication/application-keys/application-keys-cm)**.

**MINOR** Commerce Manager: You can now generate a delta file with all the contents of a catalog release from Commerce Manager. For more information, see **[Using Catalog Delta Files.](https://elasticpath.dev/docs/pxm/catalogs/catalogs-cm/publishing-catalogs#using-catalog-delta-files)**

October 24, 2023
----------------

**MINOR** New **started\_at** and **completed\_at** attributes for the Jobs API enable you understand the duration of a job in Product Experience Manager. For more information, see **[Jobs API Overview](https://elasticpath.dev/docs/pxm/jobs-api/jobs-api-overview)**.

October 19, 2023
----------------

**MINOR** Fixed a bug in manual promotions where the promotion code was not being applied as expected if the promotion end date was recently extended.

October 18, 2023
----------------

**MAJOR** Commerce Manager: When building your child products, you can now choose to exclude or include variation options. This is useful if you have a variation option that you do not sell. This makes managing and building your child products quick and easy. For more information, see **[Building Child Products](https://elasticpath.dev/docs/pxm/products/pxm-products-commerce-manager/assign-variations-build-child-products#including-excluding-variation-options)**.

October 17, 2023
----------------

**MINOR** The Klaviyo builder component in Composer now has a new **Create Event** action. You can use this action to post a full event to Klaviyo using the **event.body** field. This allows you to send generic events. For example, you can send a password reset event to Klaviyo.

October 16, 2023
----------------

**MINOR** We have introduced a new optional field called **external\_ref** to the **[Customers API](https://elasticpath.dev/docs/commerce-cloud/customer-management/customer-managment-api/customer-management-api-overview)**. This field is designed to store external references from other company systems, enhancing seamless integration between our platform and external entities.

October 11, 2023
----------------

**MINOR** When extending the end date of an expired promotion with over 1000 codes, you will now receive an error response. In such cases, we recommend duplicating the promotion, allowing you to set the new end dates and create promotion codes as needed. For more information, see **[Update a Promotion](https://elasticpath.dev/docs/commerce-cloud/promotions/promotion-management/update-promotions#errors)****[.](https://elasticpath.dev/docs/commerce-cloud/promotions/promotion-management/update-promotions#put-update-a-promotion)**

**MINOR** Fixed a bug in the Fixed Bundle Discount promotion where, when a product's price was $0, the discount was still applied, resulting in a large unexpected value instead of $0.

September 26, 2023
------------------

**MINOR** For Price Book Import, the JSONL file used to create/update your price books and product prices can now be compressed to a GZIP file. For more information, see **[Price Book Import API](https://elasticpath.dev/docs/pxm/pricebooks/price-import/import-prices)**.

September 21, 2023
------------------

MAJOR A new Monitor dashboard is available in Composer. Monitor provides an aggregated view of all your integration activities with visibility into each execution and the ability to drill into the details of any execution. Filter the logs or executions to look for failures across all integrations or filter down to a specific integration or event a specific process flow within a specific integration. For more information, see Monitor.

September 20, 2023
------------------

**MAJOR** A new Price Book Import feature allows you to create and update price books and product prices in bulk, at both organization and store level. Rather than having to go to each price book and manually edit 50,000 prices, you can use Price Book Import to bulk update all your product prices at the same time, including setting different prices for different currencies. For more information, see **[Price Book Import](https://elasticpath.dev/docs/pxm/pricebooks/price-import/overview)**.

September 18, 2023
------------------

**MAJOR** Added new endpoints to create an asynchronous job to generate and export promotion codes. For more information, see **[Create Promotion Codes Generation Job](https://elasticpath.dev/docs/commerce-cloud/promotions/promotion-codes/jobs-api/create-a-job)** and **[Create](https://elasticpath.dev/docs/commerce-cloud/promotions/promotion-codes/jobs-api/export-codes)** **[Promotion Codes Export](https://elasticpath.dev/docs/commerce-cloud/promotions/promotion-codes/jobs-api/export-codes)** **[Job](https://elasticpath.dev/docs/commerce-cloud/promotions/promotion-codes/jobs-api/export-codes)**[.](https://elasticpath.dev/docs/commerce-cloud/promotions/promotion-codes/jobs-api/export-codes) Additionally, we have also added endpoints to view all promotion Jobs and exported codes file in CSV format. See **[Get](https://elasticpath.dev/docs/commerce-cloud/promotions/promotion-codes/jobs-api/get-jobs)** **[Promotion Jobs](https://elasticpath.dev/docs/commerce-cloud/promotions/promotion-codes/jobs-api/get-jobs)** **[](https://elasticpath.dev/docs/commerce-cloud/promotions/promotion-codes/jobs-api/get-jobs)**and **[Get](https://elasticpath.dev/docs/commerce-cloud/promotions/promotion-codes/jobs-api/get-exported-codes)** **[Promotion Codes Exported File](https://elasticpath.dev/docs/commerce-cloud/promotions/promotion-codes/jobs-api/get-exported-codes)**.

In Commerce Manager:

*   We have removed the **generate code** button under the **Add a single code** tab.
*   We updated the **Bulk generate codes** tab to create a large number of unique codes and export them in CSV format. You can use the **Bulk generate codes** tab to generate either a single code or multiple codes. For more information, see **[Adding a Single Code](https://elasticpath.dev/docs/commerce-cloud/promotions/promotions-cm/overview#adding-a-single-code)**, **[Generating Bulk Codes](https://elasticpath.dev/docs/commerce-cloud/promotions/promotions-cm/overview#generating-bulk-codes)**, and **[Managing Export Codes](https://elasticpath.dev/docs/commerce-cloud/promotions/promotions-cm/overview#managing-code-export)**.

September 14, 2023
------------------

**MAJOR** You can now use the preview cart feature to set a future date for your shopping cart and view the promotions that will be available during that period. This feature enables you to validate your promotion settings and observe how they will be applied in the cart. For more information, see **[Create a Preview Cart](https://elasticpath.dev/docs/commerce-cloud/carts/cart-management/create-multi-cart#post-create-a-preview-cart)**.

September 12, 2023
------------------

**MINOR** In Commerce Store Configuration Orchestrator:

*   You no longer need to include empty arrays in the input JSON when importing store configurations for objects that are not needed.
*   To use this new feature, you must upgrade to the latest version of the integration within Composer.

For more information, see **[Commerce Store Configuration Orchestrator](https://elasticpath.dev/docs/composer/integration-hub/store-management/store-configuration)**.

September 11, 2023
------------------

**MAJOR** You can now create **[One-Time Password Token Requests](https://elasticpath.dev/docs/commerce-cloud/authentication/single-sign-on/password-profiles-api/create-one-time-password-token-request)** using **[Password Profiles.](https://elasticpath.dev/docs/commerce-cloud/authentication/single-sign-on/password-profiles-api/overview)** This feature enables you to create a One-Time token which can be forwarded to the end-user and used to authenticate them to update their password and continue browsing. For more information, see **[How to Reset Passwords Using Password Profiles](https://elasticpath.dev/docs/commerce-cloud/authentication/single-sign-on/password-profiles-api/how-to-reset-password)**.

August 29, 2023
---------------

**MINOR** Algolia – Full/Delta/Large Catalog Integration: Updates to single products now check for catalog sync operations and delay the update until the other operations are completed. Additionally, fixed a bug for child products identification. For more information, **[see Integrating with Algolia](https://elasticpath.dev/docs/composer/integration-hub/site-search/algolia)**.

August 24, 2023
---------------

**MINOR** The new **auto\_add\_free\_gift** field is introduced while **[Creating a Free Gift Promotion](https://elasticpath.dev/docs/commerce-cloud/promotions/promotion-management/create-free-gift-promotion)**, enabling shoppers to automatically add the free gift to their shopping cart. You can also update the existing promotion with the **auto\_add\_free\_gift** field. This feature is currently a work in progress.

August 22, 2023
---------------

**MINOR** In Commerce Manager:

*   Removed store type label previously displayed next to store names, and replaced with **STORE** label instead to help distinguish from when a user is managing an Organization.
*   Added rate limit details for stores under **SYSTEM > Store Settings > General Settings**, which have been reorganized to group together related settings.

For more information, see **[General Settings in Commerce Manager](https://elasticpath.dev/docs/commerce-cloud/global-project-settings/general-settings)**.

August 16, 2023
---------------

**MINOR** Bug fix: Performance improvements to renaming SKUs of products and price updates.

**MINOR** Bug fix: Fixed self link of catalog-related resources.

August 14, 2023
---------------

**MINOR** Fixed a bug in PayPal Express Checkout payment gateway where payments in certain currencies were incorrectly formatted.

August 10, 2023
---------------

**MAJOR** You can now integrate Elastic Path Commerce Cloud with Segment using the **Integrations Hub** in Commerce Manager. This enables you to collect, transform, send, and archive your Elastic Path Commerce Cloud data and send the data to your marketing, product, and analytics tools. For more information, see **[Integrating with S](https://elasticpath.dev/docs/composer/integration-hub/customer-management/segment)****[egment](https://elasticpath.dev/docs/composer/integration-hub/customer-management/segment)**[.](https://elasticpath.dev/docs/integration-hub/site-search/constructor-io)

August 9, 2023
--------------

**MINOR** Commerce Manager: A new **list** filter in **Products Experience Manager** > **Products** enables you filter to your product list for a list of attributes that you provide. For example, you can provide a list of product IDs so that only the products whose IDs you have listed are displayed in your product list. For more information, see **[Filtering Products](https://elasticpath.dev/docs/pxm/products/pxm-products-commerce-manager/filter-products)**.

August 8, 2023
--------------

**MINOR** Fixed a bug where orders placed or modified between July 5th and July 23rd, 2023, displayed incorrect formatted values.

August 1, 2023
--------------

**MINOR** Bug fix: Fixed a bug related to unreliable processing of product prices after frequent price and product updates.

July 31, 2023
-------------

**MAJOR** You can now integrate Elastic Path Commerce Cloud with Talon One using the **Integrations Hub** in Commerce Manager. This enables you to use Elastic Path Commerce Cloud catalog data in your Talon One promotions. For more information, see **[Integrating with T](https://elasticpath.dev/docs/composer/integration-hub/promotions/talonone)****[alon One](https://elasticpath.dev/docs/composer/integration-hub/promotions/talonone)**[.](https://elasticpath.dev/docs/integration-hub/site-search/constructor-io)

July 26, 2023
-------------

**MINOR** Bug fix: Fixed a bug related to organization level price book deletion.

July 24, 2023
-------------

**MAJOR** We have introduced the beta release for Shipping Groups. Now, you can easily organize and manage cart or order items into distinct shipping groups. This feature allows you to split shipping, enabling you to tailor shipping concepts to your eCommerce offerings based on your specific business requirements. For more information, see **[Shipping Groups](https://elasticpath.dev/docs/commerce-cloud/shipping-groups/Overview)**.

Additionally, we have updated the **Order** details page in Commerce Manager. You can now see the following information within a shipping group:

*   **Shipping Group ID**
*   **Shipping Details**
*   **Tracking**
*   **Delivery** **Instructions**

For more information, see **[Orders](https://elasticpath.dev/docs/commerce-cloud/orders/orders-cm)**.

July 20, 2023
-------------

**MAJOR** Monitor, a new Elastic Path Commerce Cloud integration logging platform is now available. Monitor allows you to access logs critical for building, deploying and supporting your integrations. For more information, see **[M](https://elasticpath.dev/docs/composer/monitor/logging)****[onitor](https://elasticpath.dev/docs/composer/monitor/logging)**.

**MINOR** Algolia - Full/Delta/Large Catalog Integration: Add existing Algolia object to be updated without need to republish a catalog. Accepts delta fields and adds/updates existing object with added/changed content. For more information, see **[Integrating with Algolia](https://elasticpath.dev/docs/composer/integration-hub/site-search/algolia)**.

July 19, 2023
-------------

**MINOR** Commerce Manager: When creating parent/child nodes, you can now:

*   Add a **Weight** to determine the order that your nodes are displayed in your storefront.
*   Localize your node name and description.

For more information, see **[Products Hierarchy in Commerce Manager](https://elasticpath.dev/docs/pxm/hierarchies/hierarchy)**.

**MINOR** Bug fix: Fixed a bug where sale prices were not being reset for organization products.

July 18, 2023
-------------

**MINOR** Commerce Manager: You can now manage pending user invites in your stores and organization. For more information, see **[Managing Pending Invites](https://elasticpath.dev/docs/commerce-cloud/team-management/team-management#managing-pending-invites)**.

July 17, 2023
-------------

**MINOR** You can now use **include** query parameter to show condensed promotions on both carts and orders. For more information, see:

*   **[Get a cart](https://elasticpath.dev/docs/commerce-cloud/carts/cart-management/get-a-cart#get-include-promotions)**
*   **[Get cart items](https://elasticpath.dev/docs/commerce-cloud/carts/cart-items/get-cart-items#get-include-promotions)**
*   **[Get an order](https://elasticpath.dev/docs/commerce-cloud/orders/orders-api/get-an-order#get-include-promotions)**
*   **[Get order items](https://elasticpath.dev/docs/commerce-cloud/orders/orders-api/get-order-items#get-include-promotions)**

July 10, 2023
-------------

**MAJOR** You can now manage the stores within your organization under the **ORG MANAGEMENT** section in Commerce Manager. Additionally, we have added context-based insights and links to enhance the multi-store management experience. For more information, see **[Creating a store within an organization](https://elasticpath.dev/docs/commerce-cloud/organizations/organizations-in-commerce-manager/home-page#creating-a-new-store-in-organizations)**.

July 6, 2023
------------

**MINOR** Commerce Manager: When editing product prices, you can now edit a product SKU at the same time. For more information, see **[Price Books in Commerce Manager.](https://elasticpath.dev/docs/pxm/pricebooks/pxm-pricebooks)**

June 22, 2023
-------------

**MINOR** Bug fix: Fixed a bug that allowed Store Admins to change organization resources.

June 21, 2023
-------------

**MAJOR** Builder, a new Elastic Path Commerce Cloud integration platform is now available. Builder enables you to quickly and easily build integrations to the other apps that you use. You can do this using the Elastic Path Commerce Cloud pre-built components. For more information, see **[Builder](https://elasticpath.dev/docs/composer/builder/overview)**.

**MINOR** Bug fix: Fixed a bug to stop prematurely removing detached products from nodes when bundles and base products are included in a release.

**MINOR** Bug fix: Fixed a bug to avoid prematurely removing child products as components when their base products are included in a release.

**MINOR** Improve performance when looking up nodes by **slug** filter.

June 19, 2023
-------------

**MINOR** Commerce Manager: When duplicating hierarchies, a new **Retain a products relationship** toggle allows you to keep the products associated with the nodes in the existing hierarchy, associated with the nodes in the duplicated hierarchy. For more information, see **[Duplicating Hierarchies](https://elasticpath.dev/docs/pxm/hierarchies/hierarchy#duplicating-hierarchies)**.

June 14, 2023
-------------

**MINOR** **Breadcrumb** metadata now includes the metadata for a parent product, in addition to the information specific to a child product. This is useful because it enables you to quickly and easily see which nodes a child product belongs to. For more information, see **[Understanding Breadcrumb Metadata for Child Products](https://elasticpath.dev/docs/pxm/catalogs/breadcrumbs#understanding-breadcrumb-metadata-for-child-products)**.

June 8, 2023
------------

**MINOR** Commerce Manager: A new **Has Node Assignment** product filter allows you to check which products are assigned to nodes. For more information, see **[Filtering Products](https://elasticpath.dev/docs/ep-pxm-products/pxm-products-commerce-manager/filter-products)**.

June 6, 2023
------------

**MAJOR** Commerce Manager: You can now curate your products in your nodes products lists. Product curation allows you to promote specific products within each node in a hierarchy, enabling you to create unique product collections in your storefront. For more information, see **[Curating Products](https://elasticpath.dev/docs/pxm/products/pxm-products-commerce-manager/curating-products)**.

**MINOR** Bug fix: Fixed a bug to stop building base products when the product is already part of a bundle.

June 5, 2023
------------

**MAJOR** You can now migrate all version 2 capabilities, for example, **Products, Extended Data, Brands,** and **Collections** to Product Experience Manager. For more information, see **[Elastic Path Commerce Cloud Legacy to PXM Catalogs Migration](https://elasticpath.dev/docs/integration-hub/store-management/catalogs-migration)**.

**MAJOR** Stores can use organization templates and fields. However, the store-level entries associated with an Organization template appears only at the store level. For more information, see **[PXM Product Templates Overview](https://elasticpath.dev/docs/pxm/products/extending-pxm-products/pxm-product-templates-api/pxm-product-templates-overview)** and **[Add Flow Entries to Add data for your Products](https://elasticpath.dev/docs/pxm/products/extending-pxm-products/add-custom-data-to-pcm-products#add-flow-entries-to-add-data-for-your-products)**.

May 31, 2023
------------

**MAJOR** You can now extend your PXM products in your organization using product templates. For more information, see **[Extending PXM products](https://elasticpath.dev/docs/ep-pxm-products/extending-pxm-products/extend-products-overview)**.

May 29, 2023
------------

**MINOR** Added a new endpoint to update the name of an application key. For more information, see **[Update an Application Key](https://elasticpath.dev/docs/commerce-cloud/authentication/application-keys/update-an-application-key)**.

May 26, 2023
------------

**MINOR** Improved performance when filtering customers by email domain. For more information, see **[Filtering](https://elasticpath.dev/docs/api-overview/filtering)**.

May 25, 2023
------------

**MINOR** When an organization creates a new currency or if there is a mismatch between the store currencies and organization currencies, you can now pass an empty request body on a store-level currency using the **[Update a Currency](https://elasticpath.dev/docs/pxm-pricebooks/currencies/currencies-api/update-a-currency#put-update-a-currency-by-id)** endpoint to invalidate the cache. This ensures that the store currencies are updated with the new organization currency.

May 24, 2023
------------

**MAJOR** As announced on May 10, 2023, only Org Admins will now have the permission to create stores in their Organizations. This change provides a more centralized and secure approach to store management. To create a new store, log into Commerce Manager, and go to **Organizations** to access all your stores from a single location. See **[Creating a New Store in Organizations](https://elasticpath.dev/docs/organizations/organizations-in-commerce-manager/home-page#creating-a-new-store-in-organizations)**. For more information, refer to our **[blog post](https://www.elasticpath.com/blog/introducing-organizations)** or watch a **[quick video](https://www.youtube.com/watch?v=u_8_XMVOlGQ)**. To access your organization, contact our support team by submitting a **[support ticket](https://signin.elasticpath.com/app/global_redirect/0oartsctk19qeAbkp357/login)**.

May 23, 2023
------------

**MINOR** You can now create invoices for Stripe customers from the **STORE** > **Invoicing** tab in Commerce Manager. For more information, see **[Create Invoices](https://elasticpath.dev/docs/payments/invoicing/create-invoices)**.

**MINOR** Commerce Manager: We now allow to add up to six decimal places for the discount percentage to be applied for **[Cart percent discount](https://elasticpath.dev/docs/promotions/promotions-cm/cart-level-promotions/cart-level-percentage-discount)** promotion and **[Item percent discount](https://elasticpath.dev/docs/promotions/promotions-cm/item-level-promotions/item-percentage-discount-promotions)** [](https://elasticpath.dev/docs/promotions/promotions-cm/item-level-promotions/item-percentage-discount-promotions)promotion.

May 19, 2023
------------

**MINOR** Bug fix: Fixed a bug causing some products updates to be delayed.

May 18, 2023
------------

**MINOR** Bug fix: Fixed a bug in the publishing pods.

**MINOR** Bug fix: Fixed **bread\_crumbs** for products attached to nodes with new parent nodes.

**MINOR** Bug fix: Fixed an issue where some price book entries were not deleted correctly.

May 16, 2023
------------

**MINOR** We have now set the validation for the percentage to be included to allow up to six decimal places for **[Cart percent discount](https://elasticpath.dev/docs/promotions/promotion-management/create-a-cart-percent-discount-promotion)** and **[Item percent discount](https://elasticpath.dev/docs/promotions/promotion-management/create-item-percent-discount-promotion)**. For more information, see **[Promotions](https://elasticpath.dev/docs/promotions/promotions-overview)**.
