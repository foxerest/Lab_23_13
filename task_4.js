//Реалізувати алгоритм бінарного пошуку
function binarySearch(value, array) {
    let first = 0;
    let last = array.length - 1;
    let position = -1;
    let found = false;
    let middle;
    while (found === false && first <= last) {
        middle = Math.floor((first + last)/2);
        if (array[middle] === value) {
            found = true;
            position = middle;
        } else if (array[middle] > value) {
            last = middle - 1;
        } else {
            first = middle + 1;
        }
    }
    return position;
}

const array = [-1, 2, 3, 6, 9, 10, 12, 20]
const elementToFind = 3;
const index = binarySearch(elementToFind, array);
const result =  index >= 0;
console.log(`Array: ${array}\nElement we are trying to find: ${elementToFind}\nResult: ${result}.`)
if (result) console.log(`The index of the element:${index}`)

// //Знайти елемент із найбільшою частотою повторень
// function findFrequencies(array){
//     return (array.reduce((numbers, element) => {
//         numbers[element] = (numbers[element] || 0) + 1;
//         return numbers;
//     }, {}))
// }
// function findMostFrequentElement(obj) {
//     let result;
//     for(let key in obj) {
//         !result ? result = key : ((obj[result] < obj[key]) ? (result = key): result);
//     }
//     return result;
// }
// const array = [1, 2, 3, 1, 3, 4, 2, 5, 1, 2, 5, 2, 2, 2];
// const obj = findFrequencies(array);
// const frequentElement = findMostFrequentElement(findFrequencies(array));
// console.log(`Most frequent element is ${frequentElement}, frequency: ${obj[frequentElement]}`);