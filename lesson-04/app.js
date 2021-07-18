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

let str = ' pdp academy'
str = str.repeat(10)
console.log(str)

for(let i=0; i<1; i++){
    console.log(repAtr.replace(/pdp/gi, 'it'))
}

console.log(str.match(/p/gi).length)

let sumP = 0
for(let i=0; i<str.length; i++){
    if(str.charAt(i) === 'p'){
        sumP++
    }
}
console.log(sumP)

let sumD = 0
for(let i=0; i<str.length; i++){
    if(str.charAt(i) === 'd'){
        sumD++
    }
}
console.log(sumD)

console.log(`p va d harflar o'rta geometri ${(sumP+sumD)/2}`)
console.log(`p va d harflar o'rta arifmetrigi ${Math.sqrt(sumP+sumD)}`)

var number = 123456
var toStr = number.toString()
var count = 0
var juft = 0
for(let i=0; i<toStr.length; i++){
    count += Number.parseInt(toStr[i])
    if(Number.parseInt(toStr[i]) % 3 == 0){
       juft++
    }
}
console.log(count, juft)

var str = '3a9b0c3d2e9f8g'
// console.log(str.match(/\d+/g))
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
// console.log(sentence.replace(/[^a-zA-Z .]/g,""))

let a = 'BCA'
let b = 'BAC'
console.log(a.localeCompare(b, 'en', {sensitivity: 'base'}))
let a1 = a.split('').sort()
let a2 = b.split('').sort()
console.log(a1)
function test(){
    for(let i=0; i<a1.length; i++){
        for(let j=0; j<a2.length; j++){
            if(a1[i]===a2[i]) return true;
            else return false;
        }
    }
}
console.log(test())