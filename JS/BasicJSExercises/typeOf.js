//一、若是基本数据类型返回对应的基本类型
// 1.number类型
var num = 1;
console.log(typeof num);//返回的是number

// 2.string 类型
var str = 'jack';
console.log(typeof str);//返回的是string

//3. boolean类型
var boo = true;
console.log(typeof boo);//返回的是boolean

// 4.undefined类型
var und;
console.log(typeof und);//返回的是undefined

//二、若是复杂数据类型
//1. Array类型
var arr = new Array();
console.log(typeof arr); //返回的是object

// 2.function类型
var fn = function () { };
console.log(typeof fn); //返回的是function

// 3.Object类型
var  obj = new Object();
var nul =null;//（特别地）
console.log(typeof nul); //返回的是object
console.log(typeof obj); //返回的是object

// 4.字面量的数组
var arr2 = [1,32];
console.log(typeof arr2);//返回的是object

// 5.自定义对象

function Person(name){
    this.name =name;
}
var stu = new Person();
console.log(typeof stu); //返回的是object

//6.RegExp
var reg = new RegExp(/\d/,g); 
console.log(typeof reg);//返回的是object

//7.Date
var dat = new Date();
console.log(typeof dat);//返回的是object

// 可以得出：复杂数据类型，如果是对象，则返回的是object,如果的function类型,则返回的是function

// 所以：typeof 可以返回的类型为：number、string、boolean、undefined、object、function

