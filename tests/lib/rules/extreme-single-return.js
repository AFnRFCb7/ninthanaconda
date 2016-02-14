/**
 * @fileoverview A function should only have one line of code and that line of code should be a return statement.
 * @author Emory Merryman
 * @copyright 2016 Emory Merryman. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/extreme-single-return"),

    RuleTester = require("../../../lib/testers/rule-tester");


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("extreme-single-return", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "function(a,b){var c=a+b; return c;}",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
