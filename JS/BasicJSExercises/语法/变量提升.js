//var 提升仅仅提升声明，赋值没有提示,在局部作用域和全局作用域都有各自的提升
//function提升 声明赋值都提升，但是要求是这种形式 function fn(){}
//函数声明的优先级高于变量声明的优先级
//1.
console.log(a);//undifined
var a = 12;
console.log(a);//12

//2.
console.log(fn);//function fn(a,b) //已经赋值
function fn(a, b) {
  return a + b
}


//3
console.log(v1);//undifined
var v1 = 100;
function foo() {
  console.log(v1);//undifined  局部作用域的v1变量声明提升了
  var v1 = 200;
  console.log(v1);//200
}
foo();
console.log(v1);//100

//4
function foo() {
  getName = function () { console.log(1); }
  return this;
}
foo.getName = function () { console.log(2); };

foo.prototype.getName = function () { console.log(3); };

var getName = function () { console.log(4); };

function getName() { console.log(5); }

foo.getName();      // 2
getName();          // 4
foo().getName();    // 1   // (foo()).getName()  ---> window.getName()
getName();          // 1    // 执行foo(), 被修改
new foo.getName();  // 2 // '.'点的执行优先级最高, 但'.'前遇见()会先执行()前面
//new (foo.getName)()                             
new foo().getName();// 3  (new foo()).getName(); 
//    实例对象的隐式原型 = 构造函数的显示原型                       
new new foo().getName(); //3   new ((new foo()).getName)()

//5
function test(a, b) {
  console.log(a);
  console.log(b);
  var b = 234;
  console.log(b);
  a = 123;
  console.log(1);
  function a() { }
  var a;
  b = 234;
  var b = function () { };
  console.log(a);
  console.log(b);
}
test(1);


//same1
function fn(a,b){
  console.log(a);
  function a(){}
}
fn(1)
//形参赋值，就是函数在预解释的时候，把形参var 一下，并且赋值，在函数自己的作用域里，带var 的都是自己的私有变量，所以，形参也是一个私有变量，如果全局里有一个变量名字和形参的名字一样，在函数执行的作用域里，这个变量的值发生了改变，改变的都是这个函数私有的这个变量，对全局变量不会产生影响
//same2
function fn(){
  var a = 1 //约等于形参赋值
  var a = function(){};//约等于后面函数变量提升覆盖前面a的赋值
  console.log(a);
}
fn()
//same1和same2相同意思


//6 闭包
var add = function(x) { 
  var sum = 1; 
  var tmp = function(x) { 
      sum = sum + x; 
      return tmp;    
  } 
  tmp.toString = function() { 
      return sum; 
  }
  return tmp; 
} 
console.log(add(1)(2)(3));



