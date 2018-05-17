const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const path = require('path')

module.exports = {
    entry: './src/server.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'server.js',
        publicPath: '/',
    },
    target: 'node',
    externals: nodeExternals(),
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query:
                    {
                        presets: ['react']
                    }
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'eslint-loader',
                exclude: /node_modules/,
                options: {
                    emitError: true,
                    formatter: require('eslint-friendly-formatter')
                }
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: `'production'`
            }
        })
    ]
}