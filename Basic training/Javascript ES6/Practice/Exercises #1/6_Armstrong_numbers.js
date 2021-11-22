/*
Armstrong Numbers.
An Armstrong number is an n-digit number that is equal to the sum of the nthnth powers of its digits.
Determine if the input number is an Armstrong number. Return either true or false.
*/

const armstrongNumber = number => {
    if(number <= 100){
        return false;
    }
    let numStr = String(number);
    let sum = 0;
    numStr.split('').forEach(num => {
        numInt = parseInt(num);
        sum += Math.pow(numInt, 3);
    });
    return number == sum;
}

console.log(armstrongNumber(371));
console.log(armstrongNumber(584));
console.log(armstrongNumber(153));
console.log(armstrongNumber(111));