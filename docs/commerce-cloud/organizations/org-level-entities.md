---
title: Organization and Store Entities
nav_label: Organization and Store Entities
nav_position : 12
---

Entities have different characteristics, depending on whether they are at organization or store level.

:::note
In multi-store management scenarios, it is important to ensure that products in both organizations and stores have unique SKUs. If a store product is created with a SKU that is already in use by an organization product, an error message is displayed. This helps maintain accurate inventory management and avoid potential conflicts between organization and store products.
:::

{% table %}
* Entity
* Organization-Level
* Store-Level
---
*
   Products
*
  {% list type="checkmark" %}
  * An Org Admin can create, update, or delete organization products at the organization level.

  {% /list %}
*
   {% list type="checkmark" %}
  * A Store Admin can create, update or delete store products in the store.
  * An Org Admin can create, update or delete store products at the store level as they have Seller Admin permissions in all stores.
  * A Store Admin cannot create, update or delete organization products. They have read-only access to the organization products at the store-level.
  * An Org Admin cannot create, update or delete organization products at the store level. They can only manage organization products at the organization level.
  
  {% /list %}
---
*
  Bundles
*
  {% list type="checkmark" %}
  * An Org Admin can create, update or delete organization bundles containing organization products at the organization level. 
  {% /list %}
*
  {% list type="checkmark" %}
  * A Store Admin can create, update or delete store bundles that consist of either organization or store level products or a mixture of both.
  * An Org Admin can create, update or delete store bundles at the store level as they have Seller Admin permissions in all stores.
  * A Store Admin cannot create, update or delete organization bundles at the store level.
  * An Org Admin cannot create, update or delete organization bundles at the store level. They can only manage organization bundles at the organization level.

  {% /list %}
---
*
   Product Assets/
   Files/
   Images
*
  {% list type="checkmark" %}
  * An Org Admin can create, update or delete organization product assets at the organization level.
  {% /list %}
*
   {% list type="checkmark" %}
  * A Store Admin can create, update or delete store product assets at the store level.
  * An Org Admin can create, update or delete store product assets at the store level as they have Seller Admin permissions in all stores.
  * A Store Admin cannot create, update or delete organization product assets. They have read-only access to the organization product assets at the store-level.
  * An Org Admin cannot create, update or delete organization product assets at the store level. They can only manage organization products at the organization level.
  {% /list %}
---
*
   Variations/
   Options/
   Modifiers
*
  {% list type="checkmark" %}
  * An Org Admin can create, update or delete organization product variations, options and modifiers at the at the organization level.
  {% /list %}
*
   {% list type="checkmark" %}
  * A Store Admin can create, update or delete store product variations, options and modifiers at the store level.
  * An Org Admin can create, update or delete store product variations, options and modifiers at the store level as they have Seller Admin permissions in all stores.
  * A Store Admin has read-only access to organization product variations, options and modifier in the store. In other words, a store can utilize organization variations to store products and build those child products. The child products then belong to the store.
  * A Store Admin cannot create, update or delete organization product variations, options and modifiers. They have read-only access to the organization product assets at the store level.
  * An Org Admin cannot create, update or delete organization product variations, options and modifiers at the store-level. They can only manage organization products at the organization level.
  {% /list %}
---
*
   Templates/
   attributes
*
  {% list type="checkmark" %}
  * An Org Admin can create, update or delete organization product templates and attributes at the organization-level.
  {% /list %}
*
   {% list type="checkmark" %}
  * A Store Admin can create, update or delete store product templates and attributes at the store level.
  * An Org Admin can create, update or delete store product templates and attributes at the store level as they have Seller Admin permissions in all stores.
  * A Store Admin cannot create, update or delete organization product templates and attributes. They have read-only access to the organization product templates and attributes at the store level.
  * An Org Admin cannot create, update or delete organization product templates and attributes at the store level. They can only manage organization product templates and attributes at the organization level.
  * A Store Admin and Org Admin cannot create entries for the same product ID. In other words, a Store Admin cannot create an entry for a product if an Org Admin has already created an entry for the product.
  * If a Store Admin creates or updates entries on an organization's flow fields that have relationships with an organization's products, the entries do not appear on the organization's products. 
  {% /list %}
---
*
   Child products
*
  {% list type="checkmark" %}
  * An Org Admin can create update or delete organization child products at the organization-level.
  {% /list %}
