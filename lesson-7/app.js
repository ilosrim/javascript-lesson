// 1
let str1='cba'
let str2='cab'

str1.length===str2.length && str1.split('').sort().join()===str2.split('').sort().join() ? console.log(true) : console.log(false);

// 2
const array = [22,4,65,3,66,5,95,959,2,7,11,13];

// 2.1
// const isPrime = num => {
//     for (let i = 2; num > i; i++) num % i == 0 && false;
//     return num > 1
// };
// console.log(`Tub sonlar: ${array.filter(isPrime).sort((a,b)=>a-b)}`)

// var primeArray = []
// function tubFunc(array){
//     for(var i = 2; i <= array; i++){ 
//         if((i === 2) || (i === 3) || (i === 5) || (i === 7)){ 
//             return primeArray.push(i);
//         }
//         else if((i % 2 !== 0) && (i % 3 !== 0) && (i % 5 !== 0) && (i % 7 !== 0)){ 
//            return primeArray.push(i);
//         }
//     }
// }
// console.log(tubFunc([22,4,65,3,66,5,95,959,2,7,11,13]));

// const tub = () => array.filter((son)=>son==2 || son==3 || son==5 || son==7).sort((a,b)=>a-b)
// console.log(`Tub sonalr: ${tub()}`)

for (let i of array){
    let isPrime = true
    for (let j = 2; j<i/2; j++){
        if(i%j===0){
            isPrime = false
            break
        }
    }
    if(isPrime && i !==1){
        console.log(`Tub sonlar: ${i}`);
    }
}

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


let newArr = [151,6,559,626,595,659,59,26,595,626,595,52,5,95,626,59,59,5]

for (const num of newArr){
    if(num%2===0) console.log(`Juft son: ${num}`)
    else console.log(`Toq son: ${num}`);
}