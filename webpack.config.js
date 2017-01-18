var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        './src/index.js'
    ],
     output: {
        path: '/',
        filename: 'bundle.js',
        chunkFilename: '[name].[hash:8].js',
        publicPath: '/build/'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'raw') },
            { test: /\.less$/, loader: ExtractTextPlugin.extract('style', 'css!less') },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!sass') },
            { test: /\.tpl$/, loader: 'ejs' },
            { test: /\.(jpg|png|gif)$/, loader: 'url?limit=8192&name=images/[name].[hash:8].[ext]' },
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            utils: path.join(__dirname, './src/utils')
        }
    },
    plugins: [
        // new ExtractTextPlugin('index.css', { allChunks: true }),

        new webpack.ProvidePlugin({
            React: 'react',
            $: 'jquery',
            jQuery: "jquery",
            "window.jQuery": "jquery",
        }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: ['jquery'], // 将公共模块提取
        //     minChunks: Infinity // 提取所有entry共同依赖的模块
        // }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new ExtractTextPlugin('main.css', { allChunks: true }),
    ]
}