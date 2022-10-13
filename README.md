
跟随鼠标移动的翻转卡片
==

<hr/>

### 介绍
  这是一个参考了fanbox粉丝卡而重新实现的卡片~！感觉特别适合来做会员卡之类的展示卡片工作。


### 特性
  1.还原了fanbox卡片的彩色光膜效果<br/>
  2.卡片透视<br/>
  3.简单易用
### 演示


[演示demo](http://democard.wuhupoo.cn/)

<hr/>


## 快速开始


### 原生JS

#### 必须有一个dom来装载卡片,在这里是useBox，并且创建实例前传入id。



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

### 在vue中使用(--vue3)



1.   <br/>
```
#vue3项目
npm i vue-fanbox-card
```

2.
```js
//全局引入
import fanboxCard from "vue-fanbox-card";
import "vue-fanbox-card/lib/fanboxCard.css"

vue.use(fanboxCard)
```

3. ##### (组合式 多数是在用tsx或者jsx的情况下)

```vue
   const miaomiao =ref(false);
   <button onClick={()=>miaomiao.value = true}>打开模态框</button>
   <fanboxCard show={miaomiao.value} image={require('../card-image.jpeg')} onClick={()=>{miaomiao.value=false}}></fanboxCard>
```
4. ##### (选项式 常用的写法)
```vue
    data(){
      return{
        miao:false
      }
    },
   <button @click="miao = true">打开模态框</button>
   <fanboxCard :show="miao" :image="require('../card-image.jpeg')" @click="miao = false"></fanboxCard>
```

#### show：是否显示卡片模态框   (Boolean,默认false)[可选]<br/>
#### image: 卡片使用的图片 (image)[必须]



<Hr/>

### License


MIT
<br/>
Copyright (c) 2022-present 由白子

