const productos = [
  {
    nombre: "Cabezal Sparring",
    description: "Cabezal de Sparring.",
    categoria: "Protectores",
    marca: "Gran Marc",
    talle: ["1", "2", "3"],
    precio: 35000,
    web: "https://www.granmarctiendaonline.com.ar/productos/cabezal-cerrado/",
    imagen: "cabezal-cerrado.webp",
  },
  {
    nombre: "Dobok Dan",
    description: "Bobok aprobado para torneos internacionales.",
    categoria: "Dobok",
    marca: "Daedo",
    talle: ["1", "2", "3", "4", "5", "6", "7", "8"],
    precio: 115000,
    web: "https://www.daedo.com/products/taitf-10813",
    imagen: "dobok.webp",
  },
  {
    nombre: "Escudo de Potencia",
    description: "Escudo de potencia para entrenamientos.",
    categoria: "Entrenamiento",
    marca: "Gran Marc",
    talle: ["s/talle"],
    precio: 51700,
    web: "https://www.granmarctiendaonline.com.ar/productos/escudo-de-potencia-grande/",
    imagen: "escudo-potencia.webp",
  },
  {
    nombre: "Par de focos redondos",
    description: "Par de focos de 25cm x 25cm para hacer entrenamiento.",
    categoria: "Entrenamiento",
    marca: "Gran Marc",
    talle: ["s/talle"],
    precio: 15000,
    web: "https://www.granmarctiendaonline.com.ar/productos/foco-con-dedos/",
    imagen: "foco-con-dedos.webp",
  },
  {
    nombre: "Guantes 10 onzas",
    description:
      "Guantes de Sparring de 10 onzas habilitados para torneos internacionales",
    categoria: "Protectores",
    marca: "Daedo",
    talle: ["s/talle"],
    precio: 35000,
    web: "https://www.daedo.com/products/pritf-2020",
    imagen: "protectores-manos.webp",
  },
  {
    nombre: "Protectores Pie",
    description: "Protectores de Pie habilitados para torneos internacionales",
    categoria: "Protectores",
    marca: "Daedo",
    talle: ["XXS", "XS", "S", "M", "L", "XL"],
    precio: 35000,
    web: "https://www.daedo.com/collections/collection-itf-gloves/products/pritf-2022",
    imagen: "protectores-pie.webp",
  },
];

/**
 * Formatea un número al estándar monetario $3.123,45 utilizando Intl.NumberFormat
 * @method formatearPrecio
 * @param {number} valor - Importe a formatear
 * @return {string} Cadena formateada
 */
let formatearPrecio = (valor) => {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 2,
  }).format(valor);
};

/**
 * Renderiza dinámicamente las tarjetas de los productos en el catálogo
 * @method cargarproducto
 * @param {Array<Object>} [lista=productos] - Lista de productos a renderizar
 * @return {void}
 */
let cargarproducto = (lista = productos) => {
  const contenedor = document.getElementById("mostrar-catalogo");
  if (!contenedor) return;

  if (lista.length === 0) {
    contenedor.innerHTML = "<p>No se encontraron productos coincidentes.</p>";
    return;
  }

  let contenido = "";
  lista.forEach((elemento) => {
    const id = productos.indexOf(elemento);
    contenido += `
      <div>
        <img src="images/${elemento.imagen}" alt="${elemento.nombre}">
        <h3>${elemento.nombre}</h3>
        <p>${formatearPrecio(elemento.precio)}</p>
        <button type="button" onclick="mostrarmodal(${id})">
          Ver detalles del producto
        </button>
        <button type="button" onclick="agregaralcarrito(${id})">
          Agregar al carrito
        </button>
      </div>
    `;
  });

  contenedor.innerHTML = contenido;
  actualizarContadorCarrito();
};

/**
 * Muestra el modal con los detalles del producto seleccionado
 * @method mostrarmodal
 * @param {number} id - Índice del producto
 * @return {void}
 */
let mostrarmodal = (id) => {
  const modal = document.getElementById("modal");
  const titulo = document.getElementById("titulo-producto");
  const descripcion = document.getElementById("descripcion-producto");

  if (productos[id]) {
    if (titulo) titulo.innerText = productos[id].nombre;
    if (descripcion) descripcion.innerText = `${productos[id].description} - Marca: ${productos[id].marca} - Talles: ${productos[id].talle.join(", ")}`;
  }

  if (modal) {
    if (typeof modal.showModal === "function") {
      modal.showModal();
    } else {
      modal.style.display = "block";
    }
  }
};

/**
 * Cierra la ventana modal de detalles de producto
 * @method cerrarmodal
 * @return {void}
 */
let cerrarmodal = () => {
  const modal = document.getElementById("modal");
  if (modal) {
    if (typeof modal.close === "function") {
      modal.close();
    } else {
      modal.style.display = "none";
    }
  }
};

/**
 * Agrega el identificador del producto al array del carrito en localStorage
 * @method agregaralcarrito
 * @param {number} id - Índice del producto
 * @return {void}
 */
