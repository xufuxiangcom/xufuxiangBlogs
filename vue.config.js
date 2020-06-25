module.exports = {
    chainWebpack: config => {
        //发布模式的入口函数
        config.when(process.env.NODE_ENV === 'production', config => {
            config.entry('app').clear().add('./src/main-prod.js')

           //设置不打包的资源（用外部引入cdn减少打包体积）
            config.set('externals', {
                vue: 'Vue',
                'vue-router': 'VueRouter',
                axios: 'axios'
            })
            //为html插件添加一个参数,发布时为true（用来设置判断发布模式下使用cdn库)
            config.plugin('html').tap(args => {
                args[0].isProd = true
                return args
            })
        })

        //开发模式入口函数
        config.when(process.env.NODE_ENV === 'development', config => {
            config.entry('app').clear().add('./src/main-dev.js')

            //为html插件添加一个参数,开发是为false
            config.plugin('html').tap(args => {
                args[0].isProd = false
                return args
            })
        })
    }
}
