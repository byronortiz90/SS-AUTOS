let slider = document.querySelector(".testimoniales");
let sliderIndividual = document.querySelectorAll(".testimonial");
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 3000;

window.addEventListener("resize", function(){
    let width = sliderIndividual[0].clientWidth;
})

setInterval(function(){
    slides();
},intervalo);

function slides(){
    slider.style.transform = "translate("+(-width*contador)+"px)";
    slider.style.transition = "transform 1s";
    contador++;

    if(contador == sliderIndividual.length)
        setTimeout(function(){
            slider.style.transform = "translate (0px)";
            slider.style.transition = "transform 1s";
            contador=1;
        },1500)
}