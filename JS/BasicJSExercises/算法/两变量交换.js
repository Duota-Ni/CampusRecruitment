//1.声明第三变量的方法
let a,b,temp;
temp = a ;
a = b;
b = temp;

//不声明第三变量
[a,b] = [b,a]

a=[a,b];b=a[0];a=a[1];

a+=b;b=a-b;a-=b;

a^=b;b^=a;a^=b;

a=[b,b=a][0];

a={a:b,b:a};b=a.b;a=a.a;