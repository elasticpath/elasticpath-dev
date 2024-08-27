import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/carts/carts-checkout-orders-introduction",
    },
    {
      type: "category",
      label: "Cart Management",
      link: {
        type: "doc",
        id: "api/carts/cart-management",
      },
      items: [
        {
          type: "doc",
          id: "api/carts/get-carts",
          label: "Get Shopper Carts",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/carts/create-a-cart",
          label: "Create a Cart",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/carts/get-a-cart",
          label: "Get a Cart",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/carts/update-a-cart",
          label: "Update a Cart",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/carts/delete-a-cart",
          label: "Delete a Cart",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Account Cart Associations",
      link: {
        type: "doc",
        id: "api/carts/account-cart-associations",
      },
      items: [
        {
          type: "doc",
          id: "api/carts/create-account-cart-association",
          label: "Create an Account Cart Association",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/carts/delete-account-cart-association",
          label: "Delete Account Cart Association",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Customer Cart Associations",
      link: {
        type: "doc",
        id: "api/carts/customer-cart-associations",
      },
      items: [
        {
          type: "doc",
          id: "api/carts/create-customer-cart-association",
          label: "Create a Customer Cart Association",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/carts/delete-customer-cart-association",
          label: "Delete Customer Cart Association",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Cart Items",
      link: {
        type: "doc",
        id: "api/carts/cart-items",
      },
      items: [
        {
          type: "doc",
          id: "api/carts/get-cart-items",
          label: "Get Cart Items",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/carts/bulk-update-items-in-cart",
          label: "Bulk Update Items in Cart",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/carts/manage-carts",
          label: "Manage Carts",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/carts/delete-all-cart-items",
          label: "Delete all Cart Items",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/carts/update-a-cart-item",
          label: "Update a Cart Item",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/carts/delete-a-cart-item",
          label: "Delete a Cart Item",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/carts/delete-a-promotion-via-promotion-code",
          label: "Delete a Promotion via Promotion Code",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Checkout",
      link: {
        type: "doc",
        id: "api/carts/checkout",
      },
      items: [
        {
          type: "doc",
          id: "api/carts/checkout-api",
          label: "Checkout API",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Orders",
      link: {
        type: "doc",
        id: "api/carts/orders",
      },
      items: [
        {
          type: "doc",
          id: "api/carts/get-customer-orders",
          label: "Get All Orders",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/carts/get-an-order",
          label: "Get an Order",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/carts/update-an-order",
          label: "Update an Order",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/carts/get-order-items",
          label: "Get Order Items",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/carts/anonymize-orders",
          label: "Anonymize Orders",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Payments",
      link: {
        type: "doc",
        id: "api/carts/payments",
      },
      items: [
        {
          type: "doc",
          id: "api/carts/create-cart-payment-intent",
          label: "Create Stripe Payment Intent for a Cart",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/carts/authorize-setup",
          label: "Authorize Setup",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/carts/confirm-setup",
          label: "Confirm Setup",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Transactions",
      link: {
        type: "doc",
        id: "api/carts/transactions",
      },
      items: [
        {
          type: "doc",
          id: "api/carts/capture-a-transaction",
          label: "Capture a Transaction",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/carts/refund-a-transaction",
          label: "Refund a Transaction",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/carts/get-order-transactions",
          label: "Get Order Transactions",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/carts/get-a-transaction",
          label: "Get a Transaction",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/carts/cancel-a-transaction",
          label: "Cancel a Transaction",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Custom Discounts",
      link: {
        type: "doc",
        id: "api/carts/custom-discounts",
      },
      items: [
        {
          type: "doc",
          id: "api/carts/bulk-add-custom-discounts-to-cart",
          label: "Bulk Add Custom Discounts to Cart",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/carts/bulk-delete-custom-discounts-from-cart",
          label: "Bulk Delete Custom Discounts From Cart",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/carts/update-custom-discount-for-cart",
          label: "Update Custom Discount For Cart",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/carts/delete-custom-discount-from-cart",
          label: "Delete Custom Discount From Cart",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/carts/add-custom-discount-to-cart-item",
          label: "Add Custom Discount To Cart Item",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/carts/update-custom-discount-for-cart-item",
          label: "Update Custom Discount For Cart Item",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/carts/delete-custom-discount-from-cart-item",
          label: "Delete Custom Discount From Cart Item",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Tax Items",
      link: {
        type: "doc",
        id: "api/carts/tax-items",
      },
      items: [
        {
          type: "doc",
          id: "api/carts/add-tax-item-to-cart",
          label: "Add Tax Item to Cart",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/carts/bulk-add-tax-items-to-cart",
          label: "Bulk Add Tax Items to Cart",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/carts/bulk-delete-tax-items-from-cart",
          label: "Bulk Delete Tax Items from Cart",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/carts/update-a-tax-item",
          label: "Update a TaxItem",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/carts/delete-a-tax-item",
          label: "Delete a Tax Item",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
