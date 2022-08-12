window.onload = function (){
    document.getElementById("mainButton").onclick = ()=>{
        let modalityBox =  document.getElementById("modalityBox");
        modalityBox.style.display = "initial";
        modalityBox.classList.add("fadeIn");
    }
}