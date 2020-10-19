//search() 方法执行正则表达式和 String 对象之间的一个搜索匹配。
//如果匹配成功，则 search() 返回正则表达式在字符串中首次匹配项的索引;否则，返回 -1
const reg = /foo*/g;
const str1 = 'table football, foosball';
let res = str1.search(reg);
console.log(res);