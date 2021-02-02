// for...in语句以任意顺序遍历一个对象的除Symbol以外的可枚举属性。
// for...in会遍历到对象的原型，如果只要考虑对象本身的属性，而不是它的原型，那么
// 使用 getOwnPropertyNames() 
// 或执行 hasOwnProperty() 来确定某属性是否是对象本身的属性（也能使用propertyIsEnumerable

// 语法
for (variable in object)
  statement

// variable 是对象名 如果是array就是index