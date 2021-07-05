let arr = ['apple', 'orange', 'Apelsin', 'ananas']

let str = arr.join()
// console.log(`A harfi soni: ${str.match(/['a']/gi).length}`);

const find = (arr) => {
    let str = arr.join().match(/['a']/gi).length
    console.log('A harflar soni: ', str);
}
find(['apple', 'orange', 'Apelsin', 'ananas'])