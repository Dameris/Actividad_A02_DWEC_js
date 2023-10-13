let recetasArray = []

function recetas() {
    let ol = document.createElement("ol")
    
    const receta1Texto =
        "Crema de calabaza<br>" +
        "Ingredientes:<br>" +
        "1 calabaza<br>" +
        "2 cebollas<br>" +
        "1 cucharada de mantequilla<br>" +
        "Almendras laminadas para decorar<br><br>" +
        "Elaboración:<br>" +
        "Cortar la calabaza en trozos y salpimentar<br>" +
        "Hornear la calabaza a 180º C hasta que esté blanda<br>" +
        "Caramelizar las cebollas a fuego lento con la mantequilla<br>" +
        "Licuar la calabaza con la cebolla. Añadir un poco de agua si es necesario, para que quede la consistencia de crema<br>" +
        "Decorar con las almendras laminadas<br><br>"

    const receta2Texto =
        "Salmón al horno<br>" +
        "Ingredientes:<br>" +
        "500 g. de salmón<br>" +
        "1 limón<br>" +
        "1 cucharadita de eneldo<br>" +
        "1 cucharadita de pimienta<br><br>" +
        "Elaboración:<br>" +
        "Engrasar una fuente de horno y colocar el salmón con la piel hacia abajo<br>" +
        "Salpimentar y añadir el eneldo y la ralladura del limón<br>" +
        "Hornear a 180º C durante 15 minutos<br><br>"

    const receta3Texto =
        "Tostada de queso brie<br>" +
        "Ingredientes:<br>" +
        "1 cebolla grande<br>" +
        "1 cucharada de mantequilla<br>" +
        "Pan cortado en rebanadas<br>" +
        "Queso brie<br>" +
        "Rodajas de tomate (opcional)<br><br>" +
        "Elaboración:<br>" +
        "Partir la cebolla en tiras finas<br>" +
        "Poner la mantequilla en una sartén y cuando esté derretida añadir la cebolla<br>" +
        "Cocinar a fuego muy lento para que la cebolla no se deshidrate<br>" +
        "Tostar el pan, añadir el queso brie y encima la cebolla cocinada y unas rodajas de tomate<br><br>"

    const receta4Texto =
        "Rollitos de pollo con queso<br>" +
        "Ingredientes:<br>" +
        "2 pechugas de pollo deshuesadas<br>" +
        "2 cucharadas queso azul<br>" +
        "100 g. de nueces<br>" +
        "4 lonchas de bacon<br><br>" +
        "Elaboración:<br>" +
        "Amasar los filetes con un rodillo hasta conseguir un grosor uniforme<br>" +
        "Untar el queso azul, echar las nueces picadas y enrollar el filete<br>" +
        "Cubrir el rollo de carne con las lonchas de bacon y freir hasta que el bacon se dore<br>" +
        "Hornear a 180º C alrededor de media hora para que se cocine el pollo<br><br>"
    
    recetasArray.push(receta1Texto, receta2Texto, receta3Texto, receta4Texto)
    
    for (i = 0; i < recetasArray.length; i ++) {
        let li = document.createElement("li")
        li.innerHTML = recetasArray[i]
        li.id = "receta" + (i + 1)
        ol.appendChild(li)
    }
    
    document.body.appendChild(ol)
}

window.onload = recetas

function eliminarReceta() {
    let recetaEliminar = prompt("Introduce el número de la receta que quieres eliminar")

    if (isNaN(recetaEliminar) || recetaEliminar <= 0 || recetaEliminar > recetasArray.length) {
        alert("Introduce un número de receta correcto")
    } 
    else {
        const recetaIndex = parseInt(recetaEliminar) - 1
        recetasArray.splice(recetaIndex, 1);

        const ol = document.querySelector("ol")
        ol.innerHTML = ""

        for (i = 0; i < recetasArray.length; i ++) {
            let li = document.createElement("li")
            li.innerHTML = recetasArray[i];
            li.id = "receta" + (i + 1);
            ol.appendChild(li)
        }

        alert("Receta eliminada con éxito.")
    }
}