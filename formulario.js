const form = document.getElementById("contactForm");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");
const datosEnviados = document.getElementById("datosEnviados");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    // Restablecer errores
    document.querySelectorAll(".error").forEach(function (element) {
        element.innerHTML = "";
    });

    // Validar nombre (solo letras y espacios)
    if (!/^[a-zA-Z\s]+$/.test(nombre.value)) {
        document.getElementById("nombreError").innerHTML = "El nombre debe contener solo letras y espacios.";
    }

    // Validar email (usando una expresión regular simple para verificar el formato de email)
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email.value)) {
        document.getElementById("emailError").innerHTML = "El email no es válido.";
    }

    // Validar longitud del mensaje
    if (mensaje.value.length > 250) {
        document.getElementById("mensajeError").innerHTML = "El mensaje no debe superar los 250 caracteres.";
    }

    // Si no hay errores, mostrar los datos enviados
    if (nombreError.innerHTML === "" && emailError.innerHTML === "" && mensajeError.innerHTML === "") {
        document.getElementById("nombreEnviado").textContent = nombre.value;
        document.getElementById("emailEnviado").textContent = email.value;
        document.getElementById("mensajeEnviado").textContent = mensaje.value;
        datosEnviados.style.display = "block";
        formulario.style.display = "none";
    }
});