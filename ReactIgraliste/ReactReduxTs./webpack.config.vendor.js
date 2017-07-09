const webpack = require('webpack');
const path = require('path');
//const bundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const assets = path.join(__dirname, "wwwroot", "assets");

module.exports = {
    //context: path.resolve(__dirname, './frontend'),
    //entry: "./frontend/index.tsx",
    entry: {
        //app: './index.tsx',
        vendor: ['react', 'react-dom', 'react-router-dom', 'jquery']
    },
    //__dirname refers to the directory where this webpack.config.js lives, which in this blogpost is the project root
    output: {
        path: assets,
        filename: "[name].js",
        library: "[name]_dll"
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(assets, "[name]-manifest.json"),
            name: '[name]_dll'
        }),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery',
            'window.$': 'jquery',
            'window.jQuery': 'jquery'
        })
        //new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
    ]
};