*
   {% list type="checkmark" %}
  * A Store Admin can create, update or delete store child products at the store level.
  * An Org Admin can create, update or delete store child products at the store level as they have Seller Admin permissions in all stores.
  * A Store Admin cannot create, update or delete organization child products. They have read-only access to the organization child products at the store level. 
  * An Org Admin cannot create, update or delete child products for organization products at the store level. They can only manage child products for organization products at the organization level.
  {% /list %}
---
*
   Hierarchies/
   Nodes/
   Node Relationships
*
  {% list type="checkmark" %}
  * An Org Admin can create, update, delete organization hierarchies/nodes/node relationships at the organization level.
  {% /list %}
*
   {% list type="checkmark" %}
  * A Store Admin can create, update or delete store hierarchies/nodes/node relationships in the store.
  * An Org Admin can create, update or delete store hierarchies/nodes/node relationships at the store level as they have Seller Admin permissions in all stores.
  * A Store Admin cannot create, update or delete organization hierarchies/nodes/node relationships. They have read-only access to the organization hierarchies at the store level.
  * A Store Admin can duplicate organization hierarchies at the store level. During this process, the product associates are maintained in the duplicated hierarchy. Once an organization hierarchy is duplicated, it belongs to the given store. A store Admin can then make changes to the duplicated hierarchy, as required.
  {% /list %}
---
*
   Price books
*
  {% list type="checkmark" %}
  * An Org Admin can create, update or delete organization price books at the organization level.   
  {% /list %}
*
   {% list type="checkmark" %}
  * A Store Admin can create, update or delete store price books in the store. A store price book can contain prices for both organization and store products.
  * An Org Admin can create, update or delete store price books at the store-level as they have Seller Admin permissions in all stores.
  * A Store Admin cannot create, update or delete organization price books. They have read-only access to the organization price books at the store level.
  * An Org Admin cannot create, update or delete organization price books at the store level. They can only manage organization price books at the organization level.
  {% /list %}
---
*
   Catalogs
*
  * An Org Admin can create, update and publish organization catalogs which contain only organization entities. Once an organization catalog is published, it is available to all the stores belonging to the organization.
*
  * A Store Admin can create, update or delete store catalogs in the store. Store catalogs can contain a combination of organization and store entities eg. products, hierarchies and price books.
  * Org Admin can create, update or delete store catalogs at the store level as they have Seller Admin permissions in all stores.
  * A Store Admin cannot create, update or delete organization catalogs. They have read-only access to the organization catalogs at the store level.
  * An Org Admin cannot create, update or delete organization catalogs at the store level. They can only manage organization catalogs at the organization level.
---
*
   Catalogs Rules
*
  * Catalog rules are not supported for catalogs at the organization level.  
*
  * A Store Admin can create catalog rules for store catalogs to determine which catalog (organization and/or store catalogs) to render depending on business requirements.
  * An Org Admin can create catalog rules for store catalogs at the store level.
---
*
   Currencies
*
  * An Org Admin can create, edit, and delete organization currencies.

*
  * A Store Admin can create, edit, and delete store currencies in the store.
  * An Org Admin can create, update or delete store currencies at the store level as they have Seller Admin permissions in all stores.
  * A store can inherit organization-level currencies. The inherited currencies belong to an organization.
  * A Store Admin can edit organization-level currencies. Once an inherited currency is edited in a store, that currency belongs to a store.
  * A store does not inherit an organization-level currency when both store and organization have the same currency code. As a result, only the store-level currency is displayed in a store.
---
*
  Flows/
  Fields/
  Entries/
  Entry Relationships
* 
  An Org Admin can create, edit, and delete organization flows, fields, entries and relationships.
*
  * A Store Admin can create, update or delete flows, fields, entries and relationships in a store. 
  * A Store Admin can create and update entries for an organization's flows fields that have relationships with store's products.
  * Org Admin can create, update or delete flows, fields, entries and relationships at the store level as they have Seller Admin permissions in all stores.
  * A Store Admin cannot create, update or delete organization flows, fields, entries and relationships. They have read-only access to the organization flows, fields, entries and relationships at the store level.
  * An Org Admin cannot create, update or delete organization flows, fields, entries and relationships at the store level. They can only manage organization flows, fields, entries and relationships at the organization level.
{% /table %}

