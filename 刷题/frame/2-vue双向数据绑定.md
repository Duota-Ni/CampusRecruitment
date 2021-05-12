# vue双向数据绑定
> [参考：剖析Vue原理&实现双向绑定MVVM](https://segmentfault.com/a/1190000006599500) 

<div style="color: red; font-weight: bold;">
单向数据绑定 data-->view  </br>  
双向数据绑定 data-->view view-->data  </br> 
双向数据绑定即在单向数据绑定的基础上给可输入元素（input\textarea等）添加change(input)事件，动态修改model和view  </br> 
</div>

### 实现双向数据绑定的方法
>发布者-订阅者模式（backbone.js）  
>脏值检查（angular.js）  
>数据劫持（vue.js）  

1. 发布者-订阅者模式