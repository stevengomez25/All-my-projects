products_container_main = document.createElement('div');
document.body.appendChild(products_container_main);
products_container_main.classList.add('products-container');
count = 0;

function crearProducto(Nombre,Precio,Cantidad,Descripcion){
    imagen = `<img src="https://tiendasishop.com/media/catalog/product/m/l/mlq73lz_a_1.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700"class="imagen_producto"></img>`;
    nombre = `<h2>Nombre: ${Nombre}</h2>`;
    precio = `<h3>Precio: $${Precio}</h3>`;
    cantidad = `<h4>Cantidad disponibles: ${Cantidad}</h4>`;
    desc = `<p>De que trata?${Descripcion}</p>`;
    button_buy = `<a href=# class="btn btn-success m-2">COMPRAR!!</a>`;
    button_add_to_cart = `<a href=# class="btn btn-secondary">Agregar al Carrito</a>`;
    return [imagen,nombre,precio,cantidad,desc,button_buy, button_add_to_cart];
}
const j = crearProducto("iPhone 13",300000,20,"Hermoso y unico!!");

while(count <18){
    count++;
    products_container = document.createElement("div");
    products_container_main.appendChild(products_container);
    for (detalle in j) {
        products_container.innerHTML+=j[detalle];
    }
}
