//exec() 方法在一个指定字符串中执行一个搜索匹配。返回一个结果数组或 null

const reg = /foo*/g;
const str1 = 'table football, foosball';
let res = reg.exec(str1);
console.log(res);
console.log(res[0]);