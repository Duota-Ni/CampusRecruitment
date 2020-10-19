//1. Array.prototype.flat()
function flat1(arr) {
  const res = arr.flat(Infinity)
  console.log(res);
}

//2.toString + split
function flat2(arr) {
  const res = arr.toString().split(',').map(value => Number(value))
  console.log(res);
}

//3.join + split
function flat3(arr) {
  const res = arr.join(',').split(',').map(value => Number(value));
  console.log(res);
}

//4.reduce
function flat4(arr) {
  const res = arr.reduce((pre, cur) =>  pre.concat(Array.isArray(cur) ? flat4(cur) : cur) ,[]);
  return res;
}

//5.递归 递归的遍历每一项，若为数组则继续遍历，否则concat
function flat5(arr){
  let res = [];
  arr.map(value => {
    if(Array.isArray(value)){
      res = res.concat(flat5(value));
    }else{
      res.push(value)
    }
  })
  return res;
}


//6.扩展运算符
function flat6(arr){
  while(arr.some(value=>Array.isArray(value))){
    arr = [].concat(...arr)
  }
  return arr;
}

//JSON.stringify
function flat7(arr){
  let res = JSON.stringify(arr).replace(/(\[|\])/g,'').split(',').map(item => Number(item))
  return res;
}

const a =[
  [1,2,3],
  [4,5,6,7],
  [8,9,0,[12,14,[12,13,[17]]]],
  10
]

// flat1(a);
// flat2(a);
// flat3(a);
// console.log(flat4(a));
// console.log(flat5(a));
// console.log(flat6(a));
console.log(flat7(a));
console.log(JSON.stringify(a));


