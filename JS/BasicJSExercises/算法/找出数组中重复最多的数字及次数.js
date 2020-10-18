//map存储键：元素，值：次数
function main(arr){
  let map = new Map() ;
  let target = arr[0]  ;
  let count = 1;
  arr.forEach((item) => {
    if(map.get(item) !== undefined){
      let a = map.get(item);
      map.set(item,++a);
    }else{
      map.set(item,1);
    }
    if(map.get(item)>count){
      count = map.get(item);
      target = item
    }
  });
  console.log(`出现最多的元素是${target},出现了${count}次`);
  console.log(map);
}

main([5,8,3,5,8,8,3,1,8])

//类似题
// 请判断一个字符串出现次数最多的字符及出现次数？
// 输入：const str = 'asddfgdfwwqeweqwezczxcsdfgdgd';
// 输出：’d’, 出现6次
