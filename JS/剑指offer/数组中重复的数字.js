// var findRepeatNumber = function (nums) {
//   for(let i = 0;i<nums.length-1;i++){
//     for(let j = i+1;i<nums.length;j++){
//       if(nums[j] == nums[i]){
//         return nums[i]
//       }
//     }
//   }
// }

// var findRepeatNumber = function(nums) {
//   let s=new Set();
//   for(var i in nums){
//       var curLenth=s.size;
//       s.add(nums[i]);
//       if(s.size==curLenth)
//       return nums[i];
//   }
// };


var findRepeatNumber = function (nums) {
  const map = {};
  for (const num of nums) {
      if (!map[num]) {
          map[num] = true;
      } else {
          return num;
      }
  }
}

let res = findRepeatNumber([0, 1,3, 2, 3, 4, 11, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
console.log(res);