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
 * Renderiza dinámicamente las tarjetas de los productos en el catálogo
 * @method cargarproducto
 * @return {void}
 */
let cargarproducto = () => {
  let contenido = "";

  productos.forEach((elemento, id) => {
    contenido += `
      <div>
        <img src="images/${elemento.imagen}" alt="${elemento.nombre}">
        <h3>${elemento.nombre}</h3>
        <p>${elemento.precio}</p>
        <button type="button" onclick="mostrarmodal(${id})">
          Ver detalles del producto
        </button>
        <button type="button" onclick="agregaralcarrito(${id})">
          Agregar al carrito
        </button>
      </div>
    `;
  });

  document.getElementById("mostrar-catalogo").innerHTML = contenido;
};

/**
 * Agrega el id del producto al carrito en localStorage
 * @method agregaralcarrito
 * @param {number} id - Posición del producto en el array productos
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
  console.log(carritolist);
  localStorage.setItem("carrito", JSON.stringify(carritolist));
};

/**
 * Muestra el modal con la información del producto
 * @method mostrarmodal
 * @param {number} id - Posición del producto
 * @return {void}
 */
let mostrarmodal = (id) => {
  document.getElementById("titulo-producto").innerText = productos[id].nombre;
  document.getElementById("descripcion-producto").innerText = productos[id].description;
  document.getElementById("modal").style.display = "block";
};

/**
 * Cierra la ventana modal de producto
 * @method cerrarmodal
 * @return {void}
 */
let cerrarmodal = () => {
  document.getElementById("modal").style.display = "none";
};

/**
 * Renderiza los productos guardados en el carrito
 * @method cargarcarrito
 * @return {void}
 */
let cargarcarrito = () => {
  let carritolist = localStorage.getItem("carrito");
  let contenido = "";

  if (carritolist == null || JSON.parse(carritolist).length === 0) {
    contenido = "<div>Su carrito está vacío</div>";
  } else {
    carritolist = JSON.parse(carritolist);
    carritolist.forEach((num, index) => {
      contenido += `
        <div>
          <img src="images/${productos[num].imagen}" alt="${productos[num].nombre}">
          <h3>${productos[num].nombre}</h3>
          <p>${productos[num].precio}</p>
          <button type="button" onclick="eliminardelcarrito(${index})">Eliminar el producto</button>
        </div>
      `;
    });
  }

  document.getElementById("mostrar-carrito").innerHTML = contenido;
};

/**
 * Vacía por completo el carrito de compras usando localStorage.removeItem
 * @method vaciarcarrito
 * @return {void}
 */
let vaciarcarrito = () => {
  localStorage.removeItem("carrito");
  cargarcarrito();
};

/**
 * Elimina un producto del array del carrito usando splice
 * @method eliminardelcarrito
 * @param {number} pos - Posición en el array a eliminar
 * @return {void}
 */
let eliminardelcarrito = (pos) => {
  let carritolist = localStorage.getItem("carrito");
  if (carritolist != null) {
    carritolist = JSON.parse(carritolist);
    carritolist.splice(pos, 1);
    localStorage.setItem("carrito", JSON.stringify(carritolist));
    cargarcarrito();
  }
};
