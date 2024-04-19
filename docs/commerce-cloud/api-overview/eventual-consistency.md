---
title: Eventual Consistency
nav_label: Eventual Consistency
sidebar_position: 140
---

Some APIs across Commerce are eventually consistent. This means that if no new updates are made, eventually, all reads to that resource return the latest value. This means that there may be a short delay between an update request being sent and seeing the updated value in all services across the platform.
This is important when creating products and then publishing catalogs. It is important that you allow time after adding or updating products before attempting to publish a catalog. In most cases, this happens almost immediately but at particularly busy times, this can take up to 1 minute.
