// 1
for(let i=10; i>=0; i--){
    // console.log(i)
}

// 2
for (let i=0; i<10; i++){
    if(i%2!=0){
        // console.log(i)
    }
}

// 3
for (let i=0; i<10; i++){
    if(i%2==0){
        // console.log(i)
    }
}

// 4
for (let i=0; i<100; i++){
    if(i%3==0){
        // console.log(i)
    }
}

// 5
for (let i=0; i<100; i++){
    if(i%5==0){
        // console.log(i)
    }
}

// 6
for (let i=0; i<100; i++){
    if(i%3==0 && i%5==0){
        console.log(i)
    }
}

let str = `asror Doston Xoliq Nematullo baxrom joxon azim Turg'un eshmat Shuhrat`
let newArr = str.split(` `)
newArr.sort( (a, b) => a.localeCompare(b, 'en', {ignorePunctuation: true}));
console.log(newArr)

// Masalalar

// 1
// 1m = 100cm
let L = 1000
let m = (L*1)/100
console.log(`${m} metr`)

// 2
// 1t = 1000kg
let M = 10
let T = (M*1)/1000
console.log(`${T} tonna`)

// 4
let A = 10
let B = 2
console.log(`A kesmada B kesma ${A/B} marta joylashishi mumkin`)

// 5
console.log(`A kesmada B kesma ${A/B} marta joylashishi mumkin. A kesmada B kesmaning ${(A/B)-B} qisimlari joylashmagan`)

// 6
// ikki xonali son berilgan, avval o'nliklar xonsidagi raqami, keyin birliklar xonasidagi raqami chiqarilsin
let num = 21
console.log(`O'nliklar xonasidagi raqam: ${num.toString()[0]}, birliklar xonasidagi raqam: ${num.toString()[1]}`)

// 7
let numStr = num.toString().split('')
let a = numStr[0], b = numStr[1]

let num1 = parseInt(a, 10)
// console.log(Number.parseInt(a))
console.log(typeof a)