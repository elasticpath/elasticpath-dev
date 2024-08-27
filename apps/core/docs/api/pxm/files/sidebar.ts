import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/pxm/files/files-introduction",
    },
    {
      type: "category",
      label: "Files",
      link: {
        type: "doc",
        id: "api/pxm/files/files",
      },
      items: [
        {
          type: "doc",
          id: "api/pxm/files/get-all-files",
          label: "Get all Files",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/files/create-a-file",
          label: "Create a File",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/pxm/files/get-a-file",
          label: "Get a File",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pxm/files/delete-a-file",
          label: "Delete a File",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
