## Vue中img图像src变成"[object Module]"无法正确加载

### 问题
在Vue中嵌入svg图像变成"[object Module]"无法正确加载  
浏览器显示的html:
```html
<img src="[object Module]">
```

### 概念
Vue官方文档中说了vue-loader的基本原理，他会将Vue模板中的<img src="../image.png">转为下面这段JS代码：
```js
createElement('img', {
  attrs: {
    src: require('../image.png')  // require()是CommonJS模块语法
  }
})
```
对于图像我们在Webpack中肯定会使用url-loader或file-loader来处理：  
build/webpack.base.conf.js  
```js
      {
        test: /\.svg(\?.*)?$/,
        loader: 'file-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
```
### 解决
这是因为file-loader默认采用`ES`模块语法，即`import '../image.png'`；然而Vue生成的是`CommonJS`模块语法，即`require('../image.png')`；二者不一致。要么让file-loader或url-loader采用CommonJS语法，要么让Vue采用ES语法。

刚好file-loader或url-loader有一个esModule选项能调整，将其设置为false即可：
build/webpack.base.conf.js  
```js
      {
        test: /\.svg(\?.*)?$/,
        loader: 'file-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]'),
          esModule: false
        }
      },
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]'),
          esModule: false
        }
      },
```

### 最后
本来以为crtl+S就OK了，然后发现还是原来的样子，这是因为webpack.base.conf.js  存放在build文件夹里，build文件夹里面是对 webpack 开发和打包的相关设置，包括入口文件、输出文件、使用的模块等；
所以要重新npm run dev一遍才可以


[参考文献](https://www.jianshu.com/p/0877ce441561)
