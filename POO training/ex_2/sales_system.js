class Producto{
    static contadorProductos = 0;
    static idProducto = 324;
   

    constructor(nombre,precio){
        this._nombre = nombre;
        this._precio = precio;
        this._idProducto = ++Producto.idProducto;
    }
    get getIdProducto(){
        return this._idProducto;
    }
    get getNombre(){
        return this._nombre;
    }
    set setNombre(nombre){
        this._nombre = nombre;
    }
    get getPrecio(){
        return this._precio;
    }
    set setPrecio(precio){
        this._precio = precio;
    }

    ItemCompleto(){
        return "ID:" + this._idProducto + " Nombre producto:" + this._nombre + " Precio:$" + this._precio;
    }

    toString(){
        return this.ItemCompleto();
    }

}

class Orden{
    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this._productos = [];
        this._contadorProductosAgregados = 0;
        if(this._productos.length>=Orden.MAX_PRODUCTOS){
            return console.log('No se pueden agregar a la orden más productos')
        }
        this._IdOrden = ++Orden.contadorOrdenes;
    }
    
    get IdOrden(){
        return this._IdOrden;
    }
    //REVIEW
    agregarProducto(producto){
        this._productos.length<Orden.MAX_PRODUCTOS?this._productos.push(producto):console.log('No se pueden agregar más productos');
    }

    calcularTotal(){
        let totalVenta = 0;
        for(let producto of this._productos){
            totalVenta += producto.getPrecio;
        }
        return totalVenta;
    }
    mostrarOrden(){
        let ProductosOrden = '';
        for(let producto of this._productos){
            ProductosOrden += '\n{' + producto.toString() + '} ';
        }
        console.log(`Orden ID:${this._IdOrden} Total Orden:${this.calcularTotal()} Productos:${ProductosOrden}`);
    }

}



let producto1 = new Producto('Acetaminofen',3000);
console.log(producto1.getNombre);
let producto2 = new Producto('Paracetamol', 4500);
console.log(producto2.getIdProducto);


let orden1 = new Orden();

orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);

orden1.mostrarOrden();