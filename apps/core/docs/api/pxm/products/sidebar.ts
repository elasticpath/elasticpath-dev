import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/pxm/products/product-experience-manager-introduction",
    },
    {
      type: "category",
      label: "Products",
      link: {
        type: "doc",
        id: "api/pxm/products/products",
      },
      items: [
        {
          type: "doc",
          id: "api/pxm/products/create-product",
          label: "Create a product or bundle",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/pxm/products/get-all-products",
          label: "Get all products",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/products/get-product",
          label: "Get a product",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/products/update-product",
          label: "Update a product or bundle",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/pxm/products/delete-product",
          label: "Delete a product",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/pxm/products/attach-nodes",
          label: "Attach multiple nodes",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/pxm/products/detach-nodes",
          label: "Detach multiple nodes",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/pxm/products/get-products-nodes",
          label: "Get a product's nodes",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Product Tags",
      link: {
        type: "doc",
        id: "api/pxm/products/product-tags",
      },
      items: [
        {
          type: "doc",
          id: "api/pxm/products/get-all-product-tags",
          label: "Get All Product Tags",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/products/get-product-tag",
          label: "Get a Product Tag",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Extending Products with Templates",
      link: {
        type: "doc",
        id: "api/pxm/products/extending-products-with-templates",
      },
      items: [
        {
          type: "doc",
          id: "api/pxm/products/create-product-template-relationship",
          label: "Create a product template relationship",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/pxm/products/get-product-template-relationships",
          label: "Get all product template relationships",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/products/delete-product-template-relationship",
          label: "Delete a product template relationship",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Bundle Component Products Relationships",
      link: {
        type: "doc",
        id: "api/pxm/products/bundle-component-products-relationships",
      },
      items: [
        {
          type: "doc",
          id: "api/pxm/products/get-product-component-products-relationships",
          label: "Get Bundle Component Product Relationships",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Variations",
      link: {
        type: "doc",
        id: "api/pxm/products/variations",
      },
      items: [
        {
          type: "doc",
          id: "api/pxm/products/build-child-products",
          label: "Build child products",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/pxm/products/get-child-products",
          label: "Get child products",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/products/create-product-variation-relationships",
          label: "Create a product variation relationship",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/pxm/products/get-product-variation-relationships",
          label: "Get all product variation relationships",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/products/update-product-variation-relationships",
          label: "Replace a product variation relationship",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/pxm/products/delete-product-variation-relationships",
          label: "Delete a product variation relationships",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/pxm/products/create-variation",
          label: "Create a variation",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/pxm/products/get-all-variations",
          label: "Get all variations",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/products/get-variation",
          label: "Get a variation",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/products/update-variation",
          label: "Update a variation",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/pxm/products/delete-variation",
          label: "Delete a variation and all it's associated options.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/pxm/products/create-variation-option",
          label: "Create a variation option",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/pxm/products/get-all-variation-options",
          label: "Get all variation options",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/products/get-variation-option",
          label: "Get a variation option",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/products/update-variation-option",
          label: "Update a variation option",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/pxm/products/delete-variation-option",
          label: "Delete a variation option",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/pxm/products/create-modifier",
          label: "Create a modifier",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/pxm/products/get-all-modifiers",
          label: "Get all modifiers",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/products/get-modifier",
          label: "Get a modifier",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/products/update-modifier",
          label: "Update a modifier",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/pxm/products/delete-modifier",
          label: "Delete a modifier",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Product File Relationships",
      link: {
        type: "doc",
        id: "api/pxm/products/product-file-relationships",
      },
      items: [
        {
          type: "doc",
          id: "api/pxm/products/get-product-file-relationships",
          label: "Get all product file relationships",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/products/create-product-file-relationships",
          label: "Create a product file relationship",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/pxm/products/update-product-file-relationships",
          label: "Replace a product file relationship",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/pxm/products/delete-product-file-relationships",
          label: "Delete a product file relationships",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Product Image Relationships",
      link: {
        type: "doc",
        id: "api/pxm/products/product-image-relationships",
      },
      items: [
        {
          type: "doc",
          id: "api/pxm/products/create-product-main-image-relationships",
          label: "Create main image relationships",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/pxm/products/get-product-main-image-relationships",
          label: "Get Main Image Relationships",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/products/update-product-main-image-relationships",
          label: "Replace Main Image Relationships",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/pxm/products/delete-product-main-image-relationships",
          label: "Delete Main Image Relationships",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Product Import/Bulk Update",
      link: {
        type: "doc",
        id: "api/pxm/products/product-import-bulk-update",
      },
      items: [
        {
          type: "doc",
          id: "api/pxm/products/import-products",
          label: "Import Products",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Product Export",
      link: {
        type: "doc",
        id: "api/pxm/products/product-export",
      },
      items: [
        {
          type: "doc",
          id: "api/pxm/products/export-products",
          label: "Export Products",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Hierarchies",
      link: {
        type: "doc",
        id: "api/pxm/products/hierarchies",
      },
      items: [
        {
          type: "doc",
          id: "api/pxm/products/create-hierarchy",
          label: "Create a hierarchy",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/pxm/products/get-hierarchy",
          label: "Get all hierarchies",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/products/get-hierarchy-child",
          label: "Get a hierarchy",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/products/update-hierarchy",
          label: "Update a hierarchy",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/pxm/products/delete-hierarchy",
          label: "Delete a hierarchy",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/pxm/products/create-node",
          label: "Create a node",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/pxm/products/get-all-nodes-in-hierarchy",
          label: "Get all nodes in a hierarchy",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/products/get-hierarchy-node",
          label: "Get a node",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/products/update-node",
          label: "Update a node",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/pxm/products/delete-node",
          label: "Deletes a node",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/pxm/products/get-all-children",
          label: "Get a hierarchy's children",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/products/create-node-child-relationships",
          label: "Create relationships between a node and child nodes",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/pxm/products/get-all-node-children",
          label: "Get a node's children",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/products/update-node-parent",
          label: "Update a node's parent",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/pxm/products/delete-node-parent",
          label: "Delete a node's parent",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/pxm/products/create-node-product-relationship",
          label: "Create a node's product relationships",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/pxm/products/delete-node-product-relationships",
          label: "Deletes a node's product relationships",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/pxm/products/get-node-products",
          label: "Get a node's products",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/products/duplicate-hierarchy",
          label: "Duplicate a hierarchy",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Jobs",
      link: {
        type: "doc",
        id: "api/pxm/products/jobs",
      },
      items: [
        {
          type: "doc",
          id: "api/pxm/products/get-all-jobs",
          label: "Get All Jobs",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/products/get-job",
          label: "Get a Job",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/products/cancel-job",
          label: "Cancel a Job",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/pxm/products/get-job-errors",
          label: "Get Job Errors",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
