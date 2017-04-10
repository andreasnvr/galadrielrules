var conditions, actions, submit, serviceOptions;
(function ($) {
  function onReady() {
    serviceOptions = $(".service_options");
    addService  = $("#add_service");
    removeService  = $("#remove_service");  

    conditions = $(".conditions_start");
    actions = $(".actions_start");
    submit = $("#submit");

    initializeActions(actions, conditions);
    initializeForm();
  }

  function initializeActions(actionsEl, condsEl) {
    actionsEl.actionsBuilder({
      fields: [
      {
        "label": "Give Direct Discount",
        "name": "CalculateDirectDiscount",
        "fields": [
          {
            "label": "from",
            "hint": "with data type of",
            "name": "data_type",
            "validator": "data_type_id",
            "fieldType": "select",
            "options": [
              {
                "label": "Grand Total",
                "name": "grand_total"
              },
              {
                "label": "Recharge Price",
                "name": "recharge_price"
              }
            ]
          },
          {
            "hint": "with type of",
            "name": "type",
            "validator": "not_empty",
            "fieldType": "select",
            "options": [
              {
                "label": "percentage",
                "name": "percentage",
                "fields": [
                  {
                    "hint": "with max cap of",
                    "name": "max_cap",
                    "validator": "number_only",
                    "fieldType": "text"
                  },
                  {
                    "hint": "with percentage of",
                    "validator": "custom_id",
                    "name": "percentage",
                    "fieldType": "text"
                  }
                ]
              },
              {
                "label": "direct discount",
                "name": "direct",
                "fields": [
                  {
                    "hint": "with amount of",
                    "validator": "number_only",
                    "name": "amount",
                    "fieldType": "text"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "label": "Give Cashback Toppoints",
        "name": "CalculationCashback",
        "fields": [
          {
            "label": "from",
            "hint": "with data type of",
            "name": "data_type",
            "validator": "data_type_id",
            "fieldType": "select",
            "options": [
              {
                "label": "Grand Total",
                "name": "grand_total"
              },
              {
                "label": "Recharge Price",
                "name": "recharge_price"
              }
            ]
          },
          {
            "hint": "with type of",
            "name": "type",
            "validator": "not_empty",
            "fieldType": "select",
            "options": [
              {
                "label": "percentage",
                "name": "percentage",
                "fields": [
                  {
                    "hint": "with max cap of",
                    "name": "max_cap",
                    "validator": "number_only",
                    "fieldType": "text"
                  },
                  {
                    "hint": "with percentage of",
                    "validator": "custom_id",
                    "name": "percentage",
                    "fieldType": "text"
                  }
                ]
              },
              {
                "label": "fixed amount",
                "name": "direct",
                "fields": [
                  {
                    "hint": "with amount of",
                    "validator": "number_only",
                    "name": "amount",
                    "fieldType": "text"
                  }
                ]
              }
            ]
          }
        ]
      },
      { 
        "label": "Give 3rd party voucher",
        "name": "CalculateCashbackVoucher",
        "fields": [
          {
            "label": "Promo ID",
            "hint": "with promo id",
            "name": "promo_id",
            "fieldType": "text"
          },
          {
            "label": "Email Content ID",
            "hint" : "With Email Content ID :",
            "name": "email_template_id",
            "fieldType": "text"
          },
        ]
      },
      { 
        "label": "Give Cashback Toppoints",
        "name": "CashbackTopPoints",
        "fields": [
          {
            "label": "Reason",
            "hint": "with Reason",
            "name": "promo_id",
            "fieldType": "text"
          },
          {
            "label": "Notes",
            "hint": "with notes",
            "fieldType": "text"
          },
        ]
      },
      { 
        "label": "Give Cashback Voucher (Finish)",
        "name": "CreateVoucherAfterFinish",
        "fields": [
          {
            "label": "Minimum Payment",
            "hint": "with minimum payment of",
            "name": "min_payment",
            "fieldType": "text"
          },
          {
            "label": "Code",
            "hint": "with code pairing of",
            "name": "code",
            "fieldType": "text"
          },
          {
            "label": "Notes",
            "hint": "with notes of",
            "name": "notes",
            "fieldType": "text"
          }
        ]
      },
      { 
        "label": "Calculate Cashback Voucher (Calculate)",
        "name": "CalculateCashbackVoucher",
        "fields": [
          {
            "label": "Minimum Payment",
            "hint": "with minimum payment of",
            "name": "min_payment",
            "fieldType": "text"
          },
          {
            "label": "Notes",
            "hint": "with notes of",
            "name": "notes",
            "fieldType": "text"
          }
        ]
      }
      ],
      data: []
    });

   condsEl.actionsBuilder({
      fields: [
      {
        "label": "With Minimum usage",
        "name": "IsAboveMinimumUsage",
        "fields": [
          {
            "hint": "from",
            "name": "data_type",
            "validator": "data_type_id",
            "fieldType": "select",
            "options": [
              {
                "label": "Grand Total",
                "name": "grand_total"
              },
              {
                "label": "Recharge Price",
                "name": "recharge_price"
              }
            ]
          },
          {
            "hint": "with amount of",
            "name": "type",
            "validator": "not_empty",
            "fieldType": "text"
          },
          {
            "label": "Can be Refunded",
            "hint": "and",
            "name": "data_type",
            "validator": "data_type_id",
            "fieldType": "select",
            "options": [
              {
                "label": "Can be Refunded",
                "name": "can_be_refunded",
                "fields": [
                  {
                    "name": "operator",
                    "hint": "with minimum refund of voucher amount",
                    "fieldType": "text"
                  },
                  {
                    "name": "min_amount",
                    "fieldType": "text"
                  },
                  {
                    "name": "count_refund",
                    "hint": "with maximum refund of",
                    "last_hint": "times",
                    "fieldType": "text"
                  }
                ]
              },
              {
                "label": "Cannot be Refunded",
                "name": "cannot_be_refunded"
              }
            ]
          }
        ]
      },
      {
        "label": "With Expiry Time",
        "name": "IsVoucherNotExpired",
        "fields": [
          {
            "hint": "+",
            "last_hint": " days from cashback time",
            "name": "expiry_time",
            "fieldType": "text"
          },
        ]
      },
      {
        "label": "With Maximum Usage",
        "name": "IsUniqueIdentity",
        "fields": [
          {
            "hint": "of",
            "name": "data_type",
            "validator": "data_type_id",
            "fieldType": "select",
            "options": [
              {
                "label": "UserID",
                "name": "user_id"
              },
              {
                "label": "msisdn",
                "name": "msisdn"
              },
              {
                "label": "Client Number",
                "name": "client_number"
              }
            ]
          },
          {
            "hint": "maximum of",
            "last_hint": "times",
            "name": "max_count",
            "fieldType": "text",
          },
          {
            "hint": "per",
            "name": "expiry_time",
            "fieldType": "select",
            "options": [
              {
                "label": "Day",
                "name": "day"
              },
              {
                "label": "Promo",
                "name": "promo"
              }
            ]
          }
        ]
      },
      {
        "label": "With Maximum Payment Usage",
        "name": "IsUniqueCreditCardNumber",
        "fields": [
          {
            "hint": "of",
            "name": "data_type",
            "validator": "data_type_id",
            "fieldType": "select",
            "options": [
              {
                "label": "KlikBCA Username",
                "name": "klik_bca_user_name"
              },
              {
                "label": "Mandiri ClickPay Number",
                "name": "mandiri_clickpay_number"
              },
              {
                "label": "Credit Card Number",
                "name": "credit_card_number"
              }
            ]
          },
          {
            "hint": "maximum of",
            "last_hint": "times",
            "name": "max_count",
            "fieldType": "text",
          },
          {
            "hint": "per",
            "name": "expiry_time",
            "fieldType": "select",
            "options": [
              {
                "label": "Day",
                "name": "day"
              },
              {
                "label": "Promo",
                "name": "promo"
              }
            ]
          }
        ]
      },
      {
        "label": "With Payment Gateway",
        "name": "GetValidPaymentMethod",
        "fields": [
          {
            "hint": "of",
            "name": "pg_id",
            "fieldType": "select",
            "options": [
              {
                "label": "All",
                "name": "0"
              },
              {
                "label": "Saldo Tokopedia",
                "name": "1"
              },
              {
                "label": "TokoCash",
                "name": "2"
              },
              {
                "label": "CreditCard",
                "name": "4"
              },
              {
                "label": "Klik BCA",
                "name": "8"
              }
            ]
          },
        ]
      },
      { 
        "label": "Can Be Refunded",
        "name": "RefundCode",
        "fields": [
          {
            "hint": "with maximum refund cout of",
            "last_hint" : "times",
            "name": "max_refund",
            "fieldType": "text"
          },
          {
            "hint": "with Base Code of",
            "name": "base_code",
            "fieldType": "text"
          },
          {
            "hint": "with length code of",
            "name": "length",
            "fieldType": "text"
          }
        ]
      },
      { 
        "label": "With Valid Bin",
        "name": "IsValidBIN",
        "fields": [
          {
            "hint": "from list of bank :",
            "name": "banks",
            "fieldType": "text"
          },
          {
            "hint": "with bin",
            "name": "bin_list",
            "fieldType": "text"
          },
          {
            "hint": "with excluded bin",
            "name": "ex_bin_list",
            "fieldType": "text"
          },
        ]
      },
      { 
        "label": "With Valid Env of",
        "name": "IsValidEnvironment",
        "fields": [
          {
            "label": "from",
            "name": "env",
            "fieldType": "select",
            "options": [
              {
                "label": "Dekstop",
                "name": "default_v3"
              },
              {
                "label": "Mobile Web",
                "name": "mobile"
              },
              {
                "label": "Android",
                "name": "android"
              },
              {
                "label": "Ios",
                "name": "ios"
              }
            ]
          }
        ]
      },
      { 
        "label": "Is valid Pulsa Product of",
        "name": "IsValidPulsaProduct",
        "fields": [
          {
            "label": "from",
            "name": "product_id_list",
            "fieldType": "select",
            "options": [
              {
                "label": "pulsa",
                "name": "default_v3"
              },
              {
                "label": "token listrik",
                "name": "mobile"
              },
              {
                "label": "bpjs",
                "name": "android"
              },
              {
                "label": "sexy woman",
                "name": "ios"
              }
            ]
          }
        ]
      },
      { 
        "label": "Is valid Promo days",
        "name": "IsValidPromoDays",
        "fields": [
          {
            "label": "of",
            "name": "day_list",
            "fieldType": "select",
            "options": [
              {
                "label": "monday",
                "name": "default_v3"
              },
              {
                "label": "sunday",
                "name": "mobile"
              },
              {
                "label": "thursday",
                "name": "android"
              }
            ]
          }
        ]
      },
      { 
        "label": "With Minimum Ticket Count",
        "name": "CashbackTopPoints",
        "fields": [
          {
            "label": "of",
            "name": "count",
            "fieldType": "text"
          }
        ]
      },
      { 
        "label": "Is New User Platform",
        "name": "IsNewUserPlatform",
        "fields": [
          {
            "label": "of",
            "hint": "with data type of",
            "name": "data_type",
            "validator": "data_type_id",
            "fieldType": "select",
            "options": [
              {
                "label": "KAI",
                "name": "kai_new_user"
              },
              {
                "label": "Recharge",
                "name": "recharge_new_user"
              }
            ]
          },
          {
            "label": "of",
            "name": "start from date",
            "fieldType": "text"
          }
        ]
      },
      { 
        "label": "With Valid MarketPlace Shop",
        "name": "IsValidBIN",
        "fields": [
          {
            "hint": "from list of Shop :",
            "name": "valid_shop",
            "fieldType": "text"
          },
          {
            "hint": "with shop name of",
            "name": "shop_name_list",
            "fieldType": "text"
          }
        ]
      },
      { 
        "label": "With Valid Product",
        "name": "IsValidBIN",
        "fields": [
          {
            "hint": "from list of Product :",
            "name": "valid_product",
            "fieldType": "text"
          },
          {
            "hint": "with product name of",
            "name": "prod_name_list",
            "fieldType": "text"
          },
          {
            "hint": "exclude product of",
            "name": "prod_name_list",
            "fieldType": "text"
          }
        ]
      },
      { 
        "label": "With Valid Similar user of",
        "name": "IsValidBIN",
        "fields": [
           {
            "label": "of",
            "hint": "with data type of",
            "name": "data_type",
            "validator": "data_type_id",
            "fieldType": "select",
            "options": [
              {
                "label": "email",
                "name": "email"
              },
              {
                "label": "msisdn",
                "name": "msisdn"
              },
              {
                "label": "client number",
                "name": "client_number"
              }
            ]
          },
          {
            "hint": "with percentage of",
            "name": "identifier_list",
            "fieldType": "text"
          },
          {
            "hint": "identifier percentage",
            "name": "identifier_percentage",
            "fieldType": "text"
          }
        ]
      },
      { 
        "label": "Is Valid Pulsa Category",
        "name": "IsValidPulsaCategory",
        "fields": [
          {
            "hint": "from list of Category :",
            "name": "cat_product",
            "fieldType": "text"
          },
          {
            "hint": "with Category name of",
            "name": "cat_name_list",
            "fieldType": "text"
          },
          {
            "hint": "exclude category of",
            "name": "cat_name_list",
            "fieldType": "text"
          }
        ]
      },
      { 
        "label": "Is Valid Pulsa Category",
        "name": "IsValidPulsaCategory",
        "fields": [
          {
            "hint": "from list of Category :",
            "name": "cat_product",
            "fieldType": "text"
          },
          {
            "hint": "with Category name of",
            "name": "cat_name_list",
            "fieldType": "text"
          },
          {
            "hint": "exclude category of",
            "name": "cat_name_list",
            "fieldType": "text"
          }
        ]
      },
      { 
        "label": "With Valid Courier",
        "name": "IsValidCourier",
        "fields": [
           {
            "label": "list of",
            "hint": "list of",
            "name": "shipping_id",
            "validator": "shipping_id",
            "fieldType": "select",
            "options": [
              {
                "label": "jne",
                "name": "jne"
              },
              {
                "label": "tiki",
                "name": "tiki"
              },
              {
                "label": "grab",
                "name": "grab"
              }
            ]
          },
          {
            "hint": "couirer name of",
            "name": "identifier_list",
            "fieldType": "text"
          },
          {
            "label": "can be mixed",
            "hint": "and",
            "name": "shipping_id",
            "validator": "shipping_id",
            "fieldType": "select",
            "options": [
              {
                "label": "can be mixed",
                "name": "jne"
              },
              {
                "label": "cannot be mixed",
                "name": "tiki"
              }
            ]
          },
        ]
      },
      { 
        "label": "With included",
        "name": "IsValidBIN",
        "fields": [
           {
            "label": "list of datatype",
            "hint": "with data type of",
            "name": "shipping_id",
            "validator": "shipping_id",
            "fieldType": "select",
            "options": [
              {
                "label": "product_id",
                "name": "jne"
              },
              {
                "label": "something else",
                "name": "tiki"
              }
            ]
          },
          {
            "hint": "with list of valid product of",
            "name": "product_id_list",
            "fieldType": "text"
          },
          {
            "label": "can be mixed",
            "hint": "and",
            "name": "shipping_id",
            "validator": "shipping_id",
            "fieldType": "select",
            "options": [
              {
                "label": "can be mixed",
                "name": "jne"
              },
              {
                "label": "cannot be mixed",
                "name": "tiki"
              }
            ]
          },
          {
            "label": "can be mixed",
            "hint": "and",
            "name": "shipping_id",
            "validator": "shipping_id",
            "fieldType": "select",
            "options": [
              {
                "label": "can be mixed",
                "name": "jne"
              },
              {
                "label": "cannot be mixed",
                "name": "tiki"
              }
            ]
          },
        ]
      },
      { 
        "label": "With valid quota",
        "name": "IsValidPromoQuota",
        "fields": [
           {
            "label": "list of id",
            "hint": "with id of",
            "name": "shipping_id",
            "fieldType": "select",
            "options": [
              {
                "label": "promo",
                "name": "jne"
              },
              {
                "label": "promo code",
                "name": "tiki"
              }
            ]
          },
          {
            "label": "With Aggreate of",
            "hint": "With Aggreate of",
            "name": "shipping_id",
            "fieldType": "select",
            "options": [
              {
                "label": "count",
                "name": "jne"
              },
              {
                "label": "sum",
                "name": "tiki"
              }
            ]
          },
          {
            "label": "every",
            "hint": "every",
            "name": "shipping_id",
            "fieldType": "select",
            "options": [
              {
                "label": "day",
                "name": "jne",
                "fields": [
                   {
                  "label": "promo",
                  "name": "tiki",
                  "hint": "with quota of",
                  "fieldType": "text"
                   }
                ]
              },
              {
                "label": "promo",
                "name": "tiki"
              },
              {
                "label": "time window",
                "name": "tiki"
              }
            ]
          },
          {
            "label": "time window",
            "hint": "from service :",
            "name": "tiki",
             "fieldType": "select",
             "options": [
              {
                "label": "KAI",
                "name": "jne"
              },
              {
                "label": "Recharge",
                "name": "tiki"
              },
              {
                "label": "Market Place",
                "name": "tiki"
              }
            ]
          }
        ]
      },
      {
        "label": "Set Cashback Schedule",
        "name": "tiki",
         "fields": [
          {
            "label": "period",
            "hint": "With Period of",
            "fieldType" : "text",
            "name": "jne"
          },
          {
            "label": "Percentage",
            "fieldType" : "text",
            "hint": "With Percentage of",
            "name": "tiki"
          },
          {
            "label": "Count",
            "fieldType" : "text",
            "hint": "With Count of",
            "name": "tiki"
          }
        ]
      }
      ],
      data: []
    });
  }

  function initializeForm() {
  addService.click(function (e) {
      e.preventDefault();
      var newCon = $("#container_separator_template").children().clone().appendTo($("#parent_container"));

      var removeLink = $("<button>", {
        "class": "remove_service",
        "text": "Remove Service"
      });
      removeLink.click(function (e) {
        e.preventDefault();
        newCon.remove();
      });

      conditions = newCon.find(".conditions");
      actions    = newCon.find(".actions_con");

      initializeActions(actions, conditions);

      newCon.show()

      newCon.append(removeLink);
    });

  /*
    for (var i = 0; i < occupationOptions.length; i++) {
      var o = occupationOptions[i];
      occupationField.append($("<option>", {
        value: o.name,
        text: o.label
      }));
    }*/
/*
    submit.click(function (e) {
      e.preventDefault();
      var engine = new RuleEngine({
        conditions: conditions.conditionsBuilder("data"),
        actions: actions.actionsBuilder("data")
      });
      var conditionsAdapter = {
        nameField: nameField.val(),
        ageField: ageField.val(),
        occupationField: occupationField.val()
      };
      var actionsAdapter = {
        alert: function (data) {
          alert(data.find("message"));
        },
        updateField: function (data) {
          console.log("data", data);
          var fieldId = data.find("fieldId");
          console.log("fieldId", fieldId);
          var field = $("#" + fieldId);
          var val = data.find("fieldId", "newValue");
          field.val(val);
        }
      };
      engine.run(conditionsAdapter, actionsAdapter);
    });*/
  }
  $(onReady);
})(jQuery);
