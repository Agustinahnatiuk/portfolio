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
//No funciona, me envía al principio de la página al hacer click!!!!!
document.getElementById("sendMessage").addEventListener("click", function() {
    var successContainer = document.getElementById('successContainer');
  
    // Mostrar el mensaje de éxito
    successContainer.classList.add("mostrar");
  
    // Ocultar el mensaje después de un tiempo 
    setTimeout(function() {
      successContainer.classList.remove("mostrar");
    }, 3000);
  });
  
  