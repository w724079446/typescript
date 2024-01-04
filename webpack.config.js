const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  // 入口文件
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    environment: {
      // 打包不使用箭头函数
      arrowFunction: false,
      // 打包不使用const
      const: false,
    },
  },
  // 指定开发环境
  mode: 'development',
  module: {
    rules: [
      {
        // 指定规则生效的文件
        test: /\.ts$/,
        use: [
          // 配置babel
          {
            // 指定加载器
            loader: 'babel-loader',
            options: {
              // 设置预定义环境
              presets: [
                // 指定环境插件
                [
                  '@babel/preset-env',
                  // 配置信息
                  {
                    // 要兼容的目标浏览器
                    targets: {
                      chrome: '88',
                    },
                    // 指定corejs的版本
                    corejs: '3',
                    // 使用corejs的方式  usage 表示按需加载
                    useBuiltIns: 'usage',
                  },
                ],
              ],
            },
          },
          'ts-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                    {
                      browsers: 'last 2 version',
                    },
                  ],
                ],
              },
            },
          },
          'less-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  // 配置webpack插件
  plugins: [
    new HTMLWebpackPlugin({
      // title: '自定义Title',
      template: './src/index.html',
    }),
    new CleanWebpackPlugin(),
  ],
};
