const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: false, // using SourceMapDevToolPlugin instead
    mode: 'development',
    entry: {
        index: ['./src/index.scss', './src/index.js'],
        region: ['./src/region/region.scss', './src/region/region.js'],
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].css',
                        },
                    },
                    { loader: 'extract-loader' },
                    { loader: 'css-loader' },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    autoprefixer()
                                ]
                            }
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            // Prefer Dart Sass
                            implementation: require('sass'),

                            // See https://github.com/webpack-contrib/sass-loader/issues/804
                            webpackImporter: false,
                            sassOptions: {
                                includePaths: ['./node_modules'],
                            },
                        },
                    }
                ],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: true,
            filename: 'index.html',
            chunks: ['index'],
        }),
        new HtmlWebpackPlugin({
            template: 'src/region/index.html',
            inject: true,
            filename: 'region/index.html',
            chunks: ['region'],
        }),
        new webpack.SourceMapDevToolPlugin({}),
    ],
    resolve: {
        alias: {
            '@di': path.resolve(__dirname, 'src/di/'),
        },
    },
};