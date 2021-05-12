//例如  http://www.baidu.com/s?id=233&id=344&key=%E6%9D%A8%E6%B4%8B&word=
//把url解析为对象
//简单做法
// function deurl(url) {
//   const a = url.split('?')[1];
//   const b = a.split('&')
//   let res = {};
//   b.forEach((item) => {
//     let c = item.split('=');
//     res[c[0]] = c[1];
//   });
//   console.log(res);
// }
// deurl('http://www.baidu.com/s?id=233&id=344&key=%E6%9D%A8%E6%B4%8B&word=')

// 获取浏览器的url
// window.location.href


//增加要求
//重复的放到数组里，文字解码，没有value的赋值为666
function deurl2(url) {
  const url1 = decodeURI(url);
  const a = url1.split('?')[1].split('&'); //a -> ['id=233','id=344',...]
  let b = []; //存放重复值
  let res = {};
  a.forEach((item) => {
    let c = item.split('=');
    if(res[c[0]] !== undefined){
      b.push(res[c[0]],c[1]);
      res[c[0]] = b;
    }else if(c[1] === ''){
      res[c[0]] = 666;
    }else{
      res[c[0]] = c[1];
    }
  });
  console.log(res);
}
deurl2('http://www.baidu.com/s?id=233&id=344&key=%E6%9D%A8%E6%B4%8B&word=')