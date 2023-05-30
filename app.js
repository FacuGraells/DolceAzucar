
const productos = [
    { nombre: "azucar", precio: 50 },
    { nombre: "azucar mascabo", precio: 150 },
    { nombre: "azucar organica", precio: 250 },
  ];
  
  var carrito = [];
  
  function agregarProducto() {
    var nombre = prompt("Ingrese el nombre del producto:");
    var productoEncontrado = productos.find(function (producto) {
      return producto.nombre === nombre;
    });
  
    if (productoEncontrado) {
      var cantidad = parseInt(prompt("Ingrese la cantidad del producto:"));
      var productoExistente = carrito.find(function (producto) {
        return producto.nombre === nombre;
      });
  
      if (productoExistente) {
        productoExistente.cantidad += cantidad;
      } else {
        var producto = {
          nombre: productoEncontrado.nombre,
          precio: productoEncontrado.precio,
          cantidad: cantidad,
        };
        carrito.push(producto);
      }
  
      alert("¡Producto agregado al carrito de compras!");
    } else {
      alert("Producto no encontrado en la lista de productos.");
    }
  }
  function eliminarProducto() {
    var nombre = prompt("Ingrese el nombre del producto a eliminar:");
  
    var indice = -1;
    for (var i = 0; i < carrito.length; i++) {
      if (carrito[i].nombre === nombre) {
        indice = i;
        break;
      }
    }
  
    if (indice !== -1) {
      carrito.splice(indice, 1);
      alert("¡Producto eliminado del carrito de compras!");
    } else {
      alert("El producto no está en el carrito de compras.");
    }
  }
  
  function calcularTotal() {
    var total = 0;
    for (var i = 0; i < carrito.length; i++) {
      total += carrito[i].precio * carrito[i].cantidad;
    }
    alert("Total de la compra: $" + total.toFixed(2));
  }
  
  function mostrarCarrito() {
    var carritoInfo = "Carrito de compras:\n\n";
    for (var i = 0; i < carrito.length; i++) {
      carritoInfo +=
        "Nombre: " + carrito[i].nombre + "\n" +
        "Precio: $" + carrito[i].precio + "\n" +
        "Cantidad: " + carrito[i].cantidad + "\n\n";
    }
    alert(carritoInfo);
  }
  
  while (true) {
    var opcion = prompt(
      "Seleccione una opción:\n" +
      "1. Agregar producto al carrito\n" +
      "2. Eliminar producto del carrito\n" +
      "3. Calcular total de la compra\n" +
      "4. Mostrar carrito de compras\n" +
      "5. Salir"
    );
  
    if (opcion === "1") {
      agregarProducto();
    } else if (opcion === "2") {
      eliminarProducto();
    } 
     else if (opcion === "3") {
      calcularTotal();
    } else if (opcion === "4") {
      mostrarCarrito();
    } else if (opcion === "5") {
      alert("gracias por su compra! vuelva pronto!")
      break;
    } else {
      alert("Opción inválida. Por favor, seleccione una opción válida.");
    }
  }
  