//Learning how to use Find.
//El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.

//Primer numero menor que 8
const numeros = [100, 5, 12, 8, 130, 44, 10, 55, 36, 28];

const numeroEspecifico = numeros.find(num => num < 8);
console.log(numeroEspecifico);


//Nombre y sus detalles de busqueda correcta
const nombres = [
    {nombre: 'Anthony', apellido: 'Tineo', ocupacion: 'Programador'},
    {nombre: 'Rosario', apellido: 'Cabreja', ocupacion: 'Profesora'},
    {nombre: 'Keila', apellido: 'Tineo', ocupacion: 'Veterinaria'},
    {nombre: 'Ana Lucia', apellido: 'Cabreja', ocupacion: 'Bioanalista'},
    {nombre: 'Nicols', apellido: 'Almonte', ocupacion: 'Ingeniera'}
];

const nombre = nombres.find(nom => nom.nombre === 'Nicols');
console.log(nombre);

//Algo un poquito mas dificil.
const posts = [
    {id: 1, title: 'New Post'},
    {id: 2, title: 'Old Post'}
];

const comment = { postId: 1, content: 'Great Post'};

const postForComment = function(posts, comment){
    return posts.find(post => post.id === comment.postId);
};

console.log(postForComment(posts, comment));