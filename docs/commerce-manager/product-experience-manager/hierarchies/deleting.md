---
title: Deleting Hierarchies & Nodes
nav_label: Deleting Hierarchies & Nodes
sidebar_position: 60
---

When you delete a hierarchy, the hierarchy and all its descendant nodes are deleted from the database. The products that were associated with the hierarchy remain in the database and can be used with other hierarchies.

1. Go to **Product Experience Manager > Configurations**. 
1. Select the **Hierarchies** tab. 
1. Select the checkboxes of the hierarchies that you want to delete.
1. Select **...** > **Delete** next to the hierarchy you want to delete.
1. You can delete more than one hierarchy at a time by checking each of the hierarchies you want to delete and selecting **Actions** > **Delete**. 

:::caution

The updates in hierarchies do not appear in the storefront until you republish the affected catalog releases.

:::

![deleting hierarchies](/assets/delete_hierarchy.gif)

## Deleting Parent/Child Nodes

When you delete a parent/child node, the parent/child node and all its descendant nodes are deleted from the database. The products that were associated with the parent/child node remain in the database and can be used with other hierarchies and parent/child nodes. If you want to keep the child nodes, change the parent for each child of the node you want to delete before deleting the node.

1. Go to **Product Experience Manager** > **Configurations**.
1. Select the **Hierarchies** tab.
1. Select the hierarchy that the parent/child nodes you want to delete belongs to.
1. Select **Nodes**.
1. Navigate to the node that you want to delete.
1. Select **...** > **Delete** next to a parent/child node to delete the parent/child node.
1. You can delete more than one node at a time by checking each of the nodes you want to delete and selecting **Actions** > **Delete**.

:::caution

The updates do not appear in the storefront until you republish the affected catalog releases.

:::

![deleting nodes](/assets/delete_node.gif)

### Demos

<iframe width="560" height="315" src="https://www.youtube.com/embed/4-ccMytvaNE" title="Understanding Hierarchies in Product Experience Manager" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/4FM4lvYtQSA" title="Configuring Hierarchies in Product Experience Manager" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>