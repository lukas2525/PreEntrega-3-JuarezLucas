const guardarJuegosCarrito = (juegos) => {
    localStorage.setItem("carrito", JSON.stringify(juegos));
}

const cargarJuegosCarrito = () => {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

const estaEnElCarrito = (id) => {
    const juegos_carrito = cargarJuegosCarrito();

    return juegos_carrito.some(item => item.id === id);
}

const agregarAlCarrito = (id) => {
    const juegos = cargarJuegosLS();
    const juegos_carrito = cargarJuegosCarrito();

    if (estaEnElCarrito(id)) {
        let pos = juegos_carrito.findIndex(item => item.id === id);
        juegos_carrito[pos].cantidad += 1;
    }else {
        const juego = juegos.find(item => item.id === id);
        juego.cantidad = 1;
        juegos_carrito.push(juego);
    }

    guardarJuegosCarrito(juegos_carrito);
    renderBotonCarrito();
}

const eliminarJuego = (id) => {
    const juegos_carrito = cargarJuegosCarrito();
    const juego = juegos_carrito.filter(item => item.id !== id);
    guardarJuegosCarrito(juego);
    renderProductosCarrito();
    renderBotonCarrito();
}

const vaciarCarrito = () => {
    localStorage.removeItem("carrito");
    renderProductosCarrito();
    renderBotonCarrito();
}

const totalCarrito = () => {
    const juegos_carrito = cargarJuegosCarrito();
    
    return juegos_carrito.reduce((total, item) => total += item.cantidad, 0);
}

const sumaCarrito = () => {
    const juegos_carrito = cargarJuegosCarrito();
    
    return juegos_carrito.reduce((total, item) => total += item.cantidad * item.precio, 0);
}

const renderBotonCarrito = () => {
    let salida = `<button type="button" class="btn btn-warning position-relative">
        <img src="imagenes/img videoJuegos/7238907.png" alt="Carrito" width="25">
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        ${totalCarrito()}</span>
    </button>`;
    document.getElementById("boton_carrito").innerHTML = salida;
}

const agregarItemProducto = (id) => {
    const juegos_carrito = cargarJuegosCarrito();
    let pos = juegos_carrito.findIndex(item => item.id === id);
    juegos_carrito[pos].cantidad += 1;
    guardarJuegosCarrito(juegos_carrito);
    renderProductosCarrito();
    renderBotonCarrito();
}

const eliminarItemProducto = (id) => {
    const juegos_carrito = cargarJuegosCarrito();
    let pos = juegos_carrito.findIndex(item => item.id === id);
    juegos_carrito[pos].cantidad -= 1;

    if (juegos_carrito[pos].cantidad == 0) {
        eliminarJuego(id);
    }else {
        guardarJuegosCarrito(juegos_carrito);
        renderProductosCarrito();
        renderBotonCarrito();
    }
}

const buscarProducto = (id) => {
    const juegos = cargarJuegosLS();

    return juegos.find(item => item.id === id);
}

const verProducto = (id) => {
    const producto = buscarProducto(id);
    localStorage.setItem("producto", JSON.stringify(producto));
    location.href = "ver_producto.html";
}

const cargarProducto = () => {
    return JSON.parse(localStorage.getItem("producto"));
}

function confirmarCompra() {
    Swal.fire({
        title: 'Su Compra ha sido Exitosa!',
        text: "Desea realizar otra Compra?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#FFD433',
        confirmButtonText: 'Sí!',
        cancelButtonText: 'No!'
        }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Genial!',
            'Muchas Gracias por su Confianza!',
            'success'
        )}else {
            Swal.fire(
            'Genial!',
            'Muchas Gracias por su Compra! ¡Hasta la Proxima!',
            'success'
        )}
    })
    vaciarCarrito();
}

document.getElementById("boton_comprar").addEventListener("click", confirmarCompra);