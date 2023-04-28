const path = require("path");

var HtmlWebpackPlugin = require("html-webpack-plugin");

var MiniCssExtractPlugin= require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {

    mode: 'development',

    devServer: {
        devMiddleware: {
            writeToDisk: true,
        },
        static: {
            directory: path.join(__dirname, 'build'),
        },
        open: true,
      },

    entry: {

      main: path.resolve(__dirname, './src/index.js'),

    },

    output: {

        filename: 'main.js',


    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {

                            minimize: true,
                
                  },
                    },
                ],
            },
            {
                test: /\.(png|svg||webp|jpe?g|gif)$/,
                use: [
                    {
                        loader: "file-loader", 
                        options: {

                            name: '[name].[ext]',
              
                            outputPath: "image",
              
                          }
                    }
                ]
            },
           
            {
                test: /\.css$/,                  
	            use: [
                    {

                        loader: MiniCssExtractPlugin.loader, 
            
                        options: {
            
                          publicPath: '../' 
            
                        }
            
                      },
                      
		              'css-loader'
                ]
            }

        ]
    },

    plugins: [
        new HtmlWebpackPlugin({

            filename: "index.html",
      
            template: "./src/HTML/index.html",
      
          }),
          new MiniCssExtractPlugin({filename: "css/style.css"}),

          new OptimizeCssAssetsPlugin({}),
      
    ]
}