const webpack = require('webpack');
const path = require('path');
//const bundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const dist = path.join(__dirname, "wwwroot", "dist");

module.exports = {
    context: path.resolve(__dirname, './frontend'),
    //entry: "./frontend/index.tsx",
    entry: {
        app: './index.tsx'
    },
    //__dirname refers to the directory where this webpack.config.js lives, which in this blogpost is the project root
    output: {
        path: dist,
        filename: "[name].bundle.js"
        //publicPath: __dirname + "./wwwroot/dist/"
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    plugins: [
        new webpack.DllReferencePlugin({
            context: ".",
            manifest: require("./wwwroot/assets/vendor-manifest.json")
        })
        //new bundleAnalyzerPlugin({
        //    analyzerMode: 'static'
        //})
    ]
};