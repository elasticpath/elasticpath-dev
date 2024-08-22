---
id: "_types_inputs_.keyvaluepair"
title: "KeyValuePair"
sidebar_label: "KeyValuePair"
---

[@prismatic-io/spectral](../index.md) › ["types/Inputs"](../modules/_types_inputs_.md) › [KeyValuePair](_types_inputs_.keyvaluepair.md)

KeyValuePair input parameter type.
This allows users to input multiple keys / values as an input.
To see an example of how this can be used, see the `tagging` input
of the `putObject` action of the AWS S3 component:
https://github.com/prismatic-io/examples/blob/main/components/aws-s3/src/actions.ts

## Type parameters

▪ **V**

## Hierarchy

* **KeyValuePair**

## Index

### Properties

* [key](_types_inputs_.keyvaluepair.md#key)
* [value](_types_inputs_.keyvaluepair.md#value)

## Properties

###  key

• **key**: *string*

*Defined in [packages/spectral/src/types/Inputs.ts:13](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/Inputs.ts#L13)*

Key of the KeyValuePair

___

###  value

• **value**: *V*

*Defined in [packages/spectral/src/types/Inputs.ts:15](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/Inputs.ts#L15)*

Value of the KeyValuePair
