const libro = {
    titulo: "Aprendiendo JavaScript",
    autor: "idk man",
    numpaginas:"100",
    editorial: "c325s.net",
    precio: "134.42",
    edad: 36,
    redes:{
        twitter:"twitter dot com",
        tiktok:"no"

    },
    leer: function() {
        console.log("Fr? Ong?")
    }
}

let pages = "numpaginas"
libro[pages]
libro.leer()
libro.autor.nombre
libro["autor"]["redes"]["twitter"]

const carro1 = {marca: "Renault", modelo: "Twingo",}
const carro2 = {marca: "Renault", modelo: "Twingo",}
carro1 === carro2
carro1.marca === carro2.marca
carro3===carro1


