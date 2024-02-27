import type webpack from 'webpack';
import path from 'path';
import {buildWbpackConfig} from './config/build/buildWebpackConfig';
import {type BuilEnv, type BuildPaths} from './config/build/types/config';

export default (env: BuilEnv) => {
	const paths: BuildPaths = {
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		build: path.resolve(__dirname, 'build'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		src: path.resolve(__dirname, 'src'),
	};

	const mode = env.mode || 'development';
	const isDev = mode === 'development';
	// eslint-disable-next-line @typescript-eslint/naming-convention
	const PORT = env.port || 3000;

	const config: webpack.Configuration = buildWbpackConfig({
		mode,
		paths,
		isDev,
		port: PORT,
	});

	return config;
};
