const renderProductosCarrito = () => {
    const juegos_carrito = cargarJuegosCarrito();
    let salida = "";

    if (totalCarrito() > 0) {  
        salida = `<table class="table">
        <tbody>
        <tr>
        <td colspan="6" class="text-end"><a href="#" class="btn btn-warning fw-semibold" onClick="vaciarCarrito()">Vaciar Carrito <img src="imagenes/img videoJuegos/484611.png" 
        alt="Vaciar Carrito" width="15" /></a></td>
        </tr>`;



        for ( let producto of juegos_carrito) {
            salida += `<tr>
            <td><img src="imagenes/${producto.imagen}" alt="${producto.nombre}" width="90" /></td>
            <td class="aling-middle fw-semibold">${producto.nombre}</td>
            <td class="aling-middle fw-semibold"><button class="btn btn-warning rounded-circle" title="Eliminar Item" onClick="eliminarItemProducto(${producto.id});"> - </button> ${producto.cantidad} <button class="btn btn-warning rounded-circle" title="Agregar Item" onClick="agregarItemProducto(${producto.id});"> + </button></td>
            <td class="aling-middle fw-semibold">${producto.cantidad} X $${producto.precio}</td>
            <td class="aling-middle fw-semibold">$${producto.cantidad * producto.precio}</td>
            <td class="text-end aling-middle"><a href="#" title"Eliminar Producto" onClick="eliminarJuego(${producto.
            id});"><img src="imagenes/img videoJuegos/484611.png" alt="Eliminar Producto" width="15" /></a></td>`;


        }
        
        salida += `<tr>
        <td colspan="4"><b>Suma Total:</b></td>
        <td><b>$${sumaCarrito()}</b></td>
        <td>&nbsp;</td>
        </tr>
        </tbody>
        </table>`;
    }else {
        salida = `<div class="alert alert-danger text-center" role="alert">
        No se encontraron Productos en el Carrito!</div>`;
    }
        
  
    document.getElementById("productos_seleccionados").innerHTML = salida;
}

renderProductosCarrito();
renderBotonCarrito();