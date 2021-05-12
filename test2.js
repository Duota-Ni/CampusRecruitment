/**
 * @param {number[]} nums
 * @return {number}
 * 方法map存储键值对
 * 键 数组的值
 * 值 值的个数
 */
 var findRepeatNumber = function(nums) {
  let m = new Map()
  for(let i = 0; i < nums.length; i++) {
    if(m.get(nums[i]) !== undefined) {
      let a = m.get(nums[i])
      m.set(nums[i], a++)
    }else{
      m.set(nums[i],1)
    }
  }
  console.log(m)
};