// obtener el modelo
var modal = document.getElementById("myModal");

// obtener el boton que tienen el modelo
var btn = document.getElementById("myBtn");

// obtener el span que cierra el modelo
var span = document.getElementsByClassName("close")[0];

// cuando el usuario hace click , abre el modelo 
btn.onclick = function() {
  modal.style.display = "block";
}

// cuando el usuario hace click en (x), cierra el modelo
span.onclick = function() {
  modal.style.display = "none";
}

// si el usuario hace click fuera del modelo activo, cierra este
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}