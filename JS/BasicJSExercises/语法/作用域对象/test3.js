//1.
var a = 12;
function fn() {
  console.log(a);//undefined
  var a = 45;
  console.log(a);//45
}
fn();

//2.
function fn() {
  console.log(11);
  function ff() {
    console.log(22);
  }
  ff()
}
fn()  //11 22

//3
function fn() {
  console.log(5);
  fn();
}
fn();// 递归，一直输出5

//4
var a = 12;
function fn() {
  console.log(a);
  return 4;
  var a = 45;
}
fn();//undefined

//5 未懂
var a = 100;
function test() {
  var b = 2 * a;
  var a = 200;
  var c = a / 2;
  fn(b);
  fn(c);
}
test() //VM143:3 Uncaught RangeError: Maximum call stack size exceeded

//6
var obj = {
  val: 2,
  dbl: function () {
    var val = 45;
    console.log(this);
    this.val *= 2;
    console.log(val);
    console.log(this.val);
  }
}
var ff = obj.dbl(); //obj 45 4 //obj下调用
var fn = obj.dbl; //window下调用
fn();//Window 45 NaN
