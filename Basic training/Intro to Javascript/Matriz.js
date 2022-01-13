//Arrays in Array

//Exercise 1
//
let donutBox = [
    ["glazed", "chocolate glazed", "cinnamon"],
    ["powdered", "sprinkled", "glazed cruller"],
    ["chocolate cruller", "Boston creme", "creme de leche"]
];

function matrizDonas(donuts){
    for(let f = 0; f < donuts.length; f++){
        for(let c = 0; c < donuts. length; c++){
            console.log(donuts[f][c]);
        }
    }
}

matrizDonas(donutBox);

//Exercise 2.
const numbers = [
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
    [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
    [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
    [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
    [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
    [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

let even = [];
let odd = [];
for(let f1 = 0; f1 < numbers.length; f1++){
    for(let c1 = 0; c1 < numbers.length; c1++){
        if(numbers[f1][c1] % 2 == 0) {
            even += `${numbers[f1][c1]} `;
        }else {
            odd += `${numbers[f1][c1]} `;
        }
    }
}

//Utilizando la consola, se puede imprimir varias vareiables de datos
console.log(even,  odd);
