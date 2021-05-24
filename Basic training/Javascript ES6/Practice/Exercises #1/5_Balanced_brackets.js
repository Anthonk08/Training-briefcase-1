/*
Balanced Brackets.
Given a string possibly containing three types of braces ({}, [], ()), write a function that returns a Boolean
indicating whether the given string contains a valid nesting of braces.
*/

const balancedBrackets = str => {
    if(str.length % 2 != 0){
        return false;
    }

    const parentesis = {
        '(':')',
        '[':']',
        '{':'}'
    }
    let grupoParentesis = [];
    for(let letra of str) {
        if(parentesis[letra]){
            grupoParentesis.push(parentesis[letra]);
            console.log(grupoParentesis);
        }else {
            if(grupoParentesis.pop() !== letra) {
                return false;
            }
        }
    }
    return (!grupoParentesis.length)
}

console.log(balancedBrackets("({[]})")); //true
//console.log(balancedBrackets("({[{))]})")); //false
//console.log(balancedBrackets("({[{}[()]]})")); //true
