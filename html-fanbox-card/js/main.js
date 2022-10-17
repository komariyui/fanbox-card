window.onload = function (){
    let switchButton = false;
    document.getElementById("CardMainBox").onclick = ()=>{
        document.getElementById("CardMainBox").style.visibility = switchButton === false ?
            "initial":"hidden";
        switchButton = !switchButton
    }
    document.getElementById("openCard").onclick = ()=>{
        document.getElementById("CardMainBox").style.visibility = switchButton === false ?
            "initial":"hidden";
        switchButton = !switchButton
    }


    /*----------图Y----------*/
    const restDrawMainY= (function (){
        let img = new Image()
        let img2 = new Image()

        const cnv = document.getElementById('mainShadowBackground');
        const cnw = cnv.getContext('2d')

        return class project{
            constructor(x,y){
                img.src = "./images/color-y.png" //颜色
                img.onload = async () =>{
                    img2.src = "./images/mosaic-1.png" //格子
                    img2.onload =()=>{
                        this.restDraw(x,y);  //完成初始化加载并调用
                    }
                }
            }
            restDraw(x,y){
                const tempCanvas = document.createElement('canvas'); // Storage canvas
                const tempCtx = tempCanvas.getContext('2d');
                tempCanvas.width = 1280; tempCanvas.height = 800; // 设置宽高

                cnw.globalCompositeOperation = "source-over"

                tempCtx.drawImage(img,-800+x*600, -800+y*600,6280,3800);
                tempCtx.globalCompositeOperation = "destination-in";

                tempCtx.drawImage(img2,0, 0,1280,800);
                cnw.clearRect(0,0,cnv.width,cnv.height);
                cnw.drawImage(tempCanvas,0,0);
            };
        }
    })();
    /*----------图X----------------*/
    const restDrawMainX=(function (){
        let img = new Image()
        let img2 = new Image()
        const cnv = document.getElementById('mainShadowBackground-1');
        const cnw = cnv.getContext('2d')
        return class project{
            constructor(x,y){
                img.src = "./images/color-x.png" //颜色
                img.onload = async  () =>{
                    img2.src = "./images/mosaic-2.png" //格子
                    img2.onload =()=>{
                        this.restDraw(x,y)
                    }
                }
            }
            restDraw(x,y){
                const tempCanvas = document.createElement('canvas'); //Storage canvas
                const tempCtx = tempCanvas.getContext('2d');

                tempCanvas.width = 1280; tempCanvas.height = 800; // 设置宽高
                cnw.globalCompositeOperation = "source-over"

                tempCtx.drawImage(img,-800+x*600, -800+y*600,6280,3800);
                tempCtx.globalCompositeOperation = "destination-in";

                tempCtx.drawImage(img2,0, 0,1280,800);
                cnw.clearRect(0,0,cnv.width,cnv.height);
                cnw.drawImage(tempCanvas,0,0);

            };
        }
    })();
    //-----------------------

    const coreX = document.getElementById("CardMainBox").offsetWidth/2;
    const coreY = document.getElementById("CardMainBox").offsetHeight/2;

    const restDrawOne = new restDrawMainY(0,0) //初始化 Y
    const restDrawTwo = new restDrawMainX(0,0) //初始化 X

    document.getElementById("CardMainBox").addEventListener("mousemove",(event)=>{
        // console.log(event.clientX-coreX)
        // console.log(event.clientY-coreY)
        // console.log(((event.clientX-coreX)/coreX)*18);
        // console.log(((event.clientY-coreY)/coreY)*21);

        let x = (event.clientX-coreX)/coreX;
        let y = (event.clientY-coreY)/coreY;
        restDrawOne.restDraw(x,y)
        restDrawTwo.restDraw(x,y)
        document.getElementById("main-shadow-image").style.transform = `perspective(${1600}px) rotateX(${y*21}deg) rotateY(${(x*18)>0?-(x*18):Math.abs(x*18)}deg) `

    })

    const mainImg = document.getElementById("mainShadowImage").getContext('2d');
    let newMainImg =  new Image();
    newMainImg.src = "./images/card-image.jpeg";
    mainImg.globalCompositeOperation = "destination-over";
    newMainImg.onload = async function (){
        await mainImg.drawImage(newMainImg,0,0,1280,800);
    }


}