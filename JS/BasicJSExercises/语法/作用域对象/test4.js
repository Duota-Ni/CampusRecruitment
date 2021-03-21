function test(arg) {
  this.x = arg
  return this
}

var a = test(5)
var b = test(6)

console.log(a.x);
console.log(b.x);