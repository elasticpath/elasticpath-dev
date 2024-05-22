---
title: Catalog by Shopper Context
nav_label: Catalog by Shopper Context
sidebar_position: 10
---

Use the Catalog View API to create, manage, and publish catalogs for an organization or a store. When you publish a catalog for a store, you can define catalog rules so that you can show catalogs with different pricing or different products to preferred customers or channels. These endpoints can be used in your customer-facing frontends.

A catalog is a combination of one or more hierarchies and a price book. Use the Products API and Hierarchies API to create a hierarchy of products that can be included in a catalog. Use the Price Book API to associate prices with products.

## Characteristics of Catalogs

* Use catalog rules to schedule a catalog to appear during a particular date and time, such as a seasonal catalog. The catalog may have different pricing than the other catalogs. You can have multiple published catalogs.

* If you have defined catalog rules and you want to retrieve a published catalog for a particular channel or a user-defined tag, you must set the appropriate headers in the request:

  - `EP-Channel` - The channel, such as website or mobile app. Corresponds to the `channel` attribute in a [Rule object](/docs/pxm/catalogs/catalog-configuration/catalog-configuration-overview#the-rule-object).
  - `EP-Context-Tag` - A tag defined in the store, such as `clearance`. Corresponds to the `tag` attribute in a [Rule object](/docs/pxm/catalogs/catalog-configuration/catalog-configuration-overview#the-rule-object).

* When a catalog is ready to be used in a store, you publish it. For more information, see [Publish a Catalog](/docs/pxm/catalogs/catalog-release-admin/publish-a-catalog).
* You can create and publish catalogs for different contexts and channels. You can see the differences between the last 2 consecutive catalog releases. For more information, see [Publish a Catalog](/docs/pxm/catalogs/catalog-release-admin/publish-a-catalog).
* You retrieve catalogs for your shopper experience by using the Catalog View API. For more information on how you can retrieve a catalog as a shopper using the Catalog View API, see [Catalog by Shopper Context](/docs/pxm/catalogs/shopper-catalog/catalog-shopper-overview).
* When a catalog is published for a store, the corresponding events contain `store_id` and `org_id`. For more information, see [Observable Events](http://localhost:3000/docs/api/integrations/integrations-introduction#observable-events).
* When a catalog is published for an organization, the corresponding events contain `org_id`. For more information, see [Observable Events](http://localhost:3000/docs/api/integrations/integrations-introduction#observable-events).
* Use the `sort_order` value in the `variations` to program your storefront to display the variation options in the order that you want.


## Catalog Caching 

When conducting a `GET` on `catalog` endpoints, all data returned, including catalog releases, products, nodes and hierarchies, are cached for 5 minutes. This means, if you call the same endpoint again, the catalog data is retrieved from the cached objects pool, optimizing the performance and efficiency of your store front.

If you use any of the `catalog` endpoints with a `filter` or `include` query parameter, these are cached separately. 

The cached entries disappear from the cached objects pool after 5 minutes.

## The Catalog object

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | The unique identifier for the catalog. |
| `type` | `string` | The type of object being returned. Always: `catalog` |
| `attributes.name` | `string` | The name of the catalog. |
| `attributes.description` | `string` | A description of the catalog, such as the purpose for the catalog. |
| `attributes.hierarchy_ids` | `[string]` | The unique identifiers of the hierarchies to associate with this catalog.  |
| `attributes.pricebook_id` | `string` | The unique identifier of the price book to associate with this catalog. If no price book is selected, the catalog is displayed without prices. |
| `attributes.created_at` | `string($date-time)` | The date and time the catalog was created. |
| `attributes.updated_at` | `string($date-time)` | The date and time the catalog was updated. |
| `attributes.published_at` | `string($date-time)` | If published, the date and time the catalog was published. |
| `links` | [`object`](#the-links-object) | A URL to the catalog. |

## The `Release` Object

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | A unique identifier for the node. |
| `type` | `string` | The type of object being returned. Always: `catalog-release`. |
| `attributes.hierarchy_ids` | `[array]` | An array of references to the hierarchies in the release. |
| `catalog_id` | `string` | A unique identifier for the catalog. |
| `attributes.description` | `string` | A description of the node, such as the name of a category. |
| `attributes.name` | `string` | The name of the release. |
| `attributes.curated_products` | `[array]` | An array of product IDs whose products are curated. See [Curated Products](/docs/pxm/products/pxm-products#curated-products). |
| `attributes.published_at` | `string($date-time)` | The date and time the release was published. |
| `meta` | (#the-meta-object) | The `meta` data includes: `is_full_delta` (see [publish a catalog](/docs/pxm/catalogs/catalog-release-admin/publish-a-catalog)), `created_at`, `release_status` and `started_at` attributes. |
| `relationships` | `object` | The `relationships` data for the catalog.  |

## The `components` Object

:::note

- Custom names and values prefixed with `$` are not supported.
- You cannot have more than 1500 options in a bundle. 

:::

| Name | Type | Description |
| :--- | :---| :--- |
| `component: <key>` | `string` | The name of the component, such as `games`. The `bundle_configuration` uses the component key to reference a component. A component key should be relatively short and must not contain any special characters. See [create a bundle](/docs/pxm/products/pxm-bundles/pxm-bundles-api/create-a-bundle). |
| `component: <key>: min` | `integer` | The minimum number of product options a shopper can select from this component. |
| `component: <key>: max` | `integer` | The maximum number of product options a shopper can select from this component. |
| `component: <key>: sort_order` | `integer` | The sort order of the components. The `create a bundle` and `update a bundle` endpoints do not sort the components. You can use the `sort_order` attribute when programming your storefront to display the components in the order that you want. |
|`component: <key>: name` | `string` | The component name. The component name is the name that is displayed in your storefront. See [create a bundle](/docs/pxm/products/pxm-bundles/pxm-bundles-api/create-a-bundle). |
| `component: <key>: options` | `array` | The product options included in a component. This can be the ID of another bundle. See [Bundles of Bundles](/docs/pxm/products/pxm-bundles/bundles-of-bundles). |

## The `meta` Object

{% table %}
* Attribute
* Type
* Description
---
* `catalog_id`
* `string`
* A unique identifier for the catalog.
---
* `catalog_source`
* `string`
* The source of the catalog, for example, `pim` if the products are from Product Experience Manager.
---
* `bread_crumb_nodes`
* `array`
* The relationship among the array of nodes associated with the product. See [Product and Node Associations in Breadcrumb Metadata](https://elasticpath.dev/docs/pxm/catalogs/breadcrumbs#understanding-breadcrumb-metadata).
---
* `bread_crumbs`
* `array`
* The tree of parent nodes associated with a product. The `bread_crumbs` metadata lists up to 10 levels of parent nodes that the product is associated with, depending on the number of levels of parent nodes you have. See [Product and Node Associations in Breadcrumb Metadata](https://elasticpath.dev/docs/pxm/catalogs/breadcrumbs#understanding-breadcrumb-metadata).
---
* `variations_matrix`
* `array`
* The `variation_matrix` object lists the variation IDs and variation option IDs and their corresponding product IDs that are generated when the variation and variation options are built with a product. If no variations are available, the variation_matrix is empty. See [Create Child Products Using Variations and Modifiers](https://elasticpath.dev/docs/pxm/products/pxm-product-variations/generate-pxm-variations). In addition, if you specified a `sort_order` attribute, you can use the `sort_order` value in the `variations_matrix` to program your storefront to display the variation options in the order that you want.
---
* `variations`
* `array`
* If you specified `build_rules` for a product, the `variations` object lists the variation option IDs that you specified to include when building your child products. If no build_rules are specified, all the variation and variation options available for a product are displayed. If a product does not have any variations, then the variations attribute is not displayed. See [Build Child Products Using Variations](https://elasticpath.dev/docs/pxm/products/pxm-product-variations/build-pxm-variations).
---
* `is_full_delta`
* `boolean`
* Indicates if this is a full publish of the catalog. Using a search service as an example, if the `is_full_delta` attribute is `true`, you should remove all data about that catalog from the search service before injecting fresh data from the `delta` file. If the `is_full_delta` attribute is `false`, then data from the previous catalog overlays the existing data in the `delta` file. The `is_full_delta` attribute is always `true` the first time a catalog is published. See [Understanding Differences Between Catalog Releases](/docs/pxm/catalogs/catalog-release-admin/publish-a-catalog#post-publish-a-catalog).
---
* `is_full_publish`
* `boolean`
* Indicates that a full publish was performed (either because this is the first time a catalog has been published or because of a change that occurred, for example, adding a new price book). **Note**: When determining whether delta data needs to be refreshed, ignore this attribute and always use the `is_full_delta` attribute.
---
* `owner`
* `string`
* The catalog owner, either `organization` or `store`. See [Organizations](/docs/organizations).
---
* `percent_completed`
* `integer`
* An integer that represents the progress of a catalog pubish. The attribute starts at `0` and reaches `100` when publishing is complete.
---
* `total_nodes`
* `integer`
* The total number of nodes displayed in a catalog release.
---
* `total_products`
* `integer`
* The total number of products displayed in a catalog release.
---
* `created_at`
* `string($date-time)`
* The date and time the catalog release was created.
---
* `release_status`
* `string`
* The status of the current release. Either `PENDING` or `PUBLISHED`.
---
* `updated_at`
* `string($date-time)`
* The date and time the catalog release is updated while a catalog is being published. The attribute is updated every five minutes until publishing is complete.
---
* `product_types`
* `string`
* One of the following product types:
  {% list type="checkmark" %}
    * `standard` - A standard product is a standalone product.
    * `parent` - A parent product is a product that has child products that have been built using the `Build Child Products` endpoint. See [Create child products using variations](/docs/pxm/products/pxm-product-variations/generate-pxm-variations).
    * `child` - A child product is a product that is a variation of a parent product.
    * `bundle` - A bundle is a purchasable product, comprising two or more standalone products (in other words, `components`) to be sold together. See [Bundle Components and Options](/docs/pxm/products/pxm-bundles#bundle-components-and-options).
  {% /list %}
{% /table %}

### The `Links` object

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `self` | `string` | Refers to the object that calls this object. |

## The Rule object

If you have multiple catalogs, add catalog rules. A catalog rule defines the circumstances under which you want to display a catalog to a customer. For example, the catalog rule could be preferred customers or mobile apps or both. If you create catalog rules, be sure to create a base catalog rule to use when no other catalog rule fits the shopper request. A base catalog rule is defined with a `type`, `name`, and `catalog_id` only.

:::note
If you have one catalog for all customers and channels, you can omit creating this object.
:::

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `type` | `string` | The type of object being returned. Always: `catalog_rule` |
| `attributes.name` | `string` | The name of the rule without spaces. |
| `attributes.description` | `string` | The purpose for this rule. |
| `attributes.catalog_id` | `string` | The unique identifier for the catalog to display in this rule. **V2** If you want to display a catalog that contains v2 Products, Brands, Categories, and Collections, specify `legacy`. |
| `attributes.customer_ids` | `[array]` | The list of customers who are eligible to see this catalog. If empty, the rule matches all customers. |
| `attributes.account_ids` | `[array]` | The list of accounts who are eligible to see this catalog. If empty, the rule matches all accounts. |
| `attributes.channels` | `[array]` | The list of channels in which this catalog can be displayed. A channel is the shopping experience, such as a mobile app or web storefront. If empty, the catalog rule matches all channels. The channel will eventually be included in the bearer token that is used for authorization, but currently, you must set the `EP-Channel` header in your requests. |
| `attributes.tags` | `[array]` |  A list of user-defined tags that can be used to further restrict the eligibility criteria for this rule. Requests populate the catalog rule tag using the `EP-Context-Tag` header. |

### Resolving catalog rules

When there is a request for a catalog, the store displays the catalog with the rule that matches the most attributes of the shopperʼs context.

The request triggers the following steps:

1. Compares the shopperʼs context against the defined catalog rules.
1. Determines the best match.
1. Retrieves the catalog associated with the matching catalog rule.

The follow examples show how the best match might be resolved:

- A shopper matches one of the `customer_ids` in one catalog rule only. The catalog for that catalog rule is displayed.
- A shopper matches one of the `customer_ids` in one catalog rule only, but doesnʼt match any of the `tags` specified in that catalog rule. Because there are no other catalog rules for this `customer_id`, the catalog for the catalog rule is displayed because it is the best match.
- A shopper is browsing a store using the storeʼs mobile app, which matches `channel=mobile` in two catalog rules. The catalog displayed depends on matches with the `tags` or `customer_ids` attributes. If there is no other matching attribute, the first catalog rule found by the store is used. The best practice is to create catalog rules that cover all cases so that you avoid this situation.
- An unknown shopper is browsing the only channel offered by the seller. The store displays the base catalog.
