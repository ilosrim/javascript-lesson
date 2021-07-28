let login = 'abc';
let passwd = 1231;

// console.log('started...');
const twitter = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(login === 'abc' && passwd === 123){
            resolve('Twitterga xush kelibsiz!')
        }else{
            reject('Login yoki password xato!')
        }
    }, 2000)
})

// twitter.then(result=>console.log(result)).catch(error=>console.log(error))
const LogIn = async()=>{
    console.log('started...2');
    try{
        const user = await twitter;
        console.log(user);
    }
    catch(error){
        console.log(error);
    }
    console.log('Finish');
}
LogIn();