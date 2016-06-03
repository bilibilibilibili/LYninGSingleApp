var path = require('path');

module.exports = {

    entry: [
        path.join(__dirname, 'Views/index.js')
    ],

    output: {
        path: path.join(__dirname, 'dist/'),
        filename: 'bundle.js'
    },

    resolve: {
        extensions: ['', '.js', '.css', '.png', '.jpg', '.vue']
    },

    resolveLoader: {
        root: path.join(__dirname, 'node_modules')
    },

    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loader: 'babel'
            },
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
                loader: 'url-loader?limit=10000'
            }
        ]
    },
    babel: {
        presets: ['es2015'],
        compact: false
    },
    devtool: 'source-map'
};
