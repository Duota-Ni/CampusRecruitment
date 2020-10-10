setTimeout(() => {
  console.log(1);
},20)
console.log(2);
setTimeout(()=>{
  console.log(2);
},10)
console.log(4);
console.time('AA');
for(let i = 0;i<900000;i++){
  //do something
}
console.timeEnd('AA');
console.log(5);
setTimeout(()=>{
  console.log(6);
},8)
console.log(7);
setTimeout(()=>{
  console.log(8);
},15)
console.log(9);