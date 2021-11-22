//Conditional
let price = 15.00; //Price of the food
let money = 12.00; //Money in mi pocket

if(money >= price) {
    const moneyBack = money - price;
    console.log("I buy the food" + " and " + "I recibe " + moneyBack + " dolars");
}else {
    const moneyNeedIt = (price - money);
    console.log("I don't have sufficient money in mi pocket. I need it "+ moneyNeedIt + " dolars");
}


//Conditional 2
const number = 2;

if(number % 2 === 0) {
    console.log(number + " es par");
} else {
    console.log(number +" es impar");
}

//conditional 3
let musicians = 2;

if(musicians <= 0) {
    console.log("not a group");
} else if (musicians == 1) {
    console.log("solo");
} else if (musicians == 2) {
    console.log("duet");
} else if (musicians == 3) {
    console.log("trio");
} else if (musicians == 4) {
    console.log("quartet");
} else {
    console.log("this is a large group");
}


