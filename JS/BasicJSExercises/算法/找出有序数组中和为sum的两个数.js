//找出有序数组（从小到大排列）中和为sum的两个数，要求复杂度为O(n)，找到一组即可
//夹逼法
function findsum(length,arr,target){
  let i = 0;
  let j = length - 1;
  while(i<j){
    sum = arr[i]+arr[j];
    if(sum === target){
      return [arr[i],arr[j]]
    }else if(sum < target){
      i++;
    }else{
      j--
    }
  }
  return "notfound"
}
const res = findsum(5,[1,3,4,6,8],10)
console.log(res);

// let  arr = ["2","5","7"];
// let res1 = arr.map(value => parseInt(value))
// console.log(res1);
// console.log(arr);