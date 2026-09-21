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

/**
 * Abre el dialog modal en productos.html
 * @method abrirDialog
 * @return {void} No retorna ningún valor
 */
let abrirDialog = () => {
    const dialog = document.getElementById("modalProducto");
    dialog.showModal();
};

/**
 * Cierra el dialog modal en productos.html
 * @method cerrarDialog
 * @return {void} No retorna ningún valor
 */
let cerrarDialog = () => {
    const dialog = document.getElementById("modalProducto");
    dialog.close();
};

/**
 * Realiza la suma de dos números ingresados en los inputs
 * @method calcularSuma
 * @return {void} No retorna ningún valor
 */
let calcularSuma = () => {
    let num1 = document.getElementById("nums1").value;
    let num2 = document.getElementById("nums2").value;

    if (num1.includes(",")) num1 = num1.replace(",", ".");
    if (num2.includes(",")) num2 = num2.replace(",", ".");

    if (isNaN(num1) || isNaN(num2)) {
        alert("Se ingresó un valor inválido");
        document.getElementById("nums1").value = "";
        document.getElementById("nums2").value = "";
        document.getElementById("totalS").value = "";
    } else if (num1 !== "" && num2 !== "") {
        document.getElementById("totalS").value = Number(num1) + Number(num2);
    }
};

/**
 * Realiza la resta de dos números ingresados en los inputs
 * @method calcularResta
 * @return {void} No retorna ningún valor
 */
let calcularResta = () => {
    let num1 = document.getElementById("numr1").value;
    let num2 = document.getElementById("numr2").value;

    if (num1.includes(",")) num1 = num1.replace(",", ".");
    if (num2.includes(",")) num2 = num2.replace(",", ".");

    if (isNaN(num1) || isNaN(num2)) {
        alert("Se ingresó un valor inválido");
        document.getElementById("numr1").value = "";
        document.getElementById("numr2").value = "";
        document.getElementById("totalR").value = "";
    } else if (num1 !== "" && num2 !== "") {
        document.getElementById("totalR").value = Number(num1) - Number(num2);
    }
};

/**
 * Realiza la multiplicación de dos números ingresados en los inputs
 * @method calcularMultiplicacion
 * @return {void} No retorna ningún valor
 */
let calcularMultiplicacion = () => {
    let num1 = document.getElementById("numm1").value;
    let num2 = document.getElementById("numm2").value;

    if (num1.includes(",")) num1 = num1.replace(",", ".");
    if (num2.includes(",")) num2 = num2.replace(",", ".");

    if (isNaN(num1) || isNaN(num2)) {
        alert("Se ingresó un valor inválido");
        document.getElementById("numm1").value = "";
        document.getElementById("numm2").value = "";
        document.getElementById("totalM").value = "";
    } else if (num1 !== "" && num2 !== "") {
        document.getElementById("totalM").value = Number(num1) * Number(num2);
    }
};

/**
 * Realiza la división de dos números ingresados en los inputs
 * @method calcularDivision
 * @return {void} No retorna ningún valor
 */
let calcularDivision = () => {
    let num1 = document.getElementById("numd1").value;
    let num2 = document.getElementById("numd2").value;

    if (num1.includes(",")) num1 = num1.replace(",", ".");
    if (num2.includes(",")) num2 = num2.replace(",", ".");

    if (isNaN(num1) || isNaN(num2)) {
        alert("Se ingresó un valor inválido");
        document.getElementById("numd1").value = "";
        document.getElementById("numd2").value = "";
        document.getElementById("totalD").value = "";
    } else if (num1 !== "" && num2 !== "") {
        document.getElementById("totalD").value = Number(num1) / Number(num2);
    }
};
