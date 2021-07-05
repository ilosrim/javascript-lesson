// 1
let str1='cba'
let str2='cab'

str1.length===str2.length && str1.split('').sort().join()===str2.split('').sort().join() ? console.log(true) : console.log(false);

// 2
const array = [22,4,1,2,3,4,5,959,2,7,11,1,65,3];

let sum = 0
array.slice(2,6).forEach((value)=>{
    sum+=value
})
console.log(sum);

let sum2 = 0
array.forEach((v,i)=>{
    if(i>2 && i < 6){
        sum2 += i
    }
})
console.log(sum2);

console.log(array.filter((value)=>value===65))
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
const mevalar = ['olma', 'anor', 'anjirAAAAAAAAAAA']
let str = mevalar.join()
console.log(`A harfi soni: ${str.match(/['a']/gi).length}`);


let newArr = [151,6,559,626,595,659,59,26,595,626,595,52,5,95,626,59,59,5]

for (const num of newArr){
    if(num%2===0) console.log(`Juft son: ${num}`)
    else console.log(`Toq son: ${num}`);
}

// min-max
// 1
let minMaxArr = [515,484,658,64,11,4,54,61,46,44,65,98,878,7,65]

console.log(Math.min(...minMaxArr));
console.log(minMaxArr.sort((a,b)=>a-b)[0]);

// 2
console.log(Math.max(...minMaxArr));
let sortArr = minMaxArr.sort((a,b)=>a-b)
let lastIndexValue = sortArr.length - 1
console.log(sortArr[lastIndexValue]);