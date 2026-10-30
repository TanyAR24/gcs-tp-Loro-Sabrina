# Plan pruebas
## Versión v1.0

# ID --> Caso--> Resultado esperado
- P01--> Ingresar nombre, apellido y teléfono--> Se muestran los datos
- P02--> Ingresar letras en el teléfono--> No hay restricciones actualmente

Los casos de validación se realizan al implementar el ticket #101

## Versión v1.1

# ID --> Caso--> Resultado esperado
- P01--> Ingresar nombre, apellido y teléfono--> Se muestran los datos
- P02--> Ingresar números en el teléfono--> Es válido, se muestran los datos
- P03--> Ingresar letras en el teléfono--> Hay restricciones, muestra un error
- P04--> No ingresar nada en el teléfono (lo deja vacío)--> Hay restricciones, muestra un error

* Tests
# ID --> Caso--> Resultado obtenido
- P01--> Ingresar un teléfono con números--> la función devuelve true
- P02--> Ingresar un teléfono con una letra--> la función devuelve false
- P03--> Ingresar un teléfono vacío--> la función devuelve false