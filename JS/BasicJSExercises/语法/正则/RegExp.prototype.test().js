//test() 方法执行一个检索，用来查看正则表达式与指定的字符串是否匹配。返回 true 或 false。
let str = 'hello world!';
let result = /^hello/.test(str);
console.log(result);