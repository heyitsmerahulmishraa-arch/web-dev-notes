// Decimal Number System = Base 10
// Octal Number System   = Base 8
// Hexadecimal Number System = Base 16

// 2847
// 2 * 1000 = 2000
// 8 * 100  =  800
// 4 * 10   =   40
// 7 * 1    =    7

// 10 ki power 0 = 1
// 10 ki power 1 = 10
// 10 ki power 2 = 100
// 10 ki power 3 = 1000

const decimalNumber = "2848";

const numberReverse = decimalNumber.split("").reverse().join("");

let result = 0;

for(let i = 0; i < decimalNumber.length; i++){
    let count = numberReverse[i] * Math.pow(10, i);
    console.log(result += count)
}