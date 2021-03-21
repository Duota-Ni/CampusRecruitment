
// 例题1
// async function asyncl(){
//   console.log('asyncl start');
//   await async2();
//   console.log('async1 end');
// }
// async function async2(){
//   console.log('async2');
// }
// console.log('script start');
// setTimeout(function(){
//   console.log('setTimeout');
// },0)
// asyncl();
// new Promise(function(resolve){
//   console.log('promise1');
//   resolve();
// }).then(function(){
//   console.log('promise2');
// });
// console.log('script end');

//script start
//

// 例题2
// 1 7 6 8 2 4 3 5 9 11 10 12
// console.log('1');

// setTimeout(function() {
//     console.log('2');
//     process.nextTick(function() {
//         console.log('3');
//     })
//     new Promise(function(resolve) {
//         console.log('4');
//         resolve();
//     }).then(function() {
//         console.log('5')
//     })
// })
// process.nextTick(function() {
//     console.log('6');
// })
// new Promise(function(resolve) {
//     console.log('7');
//     resolve();
// }).then(function() {
//     console.log('8')
// })

// setTimeout(function() {
//     console.log('9');
//     process.nextTick(function() {
//         console.log('10');
//     })
//     new Promise(function(resolve) {
//         console.log('11');
//         resolve();
//     }).then(function() {
//         console.log('12')
//     })
// })


// 例题3
setImmediate(function () {
  console.log('immediate')
})
process.nextTick(function () {
  console.log('next tick')
})
