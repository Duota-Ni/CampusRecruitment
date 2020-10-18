//Array.sort()
//默认元素调用String()后进行升序排序
let arr = [9,14,4,150,6,1];
let arr1 = [9,14,4,150,6,1];
let arr2 = [9,14,4,150,6,1];
let arr3 = [9,14,4,150,6,1];
console.log('默认：'+ arr.sort());

//如果第一个参数应该排在第二个参数前面，就返回负值
//如果两个参数相等，就返回0
//如果第一个参数应该排在第二个参数后面，就返回正值
function compare(a,b){
  if(a<b){
    return -1;
  }else if(a>b){
    return 1;
  }else{
    return 0;
  }
}
let asc1 = arr3.sort(compare);
console.log(asc1);

//数字的升序降序 传入compare函数，直接用减法
let asc = arr1.sort((a,b) => a-b); //升序
let desc = arr2.sort((a,b) => b-a); //降序
console.log(asc);
console.log(desc);
