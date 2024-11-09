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
