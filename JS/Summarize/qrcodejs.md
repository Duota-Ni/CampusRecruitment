```js
    downloadQrcode () {
      // 获取base64的图片节点
      const img = document.querySelector('.qrcode_box img')
      // 构建画布
      const canvas = document.createElement('canvas')
      canvas.width = img.width
      canvas.height = img.height
      canvas.getContext('2d').drawImage(img, 0, 0)
      // 构造url
      // HTMLCanvasElement.toDataURL() 方法返回一个包含图片展示的 data URI 。可以使用 type 参数其类型，默认为 PNG 格式。图片的分辨率为96dpi。
      const url = canvas.toDataURL('image/png')
      // 构造a标签并模拟点击
      //<a href="url" download="外部表单二维码.png">
      const aDom = document.createElement('a')
      aDom.setAttribute('href', url)
      //a标签的download属性
      aDom.setAttribute('download', '外部表单二维码.png')

      aDom.click()
    }
```