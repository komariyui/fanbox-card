window.onload = function (){
    document.getElementById("mainButton").onclick = ()=>{
        let modalityBox =  document.getElementById("modalityBox");
        modalityBox.style.display = "initial";
        modalityBox.classList.add("fadeIn");
    }


    let mainImage = document.getElementById("mainImage");
    let mainImage2d = mainImage.getContext("2d");

    let img = new Image();
    img.onload = function (){
      mainImage2d.drawImage(img,0,0,820,500);
    }
    img.src = "./images/card-image.jpeg";
}