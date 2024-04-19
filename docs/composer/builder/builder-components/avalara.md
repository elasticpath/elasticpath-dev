---
title: Avalara Component
nav_label: Avalara
sidebar_position: 40
---

You can quickly and easily integrate Commerce with Avalara using the Avalara component. The Avalara component enables you to commit tax and void tax on specific order events. 

## Connections

You need the following to interact with Avalara.

| Option            | Description                                   |
|:------------------|:----------------------------------------------|
| **Company Code**        | Your company code. |
| **Avalara API Version** | Your API version.  |
| **Avalara Environment** | Your Avalara environment. |
| **Avalara Username** | Your Avalara username.  |
| **Avalara Password** | Your Avalara password.  |

## Actions

The component has the following actions.

### Committ the transaction in Avalara

| Input | Type | Description |
|:--- |:--- | :--- | 
| **Connection** | `connection`  | Your Avalara connection. | 
| **Commit transaction Order payload Request**  | `string` | The payload delivered to your webhook from Commerce contains the information about the resources affected by the fired event. | 
| **Log Level** | `string` | The level of logging. | 

### Void the transaction in Avalara

| Input | Type | Description |
|:--- |:--- | :--- | 
| **Connection** | `connection` | Your Avalara connection. | 
| **Void transaction Order payload Request**  | `dynamicfieldselection` | The payload delivered to your webhook from Commerce contains the information about the resources affected by the fired event. | 
| **Void Reason Code** | `string` | The void reason code. | 
| **Log Level** | `string` | The level of logging. | 
