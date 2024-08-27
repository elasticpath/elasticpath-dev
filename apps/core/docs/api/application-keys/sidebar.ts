import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/application-keys/application-keys-introduction",
    },
    {
      type: "category",
      label: "Application Keys",
      link: {
        type: "doc",
        id: "api/application-keys/application-keys",
      },
      items: [
        {
          type: "doc",
          id: "api/application-keys/get-all-keys",
          label: "Get all Application Keys",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/application-keys/create-key",
          label: "Create an Application Key",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/application-keys/get-key",
          label: "Get an Application Key",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/application-keys/update-key",
          label: "Update an Application Key",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/application-keys/delete-key",
          label: "Delete an Application Key",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
