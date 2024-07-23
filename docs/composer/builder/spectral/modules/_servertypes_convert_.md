---
id: "_servertypes_convert_"
title: "serverTypes/convert"
sidebar_label: "serverTypes/convert"
---

[@prismatic-io/spectral](../index.md) › ["serverTypes/convert"](_servertypes_convert_.md)

## Index

### Functions

* [convertAction](_servertypes_convert_.md#const-convertaction)
* [convertComponent](_servertypes_convert_.md#const-convertcomponent)
* [convertConnection](_servertypes_convert_.md#const-convertconnection)
* [convertDataSource](_servertypes_convert_.md#const-convertdatasource)
* [convertInput](_servertypes_convert_.md#const-convertinput)
* [convertTrigger](_servertypes_convert_.md#const-converttrigger)

## Functions

### `Const` convertAction

▸ **convertAction**(`actionKey`: string, `__namedParameters`: object, `hooks?`: [ComponentHooks](../interfaces/_types_componentdefinition_.componenthooks.md)): *ServerAction*

*Defined in [packages/spectral/src/serverTypes/convert.ts:49](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/serverTypes/convert.ts#L49)*

**Parameters:**

▪ **actionKey**: *string*

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`action` | action |
`inputs` | object |
`perform` | function |

▪`Optional`  **hooks**: *[ComponentHooks](../interfaces/_types_componentdefinition_.componenthooks.md)*

**Returns:** *ServerAction*

___

### `Const` convertComponent

▸ **convertComponent**‹**TPublic**, **TKey**›(`__namedParameters`: object): *ServerComponent*

*Defined in [packages/spectral/src/serverTypes/convert.ts:167](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/serverTypes/convert.ts#L167)*

**Type parameters:**

▪ **TPublic**: *boolean*

▪ **TKey**: *string*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`actions` | object | - |
`connections` | ([DefaultConnectionDefinition](../interfaces/_types_connectiondefinition_.defaultconnectiondefinition.md) &#124; [OnPremiseConnectionDefinition](../interfaces/_types_connectiondefinition_.onpremiseconnectiondefinition.md) &#124; [OAuth2AuthorizationCodeConnectionDefinition](../interfaces/_types_connectiondefinition_.oauth2authorizationcodeconnectiondefinition.md) &#124; [OAuth2ClientCredentialConnectionDefinition](../interfaces/_types_connectiondefinition_.oauth2clientcredentialconnectiondefinition.md))[] | [] |
`dataSources` | object | - |
`definition` | object | - |
`hooks` | undefined &#124; [ComponentHooks](../interfaces/_types_componentdefinition_.componenthooks.md) | - |
`triggers` | object | - |

**Returns:** *ServerComponent*

___

### `Const` convertConnection

▸ **convertConnection**(`__namedParameters`: object): *ServerConnection*

*Defined in [packages/spectral/src/serverTypes/convert.ts:153](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/serverTypes/convert.ts#L153)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`connection` | connection &#124; connection &#124; connection &#124; connection |
`inputs` | object &#124; object &#124; object &#124; object |

**Returns:** *ServerConnection*

___

### `Const` convertDataSource

▸ **convertDataSource**(`dataSourceKey`: string, `__namedParameters`: object, `hooks?`: [ComponentHooks](../interfaces/_types_componentdefinition_.componenthooks.md)): *ServerDataSource*

*Defined in [packages/spectral/src/serverTypes/convert.ts:125](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/serverTypes/convert.ts#L125)*

**Parameters:**

▪ **dataSourceKey**: *string*

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`dataSource` | dataSource |
`inputs` | object |
`perform` | function |

▪`Optional`  **hooks**: *[ComponentHooks](../interfaces/_types_componentdefinition_.componenthooks.md)*

**Returns:** *ServerDataSource*

___

### `Const` convertInput

▸ **convertInput**(`key`: string, `__namedParameters`: object): *ServerInput*

*Defined in [packages/spectral/src/serverTypes/convert.ts:23](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/serverTypes/convert.ts#L23)*

**Parameters:**

▪ **key**: *string*

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`collection` | undefined &#124; "valuelist" &#124; "keyvaluelist" |
`defaultValue` | unknown |
`label` | string &#124; object |
`rest` | rest &#124; rest &#124; rest &#124; rest &#124; rest &#124; rest &#124; rest &#124; rest &#124; rest &#124; rest &#124; rest &#124; rest &#124; rest &#124; rest &#124; rest &#124; rest &#124; rest &#124; rest &#124; rest &#124; rest &#124; rest &#124; rest &#124; rest &#124; rest &#124; rest |
`type` | "string" &#124; "boolean" &#124; "conditional" &#124; "connection" &#124; "objectSelection" &#124; "objectFieldMap" &#124; "jsonForm" &#124; "dynamicObjectSelection" &#124; "dynamicFieldSelection" &#124; "data" &#124; "text" &#124; "password" &#124; "code" |

**Returns:** *ServerInput*

___

### `Const` convertTrigger

▸ **convertTrigger**(`triggerKey`: string, `__namedParameters`: object, `hooks?`: [ComponentHooks](../interfaces/_types_componentdefinition_.componenthooks.md)): *ServerTrigger*

*Defined in [packages/spectral/src/serverTypes/convert.ts:77](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/serverTypes/convert.ts#L77)*

**Parameters:**

▪ **triggerKey**: *string*

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`inputs` | object |
`onInstanceDelete` | undefined &#124; function |
`onInstanceDeploy` | undefined &#124; function |
`perform` | function |
`trigger` | trigger |

▪`Optional`  **hooks**: *[ComponentHooks](../interfaces/_types_componentdefinition_.componenthooks.md)*

**Returns:** *ServerTrigger*
