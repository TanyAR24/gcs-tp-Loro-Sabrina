import { validarTelefono } from "./validar.js";
const formulario=document.getElementById("clienteFormulario");
const mensaje=document.getElementById("mensaje");
formulario.addEventListener("submit", function(evento){
    evento.preventDefault();
    const nombre=document.getElementById("nombre").value;
    const apellido=document.getElementById("apellido").value;
    const telefono=document.getElementById("telefono").value;
    if (!validarTelefono(telefono)){
        mensaje.textContent=" Error: El teléfono debe contener únicamente números";
        return;
    };
    mensaje.textContent="Nuevo cliente registrado: " +nombre+ " - "+ apellido + " - " + telefono;
});
