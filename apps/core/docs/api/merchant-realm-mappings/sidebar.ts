import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/merchant-realm-mappings/merchant-realm-mappings-introduction",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "api/merchant-realm-mappings/get-merchant-realm-mappings",
          label: "Get the Merchant Realm Mapping for the current store",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/merchant-realm-mappings/get-merchant-realm-mapping",
          label: "Get a Merchant Realm Mapping",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/merchant-realm-mappings/update-merchant-realm-mapping",
          label: "Update a Merchant Realm Mapping",
          className: "api-method put",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
