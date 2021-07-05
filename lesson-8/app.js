let arr = ['apple', 'orange', 'Apelsin', 'ananas', 'bodom']

let str = arr.join()
// console.log(`A harfi soni: ${str.match(/['a']/gi).length}`);

const find = (arr) => {
    let strA = arr.join().match(/['a']/gi).length
    let strB = arr.join().match(/['b']/gi).length
    console.log(`A harflar soni:`,strA, `/ B harflar soni:`, strB);
}
find(arr)