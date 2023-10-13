document.addEventListener("DOMContentLoaded", function () {
    // Comprobar si existen cookies
    function checkCookies() {
        const nombre = getCookie("nombre")
        const direccion = getCookie("direccion")
        const edad = getCookie("edad")
        const profesion = getCookie("profesion")

        if (nombre && direccion && edad && profesion) {
            mostrarDatos("Datos de Cookies:", nombre, direccion, edad, profesion)
            document.getElementById("borrarDatos").style.display = "block"
        } else {
            recopilarDatosUsandoCookies()
        }
    }

    // Recopilar datos utilizando cookies
    function recopilarDatosUsandoCookies() {
        const nombre = prompt("Por favor, introduce tu nombre:")
        const direccion = prompt("Introduce tu dirección:")
        const edad = prompt("Introduce tu edad:")
        const profesion = prompt("Introduce tu profesión:")

        setCookie("nombre", nombre)
        setCookie("direccion", direccion)
        setCookie("edad", edad)
        setCookie("profesion", profesion)

        mostrarDatos("Datos de Cookies:", nombre, direccion, edad, profesion)
        document.getElementById("borrarDatos").style.display = "block"
    }

    // Borrar cookies
    document.getElementById("borrarDatos").addEventListener("click", () => {
        borrarCookie("nombre")
        borrarCookie("direccion")
        borrarCookie("edad")
        borrarCookie("profesion")
        document.getElementById("output").innerHTML = "Datos de Cookies borrados."
        document.getElementById("borrarDatos").style.display = "none"
    });

    // Funciones para trabajar con cookies
    function getCookie(nombre) {
        const cookies = document.cookie.split('; ')
        for (const cookie of cookies) {
            const [cookieNombre, cookieValor] = cookie.split('=')
            if (cookieNombre === nombre) {
                return decodeURIComponent(cookieValor)
            }
        }
        return null
    }

    function setCookie(nombre, valor) {
        document.cookie = `${nombre}=${encodeURIComponent(valor)}`
    }

    function borrarCookie(nombre) {
        document.cookie = `${nombre}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
    }

    // Función para mostrar datos en la página
    function mostrarDatos(titulo, nombre, direccion, edad, profesion) {
        const output = document.getElementById("output")
        output.innerHTML = `${titulo}<br>Nombre: ${nombre}<br>Dirección: ${direccion}<br>Edad: ${edad}<br>Profesión: ${profesion}`
    }

    // Comprobar si existe localStorage
    function checkLocalStorage() {
        if (localStorage.getItem("nombre") && localStorage.getItem("direccion") && localStorage.getItem("edad") && localStorage.getItem("profesion")) {
            mostrarDatos("Datos de Local Storage:", localStorage.getItem("nombre"), localStorage.getItem("direccion"), localStorage.getItem("edad"), localStorage.getItem("profesion"))
        } else {
            recopilarDatosUsandoLocalStorage()
        }
    }

    // Recopilar datos utilizando localStorage
    function recopilarDatosUsandoLocalStorage() {
        const nombre = prompt("Por favor, introduce tu nombre:")
        const direccion = prompt("Introduce tu dirección:")
        const edad = prompt("Introduce tu edad:")
        const profesion = prompt("Introduce tu profesión:")

        localStorage.setItem("nombre", nombre)
        localStorage.setItem("direccion", direccion)
        localStorage.setItem("edad", edad)
        localStorage.setItem("profesion", profesion)

        mostrarDatos("Datos de Local Storage:", nombre, direccion, edad, profesion)
    }

    // Iniciar comprobación de cookies y localStorage
    checkCookies()
    checkLocalStorage()
})