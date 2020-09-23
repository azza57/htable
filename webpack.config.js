module.exports = {

	entry : './src/index.js',

	output : {
		path : __dirname + '/public/',
		filename : 'bundle.js'
	},

	devServer : {
		inline : true,
		port : 7777,
		contentBase : __dirname + '/public/'
	},
	mode : 'none',
	module: {
        rules: [
            {
                test : /\.js$/,
				exclude : /node_modules/,
				use : [{
					loader : 'babel-loader',
					options : {
						presets : ['@babel/preset-env', '@babel/preset-react']
					}
				}]
			},
			// {
			// 	test : /\.(svg|png|jpg)$/,
			// 	use : [
			// 		'file-loader'
			// 	]
			// },
			{
		        test: /\.css$/,
		        loaders: ["style-loader", "css-loader"]
		    }
        ]
    }
}