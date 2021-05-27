'use strict'

// Для рекурсивной функции возведения числа в степень pow(base, exponent) 
// реализовать валидацию передаваемых значений и генерацию ошибок соостветствующих типов.
// Вызов функции заключить в блок try с отлавливанием исключительных ситуаций (ошибок) 
// разных типов с оповещением пользователя о типе наступившей ошибки.

const pow = (num, n) => {
    if (typeof num !== 'number') {
        throw new TypeError(`Value ${num} is not a number`);
    };
    if (typeof n !== 'number') {
        throw new TypeError(`Pow ${n} is not a number`);
    };
    if (n > 2000) {
        throw new ReferenceError(`Pow ${n} is so big!`);
    };
    if (n % 1 !== 0) {
        throw new ReferenceError(`Pow ${n} must be an integer number!`);
    };

    switch (true) {
        case (n === 0):
            return 1;
            break;
        case (n === 1):
            return num;
            break;
        case (n >= 1):
            return num * pow(num, n-1);
            break;
        case (n < 0):
            return 1 / num * pow(num, n + 1);
            break;
    };
};

try {
    console.log('pow(5, 3) :>> ', pow(5, 3));
    console.log('pow(5, 0) :>> ', pow(5, 0));

    // TypeError
    // console.log('pow(5, "asd") :>> ', pow(5, 'asd'));
    // console.log('pow(5, "asd") :>> ', pow('asda', 3));

    // RangeError
    console.log('pow(5, "asd") :>> ', pow(5, 2.578));
    // console.log('pow(5, "asd") :>> ', pow(5, 2578));  

} catch (error) {
    console.log('error.message :>> ', error.message);

    if (error instanceof TypeError) {
        console.log(error.name + ': you must input a number');
    };
    if (error instanceof ReferenceError) {
        console.log(error.name + ': you must correct your code');
    };
};




  

