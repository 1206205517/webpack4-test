// 插件的结构

module.exports = class txtwebpackplugin {
  // apply 
  apply(compiler) {
    // 钩入hook
    compiler.hooks.emit.tapAsync("txtwebpackplugin", (compilation, cb)=> {
      console.log(compilation.assets);

      compilation.assets['xyx.txt'] = {
        source: function() {
          return 'hello txt'
        },
        size: function() {
          return 1024
        }
      }
      cb()
    })
    // compiler.hooks.compile.tap // 同步的
  }
}