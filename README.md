跟随鼠标移动的翻转卡片
==

### 演示
[演示demo](http://democard.wuhupoo.cn/)
<hr/>


## 快速开始


### 原生JS

<hr/>


```html
 <div id="useBox"></div>
 <script src="./js/classMain.js"></script>
 <script>
    window.onload = function (){
            const fanBoxCardFun = new fanBoxCard({
                entry:"useBox",
                image:"./images/card-image.jpeg"
            })
        }
 </script>
```

### 在vue中使用

<hr/>


1.   <br/>
```npm i vue-fanbox-card```

2.
```js
import fanboxCard from "vue-fanbox-card";
vue.use(fanboxCard)
```

3.

```vue
<fanBoxCard :show="true" :image="require('./xxx.jpg')"></fanBoxCard>
```

show：是否显示卡片模态框   (Boolean,默认false)[可选]<br/>
image: 卡片使用的图片 (image)[必须]




### License

<Hr/>
MIT
<br/>
Copyright (c) 2022-present 由白子

