// document.addEventListener("DOMContentLoaded", () =>{
//     const prevBtn = document.getElementById("prevBtn");
//     const nextBtn = document.getElementById("nextBtn");
//     const carousel = document.querySelector(".carousel"); 
//     const imagenes = document.querySelectorAll(".carousel img"); 

//     let currentIndex =0; 

//     prevBtn.addEventListener("click", () => {
//         currentIndex = (currentIndex -1 + imagenes.length) % imagenes.length; 
//         actualizarCarrousel(); 
//     }); 

//     nextBtn.addEventListener("click", () => {
//         currentIndex = (currentIndex + 1) % imagenes.length; 
//         actualizarCarrousel(); 
//     }); 

//     function actualizarCarrousel(){
//         imagenes.forEach((img, index) => {
//             if(index===currentIndex) {
//                 img.style.display = "block"; 
//             } else {
//                 img.style.display = "none"; 
//             }
//     }); 
// }
// actualizarCarrousel(); 
// }); 

document.addEventListener("DOMContentLoaded", () => {
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const carousel = document.querySelector(".carousel");
    const imagenes = document.querySelectorAll(".carousel img");

    let currentIndex = 0;
    const intervalo = 3000; // 3 segundos (ajusta este valor según tus preferencias)
    let intervaloID;

    // Función para avanzar al siguiente slide
    function avanzar() {
        currentIndex = (currentIndex + 1) % imagenes.length;
        actualizarCarrousel();
    }

    // Función para retroceder al slide anterior
    function retroceder() {
        currentIndex = (currentIndex - 1 + imagenes.length) % imagenes.length;
        actualizarCarrousel();
    }

    // Agregar evento de clic al botón "Anterior"
    prevBtn.addEventListener("click", () => {
        retroceder();
        reiniciarIntervalo();
    });

    // Agregar evento de clic al botón "Siguiente"
    nextBtn.addEventListener("click", () => {
        avanzar();
        reiniciarIntervalo();
    });

    // Función para actualizar el carrusel
    function actualizarCarrousel() {
        imagenes.forEach((img, index) => {
            if (index === currentIndex) {
                img.style.display = "block";
            } else {
                img.style.display = "none";
            }
        });
    }

    // Iniciar el carrusel automáticamente y reiniciar el intervalo
    function iniciarCarruselAutomatico() {
        intervaloID = setInterval(avanzar, intervalo);
    }

    // Reiniciar el intervalo para el avance automático
    function reiniciarIntervalo() {
        clearInterval(intervaloID);
        iniciarCarruselAutomatico();
    }

    // Iniciar el carrusel automáticamente
    iniciarCarruselAutomatico();
});
