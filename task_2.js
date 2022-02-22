//Написати функцію, яка поверне знайде чи входить шукана стрічка у задану

const str = 'Javascript (JS) is a scripting languages, primarily used on the Web. It is used to enhance HTML pages and is commonly found embedded in HTML code';
const word = 'Javascript';

//Варіант перший
// console.log(`Here is string:\n${str}\nHere is word that we are searching for: ${word}\nResult: ${str.includes(word)}`);

//Варіант другий (не оптимізований)
let flag;
let temp;
for (let i = 0; i < str.length; i++) {
    temp = i + 1;
    flag = true;
    for (let j = 0; j < word.length; j++) {
        if ((i >= str.length)||(word[j] !== str[i++])) {
            flag = false;
            break;
        }
    }
    if (flag) break;
    else {
        i = temp;
    }
}
console.log(`Here is string:\n${str}\nHere is word that we are searching for: ${word}\nResult: ${flag}`)


//Написати функцію, яка поверне усі перестановки слова
// function findPermutations(word) {
//     if (word.length < 2 ){
//         return word
//     }
//     let permutationsArray = []
//     for (let i = 0; i < word.length; i++){
//         let char = word[i]
//
//         let remainingChars = word.slice(0, i) + word.slice(i + 1, word.length)
//
//         for (let permutation of findPermutations(remainingChars)){
//             permutationsArray.push(char + permutation) }
//     }
//     return permutationsArray
// }
// const word = '123';
// console.log(`Your word is \'${word}\'.`);
// console.log(`Here are all permutations: ${findPermutations(word)}`);


