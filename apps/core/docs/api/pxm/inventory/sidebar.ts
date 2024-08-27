import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/pxm/inventory/inventories-introduction",
    },
    {
      type: "category",
      label: "Inventory",
      link: {
        type: "doc",
        id: "api/pxm/inventory/inventory",
      },
      items: [
        {
          type: "doc",
          id: "api/pxm/inventory/get-stock-for-all-products",
          label: "Get Stock for all Products",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/inventory/get-stock-for-multiple-products",
          label: "Get Stock for Multiple Products",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/pxm/inventory/create-product-stock",
          label: "Create Stock for Product",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/pxm/inventory/get-product-stock",
          label: "Get Stock for Product",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/inventory/delete-stock",
          label: "Delete Stock for Product",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Transactions",
      link: {
        type: "doc",
        id: "api/pxm/inventory/transactions",
      },
      items: [
        {
          type: "doc",
          id: "api/pxm/inventory/get-stock-transactions",
          label: "Get Stock Transactions for Product",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/inventory/update-product-stock",
          label: "Create Stock Transaction on Product",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/pxm/inventory/get-single-stock-transaction",
          label: "Get Single Stock Transaction for Product",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
