var botonEncriptar=document.querySelector(".btn-encriptar");
var botonDesencriptar=document.querySelector(".btn-desencriptar");
var munieco=document.querySelector(".munieco");
var contenedor=document.querySelector(".contenedor-parrafo")


botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick= desencriptar;

function encriptar(){

   var frasePorEncriptar= document.querySelector(".cajaTexto").value;
   
   var fraseEncriptada =frasePorEncriptar.replace( /e/mg, "enter");
   var fraseEncriptada =fraseEncriptada.replace( /i/mg, "imes");
   var fraseEncriptada =fraseEncriptada.replace( /a/mg, "ai");
   var fraseEncriptada =fraseEncriptada.replace( /o/mg, "ober");
   var fraseEncriptada =fraseEncriptada.replace( /u/mg, "ufat");

  ocultarFormato()
  contenedor.textContent=fraseEncriptada;
}

function ocultarFormato(){
    munieco.classList.add("ocultar");
    contenedor.classList.add("nuevoFormato");
}

function desencriptar(){

    var frasePorDesencriptar= document.querySelector(".cajaTexto").value;
   

    var fraseDesencriptada =frasePorDesencriptar.replace( /enter/mg, "e");
    var fraseDesencriptada =fraseDesencriptada.replace( /imes/mg, "i");
    var fraseDesencriptada =fraseDesencriptada.replace( /ai/mg, "a");
    var fraseDesencriptada =fraseDesencriptada.replace( /ober/mg, "o");
    var fraseDesencriptada =fraseDesencriptada.replace( /ufat/mg, "u");

    console.log(fraseDesencriptada);
    ocultarFormato()
    contenedor.textContent=fraseDesencriptada;
}

const btnCopiar=document.querySelector(".btn-copiar");
btnCopiar.addEventListener("click", copiar =() =>
   {

    var textoFinal = document.querySelector(".contenedor-parrafo").textContent
    navigator.clipboard.writeText(textoFinal);})
