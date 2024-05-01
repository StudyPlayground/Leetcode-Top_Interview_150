// 2차 (PASS)
// 시간복잡도 224 -> 59ms 로 단축

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const countBoard = Array.from({length: 26}, () => 0);

    for (const letter of magazine.split('')) {
        countBoard[getCharCode(letter)] += 1;
    }

    for (const letter of ransomNote.split('')) {
        if (countBoard[getCharCode(letter)] === 0) {
            return false;
        }
        countBoard[getCharCode(letter)] -= 1;
    }

    return true;

    function getCharCode (str) {
        return str.charCodeAt() - 'a'.charCodeAt();
    }    
};

// 1차 (PASS)
// 시간복잡도, 공간복잡도 매우 높음

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const ransomNoteList = ransomNote.split('');
    const magazineHashMap = getHashMap(magazine);

    for (const letter of ransomNoteList) {
        if (!magazineHashMap[letter]) {
            return false;
        }

        magazineHashMap[letter] -= 1;
    }

    return true;

    function getHashMap (str) {
        const strList = str.split('');
        return strList.reduce((acc, cur) => ({
            ...acc,
            [cur]: acc[cur] ? acc[cur] + 1 : 1,
        }), {})
    }
};