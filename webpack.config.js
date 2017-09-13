const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
	entry: './src/app.js',
	/*entry: {
	    app: './src/app.js',
	    search: './src/search.js'
	}*/
	devtool: 'inline-source-map',
	devServer: {
	    	contentBase: './dist',
	    	port: 3000
   	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
     	new HtmlWebpackPlugin({
			template: './src/template.html'
    	})
   	],
	output: {
	    //filename: '[name].js',
	    filename:'bound.js',
	    path: __dirname + '/dist'
	},
	module: {
		rules: [
		    {
		    	test: /\.js[x]?$/,
		    	exclude: /node_modules/,
		    	loader: 'babel-loader',
		    	/*query: {
                    presets: ['es2015']
                }*/
		    },
		    { 
		    	test: /\.css$/, 
		    	loader: 'style-loader!css-loader'
		    },
		    {
		        test: /\.less$/,
		        loader: 'style-loader!css-loader!less-loader'
			},
			{
		        test: /\.(png|jpg)$/,
		        loader: 'url-loader?limit=8192&name=images/[name].[ext]',
		  	},
		    {
		        test: /\.(woff|eot|ttf|svg|gif)$/,
		        loader: 'file-loader?name=iconfont/[path][name].[ext]',
		  	}
		]
	}
};

module.exports = config;