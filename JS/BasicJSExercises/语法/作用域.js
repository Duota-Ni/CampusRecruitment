for (var i = 0; i < 10; ++i) {
  console.log(i);
}   //0 1 2 3 4 5 6 7 8 9 

for (var i = 0; i < 10; i++) {
  console.log(i);
}   //0 1 2 3 4 5 6 7 8 9 

for (var i = 0; i < 10; i++) {
  setTimeout(console.log(i),0)
}   //0 1 2 3 4 5 6 7 8 9 

for (var i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i)//10个10
  }, 1000)
}