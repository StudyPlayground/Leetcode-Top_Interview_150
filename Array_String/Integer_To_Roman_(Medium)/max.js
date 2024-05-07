/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const ROMAN = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    }
    const ROMAN_LIST = Object.entries(ROMAN);
    let result = '';

    for (let index = 0; index < ROMAN_LIST.length && num > 0;) {
        const [key, value] = ROMAN_LIST[index];
        if (num >= value) {
            result += key;
            num -= value;
        } else {
            index += 1;
        }
    }

    return result;
};