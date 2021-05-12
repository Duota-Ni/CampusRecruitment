# 视口(viewport)
> [MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Viewport_concepts)

视口(viewport)代表当前可见的计算机图形区域。在 Web 浏览器术语中，通常与浏览器窗口相同，但不包括浏览器的 UI， 菜单栏等——即指你正在浏览的文档的那一部分。
viewport 基本上是当前文档的可见部分。

### 查询 viewport 大小和其它类似的长度属性的 DOM 属性
- 文档的 `Element.clientWidth` 是指一个文档使用 CSS pixels 单位表示的内部宽度, 包括其 padding (不包括 borders, margins 或垂直滚动条，如果有的话）. 这就是 viewport 的宽度。`document.documentElement.clientWidth`
- `Window.innerWidth` 是用 CSS pixels 单位表示的浏览器窗口 viewport 宽度，包括垂直滚动条，如果渲染了的话。
- `Window.outerWidth` 是指包括了浏览器外边框的窗口宽度。


### Web
Web 浏览器包含两个 viewport，**布局视口(layout viewport)和视觉视口(visual viewport)**。

`visual viewport `指当前浏览器中可见的部分，并且可以变化。

`innerHeight` 和 `innerWidth` 所组成的区域通常被认为是`布局视口(layout viewport)` 。浏览器的框架不被认为是 viewport 的一部分.
vw\vh就是指布局视口的1%

### 移动
移动设备的视口的默认值为 980px，一般情况下都要比这些设备的屏幕尺寸要大