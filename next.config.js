/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	poweredByHeader: false,
	images: {
		domains: ['dummyjson.com'],
	},
	env: {
		APP_URL: process.env.APP_URL,
		APP_ENV: process.env.APP_ENV,
		APP_SERVER_URL: process.env.APP_SERVER_URL,
	},
}

module.exports = nextConfig
