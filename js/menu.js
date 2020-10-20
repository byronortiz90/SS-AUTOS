const enlaces = document.getElementsByClassName("navegacion")[0];
const hamburguesa = document.getElementsByClassName("menu")[0];
const menuHamburguesa = document.getElementById("menu2");
let abierto = false;

const toggleMenu = () =>{
    enlaces.classList.toggle("navegacion2");
    enlaces.style.transition = "transform 0.5s ease-in-out";
}

hamburguesa.addEventListener("click", function(){
    toggleMenu();
    if(document.querySelector(".enlaces.enlaces2")){
        abierto=true;
    }else{
        abierto=false;
    }
})

window.addEventListener("click", function(e){
    this.console.log(e.target)
    if(abierto == true){
        if(e.target !== menuHamburguesa){
            toggleMenu();
            abierto=false;
        }
    } 

})
