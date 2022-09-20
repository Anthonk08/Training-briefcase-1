
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

const yo = {
    nombre: "Anthony",
    edad: 26,
    direccion: "Calle Vanessa Ramirez Faña, casa #24",
    carros: [
        {name: "Ford", models: ["Mustang", "Fusion", "F150"]},
        {name: "Nissan", models: ["Gtr", "Sentra", "Tsuru"]},
        {name: "Ferrari", models: ["Enzo", "Maranello", "GTC4Lusso"]},
    ],
}

for(x in yo.carros){
    alert(`Marca del vehiculo: ${yo.carros[x].name}`);
    for(y in yo.carros[x].models){
        alert(`Modelo: ${yo.carros[x].models[y]}`);
    }
}

