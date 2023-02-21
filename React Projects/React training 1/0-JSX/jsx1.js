const example1 = <h1>Hola Anthony soy una sintaxis JSX!!</h1>
console.log(example1);

const name1 = "Anthony Tineo"
const element1 = <h1>Hello, {name1}, como estas?</h1>

suma = <h2>La suma de 2 + 2 = {2 + 2}.</h2>

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: "Anthony",
    lastName: "Tineo",
};

const element = {
    <h1>
        Hello, {formatName(user)}!!
    </h1>
};

function getGreeting(user) {
    if(user) {
        return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
}

//Puedes utilizar comillas para especificar strings literales como atributos:
const element = <a href="https://www.reactjs.org"> link </a>;

//También puedes usar llaves para insertar una expresión JavaScript en un atributo:
const element = <img src={user.avatarUrl}></img>;

/*No pongas comillas rodeando llaves cuando insertes una expresión JavaScript en un atributo. 
Debes utilizar comillas (para los valores de los strings) o llaves (para las expresiones), pero no ambas en el mismo atributo. */