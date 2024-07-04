---
title: Managing Accounts
nav_label: Managing Accounts
sidebar_position: 10
---

In an Elastic Path Commerce Cloud store, sellers can create accounts using Commerce Manager and view the purchase history and the addresses associated with an account. To update the membership limit, see [Updating Account Membership Settings](/docs/api/settings/put-v-2-settings-account-membership).

## Creating Accounts

1. Go to **CUSTOMERS AND ACCOUNTS > Accounts**.
1. Click **Add Account**.
1. In the **Company Name** field, enter a name for the account.
1. In the **Company Legal name** field, enter a legal name of the account.
1. (Optional) In the **Registration ID** field, enter a unique registration ID for the account.
1. Click **Save**.

## Searching Accounts

1. Go to **CUSTOMERS AND ACCOUNTS > Accounts**.
1. Go to the **Accounts** tab.
1. Select one of the following options to search accounts using:
    - **Name**
    - **Legal Name**
    - **Registration ID**
    - **External Reference**
1. Select one of the following search criteria options:
    - **is**
    - **is like**
    - **ends with**
    - **starts with**
1. Enter the desired value in the **Find user** field.
1. Select **Search**. 

## Searching Account Users

1. Go to **CUSTOMERS AND ACCOUNTS > Accounts**.
1. Go to the **Users** tab.
1. Choose either **Name** or **Email**.
1. Select one of the following options:
    - **is**
    - **is like**
    - **ends with**
    - **starts with**
1. Enter the desired value in the **Find user** field.
1. Select **Search**. 

## Viewing Account Details

1. Go to **CUSTOMERS AND ACCOUNTS > Accounts**.
    All accounts in the store are displayed.
1. To view details of an account, click the account name in the list.

    Account overview, account members associated with the account, purchase history of the account, and the addresses associated with the account are displayed in corresponding tabs.

### Viewing account members associated with an account

1. Go to **CUSTOMERS AND ACCOUNTS > Accounts**.

    All accounts in the store are displayed.
1. Click the account name in the list.
1. On the account details page, click the **Account Members** tab.

    The **Name** and **Email** address of the account members are displayed.

### Adding account members to an account

1. Go to **CUSTOMERS AND ACCOUNTS > Accounts**.

    All accounts in the store are displayed.
1. Click the account name in the list.
1. In the account details page, click the **Account Members** tab.
1. (Optional) To add a new account member to the system, click **Create Account Member**
1. Enter the following information:

    - **Name**: The name of the account member.
    - **Email**: The email of the account member.

1. Click **Save**.
1. (Optional) In the **Account Members** tab, search for the name of the account member in the search bar.

### Viewing purchase history of an account

1. Go to **CUSTOMERS AND ACCOUNTS > Accounts**.

    All accounts in the store are displayed.
1. Click the account name in the list.
1. In the account details page, click the **Purchase History** tab.

    The **Purchase History** tab displays the following information about each purchase:

    - **Date** : Specifies the date of the purchase.
    - **Customer** : Specifies the email address of the customer who made the purchase on behalf of the account.
    - **Items** : Specifies the number of items purchased.
    - **Total** : Specifies the total amount of the purchase.
    - **Payment** : Specifies the status of the payment for the purchase, such as **unpaid**, **authorized**, **paid**, or **refunded**.
    - **Shipping** : Specifies the status of the shipment of the purchase, such as **fulfilled** or **unfulfilled**.
    - **Status** : Specifies the status of the order, such as **incomplete** or **complete**.

    When you click a listing in the purchase history, the **View order** page is displayed. You can manage the orders by updating details, such as, shipping address, shipping status, and payment status. See [Orders](/docs/commerce-manager/orders/orders-cm).

### Viewing addresses associated with an account

1. Go to **CUSTOMERS AND ACCOUNTS > Accounts**.

    All accounts in the store are displayed.
1. Click the account name in the list.
1. In the account details page, click the **Address Book** tab.

    A list of names in each address are displayed.

## Adding Addresses to an Account

1. Go to **CUSTOMERS AND ACCOUNTS > Accounts**.

    All accounts in the store are displayed.
1. Click the account name in the list.
1. In the account details page, click the **Address Book** tab.
1. To add a new address, click a **Add a new address**.

    The **Add New Address** window is displayed.
1. Enter the following information:

    - (Optional) **Name**: The name with which the address is saved.
    - **First name**: The first name of the recipient on this address.
    - **Last name**: The last name of the recipient on this address.
    - (Optional) **Phone number**: A phone number for the address.
    - (Optional) **Company name**: The company name for the address, if any.
    - **Line 1**: The first line of the address, such as the street address.
    - (Optional) **Line 2**: The second line of the address, such as an apartment or unit number.
    - **Postcode**: The ZIP Code, postcode, or other postal reference numbers for the address.
    - (Optional) **City**: The city for the address.
    - **County**: The province for the address.
    - **Country**: The country for the address.
    - (Optional) **Instructions**: Any delivery instructions for the address.

1. Click **Save**.

## Editing Addresses Associated with an Account

1. Go to **CUSTOMERS AND ACCOUNTS > Accounts**.

    All accounts in the store are displayed.
1. Click the account name in the list.
1. In the account details page, click the **Address Book** tab.

    A list of names in each address are displayed.
1. To edit the details of an address, do one of the following:

      - Click a name.
      - In the address list, click the **...** icon next to the address name and click **Edit**.

      The **Edit Address** window is displayed.

1. Update the details as required.
1. Click **Save**.

## Deleting Addresses Associated with an Account

1. Go to **CUSTOMERS AND ACCOUNTS > Accounts**.

    All accounts in the store are displayed.
1. Click the account name in the list.
1. In the account details page, click the **Address Book** tab.

    A list of names in each address are displayed.
1. To delete an address, click the **...** icon next to the address name and click **Delete**.

## Deleting Accounts

1. Go to **CUSTOMERS AND ACCOUNTS > Accounts**.

    All accounts in the store are displayed.
1. Click the **...** icon next to the account name in the list and click **Delete**.

## Demo

<iframe width="560" height="315" src="https://www.youtube.com/embed/IqAiqg-d--Y" title="Account Management in Commerce Manager" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

