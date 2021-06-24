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

let str = `asror Doston Xoliq Nematullo baxrom`
let newArr = str.split(` `)
newArr.sort( (a, b) => a.localeCompare(b, 'en', {ignorePunctuation: true}));
console.log(newArr)