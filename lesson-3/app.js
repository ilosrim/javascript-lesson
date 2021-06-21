// 1
let ball = 73
if (ball >= 95)    console.log('A+')
else if (ball >= 90)    console.log('A')
else if (ball >= 85)    console.log('B+')
else if (ball >= 80)    console.log('B')
else if (ball >= 75)    console.log('C+')
else if (ball >= 70)    console.log('C')
else if (ball >= 65)    console.log('D')
else if (ball >= 60)    console.log('F')
else console.log('Undefined')

// 2
// min 4 max 12
let input = '123$321#'

if ((input.includes('@') || input.includes('#') || input.includes('$') || input.includes('$')) && input.length >= 6){
    console.log(`Strong password`)
}else if (input.length >= 4 && input.length <= 12){
    console.log(`Correct password`)
}else{
    console.log(`Not correct password`)
}