const webpack = require('webpack');

module.exports = {
    entry: './ex/index.js',
    mode: 'development',
    output: {
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    module: {
        rules: [{
            test: /.js?$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: ['transform-object-rest-spread']
                },
            }
        }]
    }
};
