// Función para actualizar fecha y hora
function actualizarFechaHora() {
    const ahora = new Date();

    const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    const diaSemana = diasSemana[ahora.getDay()];
    const dia = ahora.getDate();
    const mes = meses[ahora.getMonth()];
    const year = ahora.getFullYear();
    const hora = ahora.getHours().toString().padStart(2, "0");
    const minutos = ahora.getMinutes().toString().padStart(2, "0");
    const segundos = ahora.getSeconds().toString().padStart(2, "0");

    return `${diaSemana}, ${dia} de ${mes} de ${year} - ${hora}:${minutos}:${segundos}`;
}

// Actualiza el contenido visible cada segundo si está desplegado
setInterval(() => {
    const fechaDiv = document.getElementById("fechaActual");
    if (fechaDiv.style.display !== "none") {
        fechaDiv.textContent = actualizarFechaHora();
    }
}, 1000);

// Función para mostrar u ocultar fecha y hora
function toggleFechaHora() {
    const fechaDiv = document.getElementById("fechaActual");
    const btn = event.currentTarget;
    if (fechaDiv.style.display === "none") {
        fechaDiv.style.display = "block";
        fechaDiv.textContent = actualizarFechaHora();
        btn.textContent = "Ocultar Fecha y Hora";
    } else {
        fechaDiv.style.display = "none";
        btn.textContent = "Mostrar Fecha y Hora";
    }
}

//Función para validar el formulario
function validar() {
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    const errorDiv = document.getElementById("errorMensaje");

    errorDiv.classList.add("d-none");
    errorDiv.innerHTML = "";

    let errores = [];

    if (!nombre) errores.push("El nombre es obligatorio.");
    if (!email) errores.push("El email es obligatorio.");
    if (!mensaje) errores.push("El mensaje es obligatorio.");

    if (email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
        errores.push("Por favor, introduce un correo electrónico válido.");
        }
    }

    if (errores.length > 0) {
        errorDiv.innerHTML = errores.join("<br>");
        errorDiv.classList.remove("d-none");
        return false; // prevenir envío
}

    alert("Formulario enviado correctamente.");
    return false; 
}