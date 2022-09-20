

const yo = {
    nombre: "Anthony",
    edad: 26,
    direccion: "Calle Vanessa Ramirez Faña, casa #24",
}

let yo_string = JSON.stringify(yo);
// setItem, permite almacenar valores en el localstorage
// ("Clave", objeto)
localStorage.setItem("Objeto_Anthony", yo_string);

// getItem es utilizado para buscar un valor en el localstorage
// ("clave")

let localstorage_date = localStorage.getItem("Objeto_Anthony");

let yo_parse = JSON.parse(yo_string)

alert(yo_string);
alert(yo_parse);
alert(localstorage_date);