// Solicitar al usuario una fecha en formato YYYY-MM-DD
const fecha = prompt("Ingresa una fecha (YYYY-MM-DD):")
const formatoFecha = moment(fecha, "YYYY-MM-DD")

if (formatoFecha.isValid()) {
    // Calcular la semana del año
    const semana = formatoFecha.isoWeek()

    // Mostrar el resultado en la página
    alert("La fecha " + fecha + " pertenece a la semana número " + semana + " del año.")
} 
else {
    alert("Entrada no válida. Ingresa una fecha en el formato correcto (YYYY-MM-DD).")
}