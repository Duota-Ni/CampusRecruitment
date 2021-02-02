let obj = {
  a: 100,
  b: [10, 20, 30],
  c: { x: 10 },
  d: /^\d+$/,
  e: null,
  f: undefined,
  g: new Date()
};

// //浅拷贝
// //多维对象/数组，只把第一层拷贝了
// //1.
// let obj2 = {...obj};
// //2.
// let obj2 = {};
// for(let key in obj){
//   if(!obj.hasOwnProperty(key)) break;
//   obj2[key] = obj[key]
// }
// // 3.Object.assign()实现
// console.log(obj);
// console.log(obj2);
// console.log(obj === obj2);//false
// console.log(obj.c === obj2.c);//true
// obj2.c.x = 1000;
// console.log(obj2.c);
// console.log(obj.c);//这里把二维的原对象的对象里面的属性也给改了（浅拷贝）

//深拷贝
//1.JSON.stringify() JSON.parse() 
// let obj2 = JSON.parse(JSON.stringify(obj))//=>弊端

//注意JSON.stringify()转换正则表达式、函数会转变为空{}，将new Date转变为时间点
// JSON.stringify({a:function(){}});
// JSON.stringify({a:function(){},x:1000});
// JSON.stringify({a:new Date()});

//2.
function deepClone(obj) {
  //过滤特殊情况
  if (obj === null) return null;
  if (typeof obj !== 'object') return obj;
  if (obj instanceof RegExp) {
    return new RegExp(obj)
  }
  if (obj instanceof Date) {
    return new Date(obj)
  }

  let newObj = Array.isArray(obj) ? [] : {};
  //不直接创建空对象的目的：拷贝的结果和之前保持相同的所属类class
  // let newObj = new obj.constructor;//可以创建普通对象或者类的实例，相对于{}和new Object()而言
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) { 
      newObj[key] = deepClone(obj[key]);
    }
  }
  return newObj;
}
let obj2 = deepClone(obj);
console.log(obj);
console.log(obj2);
console.log(obj2 === obj);
console.log(obj2.c === obj.c);
