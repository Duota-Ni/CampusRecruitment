//matchAll() 方法返回一个包含所有匹配正则表达式的结果及分组捕获组的迭代器。
const reg = /foo*/g;
const str1 = 'table football, foosball';
let res = str1.matchAll(reg);
console.log(res);
const array = [...res]
console.log(array);