---
title: Pimberly Component
nav_label: Pimberly
sidebar_position: 130
---

You can integrate Commerce with Pimberly using the Pimberly component. This means you can synchronize catalog data such as products, price, images, and categories between Commerce and Pimberly.

## Connections

You need the following to interact with Pimberly.

| Option | Description                            |
|:------------------------------------|:---------------------------------------|
| **API Base URL**                    | Your Pimberly API Base URL. Default value is `https://sandbox.pimber.ly/api/v2.2`. |
| **API Key**                       | Your Pimberly API Key. Login to your Pimberly account to retreive your API Keys. |
| **Webhook URL**               | Your Pimberly webhook URL. Default value is `https://sandbox-api.pimberly.io`. |

## Actions

The component has the following actions.

### Create a Webhook

| Input | Type | Description |
|:--- |:--- | :--- | 
| **Connection** | `connection` | Pimberly Connection. | 
| **enabled** | `boolean` | If webhook is enabled. | 
| **Action** | `dynamicfieldselection` | Set up your webhook actions depending on your requirements. | 
| **URL** | `string` |  The webhook URL. | 

### Delete a Webhook

| Input | Type | Description |
|:--- |:--- | :--- | 
| **Connection** | `connection` | Pimberly Connection. | 

### Get all Products

| Input | Type | Description |
|:--- |:--- | :--- | 
| **Connection** | `connection` | Pimberly Connection. | 
| **Max Id** | `string` | The maximum ID. | 
| **Limit** | `string` | The product limit. | 

### Get a Product

| Input | Type | Description |
|:--- |:--- | :--- | 
|**Connection** | `connection` | Pimberly Connection. | 
| **Product Id** | `string` | The unique identifier of the product. | 

### Get a Product Catagory

| Input | Type | Description |
|:--- |:--- | :--- | 
|**Connection** | `connection` | Pimberly Connection. | 
| **Product Id** | `string` | The unique identifier of the product. | 

### Get a Webhook

| Input | Type | Description |
|:--- |:--- | :--- | 
|**Connection** | `connection` | Pimberly Connection. | 

### Get Catagories for Products

| Input | Type | Description |
|:--- |:--- | :--- | 
|**Connection** | `connection` | Pimberly Connection. | 
| **Products** | `dynamicfieldselection` | The products whose categories you want to retrieve. |

### Get Child Products

| Input | Type | Description |
|:--- |:--- | :--- | 
|**Connection** | `connection` | Pimberly Connection. | 
| **Product Id** | `string` | The unique identifier of the product. | 

### Get Parent Products

| Input | Type | Description |
|:--- |:--- | :--- | 
|**Connection** | `connection` | Pimberly Connection |
| **Product Id** | `string` | The unique identifier of the product. | 

### Transform Product

| Input | Type | Description |
|:--- |:--- | :--- | 
|**Connection** | `connection` | Pimberly Connection | 
| **Products** | `dynamicfieldselection`  | The products you want to transform. | 
| **Product Type Template** | `dynamicfieldselection` | The product type templates you want to transform. | 
| **Product Template** | `dynamicfieldselection` | The product templates you want to transform. |
| **Variation Template** | `dynamicfieldselection` | The variation tempate you want to transform. | 
| **Product Type** | `string`  | The product type you want to transform. | 
