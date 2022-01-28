### Compatibility module for
* amasty/module-single-step-checkout
* magento/module-persistent

#### Corrected behaviors

1. **Initial check if the email address loaded from browser storage already exists in the system**

   In the standard of Amasty/Magento the following distinction is made in the checkout:

   * A: New customer. He might need a new account.
   * B: Old customer. He could possibly log in.

   These distinctions result in different layouts. For example, in case B, no "Confirm password" field is displayed.
   If you now decide to turn on persistence within Magento, it is much more likely that the email address is already in the browser's memory.
   Since Amasty does not directly check if this email address already exists in Magento when initially building the email form, the layout (A or B) may be incorrect, which can cause the customer to be prevented from logging in.
   So we extend the associated component (Amasty_Checkout/js/view/form/element/email) and its "initialize" method with a mixin and add the check.


#### Installation
```bash
composer require mediarox/module-compatibility-amasty-checkout-magento-persistent
bin/magento setup:upgrade
```

#### Notice

Further suggestions, corrections or features (pull requests or issues) are welcome.