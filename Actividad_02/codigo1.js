// Pedir al usuario el valor del radio
const radio = parseFloat(prompt("Introduce el valor del radio (en cm):"))
        
// Calcular el diámetro, perímetro, área del círculo, área de la esfera y volumen de la esfera
const diametro = 2 * radio
const perimetro = 2 * Math.PI * radio
const areaCirculo = Math.PI * Math.pow(radio, 2)
const areaEsfera = 4 * Math.PI * Math.pow(radio, 2)
const volumenEsfera = (4/3) * Math.PI * Math.pow(radio, 3)

// Mostrar los resultados en la página
alert("Valor del radio: " + radio.toFixed(2) + " cm")
alert("Valor del diámetro: " + diametro.toFixed(2) + " cm")
alert("Valor del perímetro de la circunferencia: " + perimetro.toFixed(2) + " cm")
alert("Valor del área del círculo: " + areaCirculo.toFixed(2) + " cm")
alert("Valor del área de la esfera: " + areaEsfera.toFixed(2) + " cm")
alert("Valor del volumen de la esfera: " + volumenEsfera.toFixed(2) + " cm")