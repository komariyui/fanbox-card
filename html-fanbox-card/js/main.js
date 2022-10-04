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

    const coreX = document.getElementById("CardMainBox").offsetWidth/2;
    const coreY = document.getElementById("CardMainBox").offsetHeight/2;
    document.getElementById("CardMainBox").addEventListener("mousemove",(event)=>{
        // console.log(event.clientX-coreX)
        // console.log(event.clientY-coreY)
        // console.log(((event.clientX-coreX)/coreX)*18);
        // console.log(((event.clientY-coreY)/coreY)*21);
        let x = (event.clientX-coreX)/coreX;
        let y = (event.clientY-coreY)/coreY;
        restDraw(x,y);
        restDraw2(x,y);
        document.getElementById("main-shadow-image").style.transform = `perspective(${1600}px) rotateX(${y*21}deg) rotateY(${(x*18)>0?-(x*18):Math.abs(x*18)}deg) `

    })

    const mainImg = document.getElementById("mainShadowImage").getContext('2d');
    let newMainImg =  new Image();
    newMainImg.src = "../images/card-image.jpeg";
    mainImg.globalCompositeOperation = "destination-over";
    newMainImg.onload = async function (){
        await mainImg.drawImage(newMainImg,0,0,1280,800);
    }


/*----------图Y*/
    let img = new Image()
    let img2 = new Image()
    const cnv = document.getElementById('mainShadowBackground');
    const cnw = cnv.getContext('2d')
    // imgDraw();


    function imgDraw(){
       img.src = "../images/color-y.png" //颜色
       img.onload = async function () {
           // console.log("颜色加载完成")
           await cnw.drawImage(img,-800, -800,6280,3800);
           cnw.globalCompositeOperation = "destination-in";  //保留source-in
           img2.src = "../images/mosaic-1.png" //格子
           img2.onload = async function (){
               // console.log("格子加载完成")
               await cnw.drawImage(img2,0, 0,1280,800);
           }
       }
   }



    function restDraw(x,y){
        let img = new Image()
        let img2 = new Image()
        const tempCanvas = document.createElement('canvas'); // Storage canvas
        const tempCtx = tempCanvas.getContext('2d');
        tempCanvas.width = 1280; tempCanvas.height = 800; // 设置宽高

        cnw.globalCompositeOperation = "source-over"

        img.src = "../images/color-y.png" //颜色
        img.onload = async function () {
            // console.log("颜色加载完成")

            await tempCtx.drawImage(img,-800+x*600, -800+y*600,6280,3800);
            tempCtx.globalCompositeOperation = "destination-in";
            img2.src = "../images/mosaic-1.png" //格子
            img2.onload =function (){
                // console.log("格子加载完成")
                tempCtx.drawImage(img2,0, 0,1280,800);
                cnw.clearRect(0,0,cnv.width,cnv.height);
                cnw.drawImage(tempCanvas,0,0);
            }

        }

    };

    /*----------图X*/
    let img3 = new Image()
    let img4 = new Image()
    const cnv1 = document.getElementById('mainShadowBackground-1');
    const cnw2 = cnv1.getContext('2d')
    // imgDraw2();

    function imgDraw2(){
        img3.src = "../images/color-x.png" //颜色
        img3.onload = async function () {
            // console.log("颜色加载完成")
            await cnw2.drawImage(img,-800, -800,6280,3800);
            cnw2.globalCompositeOperation = "destination-in";  //保留source-in
            img4.src = "../images/mosaic-2.png" //格子
            img4.onload = async function (){
                // console.log("格子加载完成")
                await cnw2.drawImage(img2,0, 0,1280,800);
            }
        }
    }



    function restDraw2(x,y){
        const tempCanvas = document.createElement('canvas'); //Storage canvas
        const tempCtx = tempCanvas.getContext('2d');
        tempCanvas.width = 1280; tempCanvas.height = 800; // 设置宽高

        cnw2.globalCompositeOperation = "source-over"

        img.src = "../images/color-x.png" //颜色
        img.onload = async function () {
            // console.log("颜色加载完成")
            await tempCtx.drawImage(img,-800+x*600, -800+y*600,6280,3800);
            tempCtx.globalCompositeOperation = "destination-in";
            img2.src = "../images/mosaic-2.png" //格子
            img2.onload =function (){
                // console.log("格子加载完成")
                tempCtx.drawImage(img2,0, 0,1280,800);
                cnw2.clearRect(0,0,cnv.width,cnv.height);
                cnw2.drawImage(tempCanvas,0,0);
            }

        }

    };
    restDraw(0,0);
    restDraw2(0,0);
    //无双缓存
    // function restDraw(x,y){
    //    // render();
    //     // console.log("被调用")
    //    // console.log(cnv.height);
    //    // cnw.width = cnw.width;
    //    cnw.clearRect(0,0,cnv.width,cnv.height);
    //    // cnw.fillStyle = "#FFF"
    //        // imgDraw()
    //    // console.log(img)
    //    // cnw.drawImage(img,0, 0,3280,1800);
    //    // cnw.globalCompositeOperation = "destination-in";
    //    // cnw.drawImage(img2,0, 0,1280,800);
    //    // console.log(img2)
    //    cnw.globalCompositeOperation = "source-over"
    //    img.src = "../images/color-y.png" //颜色
    //    img.onload = async function () {
    //        // console.log("颜色加载完成")
    //        await cnw.drawImage(img,-500+x*600, -500+y*600,6280,3800);
    //        cnw.globalCompositeOperation = "destination-in";
    //        // console.log()
    //        //
    //        img2.src = "../images/mosaic-1.png" //格子
    //        img2.onload =function (){
    //            // console.log("格子加载完成")
    //            cnw.drawImage(img2,0, 0,1280,800);
    //            // cnw.globalCompositeOperation = "destination-in";  //保留source-in
    //
    //        }
    //
    //
    //    }
    // };








    // img.ontouchmove = function(e){
    //     // e.preventDefault();
    // }


    //




    // cnw.globalCompositeOperation = "screen";
    // cnw.globalCompositeOperation = "destination-atop";
    //destination-atop有雏形


}