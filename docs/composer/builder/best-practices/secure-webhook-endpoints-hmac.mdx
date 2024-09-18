---
title: Secure Webhook Endpoints with HMAC
nav_label: Secure Webhook Endpoints with HMAC
sidebar_position: 18
---

When it comes to transferring data via integrations, security is a top concern. To secure data being passed via webhooks [for event-driven integrations](/docs/composer/builder/best-practices/common-integration-patterns#event-driven-integrations), you have a few options, including API keys, your own authorization headers, or HMAC. 

We recommends using HMAC because it's about the the simplest (and stoutest) approach you could use. It doesn't require that your team learn a new language or gain an advanced understanding of encryption, but it does an excellent job of protecting the integrity of your data at the point of transfer.

## What is HMAC?

HMAC, or hashed message authentication code, is an authentication method that generates a hash from a message and a cryptographic key. When you implement HMAC for your webhook, you'll use an algorithm such as MD5, SHA-256, or RipeMD-128 for the hash to ensure the HTTP request that shows up at your webhook endpoint is legit.

## How does HMAC work?

Before the source app sends an HTTP request via the webhook, it hashes the payload (request body) with HMAC using the secret key. The resulting hash is then bundled into the HTTP request as a header, and the entire request (header and body) is sent to the webhook endpoint.

Upon receiving the HTTP request, the destination app hashes the body with the secret key and then compares the result to the hash provided in the header. If the values match, the destination app knows the data is legit and processes it. If the values do not match, the destination app rejects the data and executes whatever code was written for that scenario — perhaps creating a log entry or sending a notification.

If someone tries to spoof the payload, they won't be able to generate a valid hash since they don't have the secret key. Door closed.

## HMAC language support

Here are a few links to popular languages with HMAC capabilities:

- [NodeJS](https://nodejs.org/api/crypto.html)
- [Python](https://docs.python.org/3/library/hmac.html)
- [PHP](https://www.php.net/manual/en/function.hash-hmac.php)
- [.NET C#](https://docs.microsoft.com/en-us/dotnet/api/system.security.cryptography.hmac?view=net-6.0)

## Example code for HMAC

Here is an example of how HMAC might be set up in NodeJS using the built-in crypto module:

```tsx
const crypto = require("crypto");

const SECRET_KEY = "secret-FA782CF7-060E-484E-B3DC-055CF2C9ED99";

const payload = JSON.stringify({
  event: "REFUND_REQUEST",
  user: "realcustomer@mail.com",
  amount: "50.25",
});

const hash = crypto
  .createHmac("sha256", SECRET_KEY)
  .update(payload, "utf-8")
  .digest("hex");

console.log(hash); // Prints d12f95e3f98240cff00b2743160455fdf70cb8d431db2981a9af8414fc4ad5f8
```

The corresponding HTTP request using HMAC might look like this:

```bash
curl https://my.webhook.endpoint.com/callback \
	--request POST \
	--header "x-hmac-hash: d12f95e3f98240cff00b2743160455fdf70cb8d431db2981a9af8414fc4ad5f8" \
	--data '{"event":"REFUND_REQUEST","user":"realcustomer@notabaddie.com","amount":"50.25"}'
```

## Further resources

Setting up a HMAC for one of your integrations should be straightforward. To make things even simpler, we've added an HMAC Webhook trigger to our built in Hash component.
