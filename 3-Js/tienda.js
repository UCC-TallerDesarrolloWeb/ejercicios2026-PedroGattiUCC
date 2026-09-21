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
 * @method mostrarCatalogo
 * @param {Array<Object>} [lista=productos] - Lista de productos a renderizar (por defecto todo el catálogo)
 * @return {void} No retorna ningún valor
 */
let mostrarCatalogo = (lista = productos) => {
    let contenido = document.getElementById("contenedorProductos");
    if (!contenido) return;

    if (lista.length === 0) {
        contenido.innerHTML = "<p style='text-align: center; grid-column: 1 / -1;'>No se encontraron productos que coincidan con los filtros aplicados.</p>";
        return;
    }

    let contenidoHTML = "";
    lista.forEach((prod) => {
        const index = productos.indexOf(prod);
        const rutaImg = prod.imagen.startsWith("images/") ? prod.imagen : `images/${prod.imagen}`;
        contenidoHTML += `
            <div class="tarjeta-producto">
                <img src="${rutaImg}" alt="${prod.nombre}">
                <h3>${prod.nombre}</h3>
                <p><strong>Precio:</strong> $${prod.precio}</p>
                <button type="button" onclick="abrirDialog(${index})">Ver detalle de Producto</button>
                <button type="button" onclick="agregarAlCarrito(${index})">Agregar al carrito</button>
            </div>
        `;
    });

    contenido.innerHTML = contenidoHTML;
};

