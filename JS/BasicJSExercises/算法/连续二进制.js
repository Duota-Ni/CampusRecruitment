function test(num){
  let str = num.toString(2);
  const patt = /1+/g;
  // let b = patt.exec(a);
  let b = str.match(patt);
  let res = 0;
  b.forEach(item => {
    if(item.length>res){
      res = item.length;
    }
  })
  return res;
}
let res1 = test(227);
console.log(res1);
let para = 39;
console.log(typeof para.toString(2));

// // test(227);
// module.exports = {
//   test:test
// }

// var num=parseInt(readline());
// // 通过 xx.toString(2)转换为二进制
// num=num.toString(2);
// //因为想匹配到一个数组，所以使用g全局匹配
// var reg=newRegExp(/1+/g);
// var arr=String(num).match(reg);
// var max=0;
// arr.forEach((item)=>{
//     if(item.length>max){
//         max=item.length
//     }
// })
// print(max);
