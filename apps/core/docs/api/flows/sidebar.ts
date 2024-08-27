import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/flows/flows-service-introduction",
    },
    {
      type: "category",
      label: "Flows",
      link: {
        type: "doc",
        id: "api/flows/flows",
      },
      items: [
        {
          type: "doc",
          id: "api/flows/get-all-flows",
          label: "Get all Flows",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/flows/create-a-flow",
          label: "Create a Flow",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/flows/get-a-flow",
          label: "Get a Flow",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/flows/delete-a-flow",
          label: "Delete a Flow",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/flows/update-a-flow",
          label: "Update a Flow",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Fields",
      link: {
        type: "doc",
        id: "api/flows/fields",
      },
      items: [
        {
          type: "doc",
          id: "api/flows/get-all-fields",
          label: "Get all Fields",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/flows/create-a-field",
          label: "Create a Field",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/flows/get-a-field",
          label: "Get a Field",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/flows/update-a-field",
          label: "Update a Field",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/flows/delete-a-field",
          label: "Delete a Field",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/flows/get-all-fields-by-flow",
          label: "Get all Fields by Flow",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Entries",
      link: {
        type: "doc",
        id: "api/flows/entries",
      },
      items: [
        {
          type: "doc",
          id: "api/flows/get-all-entries",
          label: "Get all Entries",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/flows/create-an-entry",
          label: "Create an Entry",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/flows/get-an-entry",
          label: "Get an Entry",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/flows/delete-an-entry",
          label: "Delete an Entry",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/flows/update-an-entry",
          label: "Update an Entry",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Entry Relationships",
      link: {
        type: "doc",
        id: "api/flows/entry-relationships",
      },
      items: [
        {
          type: "doc",
          id: "api/flows/create-an-entry-relationship",
          label: "Create an Entry Relationship",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/flows/update-an-entry-relationship",
          label: "Update an Entry Relationship",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/flows/delete-an-entry-relationship",
          label: "Delete an Entry Relationship",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
