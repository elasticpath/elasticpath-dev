import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/pxm/catalog/catalogs-introduction",
    },
    {
      type: "category",
      label: "Catalogs",
      link: {
        type: "doc",
        id: "api/pxm/catalog/catalogs",
      },
      items: [
        {
          type: "doc",
          id: "api/pxm/catalog/create-catalog",
          label: "Creates a new catalog",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/pxm/catalog/get-catalogs",
          label: "Gets all authorized catalogs",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/catalog/get-catalog-by-id",
          label: "Get a catalog by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/catalog/update-catalog",
          label: "Updates a catalog",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/pxm/catalog/delete-catalog-by-id",
          label: "Deletes a catalog",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Releases",
      link: {
        type: "doc",
        id: "api/pxm/catalog/releases",
      },
      items: [
        {
          type: "doc",
          id: "api/pxm/catalog/publish-release",
          label: "Publishes a catalog",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/pxm/catalog/get-releases",
          label: "Gets all authorized catalog releases",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/catalog/delete-releases",
          label: "Deletes all releases",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/pxm/catalog/get-release-by-id",
          label: "Get a catalog release by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/catalog/delete-release-by-id",
          label: "Deletes a release",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/pxm/catalog/get-by-context-release",
          label: "Get the catalog release as shoppers",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Rules",
      link: {
        type: "doc",
        id: "api/pxm/catalog/rules",
      },
      items: [
        {
          type: "doc",
          id: "api/pxm/catalog/create-rule",
          label: "Creates a new catalog rule",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/pxm/catalog/get-rules",
          label: "Gets all authorized catalog rules",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/catalog/get-rule-by-id",
          label: "Get a catalog rule by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/catalog/update-rule",
          label: "Updates a catalog rule",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/pxm/catalog/delete-rule-by-id",
          label: "Deletes a catalog rule",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Administrator Latest Releases Catalog API",
      link: {
        type: "doc",
        id: "api/pxm/catalog/administrator-latest-releases-catalog-api",
      },
      items: [
        {
          type: "doc",
          id: "api/pxm/catalog/get-all-hierarchies",
          label: "Get all Hierarchies",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/catalog/get-hierarchy",
          label: "Get a Hierarchy",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/catalog/get-hierarchy-nodes",
          label: "Get a Hierarchy's Nodes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/catalog/get-hierarchy-child-nodes",
          label: "Get a Hierarchy's Children",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/catalog/get-all-nodes",
          label: "Get all Nodes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/catalog/get-node",
          label: "Get a Node",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/catalog/get-child-nodes",
          label: "Get a Node's Children",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/catalog/get-all-products",
          label: "Get all Products",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/catalog/get-product",
          label: "Get a Product",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/catalog/get-component-product-i-ds",
          label: "Get a Bundle's Component Products",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/catalog/get-child-products",
          label: "Get a Parent Product's Child Products",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/catalog/get-products-for-hierarchy",
          label: "Get a Hierarchy's Products",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/catalog/get-products-for-node",
          label: "Get a Node's Products",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Shopper Catalog API",
      link: {
        type: "doc",
        id: "api/pxm/catalog/shopper-catalog-api",
      },
      items: [
        {
          type: "doc",
          id: "api/pxm/catalog/get-by-context-all-hierarchies",
          label: "Get all Hierarchies",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/catalog/get-by-context-hierarchy",
          label: "Get a Hierarchy",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/catalog/get-by-context-hierarchy-nodes",
          label: "Get a Hierarchy's Nodes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/catalog/get-by-context-hierarchy-child-nodes",
          label: "Get a Hierarchy's Children",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/catalog/get-by-context-all-nodes",
          label: "Get all Nodes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/catalog/get-by-context-node",
          label: "Get a Node",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/catalog/get-by-context-child-nodes",
          label: "Get a Node's Children",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/catalog/get-by-context-all-products",
          label: "Get all Products",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/catalog/get-by-context-product",
          label: "Get a Product",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/catalog/get-by-context-component-product-i-ds",
          label: "Get a Bundle's Component Products",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/catalog/get-by-context-child-products",
          label: "Get a Parent Product's Child Products",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/catalog/get-by-context-products-for-hierarchy",
          label: "Get a Hierarchy's Products",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/catalog/get-by-context-products-for-node",
          label: "Get a Node's Products",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/catalog/configure-by-context-product",
          label: "Configure a Shopper Bundle",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
