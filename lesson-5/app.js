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

