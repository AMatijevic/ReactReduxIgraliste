const webpack = require('webpack');
const path = require('path');

module.exports = {
    context: path.resolve(__dirname, './frontend'),
    //entry: "./frontend/index.tsx",
    entry: {
        app: './index.tsx',
        vendor: ['react', 'react-dom']
    },
    //__dirname refers to the directory where this webpack.config.js lives, which in this blogpost is the project root
    output: {
        filename: "[name].bundle.js",
        path: __dirname + "/wwwroot/dist"
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
    }
};