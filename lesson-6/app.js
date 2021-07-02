// 1
// let num = Math.round(14.7)


function ceilFunc(number){
    number *= 10
    let a = parseInt(number/10)
    let b = number%10
    if(b>5){
        return a+1
    }return a
}
console.log(ceilFunc(12.6))

// 2
const powFunc = (s,p) => s**p
console.log(powFunc(5,3));

// 3
const ildiz = son => son**0.5
console.log(ildiz(81))

// 4 / abs

function absFunc(number){
    if(number<0){
        return number*(-1)
    }else{
        return number
    }
}
console.log(absFunc(4))

// 5 / ceil()
function ceilFunc(number){
    number *= 10
    let a = parseInt(number/10)
    let b = number%10
    if(b<=9){
        return a+1
    }
}
console.log(ceilFunc(11.9))

// 6 / floor()
function floorFunc(number){
    number *= 10
    let a = parseInt(number/10)
    let b = number%10
    if(b>9){
        return a+1
    }return a
}
console.log(floorFunc(13.9))

// 7 / min
// console.log(Math.min(4,2,3,4,7,4,5,6));
// y = ax^2 + bx + c / min = c - b^2/4a | y = a(x - h)^2 + k / min = k

let y = (2*1**2) + 3+4 + 5
let min = 5 - 3**(2/4*2)
console.log(min)

function minFunc(number=[4,2,3,4,7,4,5,6]){
    for(i of number){
        let a = 0;
        return ++i
    }
}

// 1)
// let arr = [1,2,3,4]
var arr = [5,6,7,2,4]
var small = arr[0]

for(i in arr){
    if(arr[i] < small){
        small = arr[i]
    }
}
console.log(small);

// 2)
function minFunc2(arr){
    var small = arr[0]

    for(i in arr){
        if(arr[i] < small){
            small = arr[i]
        }
    }
    console.log(small)
}
minFunc([5,6,7,2,4]);

// 3)
// let arr = [6,7,2,8,-5,4,2]
// console.log(small[0])

function minFun3(arr){
    let small = arr.sort((a,b) => a - b) //[3,4,5,6,7,8,22]
    console.log(small[0])
}
minFun3([6,7,22,8,5,4,3]);

// 8 / max
// console.log(Math.max(5,2,3,4,4,7,5,6));
function maxFunc(arr){
    let big = arr.sort((a,b) => a - b) //[1,2,3,4]
    let lastIndex = big.length - 1
    console.log(big[lastIndex])
}
maxFunc([22,6,7,2,8,5,4,2])


// 7,8
// let arr2 = [6,1,8,3,5,7]
// let smallest = arr2.reduce((prev,next) => prev>next ? next : prev)
// let larges = arr2.reduce((prev,next) => prev>next ? next : prev)

// console.log(smallest, larges);

// 9
// let rollDie = getRandomizer(1,6)
// let result = ''
// for (let i = 0; i<1000; i++){
//     result += rollDie() + ''
// }
// console.log(result);

// let cs = (x,y) => x+(y-x+1)*crypto.getRandomValues(new Uint32Array(1))[0]/2**32|0

// console.log(cs(4,8))

// var array = new Uint32Array(10);
// window.crypto.getRandomValues(array);

// console.log("Your lucky numbers:");
// for (var i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }