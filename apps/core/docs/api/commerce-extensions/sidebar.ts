import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/commerce-extensions/commerce-extensions-introduction",
    },
    {
      type: "category",
      label: "Custom APIs",
      link: {
        type: "doc",
        id: "api/commerce-extensions/custom-ap-is",
      },
      items: [
        {
          type: "doc",
          id: "api/commerce-extensions/create-a-custom-api",
          label: "Create a Custom API",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/commerce-extensions/get-all-custom-apis",
          label: "Get all Custom APIs",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/commerce-extensions/get-a-custom-api",
          label: "Get a Custom API",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/commerce-extensions/update-a-custom-api",
          label: "Update a Custom API",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/commerce-extensions/delete-a-custom-api",
          label: "Delete a Custom API",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Custom Fields",
      link: {
        type: "doc",
        id: "api/commerce-extensions/custom-fields",
      },
      items: [
        {
          type: "doc",
          id: "api/commerce-extensions/create-a-custom-field",
          label: "Create a Custom Field",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/commerce-extensions/get-all-custom-fields",
          label: "Get all Custom Fields",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/commerce-extensions/get-a-custom-field",
          label: "Get a Custom Field",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/commerce-extensions/update-a-custom-field",
          label: "Update a Custom Field",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/commerce-extensions/delete-a-custom-field",
          label: "Delete a Custom Field",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Custom API Entries",
      link: {
        type: "doc",
        id: "api/commerce-extensions/custom-api-entries",
      },
      items: [
        {
          type: "doc",
          id: "api/commerce-extensions/create-a-custom-entry",
          label: "Create a Custom API Entry using the settings endpoint",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/commerce-extensions/get-all-custom-entries",
          label: "Get all Custom API Entries",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/commerce-extensions/get-a-custom-entry",
          label: "Get a Custom API Entry using the settings endpoint",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/commerce-extensions/update-a-custom-entry",
          label: "Update a Custom API Entry using the settings endpoint",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/commerce-extensions/delete-a-custom-entry",
          label: "Delete a Custom API Entry",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Commerce Extension Custom API",
      link: {
        type: "doc",
        id: "api/commerce-extensions/commerce-extension-custom-api",
      },
      items: [
        {
          type: "doc",
          id: "api/commerce-extensions/get-custom-entries-settings",
          label: "Get all Custom API Entries using the extensions endpoint",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/commerce-extensions/create-a-custom-entry-settings",
          label: "Create a Custom API Entry using the extensions endpoint",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/commerce-extensions/get-a-custom-entry-settings",
          label: "Get a Custom API Entry using the extensions endpoint",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/commerce-extensions/put-a-custom-entry-settings",
          label: "Update a Custom API Entry using the extensions endpoint",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/commerce-extensions/delete-a-custom-entry-settings",
          label: "Delete a Custom API Entry using the extensions endpoint",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
