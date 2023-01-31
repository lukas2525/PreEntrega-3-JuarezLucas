const renderProducto = () => {
    const producto = cargarProducto() 
    let salida = `<div class="col-md-6 text-center">
        <img src="imagenes/${producto.imagen}" alt="${producto.nombre}" class="img-fluid" title="${producto.nombre}"/>
        </div>
        <div class="col-md-6">
            <h1 class="fw-bold">${producto.nombre}</h1>
            <h6><b>${producto.genero}</b></h6>
            <p class="text-secondary fw-semibold">${producto.description}</p>
            <p><b>$${producto.precio}</b></p>
            <p><a href="#" class="btn btn-warning fw-bold"  onClick="agregarAlCarrito(${producto.id});" title="Agregar al Carrito">Agregar (+)</a></p>
        </div>`;

    document.getElementById("producto").innerHTML = salida;
}

renderProducto();
renderBotonCarrito();