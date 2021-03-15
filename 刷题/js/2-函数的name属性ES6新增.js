function foo() {}
var oldName = foo.name
foo.name = 'bar'
console.log(oldName);
console.log(foo.name);