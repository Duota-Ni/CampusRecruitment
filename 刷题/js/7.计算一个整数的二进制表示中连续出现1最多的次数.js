// 计算一个整数的二进制表示中连续出现1最多的次数。
// 比如13的二进制是：1101，那么他的二进制表示中连续出现的1最多为2次，所以答案就是2：

function main(num) {
  if (num === 0) { return 0 }
  let tempArr = []
  let letter
  while (num >= 1) {
    letter = num % 2
    num = Math.floor(num / 2)
    tempArr.unshift(letter)
  }
  console.log(tempArr);
  let count = 0 // 存储连续出现1的个数
  let max = 0 // 存储连续最大出现次数
  for (let i = 0; i < tempArr.length - 1; i++) {
    if (tempArr[i] === 1) {
      count++
    } else { // 由于需要取出最大次数，所以一旦出现连续0的时候，需要将代表出现连续1的变量置清空
      count = 0 
    }
    if (count > max) {
      max = count
    }
  }
  console.log(max);
}

main(227)
main(13)