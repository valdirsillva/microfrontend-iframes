const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devServer: {
        hot: true,
        static: {
            directory: path.join(__dirname, './dist')
        },
        compress: true,
        historyApiFallback: true,
        port: 8000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                loader: "css-loader",
                options: {
                    modules: true,
                },
            },
        ],
    },
};
