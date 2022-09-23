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
    z-index: 14;
    filter: brightness(93%);
}
#mainShadowBackground{
    border-radius: 10px;
    position: absolute;
    z-index: 999;
    top:0px;
    height: 0px;
    width: 40vw;
    height: auto;
}

            </style>
          <div class="main-shadow" id="CardMainBox">
       <div id="main-shadow-image">
           <canvas width="1280" height="800" class="main-shadow-image" id="mainShadowImage"></canvas>
           <canvas width="1280" height="800" id="mainShadowBackground"></canvas>
       </div>
    </div>
        `;

        console.log(domMainBox);
        domMainBox.appendChild(node);
    }

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

    function bindDom(){
        let cardMainBoxDom = document.getElementById("CardMainBox");
        const coreX = cardMainBoxDom.offsetWidth/2;
        const coreY = cardMainBoxDom.offsetHeight/2;
        cardMainBoxDom.addEventListener("mousemove",(event)=>{
            let x = (event.clientX-coreX)/coreX;
            let y = (event.clientY-coreY)/coreY;
            document.getElementById("main-shadow-image").style.transform = `perspective(${x+1600}px) rotateX(${y*21}deg) rotateY(${(x*18)>0?-(x*18):Math.abs(x*18)}deg) `
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
