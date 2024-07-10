function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

document.getElementById("textUsuario")
  .addEventListener("input", function (event) {
    // Obtener el valor del área de texto
    let valor = event.target.value;

    // Filtrar el valor para remover mayúsculas y acentos
    valor = valor.replace(/[A-ZÁÉÍÓÚÜÑáéíóúüñ]/g, function (letra) {
      return letra
        .toLowerCase() // Convertir a minúscula
        .normalize("NFD") // Normalizar el carácter Unicode
        .replace(/[\u0300-\u036f]/g, ""); // Remover diacríticos (acentos)
    });

    // Asignar el valor filtrado al área de texto
    event.target.value = valor;
  });

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
  limpiarAreaTexto(); //llamada de la funcion
  return;
}

//funcionalidad del boton de copiar
function btnCopy() {
  let parrafo = document.getElementById("parrafo");
  navigator.clipboard.writeText(parrafo.innerText).then(function () {
    alert("Texto copiado: " + parrafo.innerText);
  });
}

// funcion para boton de decencriptar
function desencriptarBtn() {
  let textoCopiado = document.getElementById("textUsuario").value;
  let textoDesencriptado = textoCopiado
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  if (document.getElementById("textUsuario").value.length != 0) {
  }
  asignarTextoElemento("h2", "Resultado");
  asignarTextoElemento("#parrafo", textoDesencriptado);
  console.log(typeof textoCopiado);
  limpiarAreaTexto(); //llamada de la funcion
  return;
}

//funcion para limpiar el area del texto de ingresar texto aqui
function limpiarAreaTexto() {
  document.querySelector("#textUsuario").value = "";
}
