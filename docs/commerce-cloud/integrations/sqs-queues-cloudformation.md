---
title: Configure Simple Queue Service (SQS) Events with CloudFormation
nav_label: Configure SQS Events with CloudFormation
sidebar_position: 120
---

You can use CloudFormation to set up an Amazon Web Services (AWS) Simple Queue Service (SQS) to receive integration messages. A CloudFormation template is provided to avoid manually setting up and configuring infrastructure in the AWS console. The template creates the same resources that you create during manual configuration.

## Before you begin

Copy the following template and save it as a `cf.yaml` file in your repository.

```yaml
AWSTemplateFormatVersion: 2010-09-09
Description: Deploys an SQS queue and configures IAM user, group and policy for use with EPCC

Resources:
  EpccQueueAccessGroup:
    Type: AWS::IAM::Group
    Properties:
      GroupName: epcc-queue-access

  EpccQueuePolicy:
    Type: AWS::IAM::Policy
    Properties:
      PolicyName: epcc-queue-policy
      Groups:
        - !Ref EpccQueueAccessGroup
      PolicyDocument:
        Version: "2012-10-17"
        Statement:
          - Effect: Allow
            Action:
              - "sqs:SendMessage"
            Resource:
              - !Sub arn:aws:sqs:*:${AWS::AccountId}:epcc*

  EpccUser:
    Type: "AWS::IAM::User"
    Properties:
      UserName: epcc
      Groups:
        - epcc-queue-access

  EpccExternalQueue:
    Type: AWS::SQS::Queue
    Properties:
      QueueName: epcc-external-queue
```

## Procedure

### Deploying the template

To deploy the CloudFormation template, use the following steps:

1. Install the latest version of the AWS Command-Line Interface (CLI) tool.
1. Configure your AWS credentials to work with the CLI tool.
1. Deploy the CloudFormation template using the AWS CLI using the following command:

    ```console
    aws cloudformation deploy --template-file cf.yaml --stack-name epcc-sqs-stack --region eu-west-1 --capabilities CAPABILITY_NAMED_IAM
    ```

1. Grant credentials to the user you create in the Identity and Access Management (IAM) service.

    1. Open IAM in the console.
    1. Click the newly created user name.
    1. Click the **Security credentials** tab.
    1. Click **Create access key**.

    :::caution
    Ensure that you save the Access Key ID and Secret Access Key as they will be required later by the integration service.
    :::

### Set up a SQS Queue with a Serverless Lambda

You can optionally add a Serverless Lambda to your queue.

#### Build the code in Lambda folder

You can build a Lambda folder which contains some code that can be built as a serverless lambda in your repository. The Lambda makes a `HTTP POST` request to an endpoint with the message as the payload. You can change this code to perform any task you require to be performed with your SQS message. The serverless Lambda code in `lambda/main.go` must be built with the target operating system set to Linux. Ensure that you compress the code before you upload the code to the Lambda service in the AWS console.

To create a `deployment.zip` file to upload in your terminal in the Lambda folder:

```console
GOOS=linux go build -v -o compiledAssets/main && zip -j compiledAssets/deployment.zip compiledAssets/main
```

#### Create a new Lambda function

Create a new Lambda function in the AWS console:

1. Set Runtime to `Go 1.x` and the Handler as `main` for the name of the executable binary inside the zip file.
1. Upload the zip file.

  This action also creates a basic Lambda execution role in IAM.

#### Grant SQS permission to the Lambda role

For the Lambda role to work with SQS it must be granted the following SQS permissions as a minimum:

- `sqs:ReceiveMessage`
- `sqs:DeleteMessage`
- `sqs:GetQueueAttributes`

This can be done in IAM by selecting the lambda function role and adding a policy which includes these permissions.

#### Set the Lambda trigger

After the Lambda function is created and configured, you can set the Lambda trigger.

1. Go to AWS Lambda in the console.
1. Click the Lambda function and select **Add Trigger**.
1. Select SQS as the trigger and the SQS which was previously created.

#### Test the Lambda

After the lambda is attached to the SQS as a trigger, send a message to the queue, then check the CloudFormation logs for the Lambda to see it execute.

:::note
If you have messages already in the SQS queue when you attach a Lambda trigger all pre-existing messages are processed immediately.
:::
