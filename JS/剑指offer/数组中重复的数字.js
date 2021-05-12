// 1、双for
// var findRepeatNumber = function (nums) {
//   for(let i = 0;i<nums.length-1;i++){
//     for(let j = i+1;i<nums.length;j++){
//       if(nums[j] == nums[i]){
//         return nums[i]
//       }
//     }
//   }
// }

// 2、利用set存储不重复数字的特性
// var findRepeatNumber = function(nums) {
//   let s=new Set();
//   for(var i in nums){
//       var curLenth=s.size;
//       s.add(nums[i]);
//       if(s.size==curLenth)
//       return nums[i];
//   }
// };


// 3、map存储键值对 键：数组的值 值：数组值是否已经存在
// var findRepeatNumber = function (nums) {
//   const map = {};
//   for (const num of nums) {
//       if (!map[num]) {
//           map[num] = true;
//       } else {
//           return num;
//       }
//   }
// }

// 4、原地哈希 键：索引对应的值 值：索引
// nums[i] ?= i
/**
 * @param {number[]} nums
 * @return {number}
 */
 var findRepeatNumber = function(nums) {
  const length  = nums.length;
  if (!length) {
      return null;
  }
  for (let i = 0; i < length;i++) {
      if (nums[i] <0 || nums[i] > length - 1) {
          return null;
      }
  }
  for (let i = 0; i < length; i++) {
      // 如果当前索引与对应的元素值不同，则交换nums[i] nums[nums[i]]。
      while (nums[i] !== i) {
          if (nums[i] === nums[nums[i]]) {
              return nums[i];
          }
          let temp = nums[i];
          nums[i] = nums[temp];
          nums[temp] = temp;
      }
  }
  return null;
};


findRepeatNumber([1,3, 2, 3, 4, 4])

// let res = findRepeatNumber([0, 1, 3, 2, 3, 4, 11, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
// console.log(res)