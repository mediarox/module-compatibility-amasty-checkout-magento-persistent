/**
 * Copyright 2022 (c) mediarox UG (haftungsbeschraenkt) (http://www.mediarox.de)
 * See LICENSE for license details.
 */
define([
    'jquery'
],function ($) {
    'use strict';

    var mixin = {
        // override
        initialize: function () {
            this._super();
            this.initEmailCheck();
        },
        initEmailCheck: function () {
            $.async(this.loginFormSelector, function () {
                if (this.validateEmail()) {
                    this.checkEmailAvailability();
                }
            }.bind(this));
        }
    };

    return function (target) { 
        return target.extend(mixin);
    };
});