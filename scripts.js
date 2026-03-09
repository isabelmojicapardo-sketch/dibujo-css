//console.log("hola");

const varTitulo = document.getElementById("titulo");

varTitulo.addEventListener("click",() => {
  if(estadoInicial=== true) {
  varTitulo.innerText = "¿¡Buenos días!";
  varTitulo.style.color = "#ff0080";
  varTitulo.style.backgroudColor = "white";
} else {
 varTitulo.innerText = "Hola";
 varTitulo.style.color = "#572364";
 varTitulo.style.backgroudColor = "transparent";
 }
 estadoInicial = !estadoInicial;
})
    
