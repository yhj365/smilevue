# 移动端屏幕适配

### 使用rem适配不同屏幕
### 获取屏幕宽度
```
  let htmlwidth = document.documentElement.clientWidth || document.body.clientWidth
  let htmlDom = document.getElementsByTagName('html')[0]
  htmlDom.style.fontSize = htmlwidth/20 + 'px'

```

### vue VSCode Snippets
+ 代码块快捷方式的插件
