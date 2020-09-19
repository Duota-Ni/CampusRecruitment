[Javascript 的 this 用法 —— 阮一峰](http://www.ruanyifeng.com/blog/2010/04/using_this_keyword_in_javascript.html)

this就是函数运行时所在的环境对象  
特别注意：  
作为构造函数调用：所谓构造函数，就是通过这个函数，可以生成一个新对象。这时，this就指这个新对象  
```js
　function DOG(name){
　　　　this.name = name;
　　}

　var dogA = new DOG('大毛');
　alert(dogA.name); // 大毛
```