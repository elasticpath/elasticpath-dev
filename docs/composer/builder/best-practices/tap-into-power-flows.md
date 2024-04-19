---
title: Tap Into the Power of Flows
nav_label: Tap Into the Power of Flows
sidebar_position: 14
---

A single integration can have a [single flow](/docs/composer/builder/integrations/building-integrations#flows-in-integrations) (for the simplest integrations). However, many integrations benefit from having [multiple flows](/docs/composer/builder/quickstarts/integrations/building-an-integration-with-multiple-flows). For example, a two-way integration has both import and export flows.

Using different flows within a single integration allows each flow to have its own endpoints, triggers, and steps. You can even mix and match types within an integration where some flows run on schedules, some are based on webhooks, and others run automatically upon deployment/activation.

Instances (an integration deployed for a single consumer) can have common endpoints, or you can configure the system with a separate endpoint for each instance. Similarly, flows can have a common endpoint, or they can each have a different one. It's common practice to use pre-process flows to route data to the correct flow.

Using multiple flows in a single integration, instead of building a separate integration for each flow, also means that consumers only need to activate a single integration within the [Integrations Hub](/docs/composer/integration-hub/integrations-hub).
