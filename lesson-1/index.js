// 1
// P = 4 * a
var a = 17
var per = 4 * a
console.log('perimetri: '+per)

// 2
// S = a**2
var y = 12
var S = y**2
console.log('yuzasi: '+S)

// 3
// yuza = S=a*b, P = 2*(a+b)
var tomon1 = 5
var tomon2 = 7
var yuza = tomon1*tomon2
var perimetr = 2*(tomon1+tomon2)
console.log('yuzasi: '+yuza,'/ perimetri: '+perimetr)

// 4
// L = P*d
const P = 3.14
var d = 6
var l = P *d
console.log('uzunligi: '+l)

// 5
// v=k**3, sirt = 6 * k**2

var k = 8
var v = k**3
var sirt = 6 * (a**2)
console.log('hajmi: '+v, '/ sirti: '+sirt)

// 6
//hajmi v = a*b*c, to'la sirti s=2*(a*b+b*c+a*c)
let t1 = 2
let t2 = 8
let t3 = 10

let parHajmi = t1*t2*t3
let tSirt = 2*(t1*t2+t2*t3+t1*t3)
console.log('hajmi: '+parHajmi, '/ to\'la sirti: '+tSirt)

// 7
// uzunligi l=2*P*R, yuzasi s=P*R**2
let radius = 23
let dUzunligi = 2*P*radius
let dYuzasi = P*(radius**2)
console.log('doira uzunligi: '+dUzunligi, '/ doira yuzasi: '+dYuzasi)

// 8
let son1 = 12, son2 = 65
console.log('o\'rtachasi: '+(son1+son2)/2)

// 9
// o'rta geometrigini topish
let g1 = 3
let g2 = 3
// let oG = Math.sqrt(g1*g2)
// console.log('o\'rta geometri: '+oG)
console.log((g1*g2)**0.5)

// 10
let s1 = 8, s2 = 2
let yig = s1+s2
let kop = s1*s2
console.log('yig\'indisi: '+yig, '/ ko\'paytmasi: '+kop, '/ kvadrati: '+s1**2, s2**2)

// 11
let so1 = 8, so2 = 2
let yigi = so1+so2
let kopa = s1*s2
console.log('yig\'indisi: '+yig, '/ ko\'paytmasi: '+kop, '/ moduli: '+so1, so2)

// 12
let k1 = 12, k2 = 6
// let gip = Math.sqrt((k1**2)+(k2**2))
let gip = ((k1**2)+(k2**2))**0.5
let perim = k1 + k2 + gip
console.log('gipotenuza: '+gip, '/ perimetri: '+perim)

// 13
let rad1 = 15
let rad2 = 10
let aYuz1 = P * (rad1**2)
let aYuz2 = P * (rad2**2)
let yAyr = aYuz1-aYuz2
console.log('yuza 1: '+aYuz1, '/ yuza 2: '+aYuz2, '/ yuzalar ayirmasi: '+yAyr)