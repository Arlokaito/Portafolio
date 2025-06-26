// ----------- Funcionalidades -----------

// Despliega el formulario
const botonAbrir = document.getElementById('abrirFormulario');
const modal = document.getElementById('formularioPop');
const cerrar = document.querySelector('.cerrar');

botonAbrir.addEventListener('click', () => {
    modal.style.display = 'block';
});

cerrar.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Cerrar al hacer clic fuera del formulario
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});


// Funcionalidad para cerrar menú hamburgueza
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("toggle-menu");
    const enlacesMenu = document.querySelectorAll("nav a");

    enlacesMenu.forEach(enlace => {
        enlace.addEventListener("click", () => {
        toggle.checked = false; // Cierra el menú al desmarcar el checkbox
        });
    });
});

// Funcionalidad para animar la apertura del menú //
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("toggle-menu");
    const menu = document.querySelector("nav");

    toggle.addEventListener("change", () => {
        if (toggle.checked) {
            menu.style.maxHeight = menu.scrollHeight + "px";
            menu.style.opacity = "1";
        } else {
            menu.style.maxHeight = "0px";
            menu.style.opacity = "0";
        }
    });
});




// ----------- Validaciones -----------

// Función para sanitizar texto (elimina símbolos peligrosos y espacios extra)
function sanitizeInput(input) {
    return input.replace(/[`~<>$'"\\;]/g, "").trim(); // Elimina símbolos específicos y espacios
}

// Espera que el documento HTML esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", () => {

    // Obtiene el formulario por su ID
    const formulario = document.getElementById("miFormulario");
    const contenedorErrores = document.getElementById("errores");

    // Agrega un listener al formulario que se activa al intentar enviarlo
    formulario.addEventListener("submit", (e) => {
        e.preventDefault(); // Detiene el envío automático del formulario

    let errores = []; // Array para acumular mensajes de error

    // Obtiene y sanitiza los valores ingresados en los campos del formulario
    const nombre = sanitizeInput(document.getElementById("nombre").value);
    const email = sanitizeInput(document.getElementById("email").value);
    const telefono = sanitizeInput(document.getElementById("telefono").value);
    const mensaje = sanitizeInput(document.getElementById("mensaje").value);
    const terminos = document.getElementById("terminos-y-condiciones").checked;
    

    // Validaciones: verifica si hay campos vacíos
    if (!nombre) errores.push("⚠️ El campo nombre es obligatorio.");
    if (!email) errores.push("⚠️ El campo email es obligatorio.");
    if (!telefono) errores.push("⚠️ El campo telefono es obligatorio.");
    if (!mensaje) errores.push("⚠️ El campo mensaje es obligatorio.");
    if (!terminos) errores.push("⚠️ Debes aceptar los términos y condiciones.");



    // Expresión regular para validar un formato básico de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Si el correo electrónico no cumple con el formato válido, muestra una alerta
    if (!emailRegex.test(email)) {
        alert("⚠️ El correo electrónico ingresado no es válido.");
    }

    // Mostrar errores si los hay
    if (errores.length > 0) {
        contenedorErrores.innerHTML = errores.join("<br>");
        return;
    }

    // Si no hay errores
    alert("✅ Formulario enviado correctamente.");
    contenedorErrores.innerHTML = ""; // Limpia los errores si todo está bien
    formulario.reset(); // Resetea el formulario
    
});
});
