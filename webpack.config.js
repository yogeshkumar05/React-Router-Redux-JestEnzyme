const path = require('path');

module.exports = {
    entry: "./src/index.js",
    output : {
        path : path.resolve(__dirname),
        filename : "bundle.js"
    },
    devServer : {
        historyApiFallback: true,
        inline : true
    },
    mode : "development",
    module :{
        rules : [
            {
                test : /\.(js|jsx)$/,
                exclude : /node_modules/,
                use : {
                    loader : 'babel-loader'
                }
            },
            {       
                test : /\.(css|scss)$/,
                exclude : /node_modules/,
                loader: ['style-loader','css-loader','sass-loader']
            },
            {
				test: /\.jpe?g|png|gif|svg|woff|ttf|eot$/,
				loader:  ['url-loader']
            }
        ]
    }
}