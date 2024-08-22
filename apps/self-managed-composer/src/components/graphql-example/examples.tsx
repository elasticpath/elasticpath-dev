interface InputInstanceConfigVariable {
  key: string;
  value?: string;
  values?: string;
}

interface Example {
  query: string;
  queryVariables: {
    [key: string]: string | number | InputInstanceConfigVariable[];
  };
  title: string;
}

const examples: { [key: string]: Example } = {
  // Get a single customer
  getCustomer: {
    query: `query ($myCustomerId: ID!) {
  customer(id: $myCustomerId) {
    id
    name
    externalId
  }
}`,
    queryVariables: {
      myCustomerId:
        "Q3VzdG9tZXI6ZDM0NTZjZWItNTNlOS00YmI5LWFhODItN2QyZDQ3YjZkMTA4",
    },
    title: "Fetch a Specific Customer",
  },

  // Get multiple customers
  getCustomers: {
    query: `query exampleGetCustomers {
  customers(isSystem: false) {
    nodes {
      id
      name
      externalId
    }
  }
}`,
    queryVariables: null,
    title: "Fetch All Customers",
  },

  // Create a customer
  createCustomer: {
    query: `mutation ($customerName: String!, $customerDescription: String, $customerExternalId: String) {
  createCustomer(
    input: {name: $customerName, description: $customerDescription, externalId: $customerExternalId}
  ) {
    customer {
      id
    }
    errors {
      field
      messages
    }
  }
}
`,
    queryVariables: {
      customerName: "FTL Rockets",
      customerDescription: "Faster-than-light Rocket Company, LLC",
      customerExternalId: "abc-123",
    },
    title: "Create a New Customer",
  },

  // Update a customer's description
  updateCustomer: {
    query: `mutation ($customerId: ID!, $newDescription: String) {
  updateCustomer(input: {id: $customerId, description: $newDescription}) {
    errors {
      field
      messages
    }
  }
}
`,
    queryVariables: {
      customerId:
        "Q3VzdG9tZXI6ZDM0NTZjZWItNTNlOS00YmI5LWFhODItN2QyZDQ3YjZkMTA4",
      newDescription: "My Updated Description",
    },
    title: "Update a Customer",
  },

  // Delete a customer by ID
  deleteCustomer: {
    query: `mutation ($customerId: ID!) {
  deleteCustomer(input: {id: $customerId}) {
    customer {
      name
    }
    errors {
      field
      messages
    }
  }
}`,
    queryVariables: {
      customerId:
        "Q3VzdG9tZXI6ZDM0NTZjZWItNTNlOS00YmI5LWFhODItN2QyZDQ3YjZkMTA4",
    },
    title: "Delete a Customer",
  },

  // Look up organization roles
  organizationRoles: {
    query: `query {
  organizationRoles {
    id
    name
    permissions {
      nodes {
        name
        description
      }
    }
  }
}`,
    queryVariables: null,
    title: "Query for Organization Roles",
  },

  // Create an organization user
  createOrganizationUser: {
    query: `mutation ($email: String!, $name: String, $externalId: String, $role: ID!) {
  createOrganizationUser(
    input: {email: $email, name: $name, externalId: $externalId, role: $role}
  ) {
    user {
      id
      name
      email
      externalId
    }
    errors {
      field
      messages
    }
  }
}`,
    queryVariables: {
      email: "lisa.nguyen@smith-rockets.co",
      name: "Lisa Nguyen",
      externalId: "ABCCBC0B-98D0-453B-A795-0B430EFBF020",
      role: "Um9sZTo0NzdmNGRlYi03NzRlLTQ0M2UtOWY0MS01OGRmOWNhZjllNmM=",
    },
    title: "Create an Organization Team Member",
  },

  // List Users by Customer
  usersByCustomer: {
    query: `query {
  customers(isSystem: false) {
    nodes {
      id
      name
      users {
        nodes {
          id
          email
          name
          externalId
        }
      }
    }
  }
}`,
    queryVariables: null,
    title: "List All Customer Users by Customer",
  },

  // Search for versions of an integration
  versionsOfIntegration: {
    query: `query ($integrationName: String!) {
  integrations(
    name: $integrationName
    allVersions: true
    versionIsAvailable: true
    sortBy: {direction: DESC, field: VERSION_NUMBER}
  ) {
    nodes {
      id
      name
      versionNumber
    }
  }
}`,
    queryVariables: {
      integrationName: "Acme Inventory",
    },
    title: "Find all available versions of the Acme Inventory integration",
  },

  // Create a new instance
  createInstance: {
    query: `mutation ($customerId: ID!, $integrationId: ID!, $name: String!) {
  createInstance(
    input: {customer: $customerId, integration: $integrationId, name: $name}
  ) {
    instance {
      id
      name
      flowConfigs {
        nodes {
          flow {
            name
          }
          webhookUrl
        }
      }
    }
    errors {
      field
      messages
    }
  }
}
`,
    queryVariables: {
      customerId:
        "Q3VzdG9tZXI6OThiMjU3MDUtZmMzNC00NWYwLTk0ZDItODA0ZjFkYzEyYTZk",
      integrationId:
        "SW50ZWdyYXRpb246ZjY1Y2I5YTktMmZiZC00ZGE0LWIwYzktMjQ4Njc0YTY2NGMz",
      name: "Acme Inventory",
    },
    title: "Create a New Instance of an Integration",
  },

  // Get the shape of an instance's config variables
  queryInstanceConfigVars: {
    query: `query ($instanceId: ID!) {
  instance(id: $instanceId) {
    name
    configVariables {
      nodes {
        id
        value
        meta
        requiredConfigVariable {
          key
          collectionType
          dataType
          defaultValue
        }
        inputs {
          nodes {
            name
            type
            value
          }
        }
      }
    }
  }
}`,
    queryVariables: {
      instanceId:
        "SW5zdGFuY2U6MWY0NmRmM2MtM2FjMi00ODMwLWExODEtZjNhN2FmN2RkNTRi",
    },
    title: "Get an Instance's Required Config Variables",
  },

  // Update an instance's config variable values
  updateInstanceConfigVarsWithUpdateInstance: {
    query: `mutation ($instanceId: ID!, $configVariables: [InputInstanceConfigVariable]) {
  updateInstance(input: {id: $instanceId, configVariables: $configVariables}) {
    instance {
      id
      name
      configVariables {
        nodes {
          requiredConfigVariable {
            key
          }
          value
          inputs {
            nodes {
              name
              value
            }
          }
        }
      }
    }
    errors {
      field
      messages
    }
  }
}`,
    queryVariables: {
      instanceId:
        "SW5zdGFuY2U6MWY0NmRmM2MtM2FjMi00ODMwLWExODEtZjNhN2FmN2RkNTRi",
      configVariables: [
        {
          key: "Acme Inventory User/Pass",
          values:
            '[{"name":"username","type":"value","value":"my.username"},{"name":"password","type":"value","value":"Pa$$W0Rd"}]',
        },
        {
          key: "Acme Inventory Endpoint",
          value: "https://app.acme.com/api",
        },
        {
          key: "Sync Inventory Item Metadata?",
          value: "true",
        },
        {
          key: "Inventory Field Mapping",
          value:
            '[{"key":"qty","value":"Quantity"},{"key":"usd","value":"Price"}]',
        },
      ],
    },
    title:
      "Update an Instance With New Configuration Values with updateInstance",
  },

  // Update config variables with updateInstanceConfigVariables
  updateInstanceConfigVarsWithUpdateInstanceConfigVariables: {
    query: `mutation ($instanceId: ID!, $configVariables: [InputInstanceConfigVariable]) {
  updateInstanceConfigVariables(
    input: {id: $instanceId, configVariables: $configVariables}
  ) {
    instance {
      id
    }
    errors {
      field
      messages
    }
  }
}`,
    queryVariables: {
      instanceId:
        "SW5zdGFuY2U6MWY0NmRmM2MtM2FjMi00ODMwLWExODEtZjNhN2FmN2RkNTRi",
      configVariables: [
        {
          key: "My String",
          value: "My Value",
        },
        {
          key: "My List",
          value: '["Value 1","Value 2"]',
        },
        {
          key: "Amazon S3 Connection",
          values:
            '[{"name":"accessKeyId","type":"value","value":"MyAccessKey"},{"name":"secretAccessKey","type":"value","value":"MySecretAccessKey"}]',
        },
      ],
    },
    title:
      "Update an Instance With New Configuration Values with updateInstanceConfigVariables",
  },
  // Deploy an instance
  deployInstance: {
    query: `mutation ($instanceId: ID!) {
  deployInstance(input: {id: $instanceId}) {
    instance {
      name
      enabled
      deployedVersion
      lastDeployedAt
    }
    errors {
      field
      messages
    }
  }
}`,
    queryVariables: {
      instanceId:
        "SW5zdGFuY2U6ODgyOTQwM2MtOGZkYS00ZGMwLTg3OGYtYWI5MWNhMmVmMTVj",
    },
    title: "Deploy an Instance",
  },

  // Get execution results
  executionResult: {
    query: `query ($executionId: ID!) {
  executionResult(id: $executionId) {
    startedAt
    endedAt
    error
    stepResults (stepName: "codeBlock") {
      nodes {
        stepName
        resultsUrl
      }
    }
  }
}`,
    queryVariables: {
      executionId:
        "SW5zdGFuY2VFeGVjdXRpb25SZXN1bHQ6OTdiNWQxYmEtZGUyZi00ZDY4LWIyMTgtMDFlZGMwMTQxNTM5",
    },
    title: "Fetch Execution Results",
  },

  // Pagination Example
  pagination: {
    query: `query getPageOfInstances($cursor: String) {
  instances(
    after: $cursor
    isSystem: false
    sortBy: [{field: CREATED_AT, direction: ASC}]
    first: 10
  ) {
    nodes {
      id
      name
      customer {
        id
        name
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}`,
    queryVariables: { cursor: "YXJyYXljb25uZWN0aW9uOjk5" },
    title: "Fetch the second page of 10 instances using a cursor",
  },

  // Import an OAuth Config Variable
  importOauthConnection: {
    query: `mutation (
  $configVarId: ID!,
  $accessToken: String!,
  $refreshToken: String!,
  $refreshAt: DateTime!,
  $expiresIn: Int!
  $additionalTokenFields: String
) {
  updateOAuth2Connection(
    input: {
      id: $configVarId,
      status: "active",
      accessToken: $accessToken,
      refreshToken: $refreshToken,
      tokenType: "bearer",
      refreshAt: $refreshAt,
      expiresIn: $expiresIn,
      additionalTokenFields: $additionalTokenFields
    }
  ) {
    instanceConfigVariable {
      refreshAt
      status
      meta
    }
    errors {
      field
      messages
    }
  }
}`,
    queryVariables: {
      configVarId:
        "SW5zdGFuY2VDb25maWdWYXJpYWJsZTpmMWI4ZGQzNi0yMzg0LTQ5MWUtOTE3ZC1iNTU1YjJiNzI2MmQ=",
      accessToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiLwn5GNIFByaXNtYXRpYyIsIm5hbWUiOiLwn5GOIFRyYXkuaW8iLCJpYXQiOjE1MTYyMzkwMjJ9.xYUuI8BHov7C-E-ENa2Ox6z_L6StR1UjTuOqCaCnGTk",
      refreshToken: "super-secret-refresh-token",
      refreshAt: "2000-01-01T00:00:00.000Z",
      expiresIn: 60,
      additionalTokenFields: JSON.stringify({
        url: "https://example.com",
        tenantId: "12345",
      }),
    },
    title: "Import an OAuth 2.0 Connection",
  },

  // Find failed executions of an instance
  findFailedExecutions: {
    query: `query getFailedExecutions($instanceId: ID!, $startCursor: String) {
  executionResults(
    instance: $instanceId
    error_Isnull: false
    replayForExecution_Isnull: true
    after: $startCursor
  ) {
    nodes {
      id
      startedAt
      replays(error_Isnull: true) {
        nodes {
          id
          startedAt
        }
      }
      error
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}`,
    queryVariables: {
      instanceId:
        "SW5zdGFuY2U6ZGVkZDQ3ZjQtNmQ4OC00NjJmLWE5YmYtNWM1OGNiMTg0MDAy",
      startCursor: "",
    },
    title: "Query for Failed Executions",
  },

  // Replay a failed execution
  replayFailedExecution: {
    query: `mutation myReplayExecution($executionId: ID!) {
  replayExecution(input: {id: $executionId}) {
    instanceExecutionResult {
      id
    }
    errors {
      field
      messages
    }
  }
}`,
    queryVariables: {
      executionId:
        "SW5zdGFuY2VFeGVjdXRpb25SZXN1bHQ6NjBkZDliOWMtOGIyOS00NDQyLWFkNDctMjZkZTg5Y2NlNWM5",
    },
    title: "Replay a failed execution",
  },

  // Get instance config variables for "large files" quickstart
  largeFilesQueryInstanceConfigVariables: {
    query: `query getAcmeConnectionInfo($myInstanceId:ID!) {
    instance(id: $myInstanceId) {
      configVariables {
        nodes {
          id
          requiredConfigVariable {
            key
          }
          meta
          inputs {
            nodes {
              name
              value
            }
          }
        }
      }
    }
  }`,
    queryVariables: {
      myInstanceId:
        "SW5zdGFuY2U6NDY2MGQ4MDgtYjUwZS00NDdhLThhZmQtOWU0NzAxMzJkZThk",
    },
    title: "Query instance connection config variables",
  },
  integrationExternalVersions: {
    query: `query getIntegrationExternalVersions ($myIntegrationId: ID!) {
    integration(
      id: $myIntegrationId
    ) {
      versionSequence {
        nodes {
          versionNumber
          externalVersion
        }
      }
    }
  }`,
    queryVariables: {
      myIntegrationId:
        "SW50ZWdyYXRpb246ZDRjZjlmMWYtYWI5Mi00OTJiLWI1YzAtNThjNDkwOTUzM2Mw",
    },
    title: "Query for Integration External Versions",
  },
};

export default examples;
