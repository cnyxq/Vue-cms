const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry:path.join(__dirname,'./src/main.js'),//入口表示要使用webpack打包哪个文件
    output:{//输出文件的相关配置
        path:path.join(__dirname,'./dist'),//指定打包好的文件，输出到哪个目录去
        filename:'bundle.js'//指定输出的名称
    },
  plugins: [
    new VueLoaderPlugin()
  ],
    mode: 'development',
    module: {//这个节点，用来配置所有第三方模块加载器
      rules: [//所有第三方模块的匹配规则
        {test: /\.css$/, use: ['style-loader','css-loader']},//配置处理.css文件规则
        {test: /\.less$/, use: ['style-loader','css-loader','less-loader']},
        {test: /\.scss$/, use: ['style-loader','css-loader','sass-loader']},
        {test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader'},
        {test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader'},
        {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},
        {test: /\.vue$/, use: 'vue-loader'},
      ]
    }

}
