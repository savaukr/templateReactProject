import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {type BuildOptions} from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

// eslint-disable-next-line @typescript-eslint/naming-convention
const {ProgressPlugin} = webpack;

export default function buildPlugins({
	paths,
	isDev,
}: BuildOptions): webpack.WebpackPluginInstance[] {
	return [
		new HtmlWebpackPlugin({
			template: paths.html,
		}),
		new ProgressPlugin(),
		new MiniCssExtractPlugin({
			filename: 'csss/[name].[contenthash:8].css',
			chunkFilename: 'csss/[name].[contenthash:8].css',
		}),
		new webpack.DefinePlugin({
			// eslint-disable-next-line @typescript-eslint/naming-convention
			__IS_DEV__: JSON.stringify(isDev),
		}),
	];
}
