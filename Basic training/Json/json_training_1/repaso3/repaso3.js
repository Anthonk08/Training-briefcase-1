

const yo = {
    nombre: "Anthony",
    edad: 26,
    direccion: "Calle Vanessa Ramirez Faña, casa #24",
}

let yo_string = JSON.stringify(yo);

let yo_parse = JSON.parse(yo_string)

alert(yo_string);
alert(yo_parse);