

// // 2
// var findRepeatNumber = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     // let cur = nums[i]
//     while (nums[i] !== i) {
//       if (nums[i] === nums[nums[i]]) {
//         return nums[i]
//       }
//       // [nums[i], nums[nums[i]]] = [nums[nums[i]], nums[i]]
//       let temp = nums[i];
//       nums[i] = nums[temp];
//       nums[temp] = temp;
//     }
//   }
//   return -1
// }

//3
var findRepeatNumber = function(nums) {
  const length = nums.length;
  for (let i = 0; i < length; i++) {
      //检测下标为i的元素是否放在了位置i上
      while ((num = nums[i]) !== i) {
          if (num === nums[num]) {
              return num;
          }
          // [nums[i], nums[num]] = [nums[num], nums[i]];
          let temp = nums[i];
          nums[i] = nums[temp];
          nums[temp] = temp;
      }
  }
};

//4
// var findRepeatNumber = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     // 如果i和nums[i]不等,则nums[i]位置不对
//     // [0,4,3,4,2]
//     // 只要数字不在他该在的位置，则需要把它放到该放的位置
//     // [0,2,3,4,4]
//     while (i !== nums[i]) {
//       if (nums[i] === nums[nums[i]]) {
//         return nums[i]
//       }
//       let temp = nums[i]
//       nums[i] = nums[temp]
//       nums[temp] = temp
//     }
//   }
//   return -1
// };

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


let arr = [1, 3, 2, 3, 4, 4]
let res = findRepeatNumber(arr)
console.log(res);