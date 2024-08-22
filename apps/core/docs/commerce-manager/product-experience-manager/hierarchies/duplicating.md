---
title: Duplicating Hierarchies & Nodes
nav_label: Duplicating Hierarchies & Nodes
sidebar_position: 50
---

You can duplicate an existing hierarchy or node. This is useful because it enables you to quickly and easily create multiple hierarchies and nodes with the same node structure.

When you duplicate a hierarchy or a node, you can specify a new name and/or a new description for the duplicated hierarchy or node. All other attributes, such as slug and locales, stay the same.

Any nodes in the existing hierarchy or node are also created in the duplicated hierarchy. 

In addition, when duplicating a hierarchy, you can specify whether you want products associated with the nodes in an existing hierarchy to be associated with the nodes in a duplicated hierarchy. Duplicating a node does not retain product relationships.

### Duplicating hierarchies

The following steps describe duplicating hierarchies.

1. Go to **Product Experience Manager > Configurations** and select the **Hierarchies** tab.
1. Select **...** > **Duplicate**.
1. (Required) In **Name**, enter a new name for the duplicated hierarchy.
1. (Optional) In **Description**, you can keep the existing description or enter a new description.
1. (Optional) Turn on the **Retain a products relationship** toggle to keep the products associated with the nodes in the existing hierarchy associated with the nodes in the duplicated hierarchy.
1. Click **Confirm** to save your changes. 

![duplicating hierarchies](/assets/duplicate_hierarchy.gif)

### Duplicating nodes

When duplicating a node, the child nodes are not duplicated and the existing products in the node cannot be assigned to the duplicate node. Essentially, when you are copying a node you are copying the name, description and slug.

The following steps describe duplicating nodes.

1. Go to **Product Experience Manager > Configurations** and select the **Hierarchies** tab.
1. Select the hierarchy whose node you want to duplicate.
1. Select **Nodes**.
1. Navigate to the node you want to duplicate.
1. Select **...** > **Duplicate Node**.
1. (Required) In **Name**, enter a new name for the duplicated node.
1. (Optional) In **Description**, you can keep the existing description or enter a new description.
1. In **Slug**, you can keep the existing slug or enter a new one.
1. Click **Save** to save your changes.

![duplicating nodes](/assets/duplicate_node.gif)

### Demos

<iframe width="560" height="315" src="https://www.youtube.com/embed/4-ccMytvaNE" title="Understanding Hierarchies in Product Experience Manager" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/4FM4lvYtQSA" title="Configuring Hierarchies in Product Experience Manager" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
