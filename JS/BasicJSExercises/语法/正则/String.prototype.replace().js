//replace() 方法返回一个由替换值（replacement）替换部分或所有的模式（pattern）匹配项后的新字符串。模式可以是一个字符串或者一个正则表达式，替换值可以是一个字符串或者一个每次匹配都要调用的回调函数。如果pattern是字符串，则仅替换第一个匹配项。
// const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
// const regex = /dog/gi;
// console.log(p.replace(regex, 'ferret'));
// console.log(p.replace('dog', 'monkey'));

function replacer(match, p1, p2, p3, offset, string) {
  // p1 is nondigits, p2 digits, and p3 non-alphanumerics
  console.log(`${match}
  ${p1}
  ${p2}
  ${p3}
  ${offset}
  ${string}`);
  return [p1, p2, p3].join(' - ');
  
}
var newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
console.log(newString);  // abc - 12345 - #$*%

