const path = require('path')
const htmlwebpackplugin = require('html-webpack-plugin')
// npm install --save-dev mini-css-extract-plugin
// 将 CSS 提取到单独的文件中，为每个包含 CSS 的 JS 文件创建一个 CSS 文件
const minicssExtractPlugin = require('mini-css-extract-plugin')
// 打包前把dist目录做一次清空
// npm install clean-webpack-plugin -D
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

const textwebpackplugin = require('./myPlugins/txt-webpack-plugin')
const txtwebpackplugin = require('./myPlugins/txt-webpack-plugin')
// 默认配置
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'), //输出的文件存放的目录 绝对路径
    filename: '[name]-[hash].js' // 输出的文件名称 js推荐使用chunkhash
  },
  mode: 'development', // none development production
  resolveLoader: {
    modules: ['node_modules', './myloaders'] // 默认去node_modules中找 找不到则去myloader中找
  },
  devtool: 'sourcemap',
  devServer: {
    contentBase: path.join(__dirname, 'dist'), // 默认访问的打包地址
    port: 8081,
    open: true,
    hot: true,
    proxy: {
      
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // minicssExtractPlugin.loader,
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|webp)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            pubicPath: '../images',
            outputPath: 'images'
          }
        }
      },
      {
        test: /\.js$/,
        // use: path.resolve(__dirname, './myloaders/replace-loader.js')
        use: [
          path.resolve(__dirname, './myloaders/replace-loader.js'),
          {
            loader: 'replace-async-loader',
            options: {
              info: 'hello'
            }
          }
        ]
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          // options: {
          //   presets: [
          //     [
          //       '@bebel/preset-env',
          //       {
          //         targets: {
          //           edge: '17',
          //           chrome: '67'
          //         },
          //         corejs: 2, // 不推荐使用polyfill
          //         useBuiltIns: 'usage' // entry usage false
          //       }
          //     ]
          //   ]
          // }
        }
      },
      {
        test: /.less$/,
        use: [
          'xyx-style-loader',
          'xyx-css-loader',
          'xyx-less-loader'
        ]
      },
      {
        test: /.scss$/,
        use: ['style-loader', 'css-loader', ' postcss-loader', 'scss-loader']
      }
    ]
  },
  plugins: [
    new htmlwebpackplugin({
      template: './src/index.html'
    }),
    new txtwebpackplugin(),
    new CleanWebpackPlugin()
    // new minicssExtractPlugin({
      // filename: 'css/[name]-[contenthash:6].css' // css推荐使用contenthash
    // })
  ]
}
// 多入口多出口配置
// module.exports = {
//   entry: {
//     index: './scr/index.js',
//     a: './src/a.js'
//   },
//   output: {
//     path: path.resolve(__dirname, './dist'), //输出的文件存放的目录 绝对路径
//     filename: '[name].js' // 输出的文件名称
//   },
//   mode: 'development'
// }
