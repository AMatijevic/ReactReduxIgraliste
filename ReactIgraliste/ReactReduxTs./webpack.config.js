/// <binding />
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
    devtool: "source-map",//"cheap-module-eval-source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, use: "awesome-typescript-loader" },
            { test: /\.css?$/, use: ['style-loader', 'css-loader'] },
            { test: /\.(png|jpg|jpeg|gif|eot|svg|ttf|woff|woff2|cur)$/, loader: 'url-loader?limit=25000' },
            { test: /\.(svg|ttf)$/, loader: 'file-loader?limit=25000' },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, use: "source-map-loader" }
          
        ]
    },
    plugins: [
        new webpack.DllReferencePlugin({
            context: ".",
            manifest: require("./wwwroot/assets/vendor-manifest.json")
        }),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery',
            'window.$': 'jquery',
            'window.jQuery': 'jquery'
        })
        //new bundleAnalyzerPlugin({
        //    analyzerMode: 'static'
        //})
    ]
};