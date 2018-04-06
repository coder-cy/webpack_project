const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname+'/dist/',
        filename: "main.bundle.js"
    },
    plugins: [
        new HtmlWebPackPlugin({
            title: 'webpack',
            template: './src/index.html',
            minify: {
                collapseWhitespace: false,
            },
            hash: true
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    devServer: {
        port: 9000,
        open: true,
        proxy: {
            '/api': {
                target: 'http://localhost:80',//xampp的apache服务器，默认端口为80，后端文件全部放在其中的api文件夹
                secure: false
            }            
        }
    }
}