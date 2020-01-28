// Plugins
const HtmlWebpackPugin = require('html-webpack-plugin');


// Utilities
const { root, rule } = require('./webpack.utils');


module.exports = {
    entry: {
        app: root('./src/index.tsx'),
    },
    output: {
        path: root('./dist'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            rule({
                test: /\.tsx?$/,
                use: 'ts-loader',
            }),
            rule({
                test: /\.scss?$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            }),
        ],
    },
    resolve: {
        extensions: [
            '.js',
            '.ts',
            '.tsx',
            '.json',
            '.scss',
        ],
    },
    plugins: [
        new HtmlWebpackPugin({
            filename: 'index.html',
            template: root('./src/index.html'),
        }),
    ],
};