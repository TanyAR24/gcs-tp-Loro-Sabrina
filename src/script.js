const formulario=document.getElementById("clienteFormulario");
const mensaje=document.getElementById("mensaje");
formulario.addEventListener("submit", function(evento){
    evento.preventDefault();
    const nombre=document.getElementById("nombre").value;
    const apellido=document.getElementById("apellido").value;
    const telefono=document.getElementById("telefono").value;
    mensaje.textContent="Nuevo cliente registrado: " +nombre+ " - "+ apellido + " - " + telefono;
});