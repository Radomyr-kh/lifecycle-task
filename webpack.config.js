const webpack = require('webpack');
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const outputPathDir = 'build';

const webpackConfig = {
    entry: {
        app: './app/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'public', outputPathDir),
        filename: '[name].js',
        publicPath: '/build/',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true
                    }
                }
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
};

module.exports = (env, argv) => {
    const mode = argv.mode || 'production';
    const isProd = mode === 'production';

    webpackConfig.mode = mode;
    webpackConfig.devtool = !isProd ? 'source-map' : false;

    return webpackConfig;
};
