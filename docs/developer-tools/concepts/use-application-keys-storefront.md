---
sidebar_position: 1
title: "Storefront: Use application keys"
---

## Using the application key in storefront

### Behaviour without a key

If you don't pass a client id and/or client secret you will get a 401 error when trying to access the API.

### Using the JS SDK

If you are using the JS SDK you can pass the client id and client secret to the `createClient` function.

```typescript
import { gateway } from "@moltin/sdk"

gateway({
  client_id: "xyz8hblk8yfWtPi0vVCHbIxkb3dtvNYWY1Rxvih2nR",
  host: "useast.api.elasticpath.com",
  ...
});
```

The JS SDK will use the client id to generate an access token that will be set in the `Authorization` header of all requests as a `Bearer` token. e.g. `Authorization: Bearer xyz8hblk8yfWtPi0vVCHbIxkb3dtvNYWY1Rxvih2nR`

### Using Elastic Path React Hooks

You can pass the client id and host to the ElasticPathProvider component.

```tsx
function App() {
  return (
    <ElasticPathProvider
      queryClientProviderProps={{ client: queryClient }}
      host="useast.api.elasticpath.com"
      clientId="xyz8hblk8yfWtPi0vVCHbIxkb3dtvNYWY1Rxvih2nR"
      ...
    >
      ...
    </ElasticPathProvider>
  )
}
```

You can also pass a JS SDK client directly to the ElasticPathProvider component.

```tsx
function App() {
  return (
    <ElasticPathProvider
      queryClientProviderProps={{ client: queryClient }}
      client={client}
    >
      ...
    </ElasticPathProvider>
  )
}
```

### Using fetch directly

If you are using fetch directly you'll have to do the request for an access token yourself and manage it's persistence.

#### Request for an access token using client id

```typescript
fetch("https://useast.api.elasticpath.com/oauth/access_token", {
    method: "POST",
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: Object.keys({
      client_id: "xyz8hblk8yfWtPi0vVCHbIxkb3dtvNYWY1Rxvih2nR",
      grant_type: "implicit"
    })
      .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(body[k])}`)
      .join('&')
}).then(response => response.json())
  .then(data => console.log(data));
```

#### Using access token in api fetch requests

```typescript
fetch("https://useast.api.elasticpath.com/catalog/products", {
    headers: {
      'Authorization': 'Bearer 12348dcd5ed48bbdbaf8bb2b029a9682cd8e5689'
    }
}).then(response => response.json())
  .then(data => console.log(data));
```
