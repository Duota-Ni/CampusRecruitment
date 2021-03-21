let arr = []

// 1. 
arr instanceof Array

// 2.
arr.__proto__  === Array.prototype

// 3.
arr.constructor === Array

// 4.
Object.prototype.toString.call(arr) === '[object Array]'

// 5.
Array.isArray(arr)

// 扩展
let d = new Date()
d.constructor === Date  //true

let reg = new RegExp()
reg.constructor === RegExp // true