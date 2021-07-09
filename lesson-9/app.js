const arr = [
    {
        id: 1,
        name: 'Hasan',
        age: 9,
        salary: 120,
    },
    {
        id: 2,
        name: 'Husan',
        age: 15,
        salary: 130,
    },
    {
        id: 3,
        name: 'Eshmat',
        age: 11,
        salary: 100,
    },
]
function slaryFunc(){
    let count = 0
    arr.filter((value)=>{
        if(value.age>10){
            count+=value.salary
        }
    })
    console.log(count);
}
slaryFunc()



// function idSort(num){
//     console.log(arr.filter((value) =>  value.id == num))
//     // arr.forEach((val)=>  val.id == num && console.log(val))
// }
// idSort(5)
// idSort(2)

// 1
// arr.forEach((value)=>{
//     value.status = value.id
// })
// // 2
// arr.sort((a, b) => a.age-b.age)
// console.log(arr);



// const maxSpeed = {
//     car: 300, 
//     bike: 60, 
//     motorbike: 200, 
//     airplane: 1000,
//     helicopter: 400, 
//     rocket: 8 * 60 * 60
// };
// const sortable = Object.entries(maxSpeed)
//     .sort(([,a],[,b]) => a-b)
//     .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

// console.log(sortable);