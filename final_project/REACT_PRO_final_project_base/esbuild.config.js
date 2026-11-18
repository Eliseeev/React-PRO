// esbuild.config.js
const esbuild = require('esbuild');
const path = require('path');
const svgPlugin = require('esbuild-svg'); // <-- Импортируем плагин
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const isProd = process.env.NODE_ENV === 'production';

esbuild
	.build({
		entryPoints: [path.resolve(__dirname, 'src/index.tsx')],
		bundle: true,
		outfile: path.resolve(__dirname, 'dist-esbuild/bundle.js'),
		minify: isProd,
		sourcemap: !isProd,
		target: ['es2020'],
		jsx: 'automatic',
		plugins: [
			svgPlugin({ exportType: 'named' }), // <-- Добавляем плагин с настройкой
		],
		loader: {
			// Убираем .svg из loader, так как теперь его обрабатывает плагин
			'.png': 'file',
			'.jpg': 'file',
			'.jpeg': 'file',
			'.gif': 'file',
			'.webp': 'file',
			'.woff': 'file',
			'.woff2': 'file',
			'.eot': 'file',
			'.ttf': 'file',
			'.otf': 'file',
			'.css': 'css',
		},
		define: {
			'process.env.NODE_ENV': JSON.stringify(
				isProd ? 'production' : 'development'
			),
		},
		logLevel: 'info',
	})
	.catch(() => process.exit(1));
