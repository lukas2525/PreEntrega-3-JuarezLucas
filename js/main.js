const renderProductos = () => {
    const juegos = cargarJuegosLS()
    let salida = "";


    for ( let producto of juegos) {
        salida += `<div class="col-md-3 mb-3">
            <div class="card text-center border border-0">
                <img src="imagenes/${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text fw-semibold">$${producto.precio}</p>
                <a href="#" class="btn btn-warning fw-semibold" onClick="agregarAlCarrito(${producto.id});">Agregar al Carrito</a>
            </div>
        </div>
        </div>`;
    }
    document.getElementById("productos").innerHTML = salida;
}

renderProductos();
renderBotonCarrito();