/*
The Array.every() method in JavaScript is used to checks whether all the elements of the array satisfy the given condition or not.

The Array.some() method in JavaScript is used to check whether at least one of the elements of the array satisfies the given condition or not.

The only difference is that the some() method will return true if any predicate is true while every() method will return true if all
predicate are true.
*/

const computers = [
    {name: 'Apple', ram: 24},
    {name: 'Compaq', ram: 4},
    {name: 'Acer', ram: 32},
    {name: 'Dell', ram: 16},
    {name: 'Hp', ram: 8},
    {name: 'Lenovo', ram: 128}
];

const pcCanRunProgram = computers.every(computer => computer.ram > 16);
console.log(pcCanRunProgram);

const onlySomePcCanRunProgram = computers.some(computer => computer.ram > 100);
console.log(onlySomePcCanRunProgram);

