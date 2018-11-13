require('dotenv').config()
var path = require('path');
const Dotenv = require('dotenv-webpack')
const webpack = require('webpack');

module.exports = env=>{

    const isProduction = env && env.production !== undefined

const plugins = [
    new Dotenv(),
    new webpack.HotModuleReplacementPlugin()
]

    return {
    entry: './src/app.js',
    mode:isProduction?'production':'development',
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: {
        rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
        }, {
        test: /\.scss$/,
        use: [
        'style-loader',
        'css-loader', //translates css into commonJS
        'sass-loader' // compile Sass to CSS using node sass by default
        ]
        }]
        },

        devtool:  isProduction?'none':'cheap-module-eval-source-map',

        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true, // this prevents the default browser full page refresh on form submission and link change
            port:8000,
            hot: true, //enable hot module replacement feature
            },
            plugins:plugins,
            resolve : {

                extensions:['.js'],
                alias:{

                    containers: path.resolve(__dirname,'src/containers'),
                    config: path.resolve(__dirname,'src/config'),
                    routers:path.resolve(__dirname,'src/routers'),
                    components:path.resolve(__dirname,'src/components')
                }
            }
    }
    

   
  }