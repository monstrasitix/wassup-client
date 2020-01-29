// Core
const merge = require('webpack-merge');


// Common
const common = require('./webpack.common');


// Utility
const { root } = require('./webpack.utils');


module.exports = merge(common, {
    mode: 'development',
    watch: true,
    devServer: {
        port: 8000,
        hot: true,
        inline: true,
        contentBase: root('./src/assets'),
        // publicPath: root('./'),
    },
});
