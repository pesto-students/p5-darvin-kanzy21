const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
module.exports = {
    entry: './src/app.js',
    mode: 'production',
    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle.js',
    },
    plugins: [new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "[name].css",
        chunkFilename: "[id].css",
    })],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    process.env.NODE_ENV !== "production"
                        ? "style-loader"
                        : MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass"),
                            sassOptions: {
                                fiber: false,
                            },
                        },
                    },
                ],
            },
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false,
            }),
            new OptimizeCssAssetsPlugin(),
        ],
    },
};
