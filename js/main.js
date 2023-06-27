let slider = document.querySelector('.slider-contenedor');
let sliderInd = document.querySelectorAll('.slider-testimonial');
let contador =1;
let tamañoWidth = sliderInd[0].clientWidth;
let intervalo = 5000;

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

function PlayAudio(){
    document.getElementById("audio").play();
}

window.sr = ScrollReveal();
sr.reveal('.navbar',{
    duration: 2000,
    origin: 'bottom'
});
sr.reveal('.header-content-left', {
    duration: 2000,
    origin: 'left',
    distance: '300px'
});
sr.reveal('.header-content-right', {
    duration: 2000,
    origin: 'right',
    distance: '300px'
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
        });
    });
});
