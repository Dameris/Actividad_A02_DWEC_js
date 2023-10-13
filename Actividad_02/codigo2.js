// Pedir al usuario su nombre y apellidos
const nombreCompleto = prompt("Introduce tu nombre y apellidos:")

// Calcular el tamaño del nombre más los apellidos (sin contar espacios)
let tamanyoNombreCompleto = 0

for (i = 0; i < nombreCompleto.length; i ++) {
    if (nombreCompleto[i] !== " ") {
        tamanyoNombreCompleto ++
    }
}

// Dividir el nombre y los apellidos en 3 líneas
let nombre = ""
let apellido1 = ""
let apellido2 = ""
let separador = 0

for (i = 0; i < nombreCompleto.length; i ++) {
    if (nombreCompleto[i] !== " ") {
        if (separador === 0) {
            nombre += nombreCompleto[i]
        } 
        else if (separador === 1) {
            apellido1 += nombreCompleto[i]
        } 
        else {
            apellido2 += nombreCompleto[i]
        }
    } 
    else {
        separador ++
    }
}

// Propuestas de nombre de usuario
const propuestaUsuario1 = nombre[0].toLowerCase() + apellido1 + apellido2[0].toLowerCase()
const propuestaUsuario2 = nombre[0].toUpperCase() + nombre.slice(1, 3) + apellido1[0].toLowerCase() + apellido1.slice(1, 3) + apellido2[0].toLowerCase() + apellido2.slice(1, 3)

// Mostrar los resultados en la página
alert("Tamaño del nombre más los apellidos (sin contar espacios): " + tamanyoNombreCompleto)
alert("Nombre en minúsculas: " + nombreCompleto.toLowerCase())
alert("Nombre en mayúsculas: " + nombreCompleto.toUpperCase())
alert(
    "Nombre: " + nombre +
    "\nApellido 1: " + apellido1 +
    "\nApellido 2: " + apellido2
    )
alert("Propuesta de nombre de usuario 1: " + propuestaUsuario1)
alert("Propuesta de nombre de usuario 2: " + propuestaUsuario2)