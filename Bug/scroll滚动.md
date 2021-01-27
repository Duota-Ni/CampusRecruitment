this.$el.onscroll 监听el内容滚动的时候，里面部分内容height不能为100vh/100%,因为height为100vh/100%时他会监听整个document的滚动，this.$el.onscroll 监听不到document的，于是不能监听里面的动作
bug- myScroll组件