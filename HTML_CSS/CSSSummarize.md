## CSS Sprites
1.简介
CSS Sprites在国内很多人叫css精灵，是一种网页图片应用处理方式。它允许将一个页面涉及到的所有零星图片都包含到一张大图中， 利用CSS的“background-image”，“background- repeat”，“background-position”的组合进行背景定位， 访问页面时避免图片载入缓慢的现象。
2.优点
（1）CSS Sprites能很好地减少网页的http请求，从而大大的提高页面的性能，这是CSS Sprites最大的优点，也是其被广泛传播和应用的主要原因；
（2）CSS Sprites能减少图片的字节；
（3）CSS Sprites解决了网页设计师在图片命名上的困扰，只需对一张集合的图片命名，不需要对每一个小图片进行命名，从而提高了网页制作效率。
（4）CSS Sprites只需要修改一张或少张图片的颜色或样式来改变整个网页的风格。
3.缺点
（1）图片合并麻烦：图片合并时，需要把多张图片有序的合理的合并成一张图片，并留好足够的空间防止版块出现不必要的背景。
（2）图片适应性差：在高分辨的屏幕下自适应页面，若图片不够宽会出现背景断裂。
（3）图片定位繁琐：开发时需要通过工具测量计算每个背景单元的精确位置。
（4）可维护性差：页面背景需要少许改动，可能要修改部分或整张已合并的图片，进而要改动css。在避免改动图片的前提下，又只能（最好）往下追加图片，但这样增加了图片字节。

## 标准盒子模型、IE盒子模型、Flex弹性伸缩盒子模型  
[box-sizing](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-sizing)
### 1. 标准盒子模型
![标准盒子模型](assets/img/标准盒子模型.png)
### 2. IE盒子模型（又称怪异盒子模型）
![怪异盒子模型](assets/img/IE标准盒子模型.png)
### 3. Flex弹性伸缩盒子模型
[阮一峰flex](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

## 使用css,让一个div消失在视野中

## 不考虑其他因素，下面哪种渲染性能比较高
```css
.box a{

}
a{

}
```
下面那种，因为浏览器读取选择器的顺序是**由右到左**进行，上面例子会先读一遍a再读.box
 
## css position  
CSS position属性用于指定一个元素在文档中的定位方式。top，right，bottom 和 left 属性则决定了该元素的最终位置。  
+ static | relative | absolute | sticky | fixed
1.static  
默认，在正常文档流，根据HTML排版的flow移动
2.relative
除了有和static相同的特性：跟随HTML排版流程去定位之外，可以设置top left right bottom相对定位
3.absolute  
被移除文档流，不会跟随HTML排版的流程移动  
当absolute的元素所在的页面有卷轴，即，可以滑动时，它会随着卷动而移动  
absolute可以重叠，
当absolute作为父元素，其子元素也是absolute时，子元素将相对父元素定位
- absoulte子元素相对relative父元素进行定位
4.fixed  
fixed相对屏幕进行定位，即使卷动页面也会一直保持在那位置
即使放到relative里面，也是相对body定位  
5.stick


