const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports.default = {
    entry : { 
        polyfill : 'babel-polyfill', 
        index : './src/index.js',
    },
    output : {
        path : path.join(__dirname, "/public"),
        filename: '[name].bundle.js'
    },
    module: {
        rules:[
            {
                test : /\.js$/,
                exclude : /node_modules/,
                use : {
                    loader : 'babel-loader'
                }
            }, 
            {
                test : /\.css$/,
                
                use : [
                    'style-loader', 
                    'css-loader'
                ]
            } 
        ]     
    },
    plugins : [
        new HtmlWebpackPlugin({
            filename : 'index.html',
            template : './src/index.html'
        })
    ],
    devtool : 'eval',
    mode: 'production'
}