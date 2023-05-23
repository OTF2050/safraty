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
              test: /\.(sa|sc|c)ss$/,                  
	            use: [
                    {

                        loader: MiniCssExtractPlugin.loader, 
            
                        options: {
            
                          publicPath: '../' 
            
                        }
            
                      },
                      
		              'css-loader',
                  'sass-loader'
                ]
            }

        ]
    },

    plugins: [
        new HtmlWebpackPlugin({

            filename: "index.html",
      
            template: "./src/HTML/index.html",
      
          }),
          new HtmlWebpackPlugin({

            filename: "contact.html",
      
            template: "./src/HTML/contact.html",
      
          }),
          new HtmlWebpackPlugin({

            filename: "services.html",
      
            template: "./src/HTML/services.html",
      
          }),

          new HtmlWebpackPlugin({

            filename: "tours.html",
      
            template: "./src/HTML/tours.html",
      
          }),
          new HtmlWebpackPlugin({

            filename: "istanbel.html",
      
            template: "./src/HTML/istanbel.html",
      
          }),

          new HtmlWebpackPlugin({

            filename: "details.html",
      
            template: "./src/HTML/details.html",
      
          }),

          new MiniCssExtractPlugin({filename: "css/style.css"}),

          new OptimizeCssAssetsPlugin({}),
      
    ]
}