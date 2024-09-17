/** @type {import('next').NextConfig} */


// In order to extend our usage of webpack in Next.js 
// and start supporting  svg files as components, 
// we can extend the webpack configuration in the next.config.mjs file.
export default {
	webpack: (config) => {
		config.module.rules.push({
			test: /\.svg$/i,
			use: ['@svgr/webpack'],
		});

		return config;
	}
}
