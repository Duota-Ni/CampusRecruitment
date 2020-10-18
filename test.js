function xipaiI(arr) {
  let res = [];
  let i = 0;
  let j = arr.length / 2 ;
  while (j<arr.length){
    res.push(arr[j])
    j++;
    while(i<arr.length/2){
      res.push(arr[i])
      i++;
    }
  }
    return res;
}
console.log(xipaiI([1, 2, 3, 4, 5, 6]));