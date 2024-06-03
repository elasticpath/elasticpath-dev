---
id: release-notes
title: PunchOut Release Notes
original_id: release-notes
---

## `1.0.0`

Released: July 2020

### Release Highlights

#### Setup Lambda Endpoint

The PunchOut Lambda exposes a `/setup` endpoint.  This is intended for use by the PunchOut gateway to initiate the PunchOut session and retrieve the storefront URL.

For more information, see the [API definition](api.html).

#### Cart Transfer Lambda Endpoint

The PunchOut Lambda exposes a `/cart` endpoint. This is intended for use by the PunchOut gateway to transfer the cart contents back to the eProcurement system.

For more information, see the [API definition](api.html).

#### Sales Order Lambda Endpoint

The PunchOut Lambda exposes a `/salesorder` endpoint. This is intended for use by the PunchOut gateway to create a sales order.

For more information, see the [API definition](api.html)
