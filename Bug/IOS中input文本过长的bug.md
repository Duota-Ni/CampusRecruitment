## IOS 中单行输入框输入内容长被遮盖，不能显示全部，且不能左右滑动。

##
其实这是IOS的Bug,IOS长按就可以滑动文本了，与Android的不同

### 方法一
用 textarea 替换 input，设置一行的高，进行`上下`滚动查看
### 方法二
属性：contenteditable，模拟输入时动态获取宽高
（1）div设置contentditable=true 可以将此元素变成可输入状态。
```html
<div  class="inputContent"  contenteditable="true" ></div>
```
（2）想要变成input输入框，利用css模拟输入框的样式
```css
.inputContent{
  color: #444;
  border: #999 solid 1px;
  border-radius: 3px;
  padding: 5px 10px;
  box-sizing: border-box;
  min-width: 50px;
  max-width: 300px;
  background: #ffffff;
}
```
这里配合min-width，max-width 效果更真实。

（3）点击div可以弹出软键盘，但是无法输入内容，需要设置属性，如下
```css
.inputContent{
    user-select:text;
    -webkit-user-select:text;
}
```
这样就完成一个可以根据获取输入内容来动态来调节宽高。
### 方法三
overflow-x:scroll;
### 方法四
```css
/**1 可能会有滚动条 */
// .ios_scroll {
//   overflow-x: scroll ;
// }
// .ios_scroll ::-webkit-scrollbar {
//   display: none;
// }

/**2  */
.ios_scroll {
  input {
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    * {
        -webkit-transform: translateZ(0px);
        //  -webkit-transform: translate3d(0, 0, 0);
      }
  }
}
```
https://stackoverflow.com/questions/7808110/css3-property-webkit-overflow-scrollingtouch-error/10122689#10122689

https://stackoverflow.com/questions/25596960/issues-with-touch-scroll-on-ios-when-focusing-inputs