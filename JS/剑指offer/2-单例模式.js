// Q:javascript实现单例模式
// 单例Singleton模式：保证一个类仅有一个实例，并提供一个访问它的全局访问点
// 通过单例模式的方法创建的类在当前进程中只有一个实例

// 模式是一种可复用的解决方案，将解决问题的方法制作成模板，并且这些模板可以应用于多种不同的情况

// 方法0 非ES6
// var Single = (function() {
//   var instance = null;
//   function Single(name) {
//       this.name = name;
//   }
//   return function(name){
//       if (!instance) {
//           instance = new Single(name);
//       }
//       return instance;
//   };
// })();
// var oA = new Single('hi');
// var oB = new Single('hello');
// console.log(oA===oB);

// 方法1
// class Person {
//   constructor(name) {
//     this.name = name
//   }
// }
// // 静态方法 相当于在类里面写static getInstance(name){...}
// Person.getInstance = function (name) {
//   if (this.instance) return this.instance
//   return this.instance = new Person(name)
// }

// // Person.getInstance接口用于创建单例，获取实例，与传统方式不同
// let p1 = Person.getInstance("杨洋")
// let p2 = Person.getInstance("刘亦菲")

// console.log(p1) // p1和p2相同，都是Person { name: '杨洋' }
// console.log(p2)
// console.log(p1 === p2) // true

// let p3 = new Person("zoro")
// console.log(p3)

// 方法2 
// let CreateIdol = (function () {
//   let instance = null
//   return class {
//     constructor(name, age) {
//       if (instance) return instance
//       this.name = name
//       this.age = age
//       return instance = this //instance赋值为当前实例
//     }
//   }
// })()

// let i1 = new CreateIdol("yangyang", 29)
// let i2 = new CreateIdol("zoro", 21)

// console.log(i1)
// console.log(i2)
// console.log(i1 === i2)

// 该方法违背了软件开发的单一职责规则，同时具有两个功能：1.创建Idol的职责2.控制单例的职责
// 因此方法3对此提出改进，拆分这两个职责

// 方法3
// 该类可以创建多个Idol
class CreateIdols {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

// 创建单例的方法
let getSingleClass = function(customClass) {
  let instance = null
  return class {
    constructor() {
      if(instance) return instance
      return instance = new customClass(...arguments)
    }
  }
}

let CreateSingleIdol = getSingleClass(CreateIdols)
let d1 = new CreateSingleIdol("yangyang", 29)
let d2 = new CreateSingleIdol("zoro", 21)
console.log(d1)
console.log(d2)
console.log(d1 === d2);

