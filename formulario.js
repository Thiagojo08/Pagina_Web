document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const nombre = document.getElementById("nombre");
    const telefono = document.getElementById("telefono");
    const email = document.getElementById("email");
    const mensaje = document.getElementById("mensaje"); // Agregar el campo de mensaje
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

        // Validar teléfono (solo números)
        if (!/^\d+$/.test(telefono.value)) {
            document.getElementById("telefonoError").innerHTML = "El número de teléfono solo debe contener números.";
        }

        // Validar email (usando una expresión regular simple para verificar el formato de email)
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
            document.getElementById("emailError").innerHTML = "El email no es válido.";
        }

        // Validar longitud del mensaje
        if (mensaje.value.length > 250) {
            document.getElementById("mensajeError").innerHTML = "El mensaje no debe superar los 250 caracteres.";
        }

        // Si no hay errores, mostrar los datos enviados
        if (
            nombreError.innerHTML === "" &&
            telefonoError.innerHTML === "" &&
            emailError.innerHTML === "" &&
            mensajeError.innerHTML === ""
        ) {
            document.getElementById("nombreEnviado").textContent = nombre.value;
            document.getElementById("telefonoEnviado").textContent = telefono.value;
            document.getElementById("emailEnviado").textContent = email.value;
            document.getElementById("mensajeEnviado").textContent = mensaje.value;
            datosEnviados.style.display = "block";
            form.style.display = "none";
        }
    });
});