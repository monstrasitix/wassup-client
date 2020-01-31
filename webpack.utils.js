// Core
const path = require('path');


/**
 * Utility allowing to setup asset locations from project's root. This enable for easier
 * configuration while omitting the __dirname global on every invokation.
 * @summary Returns path resolved from project's root
 * @params {string} path - Path to be resolved
 * @returns {String} Resolved path
 */
const root = path.resolve.bind(undefined, __dirname);


/**
 * It's suggested to implement this function when defining a rule as it would persist some properties
 * which are common. For example it is highly likely that rules should exclude external packages.
 * @summary Rule helper
 * @param {Object} config - Webpack's module rule
 * @returns {Object} Transformed root
 */
const rule = config => ({
    ...config,
    exclude: [
        /node_modules/,
    ],
});



module.exports = {
    root,
    rule,
};