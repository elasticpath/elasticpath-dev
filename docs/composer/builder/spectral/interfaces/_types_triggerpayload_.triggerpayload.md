---
id: "_types_triggerpayload_.triggerpayload"
title: "TriggerPayload"
sidebar_label: "TriggerPayload"
---

[@prismatic-io/spectral](../index.md) › ["types/TriggerPayload"](../modules/_types_triggerpayload_.md) › [TriggerPayload](_types_triggerpayload_.triggerpayload.md)

Represents a Trigger Payload, which is data passed into a Trigger to invoke an Integration execution.

## Hierarchy

* **TriggerPayload**

## Index

### Properties

* [body](_types_triggerpayload_.triggerpayload.md#body)
* [customer](_types_triggerpayload_.triggerpayload.md#customer)
* [executionId](_types_triggerpayload_.triggerpayload.md#executionid)
* [flow](_types_triggerpayload_.triggerpayload.md#flow)
* [headers](_types_triggerpayload_.triggerpayload.md#headers)
* [instance](_types_triggerpayload_.triggerpayload.md#instance)
* [integration](_types_triggerpayload_.triggerpayload.md#integration)
* [invokeUrl](_types_triggerpayload_.triggerpayload.md#invokeurl)
* [pathFragment](_types_triggerpayload_.triggerpayload.md#pathfragment)
* [queryParameters](_types_triggerpayload_.triggerpayload.md#queryparameters)
* [rawBody](_types_triggerpayload_.triggerpayload.md#rawbody)
* [startedAt](_types_triggerpayload_.triggerpayload.md#startedat)
* [user](_types_triggerpayload_.triggerpayload.md#user)
* [webhookApiKeys](_types_triggerpayload_.triggerpayload.md#webhookapikeys)
* [webhookUrls](_types_triggerpayload_.triggerpayload.md#webhookurls)

## Properties

###  body

• **body**: *object*

*Defined in [packages/spectral/src/types/TriggerPayload.ts:21](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/TriggerPayload.ts#L21)*

#### Type declaration:

* **contentType**? : *undefined | string*

* **data**: *unknown*

___

###  customer

• **customer**: *[CustomerAttributes](_types_customerattributes_.customerattributes.md)*

*Defined in [packages/spectral/src/types/TriggerPayload.ts:39](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/TriggerPayload.ts#L39)*

Contains attributes of the Customer for whom an Instance is being executed.

___

###  executionId

• **executionId**: *string*

*Defined in [packages/spectral/src/types/TriggerPayload.ts:37](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/TriggerPayload.ts#L37)*

___

###  flow

• **flow**: *[FlowAttributes](_types_flowattributes_.flowattributes.md)*

*Defined in [packages/spectral/src/types/TriggerPayload.ts:47](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/TriggerPayload.ts#L47)*

Contains attributes of the Flow that is being executed.

___

###  headers

• **headers**: *object*

*Defined in [packages/spectral/src/types/TriggerPayload.ts:11](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/TriggerPayload.ts#L11)*

#### Type declaration:

* \[ **key**: *string*\]: string

___

###  instance

• **instance**: *[InstanceAttributes](_types_instanceattributes_.instanceattributes.md)*

*Defined in [packages/spectral/src/types/TriggerPayload.ts:41](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/TriggerPayload.ts#L41)*

Contains attributes of the Instance that is being executed.

___

###  integration

• **integration**: *[IntegrationAttributes](_types_integrationattributes_.integrationattributes.md)*

*Defined in [packages/spectral/src/types/TriggerPayload.ts:45](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/TriggerPayload.ts#L45)*

Contains attributes of the Integration that is being executed.

___

###  invokeUrl

• **invokeUrl**: *string*

*Defined in [packages/spectral/src/types/TriggerPayload.ts:36](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/TriggerPayload.ts#L36)*

The URL that was used to invoke the execution.

___

###  pathFragment

• **pathFragment**: *string*

*Defined in [packages/spectral/src/types/TriggerPayload.ts:26](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/TriggerPayload.ts#L26)*

Extended path information from the webhook trigger

___

###  queryParameters

• **queryParameters**: *object*

*Defined in [packages/spectral/src/types/TriggerPayload.ts:14](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/TriggerPayload.ts#L14)*

#### Type declaration:

* \[ **key**: *string*\]: string

___

###  rawBody

• **rawBody**: *object*

*Defined in [packages/spectral/src/types/TriggerPayload.ts:17](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/TriggerPayload.ts#L17)*

#### Type declaration:

* **contentType**? : *undefined | string*

* **data**: *unknown*

___

###  startedAt

• **startedAt**: *string*

*Defined in [packages/spectral/src/types/TriggerPayload.ts:49](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/TriggerPayload.ts#L49)*

The time in UTC that execution started.

___

###  user

• **user**: *[UserAttributes](_types_userattributes_.userattributes.md)*

*Defined in [packages/spectral/src/types/TriggerPayload.ts:43](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/TriggerPayload.ts#L43)*

Contains attributes of the User for whom a User Level Configuration is being used.

___

###  webhookApiKeys

• **webhookApiKeys**: *object*

*Defined in [packages/spectral/src/types/TriggerPayload.ts:32](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/TriggerPayload.ts#L32)*

The optional API keys assigned to the flows of this integration. These may be unique per integration instance and per flow.

#### Type declaration:

* \[ **key**: *string*\]: string[]

___

###  webhookUrls

• **webhookUrls**: *object*

*Defined in [packages/spectral/src/types/TriggerPayload.ts:28](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/TriggerPayload.ts#L28)*

The webhook URLs assigned to this integration's flows upon instance deploy

#### Type declaration:

* \[ **key**: *string*\]: string
