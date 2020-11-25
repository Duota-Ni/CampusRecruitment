class Person1 {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hi, my name is ${this.name}`);
  }
  greetDelay(time) {
    setTimeout(() => {
      console.log(`Hi, my name is ${this.name}`);
      console.log(this);//Person1 {name: "杨洋"}
    }, time);
  }
}
let yang = new Person1('杨洋')
yang.greet()
yang.greetDelay(3000)

//考点：
//class constructor prototype
//模板字面量
//箭头函数this

function Person2(name) {
  this.name = name;
}
Person2.prototype.greet = function () {
  console.log("Hi,my name is " + this.name);
}
Person2.prototype.greetDelay = function (time) {
  let that = this;
  setTimeout(function () {
    console.log("Hi, my name is " + that.name);
    console.log(that);//Person2 {name: "刘亦菲"}
    console.log(this);//Window
  }, time);
}
let crystal = new Person2("刘亦菲");
crystal.greet();
crystal.greetDelay(3000)