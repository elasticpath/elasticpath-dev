---
title: Studio for Shopify & Klevu
nav_label: Studio for Shopify & Klevu
sidebar_position: 15
---

Using Shopify, Klevu and Studio, enables you to create an e-commerce solution that combines Shopify's ease of use and reliability, Klevu's advanced search and personalization features and Studio's flexibility to meet complex business needs. You can use Klevu's search and recommendation features with the products in your Shopify store.

### Step 1 - Install the Klevu -AI Search & Discover App in the Shopify App Store

Once you have configured [Studio with Shopify](/docs/studio/sign-up/shopify), you can install Klevu.

1. Go to the Shopify app store.
2. Search for **klevu**.
3. Select **Klevu - AI Search & Discovery**.
4. Select **Install**.
5. Accept the terms of service and select **Install**.

### Step 2 - Create a Klevu Account

Before you can integrate Klevu, you must create a Klevu account. 

1. From **Don't have a Klevu account?**, select **Click here**.
2. Klevu prompts you to enter your email address and verify your email.
3. Once Klevu has verified your email address, you must enter your account details and password.
4. Select **Activate Account**.
5. Once the account is activated, select the Klevu solutions you want access to. We recommend that you select all three but you must have **Smart recommendations** installed to use the Studio Recommendations component.
6. Select **Save and continue**.
7. Klevu prompts you to provide information about your business. You can either select **Complete** or **Skip to Integration**.
8. Klevu provides you with a checklist to help you get started. Select **Start Checklist**.

### Step 3 - Create a Klevu Store

Once you have set up a Klevu account, you can add your Klevu store. 

1. Once you have selected, **Start Checklist**, the **Add Store** page is displayed.
1. In **Store Name**, enter a name for your store. 
1. In **Store URL**, add your Shopify Store URL.
1. Finally, select your **Store Language** and **Store Timezone** from the drop-down lists.
1. Select **Next**. The Klevu **API key** and **REST AUTH key** are displayed. Make a copy of these as you will need them later.
1. Select **Start Using Klevu**.

### Step 4 - Configure the Klevu Integration

At this point, you have signed up for Klevu, but you now need to go back to the Klevu Shopify App to integrate with  Klevu. 

1. Go back to the Shopify + Klevu App.
1. Select **Integrate Klevu**.
1. You are prompted to add the **API key** and **REST AUTH key** that you copied in step 3.
1. Select **Next**.
1. Select **Confirm**.
1. Select **Integrate**. A list of your Shopify themes is displayed.
1. Select **integrate on this theme** next to the Shopify theme that you want to integrate with Klevu. You should integrate with the theme that is currently published and in use.
1. Select **Embed** to embed the Klevu Javascript. The Shopify theme editor is displayed.
1. From to **Klevu Javascript**, select the following:

    - Javascript for Quick Search
    - Javascript for Smart Category Merchandizing
    - Javascript for Smart Recommendations
   
1. In **Search Results Landing Page**, specify the URL for your Search Results page.
1. (Optional) Select **Wait for Interactive** if you want Klevu to initialize only after the page has loaded.
1. Select Save.
1. Go back to the Klevu Integration page in the Klevu Shopify App.
1. Select **Refresh page** to verify that Klevu Javascript was installed successfully.
1. In **Embed Klevu Solution Blocks**, select **Embed** next to **Klevu Search Results Block**. The Shopify theme editor for your Search results template is displayed. Shopify automatically provides search results. In **Apps**, **Klevu Search Results** is now displayed, replacing the Shopify search results.
1. You must disable the Shopify Search Results. To do this, select the native Search results grid and select the eye icon to hide the Shopify Search Results.
1. Select **Save**.
1. You must also disable the Shopify search suggestions. To do this, select the header. The header properties are displayed.
1. From **Theme Settings**, uncheck **Enable search suggestions**.
1. Select **Save**.

## Step 5 - Integrate Klevu with Studio

Once you have configured Shopify with Klevu, you need to integrate Klevu with Studio. See [Integrating Klevu](/docs/studio/Integrations/klevu/getting-started).