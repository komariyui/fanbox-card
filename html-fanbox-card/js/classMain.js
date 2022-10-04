/*
* version: 1.0.0
* author: 由白
* reference resources: https://www.fanbox.cc/creators/supporting
* */
const fanBoxCard = (function (){
    const mainSetting =  {
        entry:undefined,
        image:undefined
    };
    let switchButton = false;

    function initializationFanBoxCard(){
        let domMainBox = document.getElementById(mainSetting.entry)
        let node = document.createElement('div');
        node.innerHTML = `
            <style>
html,body{
    padding:0px;
    margin:0px;

    height:100%;
}
.main-box{
    width:100%;
    height:100%;

    display: grid;

    justify-content: center;
    align-content: center;
    position: absolute;
    z-index:2;
}
.pink-button{
    border-radius:190px;
    color:white;
    display: initial;
    padding: 20px 40px 20px 40px;
    background-image: linear-gradient(45deg, #a18cd1 0%, #fbc2eb 100%);
    cursor: pointer;
    opacity:1;
    transition: opacity 0.3s;
}
.pink-button:hover{
    opacity: 0.8;
}

.main-shadow{
    position: absolute;
    z-index:8;
    width: 100%;
    height: 100%;
    background-color:rgba(0,0,0,0.5);
    visibility: hidden;

    display: grid;
    justify-content: center;
    align-content: center;
}
.main-shadow-image{
    display: block;
    border-radius: 10px;
    width: 40vw;
    height: auto;
    position: relative;
    filter: brightness(93%);

}
#mainShadowBackground{
    border-radius: 10px;
    position: absolute;
    top:0px;
    height: 0px;
    width: 40vw;
    height: auto;
    mix-blend-mode:screen;
}
#mainShadowBackground-1{
    border-radius: 10px;
    position: absolute;
    /*z-index: 999;*/
    top:0px;
    height: 0px;
    width: 40vw;
    height: auto;
    mix-blend-mode:screen;
}
            </style>
          <div class="main-shadow" id="CardMainBox">
       <div id="main-shadow-image" style="transform: perspective(1600px) rotateX(0deg) rotateY(0deg);">
             <canvas width="1280" height="800" class="main-shadow-image" id="mainShadowImage"></canvas>
            <canvas width="1280" height="800" id="mainShadowBackground-1"></canvas>
            <canvas width="1280" height="800" id="mainShadowBackground"></canvas>
       </div>
    </div>
        `;
        domMainBox.appendChild(node);

    }

    // top image
    async function loadingImageAndDrawImage(){
        const mainImg = document.getElementById("mainShadowImage");
        let new2dImg = mainImg.getContext('2d')
        let mainImage = new Image();
        mainImage.src = mainSetting.image;
        mainImage.onload =  await function (){
            new2dImg.drawImage(mainImage,0,0,1280,800);
        }
        return true;
    }



    //grade two image
    function GradeTwoImage(){
        let img = new Image();
        let img2 = new Image();
        const cnv = document.getElementById('mainShadowBackground');
        const cnw = cnv.getContext('2d')

        this.restDraw = function restDraw(x,y) {

            const tempCanvas = document.createElement('canvas'); // Storage canvas
            const tempCtx = tempCanvas.getContext('2d');
            tempCanvas.width = 1280;
            tempCanvas.height = 800; // 设置宽高

            cnw.globalCompositeOperation = "source-over"

            img.src = "../images/color-y.png" //颜色
            img.onload = async function () {
                await tempCtx.drawImage(img, -800 + x * 600, -800 + y * 600, 6280, 3800);
                tempCtx.globalCompositeOperation = "destination-in";
                img2.src = "../images/mosaic-1.png" //格子
                img2.onload = function () {
                    tempCtx.drawImage(img2, 0, 0, 1280, 800);
                    cnw.clearRect(0, 0, cnv.width, cnv.height);
                    cnw.drawImage(tempCanvas, 0, 0);
                }

            }
        }
        this.restDraw(0,0);
    }

    //grade three image
   function GradeThreeImage(){
       let img = new Image();
       let img2 = new Image();
       const cnv1 = document.getElementById('mainShadowBackground-1');
       const cnw2 = cnv1.getContext('2d')

       this.restDraw = function restDraw(x,y){
           const tempCanvas = document.createElement('canvas'); // Storage canvas
           const tempCtx = tempCanvas.getContext('2d');
           tempCanvas.width = 1280; tempCanvas.height = 800; // 设置宽高

           cnw2.globalCompositeOperation = "source-over"

           img.src = "../images/color-x.png" //颜色
           img.onload = async function () {
               await tempCtx.drawImage(img, -800 + x * 600, -800 + y * 600, 6280, 3800);
               tempCtx.globalCompositeOperation = "destination-in";
               img2.src = "../images/mosaic-2.png" //格子
               img2.onload =function (){
                   tempCtx.drawImage(img2,0, 0,1280,800);
                   cnw2.clearRect(0,0,cnv1.width,cnv1.height);
                   cnw2.drawImage(tempCanvas,0,0);
               }
           }
       };
       this.restDraw(0,0);
   }


    function bindDom(){
        //image 1
        const gradeTwoImage = new GradeTwoImage();
        //image 2
        const gradeThreeImage = new GradeThreeImage();

        let cardMainBoxDom = document.getElementById("CardMainBox");
        const coreX = cardMainBoxDom.offsetWidth/2;
        const coreY = cardMainBoxDom.offsetHeight/2;
        cardMainBoxDom.addEventListener("mousemove",(event)=>{
            let x = (event.clientX-coreX)/coreX;
            let y = (event.clientY-coreY)/coreY;
            document.getElementById("main-shadow-image").style.transform = `perspective(${x+1600}px) rotateX(${y*21}deg) rotateY(${(x*18)>0?-(x*18):Math.abs(x*18)}deg) `;
            gradeTwoImage.restDraw(x,y) //image 1
            gradeThreeImage.restDraw(x,y) //image 2
        })


    }

    function parameterCheck(){
        if(mainSetting.entry === undefined || mainSetting.entry === null){
            console.error("dom未配置，请配置放置用的盒子")
            return false;
        }
        if(mainSetting.image === undefined || mainSetting.image === null){
            console.error("dom未配置，请配置放置用的盒子")
            return false;
        }

        return true;
    }

    async function ready(){
        if(parameterCheck())// check parameter
            await initializationFanBoxCard(); //initialization FanBox card

        await loadingImageAndDrawImage();
        await new GradeTwoImage();
        await new GradeThreeImage();

        bindDom();

        document.getElementById("CardMainBox").onclick = ()=>{
            document.getElementById("CardMainBox").style.visibility = switchButton === false ?
                "initial":"hidden";
            switchButton = !switchButton
        }
    }
class fanBoxCard{
    constructor(setting){
         mainSetting.entry = setting.entry; //node
         mainSetting.image = setting.image;//image
        ready();

    }
    //public
    openFanBoxCard(){
        document.getElementById("CardMainBox").style.visibility = switchButton === false ?
            "initial":"hidden";
        switchButton = !switchButton
    }
}
return fanBoxCard;
})();
