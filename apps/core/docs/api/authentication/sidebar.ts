import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/authentication/authentication",
    },
    {
      type: "category",
      label: "Generate an Access Token",
      items: [
        {
          type: "doc",
          id: "api/authentication/post-oauth-access-token",
          label: "Create an Access Token",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
