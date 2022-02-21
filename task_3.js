// Написати функцію, яка порахує факторіал натурального числа
function factorial(n) {
    if (n<0) return 'err';
    return n ? n * factorial(n - 1) : 1;
}
n = 4;
console.log(`4! = ${factorial(n)}`);