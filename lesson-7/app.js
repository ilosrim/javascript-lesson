// 1
let str1='bac'
let str2='cab'

str1.length===str2.length && str1.split('').sort().join()===str2.split('').sort().join() ? console.log(true) : console.log(false);

// 2
const array = [22,4,65,3,66,5,95,959,2,7,11,13];

function isPrime(num) {
    for (let i = 2; num > i; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return num > 1
}
console.log(array.filter(isPrime))

// 3
function toq(){
    return array.filter((value)=>value % 2 !== 0).sort((a,b)=>a-b)
}
console.log(toq())

// 4
function juft(){
    return array.filter((value)=>value % 2 === 0).sort((a,b)=>a-b)
}
console.log(juft())

const mevalar = ['olma', 'anor', 'anjiraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa']
let str = mevalar.join()
 
console.log(str.match(/['a']/gi).length);
