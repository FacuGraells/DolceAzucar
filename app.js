const productos = [
    {nombre: "azucar", precio: 50},
    {nombre: "azucar mascabo", precio: 150},
    {nombre: "azucar organica ", precio: 250},
];
let carrito = []

let seleccion = prompt ("hola, desea comprar algun producto")



while(seleccion != "si" && sleccion != "no"){
    alert("por favor ingresa si o no")
    seleccion = prompt("hola, desea comprar algo, si o no?") 
}



if (seleccion == "si" ){
    alert ("a continuacion nuestros productos")
    let todosLosProductos = productos.map ((producto) => producto.nombre + " " + producto.precio + "$");
    alert (todosLosProductos.join (" - "))
} else if (seleccion == "no"){
    alert("gracias por venir, hasta pronto!!")
}



while(seleccion != "no"){
    let producto = prompt ("agrega un producto a tu carrito")
    let precio = 0

    if(producto == "azucar" ||  producto == "azucar mascabo" || producto == "azucar organica"){ 
    switch(producto){
        case "azucar":
            precio = 50;
            break;
        case "azucar mascabo":
            precio = 150;
            break;
        case "azucar organica":
            precio = 250;
            break;
        default:
            break;
        }
    let unidades = parseInt (prompt("cuantas unidades quiere llevar"))
    
    carrito.push({producto, unidades, precio})
    } else{
        alert ("no tenemos ese producto")
    }

 
    seleccion = prompt ("desea seguir comprando?")

  
    while(seleccion === "no"){
        alert("gracias por su compra! vuelva pronto!")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.productos}, unidades: ${carritoFinal.unidades}, total a pagar por productos ${carritoFinal.unidades * carritoFinal.precio}`)
        })
    break;
    }
}



