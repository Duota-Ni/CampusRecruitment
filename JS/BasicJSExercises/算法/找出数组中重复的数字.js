// map存储键值对
// 键：arr的值
// 值：arr值对应的个数
var findRepeatNumber = function(arr) {
  let map = new Map() ;
  let res = []
  arr.forEach((item) => {
    if(map.get(item) !== undefined){
      let a = map.get(item);
      map.set(item,++a);
    }else{
      map.set(item,1);
    }
    if(map.get(item)>1){
      res.push(item);
    }
  });
  console.log(res);
  console.log(map);
};
findRepeatNumber([1,3,5,6,3,6,7]);