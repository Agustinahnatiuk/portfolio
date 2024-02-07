//Funcion de cambio de imagen
let imagen = document.getElementById('imagen');

function mouseOver (){
    imagen.src = "Images/imagen10.jpg"
};

imagen.addEventListener('mouseover', mouseOver)

//Funcion de cambio de imagen nuevamente
function mouseOut (){
    imagen.src = "Images/image1.jpg"
};

imagen.addEventListener('mouseout', mouseOut)

//Agregar botón saber más en un div existente y sumar mas informacion
//anda solo el primer boton 

let additionalText = document.getElementById('additional');
let button = document.getElementById('mas');

function toggleTexto() {
    if (additionalText.classList.contains('showed')) {
        // Si el texto está mostrado, lo oculto
        additionalText.classList.remove('showed');
        button.classList.remove('notshowed');
    } else {
        // Si el texto está oculto, lo muestro
        additionalText.classList.add('showed');
        button.classList.add('notshowed');
    }
}

button.addEventListener('click', toggleTexto);

function cerrarTexto() {
    additionalText.classList.remove('showed');
    button.classList.remove('notshowed');
  }

  closeButton.addEventListener('click', cerrarTexto);

//Mensaje de éxito en formulario

function mostrarMensaje() {
    
    let mensajeElemento = document.getElementById("mensaje");

    mensajeElemento.textContent = "¡Su mensaje fue enviado con éxito!";
}

//slider
let slider = document.querySelector('.slider');
let sliderDiv = document.querySelectorAll('.slider .card1');

let index = 0;

function divSlider(direction) {
    index += direction;

    if (index < 0) {
        index = sliderDiv.length - 1;
    } else if (index >= sliderDiv.length) {
        index = 0;
    }

    let movimiento = -index * 240;
    slider.style.transform = `translateX(${movimiento}px)`;
};

divSlider(0);


