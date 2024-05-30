---
id: configuring
title: Configuring PunchOut
sidebar_label: Configuring PunchOut
original_id: configuring
---


:::important
The following steps only work on Elastic Path Commerce version 8.0.1 and later. The PunchOut Lambdas are not compatible with earlier versions of Cortex.
:::

## Overview

To support the Elastic Path Commerce and PunchOut integration, you must configure both Elastic Path Commerce and the PunchOut gateway.

Before following these steps, ensure that you have deployed the PunchOut Lambdas by following [these deployment steps](deploying.html).

## PunchOut Gateway Configuration

:::important
This step is dependent on your PunchOut Gateway vendor.
:::

If you are using TradeCentric, to initiate your first connection between the TradeCentric Gateway and Elastic Path, you must connect with your TradeCentric Account Representative or Project Manager. Provide your representative with the following information:

* Your Elastic Path PunchOut Lambda endpoint URLs
* Your TradeCentric Auth Lambda endpoint URLs
* The shared ID for a test customer to represent a buying organization

TradeCentric will configure a `Development` route on the Gateway and return the following information to you:

* JWT Token Public Key
* Access for your account on the TradeCentric portal

After the generic connection between TradeCentric and your Elastic Path store is established, you can begin to roll out configurations with your buying organizations.
You will work with your TradeCentric delivery team, but from the Elastic Path side, each buying organization that you will want to establish as a separate account on Elastic Path. Then, the account ID is configured on TradeCentric and they will help you communicate and integrate with your buying partner.

No additional Lambdas or JWT public keys are required to add new buying organizations.

## Configuring the PunchOut Public Key for JWT Token Signature Validation

Elastic Path Commerce requires a valid JWT Token generated from your PunchOut gateway. To ensure that the JWT Token from the PunchOut gateway is accepted as valid, complete the following steps:

1. Go to your Elastic Path Commerce source code root folder.

2. Add the `jwtTokenStrategy.config` file to the appropriate `extensions/database/ext-data/src/main/resources/environments/{environment}/files/conf/cortex/` folder.

3. Replace the `{environment}` placeholder with the environment you plan to deploy with PunchOut integration support.

   For example, where `{environment}` is set to `qa`, `stage-live`, `prod-live`, and so on.

4. Populate the file with the following, replacing the key with the public key you received from your PunchOut gateway provider:

    ```text
    publicKeys = [ \
        "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA2S73WrOdWC95ifyLhZvr1J9eH0Md/XWKb4wtc3EiztRxi7llc/iZcteeaPTXc3nG1soYm+0kUbp2/PzIPe1yTsdL5zvFDPQtJZL9iv38sRJdjEXHDqKdo+7PKbTbER2bs/U8W5YloC//KbkEFD7MWLqG6ER8N82DLxuAILPnSkqbuhU3t+HOjgw6GpD+2J7FED8ABH18lFXOzqTssZTurJ6zKZb/Mys5Qerg/mqmwpHNKcxWFEh+zv6rTlQkbVHzauG7mWwGvqdTROY/HJRoYjtpWl0eNGoHCXxwo44g0ZdqSC3coPeskVxDnHysAmHb3V9aMxTcphM5vJtRxeQRLwIDAQAB", \
    ]
    ```

5. Commit this file to your source code control repository.

6. Build and deploy using Jenkins.

## Configuring Elastic Path Commerce

For all versions of Elastic Path Commerce, you must setup a cart modifier named `cart-transfer-url`. This must be done using the Import/Export functionality in Data Population or the Import/Export API. The easiest approach is to modify the default `multicart` modifier group to add the new modifier field, as shown below:

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<modifiergroups>
    <modifiergroup>
        <code>multicart</code>
        <displayname>
            <value language="en">Multi Cart Modifier Group.</value>
        </displayname>
        <modifierfields>
            <modifierfield>
                <code>name</code>
                <type>ShortText</type>
                <required>true</required>
                <maxSize>255</maxSize>
                <ordering>1</ordering>
                <displayname>
                    <value language="en">Name</value>
                </displayname>
                <defaultCartValue>default</defaultCartValue>
                <options/>
            </modifierfield>
            <modifierfield>
                <code>cart-transfer-url</code>
                <type>ShortText</type>
                <required>false</required>
                <maxSize>255</maxSize>
                <ordering>2</ordering>
                <displayname>
                    <value language="en">Cart Transfer URL</value>
                </displayname>
                <options/>
            </modifierfield>
        </modifierfields>
    </modifiergroup>
