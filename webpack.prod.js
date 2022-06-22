const HtmlWebPack = require('html-webpack-plugin')
const MiniCssExtract = require("mini-css-extract-plugin");
const Copy = require("copy-webpack-plugin");
const CssMinimizer = require("css-minimizer-webpack-plugin");
const TerserWebPack = require('terser-webpack-plugin');

module.exports = {
    mode: 'production',

    output: {
       clean: true, 
       filename: 'main.[contenthash].js',
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false
                }
            },
            {
                test: /\.css$/,
                exclude: /styles.css$/,
                use: ['style-loader', 'css-loader'], 
            },
            {
                test: /styles.css$/,
                use: [MiniCssExtract.loader, 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            },
        ]
    },

    

    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizer(),
            new TerserWebPack(),
        ]
    },

    plugins: [
        new HtmlWebPack({
            title: 'Mi WebPack App',
            //filename: 'index.html',
            template: './src/index.html'
        }),
        new MiniCssExtract({
            filename: 'styles.[fullhash].css',
            ignoreOrder: false
        }),
        new Copy({
            patterns: [
                {from: 'src/assets/', to: 'assets/'}
            ]
            
        }),
        
    ],
}