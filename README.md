webpack的构建练习
此项目只是一些基础功能：
1，自动清空dist目录内容 clean-webpack-plugin 插件功能
2，自动生成index.html页面 html-webpack-plugin 插件功能
3， source-map生成打包文件后可以快速定位查询bug
4，使用webpack-dev-server插件，可以开启服务，并且修改保存代码后自动在内存中修改打包文件并且更新浏览器

使用方法：
打包文件 => 'npm run build'
开启服务开发环境 => 'npm run dev'


/************************************************************************************************************/
在配置babel的时候，需要安装一些module
babel-core, babel-loader, babel-preset-env, babel-preset-es2015
babel-polyfill      //这个包跟上边的不一样，安装好了之后不需要在webpack.config.js里边配置，由于babel-core只能解析一些基础的es6语法，
						像Promise，Generator，yield这些全局的函数无法解析，所以需要babel-polyfill，使用方法是在入口文件的最前面require('babel-polyfill');
						就可以了，不过此种方式不是最优的方式，导入babel-ployfill文件比较大，还有其它方式，不过配置起来比较麻烦。
