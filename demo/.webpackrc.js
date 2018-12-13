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
		'/wps': {
			target: 'http://192.168.199.15:9995/wps',
			// target: 'http://192.168.199.84:9995/wps',
			changeOrigin: true,
			pathRewrite: { '^/wps': '' }
		},
	},
}