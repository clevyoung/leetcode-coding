/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let minimum = Infinity;
    let p1 = 0;
    let p2 = 0;
    let temp = p2;
    const charMap = {}
    while (p2 < s.length) {
        const curChar = s[p2]; // 현재 character
        if (Object.keys(charMap).length === t.length) {
            p1++;
            minimum = Math.min(minimum, p2 - p1 + 1);
            if (charMap[curChar] > 1) {
                charMap[curChar]--;
            } else if (charMap[curChar] === 1) {
                delete charMap[curChar]
            }
        } else {
            if (t.includes(curChar)) {
                charMap[curChar] = 0;
                charMap[curChar]++;
            }
            p2++
        }
    }
    return minimum

};