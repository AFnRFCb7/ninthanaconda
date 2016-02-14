/**
 * @fileoverview custom eslint rules
 * @author Emory Merryman
 * @copyright 2016 Emory Merryman. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports.rules = requireIndex("./rules");



// import processors
module.exports.processors = {

    // add your processors here
};

