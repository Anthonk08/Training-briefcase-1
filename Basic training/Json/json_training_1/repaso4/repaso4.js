

const anthony = {
    nombre: "Anthony",
    edad: 26,
    direccion: "Calle Vanessa Ramirez Faña, casa #24",
    //getter
    getNombre: function() {
        return this.nombre;
    },
    //setter
    setNombre: function(nombre) {
        this.nombre = nombre;
    },
}

// Dato original
alert(anthony.getNombre());
// Introduzco un nuevo valor
anthony.setNombre("Keila");
// Me presenta la clave nombre actualizada
alert(anthony.getNombre());