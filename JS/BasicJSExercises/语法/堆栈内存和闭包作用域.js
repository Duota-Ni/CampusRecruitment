// 堆：存储引用类型值的空间  
// 栈：存储基本类型值和执行代码的空间  

//example 1
//属性名不能重复 数字属性名==字符串属性名
// let a = {},b ='0',c = 0;
// a[b] = '杨洋';
// a[c] = '茜茜';
// console.log(a[b]);
//=>对象和数组的区别

//example 2
//Symbol创建唯一值
// let a = {},b =Symbol('1'),c = Symbol('1');
// a[b] = '杨洋';
// a[c] = '茜茜';
// console.log(a[b]);
// =>自己实现Symbol

// //example 3
//对象的属性名为引用类型时，会把属性名转换成字符串
//如下题，b和c变为a的属性名时都会转化成'[object Object]',同b.toString()结果
// let a = {},b ={n:'1'},c = {m:'2'};
// a[b] = '杨洋';
// a[c] = '茜茜';
// console.log(a[b]);
// console.log(a);
// =>Object.prototype.toString / valueOf


// var test = (function(i){
//   return function(){
//     alert(i *= 2);  //alert()输出的值都是字符串
//   }
// })(2);
// test(5);
//浏览器一加载页面形成栈内存，当每次函数执行的时候，都会形成一个全新的执行上下文（执行栈Execution Context Stack），把执行上下文压缩到栈内存里面执行

//赋值操作：1.创建变量 2.准备值 3.变量和值关联

var a = 0, b = 0;
function A(a){
  A = function(b){
    alert(a + b++);
  };
  alert(a++);
}
A(1);
A(2);

var a = 0, b = 0;
function A(a){
  A = function(b){
    alert(a + ++b);
  };
  alert(++a);
}
A(1);
A(2);