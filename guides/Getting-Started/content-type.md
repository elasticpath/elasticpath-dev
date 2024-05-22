---
title: Content Type
nav_label: Content Type
sidebar_position: 30
---

## Authentication

The [oauth](https://oauth.net/2/) endpoint for `implicit` and `client_credentials` [authentication](/docs/authentication/overview) requests must contain the header `Content-Type: application/x-www-form-urlencoded`.

## Core resources

Requests made to the API must be encoded as **JSON** and contain the header `Content-Type: application/json`.

## Files

Requests to create a new [File](/docs/pxm/products/product-assets/files-overview) must contain the header `Content-Type: multipart/form-data`.

## Response encoding

Responses from the API, including errors, are encoded as **JSON**.
