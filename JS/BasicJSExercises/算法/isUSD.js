//1.判断是不是美元
// function isUSD(str) {
//   let pat = /^\$\d{1,3}(,\d{3})*(\.\d{2})?$/
//   return pat.test(str)
// }

// let a = '$2,119.93'

// const res = isUSD(a)
// console.log(res);

//2.将浮点数点左边的数每三位添加一个逗号，如 12000000.11 转化为『12,000,000.11』
function format(number) {
  return number && number.toString().replace(/(?!^)(?=(\d{3})+\.)/g, ",");
  // return number.toString().match(/(?!^)(?=(\d{3})+\.)/g);
}
const a = format(12979868.98);
console.log(a);

