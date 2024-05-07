/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let h = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000
    }
    let result = 0;
    for(let i =0 ; i < s.length  ; i++ ){
        if(h[s[i]] < h[s[i+1]]){
            temp = h[s[i+1]] - h[s[i]];
            result += temp
            i++
        }
        else{
            result += h[s[i]];
        }
    } 
    return result;
};