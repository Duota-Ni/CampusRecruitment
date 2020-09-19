//用浏览器打印
let a = 'hello1';
console.log(a.__proto__);//String{'...'} 是一个对象
console.log(a instanceof String);//false

let c = new String('hello3');
console.log(c.__proto__);//String{'...'}
console.log(c instanceof String);//true

// 因为str1.__proto__ 相当于toObject(str1).__proto__.所以输出的是String
// 即会自动转换成Object 类型。
// 但是 str1 不是对象类型，所以str1 instanceof String 返回 false

let b = String('hello2');
console.log(b.__proto__);//String{'...'}
console.log(b instanceof String);//false


// String()和toString()都是将其他类型的变量转换为字符串类型
// toString()无法转换null和undefined，
// String()可以


let f = {
  name:'yang'
}
console.log(f);