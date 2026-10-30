# Manual técnico
## Tecnologías
- HTML: estructura de la página
- JavaScript: comportamiento del formulario

## Archivos principales
- src/index.html: contiene el formulario
- src/script.js: procesa el envío y muestra los datos
- Se agregó en v1.1 los siguientes archivos
    * src/validar.js: contiene la función de validación de teléfono
    * test/test_validacion.test.js: Contiene los tests de la validación de teléfono

## Estado inicial v1.0
- La función validarTelefono todavía no está implementada

## Estado actual v1.1
- Se creó la rama fix-validacion-telefono, para poder trabajar con la nueva implementación sin perjudicar la rama inicial main
- La función validarTelefono fue implementada
    * /^[0-9]+$/
        # ^ Es el inicio de la cadena
        # [0-9] Acepta dígitos del 0 al 9
        # + Exige uno o más dígitos
        # $ Es el fin de la cadena
    * .test(tel)
        # Devuelve true si el texto cumple con lo especificado acá ^[0-9]+$ y falso si no cumple
    * Esta función verifica que los datos ingresados para el telefono sean exclusivamente números
- Se configuro jest para los tests
- Se implementaron tres test para verificar que se cumplen los requisitos que el telefono no debe estar vacío, debe tener números y no debe contene ninguna letra