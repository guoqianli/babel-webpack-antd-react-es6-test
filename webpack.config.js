var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var values = require('postcss-modules-values');
var autoprefixer = require('autoprefixer');
var rucksackCss = require('rucksack-css');

module.exports = {
    entry: [
        './src/index.js'
    ],
     output: {
        path: '/',
        filename: 'bundle.js',
        // chunkFilename: '[name].[hash:8].js',
        publicPath: '/build/'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'raw') },
            { test: /\.less$/, loader: ExtractTextPlugin.extract('style', 'css?sourceMap&-restructuring&modules&localIdentName=[local]___[hash:base64:5]&-autoprefixer!postcss!less') },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css?sourceMap&-restructuring&modules&localIdentName=[local]___[hash:base64:5]&-autoprefixer!postcss!sass') },
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
    postcss: [
      rucksackCss(),
      autoprefixer({
        browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4']
      })
    ],
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

        // 压缩打包代码
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // }),
        new ExtractTextPlugin('main.css', { allChunks: true }),
    ]
}