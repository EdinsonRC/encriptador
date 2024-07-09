/*function encriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("muñeco");

  let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  if (document.getElementById("texto").value.length != 0) {
    document.getElementById("texto").valueo = textoCifrado;
    document.getElementById("titulo-mensaje").textContent =
      "Texto encriptado con éxito";
    document.getElementById("parrafo").textContent = "";
    document.getElementById("muñeco").src = "./assets/Muñeco.png";
  } else {
    document.getElementById("muñeco").src = "/assets/Muñeco.png";
    alert("Debes ingresar algún texto");
  }
}*/

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

//captura desde un input o textarea mediante el ID de html con el document.getElementById('nombreDelId')
function encriptarBtn() {
  let ingresoTexto = document.getElementById("textUsuario").value;
  let textoCifrado = ingresoTexto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
  if (document.getElementById("textUsuario").value.length != 0) {
  }

  asignarTextoElemento("h2", "Resultado");
  asignarTextoElemento("#parrafo", textoCifrado);
  console.log(typeof ingresoTexto);
  return;
}
