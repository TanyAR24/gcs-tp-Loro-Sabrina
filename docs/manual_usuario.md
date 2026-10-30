# Manual de usuario
## Gestor de cliente
1. Se debe abrir el archivo index.html en un navegador (Cualquiera)
2. Ingresar el nombre, apellido y teléfono del cliente
3. Presionar el botón "registrar cliente"

## Comportamiento de la versión inicial v1.0
- El formulario muestra los datos ingresados separados por un guión (-)
- En esta versión, la validación del teléfono no está implementada
    - Al ingresar un número de teléfono--> Permite que sean números o tenga alguna letra

## Comportamiento de la versión actual v1.1
- El formulario muestra los datos ingresados separados por un guión (-)
- La validación del teléfono está implementada
    - Al ingresar un número de teléfono:
        * Permite que solo sean números
        * No permite que esté vacía la casilla, contenga símbolos o tenga alguna letra. En caso de ingresar alguna se mostrará un mensaje de error