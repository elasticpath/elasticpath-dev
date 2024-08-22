---
id: "_types_integrationdefinition_.flow"
title: "Flow"
sidebar_label: "Flow"
---

[@prismatic-io/spectral](../index.md) › ["types/IntegrationDefinition"](../modules/_types_integrationdefinition_.md) › [Flow](_types_integrationdefinition_.flow.md)

Defines attributes of a Flow of a Code-Native Integration.

## Type parameters

▪ **TConfigPages**: *[ConfigPages](../modules/_types_integrationdefinition_.md#configpages)‹TComponents›*

▪ **TComponents**: *[ComponentSelector](_types_integrationdefinition_.componentselector.md)‹any›*

▪ **TTriggerPayload**: *[TriggerPayload](_types_triggerpayload_.triggerpayload.md)*

## Hierarchy

* **Flow**

## Index

### Properties

* [description](_types_integrationdefinition_.flow.md#optional-description)
* [endpointSecurityType](_types_integrationdefinition_.flow.md#optional-endpointsecuritytype)
* [errorConfig](_types_integrationdefinition_.flow.md#optional-errorconfig)
* [isSynchronous](_types_integrationdefinition_.flow.md#optional-issynchronous)
* [name](_types_integrationdefinition_.flow.md#name)
* [onExecution](_types_integrationdefinition_.flow.md#onexecution)
* [onInstanceDelete](_types_integrationdefinition_.flow.md#optional-oninstancedelete)
* [onInstanceDeploy](_types_integrationdefinition_.flow.md#optional-oninstancedeploy)
* [onTrigger](_types_integrationdefinition_.flow.md#optional-ontrigger)
* [organizationApiKeys](_types_integrationdefinition_.flow.md#optional-organizationapikeys)
* [preprocessFlowConfig](_types_integrationdefinition_.flow.md#optional-preprocessflowconfig)
* [retryConfig](_types_integrationdefinition_.flow.md#optional-retryconfig)
* [schedule](_types_integrationdefinition_.flow.md#optional-schedule)
* [stableKey](_types_integrationdefinition_.flow.md#stablekey)

## Properties

### `Optional` description

• **description**? : *undefined | string*

*Defined in [packages/spectral/src/types/IntegrationDefinition.ts:98](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/IntegrationDefinition.ts#L98)*

Optional description for this Flow.

___

### `Optional` endpointSecurityType

• **endpointSecurityType**? : *[EndpointSecurityType](../modules/_types_integrationdefinition_.md#endpointsecuritytype)*

*Defined in [packages/spectral/src/types/IntegrationDefinition.ts:106](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/IntegrationDefinition.ts#L106)*

Optional security configuration to use for the endpoint of this Flow. @default EndpointSecurityType.CustomerOptional

___

### `Optional` errorConfig

• **errorConfig**? : *[StepErrorConfig](../modules/_types_integrationdefinition_.md#steperrorconfig)*

*Defined in [packages/spectral/src/types/IntegrationDefinition.ts:112](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/IntegrationDefinition.ts#L112)*

Optional error handling configuration.

___

### `Optional` isSynchronous

• **isSynchronous**? : *undefined | false | true*

*Defined in [packages/spectral/src/types/IntegrationDefinition.ts:102](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/IntegrationDefinition.ts#L102)*

Optional value that specifies whether this Flow is synchronous. @default false

___

###  name

• **name**: *string*

*Defined in [packages/spectral/src/types/IntegrationDefinition.ts:94](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/IntegrationDefinition.ts#L94)*

The unique name for this Flow.

___

###  onExecution

• **onExecution**: *[ActionPerformFunction](../modules/_types_actionperformfunction_.md#actionperformfunction)‹object, [ExtractConfigVars](../modules/_types_integrationdefinition_.md#extractconfigvars)‹TConfigPages›, false, [ActionPerformReturn](../modules/_types_actionperformreturn_.md#actionperformreturn)‹false, unknown››*

*Defined in [packages/spectral/src/types/IntegrationDefinition.ts:133](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/IntegrationDefinition.ts#L133)*

Specifies the main function for this Flow

___

### `Optional` onInstanceDelete

• **onInstanceDelete**? : *[TriggerEventFunction](../modules/_types_triggereventfunction_.md#triggereventfunction)‹[Inputs](../modules/_types_inputs_.md#inputs), [ExtractConfigVars](../modules/_types_integrationdefinition_.md#extractconfigvars)‹TConfigPages››*

*Defined in [packages/spectral/src/types/IntegrationDefinition.ts:128](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/IntegrationDefinition.ts#L128)*

Specifies the function to execute when an Instance of an Integration is deleted.

___

### `Optional` onInstanceDeploy

• **onInstanceDeploy**? : *[TriggerEventFunction](../modules/_types_triggereventfunction_.md#triggereventfunction)‹[Inputs](../modules/_types_inputs_.md#inputs), [ExtractConfigVars](../modules/_types_integrationdefinition_.md#extractconfigvars)‹TConfigPages››*

*Defined in [packages/spectral/src/types/IntegrationDefinition.ts:123](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/IntegrationDefinition.ts#L123)*

Specifies the function to execute when an Instance of this Integration is deployed.

___

### `Optional` onTrigger

• **onTrigger**? : *[ToComponentReferences](../modules/_types_integrationdefinition_.md#tocomponentreferences)‹"trigger", TComponents, TConfigPages› | [TriggerPerformFunction](../modules/_types_triggerperformfunction_.md#triggerperformfunction)‹[Inputs](../modules/_types_inputs_.md#inputs), [ExtractConfigVars](../modules/_types_integrationdefinition_.md#extractconfigvars)‹TConfigPages›, false, [TriggerResult](../modules/_types_triggerresult_.md#triggerresult)‹false, TTriggerPayload››*

*Defined in [packages/spectral/src/types/IntegrationDefinition.ts:114](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/IntegrationDefinition.ts#L114)*

Specifies the trigger function for this Flow, which returns a payload and optional HTTP response.

___

### `Optional` organizationApiKeys

• **organizationApiKeys**? : *string[]*

*Defined in [packages/spectral/src/types/IntegrationDefinition.ts:108](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/IntegrationDefinition.ts#L108)*

Optional list of API key(s) to use for the endpoint of this Flow when the endpoint security type is EndpointSecurityType.Organization.

___

### `Optional` preprocessFlowConfig

• **preprocessFlowConfig**? : *[PreprocessFlowConfig](../modules/_types_integrationdefinition_.md#preprocessflowconfig)*

*Defined in [packages/spectral/src/types/IntegrationDefinition.ts:100](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/IntegrationDefinition.ts#L100)*

Optional Preprocess Flow configuration for when the result of this Flow contains the flow routing attributes. Only one Flow per Integration may define this.

___

### `Optional` retryConfig

• **retryConfig**? : *[RetryConfig](../modules/_types_integrationdefinition_.md#retryconfig)*

*Defined in [packages/spectral/src/types/IntegrationDefinition.ts:104](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/IntegrationDefinition.ts#L104)*

Optional Retry Configuration for this Flow.

___

### `Optional` schedule

• **schedule**? : *[ValueReference](../modules/_types_integrationdefinition_.md#valuereference)‹string, TConfigPages› & object*

*Defined in [packages/spectral/src/types/IntegrationDefinition.ts:110](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/IntegrationDefinition.ts#L110)*

Optional schedule configuration that defines the frequency with which this Flow will be automatically executed.

___

###  stableKey

• **stableKey**: *string*

*Defined in [packages/spectral/src/types/IntegrationDefinition.ts:96](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/IntegrationDefinition.ts#L96)*

A unique, unchanging value that is used to maintain identity for the Flow even if the name changes.
