---
title: Studio Release 199 | June 25, 2024
date: 2024-06-25
tags:
  - Studio
---

#### Overview

Pagination is now supported in the Product Collection component and bug fixes in this release.

#### Product Collection Component

The Product Collection component now supports pagination. For optimal performance, especially with large product collections, you should paginate your product collection component, rendering your products one page at a time instead of loading the entire product collection. Pagination makes it easier for your shoppers to browse through your product catalogs, allowing them to quickly find what they are looking for. In addition, you can choose from a selection of visually engaging indicator types and transitions. For example, if your indicator type is an arrow, then you might want to use a slide transition.

Once you have enabled pagination for your product collection component, you can configure how pagination displays when you add a product collection component to a page. See [Configuring Pagination for Product Collections](/docs/studio/developers/e-commerce/product-collection).

![pagination arrows](/assets/studio/pagination-numbers.png)

#### Complete List of Resolved Items

#### Search Engine Optimization

* Added meta descriptions and keywords to the product detail and product listing page template settings to improve search engine optimization.

#### Elastic Path Composable Commerce

* **Bug** - Fixed an issue where a 500 response error was being returned when shoppers registered with an invalid email address.
* **Bug** - Fixed an issue where a parent product with all variants out of stock could still be added to a cart.

#### Blogs

* **Bug** - Fixed an issue where a customer could not open a form with an action link on the blog page.
* **Bug** - Fixed an issue where blog/category publish returned a 500 error if there were no associated published articles.



