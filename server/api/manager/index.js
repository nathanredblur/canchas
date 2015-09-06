'use strict';

var baucis = require("baucis"),
    auth = require('../../auth/auth.service'),
    model = require('./manager.model'),
    controller = baucis.rest('Manager');

// controller.request("post put delete", auth.hasRole('admin'));