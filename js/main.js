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
        document.getElementById("main-shadow-image").style.transform = `perspective(${x+600}px) rotateX(${y*21}deg) rotateY(${(x*18)>0?-(x*18):Math.abs(x*18)}deg) `
    })
}