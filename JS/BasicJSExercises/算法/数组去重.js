//方法1
function deduplication(arr) {
  return Array.from(new Set(arr));
}
console.log(deduplication([2, 3, 6, 8, 3, 2]));

//输入的是字符串
function deduplicationstr(str) {
  return Array.from(new Set(str.split(''))).join('');
}
console.log(deduplicationstr('aafsdgdgeyhfeee'));

//方法2
function deduplication2(arr){
  let a = [];
  for (let i = 0; i < arr.length; i++) {
    if (a.indexOf(arr[i]) == -1) {
      a.push(arr[i])
    }
  }
  console.log(a);
}
deduplication2([2,3,8,4,3,3,6,3,8]);

function deduplicationstr2(str) {
  let b = str.split('');
  let a = [];
  for (let i = 0; i < str.length; i++) {
    if (a.indexOf(b[i]) == -1) {
      a.push(b[i])
    }
  }
  console.log(a.join('') );;
}
deduplicationstr2('ahhhtyisattt')

//方法3
