function instance_of(L,R){
  var O = R.prototype;
  L = L.__proto__;
  while(true){
    if(L === null){
      return false;
    }
    if(O === L){
      return true 
      L = L.__proto__;
    }
  }
}
function C(){}
let c = new C()
let res = instance_of(c,C);
console.log(res);