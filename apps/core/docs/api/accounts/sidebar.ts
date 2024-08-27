import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/accounts/account-management-introduction",
    },
    {
      type: "category",
      label: "Accounts",
      link: {
        type: "doc",
        id: "api/accounts/accounts",
      },
      items: [
        {
          type: "doc",
          id: "api/accounts/post-v-2-accounts",
          label: "Create an Account",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/accounts/get-v-2-accounts",
          label: "Get All Accounts",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/get-v-2-accounts-account-id",
          label: "Get an Account",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/put-v-2-accounts-account-id",
          label: "Update an Account",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/accounts/delete-v-2-accounts-account-id",
          label: "Delete an Account",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Account Members",
      link: {
        type: "doc",
        id: "api/accounts/account-members",
      },
      items: [
        {
          type: "doc",
          id: "api/accounts/get-v-2-account-members",
          label: "Get all Account Members",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/get-v-2-account-members-account-member-id",
          label: "Get an Account Member",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Account Membership",
      link: {
        type: "doc",
        id: "api/accounts/account-membership",
      },
      items: [
        {
          type: "doc",
          id: "api/accounts/post-v-2-accounts-account-id-account-memberships",
          label: "Create an Account Membership",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/accounts/get-v-2-accounts-account-id-account-memberships",
          label: "Get all Account Memberships",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/get-v-2-account-members-account-member-id-account-memberships",
          label: "Get a List of Account Memberships of Account Member",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/get-v-2-accounts-account-id-account-memberships-unassigned-account-members",
          label: "Get a List of Unassigned Account Members",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/get-v-2-accounts-account-id-account-memberships-membership-id",
          label: "Get an Account Membership",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/put-v-2-accounts-account-id-account-memberships-membership-id",
          label: "Update an Account Membership",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/accounts/delete-v-2-accounts-account-id-account-memberships-membership-id",
          label: "Delete an Account Membership",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Account Membership Settings",
      link: {
        type: "doc",
        id: "api/accounts/account-membership-settings",
      },
      items: [
        {
          type: "doc",
          id: "api/accounts/get-v-2-settings-account-membership",
          label: "Get Account Membership Settings",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/put-v-2-settings-account-membership",
          label: "Update Account Membership Settings",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Account Management Authentication",
      link: {
        type: "doc",
        id: "api/accounts/account-management-authentication",
      },
      items: [
        {
          type: "doc",
          id: "api/accounts/post-v-2-account-members-tokens",
          label: "Generate an Account Management Authentication Token",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Account Authentication Settings",
      link: {
        type: "doc",
        id: "api/accounts/account-authentication-settings",
      },
      items: [
        {
          type: "doc",
          id: "api/accounts/get-v-2-settings-account-authentication",
          label: "Get Account Authentication Settings",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/accounts/put-v-2-settings-account-authentication",
          label: "Update Account Authentication Settings",
          className: "api-method put",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
