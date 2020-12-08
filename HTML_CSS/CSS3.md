## 一、媒体查询（Media queries）
根据设备的大致类型（如打印设备与带屏幕的设备）或者特定的特征和设备参数（例如屏幕分辨率和浏览器视窗宽度）来修改网站或应用程序时,特别实用  
用途：  
有条件的通过 @media 和 @import at-rules 用CSS 装饰样式。  
用media= 属性为`<style>, <link>, <source>`和其他HTML元素指定特定的媒体类型。如:  
```html
<link rel="stylesheet" src="styles.css" media="screen" />
<link rel="stylesheet" src="styles.css" media="print" />
```
使用`Window.matchMedia()` 和`MediaQueryList.addListener()` 方法来测试和监控   
### 语法
每条媒体查询语句都由一个可选的`媒体类型`和任意数量的`媒体特性`表达式构成。可以使用多种`逻辑操作符`合并多条媒体查询语句。媒体查询语句不区分大小写。  
当媒体类型（如果指定）与在其上显示文档的设备匹配并且所有媒体功能表达式都计算为`true`时，媒体查询将计算为true。 涉及未知媒体类型的查询始终为false  
### 媒体类型（Media types）
媒体类型（Media types）描述设备的一般类别。除非使用 not 或 only 逻辑操作符，媒体类型是可选的，并且会（隐式地）应用 all 类型。    
`all`  
适用于所有设备。  
`print`  
适用于在打印预览模式下在屏幕上查看的分页材料和文档。  
`screen`  
主要用于屏幕。   
`speech`    
主要用于语音合成器   
### 媒体特性（Media features）
描述了 user agent、输出设备，或是浏览环境的具体特征。媒体特性表达式是完全可选的，它负责测试这些特性或特征是否存在、值为多少。每条媒体特性表达式都必须用`括号`括起来。
### 逻辑操作符（logical operators） 
not, and, 和 only 可用于联合构造复杂的媒体查询，您还可以通过用逗号分隔多个媒体查询，将它们组合为一个规则。    
`and`  
相当于`$` 同时为true才是true   
用于将多个媒体查询规则组合成单条媒体查询，当每个查询规则都为真时则该条媒体查询为真，它还用于将媒体功能与媒体类型结合在一起。  
```css
@media (min-width: 30em) and (orientation: landscape) { ... }
```
`not`  
not运算符用于否定媒体查询，如果不满足这个条件则返回true，否则返回false。 如果出现在以逗号分隔的查询列表中，它将仅否定应用了该查询的特定查询。 如果使用not运算符，则还必须指定媒体类型。   
>注意：在`Level 3`中，not关键字不能用于否定单个媒体功能表达式，而`只能用于否定整个媒体查询`。  
`only`   
only关键字可防止不支持带有媒体功能的媒体查询的旧版浏览器应用给定的样式。 它`对现代浏览器没有影响`  
only运算符`仅在整个查询匹配时`才用于应用样式，并且对于防止较早的浏览器应用所选样式很有用。 当不使用only时，旧版本的浏览器会将screen and (max-width: 500px)简单地解释为screen，忽略查询的其余部分，并将其样式应用于所有屏幕。 如果使用only运算符，则`还必须指定媒体类型`。  
`,` (逗号)  
逗号用于将多个媒体查询合并为一个规则。 逗号分隔列表中的每个查询都与其他查询分开处理。 因此，如果列表中的任何查询为true，则整个media语句均返回true。 换句话说，列表的行为类似于逻辑或or运算符  
```css
@media (min-height: 680px), screen and (orientation: portrait) { ... }
```

### 版本4
使用具有“范围”类型（例如宽度或高度，减少冗余）的功能进行媒体查询。
```css
/*版本3*/
@media (max-width: 30em) { ... }
/*版本4*/
@media (width <= 30em) { ... }
/*版本3*/
@media (min-width: 30em) and (max-width: 50em) { ... }
/*版本4*/
@media (30em <= width <= 50em ) { ... }
```
- 使用 not否定一个特性  
在媒体功能周围使用not()会否定查询中的该特性。 例如，如果设备没有悬停功能，则not(hover)将被匹配：
```css
@media (not(hover)) { ... }
```
- 用 or测试多个特性
您可以使用or测试多个功能之间的匹配，如果任何功能为true，则解析为true。 例如，以下查询测试具有单色显示或悬停功能的设备：
```css
@media (not (color)) or (hover) { ... }
```


## 二、@规则
### @charset, 定义样式表使用的字符集
它必须是样式表中的第一个元素，而前面不得有任何字符。如果有多个 @charset @规则被声明，只有第一个会被使用，而且不能在HTML元素或HTML页面的字符集相关`<style>`元素内的样式属性内使用
```css
@charset "UTF-8";
@charset "iso-8859-15";
```
### @import, 告诉 CSS 引擎引入一个外部样式表
语法
```css
@import url;
@import url list-of-media-queries;

/*list-of-media-queries
是一个逗号分隔的 媒体查询 条件列表，*/
```
示例
```css
@import url("fineprint.css") print;
@import url("bluish.css") projection, tv;
@import 'custom.css';
@import url("chrome://communicator/skin/");
@import "common.css" screen, projection;
@import url('landscape.css') screen and (orientation:landscape);
```
### @namespace, 告诉 CSS 引擎必须考虑XML命名空间
用来定义使用在CSS样式表中的XML命名空间的@规则

### 嵌套@规则, 是嵌套语句的子集,不仅可以作为样式表里的一个语句，也可以用在条件规则组里：
> 条件规则组. 这些语句使用相同的语法. 它们都嵌套语句，或者是规则或者是@规则。  
它们都表达： 它们所指的条件 (类型不同) 总等于 true 或者 false，如果为 true 那么它们里面的语句生效。  
下面3个是条件规则组的 `@media` `@supports` `@document`
#### @media, 如果满足媒介查询的条件则条件规则组里的规则生效。
[关于媒体查询](##一、媒体查询（Media queries）)  
语法  
@media 规则可置于您代码的顶层或位于其它任何@条件规则组内。
```css
/* At the top level of your code */
@media screen and (min-width: 900px) {
  article {
    padding: 1rem 3rem;
  }
}

/* Nested within another conditional at-rule */
@supports (display: flex) {
  @media screen and (min-width: 900px) {
    article {
      display: flex;
    }
  }
}

@media (400px <= width <= 700px) {
    body { line-height: 1.4; }
}
```
#### @page, 描述打印文档时布局的变化.
#### @font-face, 描述将下载的外部的字体。 
#### @keyframes, 描述 CSS 动画的中间步骤 . 
#### @supports, 如果满足给定条件则条件规则组里的规则生效。 
#### @document, 如果文档样式表满足给定条件则条件规则组里的规则生效。 (推延至 CSS Level 4 规范)