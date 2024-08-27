import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/exporter/exporter-service-api",
    },
    {
      type: "category",
      label: "Jobs",
      link: {
        type: "doc",
        id: "api/exporter/jobs",
      },
      items: [
        {
          type: "doc",
          id: "api/exporter/get-multiple-jobs",
          label: "Get All Jobs",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/exporter/create-job",
          label: "Create Job",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/exporter/get-a-job",
          label: "Get a Job",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/exporter/get-a-job-file",
          label: "Get a Job File",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
