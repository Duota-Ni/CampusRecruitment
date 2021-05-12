# css单位
> 参考
> [MDN](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Values_and_units)

## 长度
### 绝对长度
绝对长度与其他任何东西都没有关系，通常被认为总是相同的大小
- px 像素
### 相对长度
- em 在 font-size 中使用是相对于父元素的字体大小，在其他属性中使用是相对于自身的字体大小，如 width
- rem 根元素html的字体大小
- vw	布局视口宽度的1%
- vh	布局视口高度的1%
- 百分比 如果将元素的字体大小设置为百分比，那么它将是元素<u>父元素</u>字体大小的百分比。如果使用百分比作为宽度值，那么它将是父值宽度的百分比

> 注： [视口](4-视口viewport.md)

## 函数
如
```css
.wrapper {
  width: 400px;
}
.box {
  width: calc(20% + 100px); /*20%是根据父容器.wrapper的宽度来计算的*/
}
```

