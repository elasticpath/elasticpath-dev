---
title: Overview
nav_label: Overview
nav_position : 2
---

Organizations is a powerful tool for businesses seeking to streamline their eCommerce operations, manage their multi-store use cases and/or unlocking additional revenue opportunities. This unique capability enables our multi-store management solution which is used by franchises, distributor networks, multi-geo and multi-brand companies and more. The term store in this context refers to a Commerce store, which supports data segregation and access management across multiple business units in an organization.

With Organizations, businesses can seamlessly share data to stores, and manage users and permissions with ease. Ultimately, organizations help businesses reduce operational complexity, increase efficiency, and drive growth by empowering them to manage their eCommerce operations at scale.

Conceptually, Organizations is a container that holds multiple stores, allowing businesses to manage and configure their commerce experiences at a higher level of abstraction. A store can represent a business unit, a geographic region, a brand, or any other grouping of stores that make sense for the business.

With the introduction of Organizations, each organization and store has their own rate limit. For more information, see [Rate Limits](/guides/Getting-Started/rate-limits).

![Organization concept](/assets/org-concept.png)

## The Power of Organizations

- Supports a multi-store business model by enabling an efficient way to manage multiple stores, connected in a single environment.
- Allows the parent organization to share their products, hierarchies, pricing, catalogs and integrations with all stores in the organization.
- Provides a single, integrated location for managing and monitoring all stores, helping to reduce errors, and saving time and costs.
- Allows businesses with a single commerce experience to benefit from using organizations. For instance, a typical customer usually manages multiple stores for development, testing/staging, Production, and so on. With Organizations, customers can easily manage and monitor multiple stores within a single, integrated location.

    To learn more, refer to our [blog post](https://www.elasticpath.com/blog/introducing-organizations).

Organization Admins (Org Admins) have full control over the Organizations and all stores in the organizations. They create and manage all stores in the organization. See [Organization Roles](/docs/organizations/organization_authentication#organization-roles).

## Characteristics of Organizations and Stores

The following table describes the characteristics of organizations and stores.

| Organizations | Stores | 
| --------------- | -------- | 
| An organization can have multiple stores | A store can only belong to one organization. |
| Org Admin manages user permissions for both store users and organization users. | Store Admin manages user permissions for users in the store. |
| An organization contains only organization entities. | A Store contains both organization entities and store entities. |
| Org Admin cannot create, update or delete organization entities in the store, they can only manage organization entities at the organization-level. | Store Admin cannot create, update or delete organization entities, they can only view and utilize the organization entities in the store. A Store Admin has read-only access to the organization entities in the store. |
| Org Admin can manage store entities in the store as they have Seller Admin permissions in all stores in that organizations. | A Store Admin can manage store entities in the store. |




