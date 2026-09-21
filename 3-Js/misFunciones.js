/**
 * Permite convertir unidades entre metros, pulgadas, pies y yardas
 * @method convertirUnidades
 * @param {string} id - Id del elemento input en html (metro, pulgada, pie o yarda)
 * @param {number} valor - Valor numérico ingresado por el usuario
 * @return {void} No retorna ningún valor
 */

function convertirUnidades(id, valor) {
    if (valor.includes(",")) {
        valor = valor.replace(",", ".");
    }
    if (isNaN(valor)) {
        alert("Se ingreso un valor invalido en " + id);
        document.getElementById("metro").value = "";
        document.getElementById("pulgada").value = "";
        document.getElementById("pie").value = "";
        document.getElementById("yarda").value = "";
    } else if (id === "metro") {
        document.getElementById("pulgada").value = valor * 39.3701;
        document.getElementById("pie").value = valor * 3.28084;
        document.getElementById("yarda").value = valor * 1.09361;
    } else if (id === "pulgada") {
        document.getElementById("metro").value = valor * 0.0254;
        document.getElementById("pie").value = valor * 0.08333;
        document.getElementById("yarda").value = valor * 0.027778;
    } else if (id === "pie") {
        document.getElementById("metro").value = valor * 0.3048;
        document.getElementById("pulgada").value = valor * 12;
        document.getElementById("yarda").value = valor * 0.333333;
    } else if (id === "yarda") {
        document.getElementById("metro").value = valor * 0.9144;
        document.getElementById("pulgada").value = valor * 36;
        document.getElementById("pie").value = valor * 3;
    }
}

/**
 * Permite convertir grados a radianes y viceversa
 * @method convertirGR
 * @param {string} id - Id del elemento input en html (grados o radianes)
 * @param {number} valor - Valor numérico ingresado por el usuario
 * @return {void} No retorna ningún valor
 */
function convertirGR(id, valor) {
    let grad, rad;

    if (valor.includes(",")) {
        valor = valor.replace(",", ".");
    }

    if (isNaN(valor)) {
        alert("Se ingresó un valor inválido");
        document.getElementById("grados").value = "";
        document.getElementById("radianes").value = "";
    } else if (id === "grados") {
        rad = valor * (Math.PI / 180);
        document.getElementById("radianes").value = rad;
    } else if (id === "radianes") {
        grad = valor * (180 / Math.PI);
        document.getElementById("grados").value = grad;
    }
}
