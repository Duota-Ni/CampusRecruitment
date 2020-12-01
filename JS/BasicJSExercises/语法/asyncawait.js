//https://segmentfault.com/a/1190000007535316

//1.先来看下它的执行顺序
// async function async1() {
//   console.log( 'async1 start' )
//   await async2()
//   console.log( 'async1 end' )
// }

// function async2() {
//   console.log( 'async2' )
// }

// async1()

// console.log( 'script start' )


//2.概念
// async 用于申明一个 function 是异步的，而 await 用于等待一个异步方法执行完成
//await 只能出现在 async 函数中


//3.async的作用
//3.1 处理返回值将直接输出一个fullfill状态的Promise
//如果在函数中 return 一个直接量，async 会把这个直接量通过` Promise.resolve() `封装成 Promise 对象。
// async function testAsync() {
//   return "hello async"
// }
// const res = testAsync()
// console.log(res)

//如果没有返回值
async function testAsync2() {
  
}
const res = testAsync2()
console.log(res)