var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractCSS = new ExtractTextPlugin('external.css')
const extractLESS = new ExtractTextPlugin('index.css')

module.exports = {
    devtool: 'eval',
    entry: [
        './src/app.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    devServer: {
        historyApiFallback: true,
        proxy: [{
            path: '/api/*',
            target: 'http://localhost:3001'
        }]
    },
    module: {
        rules: [
            {   
                test: /\.jsx?/,
                loaders: ['babel-loader'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.css$/,
                use: extractCSS.extract([
                    'css-loader'
                ])
            },
            {
                test: /\.less$/,
                loader: extractLESS.extract([
                    'css-loader',
                    'less-loader'
                ])
            }            
        ]
    },
    plugins: [
        extractCSS,
        extractLESS
    ]
}