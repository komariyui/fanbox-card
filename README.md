跟随鼠标移动的翻转卡片
==

### 演示
[演示demo](http://democard.wuhupoo.cn/)
<hr/>


### 快速开始

<hr/>

#### 原生JS

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

#### 在vue中使用

1.```npm i vue-fanbox-card```
2.
```js
import fanboxCard from "vue-fanbox-card";
vue.use(fanboxCard)
```
3.

### License

<Hr/>
MIT
<br/>
Copyright (c) 2022-present 由白子

