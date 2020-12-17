const path = require('path');
const { CleanWebpackPlugin } = require ('clean-webpack-plugin');
const HtmlWebpackPlugin = require ('html-webpack-plugin');

module.exports = {
    entry: {
        'page1': './src/page1.js',
        'page2': './src/page2.js',
        'index': './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: ''
    },
    mode:'development',
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        index: 'index.html',
        port: 9000,
        writeToDisk: true
    },

    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test:/\.css$/,
                use:[
                    'style-loader', 'css-loader'
                ]
            },
            {
                test:/\.scss$/,
                use:[
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            },
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env', "@babel/preset-react"],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            },
            {
            test: /\.hbs$/,
            use: [
                'handlebars-loader'
            ]
        }
        ]
    },
    plugins : [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'page1.html',
            chunks: ['page1'],
            title: 'hello world handlebars',
            template: 'src/index.hbs',
            description: 'page 1 desc'
        }),
        new HtmlWebpackPlugin({
            filename: 'page2.html',
            chunks: ['page2'],
            title: 'page2',
            template: 'src/index.hbs',
            description: 'page 2 desc'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            chunks: ['index'],
            title: 'index',
            template: 'src/index.hbs',
            description: 'index desc'
        })
    ]
}