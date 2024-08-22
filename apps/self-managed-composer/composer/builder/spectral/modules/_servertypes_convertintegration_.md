---
id: "_servertypes_convertintegration_"
title: "serverTypes/convertIntegration"
sidebar_label: "serverTypes/convertIntegration"
---

[@prismatic-io/spectral](../index.md) › ["serverTypes/convertIntegration"](_servertypes_convertintegration_.md)

## Index

### Functions

* [codeNativeIntegrationComponent](_servertypes_convertintegration_.md#const-codenativeintegrationcomponent)
* [codeNativeIntegrationYaml](_servertypes_convertintegration_.md#const-codenativeintegrationyaml)
* [convertComponentReference](_servertypes_convertintegration_.md#const-convertcomponentreference)
* [convertConfigPages](_servertypes_convertintegration_.md#const-convertconfigpages)
* [convertConfigVar](_servertypes_convertintegration_.md#const-convertconfigvar)
* [convertFlow](_servertypes_convertintegration_.md#const-convertflow)
* [convertIntegration](_servertypes_convertintegration_.md#const-convertintegration)
* [fieldNameToReferenceInput](_servertypes_convertintegration_.md#const-fieldnametoreferenceinput)
* [flowFunctionKey](_servertypes_convertintegration_.md#const-flowfunctionkey)

## Functions

### `Const` codeNativeIntegrationComponent

▸ **codeNativeIntegrationComponent**(`__namedParameters`: object, `referenceKey`: string, `configVars`: Record‹string, [ConfigVar](_types_integrationdefinition_.md#configvar)‹any››): *ServerComponent*

*Defined in [packages/spectral/src/serverTypes/convertIntegration.ts:403](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/serverTypes/convertIntegration.ts#L403)*

Creates the structure necessary to import a Component as part of a
 Code Native integration.

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`description` | undefined &#124; string | - |
`flows` | [Flow](../interfaces/_types_integrationdefinition_.flow.md)‹object, [ComponentSelector](../interfaces/_types_integrationdefinition_.componentselector.md)‹any›, [TriggerPayload](../interfaces/_types_triggerpayload_.triggerpayload.md)›[] | [] |
`iconPath` | undefined &#124; string | - |
`name` | string | - |

▪ **referenceKey**: *string*

▪ **configVars**: *Record‹string, [ConfigVar](_types_integrationdefinition_.md#configvar)‹any››*

**Returns:** *ServerComponent*

___

### `Const` codeNativeIntegrationYaml

▸ **codeNativeIntegrationYaml**(`__namedParameters`: object, `referenceKey`: string, `configVars`: Record‹string, [ConfigVar](_types_integrationdefinition_.md#configvar)‹any››): *string*

*Defined in [packages/spectral/src/serverTypes/convertIntegration.ts:82](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/serverTypes/convertIntegration.ts#L82)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`category` | undefined &#124; string |
`configPages` | undefined &#124; object |
`description` | undefined &#124; string |
`documentation` | undefined &#124; string |
`endpointType` | undefined &#124; "flow_specific" &#124; "instance_specific" &#124; "shared_instance" |
`flows` | [Flow](../interfaces/_types_integrationdefinition_.flow.md)‹object, [ComponentSelector](../interfaces/_types_integrationdefinition_.componentselector.md)‹any›, [TriggerPayload](../interfaces/_types_triggerpayload_.triggerpayload.md)›[] |
`labels` | undefined &#124; string[] |
`name` | string |
`triggerPreprocessFlowConfig` | undefined &#124; object |
`version` | undefined &#124; string |

▪ **referenceKey**: *string*

▪ **configVars**: *Record‹string, [ConfigVar](_types_integrationdefinition_.md#configvar)‹any››*

**Returns:** *string*

___

### `Const` convertComponentReference

▸ **convertComponentReference**‹**TValue**›(`__namedParameters`: object): *object*

*Defined in [packages/spectral/src/serverTypes/convertIntegration.ts:164](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/serverTypes/convertIntegration.ts#L164)*

**Type parameters:**

▪ **TValue**

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`componentRef` | string &#124; object |
`key` | string |
`values` | undefined &#124; object |

**Returns:** *object*

* **inputs**: *Record‹string, ServerInput›*

* **ref**: *ServerComponentReference*

___

### `Const` convertConfigPages

▸ **convertConfigPages**(`pages`: [ConfigPages](_types_integrationdefinition_.md#configpages)‹any›): *ServerConfigPage[] | undefined*

*Defined in [packages/spectral/src/serverTypes/convertIntegration.ts:63](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/serverTypes/convertIntegration.ts#L63)*

**Parameters:**

Name | Type |
------ | ------ |
`pages` | [ConfigPages](_types_integrationdefinition_.md#configpages)‹any› |

**Returns:** *ServerConfigPage[] | undefined*

___

### `Const` convertConfigVar

▸ **convertConfigVar**(`key`: string, `configVar`: [ConfigVar](_types_integrationdefinition_.md#configvar)‹any›, `referenceKey`: string): *ServerRequiredConfigVariable*

*Defined in [packages/spectral/src/serverTypes/convertIntegration.ts:281](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/serverTypes/convertIntegration.ts#L281)*

Converts a Config Var into the structure necessary for YAML generation.

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`configVar` | [ConfigVar](_types_integrationdefinition_.md#configvar)‹any› |
`referenceKey` | string |

**Returns:** *ServerRequiredConfigVariable*

___

### `Const` convertFlow

▸ **convertFlow**(`flow`: [Flow](../interfaces/_types_integrationdefinition_.flow.md)‹[ConfigPages](_types_integrationdefinition_.md#configpages)‹any›, any›, `referenceKey`: string): *Record‹string, unknown›*

*Defined in [packages/spectral/src/serverTypes/convertIntegration.ts:205](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/serverTypes/convertIntegration.ts#L205)*

Converts a Flow into the structure necessary for YAML generation.

**Parameters:**

Name | Type |
------ | ------ |
`flow` | [Flow](../interfaces/_types_integrationdefinition_.flow.md)‹[ConfigPages](_types_integrationdefinition_.md#configpages)‹any›, any› |
`referenceKey` | string |

**Returns:** *Record‹string, unknown›*

___

### `Const` convertIntegration

▸ **convertIntegration**(`definition`: [IntegrationDefinition](_types_integrationdefinition_.md#integrationdefinition)‹[ConfigPages](_types_integrationdefinition_.md#configpages)‹any›, [ComponentSelector](../interfaces/_types_integrationdefinition_.componentselector.md)‹any››): *ServerComponent*

*Defined in [packages/spectral/src/serverTypes/convertIntegration.ts:38](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/serverTypes/convertIntegration.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`definition` | [IntegrationDefinition](_types_integrationdefinition_.md#integrationdefinition)‹[ConfigPages](_types_integrationdefinition_.md#configpages)‹any›, [ComponentSelector](../interfaces/_types_integrationdefinition_.componentselector.md)‹any›› |

**Returns:** *ServerComponent*

___

### `Const` fieldNameToReferenceInput

▸ **fieldNameToReferenceInput**(`stepName`: string, `fieldName`: string | null | undefined): *ServerInput | undefined*

*Defined in [packages/spectral/src/serverTypes/convertIntegration.ts:372](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/serverTypes/convertIntegration.ts#L372)*

Maps the step name field to a fully qualified input.

**Parameters:**

Name | Type |
------ | ------ |
`stepName` | string |
`fieldName` | string &#124; null &#124; undefined |

**Returns:** *ServerInput | undefined*

___

### `Const` flowFunctionKey

▸ **flowFunctionKey**(`flowName`: string, `functionName`: "onExecution" | "onTrigger"): *string*

*Defined in [packages/spectral/src/serverTypes/convertIntegration.ts:383](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/serverTypes/convertIntegration.ts#L383)*

Actions and Triggers will be scoped to their flow by combining the flow
 name and the function name. This is to ensure that the keys are unique
 on the resulting object, which will be turned into a Component.

**Parameters:**

Name | Type |
------ | ------ |
`flowName` | string |
`functionName` | "onExecution" &#124; "onTrigger" |

**Returns:** *string*
