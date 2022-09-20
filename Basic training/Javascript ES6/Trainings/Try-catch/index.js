const mensaje = () => `Hola mundo!!`;
    try {
        procesarMensaje();
    } catch(e) {
        console.log(e);
    }
console.log(mensaje());

function procesarMensaje () {
    return `Si funciona`
}