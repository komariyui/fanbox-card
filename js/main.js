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
        console.log(((event.clientX-coreX)/coreX)*18);
        // console.log(((event.clientY-coreY)/coreY)*21);
        let x = (event.clientX-coreX)/coreX;
        let y = (event.clientY-coreY)/coreY;
        document.getElementById("main-shadow-image").style.transform = `perspective(${x+1600}px) rotateX(${y*21}deg) rotateY(${(x*18)>0?-(x*18):Math.abs(x*18)}deg) `
    })

    const mainImg = document.getElementById("mainShadowImage").getContext('2d');
    let newMainImg =  new Image();
    newMainImg.src = "../images/card-image.jpeg";
    mainImg.globalCompositeOperation = "destination-over";
    newMainImg.onload = async function (){
        await mainImg.drawImage(newMainImg,0,0,1280,800);
    }



    const cnv = document.getElementById('mainShadowBackground');
    const cnw = cnv.getContext('2d')



    let img2 = new Image()
    img2.src = "../images/mosaic-1.png" //格子
    img2.onload = async function (){
        await cnw.drawImage(img2,0, 0,1280,800);
    }

    let img = new Image()
    img.src = "../images/color-y.png" //颜色
    img.onload = async function () {
        await cnw.drawImage(img,0, 0,12800,8000);
        cnw.globalCompositeOperation = "destination-in";  //保留source-in
    }

    // img.ontouchmove = function(e){
    //     // e.preventDefault();
    // }


    //




    // cnw.globalCompositeOperation = "screen";
    // cnw.globalCompositeOperation = "destination-atop";
    //destination-atop有雏形


}