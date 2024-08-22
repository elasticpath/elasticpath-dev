---
id: "_types_integrationdefinition_"
title: "types/IntegrationDefinition"
sidebar_label: "types/IntegrationDefinition"
---

[@prismatic-io/spectral](../index.md) › ["types/IntegrationDefinition"](_types_integrationdefinition_.md)

## Index

### Interfaces

* [ComponentReference](../interfaces/_types_integrationdefinition_.componentreference.md)
* [ComponentSelector](../interfaces/_types_integrationdefinition_.componentselector.md)
* [Flow](../interfaces/_types_integrationdefinition_.flow.md)

### Type aliases

* [BaseConfigVar](_types_integrationdefinition_.md#baseconfigvar)
* [CodeLanguageType](_types_integrationdefinition_.md#codelanguagetype)
* [CollectionType](_types_integrationdefinition_.md#collectiontype)
* [ComponentSelectorType](_types_integrationdefinition_.md#componentselectortype)
* [ConfigPage](_types_integrationdefinition_.md#configpage)
* [ConfigPageElement](_types_integrationdefinition_.md#configpageelement)
* [ConfigPages](_types_integrationdefinition_.md#configpages)
* [ConfigVar](_types_integrationdefinition_.md#configvar)
* [ConfigVarDataType](_types_integrationdefinition_.md#configvardatatype)
* [ConnectionConfigVar](_types_integrationdefinition_.md#connectionconfigvar)
* [ConnectionDefinitionConfigVar](_types_integrationdefinition_.md#connectiondefinitionconfigvar)
* [ConnectionReferenceConfigVar](_types_integrationdefinition_.md#connectionreferenceconfigvar)
* [DataSourceConfigVar](_types_integrationdefinition_.md#datasourceconfigvar)
* [DataSourceDefinitionConfigVar](_types_integrationdefinition_.md#datasourcedefinitionconfigvar)
* [DataSourceReferenceConfigVar](_types_integrationdefinition_.md#datasourcereferenceconfigvar)
* [ElementToRuntimeType](_types_integrationdefinition_.md#elementtoruntimetype)
* [EndpointSecurityType](_types_integrationdefinition_.md#endpointsecuritytype)
* [EndpointType](_types_integrationdefinition_.md#endpointtype)
* [ExtractConfigVars](_types_integrationdefinition_.md#extractconfigvars)
* [GetElements](_types_integrationdefinition_.md#getelements)
* [IntegrationDefinition](_types_integrationdefinition_.md#integrationdefinition)
* [PreprocessFlowConfig](_types_integrationdefinition_.md#preprocessflowconfig)
* [RetryConfig](_types_integrationdefinition_.md#retryconfig)
* [ScheduleConfigVar](_types_integrationdefinition_.md#scheduleconfigvar)
* [StandardConfigVar](_types_integrationdefinition_.md#standardconfigvar)
* [StepErrorConfig](_types_integrationdefinition_.md#steperrorconfig)
* [StepErrorHandlerType](_types_integrationdefinition_.md#steperrorhandlertype)
* [ToComponentReferences](_types_integrationdefinition_.md#tocomponentreferences)
* [ToDataSourceRuntimeType](_types_integrationdefinition_.md#todatasourceruntimetype)
* [ValueReference](_types_integrationdefinition_.md#valuereference)

### Functions

* [isComponentReference](_types_integrationdefinition_.md#const-iscomponentreference)
* [isConnectionDefinitionConfigVar](_types_integrationdefinition_.md#const-isconnectiondefinitionconfigvar)
* [isConnectionReferenceConfigVar](_types_integrationdefinition_.md#const-isconnectionreferenceconfigvar)
* [isDataSourceDefinitionConfigVar](_types_integrationdefinition_.md#const-isdatasourcedefinitionconfigvar)
* [isDataSourceReferenceConfigVar](_types_integrationdefinition_.md#const-isdatasourcereferenceconfigvar)
* [isScheduleConfigVar](_types_integrationdefinition_.md#const-isscheduleconfigvar)

## Type aliases

###  BaseConfigVar

Ƭ **BaseConfigVar**: *object*

*Defined in [packages/spectral/src/types/IntegrationDefinition.ts:148](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/IntegrationDefinition.ts#L148)*

Common attribute shared by all types of Config Vars.

#### Type declaration:

* **description**? : *undefined | string*

* **orgOnly**? : *undefined | false | true*

* **stableKey**: *string*

* **visibleToCustomerDeployer**? : *undefined | false | true*

* **visibleToOrgDeployer**? : *undefined | false | true*

___

###  CodeLanguageType

Ƭ **CodeLanguageType**: *"json" | "xml" | "html"*

*Defined in [packages/spectral/src/types/IntegrationDefinition.ts:330](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/IntegrationDefinition.ts#L330)*

Choices of programming languages that may be used for Config Var code values.

___

###  CollectionType

Ƭ **CollectionType**: *"valuelist" | "keyvaluelist"*

*Defined in [packages/spectral/src/types/IntegrationDefinition.ts:333](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/IntegrationDefinition.ts#L333)*

Choices of collection types for multi-value Config Vars.

___

###  ComponentSelectorType

Ƭ **ComponentSelectorType**: *"trigger" | "connection" | "dataSource"*

*Defined in [packages/spectral/src/types/IntegrationDefinition.ts:336](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/IntegrationDefinition.ts#L336)*

Choices of component reference types.

___

###  ConfigPage

Ƭ **ConfigPage**: *object*

*Defined in [packages/spectral/src/types/IntegrationDefinition.ts:259](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/IntegrationDefinition.ts#L259)*

Defines attributes of a Config Wizard Page used when deploying an Instance of an Integration.

#### Type declaration:

* **elements**: *Record‹string, [ConfigPageElement](_types_integrationdefinition_.md#configpageelement)‹TComponents››*

* **tagline**? : *undefined | string*

___

###  ConfigPageElement

Ƭ **ConfigPageElement**: *string | [ConfigVar](_types_integrationdefinition_.md#configvar)‹TComponents›*

*Defined in [packages/spectral/src/types/IntegrationDefinition.ts:249](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/IntegrationDefinition.ts#L249)*

___

###  ConfigPages

Ƭ **ConfigPages**: *Record‹string, [ConfigPage](_types_integrationdefinition_.md#configpage)‹TComponents››*

*Defined in [packages/spectral/src/types/IntegrationDefinition.ts:253](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/IntegrationDefinition.ts#L253)*

___

###  ConfigVar

Ƭ **ConfigVar**: *[StandardConfigVar](_types_integrationdefinition_.md#standardconfigvar) | [ScheduleConfigVar](_types_integrationdefinition_.md#scheduleconfigvar) | [DataSourceConfigVar](_types_integrationdefinition_.md#datasourceconfigvar)‹TComponents› | [ConnectionConfigVar](_types_integrationdefinition_.md#connectionconfigvar)‹TComponents›*

*Defined in [packages/spectral/src/types/IntegrationDefinition.ts:216](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/IntegrationDefinition.ts#L216)*

___

###  ConfigVarDataType

Ƭ **ConfigVarDataType**: *"string" | "date" | "timestamp" | "picklist" | "schedule" | "code" | "boolean" | "number"*

*Defined in [packages/spectral/src/types/IntegrationDefinition.ts:319](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/IntegrationDefinition.ts#L319)*

Supported data types for Config Vars.

___

###  ConnectionConfigVar

Ƭ **ConnectionConfigVar**: *[ConnectionDefinitionConfigVar](_types_integrationdefinition_.md#connectiondefinitionconfigvar) | [ConnectionReferenceConfigVar](_types_integrationdefinition_.md#connectionreferenceconfigvar)‹TComponents›*

*Defined in [packages/spectral/src/types/IntegrationDefinition.ts:212](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/IntegrationDefinition.ts#L212)*

Defines attributes of a Config Var that represents a Connection.

___

###  ConnectionDefinitionConfigVar

Ƭ **ConnectionDefinitionConfigVar**: *[BaseConfigVar](_types_integrationdefinition_.md#baseconfigvar) & Omit‹[ConnectionDefinition](_types_connectiondefinition_.md#connectiondefinition), "label" | "comments" | "key"›*

*Defined in [packages/spectral/src/types/IntegrationDefinition.ts:204](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/IntegrationDefinition.ts#L204)*

___

###  ConnectionReferenceConfigVar

Ƭ **ConnectionReferenceConfigVar**: *[BaseConfigVar](_types_integrationdefinition_.md#baseconfigvar) & object*

*Defined in [packages/spectral/src/types/IntegrationDefinition.ts:206](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/IntegrationDefinition.ts#L206)*

___

###  DataSourceConfigVar

Ƭ **DataSourceConfigVar**: *[DataSourceDefinitionConfigVar](_types_integrationdefinition_.md#datasourcedefinitionconfigvar) | [DataSourceReferenceConfigVar](_types_integrationdefinition_.md#datasourcereferenceconfigvar)‹TComponents›*

*Defined in [packages/spectral/src/types/IntegrationDefinition.ts:200](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/IntegrationDefinition.ts#L200)*

Defines attributes of a data source Config Var.

___

###  DataSourceDefinitionConfigVar

Ƭ **DataSourceDefinitionConfigVar**: *[BaseConfigVar](_types_integrationdefinition_.md#baseconfigvar) & Omit‹[DataSourceDefinition](../interfaces/_types_datasourcedefinition_.datasourcedefinition.md)‹[Inputs](_types_inputs_.md#inputs), [ConfigVarResultCollection](_types_inputs_.md#configvarresultcollection), [DataSourceType](_types_datasourceresult_.md#datasourcetype)›, "display" | "inputs" | "examplePayload"›*

*Defined in [packages/spectral/src/types/IntegrationDefinition.ts:184](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/IntegrationDefinition.ts#L184)*

___

###  DataSourceReferenceConfigVar

Ƭ **DataSourceReferenceConfigVar**: *[BaseConfigVar](_types_integrationdefinition_.md#baseconfigvar) & object*

*Defined in [packages/spectral/src/types/IntegrationDefinition.ts:189](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/IntegrationDefinition.ts#L189)*

___

###  ElementToRuntimeType

Ƭ **ElementToRuntimeType**: *TElement extends ConnectionConfigVar‹any› ? Connection : TElement extends DataSourceConfigVar‹any› ? ToDataSourceRuntimeType‹TElement["dataSourceType"]› : TElement extends ScheduleConfigVar ? Schedule : TElement extends StandardConfigVar ? string : never*

*Defined in [packages/spectral/src/types/IntegrationDefinition.ts:30](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/IntegrationDefinition.ts#L30)*

___

###  EndpointSecurityType

Ƭ **EndpointSecurityType**: *"unsecured" | "customer_optional" | "customer_required" | "organization"*

*Defined in [packages/spectral/src/types/IntegrationDefinition.ts:309](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/IntegrationDefinition.ts#L309)*

Choices of Endpoint Security Types that may be used by endpoints of a Flow.

___

###  EndpointType

Ƭ **EndpointType**: *"flow_specific" | "instance_specific" | "shared_instance"*

*Defined in [packages/spectral/src/types/IntegrationDefinition.ts:303](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/IntegrationDefinition.ts#L303)*

Choices of Endpoint Types that may be used by Instances of an Integration.

___

###  ExtractConfigVars

Ƭ **ExtractConfigVars**: *[Prettify](_types_utils_.md#prettify)‹object›*

*Defined in [packages/spectral/src/types/IntegrationDefinition.ts:46](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/IntegrationDefinition.ts#L46)*

___

###  GetElements

Ƭ **GetElements**: *TConfigPages extends ConfigPages‹any› ? UnionToIntersection‹ValueOf‹TConfigPages›["elements"]› : never*

*Defined in [packages/spectral/src/types/IntegrationDefinition.ts:41](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/IntegrationDefinition.ts#L41)*

___

###  IntegrationDefinition

Ƭ **IntegrationDefinition**: *object*

*Defined in [packages/spectral/src/types/IntegrationDefinition.ts:56](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/IntegrationDefinition.ts#L56)*

Defines attributes of a Code-Native Integration.

#### Type declaration:

* **category**? : *undefined | string*

* **configPages**? : *TConfigPages*

* **description**? : *undefined | string*

* **documentation**? : *undefined | string*

* **endpointType**? : *[EndpointType](_types_integrationdefinition_.md#endpointtype)*

* **flows**: *[Flow](../interfaces/_types_integrationdefinition_.flow.md)‹TConfigPages, TComponents›[]*

* **iconPath**? : *undefined | string*

* **labels**? : *string[]*

* **name**: *string*

* **triggerPreprocessFlowConfig**? : *[PreprocessFlowConfig](_types_integrationdefinition_.md#preprocessflowconfig)*

* **version**? : *undefined | string*

___

###  PreprocessFlowConfig

Ƭ **PreprocessFlowConfig**: *object*

*Defined in [packages/spectral/src/types/IntegrationDefinition.ts:267](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/IntegrationDefinition.ts#L267)*

Defines attributes of a Preprocess Flow Configuration used by a Flow of an Integration.

#### Type declaration:

* **externalCustomerIdField**? : *undefined | string*

* **externalCustomerUserIdField**? : *undefined | string*

* **flowNameField**: *string*

___

###  RetryConfig

Ƭ **RetryConfig**: *object*

*Defined in [packages/spectral/src/types/IntegrationDefinition.ts:277](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/IntegrationDefinition.ts#L277)*

Defines attributes of a Retry Configuration used by a Flow of an Integration.

#### Type declaration:

* **delayMinutes**: *number*

* **maxAttempts**: *number*

* **uniqueRequestIdField**? : *undefined | string*

* **usesExponentialBackoff**: *boolean*

___

###  ScheduleConfigVar

Ƭ **ScheduleConfigVar**: *[BaseConfigVar](_types_integrationdefinition_.md#baseconfigvar) & object*

*Defined in [packages/spectral/src/types/IntegrationDefinition.ts:175](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/IntegrationDefinition.ts#L175)*

___

###  StandardConfigVar

Ƭ **StandardConfigVar**: *[BaseConfigVar](_types_integrationdefinition_.md#baseconfigvar) & object*

*Defined in [packages/spectral/src/types/IntegrationDefinition.ts:162](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/IntegrationDefinition.ts#L162)*

Defines attributes of a standard Config Var.

___

###  StepErrorConfig

Ƭ **StepErrorConfig**: *object*

*Defined in [packages/spectral/src/types/IntegrationDefinition.ts:289](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/IntegrationDefinition.ts#L289)*

Defines attributes of a Step Error Configuration used to determine how to handle errors during Flow step execution.

#### Type declaration:

* **delaySeconds**? : *undefined | number*

* **errorHandlerType**: *[StepErrorHandlerType](_types_integrationdefinition_.md#steperrorhandlertype)*

* **ignoreFinalError**? : *undefined | false | true*

* **maxAttempts**? : *undefined | number*

* **usesExponentialBackoff**? : *undefined | false | true*

___

###  StepErrorHandlerType

Ƭ **StepErrorHandlerType**: *"fail" | "ignore" | "retry"*

*Defined in [packages/spectral/src/types/IntegrationDefinition.ts:316](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/IntegrationDefinition.ts#L316)*

Choices of Step Error Handlers that define the behavior when a step error occurs.

___

###  ToComponentReferences

Ƭ **ToComponentReferences**: *TComponents extends ComponentSelector‹infer TValueType› ? TComponents["type"] extends TReferenceType ? object : never : never*

*Defined in [packages/spectral/src/types/IntegrationDefinition.ts:355](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/IntegrationDefinition.ts#L355)*

___

###  ToDataSourceRuntimeType

Ƭ **ToDataSourceRuntimeType**: *TType extends "jsonForm" ? JSONForm : TType extends "objectSelection" ? ObjectSelection : TType extends "objectFieldMap" ? ObjectFieldMap : string*

*Defined in [packages/spectral/src/types/IntegrationDefinition.ts:21](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/IntegrationDefinition.ts#L21)*

___

###  ValueReference

Ƭ **ValueReference**: *object*

*Defined in [packages/spectral/src/types/IntegrationDefinition.ts:338](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/IntegrationDefinition.ts#L338)*

## Functions

### `Const` isComponentReference

▸ **isComponentReference**(`ref`: unknown): *ref is ComponentReference‹any, ConfigPages‹any››*

*Defined in [packages/spectral/src/types/IntegrationDefinition.ts:383](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/IntegrationDefinition.ts#L383)*

**Parameters:**

Name | Type |
------ | ------ |
`ref` | unknown |

**Returns:** *ref is ComponentReference‹any, ConfigPages‹any››*

___

### `Const` isConnectionDefinitionConfigVar

▸ **isConnectionDefinitionConfigVar**(`cv`: [ConfigVar](_types_integrationdefinition_.md#configvar)‹any›): *cv is ConnectionDefinitionConfigVar*

*Defined in [packages/spectral/src/types/IntegrationDefinition.ts:238](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/IntegrationDefinition.ts#L238)*

**Parameters:**

Name | Type |
------ | ------ |
`cv` | [ConfigVar](_types_integrationdefinition_.md#configvar)‹any› |

**Returns:** *cv is ConnectionDefinitionConfigVar*

___

### `Const` isConnectionReferenceConfigVar

▸ **isConnectionReferenceConfigVar**‹**TComponents**›(`cv`: [ConfigVar](_types_integrationdefinition_.md#configvar)‹TComponents›): *cv is ConnectionReferenceConfigVar‹TComponents›*

*Defined in [packages/spectral/src/types/IntegrationDefinition.ts:242](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/IntegrationDefinition.ts#L242)*

**Type parameters:**

▪ **TComponents**: *[ComponentSelector](../interfaces/_types_integrationdefinition_.componentselector.md)‹any›*

**Parameters:**

Name | Type |
------ | ------ |
`cv` | [ConfigVar](_types_integrationdefinition_.md#configvar)‹TComponents› |

**Returns:** *cv is ConnectionReferenceConfigVar‹TComponents›*

___

### `Const` isDataSourceDefinitionConfigVar

▸ **isDataSourceDefinitionConfigVar**(`cv`: [ConfigVar](_types_integrationdefinition_.md#configvar)‹any›): *cv is DataSourceDefinitionConfigVar*

*Defined in [packages/spectral/src/types/IntegrationDefinition.ts:226](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/IntegrationDefinition.ts#L226)*

**Parameters:**

Name | Type |
------ | ------ |
`cv` | [ConfigVar](_types_integrationdefinition_.md#configvar)‹any› |

**Returns:** *cv is DataSourceDefinitionConfigVar*

___

### `Const` isDataSourceReferenceConfigVar

▸ **isDataSourceReferenceConfigVar**‹**TComponents**›(`cv`: [ConfigVar](_types_integrationdefinition_.md#configvar)‹TComponents›): *cv is DataSourceReferenceConfigVar‹TComponents›*

*Defined in [packages/spectral/src/types/IntegrationDefinition.ts:231](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/IntegrationDefinition.ts#L231)*

**Type parameters:**

▪ **TComponents**: *[ComponentSelector](../interfaces/_types_integrationdefinition_.componentselector.md)‹any›*

**Parameters:**

Name | Type |
------ | ------ |
`cv` | [ConfigVar](_types_integrationdefinition_.md#configvar)‹TComponents› |

**Returns:** *cv is DataSourceReferenceConfigVar‹TComponents›*

___

### `Const` isScheduleConfigVar

▸ **isScheduleConfigVar**(`cv`: [ConfigVar](_types_integrationdefinition_.md#configvar)‹any›): *cv is ScheduleConfigVar*

*Defined in [packages/spectral/src/types/IntegrationDefinition.ts:222](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/IntegrationDefinition.ts#L222)*

**Parameters:**

Name | Type |
------ | ------ |
`cv` | [ConfigVar](_types_integrationdefinition_.md#configvar)‹any› |

**Returns:** *cv is ScheduleConfigVar*
