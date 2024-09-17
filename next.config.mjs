/** @type {import('next').NextConfig} */

// added functionality to load svg files as components
export default {
	webpack: (config) => {
		config.module.rules.push({
			test: /\.svg$/i,
			use: ['@svgr/webpack'],
		});

		return config;
	}
}
