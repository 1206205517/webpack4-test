npm install webpack-dev-server@3.11.0 -D

npm install babel-loader @babel/core -D
npm install @babel/preset-env -D
// 解析Promise
npm install @babel/polyfill -S

// 解析react语法
npm install @babel/preset-react -D


bundle打包原理分析

const compier = webpack(options)
compier.run()

- 读取配置的入口
  入口模块的路径
  模块分析
    模块的依赖(依赖的路径)
      可以用递归的方式处理依赖模块

    内容处理(处理后的代码)
    最终得到依赖图谱对象
  webpackBootstrap函数
  
    

- 读取配置的出口
  生成文件
    文件存放的位置
    文件的名称
