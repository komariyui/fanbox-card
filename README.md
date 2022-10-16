
跟随鼠标移动的翻转卡片
==
![输入图片说明](%E5%8D%A1%E7%89%87banner.jpg)
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

```cookie
#vue3项目
npm i vue-fanbox-card
```

2.
```js
//全局引入
import { createApp } from 'vue'
import App from './App.vue'

import fanboxCard from "vue-fanbox-card"; //引入核心
import "vue-fanbox-card/lib/fanboxCard.css" //引入fanbox的css样式

const app = createApp(App);
app.use(fanboxCard); //全局使用fanboxCard
app.mount('#app');

```

4. ##### (.VUE )
```vue

<template>
<button @click="miao = true">打开模态框</button>
<fanboxCard :show="miao" :image="require('../card-image.jpeg')" @click="miao = false"></fanboxCard>
</template>

<script>
export default {
  data(){
    return{
      miao:false
    }
  },
}
</script>
```

3. ##### (.JSX/.TSX)

```tsx

export default defineComponent({
setup() {
const miaomiao =ref(false);
return () => (
    <div>
         <button onClick={()=>openMiao()}>打开模态框</button>
        <fanboxCard show={miaomiao.value} image={require('../card-image.jpeg')} onClick={()=>{miaomiao.value=false}}></fanboxCard>
    </div>
            )
        },
    });

```


#### 参数简介：

 | 参数名 | 数据类型           | 是否可选|描述
 |----------------|------|----|------|
 | show   | Boolean        |是|是否显示图片模态框
 | image | String/(require) |否|卡片需要使用到的图片


<Hr/>

### License


MIT
<br/>
Copyright (c) 2022-present 由白子

