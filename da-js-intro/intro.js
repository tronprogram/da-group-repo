class Inventario {
    constructor(Nombre) {
        this.nombre = Nombre;
        this.articulos = [];
    }
    getNombre() {
        f();
        return this.Nombre;

    }
    add(articulo, cantidad) {
        f();
        this.articulos[articulo] = cantidad;
    }
    cantidad(articulo) {
        return this.articulos[articulo];
    }
}

let libros = new Inventario('libros');
libros.getNombre()
libros.add("Aprendiendo JavaScript", 5)
libros.cantidad("Aprendiendo JavaScript")