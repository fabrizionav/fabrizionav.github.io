const tituloPrincipal = document.querySelector("#titulo-principal");
const botonCambiarTitulo = document.querySelector("#boton-cambio-titulo");


botonCambiarTitulo.addEventListener("click", function(){
    console.log("Boton Presionado!");
    tituloPrincipal.textContent = "Pagina interactiva woooh!";
});