function actualizarReloj() {
    const horaActual = moment();
    const horaFormato12 = horaActual.format("hh:mm:ss A");
    document.getElementById("reloj").innerHTML = horaFormato12;
}

setInterval(actualizarReloj, 1000)
actualizarReloj()