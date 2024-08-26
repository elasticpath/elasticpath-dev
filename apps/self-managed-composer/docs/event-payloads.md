---
id: event-payloads
title: Event Payloads
sidebar_label: Event Payloads
---

## Event Payloads

When supported commerce events occur, the Composer plugin will invoke the configured webhook URL. The body of the request will contain a JSON object with details about the event that occurred. The JSON object payloads are described below.

### Customer events

The customer event webhook is invoked when a customer registers, authenticates, or is updated. For more details, see [Extension Point: Customer Events](https://documentation.elasticpath.com/extension-framework/docs/extension-points/customer-events.html).

The top-level object contains two fields: `eventType`, which describes which event was triggered, and `contextObject`, which is a serialized representation of [XPFCustomerEventContext](https://documentation.elasticpath.com/extension-framework/javadocs/1.3.x/com/elasticpath/xpf/connectivity/context/XPFCustomerEventContext.html).

An example of the JSON object payload for these events is shown below:

```json
{
  "eventType": "CUSTOMER_AUTHENTICATED",
  "contextObject": {
    "customData": {},
    "customer": {
      "customData": {},
      "guid": "4FEE8C7F-1F50-3D62-08F1-67E3CE1928A3",
      "sharedId": "MOBEE:BEN.BOXER@ELASTICPATH.COM",
      "email": "ben.boxer@example.com",
      "status": "STATUS_ACTIVE",
      "type": "REGISTERED_USER",
      "attributeValues": {
        "": {
          "CP_PREF_LOCALE": {
            "customData": {},
            "stringValue": "en",
            "value": "en",
            "attribute": {
              "customData": {},
              "key": "CP_PREF_LOCALE",
              "localized": false,
              "displayNames": {
                "en": "Preferred Locale"
              }
            }
          },
          "CP_BE_NOTIFIED": {
            "customData": {},
            "stringValue": "false",
            "value": false,
            "attribute": {
              "customData": {},
              "key": "CP_BE_NOTIFIED",
              "localized": false,
              "displayNames": {
                "en": "Be notified of News"
              }
            }
          },
          "CP_EMAIL": {
            "customData": {},
            "stringValue": "ben.boxer@example.com",
            "value": "ben.boxer@example.com",
            "attribute": {
              "customData": {},
              "key": "CP_EMAIL",
              "localized": false,
              "displayNames": {
                "en": "Email"
              }
            }
          },
          "CP_PHONE": {
            "customData": {},
            "stringValue": "1-432-334-1029",
            "value": "1-432-334-1029",
            "attribute": {
              "customData": {},
              "key": "CP_PHONE",
              "localized": false,
              "displayNames": {
                "en": "Phone Number"
              }
            }
          },
          "CP_LAST_NAME": {
            "customData": {},
            "stringValue": "boxer",
            "value": "boxer",
            "attribute": {
              "customData": {},
              "key": "CP_LAST_NAME",
              "localized": false,
              "displayNames": {
                "en": "Last Name"
              }
            }
          },
          "CP_FIRST_NAME": {
            "customData": {},
            "stringValue": "ben",
            "value": "ben",
            "attribute": {
              "customData": {},
              "key": "CP_FIRST_NAME",
              "localized": false,
              "displayNames": {
                "en": "First Name"
              }
            }
          }
        }
      },
      "segments": [
        "PUBLIC"
      ],
      "firstTimeBuyer": false
    }
  }
}
```

### Shopping cart events

The shopping cart event webhook is invoked when a shopping cart is created, deleted, abandoned, or deleted. For more details, see [Extension Point: Shopping Cart Events](https://documentation.elasticpath.com/extension-framework/docs/extension-points/shopping-cart-events.html).

The top-level object contains two fields: `eventType`, which describes which event was triggered, and `contextObject`, which is a serialized representation of [XPFShoppingCartEventContext](https://documentation.elasticpath.com/extension-framework/javadocs/1.3.x/com/elasticpath/xpf/connectivity/context/XPFShoppingCartEventContext.html).

An example of the JSON object payload for these events is shown below:

```json
{
  "eventType": "SHOPPING_CART_CREATED",
  "contextObject": {
    "customData": {},
    "shoppingCart": {
      "customData": {},
      "guid": "698c2f87-6bcf-43bb-b3e6-0cafa25bac20",
      "cartOrderGuid": "b755ea0a-318b-4789-9cee-d2674bd7fdaf",
      "shopper": {
        "customData": {},
        "session": {
          "customData": {},
          "currency": "CAD",
          "locale": "en",
          "tagSet": {
            "SELLING_CHANNEL": "MOBEE",
            "SHOPPING_START_TIME": 1723586833203
          }
        },
        "store": {
          "customData": {},
          "code": "MOBEE",
          "name": "Mobee",
          "timeZone": "Europe/London",
          "catalog": {
            "customData": {},
            "code": "Mobile"
          },
          "defaultCurrency": "CAD",
          "defaultLocale": "en",
          "cartTypes": [
            {
              "customData": {},
              "name": "SHOPPING_CART",
              "modifierGroups": [
                {
                  "customData": {},
                  "modifierFields": [
                    {
                      "customData": {},
                      "code": "name",
                      "required": true,
                      "maxSize": 255,
                      "modifierType": "SHORT_TEXT",
                      "modifierFieldOptions": [
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "supportedCurrencies": [
            "EUR",
            "CAD"
          ],
          "supportedLocales": [
            "fr_CA",
            "fr",
            "en"
          ]
        },
        "user": {
          "customData": {},
          "guid": "4FEE8C7F-1F50-3D62-08F1-67E3CE1928A3",
          "sharedId": "MOBEE:BEN.BOXER@ELASTICPATH.COM",
          "email": "ben.boxer@example.com",
          "status": "STATUS_ACTIVE",
          "type": "REGISTERED_USER",
          "attributeValues": {
            "": {
              "CP_PREF_LOCALE": {
                "customData": {},
                "stringValue": "en",
                "value": "en",
                "attribute": {
                  "customData": {},
                  "key": "CP_PREF_LOCALE",
                  "localized": false,
                  "displayNames": {
                    "en": "Preferred Locale"
                  }
                }
              },
              "CP_BE_NOTIFIED": {
                "customData": {},
                "stringValue": "false",
                "value": false,
                "attribute": {
                  "customData": {},
                  "key": "CP_BE_NOTIFIED",
                  "localized": false,
                  "displayNames": {
                    "en": "Be notified of News"
                  }
                }
              },
              "CP_EMAIL": {
                "customData": {},
                "stringValue": "ben.boxer@example.com",
                "value": "ben.boxer@example.com",
                "attribute": {
                  "customData": {},
                  "key": "CP_EMAIL",
                  "localized": false,
                  "displayNames": {
                    "en": "Email"
                  }
                }
              },
              "CP_PHONE": {
                "customData": {},
                "stringValue": "1-432-334-1029",
                "value": "1-432-334-1029",
                "attribute": {
                  "customData": {},
                  "key": "CP_PHONE",
                  "localized": false,
                  "displayNames": {
                    "en": "Phone Number"
                  }
                }
              },
              "CP_LAST_NAME": {
                "customData": {},
                "stringValue": "boxer",
                "value": "boxer",
                "attribute": {
                  "customData": {},
                  "key": "CP_LAST_NAME",
                  "localized": false,
                  "displayNames": {
                    "en": "Last Name"
                  }
                }
              },
              "CP_FIRST_NAME": {
                "customData": {},
                "stringValue": "ben",
                "value": "ben",
                "attribute": {
                  "customData": {},
                  "key": "CP_FIRST_NAME",
                  "localized": false,
                  "displayNames": {
                    "en": "First Name"
                  }
                }
              }
            }
          },
          "segments": [
            "PUBLIC"
          ],
          "firstTimeBuyer": false
        },
        "account": null
      },
      "lineItems": [
      ],
      "quantity": 0,
      "requiresShipping": false,
      "shippingAddress": null,
      "billingAddress": null,
      "shippingContact": null,
      "billingContact": null,
      "modifierFields": {
        "name": "default"
      },
      "selectedShippingOption": null,
      "shoppingCartPricing": {
        "subtotal": 0,
        "cartSubtotalDiscounts": 0,
        "shipping": null,
        "beforeCartDiscountsSubtotal": 0,
        "total": 0,
        "taxes": 0
      }
    }
  }
}
```

### Shopping cart item events

The shopping cart item event webhook is invoked when an item is added, updated, or removed in a shopping cart. For more details, see [Extension Point: Shopping Cart Item Events](https://documentation.elasticpath.com/extension-framework/docs/extension-points/shopping-cart-item-events.html).

The top-level object contains two fields: `eventType`, which describes which event was triggered, and `contextObject`, which is a serialized representation of [XPFCartItemShopperEventContext](https://documentation.elasticpath.com/extension-framework/javadocs/1.3.x/com/elasticpath/xpf/connectivity/context/XPFCartItemShopperEventContext.html).

An example of the JSON object payload for these events is shown below:

```json
{
  "eventType": "SHOPPING_CART_ITEM_ADDED",
  "contextObject": {
    "customData": {},
    "shoppingItem": {
      "customData": {},
      "guid": "8c94a8fd-2bbb-49aa-90f8-937ee65c7db6",
      "productSku": {
        "customData": {},
        "code": "alien_sku",
        "displayNames": {
        },
        "optionValues": [
        ],
        "attributeValues": {
        },
        "effectiveStartDate": 1395431340,
        "effectiveEndDate": null,
        "shippable": false,
        "inventory": null
      },
      "children": [
      ],
      "quantity": 1,
      "modifierFields": {
      }
    },
    "shoppingCart": {
      "customData": {},
      "guid": "698c2f87-6bcf-43bb-b3e6-0cafa25bac20",
      "cartOrderGuid": "b755ea0a-318b-4789-9cee-d2674bd7fdaf",
      "shopper": {
        "customData": {},
        "session": {
          "customData": {},
          "currency": "CAD",
          "locale": "en",
          "tagSet": {
            "SELLING_CHANNEL": "MOBEE",
            "SHOPPING_START_TIME": 1723587417293
          }
        },
        "store": {
          "customData": {},
          "code": "MOBEE",
          "name": "Mobee",
          "timeZone": "Europe/London",
          "catalog": {
            "customData": {},
            "code": "Mobile"
          },
          "defaultCurrency": "CAD",
          "defaultLocale": "en",
          "cartTypes": [
            {
              "customData": {},
              "name": "SHOPPING_CART",
              "modifierGroups": [
                {
                  "customData": {},
                  "modifierFields": [
                    {
                      "customData": {},
                      "code": "name",
                      "required": true,
                      "maxSize": 255,
                      "modifierType": "SHORT_TEXT",
                      "modifierFieldOptions": [
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "supportedCurrencies": [
            "EUR",
            "CAD"
          ],
          "supportedLocales": [
            "fr_CA",
            "fr",
            "en"
          ]
        },
        "user": {
          "customData": {},
          "guid": "4FEE8C7F-1F50-3D62-08F1-67E3CE1928A3",
          "sharedId": "MOBEE:BEN.BOXER@ELASTICPATH.COM",
          "email": "ben.boxer@example.com",
          "status": "STATUS_ACTIVE",
          "type": "REGISTERED_USER",
          "attributeValues": {
            "": {
              "CP_PREF_LOCALE": {
                "customData": {},
                "stringValue": "en",
                "value": "en",
                "attribute": {
                  "customData": {},
                  "key": "CP_PREF_LOCALE",
                  "localized": false,
                  "displayNames": {
                    "en": "Preferred Locale"
                  }
                }
              },
              "CP_BE_NOTIFIED": {
                "customData": {},
                "stringValue": "false",
                "value": false,
                "attribute": {
                  "customData": {},
                  "key": "CP_BE_NOTIFIED",
                  "localized": false,
                  "displayNames": {
                    "en": "Be notified of News"
                  }
                }
              },
              "CP_EMAIL": {
                "customData": {},
                "stringValue": "ben.boxer@example.com",
                "value": "ben.boxer@example.com",
                "attribute": {
                  "customData": {},
                  "key": "CP_EMAIL",
                  "localized": false,
                  "displayNames": {
                    "en": "Email"
                  }
                }
              },
              "CP_PHONE": {
                "customData": {},
                "stringValue": "1-432-334-1029",
                "value": "1-432-334-1029",
                "attribute": {
                  "customData": {},
                  "key": "CP_PHONE",
                  "localized": false,
                  "displayNames": {
                    "en": "Phone Number"
                  }
                }
              },
              "CP_LAST_NAME": {
                "customData": {},
                "stringValue": "boxer",
                "value": "boxer",
                "attribute": {
                  "customData": {},
                  "key": "CP_LAST_NAME",
                  "localized": false,
                  "displayNames": {
                    "en": "Last Name"
                  }
                }
              },
              "CP_FIRST_NAME": {
                "customData": {},
                "stringValue": "ben",
                "value": "ben",
                "attribute": {
                  "customData": {},
                  "key": "CP_FIRST_NAME",
                  "localized": false,
                  "displayNames": {
                    "en": "First Name"
                  }
                }
              }
            }
          },
          "segments": [
            "PUBLIC"
          ],
          "firstTimeBuyer": false
        },
        "account": null
      },
      "lineItems": [
        {
          "customData": {},
          "guid": "8c94a8fd-2bbb-49aa-90f8-937ee65c7db6",
          "productSku": {
            "customData": {},
            "code": "alien_sku",
            "displayNames": {
            },
            "optionValues": [
            ],
            "attributeValues": {
            },
            "effectiveStartDate": 1395431340,
            "effectiveEndDate": null,
            "shippable": false,
            "inventory": null
          },
          "children": [
          ],
          "quantity": 1,
          "modifierFields": {
          }
        }
      ],
      "quantity": 1,
      "requiresShipping": false,
      "shippingAddress": null,
      "billingAddress": null,
      "shippingContact": null,
      "billingContact": null,
      "modifierFields": {
        "name": "default"
      },
      "selectedShippingOption": null,
      "shoppingCartPricing": {
        "subtotal": 20,
        "cartSubtotalDiscounts": 0,
        "shipping": null,
        "beforeCartDiscountsSubtotal": 20,
        "total": 20,
        "taxes": 20
      }
    }
  }
}
```

### Order released events

The order released event webhook is invoked when an order is ready for be released for fulfillment. For more details, see [Extension Point: Order Release Events](https://documentation.elasticpath.com/extension-framework/docs/extension-points/order-release-events.html).

The top-level object contains two fields: `eventType`, which describes which event was triggered, and `contextObject`, which is a serialized representation of [XPFOrderReleaseEventContext](https://documentation.elasticpath.com/extension-framework/javadocs/1.3.x/com/elasticpath/xpf/connectivity/context/XPFOrderReleaseEventContext.html).

An example of the JSON object payload for these events is shown below:

```json
{
  "eventType": "ORDER_RELEASED",
  "contextObject": {
    "customData": {},
    "order": {
      "customData": {},
      "orderNumber": "20001",
      "createdDate": 1723587437760,
      "locale": "en",
      "currency": "CAD",
      "status": "COMPLETED",
      "store": {
        "customData": {},
        "code": "MOBEE",
        "name": "Mobee",
        "timeZone": "Europe/London",
        "catalog": {
          "customData": {},
          "code": "Mobile"
        },
        "defaultCurrency": "CAD",
        "defaultLocale": "en",
        "cartTypes": [
          {
            "customData": {},
            "name": "SHOPPING_CART",
            "modifierGroups": [
              {
                "customData": {},
                "modifierFields": [
                  {
                    "customData": {},
                    "code": "name",
                    "required": true,
                    "maxSize": 255,
                    "modifierType": "SHORT_TEXT",
                    "modifierFieldOptions": [
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "supportedCurrencies": [
          "EUR",
          "CAD"
        ],
        "supportedLocales": [
          "fr_CA",
          "fr",
          "en"
        ]
      },
      "account": null,
      "customer": {
        "customData": {},
        "guid": "4FEE8C7F-1F50-3D62-08F1-67E3CE1928A3",
        "sharedId": "MOBEE:BEN.BOXER@ELASTICPATH.COM",
        "email": "ben.boxer@example.com",
        "status": "STATUS_ACTIVE",
        "type": "REGISTERED_USER",
        "attributeValues": {
          "": {
            "CP_PREF_LOCALE": {
              "customData": {},
              "stringValue": "en",
              "value": "en",
              "attribute": {
                "customData": {},
                "key": "CP_PREF_LOCALE",
                "localized": false,
                "displayNames": {
                  "en": "Preferred Locale"
                }
              }
            },
            "CP_BE_NOTIFIED": {
              "customData": {},
              "stringValue": "false",
              "value": false,
              "attribute": {
                "customData": {},
                "key": "CP_BE_NOTIFIED",
                "localized": false,
                "displayNames": {
                  "en": "Be notified of News"
                }
              }
            },
            "CP_EMAIL": {
              "customData": {},
              "stringValue": "ben.boxer@example.com",
              "value": "ben.boxer@example.com",
              "attribute": {
                "customData": {},
                "key": "CP_EMAIL",
                "localized": false,
                "displayNames": {
                  "en": "Email"
                }
              }
            },
            "CP_PHONE": {
              "customData": {},
              "stringValue": "1-432-334-1029",
              "value": "1-432-334-1029",
              "attribute": {
                "customData": {},
                "key": "CP_PHONE",
                "localized": false,
                "displayNames": {
                  "en": "Phone Number"
                }
              }
            },
            "CP_LAST_NAME": {
              "customData": {},
              "stringValue": "boxer",
              "value": "boxer",
              "attribute": {
                "customData": {},
                "key": "CP_LAST_NAME",
                "localized": false,
                "displayNames": {
                  "en": "Last Name"
                }
              }
            },
            "CP_FIRST_NAME": {
              "customData": {},
              "stringValue": "ben",
              "value": "ben",
              "attribute": {
                "customData": {},
                "key": "CP_FIRST_NAME",
                "localized": false,
                "displayNames": {
                  "en": "First Name"
                }
              }
            }
          }
        },
        "segments": [
          "PUBLIC"
        ],
        "firstTimeBuyer": false
      },
      "lineItems": [
        {
          "customData": {},
          "guid": "d8896956-3046-4ffe-a65a-51d5a0a68854",
          "productSku": {
            "customData": {},
            "code": "alien_sku",
            "displayNames": {
            },
            "optionValues": [
            ],
            "attributeValues": {
            },
            "effectiveStartDate": 1395431340,
            "effectiveEndDate": null,
            "shippable": false
          },
          "quantity": 1,
          "listUnitPrice": 25.99,
          "saleUnitPrice": 20,
          "promoUnitPrice": 20,
          "unitPrice": 20,
          "discountAmount": 0,
          "taxAmount": 0.8,
          "amount": 20,
          "displayName": "Alien",
          "modifierFields": {
          },
          "children": [
          ],
          "taxLines": [
            {
              "customData": {},
              "jurisdictionId": "US",
              "regionId": "NY",
              "taxName": "States Sales Tax",
              "taxCode": "GOODS",
              "taxAmount": 0.8,
              "taxRate": 0.04,
              "taxCalculationDate": 1723587439959
            }
          ],
          "inventoryAllocated": true,
          "savings": 5.99
        }
      ],
      "shipments": [
        {
          "customData": {},
          "shipmentNumber": "20001-1",
          "shipmentType": "ELECTRONIC",
          "status": "SHIPPED",
          "shippingInfo": null,
          "lineItems": [
            {
              "customData": {},
              "guid": "d8896956-3046-4ffe-a65a-51d5a0a68854",
              "productSku": {
                "customData": {},
                "code": "alien_sku",
                "displayNames": {
                },
                "optionValues": [
                ],
                "attributeValues": {
                },
                "effectiveStartDate": 1395431340,
                "effectiveEndDate": null,
                "shippable": false
              },
              "quantity": 1,
              "listUnitPrice": 25.99,
              "saleUnitPrice": 20,
              "promoUnitPrice": 20,
              "unitPrice": 20,
              "discountAmount": 0,
              "taxAmount": 0.8,
              "amount": 20,
              "displayName": "Alien",
              "modifierFields": {
              },
              "children": [
              ],
              "taxLines": [
                {
                  "customData": {},
                  "jurisdictionId": "US",
                  "regionId": "NY",
                  "taxName": "States Sales Tax",
                  "taxCode": "GOODS",
                  "taxAmount": 0.8,
                  "taxRate": 0.04,
                  "taxCalculationDate": 1723587439959
                }
              ],
              "inventoryAllocated": true,
              "savings": 5.99
            }
          ],
          "itemSubtotal": 20,
          "subtotalDiscount": 0,
          "itemTax": 0.8,
          "taxCalculationMethod": "EXCLUSIVE_TAX",
          "taxDocumentId": "20001-1.bd1d79d3-3bf1-410c-81fb-a916202a298c",
          "totalTaxLines": [
            {
              "customData": {},
              "taxCategoryName": "States Sales Tax",
              "taxCategoryDisplayName": "States Sales Tax",
              "amount": 0.8
            }
          ],
          "shippingCost": null,
          "totalBeforeTax": 20,
          "shippingTax": null,
          "total": 20.8,
          "taxInclusive": false
        }
      ],
      "billingAddress": {
        "customData": {},
        "street1": "Hoyip Chinese Restaurant",
        "street2": "110 Liberty Street",
        "street3": null,
        "city": "New York",
        "country": "US",
        "subCountry": "NY",
        "zipOrPostalCode": "NY 10006"
      },
      "billingContact": {
        "customData": {},
        "firstName": "ben",
        "lastName": "boxer",
        "organization": null,
        "phoneNumber": "+1 212-349-8286",
        "faxNumber": null
      },
      "modifierFields": {
        "name": "default"
      },
      "subtotal": 20,
      "shipping": 0,
      "taxes": 0.8,
      "total": 20.8,
      "payments": [
        {
          "customData": {},
          "guid": "785d224d-8b94-40cb-93d8-54849be9c405",
          "transactionDate": 1723587440073,
          "paymentTransactionType": "CHARGE",
          "status": "APPROVED",
          "amount": 20.8,
          "currency": "CAD",
          "paymentInstrument": {
            "customData": {},
            "billingAddress": null,
            "billingContact": null,
            "name": "a",
            "paymentInstrumentData": {
            },
            "paymentProviderConfiguration": {
              "customData": {},
              "guid": "smart-path-payment-provider-config",
              "paymentProviderPluginId": "smartPathPaymentProviderPlugin",
              "configurationName": "Smart Path Config",
              "defaultDisplayName": null
            },
            "singleReservePerPI": false,
            "supportingMultiCharges": false
          },
          "paymentData": {
          }
        },
        {
          "customData": {},
          "guid": "4c93c8b4-5c55-4351-9df8-5491f6548311",
          "transactionDate": 1723587437828,
          "paymentTransactionType": "RESERVE",
          "status": "APPROVED",
          "amount": 20.8,
          "currency": "CAD",
          "paymentInstrument": {
            "customData": {},
            "billingAddress": null,
            "billingContact": null,
            "name": "a",
            "paymentInstrumentData": {
            },
            "paymentProviderConfiguration": {
              "customData": {},
              "guid": "smart-path-payment-provider-config",
              "paymentProviderPluginId": "smartPathPaymentProviderPlugin",
              "configurationName": "Smart Path Config",
              "defaultDisplayName": null
            },
            "singleReservePerPI": false,
            "supportingMultiCharges": false
          },
          "paymentData": {
          }
        }
      ],
      "taxExemptionId": null,
      "orderPaymentInstruments": [
        {
          "customData": {},
          "guid": "96ae044b-bf0b-454e-9634-dc734ad89bdf",
          "name": "a",
          "paymentInstrument": {
            "customData": {},
            "billingAddress": null,
            "billingContact": null,
            "name": "a",
            "paymentInstrumentData": {
            },
            "paymentProviderConfiguration": {
              "customData": {},
              "guid": "smart-path-payment-provider-config",
              "paymentProviderPluginId": "smartPathPaymentProviderPlugin",
              "configurationName": "Smart Path Config",
              "defaultDisplayName": null
            },
            "singleReservePerPI": false,
            "supportingMultiCharges": false
          },
          "currency": "CAD",
          "limitAmount": 0
        }
      ],
      "hasSubtotalDiscount": false,
      "holds": [
      ]
    }
  }
}
```
