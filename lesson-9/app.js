const arr = [
    {
        id: 1,
        name: 'Hasan',
        age: 21,
    },
    {
        id: 2,
        name: 'Husan',
        age: 15,
    },
    {
        id: 3,
        name: 'Eshmat',
        age: 33,
    },
    {
        id: 4,
        name: 'Toshmat',
        age: 23,
    },
    {
        id: 5,
        name: 'G\'ishmat',
        age: 25,
    }
]
arr.forEach((value)=>{
    value.status = 5
})

arr.sort((a, b) => a.age-b.age)
// arr.sort((a, b) => a.id-b.id)
console.log(arr);





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