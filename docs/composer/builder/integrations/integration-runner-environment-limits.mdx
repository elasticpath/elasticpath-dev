---
title: Integration Runner Environment and Limits
nav_label: Integration Runner Environment and Limits
sidebar_position: 50
---

## The Builder runner environment

Instances of integrations (and test runs of integrations) execute in isolated NodeJS containers with distinct filesystems and memory.
Two instances of the same integration run in distinct isolated environments.
Integrations currently run using NodeJS version 14.x.

## Runner limitations

### Memory allocation

The Builder integration runner is allocated 1GB of RAM for execution.

### Execution time limitations

An instance will run for up to 15 minutes.

## Webhook limitations

### Webhook request size limitations

Webhook payload size is limited to 6MB.
6MB is generally large enough to handle most JSON, XML, or other webhook payloads.

If the payload you need to process exceeds 6MB (i.e. you are processing large images, PDFs, etc.), we recommend saving the large file to a file storage system first (Dropbox, Amazon S3, Azure Files, etc.), and sending _metadata_ about the file in your webhook request.
Your integration can use the metadata to fetch the file for processing.

### Synchronous webhook response size limitations

When a webhook is invoked synchronously, the response contains the results of the last step of the flow (so, if the last step returned a PDF file, the webhook response would be a PDF file).
Builder writes response to a file in Amazon S3, and responds with an HTTP 303 (Redirect) to the object in S3.

Step results have a maximum size of 500MB.
If the results that you generate exceed 500MB, consider writing the file to a file storage system (Dropbox, your own Amazon S3 bucket, etc) and returning metadata about the file instead.

**Read More**: [Synchronous Invocations and Redirects](/docs/composer/builder/integrations/integrations-triggers/how-to-use-integration-triggers#synchronous-and-asynchronous-integrations)

### Synchronous invocation timeouts

A webhook request will time out after 30 seconds.
Webhook requests to [synchronous triggers](/docs/composer/builder/integrations/integrations-triggers/how-to-use-integration-triggers#synchronous-and-asynchronous-integrations) (triggers that wait until the execution finishes running before responding) must complete their work in under 30 seconds.
