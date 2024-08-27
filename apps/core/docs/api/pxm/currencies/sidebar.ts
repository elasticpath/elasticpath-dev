import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/pxm/currencies/currencies-introduction",
    },
    {
      type: "category",
      label: "Currencies",
      link: {
        type: "doc",
        id: "api/pxm/currencies/currencies",
      },
      items: [
        {
          type: "doc",
          id: "api/pxm/currencies/get-all-currencies",
          label: "Get all Currencies",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/currencies/create-a-currency",
          label: "Create a Currency",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/pxm/currencies/get-a-currency",
          label: "Get a Currency",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/currencies/update-a-currency",
          label: "Update a Currency",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/pxm/currencies/delete-a-currency",
          label: "Delete a Currency",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
