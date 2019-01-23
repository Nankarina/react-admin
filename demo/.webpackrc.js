const path = require("path");
export default {
	entry: "src/index.js",
	extraBabelPlugins: [
		[
			"import",
			{
				libraryName: "antd",
				libraryDirectory: "es",
				style: true
			}
		]
	],
	proxy: {
		// '/': {
		// 	// target: 'https://movie.douban.com/',
		// 	// target: 'http://192.168.199.84:9995/wps',
		// 	changeOrigin: true,
		// 	pathRewrite: { '^/': '' }
		// },
	},
}