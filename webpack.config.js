const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: {
		server: path.resolve('src/server/server.js'),
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
		}
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
	],
};
