---
id: integrating
title: Integrating Your Front-end
sidebar_label: Integrating Your Front-end
original_id: integrating
---

During transfer from a e-procurement system to PunchOut, PunchOut communicates with Cortex and derives a JWT token that identifies a purchaser for the given PunchOut session. This token provides all of the basic access needed for shopping with Cortex and navigational information for PunchOut.  This token is sent to the front-end during redirection through attaching a cookie as a response header.

To integrate a front-end into the PunchOut flow your front-end must:

1. Check for an existence of a cookie named `Authorization` in the response header.

    If the cookie exists, then your front-end knows that it is operating under a PunchOut scenario.

    :::note
    Ensure that you style the front-end or hide features as you need.
    :::

2. Extract the value of the `Authorization` cookie and use the JWT token as an access token for any subsequent request to Cortex.

    Every request uses the `Authorization` request header and places `bearer ${JWT_TOKEN}` as its value.  The JWT token will identify the user and cart.

3. Check for the existence of a `cart-transfer-url` descriptor from the Cart resource in Cortex. If found, the shopping cart page should show a "Cart Transfer" button in place of the usual "Checkout" button.

    :::note
    When the "Cart Transfer" button is clicked, the front-end should redirect the purchaser back to the original e-procurement system. The descriptor resource contains a `cart-transfer-url` key that details where the front-end should redirect the purchaser.
    :::

    For example, the descriptor might look like the following in the Cortex response:

    ```java
    _descriptor": [{
		    "self": {
			    "type": "carts.cart-descriptor",
			    "uri": "/carts/vestri/mrstazjqgbrwcllcg5staljuha3doljzgzqtkllfha2gmnjwgu4genjsmu=/descriptor",
			    "href": "https://reference.epdemos.com/cortex/carts/vestri/mrstazjqgbrwcllcg5staljuha3doljzgzqtkllfha2gmnjwgu4genjsmu=/descriptor"
		    },
		    "cart-transfer-url": "https://connect.procurement.com/gateway/link/return/id/AH5e39b48e23f3d",
		    "messages": [],
		    "links": [],
		    "default": "true"
	    }]
    ```

For more information about how to set up a storefront that has already been adapted for a PunchOut checkout flow, see [Configuring the Reference Storefront](front-end.md).
