
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');


module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname,'./dist'),
        clean: true,
        assetModuleFilename: "images/test.png"
    },
    mode: "development",
    devtool: "inline-source-map",
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            filename: "app.html",
            inject: "body"
        }),
        new MiniCssExtractPlugin({
            filename: 'style/[contenthash].css'
        })
    ],
    devServer: {
        static: "./dist",
    },

    module: {
        rules: [
            {
                test: /\.png$/,
                type: "asset/resource",
                generator: {
                    filename: "assets/images/[contenthash][ext]"
                }
            },
            {
                test: /\.svg$/,
                type: "asset/inline"
            },
            {
                test: /\.txt$/,
                type: "asset/source"
            },
            {
                test: /\.jpg$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 4 * 1024 * 1024
                    }
                }
            },
            {
                test: /\.(css|less)$/,
                // use: ['style-loader', 'css-loader', 'less-loader']
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource',
                generator: {
                    filename: "assets/font/[contenthash][ext]"
                }
            },
            {
                test: /\.(tsv|csv)$/,
                use: 'csv-loader'
            },
            {
                test: /\.xml$/,
                use: 'xml-loader'
            }
        ]
    },
    optimization: {
        minimizer: [
            new CssMinimizerWebpackPlugin()
        ]
    },
    performance: {
        hints: false
    }
}