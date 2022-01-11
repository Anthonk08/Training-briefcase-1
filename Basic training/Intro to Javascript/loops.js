//Loops
//WHILE 1
let num1 = 1;
while (num1 <= 10){
    console.log("Numero: "+num1);
    num1 +=1;
}

//While 2
let num2 = 5;
while (num2 < 10){
    console.log("Este numero sigue siendo menor que 10: "+ num2);
    num2 += 1;
}

//While 3
//El numero debe ser divisible entre 3 y 5 para imprimir JuliaJamesw, divisible solo con 3 para imprimir Julia
//Divisible entre 5 para imprimir James y si no es divisible entre nadie solo imprime el numero
let num3 = 1;
while(num3 <= 20) {
    if(num3 % 3 == 0 && num3 % 5 == 0){
        console.log("JuliaJames");
    }else if (num3 % 3 == 0) {
        console.log("Julia");
    }else if (num3 % 5 == 0) {
        console.log("James");
    } else {
        console.log(num3);
    }
    num3 += 1;
}

//While 4
//Escribir un loop que imprima una cancion. Empezara en 99 hasta finalizar en 1.
let num4 = 99;
while(num4 >= 1){
    let a1 = (num4 === 1 ? "bottle" : "bottles");
    console.log(num4 + " " + a1 +" of juice on the wall! " + num4 + " " + a1 + " of juice! Take one down, pass it around...");
    num4 -= 1;
}

//While 5
let num5 = 60;
while(num5 >= 0) {
    if(num5 === 50){
        console.log("Orbiter transfers from ground to internal power");
    }else if(num5 === 31) {
        console.log("Ground launch sequencer is go for auto sequence start");
    }else if(num5 === 16) {
        console.log("Activate launch pad sound suppression system");
    }else if(num5 === 10) {
        console.log("Activate main engine hydrogen burnoff system");
    }else if(num5 === 6) {
        console.log("Main engine start");
    }else if(num5 === 0) {
        console.log("Solid rocket booster ignition and liftoff!");
    }else {
        console.log("T-"+num5+" seconds");
    }
    num5 -= 1;
}

//FOR
for(let i = 0; i < 10; i++){
    console.log("Esta es la "+ i +" vez, que se imprime el mensaje!");
}