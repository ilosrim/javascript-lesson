// 1
let str1='bac'
let str2='cab'

str1.length===str2.length && str1.split('').sort().join()===str2.split('').sort().join() ? console.log(true) : console.log(false);

// 2
const array = [22,4,65,3,66,5,95,959,2,7,11,13];

// 2.1
const isPrime = num => {
    for (let i = 2; num > i; i++) num % i == 0 && false;
    return num > 1
};
console.log(`Tub sonlar: ${array.filter(isPrime).sort((a,b)=>a-b)}`)

// 2.2
const toq = () => array.filter((value)=>value % 2 !== 0).sort((a,b)=>a-b)
console.log(`Toq sonalr: ${toq()}`)

// 2.3
const juft = () => array.filter((value)=>value % 2 === 0).sort((a,b)=>a-b)
console.log(`Juft sonalr: ${juft()}`)

// 
const mevalar = ['olma', 'anor', 'anjiraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa']
let str = mevalar.join()
console.log(`A harfi soni: ${str.match(/['a']/gi).length}`);
