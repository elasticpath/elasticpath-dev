---
id: "_index_"
title: "index"
sidebar_label: "index"
---

[@prismatic-io/spectral](../index.md) › ["index"](_index_.md)

## Index

### Functions

* [action](_index_.md#const-action)
* [component](_index_.md#const-component)
* [configPage](_index_.md#const-configpage)
* [configVar](_index_.md#const-configvar)
* [connection](_index_.md#const-connection)
* [connectionConfigVar](_index_.md#const-connectionconfigvar)
* [dataSource](_index_.md#const-datasource)
* [dataSourceConfigVar](_index_.md#const-datasourceconfigvar)
* [flow](_index_.md#const-flow)
* [input](_index_.md#const-input)
* [integration](_index_.md#const-integration)
* [oauth2Connection](_index_.md#const-oauth2connection)
* [onPremiseConnection](_index_.md#const-onpremiseconnection)
* [reference](_index_.md#const-reference)
* [trigger](_index_.md#const-trigger)

## Functions

### `Const` action

▸ **action**‹**TInputs**, **TConfigVar**, **TAllowsBranching**, **TReturn**›(`definition`: [ActionDefinition](../interfaces/_types_actiondefinition_.actiondefinition.md)‹TInputs, TConfigVar, TAllowsBranching, TReturn›): *[ActionDefinition](../interfaces/_types_actiondefinition_.actiondefinition.md)‹TInputs, TConfigVar, TAllowsBranching, TReturn›*

*Defined in [packages/spectral/src/index.ts:151](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/index.ts#L151)*

This function creates an action object that can be referenced
by a custom component. It helps ensure that the shape of the
action object conforms to what the Builder API expects.
For information on writing custom component actions, see
https://prismatic.io/docs/custom-components/writing-custom-components/#writing-actions.

**Type parameters:**

▪ **TInputs**: *[Inputs](_types_inputs_.md#inputs)*

▪ **TConfigVar**: *[ConfigVarResultCollection](_types_inputs_.md#configvarresultcollection)*

▪ **TAllowsBranching**: *boolean*

▪ **TReturn**: *[ActionPerformReturn](_types_actionperformreturn_.md#actionperformreturn)‹TAllowsBranching, unknown›*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`definition` | [ActionDefinition](../interfaces/_types_actiondefinition_.actiondefinition.md)‹TInputs, TConfigVar, TAllowsBranching, TReturn› | An ActionDefinition type object that includes UI display information, a function to perform when the action is invoked, and a an object containing inputs for the perform function. |

**Returns:** *[ActionDefinition](../interfaces/_types_actiondefinition_.actiondefinition.md)‹TInputs, TConfigVar, TAllowsBranching, TReturn›*

This function validates the shape of the `definition` object provided, and returns the same action object.

___

### `Const` component

▸ **component**‹**TPublic**, **TKey**›(`definition`: [ComponentDefinition](_types_componentdefinition_.md#componentdefinition)‹TPublic, TKey›): *ReturnType‹typeof convertComponent›*

*Defined in [packages/spectral/src/index.ts:138](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/index.ts#L138)*

This function creates a component object that can be
imported into the Builder API. For information on using
this function to write custom components, see
https://prismatic.io/docs/custom-components/writing-custom-components/#exporting-a-component.

**Type parameters:**

▪ **TPublic**: *boolean*

▪ **TKey**: *string*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`definition` | [ComponentDefinition](_types_componentdefinition_.md#componentdefinition)‹TPublic, TKey› | A ComponentDefinition type object, including display information, unique key, and a set of actions the component implements. |

**Returns:** *ReturnType‹typeof convertComponent›*

This function returns a component object that has the shape the Builder API expects.

___

### `Const` configPage

▸ **configPage**‹**T**›(`definition`: T): *T*

*Defined in [packages/spectral/src/index.ts:81](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/index.ts#L81)*

For information on writing Code Native Integrations, see
https://prismatic.io/docs/code-native-integrations/#adding-config-pages.

**Type parameters:**

▪ **T**: *[ConfigPage](_types_integrationdefinition_.md#configpage)‹any›*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`definition` | T | A Config Page type object. |

**Returns:** *T*

This function returns a config page object that has the shape the Builder API expects.

___

### `Const` configVar

▸ **configVar**‹**T**›(`definition`: T): *T*

*Defined in [packages/spectral/src/index.ts:102](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/index.ts#L102)*

For information on writing Code Native Integrations, see
https://prismatic.io/docs/code-native-integrations/#adding-config-vars.

**Type parameters:**

▪ **T**: *[StandardConfigVar](_types_integrationdefinition_.md#standardconfigvar) | [ScheduleConfigVar](_types_integrationdefinition_.md#scheduleconfigvar)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`definition` | T | A Config Var type object. |

**Returns:** *T*

This function returns a standard config var object that has the shape the Builder API expects.

___

### `Const` connection

▸ **connection**‹**T**›(`definition`: T): *T*

*Defined in [packages/spectral/src/index.ts:213](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/index.ts#L213)*

For information on writing custom component connections, see
https://prismatic.io/docs/custom-components/writing-custom-components/#adding-connections.

**Type parameters:**

▪ **T**: *[DefaultConnectionDefinition](../interfaces/_types_connectiondefinition_.defaultconnectiondefinition.md)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`definition` | T | A DefaultConnectionDefinition object that describes the type of a connection for a custom component action or trigger, and information on how it should be displayed in the Builder WebApp. |

**Returns:** *T*

This functions validates the shape of the `definition` object provided and returns the same connection object.

___

### `Const` connectionConfigVar

▸ **connectionConfigVar**‹**T**›(`definition`: T): *T*

*Defined in [packages/spectral/src/index.ts:124](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/index.ts#L124)*

For information on writing Code Native Integrations, see
https://prismatic.io/docs/code-native-integrations/#adding-config-vars.

**Type parameters:**

▪ **T**: *[ConnectionConfigVar](_types_integrationdefinition_.md#connectionconfigvar)‹any›*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`definition` | T | A Connection Config Var type object. |

**Returns:** *T*

This function returns a connection config var object that has the shape the Builder API expects.

___

### `Const` dataSource

▸ **dataSource**‹**TInputs**, **TConfigVars**, **TDataSourceType**›(`definition`: [DataSourceDefinition](../interfaces/_types_datasourcedefinition_.datasourcedefinition.md)‹TInputs, TConfigVars, TDataSourceType›): *[DataSourceDefinition](../interfaces/_types_datasourcedefinition_.datasourcedefinition.md)‹TInputs, TConfigVars, TDataSourceType›*

*Defined in [packages/spectral/src/index.ts:189](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/index.ts#L189)*

This function creates a data source object that can be referenced
by a custom component. It helps ensure that the shape of the
data source object conforms to what the Builder API expects.
For information on writing custom component data sources, see
https://prismatic.io/docs/custom-components/writing-custom-components/#writing-data-sources.

**Type parameters:**

▪ **TInputs**: *[Inputs](_types_inputs_.md#inputs)*

▪ **TConfigVars**: *[ConfigVarResultCollection](_types_inputs_.md#configvarresultcollection)*

▪ **TDataSourceType**: *[DataSourceType](_types_datasourceresult_.md#datasourcetype)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`definition` | [DataSourceDefinition](../interfaces/_types_datasourcedefinition_.datasourcedefinition.md)‹TInputs, TConfigVars, TDataSourceType› | A DataSourceDefinition type object that includes UI display information, a function to perform when the data source is invoked, and a an object containing inputs for the perform function. |

**Returns:** *[DataSourceDefinition](../interfaces/_types_datasourcedefinition_.datasourcedefinition.md)‹TInputs, TConfigVars, TDataSourceType›*

This function validates the shape of the `definition` object provided, and returns the same data source object.

___

### `Const` dataSourceConfigVar

▸ **dataSourceConfigVar**‹**T**›(`definition`: T): *T*

*Defined in [packages/spectral/src/index.ts:112](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/index.ts#L112)*

For information on writing Code Native Integrations, see
https://prismatic.io/docs/code-native-integrations/#adding-config-vars.

**Type parameters:**

▪ **T**: *[DataSourceConfigVar](_types_integrationdefinition_.md#datasourceconfigvar)‹any›*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`definition` | T | A Data Source Config Var type object. |

**Returns:** *T*

This function returns a data source config var object that has the shape the Builder API expects.

___

### `Const` flow

▸ **flow**‹**TConfigPages**, **TComponents**, **TTriggerPayload**, **T**›(`definition`: T): *T*

*Defined in [packages/spectral/src/index.ts:62](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/index.ts#L62)*

For information on writing Code Native Integrations, see
https://prismatic.io/docs/code-native-integrations/#adding-flows.

**Type parameters:**

▪ **TConfigPages**: *[ConfigPages](_types_integrationdefinition_.md#configpages)‹any›*

▪ **TComponents**: *[ComponentSelector](../interfaces/_types_integrationdefinition_.componentselector.md)‹any›*

▪ **TTriggerPayload**: *[TriggerPayload](../interfaces/_types_triggerpayload_.triggerpayload.md)*

▪ **T**: *[Flow](../interfaces/_types_integrationdefinition_.flow.md)‹TConfigPages, TComponents, TTriggerPayload›*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`definition` | T | A Flow type object. |

**Returns:** *T*

This function returns a flow object that has the shape the Builder API expects.

___

### `Const` input

▸ **input**‹**T**›(`definition`: T): *T*

*Defined in [packages/spectral/src/index.ts:204](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/index.ts#L204)*

For information and examples on how to write inputs
for custom component actions and triggers, see
https://prismatic.io/docs/custom-components/writing-custom-components/#adding-inputs.

**Type parameters:**

▪ **T**: *[InputFieldDefinition](_types_inputs_.md#inputfielddefinition)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`definition` | T | An InputFieldDefinition object that describes the type of an input for a custom component action or trigger, and information on how it should be displayed in the Builder WebApp. |

**Returns:** *T*

This function validates the shape of the `definition` object provided, and returns the same input object.

___

### `Const` integration

▸ **integration**‹**T**›(`definition`: T): *ReturnType‹typeof convertIntegration›*

*Defined in [packages/spectral/src/index.ts:43](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/index.ts#L43)*

This function creates a Integration object that can be
imported into the Builder API. For information on using
this function to write code native integrations, see
https://prismatic.io/docs/code-native-integrations/.

**Type parameters:**

▪ **T**: *[IntegrationDefinition](_types_integrationdefinition_.md#integrationdefinition)‹any, any›*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`definition` | T | An IntegrationDefinition type object. |

**Returns:** *ReturnType‹typeof convertIntegration›*

This function returns an integration object that has the shape the Builder API expects.

___

### `Const` oauth2Connection

▸ **oauth2Connection**‹**T**›(`definition`: T): *T*

*Defined in [packages/spectral/src/index.ts:233](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/index.ts#L233)*

For information on writing custom component connections, see
https://prismatic.io/docs/custom-components/writing-custom-components/#adding-connections.

**Type parameters:**

▪ **T**: *[OAuth2ConnectionDefinition](_types_connectiondefinition_.md#oauth2connectiondefinition)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`definition` | T | An OAuth2ConnectionDefinition object that describes the type of a connection for a custom component action or trigger, and information on how it should be displayed in the Builder WebApp. |

**Returns:** *T*

This functions validates the shape of the `definition` object provided and returns the same connection object.

___

### `Const` onPremiseConnection

▸ **onPremiseConnection**‹**T**›(`definition`: T): *T*

*Defined in [packages/spectral/src/index.ts:223](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/index.ts#L223)*

For information on writing custom component connections using on-premise resources, see
https://prismatic.io/docs/custom-components/writing-custom-components/#adding-connections.

**Type parameters:**

▪ **T**: *[OnPremiseConnectionDefinition](../interfaces/_types_connectiondefinition_.onpremiseconnectiondefinition.md)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`definition` | T | An OnPremiseConnectionDefinition object that describes the type of a connection for a custom component action or trigger, and information on how it should be displayed in the Builder WebApp. |

**Returns:** *T*

This function validates the shape of the `definition` object provided and returns the same connection object.

___

### `Const` reference

▸ **reference**‹**TComponents**›(): *object*

*Defined in [packages/spectral/src/index.ts:88](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/index.ts#L88)*

**Type parameters:**

▪ **TComponents**: *[ComponentSelector](../interfaces/_types_integrationdefinition_.componentselector.md)‹any›*

**Returns:** *object*

Helper utility to create component references.

* **connection**(): *function*

  * ‹**T**›(`definition`: T): *T*

* **dataSource**(): *function*

  * ‹**T**›(`definition`: T): *T*

___

### `Const` trigger

▸ **trigger**‹**TInputs**, **TConfigVar**, **TAllowsBranching**, **TResult**›(`definition`: [TriggerDefinition](../interfaces/_types_triggerdefinition_.triggerdefinition.md)‹TInputs, TConfigVar, TAllowsBranching, TResult›): *[TriggerDefinition](../interfaces/_types_triggerdefinition_.triggerdefinition.md)‹TInputs, TConfigVar, TAllowsBranching, TResult›*

*Defined in [packages/spectral/src/index.ts:170](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/index.ts#L170)*

This function creates a trigger object that can be referenced
by a custom component. It helps ensure that the shape of the
trigger object conforms to what the Builder API expects.
For information on writing custom component triggers, see
https://prismatic.io/docs/custom-components/writing-custom-components/#writing-triggers.

**Type parameters:**

▪ **TInputs**: *[Inputs](_types_inputs_.md#inputs)*

▪ **TConfigVar**: *[ConfigVarResultCollection](_types_inputs_.md#configvarresultcollection)*

▪ **TAllowsBranching**: *boolean*

▪ **TResult**: *[TriggerResult](_types_triggerresult_.md#triggerresult)‹TAllowsBranching, [TriggerPayload](../interfaces/_types_triggerpayload_.triggerpayload.md)›*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`definition` | [TriggerDefinition](../interfaces/_types_triggerdefinition_.triggerdefinition.md)‹TInputs, TConfigVar, TAllowsBranching, TResult› | A TriggerDefinition type object that includes UI display information, a function to perform when the trigger is invoked, and a an object containing inputs for the perform function. |

**Returns:** *[TriggerDefinition](../interfaces/_types_triggerdefinition_.triggerdefinition.md)‹TInputs, TConfigVar, TAllowsBranching, TResult›*

This function validates the shape of the `definition` object provided, and returns the same trigger object.
