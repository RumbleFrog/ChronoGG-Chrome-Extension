const webpack = require("webpack")
    , path = require('path')
    , CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: {
        index: path.join(__dirname, 'src', 'index.ts'),
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: 'src/manifest.json',
                to: 'manifest.json'
            }
        ])
    ]
};
