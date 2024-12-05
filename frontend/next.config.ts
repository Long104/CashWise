// import type { NextConfig } from "next";
//
// const nextConfig: NextConfig = {
// 	/* config options here */
// 	images: {
// 		remotePatterns: [
// 			{
// 				protocol: "https",
// 				hostname: "pbs.twimg.com",
// 				port: "",
// 				pathname: "/**",
// 			},
// 			{
// 				protocol: "https",
// 				hostname: "assets.aceternity.com",
// 				port: "",
// 				pathname: "/**",
// 			},
// 		],
// 	},
// };
//
// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "standalone",
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "pbs.twimg.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "assets.aceternity.com",
				port: "",
				pathname: "/**",
			},
		],
	},
	// async redirects() {
	//     return [
	//         {
	//             source: "/protected",
	//             destination: "/sign-in",
	//             permanent: false,
	//         },
	//     ];
	// },
};

export default nextConfig;
