---
title: Build Your First Integration
nav_label: Build Your First Integration
sidebar_position: 10
---

This tutorial walks you through some basic concepts of integration development. You will:

- Fetch data from Commerce.
- Learn how data flows between steps of an integration.
- Use logical branches to determine what to do with the data.
- Send the data conditionally to the log.
- Fetch some external data and perform an action on the data in Commerce.

## Integration Overview

The integration you build here retrieves an access token to grant you access to the Commerce API, verifies the access token, and logs the results.  

## Prerequisites

You need to authenticate with your Commerce store using the Commerce API keys. See [Application Keys](/docs/authentication/security#application-keys). You can find this information in **SYSTEM** > **Application Keys** in Commerce Manager when logged in as a user with Seller Admin privileges.

| Commerce API Key | Description                            |
|:------------------------------------|:---------------------------------------|
| **API Base URL**                    | Your Commerce API Base URL. |
| **Client ID**                       | Your Commerce Client ID. |
| **Client Secret**                   | Your Commerce Client Secret. |

## Create a New Integration

1. In Commerce Manager, go to **COMPOSER** > **Builder**.
1. Select **+ Add integration**. The **Configure new integration** page displays.
1. From **Configure new integration**, select **Blank** > **Start from blank integration**. The **Integration Details** page displays.
1. From **Integration details**, complete the following:

    1. In **Name**, enter **My First Integration**.
    1. (Optional) In **Category**, enter a category. If you do not enter a category, your integration is displayed in **Uncategorized**.  
    1. (Optional) In **Labels**, enter any labels you want to give the integration.
    1. (Optional) In **Description**, enter a brief description for this integration.
    1. Select **Next**. 
    
## Configure the Integration Trigger

Most integrations are either scheduled events or webhooks triggered by an Elastic Path [observable event](http://localhost:3000/docs/api/integrations/integrations-introduction#observable-events). For this tutorial, we are using the **Webhook Trigger**.

1. Click **Webhook**. The step is added to the flow.
1. Click the step to display the drawer details. By default the following settings are set. 

	1. In **Inputs**, **Response Type** is set to **Asynchronous**.
	1. **Response Status Code** is set to **200 OK**.
	1. **Response Content Type** is set to **application/json**.

## Add Your First Step

1. Click **+** under the **Webhook** step to add a new step. 
1. From **Choose component**, select the **Code** component. The **Code** component displays.
1. Select the **Code Block** action. The **Code Block** action is added to the flow.
1. Click the step to display the drawer details.
1. In **Step name**, enter a name for the step, for example, **Get Client Token**.
1. Cick **Inputs**.
1. In **Code** > **edit**, enter the following: 

    ```json
        const fetch = require("node-fetch@2.6.1/lib/index.js");
        const params =  new  URLSearchParams();
        module.exports =  async  ({ logger, configVars }, stepResults)  =>  {
	        
	        let base_url = "{{paste the url collected in gather step above}}"
	        let client_id = "{{paste the client id collected in gather step above}}"
	        let client_secret = "{{paste the client secret collected in gather step above}}"
        
	    	params.append('client_id', client_id);
	        params.append('client_secret', client_secret);
	        params.append('grant_type',  'client_credentials');
	        var response =  await fetch(base_url +  '/oauth/access_token',
		       {method:  'POST',body: params});
	       
	        var data =  await response.json();
	       
	        return  { data };
    ```

1. Click **Save**.
1. Close the drawer.

## Create a Branch Based on the Results

1. Click **+** under the **Get EPCC Client Token** step to add a new step. 
1. From **Choose component**, select the **Branch** component. The **Branch** component displays.
1. Select the **Branch on Expression** action. The **Branch on Expression** action is added to the flow.
1. Click the step to display the drawer details.
1. Click **Inputs**. 
1. Click **Condition Inputs** > **Branch Name**, enter a name, for example, **Token Exists**.
1. Click **Field**. The **Field** details are displayed.
1. Click **Reference**. The **Reference Step** must be **Get EPCC Client Token**.
1. Click **Reference Search**. **results** is added to the box.
1. Enter **.access_token** after **results**. The **Reference Search** becomes **results.access_token**.
1. Click **Operator** and select **exists**.
1. Click **Save**.
1. Close the drawer.

### Log Success if the Access Token is Found

1. Click **+** under the **Token Exists** step to add a step.
1. From **Choose component**, select the **Log** component. The **Log** component displays.
1. Select the **Write Log Message** action. The **Write Log Message** action is added to the flow.
1. Click the step to display the drawer details.
1. In the **Step Name** box type **Success**.
1. Click **Inputs**.
1. In **Log Level**, select **info**.
1. In **Log Message**, enter the message, for example, **Access Token Found!**.
1. Click **Save**.
1. Close the drawer.
 
### Log an Error if the Access Token is not Found

1. Click **+** under the **Else** step to add a step to handle the secrets not matching.
1. From **Choose component**, select the **Log** component. The **Log** component displays.
1. Select the **Write Log Message** action. The **Write Log Message** action is added to the flow.
1. Click the step to display the drawer details.
1. In the **Step Name** box type "**Failure**"
1. Click **Inputs**.
1. In **Log Level**, select **error**.
1. In **Log Message**, enter the warning message, for example, **Access Token Not Found!**
1. Click **Save**.
1. Close the drawer.

### (Optional) Get External Data

The following steps provide an example of how to get data from an external API using the **HTTP** component. This is useful for use cases where there is no component that has the actions that you need to retrieve the data that you want. The steps below describe retrieving details for a random beer from [Punk API](https://punkapi.com/documentation/v2) and logs the data.

1. Add a step that uses the **Random Integer** action from the **Math** component.
1. In **Inputs**, set **Min** to **1** and **Max** to **325**.
1. Add a step that uses the **GET Request** action from the **HTTP** component.
1. Configure the step as follows:

    1. In **Inputs**, click **URL**, and select **Template** tab.
	1. In **Template**, enter **https://api.punkapi.com/v2/beers/**.
	1. From **Add Template Field**, select the **Reference** tab. The **Reference** pane is displayed.
    1. Make sure the **Reference Step** is **Random Integer**.
    1. In **Value Preview**, click **Results**. 
    1. Make sure that **Reference Search** is **results**.
	1. In **URL**, make sure that **Template** is `https://api.punkapi.com/v2/beers/Random Integer | results`.

1. Add a step that uses the **Write Log Message** action from the **Log** component.
1. Configure the step as follows:

    1. In **Inputs**, select **Log Message**. The **Log Message** pane is displayed.
    1. Select the **Reference** tab. 
    1. Make sure the **Reference Step** is **GET Request**.
    1. In **Value Preview**, click **results**. 
    1. Make sure that **Log Message** is `GET Request | results`.

## Test Your Integration

Click **Save & Run Test**. This opens the **Test Runner** dialog and shows the results of the integration test.
