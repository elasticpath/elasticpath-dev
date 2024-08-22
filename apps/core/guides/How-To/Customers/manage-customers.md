---
title: Managing Customers
nav_label: Managing Customers
sidebar_position: 10
---

Manage your customers through the API or Commerce Manager.

## Create a customer

If you are creating a new customer on the API, you can optionally submit a password along with that customer’s details.

:::note
Customer creation is currently not available in the iOS SDK (support for implicit authentication only). Also, the PHP SDK doesn’t contain the Customers endpoints.
:::

## Delete a customer

Delete a customer from Commerce Manager. If you are using the API, use a customer id or customer token to delete a customer.

## Customer authentication - passwords

After you create a password for a customer, it cannot be retrieved again. Any customers with passwords have the value of true in the password field.

If you have an existing customer who does not have a password, you can add the password field using the `customer_id`.

## Customer token

You can generate a customer token for existing customers by using a combination of their email and password, or by using single sign-on with OpenID Connect. For more information, see [Single sign-on with OpenID Connect](https://elasticpath.dev/guides/How-To/Authentication/get-single-sign-on-account-management-token).

Use a customer token when you don’t have full read/write access to the API (i.e., you are using the implicit token type) and you want to authenticate your customers through email and password. Authenticated customers can access and manage their own details, such as address and orders.

Use a customer token to:

- Authenticate your customer’s identity (instead of using email address and password).
- Get or update customer details.
- Get or update a customer address.
- Get customer orders.
- Provide your customer with implicit access to their details and orders.

## Manage existing customers

### Addresses

One customer can have an unlimited number of addresses set up for them, such as home, neighbor, or wife’s office. Use Commerce Manager or set them up through the API. A store representative can add, update, and delete customer addresses on their behalf.

If you are using a customer token scenario, you can grant your customers access to their own data so that they can manage their own address details. For authenticated users, you can make their address part of the checkout workflow .

### Orders

Streamline the checkout workflow for your existing customers and create a Customer_ID-based checkout workflow. The returned order object includes the customer’s mailing details and create a relationship between the customer and the order. You can use the relationship to retrieve all orders for a particular customer. Use it to provide your customers with ability to review their order history.

To retrieve orders for a customer, include the following details in the request header:

## Authentication token

### Customer token

#### Guest customers

For guest customers, create a checkout flow based on the customer object. Each time, a guest customer has to provide full shipping and billing details.

It is not possible to link orders with customer object, and as such, create orders records for guest users.

#### Add custom fields to a Customer object

Extend Customer object with Flows that allow you to add custom fields. To add a field, you’ll need to pass the customer token in the request header.

## Filter customers

Customer filtering is useful for customer management. Filtering can help you determine whether to send a user to a sign up or log in function. If using JavaScript SDK, make sure it’s version 3.3.0 or higher.

## Related Resources

- [Customers](/docs/customer-management/customers)
- [Customer Tokens API](/docs/customer-management/customer-management-api/customer-tokens)
- [Extend customer resources](/guides/How-To/Customers/extend-customer-resources)
