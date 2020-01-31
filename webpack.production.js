// Core
const merge = require('webpack-merge');


// Plugins
const CSSPlugin = require('mini-css-extract-plugin');


// Common
const common = require('./webpack.common');


// Utility
const { rule } = require('./webpack.utils');


/**
 * Production configuration extracts CSS from the bundled
 * output and creates a separate CSS file.
 */
module.exports = merge(common, {
    mode: 'production',
    module: {
        rules: [
            rule({
                test: /\.scss$/,
                use: [
                    CSSPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            }),
        ],
    },
    plugins: [
        new CSSPlugin(),
    ],
});
