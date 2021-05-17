/*
La mejora literal de objeto se utiliza para agrupar variables del ámbito global y convertirlas en objetos javascript.
Es el proceso de reestructuración o reconstrucción.

// variable declaration
const name = "Duke";
const color = "Brown";
let age = 5;

// Using Object Literal Enhancement
// Combines all variables into a dog object
const dog = { name,
            color,
            age
        };
console.log(dog);

Resultado: el nombre, el color y la edad ahora son claves del objeto del perro .
*/
//Forma normal
function createBookShop(inventory) {
    return {
        inventory: inventory,
        inventoryValue: function() {
            return this.inventory.reduce((total, book) => total + book.price, 0);
        },
        priceForTitle: function(title) {
            return this.inventory.find(book => book.title === title).price;
        }
    };
}

const inventory = [
    {title: 'Harry Potter', price: 10},
    {title: 'Eloquent Javascript', price: 15},
    {title: 'Game of thrones', price: 20},
    {title: 'Shadows and Bones', price: 18},
    {title: 'Fire and blode', price: 25},
    {title: 'Metro 2033', price: 26}
];

const bookShop = createBookShop(inventory);

//Valor del inventario
console.log(bookShop.inventoryValue());
//Precio de uno de los libros
console.log(bookShop.priceForTitle('Metro 2033'));




//UTILIZANDO LOS ENHANCED OBJECT LITERALS
function createBookShop(inventory) {
    return {
        inventory,
        inventoryValue() {
            return this.inventory.reduce((total, book) => total + book.price, 0);
        },
        priceForTitle(title) {
            return this.inventory.find(book => book.title === title).price;
        }
    };
}

const inventory = [
    {title: 'Harry Potter', price: 10},
    {title: 'Eloquent Javascript', price: 15},
    {title: 'Game of thrones', price: 20},
    {title: 'Shadows and Bones', price: 18},
    {title: 'Fire and blode', price: 25},
    {title: 'Metro 2033', price: 26}
];

const bookShop = createBookShop(inventory);

//Valor del inventario
console.log(bookShop.inventoryValue());
//Precio de uno de los libros
console.log(bookShop.priceForTitle('Metro 2033'));


//OTRO EJEMPLO
//Forma normal
function saveFile(url, data){
    $.ajax({
        method: 'POST',
        url: url,
        data: data
    });
};

const url = "http://fileupload.com";
const data = {color: 'red'};

saveFile(url, data);

//Nueva forma
function saveFile(url, data){
    $.ajax({
        url,
        data,
        method: 'POST'
    });
};

const url = "http://fileupload.com";
const data = {color: 'red'};

saveFile(url, data);