# css元素隐藏
> [参考： 隐藏元素的八种方法](https://blog.csdn.net/qq_28506819/article/details/72846781)

1. opacity: 0; 透明度为0
2. visibility: hidden; 隐藏元素
3. position: absolute; left: -5000px; 设置一个很大的负值定位，使得元素定位在可见区域之外
4. display: none;
5. transform: scale(0); 将一个元素设置为缩放无限小，元素将不可见，元素原来所在的位置将被保留
6. <div hidden="hidden"> HTML5属性,效果和display:none;相同，但这个属性用于记录一个元素的状态
7. height: 0; 将元素高度设置为0
8. filter: bluw(0); CSS3属性，将一个元素模糊度设置为0