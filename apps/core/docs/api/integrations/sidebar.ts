import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/integrations/integrations-introduction",
    },
    {
      type: "category",
      label: "Integrations",
      link: {
        type: "doc",
        id: "api/integrations/integrations",
      },
      items: [
        {
          type: "doc",
          id: "api/integrations/list-integrations",
          label: "List integrations",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/integrations/create-integration",
          label: "Create an integration",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/integrations/get-integration",
          label: "Get an integration",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/integrations/update-integration",
          label: "Update an integration",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/integrations/delete-integration",
          label: "Delete an integration",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/integrations/list-store-logs",
          label: "List logs for all integrations for the store",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/integrations/list-integration-logs",
          label: "List logs for integration",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/integrations/list-integration-jobs",
          label: "List jobs for integration",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/integrations/list-job-logs",
          label: "List logs for the job",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
