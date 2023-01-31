const renderProductos = () => {
    const juegos = cargarJuegosLS()
    let salida = "";

    for ( let producto of juegos) {
        salida += `<div class="col-md-3 mb-3">
            <a href="#" onClick="verProducto(${producto.id});" class="text-decoration-none text-dark" title="Ver ${producto.nombre}">
                <div class="card text-center border border-0">
                    <img src="imagenes/${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                    <div class="card-body">
                     <h5 class="card-title">${producto.nombre}</h5>
                    </div>
                </div>
            </a>
        </div>`;
    }
    document.getElementById("productos").innerHTML = salida;
}

renderProductos();
renderBotonCarrito();