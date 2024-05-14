/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
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
    let sIndex = 0;
    let result = 0;

    for (let index = 0; index < ROMAN_LIST.length && sIndex < s.length;) {
        const [key, value] = ROMAN_LIST[index];
        if (s.slice(sIndex, sIndex + key.length) === key) {
            result += value;
            sIndex += key.length;
        } else {
            index += 1;
        }
    }

    return result;
};