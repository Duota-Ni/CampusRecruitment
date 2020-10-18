 问题参考自https://www.nowcoder.com/discuss/258810  

### 目录
- [目录](#目录)
- [1. 原始值和引用值类型及区别](#1-原始值和引用值类型及区别)
- [2. 判断数据类型typeof、instanceof、Object.prototype.toString.call()、constructor](#2-判断数据类型typeofinstanceofobjectprototypetostringcallconstructor)
- [3. 类数组与数组的区别与转换](#3-类数组与数组的区别与转换)
- [4. 数组的常见API](#4-数组的常见api)
- [5. bind、call、apply的区别](#5-bindcallapply的区别)
- [6. new的原理](#6-new的原理)
- [7. 如何正确判断this？](#7-如何正确判断this)
- [8. 闭包及其作用](#8-闭包及其作用)
- [9. 原型和原型链](#9-原型和原型链)
- [10. prototype与__proto__的关系与区别](#10-prototype与__proto__的关系与区别)
- [11. 继承的实现方式及比较](#11-继承的实现方式及比较)
- [12. 深拷贝与浅拷贝](#12-深拷贝与浅拷贝)
- [13. 防抖和节流](#13-防抖和节流)
- [14. 作用域和作用域链、执行期上下文](#14-作用域和作用域链执行期上下文)
- [15. DOM常见的操作方式](#15-dom常见的操作方式)
- [16. Array.sort()方法与实现机制](#16-arraysort方法与实现机制)
- [17. Ajax的请求过程](#17-ajax的请求过程)
- [18. JS的垃圾回收机制](#18-js的垃圾回收机制)
- [19. JS中的String、Array和Math方法](#19-js中的stringarray和math方法)
- [20. addEventListener和onClick()的区别](#20-addeventlistener和onclick的区别)
- [21. new和Object.create的区别](#21-new和objectcreate的区别)
- [22. DOM的location对象](#22-dom的location对象)
- [23. 浏览器从输入URL到页面渲染的整个流程（涉及到计算机网络数据传输过程、浏览器解析渲染过程）](#23-浏览器从输入url到页面渲染的整个流程涉及到计算机网络数据传输过程浏览器解析渲染过程)
- [24. 跨域、同源策略及跨域实现方式和原理](#24-跨域同源策略及跨域实现方式和原理)
- [25. 浏览器的回流（Reflow）和重绘（Repaints）](#25-浏览器的回流reflow和重绘repaints)
- [26. JavaScript中的arguments](#26-javascript中的arguments)
- [27. EventLoop事件循环](#27-eventloop事件循环)
- [28. 宏任务与微任务](#28-宏任务与微任务)
- [29. BOM属性对象方法](#29-bom属性对象方法)
- [30. 函数柯里化及其通用封装](#30-函数柯里化及其通用封装)
- [31. JS的map()和reduce()方法](#31-js的map和reduce方法)
- [32. “==”和“===”的区别](#32-和的区别)
- [33. setTimeout用作倒计时为何会产生误差？](#33-settimeout用作倒计时为何会产生误差)

### 1. 原始值和引用值类型及区别  
- JavaScript 是一种**弱类型**或者说动态语言。这意味着你不用提前声明变量的类型，在程序运行过程中，类型会被自动确定。这也意味着你可以使用同一个变量保存不同类型的数据：  
```js
var foo = 42;    // foo is a Number now  
foo = "bar"; // foo is a String now  
foo = true;  // foo is a Boolean now  
```

- 基本类型（基本数值、基本数据类型）  
存储在**栈**（stack）,它们的值直接存储在变量访问的位置  
7种基本类型：string，number，bigint，boolean，null，undefined，symbol (ECMAScript 2016新增)   
[关于bigint](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt)(ECMAScript 2020 新增)

- 引用类型  
存储在**堆（heap）**中的对象，存储在变量处的值是一个指针（point），指向存储对象的内存处。  
object  

### 2. 判断数据类型typeof、instanceof、Object.prototype.toString.call()、constructor  
- typeof  
[参考MDN-typeof](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof)  
```js 
typeof operand
typeof(operand)
```
- instanceof   
 [参考MDN-instanceof](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof)  
instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。  
- Object.prototype.toString.call()  
  [参考MDN-Object.prototype.toString](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)
默认情况下，toString() 方法被每个 Object 对象继承。如果此方法在自定义对象中未被覆盖，toString() 返回 "[object type]"，其中 type 是对象的类型。
```js
var o = new Object();
o.toString(); // returns [object Object]
```
**使用 toString() 检测对象类型:**
```js
var toString = Object.prototype.toString;

toString.call(new Date); // [object Date]
toString.call(new String); // [object String]
toString.call(Math); // [object Math]

//Since JavaScript 1.8.5
toString.call(undefined); // [object Undefined]
toString.call(null); // [object Null]
```
**内部属性 [[Class]]**  
所有 typeof 返回值为 "object" 的对象（如数组）都包含一个内部属性 [[Class]]（我们可以把它看作一个内部的分类，而非
传统的面向对象意义上的类）。这个属性无法直接访问，一般通过 Object.prototype.toString(..) 来查看。  
- constructor
所有对象都会从它的原型上继承一个 constructor 属性：  
```js
function Person(){}
var person1 = new Person()
console.log(person1.constructor === Person) //true
console.log(person1.constructor)//function Person(),即第一行代码
console.log(Person.prototype.constructor)//function Person(),即第一行代码
```

### 3. 类数组与数组的区别与转换  















### 4. 数组的常见API
### 5. bind、call、apply的区别
### 6. new的原理
### 7. 如何正确判断this？
### 8. 闭包及其作用
### 9. 原型和原型链
### 10. prototype与__proto__的关系与区别
### 11. 继承的实现方式及比较
### 12. 深拷贝与浅拷贝
### 13. 防抖和节流
### 14. 作用域和作用域链、执行期上下文
### 15. DOM常见的操作方式
### 16. Array.sort()方法与实现机制
### 17. Ajax的请求过程
### 18. JS的垃圾回收机制
### 19. JS中的String、Array和Math方法
### 20. addEventListener和onClick()的区别
### 21. new和Object.create的区别
### 22. DOM的location对象
### 23. 浏览器从输入URL到页面渲染的整个流程（涉及到计算机网络数据传输过程、浏览器解析渲染过程）
### 24. 跨域、同源策略及跨域实现方式和原理
### 25. 浏览器的回流（Reflow）和重绘（Repaints）
### 26. JavaScript中的arguments
### 27. EventLoop事件循环
### 28. 宏任务与微任务
### 29. BOM属性对象方法
### 30. 函数柯里化及其通用封装
### 31. JS的map()和reduce()方法
### 32. “==”和“===”的区别
### 33. setTimeout用作倒计时为何会产生误差？  