let agregaralcarrito = (id) => {
  let carritolist = localStorage.getItem("carrito");
  if (carritolist == null) {
    carritolist = [];
  } else {
    carritolist = JSON.parse(carritolist);
  }

  carritolist.push(id);
  localStorage.setItem("carrito", JSON.stringify(carritolist));
  actualizarContadorCarrito();
  alert(`"${productos[id].nombre}" agregado al carrito.`);
};

/**
 * Actualiza el indicador visual del carrito
 * @method actualizarContadorCarrito
 * @return {void}
 */
let actualizarContadorCarrito = () => {
  const contadorEl = document.getElementById("contador-carrito");
  if (!contadorEl) return;
  const carritolist = localStorage.getItem("carrito");
  const cantidad = carritolist ? JSON.parse(carritolist).length : 0;
  contadorEl.innerText = ` (${cantidad})`;
};

/**
 * Carga y renderiza el contenido del carrito en la página de carrito
 * @method cargarcarrito
 * @return {void}
 */
let cargarcarrito = () => {
  const contenedor = document.getElementById("mostrar-carrito");
  if (!contenedor) return;

  let carritolist = localStorage.getItem("carrito");
  let contenido = "";

  if (carritolist == null || JSON.parse(carritolist).length === 0) {
    contenido = "<div>Su carrito está vacío</div>";
    contenedor.innerHTML = contenido;
    actualizarTotal(0);
    return;
  }

  carritolist = JSON.parse(carritolist);
  let total = 0;

  carritolist.forEach((num, index) => {
    const prod = productos[num];
    if (prod) {
      total += prod.precio;
      contenido += `
        <div>
          <img src="images/${prod.imagen}" alt="${prod.nombre}">
          <h3>${prod.nombre}</h3>
          <p>${formatearPrecio(prod.precio)}</p>
          <button type="button" onclick="eliminardelcarrito(${index})">Eliminar</button>
        </div>
      `;
    }
  });

  contenedor.innerHTML = contenido;
  actualizarTotal(total);
};

/**
 * Actualiza el total a pagar
 * @method actualizarTotal
 * @param {number} total
 * @return {void}
 */
let actualizarTotal = (total) => {
  const totalEl = document.getElementById("total-carrito");
  if (totalEl) {
    totalEl.innerText = `Total a pagar: ${formatearPrecio(total)}`;
  }
};

/**
 * Elimina un ítem del carrito
 * @method eliminardelcarrito
 * @param {number} index
 * @return {void}
 */
let eliminardelcarrito = (index) => {
  let carritolist = localStorage.getItem("carrito");
  if (carritolist) {
    carritolist = JSON.parse(carritolist);
    carritolist.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carritolist));
  }
  cargarcarrito();
};

/**
 * Vacía por completo el carrito de compras
 * @method vaciarcarrito
 * @return {void}
 */
let vaciarcarrito = () => {
  localStorage.removeItem("carrito");
  cargarcarrito();
};

/**
 * Filtra los productos según los valores de los filtros
 * @method filtrarproductos
 * @return {void}
 */
let filtrarproductos = () => {
  const searchInput = document.getElementById("search");
  const minimoInput = document.getElementById("minimo");
  const maximoInput = document.getElementById("maximo");
  const selectMarca = document.getElementById("marca");
  const selectOrden = document.getElementById("orden");

  const texto = searchInput ? searchInput.value.trim().toLowerCase() : "";
  const min = minimoInput && minimoInput.value !== "" ? parseFloat(minimoInput.value) : null;
  const max = maximoInput && maximoInput.value !== "" ? parseFloat(maximoInput.value) : null;
  const marca = selectMarca ? selectMarca.value : "";
  const orden = selectOrden ? selectOrden.value : "";

  const checkedCategories = Array.from(
    document.querySelectorAll("input[name='tipo']:checked")
  ).map((cb) => cb.value.toLowerCase());

  let resultado = productos.filter((prod) => {
    if (texto && !prod.nombre.toLowerCase().includes(texto) && !prod.description.toLowerCase().includes(texto)) {
      return false;
    }
    if (min !== null && prod.precio < min) {
      return false;
    }
    if (max !== null && prod.precio > max) {
      return false;
    }
    if (checkedCategories.length > 0 && !checkedCategories.includes(prod.categoria.toLowerCase())) {
      return false;
    }
    if (marca && prod.marca !== marca) {
      return false;
    }
    return true;
  });

  if (orden === "precio-asc") {
    resultado.sort((a, b) => a.precio - b.precio);
  } else if (orden === "precio-desc") {
    resultado.sort((a, b) => b.precio - a.precio);
  } else if (orden === "nombre-asc") {
    resultado.sort((a, b) => a.nombre.localeCompare(b.nombre));
  } else if (orden === "nombre-desc") {
    resultado.sort((a, b) => b.nombre.localeCompare(a.nombre));
  }

  cargarproducto(resultado);
};

// Aliases para compatibilidad
let cargarProductos = cargarproducto;
let agregarAlCarrito = agregaralcarrito;
let cargarCarrito = cargarcarrito;
let eliminarDelCarrito = eliminardelcarrito;
let vaciarCarrito = vaciarcarrito;
let filtrarProductos = filtrarproductos;
let abrirDialog = mostrarmodal;
let cerrarDialog = cerrarmodal;
