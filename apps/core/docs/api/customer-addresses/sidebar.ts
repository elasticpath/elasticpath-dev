import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/customer-addresses/addresses-introduction",
    },
    {
      type: "category",
      label: "Customer Addresses",
      link: {
        type: "doc",
        id: "api/customer-addresses/customer-addresses",
      },
      items: [
        {
          type: "doc",
          id: "api/customer-addresses/get-v-2-customer-addresses",
          label: "Get Customer Addresses",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/customer-addresses/get-v-2-customer-address",
          label: "Get an Customer Address",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/customer-addresses/post-v-2-customer-address",
          label: "Create an Customer Address",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/customer-addresses/put-v-2-customer-address",
          label: "Update an Customer Address",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/customer-addresses/delete-v-2-customer-address",
          label: "Delete a Customer Address",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
