import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/promotions/promotions-standard-introduction",
    },
    {
      type: "category",
      label: "Promotions Standard",
      link: {
        type: "doc",
        id: "api/promotions/promotions-standard",
      },
      items: [
        {
          type: "doc",
          id: "api/promotions/get-all-promotions",
          label: "Get all Promotions",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/promotions/create-a-promotion",
          label: "Create a Promotion",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/promotions/get-a-promotion",
          label: "Get a Promotion",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/promotions/update-a-promotion",
          label: "Update a Promotion",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/promotions/delete-a-promotion",
          label: "Delete a Promotion",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/promotions/get-a-promotion-history",
          label: "Get a Promotion History",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Promotion Codes",
      link: {
        type: "doc",
        id: "api/promotions/promotion-codes",
      },
      items: [
        {
          type: "doc",
          id: "api/promotions/get-promotion-codes",
          label: "Get Promotion Codes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/promotions/create-promotion-codes",
          label: "Create Promotion Codes",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/promotions/delete-multiple-promotion-codes",
          label: "Delete Multiple Promotion Codes",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/promotions/delete-a-promotion-code",
          label: "Delete a Promotion Code",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Promotion Jobs",
      link: {
        type: "doc",
        id: "api/promotions/promotion-jobs",
      },
      items: [
        {
          type: "doc",
          id: "api/promotions/get-promotion-jobs",
          label: "Get Promotion Jobs",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/promotions/create-a-promotion-job",
          label: "Create a Promotion Job",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/promotions/cancel-a-job",
          label: "Cancel a Job",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/promotions/get-promotion-code-exported-file",
          label: "Get Promotion Code Exported File",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
