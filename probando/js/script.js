/* //Iniciar las alturas máxima y mínima del bloque contenedor.
//mínima es con el texto oculto, máxima con el texto visible.
var caja = document.getElementById("caja");
var moreText = document.getElementById("more");
caja.max = caja.offsetHeight + 'px';
moreText.style.display = 'none';
caja.min = caja.offsetHeight + 'px';
caja.style.height = caja.min;
caja.style.transition = "height 1500ms";
//Esta función cambia la altura y oculta los botones si está abriendo
//y muestra el texto completo
function toggle() {
  var dots = document.getElementById("dots");
  if (caja.style.height != caja.min && caja.style.height != '') {
    caja.style.height = caja.min;
  } else {
    dots.style.display = "none";
    caja.style.height = caja.max;
    moreText.style.display = "inline";
  }
}

//Función para el evento fin de transición 
function cambiarAlto() {
  var dots = document.getElementById("dots");
  var btnText = document.getElementById("myBtn");
  //Si está cerrando el botón pone Read less  
  //Tb se puede comprobar con la altura de caja.
  if (btnText.innerHTML == "Read less") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
//asigna el evento, por esto debe estar al final
document.getElementById("caja").addEventListener("transitionend", cambiarAlto, false); */

function readMore(nr) {
    let p = document.querySelector(`.card[data-nr="${nr}"] p`);
    let btnText = document.querySelector(`.card[data-nr="${nr}"] .myBtn`);
  
  
    if (!p.classList.contains('collapse')) {
      p.classList.add('collapse');
      btnText.innerHTML = "Read more";
    } else {
      p.classList.remove('collapse');
      btnText.innerHTML = "Read more";
    }
  }