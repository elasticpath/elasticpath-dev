---
title: Configuring Pagination for Product Collections
nav_label: Configuring Pagination for Product Collections
nav_position: 110
---

For optimal performance, especially with large product collections, you should paginate your product collection component, rendering your products one page at a time instead of loading the entire product collection. Pagination makes it easier for your shoppers to browse through your product catalogs, allowing them to quickly find what they are looking for. In addition, you can choose from a selection of visually engaging indicator types and transitions. For example, if your indicator type is an arrow, then you might want to use a slide transition.

You can choose from the following indicator types:

- dots

  ![dots pagination indicator](/assets/cx-studio/pagination-dots.png)

- arrows

  ![arrows pagination indicator](/assets/cx-studio/pagination-arrows.png)

- page numbers

  ![numbers pagination indicator](/assets/cx-studio/pagination-numbers.png)

## Prerequisites

You must enable pagination for the product collection component. See [Product Collection](/docs/cx-studio/developers/tags/collection#pagination).

## Configuring Pagination for Product Collection Component

The following steps describe how to configure pagination for the **Product Collection** component.

1. Once you have added a **Product Collection** component to a page, select the component to display the pagination menu.
2. Select **Edit products...** to display the product drawer.
3. Select the products you want to display.
4. In **Limit**, specify the upper limit for the total number of products on the page.

   ![edit products](/assets/cx-studio/pagination_edit_product.png)

5. Complete the pagination settings as follows:

   | Option         | Description                                                                  |
   |----------------|------------------------------------------------------------------------------|
   | Indicator Type | From the drop-down list, select either **Arrows**, **Dots**, or **Numbers**. |
   | **Transition** | From the drop-down list, select either **Slide**, **Appear**, or **None**.   |
   | **Per page:**  | Use the arrows to select the maximum number of products to display per page. |

6. Save and publish your changes.

