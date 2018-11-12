const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'development';

module.exports = {
    entry: './ex/index.jsx',
    mode: 'development',
    output: {
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        })
    ],
    module: {
        rules: [
                {
                    test: /.jsx?$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react'],
                            plugins: ['transform-object-rest-spread']
                        },
                    }
                },
                {
                    test: /\.(sa|sc|c)ss$/,
                    exclude: /(node_modules|bower_components)/,
                    use: [
                        devMode ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'
                    ]
                }
        ]
    }
};
