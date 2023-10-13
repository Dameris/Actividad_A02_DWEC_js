document.addEventListener("DOMContentLoaded", function() {
    let anchoActual = 400
    let creciendo = false

    document.getElementById("abrirVentana").addEventListener("click", () => {
        const posicionX = Math.floor(Math.random() * (window.innerWidth - 400))
        const posicionY = Math.floor(Math.random() * (window.innerHeight - 400))

        const nuevaVentana = window.open("", "", `width=400, height=400, left=${posicionX}, top=${posicionY}`)

        const cambiarTamañoVentana = () => {
            if (creciendo) {
                anchoActual += 40
            } 
            else {
                anchoActual -= 40
            }

            if (anchoActual <= 160) {
                creciendo = true
            } 
            else if (anchoActual >= 400) {
                creciendo = false
            }

            nuevaVentana.resizeTo(anchoActual, anchoActual)
        }

        setInterval(cambiarTamañoVentana, 1000)
    })
})