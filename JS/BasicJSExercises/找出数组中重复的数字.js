var findRepeatNumber = function(nums) {
  for(let i = 0;i<nums.length-1;i++){
    for(let j = 0;i<nums.length;j++){
      if(nums[j] === nums[i]){
        return nums[i]
      }
    }
  }
};