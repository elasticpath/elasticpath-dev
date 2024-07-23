---
id: "_types_datapayload_.datapayload"
title: "DataPayload"
sidebar_label: "DataPayload"
---

[@prismatic-io/spectral](../index.md) › ["types/DataPayload"](../modules/_types_datapayload_.md) › [DataPayload](_types_datapayload_.datapayload.md)

Binary data payload

## Hierarchy

* **DataPayload**

## Index

### Properties

* [contentType](_types_datapayload_.datapayload.md#contenttype)
* [data](_types_datapayload_.datapayload.md#data)
* [suggestedExtension](_types_datapayload_.datapayload.md#optional-suggestedextension)

## Properties

###  contentType

• **contentType**: *string*

*Defined in [packages/spectral/src/types/DataPayload.ts:6](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/DataPayload.ts#L6)*

Content type of data contained within this payload

___

###  data

• **data**: *Buffer*

*Defined in [packages/spectral/src/types/DataPayload.ts:4](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/DataPayload.ts#L4)*

Raw binary data as a Buffer

___

### `Optional` suggestedExtension

• **suggestedExtension**? : *undefined | string*

*Defined in [packages/spectral/src/types/DataPayload.ts:8](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/DataPayload.ts#L8)*

Suggested extension to use when writing the data
