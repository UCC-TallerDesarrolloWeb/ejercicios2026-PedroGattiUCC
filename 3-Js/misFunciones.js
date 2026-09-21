/**
 * Permite convertir unidades entre metros, pulgadas, pies y yardas
 * @method convertirUnidades
 * @param {string} id - Id del elemento input en html (metro, pulgada, pie o yarda)
 * @param {number} valor - Valor numérico ingresado por el usuario
 * @return {void} No retorna ningún valor
 */

let convertirUnidades = (id, valor) => {
    let met, pul, pie, yar;

    if (valor.includes(",")) {
        valor = valor.replace(",", ".");
    }

    if (isNaN(valor)) {
        alert("El valor ingresado es incorrecto");
        met = "";
        pul = "";
        pie = "";
        yar = "";
    } else if (id === "metro") {
        met = valor;
        pul = valor * 39.3701;
        pie = valor * 3.28084;
        yar = valor * 1.09361;
    } else if (id === "pulgada") {
        pul = valor;
        met = valor * 0.0254;
        pie = valor * 0.08333;
        yar = valor * 0.027778;
    } else if (id === "pie") {
        pie = valor;
        met = valor * 0.3048;
        pul = valor * 12;
        yar = valor * 0.333333;
    } else if (id === "yarda") {
        yar = valor;
        met = valor * 0.9144;
        pul = valor * 36;
        pie = valor * 3;
    }

    document.getElementById("metro").value = met;
    document.getElementById("pulgada").value = pul;
    document.getElementById("pie").value = pie;
    document.getElementById("yarda").value = yar;
};

/**
 * Permite convertir grados a radianes y viceversa
 * @method convertirGR
 * @param {string} id - Id del elemento input en html (grados o radianes)
 * @param {number} valor - Valor numérico ingresado por el usuario
 * @return {void} No retorna ningún valor
 */
let convertirGR = (id, valor) => {
    let grad, rad;

    if (valor.includes(",")) {
        valor = valor.replace(",", ".");
    }

    if (isNaN(valor)) {
        alert("Se ingresó un valor inválido");
        grad = "";
        rad = "";
    } else if (id === "grados") {
        grad = valor;
        rad = valor * (Math.PI / 180);
    } else if (id === "radianes") {
        rad = valor;
        grad = valor * (180 / Math.PI);
    }

    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;
};

/**
 * Muestra u oculta un div según el valor recibido de un radio button
 * @method mostrarOcultar
 * @param {string} valor - Valor del radio button ("val_mostrar" o "val_ocultar")
 * @return {void} No retorna ningún valor
 */
let mostrarOcultar = (valor) => {
    if (valor === "val_mostrar") {
        document.getElementById("unDiv").style.display = "block";
    } else if (valor === "val_ocultar") {
        document.getElementById("unDiv").style.display = "none";
    }
};
