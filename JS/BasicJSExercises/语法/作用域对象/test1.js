var obj = {
  varl: 2,
  dbl: function () {
    //         var  val = 45
    console.log(this)
    this.val *= 2
    console.log(val)
    console.log(this.val)
  }

}

var ff = obj.dbl()
var fn = obj.dbl; fn()
function chifan() {
  console.log(this)
}

班长.chifan()
function chifan() {
  console.log(this)
}

班长.chifan()
chifan()

var num = 45
var obj = {
  num: 12,
  ff: (function () {
    console.log(this.num)
  }),
  fn() {
    function fn() {
      console.log(this)
    }
  }

  // documnet.getElementById("div1").onclick = function () {
  //   console.log(this)  div1
  //   fn()   //window
  // }
}
var a = 123;
var b = {
  "name": "zhang"
}

var c = ["ni", 23]
var d = function () {
  console.log(12)
}
var obj1 = {
  "name": "zhangsan"
}

var obj2 = obj1;
obj2.name = "lisi"
console.log(obj1)

var arr1 = [12, 56]
var arr2 = arr1;
arr2[0] = "lisi"
console.log(arr1)

function CreateYifu(name, age) {
  var obj = {
    "name": name,
    "age": age
  };
  return obj;
}

var zhang = CreateYifu("张三", 23)
var lisi = CreateYifu("lisi", 22)
console.log(lisi)
function Person(name, age) {
  this.name = name;
  this.age = age;
}

var zhang = new Person("张三", 26)
console.log(zhang)
function Person(name, age) {
  this.name = name;
  this.age = age
}

Person.prototype = {
  xx: "hello world",
  say: function () {
    console.log(123)
  }
}

var zhang = new Person("zhangsan", 23)
var li = new Person("lisi", 22)