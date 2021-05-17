/*
Una expresión de función flecha es una alternativa compacta a una expresión de función tradicional,
pero es limitada y no se puede utilizar en todas las situaciones.

Diferencias y limitaciones:
1- No tiene sus propios enlaces a this o super y no se debe usar como métodos.
2- No tiene argumentos o palabras clave new.target.
3- No apta para los métodos call, apply y bind, que generalmente se basan en establecer un ámbito o alcance
4- No se puede utilizar como constructor.
5- No se puede utilizar yield dentro de su cuerpo.
*/

//Funcion normal.
const add = function(a,b) {
    return a + b;
}
console.log(add(4, 2));

//Funcion flecha.
const add2 = (a,b) => a+b;
console.log(add2(4,8));

//Si la funcion flecha, contiene elementos muy largos no tener miedo de utilizar el return y las {}.
const operacion = (num1, num2, num3, num4) => {
    return ((num1 + num2) * num3) / num4;
}
console.log(operacion(4,8,5,6));

//Cuando utilizar funciones flechas
const tema = {
    members: ['Cesar', 'Anthony'],
    teamName: 'Super Squad',
    teamSummary: function() {
        return this.members.map((member) => {
            return `${member} is on team ${this.teamName}`;
        });
    }
}

console.log(team.teamSummary());