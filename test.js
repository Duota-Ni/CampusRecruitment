// var findNumberIn2DArray = function(matrix, target) {
//   for (let i = 0 ; i < matrix.length ; i++){
//       for (let j = 0 ; j < matrix[0].length ; j++ ){
//         return matrix[i][j] == target
//       }
//   }
// };

// var findNumberIn2DArray = function (matrix, target) {
//   let temp = target;
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//       // 找到了
//       if (matrix[i][j] == temp) {
//         temp = true;
//         break;
//       }
//       // 遍历结束了还没找到
//       if (i == matrix.length - 1 && j == matrix[i].length - 1) {
//         temp = false;
//       }
//     }
//     if (temp == true) {
//       break;
//     }
//   }
//   if (target === temp) {
//     console.log(5);
//     return false
//   }
//   else {
//     console.log(6);
//     return temp
//   };
// };
// var findNumberIn2DArray = function(matrix, target) {
//   let flag = false
//   for (let i = matrix.length; i > 0; i--) {
//     if (matrix[i-1][0] <= target) {
//       if (matrix[i-1].includes(target)) {
//         flag = true
//         i = -1
//       }
//     }
//   }
//   return flag
// };

// const para = [
//   [1, 4, 7, 11, 15],
//   [2, 5, 8, 12, 19],
//   [3, 6, 9, 16, 22],
//   [10, 13, 14, 17, 24],
//   [18, 21, 23, 26, 30]
// ]
// const res = findNumberIn2DArray(para,4);
// console.log(res);

// function test(){
//   for(let i = 0;i<8;i++){
//     console.log(i);
//   }
// }
// test()

function test2(){
  for(let i = 8; i>-1;i--){
    console.log(i);
  }
}
test2();