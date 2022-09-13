
const puerta = {
    "id": 1,
    "nombre": "Puerta de Caoba",
    "precio": 5000,
    "etiquetas": ["madera", "puerta", "caoaba"],
    "autor": "Anthony",
    getDatos: function() {
        alert(`El id es: ${this.id}`);
        alert(`El nombre del articulo es ${this.nombre}`);
        alert(`El precio del articulo es: ${this.precio}`);
        alert(`Los materiales existentes son: ${this.etiquetas}`);
    },
    suma: function(num1, num2) {
        const sum = num1 + num2;
        alert(`La suma de los numeros: ${num1} y ${num2} es ${sum}`);
    },
    "venta": true,
    "inventario": null,
}

function Casa(valor, terreno, color) {
    //Atributos
    this.valor = valor;
    this.terreno = terreno;
    this.color = color;

    //Metodos
    this.darTecho = function() {
        alert(`Todos los habitantes de la casa tienen techo`);
    }

    this.darProteccion = function() {
        alert(`Todos los habitantes de la casa estan protegidos`);
    }

}

// Creacion de objeto
const casa1 = new Casa(1000000, 450, "Azul");
console.log(puerta.__proto__);

let name = "Anthony"
console.log(name.__proto__);