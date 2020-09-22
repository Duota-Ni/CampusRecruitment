/* 方法一：建栈存储左括号，先进后出，
最后一个左括号与第一个右括号匹配,
最后左括号的栈不为空也不行
*/
// var isValid = function (s) {
//   let left = [];
//   let length = s.length;
//   if (length % 2 === 1) { return false }
//   for (let i = 0; i < length; i++) {
//     switch (s[i]) {
//       case '{':
//       case '[':
//       case '(':
//         left.push(s[i]);
//         break;
//       case '}':
//         if (left.pop() !== '{') { return false }
//         break;
//       case ']':
//         if (left.pop() !== '[') { return false }
//         break;
//       case ')':
//         if (left.pop() !== '(') { return false }
//         break;
//     }
//   }
//   return !left.length;
// }

//方法二：栈+hash
var isValid = function (s) {
  if (s.length % 2 === 1) { return false }
  let left = [];
  let hashmap = new Map([
    ['}', '{'],
    [']', '['],
    [')', '(']
  ])
  s.split('').forEach(val => {
    if (hashmap.has(val)) {
      if (!left.length || left[left.length - 1] !== hashmap.get(val)) { return false };
      left.pop()
    } else {
      left.push(val)
    }
  })
  return !left.length;
}

const res = isValid("{{({)}}");
console.log(res);