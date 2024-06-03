---
id: deploying
title: Deploying PunchOut Lambdas
sidebar_label: Deploy Lambdas
original_id: deploying
---

## Deploying the Elastic Path Punchout Lambdas

This Lambda is used to accept incoming requests from the TradeCentric servers and transform them into requests that Cortex can understand.

### Deployment Instructions

1. Install [Serverless Framework’s Open Source CLI](https://www.serverless.com/framework/docs/getting-started/).

2. Install [Amazon Web Service (AWS) Command Line Interface](https://aws.amazon.com/cli/).

3. Download the [Elastic Path Punchout jar](https://repository.elasticpath.com/nexus/content/repositories/public/com/elasticpath/plugins/punchout/punchout-lambda/1.3.0.2d7d9fd9fe/punchout-lambda-1.3.0.2d7d9fd9fe-dist.jar).

    :::note
    You will be prompted for credentials to download the JAR. Use the Nexus credentials for your organization. If you do not have the credentials, send an email to access@elasticpath.com.

    Once you have successfully logged in, you will need to click the download link again to begin the download.
    :::

4. Run the following command to configure your AWS credentials for the PunchOut profile:

    `aws configure --profile punchout`

5. Enter the required configuration information:

    - AWS access key and secret access key
    - Region name, such as `us-west-2`

6. Create a `ep-punchout-serverless.yml` file with following contents:

    ```yaml
    service: punchout-lambda

    provider:
        name: aws
        runtime: java8
        region: us-west-2
        profile: punchout
        timeout: 30 # Extending to 30 seconds to allow the lambda functions to be warmed up properly. The default setting is six seconds.
        environment:
            CORTEX_BASE_URL: https://cortex.services.example.com/cortex
            CORTEX_SCOPE: mobee
            STOREFRONT_BROWSE_URL: https://store.example.com/
            STOREFRONT_PRODUCT_URL: https://store.example.com/product/{product_code}

    package:
        artifact: punchout-lambda-1.1.0.bc6fe61af7-dist.jar

    functions:
        cartTransfer:
            handler: com.elasticpath.plugins.punchout.lambda.CartRetrievalHandler
            events:
                - http:
                    path: cart
                    method: get
        createCart:
            handler: com.elasticpath.plugins.punchout.lambda.PunchOutSetupHandler
            events:
                - http:
                    path: setup
                    method: post
        salesOrder:
            handler: com.elasticpath.plugins.punchout.lambda.SalesOrderHandler
            events:
                - http:
                    path: salesorder
                    method: post
    ```

    :::important
    Ensure that you update the artifact location, artifact name, and the environment variable values.
    :::

7. Deploy the project to AWS using the following command:

    `sls deploy -c ep-punchout-serverless.yml`

    :::note
    By default, the artifact is deployed to `dev` stage. If you want to deploy to another stage, ensure that you specify either the `--stage` or `-s` option. For example,  use the command `sls deploy -s test` to deploy to `test` stage.
    :::

### Environment Variables

The following list describes the environment variables and details that the Lambdas require.

#### `CORTEX_BASE_URL`

The base URL of your public Cortex endpoint.

- Example value: `https://cortex.services.example.com/cortex`.

#### `CORTEX_SCOPE`

The store code or scope that the Lambda uses when making Cortex requests.

- Example value: `MOBEE`

#### `STOREFRONT_BROWSE_URL`

The URL that buyers are redirected to when beginning a punchout session.

- Example value: `https://store.example.com/`

#### `STOREFRONT_PRODUCT_URL`

The URL that buyers are redirected to when beginning a level 2 punchout session for a specific product. This URL must contain either a `{sku_code}` or `{product_code}` placeholder which the punchout gateway replaces before redirecting the buyer.

- Example value: `https://store.example.com/product/{product_code}`

### Verifying the Deployment

1. Check the result of the Lambdas deployment. For example:

    ```text
    Serverless: Packaging service...
    Serverless: Uploading CloudFormation file to S3...
    Serverless: Uploading artifacts...
    Serverless: Uploading service punchout-lambda-1.0.0-dist.jar file to S3 (11.13 MB)...
    Serverless: Validating template...
    Serverless: Updating Stack...
    Serverless: Checking Stack update progress...
    ..........................
    Serverless: Stack update finished...
    Service Information
    service: punchout-lambda
    stage: dev
    region: us-west-2
    stack: punchout-lambda-dev
    resources: 23
    api keys:
      None
    endpoints:
      GET - https://example.execute-api.us-west-2.amazonaws.com/dev/cart
      POST - https://example.execute-api.us-west-2.amazonaws.com/dev/setup
      POST - https://example.execute-api.us-west-2.amazonaws.com/dev/salesorder
    functions:
      cartTransfer: punchout-lambda-dev-cartTransfer
      createCart: punchout-lambda-dev-createCart
      salesOrder: punchout-lambda-dev-salesOrder
    layers:
      None
    Serverless: Removing old service artifacts from S3...
    ```

1. Check the endpoint connectivity.

    - Using a REST API development tool, such as Postman, point the target url to the endpoint of `cartTransfer` contained in the results of the `sls deploy` command.

    - Set the `Authorization` header with a valid authorization token and `GET` method.

    - Ensure that the request is successful and you see a `JSON` response.

1. Go to the Lambda function on the AWS console to find the newly deployed function.

## Deploying the TradeCentric Auth Lambda

This Lambda is used to communicate with the PunchOut Gateway, retrieve the JWT token required for Cortex authentication, and write it in a browser cookie. This allows Javascript code to access the token and set it in the `Authorization` header when calling Cortex.

### Deployment Instructions

1. You will have already installed Serverless and the AWS CLI.

2. Ask your TradeCentric Account Representative to send the PunchOut Auth Lambda archive.

3. You should already have a punchout AWS profile for the Elastic Path Punchout Lambdas. You can use the same profile to keep the Lambdas within the same region.

4. Create a `tradecentric-auth-serverless.yml` file with following contents:

    ```yaml
    service: punchout-auth-lambda

   frameworkVersion: '2'

    provider:
        name: aws
        runtime: nodejs14.x
        region: us-west-2
        lambdaHashingVersion: 20201221
        profile: punchout
        timeout: 30 # Extending to 30 seconds to allow the lambda functions to be warmed up properly. The default setting is six seconds.

    environment:
        PUNCHOUT_BASE_URL: https://connect.tradecentric.com
        PUNCHOUT_RESOURCE_UTOKEN: /pub/rest/frontend/1.0/utoken/
        PUNCHOUT_HMAC_KEY: ##KEY WILL BE PROVIDED##
        PUNCHOUT_API_BEARER: ##TOKEN WILL BE PROVIDED##

    package:
        artifact: punchout-auth-lambda.zip

    functions:
        auth:
            handler: index.auth
            events:
                - http:
                    path: utoken
                    method: get
    ```

   :::important
   Ensure that you update the artifact location, artifact name, and environment variable values.
   :::

5. Deploy the project to AWS using the following command:

   `sls deploy -c tradecentric-auth-serverless.yml`

   :::note
   By default, the artifact is deployed to `dev` stage. If you want to deploy to another stage, ensure that you specify either the `--stage` or `-s` option. For example,  use the command `sls deploy -s test` to deploy to `test` stage.
   :::


### Environment Variables

The following list describes the environment variables and details that the Lambda requires.

#### `PUNCHOUT_BASE_URL`

The base URL identifies the PunchOut gateway you are connecting with. Unless otherwise instructed, you will use the value below.

- `https://connect.tradecentric.com`

#### `PUNCHOUT_RESOURCE_UTOKEN`

The utoken resource identifies the API resource for accessing this tool. Unless otherwise instructed, you will use the value below.

- `/pub/rest/frontend/1.0/utoken/`

#### `PUNCHOUT_HMAC_KEY`

The `HMAC` key is used to authenticate the request. This is a made up value that you can define.

- Example: `Yna23maOs7`

#### `PUNCHOUT_API_BEARER`

The utoken resource identifies the API resource for accessing this tool. Unless otherwise instructed, you will use the value below.

- Example: `Zy52ed8f87c81323.5ee7c1s91548b`

### Verifying the Lambda deployment

1. Check the result of the Lambdas deployment. For example:

    ```text
    Serverless: Stack update finished...
    Service Information
    service: punchout-auth-lambda
    stage: dev
    region: us-west-2
    stack: punchout-auth-lambda-dev
    resources: 12
    api keys:
      None
    endpoints:
      GET - https://gkw8cwyr4f.execute-api.us-west-2.amazonaws.com/dev/utoken/auth
    functions:
      auth: punchout-auth-lambda-dev-auth
    layers:
      None
    ```

2. The `ENDPOINT` provided is where you will direct your Cloudfront behavior. To confirm it is responding you can point your browser to a URL with `?code=1` at the end.
    Example: `https://gkw8cwyr4f.execute-api.us-west-2.amazonaws.com/dev/utoken/auth?code=1`
    It will respond with an error that should say: `Missing token parameters. (400)`

3. Having confirmed that the API Gateway and Lambda are responding, take the endpoint and move to the same cloudfront configuration that houses your Single Page App.

### Storefront redirect to the TradeCentric Auth Lambda

Any `GET` requests to `[STOREFRONT_BROWSE_URL]/utoken/auth` need to be forwarded to the TradeCentric Auth Lambda endpoint, and the response returned to the browser. This is usually done through the storefront Content Delivery Network, but it can be done within the storefront itself. This is important because the response will write a browser cookie, and the request needs to be in the same domain as the storefront that delivers the Javascript, otherwise the Javascript won't be able to access the cookie.

### Verifying Storefront redirect

1. From your browser, access `[STOREFRONT_BROWSE_URL]/utoken/auth/code=1`.
    Example: `https://storefront.example.com/utoken/auth?code=1`
2. It should respond with an error that should say `Missing token parameters. (400)`. This means that your storefront Content Delivery Network and the Lambda are communicating correctly with each other.
