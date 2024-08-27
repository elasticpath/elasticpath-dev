import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/pxm/pricebooks/price-books-introduction",
    },
    {
      type: "category",
      label: "Price Books",
      link: {
        type: "doc",
        id: "api/pxm/pricebooks/price-books",
      },
      items: [
        {
          type: "doc",
          id: "api/pxm/pricebooks/create-pricebook",
          label: "Create a Price Book",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/pxm/pricebooks/get-pricebooks",
          label: "Get all Price Books",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/pricebooks/get-pricebook-by-id",
          label: "Get a Price Book by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/pricebooks/update-pricebook",
          label: "Update a Price Book by ID",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/pxm/pricebooks/delete-pricebook-by-id",
          label: "Delete a Price Book by ID",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/pxm/pricebooks/replicate-pricebook",
          label: "Replicate a Price Book",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Prices",
      link: {
        type: "doc",
        id: "api/pxm/pricebooks/prices",
      },
      items: [
        {
          type: "doc",
          id: "api/pxm/pricebooks/create-product-price",
          label: "Add a Product Price to a Price Book",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/pxm/pricebooks/get-product-prices",
          label: "Gets all Prices by Price Book ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/pricebooks/get-product-price-by-id",
          label: "Get a Product Price by Price Book ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/pricebooks/update-product-price",
          label: "Update a Product Price in a Price Book",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/pxm/pricebooks/delete-product-price",
          label: "Delete a Product Price from a Price Book",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/pxm/pricebooks/get-prices",
          label: "Gets all Prices",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Price Book Modifiers",
      link: {
        type: "doc",
        id: "api/pxm/pricebooks/price-book-modifiers",
      },
      items: [
        {
          type: "doc",
          id: "api/pxm/pricebooks/create-price-modifier",
          label: "Create a Modifier",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/pxm/pricebooks/get-price-modifiers",
          label: "Gets a list of all modifiers",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/pricebooks/get-price-modifier-by-id",
          label: "Get a Modifier",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/pricebooks/update-price-modifier",
          label: "Update a Modifier",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/pxm/pricebooks/delete-price-modifier",
          label: "Delete a Modifier",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Import a Price Book and Prices",
      link: {
        type: "doc",
        id: "api/pxm/pricebooks/import-a-price-book-and-prices",
      },
      items: [
        {
          type: "doc",
          id: "api/pxm/pricebooks/import-pricebook",
          label: "Import a Price",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
