// Plugins
const HtmlWebpackPugin = require('html-webpack-plugin');


// Utilities
const { root, rule } = require('./webpack.utils');


/**
 * @todo Add PostCSS
 * @todo Add CSS Modules feature
 * Common configuration applies to all environments as is essential for
 * bundling the whole project. Consider that it includes application's root
 * source and path for output source.
 * 
 * Configuration includes:
 *  - TypeScipt transpilation
 *  - SCSS transpilation
 *  - Image resolvement
 *  - Bundle injection inside the provided HTML template
 */
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
                test: /\.(png|jpe?g|gif)$/,
                use: 'file-loader',
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