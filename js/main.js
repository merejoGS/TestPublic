let slider = document.querySelector('.slider-contenedor');
let sliderInd = document.querySelectorAll('.slider-testimonial');
let contador =1;
let tamañoWidth = sliderInd[0].clientWidth;
let intervalo = 3000;

window.addEventListener("resize", function(){
    tamañoWidth = sliderInd[0].clientWidth;
})

setInterval(function tiempo(){
    slides();
}, intervalo);

function slides(){
    slider.style.transform = 'translate('+ (- tamañoWidth * contador) + 'px)';
    slider.style.transition = 'transform 1s';
    contador++;

    if(contador==sliderInd.length +1){
        contador=1;
        slider.style.transform = 'translate(0px)';
        slider.style.transition = 'transform 1s';
    }
}