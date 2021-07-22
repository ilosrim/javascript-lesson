// const obj = {
//     id: 1,
//     username: 'panda',
//     gmail: 'panda@panda.com',
//     salary: 1200
// }

// let persons = [
//    { name: "Ali", age: 17, budget: 3330 },
//    { name: "Vali", age: 40, budget: 6210 },
//    { name: "Hasan", age: 16, budget: 2140 },
//    { name: "Husan", age: 31, budget: 4660 },
//    { name: "John", age: 23, budget: 8440 },
// ];
// const results = persons.reduce((total, temp) => {
//    if (temp.age > 17) {
//       total += temp.budget
//    }
//    return total
// }, 0)
// console.log('result', results)


// let objInArray = Object.entries(obj)
// // console.log(objInArray);

// objInArray.map((value, index)=>{
//     // console.log(value, index);
// })

// // ***********************************//
// function User (name, age, salary, admin){
//     this.userName = name;
//     this.userAge = age;
//     this.userSalary = salary;
//     this.isAdmin = admin;
// }
// const user1 = new User ('Mirsolih', 23, 200_000, true);
// const user2 = new User ('John', 28, 150_000, false);
// console.log(user1, user2);

// class Notebook {
//     constructor(model, hdd, ssd, ram, vram){
//         this.notModel = model;
//         this.notHDD = hdd;
//         this.notSSD = ssd;
//         this.notRAM = ram;
//         this.notVRAM = vram;
//     }
// }

// const myComp = new Notebook ('Acer / Core i3 10', '1T', '256GB', '16GB', '6GB')
// console.log(myComp.notModel);

// //***********************************//
// // js masala 1
// let user = {name: 'Mirsolih'};
// let userAge = {age: 23};
// let userJob = {job: 'JS Developer'}
// /*
// {
//     name: 'Mirsolih',
//     age: 23,
//     job: 'JS Developer'
// }
// */
// const person = Object.assign(user, userAge, userJob)
// // console.log(person);

// // 2-usul
// let allObject = { ...user, ...userAge, ...userJob}
// // console.log(allObject);


// // js masala 2
// const userNum = {
//     user1: 1111,
//     user2: 2222,
//     user3: 3333,
//     user4: 4444,
//     user5: 5555,
//     user6: 6666,
//     user7: 7777
// }
// let objKeys = Object.keys(userNum)
// let objValues = Object.values(userNum)
// // console.log(objKeys);
// // console.log(objValues);cd 

// // js masala 3
// const salary = {
//     ali: 25000,
//     vali: 22000,
//     hasan: 26000,
//     husan: 23000
// }
// // 1-usul
// function personSalary(salary){
//     if(!salary){
//         console.log(0);
//     }else{
//         let salVal = Object.values(salary)
//         let count = 0
//         salVal.filter(value=>{
//             count+=value
//         })
//         console.log(count);
//     }
// }
// personSalary(salary)
// // 2-usul
// const peSal = (salary)=>{
//     let sum = 0
//     for (let i in salary){
//         sum+=salary[i]
//     }
//     console.log(sum);
// }
// peSal(salary)

// // js masala 4 /key'ning turi number bo'las uni 3 ga ko'paytirib yozing
// const data = {
//     with: 200,
//     height: 300,
//     title: 'Object menu'
// }
// function dataFunc(obj){
//     for(let i in obj){
//         if(typeof obj[i] === 'number'){
//             obj[i]= obj[i]*3
//         }
//     }
//     return obj
// }
// console.log(dataFunc(data));

// // js masala 5
// let abc = ['a','b','c','d','e']
// function removeFunc(array,i){
//     return [...array.slice(0,i),...array.slice(i+1)]
// }
// console.log(removeFunc(abc,2));

// // js masala 6
// // max
// // 1-usul
// console.log(Math.max(54,95,87,26,-846,-8));

// // 2-usul
// let numArr = [31,54,9,-64,6,-16,2,-26,565]
// console.log(Math.max(...numArr));

// // 3-usul
// function max(...numbers){
//     let result = -Infinity
//     for(let number of numbers){
//         if(number > result) result = number
//     }
//     return result
// }
// console.log(max(66,48,8,61,-4,6,-5,-4,66,6,-1));

// // js masala 7
// // 1
// for(let i = '*'; i.length<8; i+='*'){
//     console.log(i);
// }

// // 2
// let result = ''
// let row1 = ' * * * * * * * *'
// let row2 = '* * * * * * * *'

// for(let i = 0; i<8; i++){
//     if(i%2==0) result += row1 +'\n'
//     else result += row2 +'\n'
// }
// console.log(result);

// // vazifa 1
// let gap = `O'zbekistonning 2021-yildagi jami qarzi $25 mlrdga yetdi`
// let son = gap.match(/\d+/g).map(val=>Number(val)).reduce((a,b)=>a+=b,0)
// console.log(son);

// // vazifa 2
// // Ixtiyoriy so'zni ichida nechta unli harf borligi aniqlansin.
// // Bunda so'z o'zbek lotin alifbosida ekanligi hisobga olinsin.

// let arr = [`a`,`e`,`i`,`u`,`o'`,`o`];
// const tekshir = gapArr.map(val=>console.log(val))
// console.log(gapArr.forEach(val=>console.log(val)));

// let gap = 'Assalomu alaykum';
// // 1-usul
// let unlilarSoni = gap.match(/[`a`|`e`|`i`|`u`|`o`|`o'`|`u`]/gi).length
// console.log(unlilarSoni);

// // 2-usul
// let gapArr = gap.split('');
// const uSoni = gapArr.reduce((count, val) => {
//     if(val.toLocaleLowerCase()=='a' || val.toLocaleLowerCase()=='e' || val.toLocaleLowerCase()=='i' || val.toLocaleLowerCase()==`o'` || val.toLocaleLowerCase()=='o' || val.toLocaleLowerCase()=='u'){
//         count+=val.length
//     }
//     return count
// },0)
// console.log(uSoni);


// let gap = 'Assalomu alaykum';
// let gapArr = gap.split('');
// let count = 0;
// for(const i of gapArr){
//     if(i.toLocaleLowerCase()=='a' || i.toLocaleLowerCase()=='e' || i.toLocaleLowerCase()=='i' || i.toLocaleLowerCase()==`o'` || i.toLocaleLowerCase()=='o' || i.toLocaleLowerCase()=='u'){
//         count+=i.length
//     }
// }
// console.log(count);

// Tub son topish funksiyasi
// 1
// function showPrimeNumbers(limit){
//     for(let number = 2; number <= limit; number++){
//         let isPrime = true;
//         for(let factor = 2; factor<number; factor++){
//             if(number%factor===0){
//                 return isPrime = false;
//                 break;
//             }
//         }
//         if(isPrime) console.log(number);
//     }
// }

// 2
function showPrimeNumbers(limit){
    for (let number = 2; number <= limit; number++)
        if (isPrime(number)) console.log(number);
}

function isPrime(number){
    for (let factor = 2; factor < number; factor++)
        if(number%factor===0)   return false;
        return true;
}
showPrimeNumbers(20);