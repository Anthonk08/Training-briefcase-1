const name1 = 'Anthony';
const lastName = 'Tineo cabreja';

//const completeName = name + ' ' + lastName;
const completeName = `Hello my completName is ${ name1 } ${ lastName }`;

console.log(completeName);

function getSaludo(name1, lastName) {
    return `Hello ${name1} ${lastName}`;
}

console.log(`This is a text: ${getSaludo(name1, lastName)}`);