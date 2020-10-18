// var a = ? ;
// if(a == 1 && a == 2 && a == 3){
//   console.log('yeah');
// }
//a是什么值时if条件为true？

//方法1  
// var a ={
//   i:0,
//   toString(){
//     return ++this.i;
//   }
// }
// if(a == 1 && a == 2 && a == 3){
//   console.log('yeah');
// }


//方法2 数据劫持实现,因为用到window，所以要在浏览器中实现
var i = 0;
Object.defineProperty(window,'a',{
  get(){
    return ++this.i;
  }
})
if(a == 1 && a == 2 && a == 3){
  console.log('yeah');
}

// let o = {
//   name:''
// }
// Object.defineProperty(o,'name',{
//   get() {
//     console.log('获取');
//   },
//   set(){
//     console.log('设置');
//   }
// })

