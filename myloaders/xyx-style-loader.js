module.exports = function(source) {
  // 动态创建style 把style塞进style文档头部
  return `
    const tag = document.createElement('style');
    tag.innerHTML = ${source};
    document.head.appendChild(tag);
  `
}