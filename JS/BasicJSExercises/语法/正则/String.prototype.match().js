//match() 方法检索返回一个字符串匹配正则表达式的结果。
const reg = /foo*/g;
const str1 = 'table football, foosball';
let res = str1.match(reg);
console.log(res);