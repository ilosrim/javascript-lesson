const obj = {
    id: 1,
    username: 'panda',
    gmail: 'panda@panda.com',
    salary: 1200
}

let objInArray = Object.entries(obj)
// console.log(objInArray);

objInArray.map((value, index)=>{
    // console.log(value, index);
})

// js masala 1
let user = {name: 'Mirsolih'};
let userAge = {age: 23};
let userJob = {job: 'JS Developer'}
/*
{
    name: 'Mirsolih',
    age: 23,
    job: 'JS Developer'
}
*/
const person = Object.assign({}, user, userAge, userJob)
// console.log(person);

// js masala 2
const userNum = {
    user1: 1111,
    user2: 2222,
    user3: 3333,
    user4: 4444,
    user5: 5555,
    user6: 6666,
    user7: 7777
}
let objKeys = Object.keys(userNum)
// console.log(objKeys);

// js masala 3
const salary = {
    ali: 25000,
    vali: 22000,
    hasan: 26000,
    husan: 23000
}
// 1-usul
function personSalary(salary){
    if(!salary){
        console.log(0);
    }else{
        let salVal = Object.values(salary)
        let count = 0
        salVal.filter(value=>{
            count+=value
        })
        console.log(count);
    }
}
personSalary(salary)
// 2-usul
const peSal = (salary)=>{
    let sum = 0
    for (let i in salary){
        sum+=salary[i]
    }
    console.log(sum);
}
peSal(salary)

// js masala 4 /key'ning turi number bo'las uni 3 ga ko'paytirib yozing
const data = {
    with: 200,
    height: 300,
    title: 'Object menu'
}
function dataFunc(obj){
    for(let i in obj){
        if(typeof obj[i] === 'number'){
            obj[i]= obj[i]*3
        }
    }
    return obj
}
console.log(dataFunc(data));

// js masala 5
let abc = ['a','b','c','d','e']
function removeFunc(array,i){
    return [...array.slice(0,i),...array.slice(i+1)]
}
console.log(removeFunc(abc,2));

// js masala 6
// max
// 1-usul
console.log(Math.max(54,95,87,26,-846,-8));

// 2-usul
let numArr = [31,54,9,-64,6,-16,2,-26,565]
console.log(Math.max(...numArr));

// 3-usul
function max(...numbers){
    let result = -Infinity
    for(let number of numbers){
        if(number > result) result = number
    }
    return result
}
console.log(max(66,48,8,61,-4,6,-5,-4,66,6,-1));

// js masala 7
// 1
for(let i = '*'; i.length<8; i+='*'){
    console.log(i);
}

// 2
let result = ''
let row1 = ' * * * * * * * *'
let row2 = '* * * * * * * *'
for(let i = 0; i<8; i++){
    if(i%2==0) result += row1 +'\n'
    else result += row2 +'\n'
}
console.log(result);