</modifiergroups>
```

To test if this is working, browse to a shopping cart in Cortex Studio and make sure that the `cart-transfer-url` field appears in the `descriptor` resource.

### Elastic Path Commerce 8.0.1 Steps

If you are using Elastic Path Commerce 8.0.1, use the following steps:

#### Configuring the Customer Profile Attribute

You need to configure the customer identifier setting so that PunchOut will use the `CP_PUNCHOUT_CUSTOMER_KEY` attribute for identifying customers. You also need to configure a customer profile attribute for associating PunchOut customers to Elastic Path Commerce customers. This is to ensure that customers set up in your PunchOut gateway are associated to the correct customer record in Elastic Path Commerce.

1. Go to your Elastic Path Commerce source code root folder.

2. Open the `extensions/database/ext-data/src/main/resources/data/rel-1.0-data/importexport/system_configuration.xml` file.

3. In the existing `<system_configuration>` tag, add the following XML:

    ```xml
    <configuration_setting>
        <name_space>COMMERCE/SYSTEM/CUSTOMER/identifier</name_space>
        <description>Specifies how the x-ep-user-id header or JWT profile field are used to identify a customer in the EP database. Supported options are: GUID, USER_ID, ATTRIBUTE_VALUE:{key}. Context values can also be set which are selected based on the JWT issuer (iss) value.</description>
        <default_value type="String">GUID</default_value>
        <max_overrides>-1</max_overrides>
        <defined_values>
            <value context="P2G">ATTRIBUTE_VALUE:CP_PUNCHOUT_CUSTOMER_KEY</value>
        </defined_values>
        <setting_metadata>
            <value key="apiRefreshStrategy">interval:timeout=COMMERCE/Cache/Cache_1</value>
            <value key="environmentSpecific">false</value>
        </setting_metadata>
    </configuration_setting>
    ```

4. Create or open the `extensions/database/ext-data/src/main/resources/data/rel-1.0-data/importexport/customerprofile_attributes.xml` file.

5. Populate the file with the following code:

    ```xml
    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <customerprofile_attributes>
	    <attribute>
		    <key>CP_PUNCHOUT_CUSTOMER_KEY</key>
		    <name><value language="en">PunchOut Customer Key</value></name>
		    <usage>CustomerProfile</usage>
		    <type>ShortText</type>
		    <multilanguage>false</multilanguage>
		    <required>false</required>
		    <multivalue>false</multivalue>
		    <global>false</global>
	    </attribute>
    </customerprofile_attributes>
    ```

6. Go to the `extensions/database/ext-data/src/main/resources/data/rel-1.0-data/importexport/manifest.xml` file and ensure that the `system_configuration.xml` and `customerprofile_attributes.xml` files are listed as resources.

7. Commit these files to your source code control repository.

8. Build and deploy using Jenkins.

#### Setting up Customers

For each customer that needs to be able to PunchOut into your storefront, do the following:

1. Setup the customer in your PunchOut gateway.

   If you are using TradeCentric, ask your Account Representative to help your customer’s organization to get setup on the TradeCentric platform. Your PunchOut vendor sends you an account identifier.

2. Open the customer record representing each customer and set the `PunchOut Customer Key` attribute to the account identifier from your PunchOut gateway.

   :::note
   If the customer record doesn’t yet exist, register the customer first through Cortex or your storefront.
   :::

### Elastic Path Commerce 8.1.0 (and later) Steps

If you are using Elastic Path Commerce 8.1.0 or later, use the following steps:

### Setting up Accounts

For each account that needs to be able to PunchOut into your storefront, use the following steps:

1. In Commerce Manager, create an account record representing your customer’s organization.

   :::important
   Ensure that you note the generated shared ID.
   :::

2. Setup the account in your PunchOut gateway.

   :::note
   If you are using TradeCentric, ask your Account Representative to help your customer’s organization to get setup on the TradeCentric platform. Inform the representative of the shared ID of the account. This is so they can pass this in the "account" claim of the JWT token when a buyer from that account initiates a PunchOut session.
   :::
