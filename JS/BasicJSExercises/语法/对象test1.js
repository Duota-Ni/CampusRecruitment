function A(){
  console.log(1);
}
function Func(){
  A = function(){
    console.log(2);
  };
  return this;
}
Func.A = A;
Func.prototype={
  A:()=>{
    console.log(3); //箭头函数不能被new
  }
}
A();//1
Func.A();//1
Func().A();//2
new Func.A();//2
new Func().A();//error
new new Func().A();//err