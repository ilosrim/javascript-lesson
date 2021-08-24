console.log(4<<2); //16  *** 16 8 4 2 1 ***
                         //  0 0 1 0 0 = 4
                         //  1 0 0 0 0 = 16
console.log(5<<2); //20
                         //  0 0 1 0 1 = 5
                         //  1 0 1 0 0 = 20
console.log(6<<2); //24
                         //  0 0 1 1 0 = 6
                         //  1 1 0 0 0 = 24
console.log(7<<2); //28
                         //  0 0 1 1 1 = 7
                         //  1 1 1 0 0 = 28

console.log(4>>2);
console.log(5>>2);
console.log(6>>2);
console.log(7>>2);

// CallBack function
// const Instagram = (user, callback) => {
//     setTimeout(() => {
//         return callback(`Hello ${user}`);
//     }, 2000);
// };
// Instagram(`Ali`, (data)=>{
//     console.log(data);
// });

// ////
// const Facebook = (user) => {
//     setTimeout(()=>{
//         console.log(`Hello ${user}`);
//     }, 5000)
// }
// Facebook('Vali')

let login = 'abc';
let passwd = 1233;

const instagram = new Promise((resolve, reject) => {
    setTimeout(()=>{
        if (login === 'abc' && passwd === 123){
            resolve('Welcome to Instagram!')
        }else{
            reject('Login or passwd error!')
        }
    },2000)
})

instagram.then(res => console.log(res)).catch(err => console.log(err));

//end js