async function asyncl(){
  console.log('asyncl start');
  await async2();
  console.log('async1 end');
}
async function async2(){
  console.log('async2');
}
console.log('script start');
setTimeout(function(){
  console.log('setTimeout');
},0)
asyncl();
new Promise(function(resolve){
  console.log('promise1');
  resolve();
}).then(function(){
  console.log('promise2');
});
console.log('script end');

//script start
//