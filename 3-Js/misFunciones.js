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
 * Abre el dialog modal con el detalle dinámico del producto seleccionado
 * @method abrirDialog
 * @param {number} index - Índice del producto seleccionado en el array productos
 * @return {void} No retorna ningún valor
 */
let abrirDialog = (index) => {
    const dialog = document.getElementById("modalProducto");
    if (!dialog) return;

    if (typeof productos !== "undefined" && productos[index]) {
        const prod = productos[index];
        const talles = Array.isArray(prod.talle) ? prod.talle.join(", ") : (prod.talle || "s/talle");

        const rutaImg = prod.imagen.startsWith("images/") ? prod.imagen : `images/${prod.imagen}`;

        dialog.innerHTML = `
            <h2>Detalle del Producto</h2>
            <img src="${rutaImg}" alt="${prod.nombre}" style="max-width: 150px; display: block; margin: 10px auto;">
            <p><strong>Nombre:</strong> ${prod.nombre}</p>
            <p><strong>Descripción:</strong> ${prod.description}</p>
            <p><strong>Categoría:</strong> ${prod.categoria}</p>
            <p><strong>Marca:</strong> ${prod.marca}</p>
            <p><strong>Talles:</strong> ${talles}</p>
            <p><strong>Precio:</strong> $${prod.precio}</p>
            <button type="button" onclick="cerrarDialog()">Cerrar</button>
        `;
    }

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

/**
 * Carga y renderiza dinámicamente las tarjetas de productos en el contenedor
 * @method cargarProductos
 * @param {Array<Object>} [lista=productos] - Lista de productos a renderizar (por defecto todo el catálogo)
 * @return {void} No retorna ningún valor
 */
let cargarProductos = (lista) => {
    if (typeof mostrarCatalogo === "function") {
        mostrarCatalogo(lista);
    }
};

/**
 * Filtra el catálogo de productos aplicando el método Array.filter según texto, rango de precio, marca y categorías seleccionadas
 * @method filtrarProductos
 * @return {void} No retorna ningún valor
 */
let filtrarProductos = () => {
    if (typeof productos === "undefined") return;

    const palabra = (document.getElementById("filtroPalabra")?.value || "").trim().toLowerCase();
    const minVal = document.getElementById("precioMin")?.value;
    const maxVal = document.getElementById("precioMax")?.value;
    const precioMin = minVal !== "" && !isNaN(Number(minVal)) ? Number(minVal) : null;
    const precioMax = maxVal !== "" && !isNaN(Number(maxVal)) ? Number(maxVal) : null;
    const marca = document.getElementById("filtroMarca")?.value || "";

    const checkboxes = document.querySelectorAll("input[name='filtroCategoria']:checked");
    const categoriasSeleccionadas = Array.from(checkboxes).map((cb) => cb.value);

    const filtrados = productos.filter((prod) => {
        // Filtrar por palabra en nombre o descripción
        if (palabra && !prod.nombre.toLowerCase().includes(palabra) && !prod.description.toLowerCase().includes(palabra)) {
            return false;
        }

        // Filtrar por precio mínimo
        if (precioMin !== null && prod.precio < precioMin) {
            return false;
        }

        // Filtrar por precio máximo
        if (precioMax !== null && prod.precio > precioMax) {
            return false;
        }

        // Filtrar por marca
        if (marca && prod.marca !== marca) {
            return false;
        }

        // Filtrar por categoría (si hay alguna seleccionada)
        if (categoriasSeleccionadas.length > 0 && !categoriasSeleccionadas.includes(prod.categoria)) {
            return false;
        }

        return true;
    });

    cargarProductos(filtrados);
};

/**
 * Restablece todos los campos de filtros y muestra el catálogo completo
 * @method limpiarFiltros
 * @return {void} No retorna ningún valor
 */
let limpiarFiltros = () => {
    const inputPalabra = document.getElementById("filtroPalabra");
    if (inputPalabra) inputPalabra.value = "";

    const inputMin = document.getElementById("precioMin");
    if (inputMin) inputMin.value = "";

    const inputMax = document.getElementById("precioMax");
    if (inputMax) inputMax.value = "";

    const selectMarca = document.getElementById("filtroMarca");
    if (selectMarca) selectMarca.value = "";

    const checkboxes = document.querySelectorAll("input[name='filtroCategoria']");
    checkboxes.forEach((cb) => { cb.checked = false; });

    cargarProductos(productos);
};

/**
 * Agrega un producto seleccionado al array del carrito y lo persiste en localStorage
 * @method agregarAlCarrito
 * @param {number} index - Posición del producto en el array productos
 * @return {void} No retorna ningún valor
 */
let agregarAlCarrito = (index) => {
    if (typeof productos === "undefined" || !productos[index]) return;

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.push(productos[index]);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert(`Se agregó "${productos[index].nombre}" al carrito.`);
};

/**
 * Elimina un producto individual del carrito según su índice en el array usando splice
 * @method eliminarDelCarrito
 * @param {number} index - Posición del elemento a eliminar en el array carrito
 * @return {void} No retorna ningún valor
 */
let eliminarDelCarrito = (index) => {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    cargarCarrito();
};

/**
 * Vacía por completo el carrito de compras utilizando localStorage.removeItem
 * @method vaciarCarrito
 * @return {void} No retorna ningún valor
 */
let vaciarCarrito = () => {
    localStorage.removeItem("carrito");
    cargarCarrito();
};

/**
 * Carga y renderiza el listado de productos del carrito guardados en localStorage
 * @method cargarCarrito
 * @return {void} No retorna ningún valor
 */
let cargarCarrito = () => {
    const contenedor = document.getElementById("contenedorCarrito");
    if (!contenedor) return;

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const btnVaciar = document.getElementById("btnVaciarCarrito");
    if (btnVaciar) {
        btnVaciar.disabled = (carrito.length === 0);
    }

    if (carrito.length === 0) {
        contenedor.innerHTML = "<p style='text-align:center;'>El carrito de compras está vacío.</p>";
        return;
    }

    let contenidoHTML = "<div class='contenedor-productos'>";
    carrito.forEach((prod, index) => {
        const rutaImg = prod.imagen.startsWith("images/") ? prod.imagen : `images/${prod.imagen}`;
        contenidoHTML += `
            <div class="tarjeta-producto">
                <img src="${rutaImg}" alt="${prod.nombre}">
                <h3>${prod.nombre}</h3>
                <p><strong>Precio:</strong> $${prod.precio}</p>
                <button type="button" onclick="eliminarDelCarrito(${index})">Eliminar</button>
            </div>
        `;
    });
    contenidoHTML += "</div>";
    contenedor.innerHTML = contenidoHTML;
};
