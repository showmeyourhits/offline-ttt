const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: {
		// server: path.resolve('src/server/server.js'),
		client: path.resolve('src/client/app.js'),
	},
	output: {
		path: path.resolve('build'),
		filename: '[name].js'
	},
	resolve: {
		alias: {
			'components': path.resolve('src/client/components'),
			'server': path.resolve('src/server'),
			'helpers': path.resolve('src/client/helpers'),
			'styles': path.resolve('src/client/styles'),
		},
		extensions: ['.js', '.scss'],
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: ['node_modules'],
				use: [
					{
						loader: 'babel-loader',
					}
				]
			},
			{
				test: /\.scss$/,
				exclude: [/node_modules/],
				use: ExtractTextPlugin.extract([{
					loader: 'css-loader',
					options: {
						modules: true,
						sourceMap: true,
						importLoader: 1,
						localIdentName: '[name]__[local]___[hash:base64:5]'
					}	
				}, {
					loader: 'postcss-loader',
				}]),
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Tic Tac Toe',
			chunks: ['client'],
			template: path.resolve('src/client/appTemplate.html'),
			favicon: path.resolve('src/client/favicon.png'),
		}),
		new webpack.ProvidePlugin({
			'React': 'react',
			'PropTypes': 'prop-types',
		}),
		new ExtractTextPlugin({
			filename: 'styles.css',
		}),
		new CopyWebpackPlugin([
			{from: path.resolve('src/client/ttt_sw.js'), to: path.resolve('build')}
		]),
	],
};
