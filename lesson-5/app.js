let a = 'BCC'
let b = 'BAC'
let a1 = a.split('').sort()
let a2 = b.split('').sort()
function test(){
    for(let i=0; i<a1.length; i++){
        for(let j=0; j<a2.length; j++){
            if(a1[i]===a2[i]) return true;
            else return false;
        }
    }
}
console.log(test())

const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
console.log(['number'], numbers, numbers.length)

const arr = [
    'Mirsolih',
    117,
    true,
    {
        age: 23,
        skils: ['HTML', 'CSS', 'SCSS', 'Bootstrap', 'JavaScript', 'React JS', 'Node JS', 'Mongo DB']
    },
    {
        country: 'Uzbekistan',
        city: 'Fergana'
    }
]
let arr2 = arr.length - 1
console.log(arr[arr2])

const arr3 = Array() // creates an an empty array
console.log(arr3)
const eightEmptyValues = Array(8).fill('x')
console.log(eightEmptyValues) // [empty x 8]
const newEightEmptyValues = Array(8).fill('y')
console.log(eightEmptyValues.concat(newEightEmptyValues))

const fruits = ['banana', 'orange', 'mango', 'lemon']
let index = fruits.indexOf('banana')
index != -1 ? console.log('This fruit does exist in the array') : console.log('This fruit does not exist in the array')


function abc(age){
    age>14 ? console.log('Kirish mumkin') : console.log('Kirish mumkin emas!')
}
abc(14)

let age = 15
age>14 ? console.log('Kirish mumkin') : console.log('Kirish mumkin emas!')
