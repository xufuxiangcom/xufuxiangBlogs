//这个项目发布阶段需要用到的 babel 插件
const prodPlugins = []
//判断是否是发布时期，是就添加一个数组元素
if(process.env.NODE_ENV === 'production') {
    prodPlugins.push('transform-remove-console')
}

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  //发布产品时候的插件数组
  plugins: [
      //解构数组
      ...prodPlugins,
      '@babel/plugin-syntax-dynamic-import'
  ]
}
