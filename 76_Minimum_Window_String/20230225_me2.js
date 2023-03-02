/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let minSubStr = '';
    let windowStart = 0;
    let charMap = {}
    for (let windowEnd = 0; windowEnd < s.length; windowEnd++){
        const currentChar = s[windowEnd];
        if (t.includes(currentChar)) {
            if (!charMap[currentChar]) {
                charMap[currentChar] = 0;
            }

            charMap[currentChar]++;
        }

        if (Object.keys(charMap).length === t.length) {
            let currentSubStr = s.substring(windowStart, windowEnd + 1);
            if (minSubStr) {
                minSubStr = minSubStr.length < currentSubStr.length ? minSubStr : currentSubStr;
            } else {
                minSubStr = currentSubStr
            }

            if (t.includes(s[windowStart])) {
                if (charMap[currentSubStr] > 1) {
                    charMap[currentSubStr]--;
                } else {
                    delete charMap[currentSubStr]
                }
                windowStart++;
            } else {
                while (windowStart < currentSubStr.length) {
                    if (t.includes(currentSubStr[windowStart]) ) {
                        break;
                    } else {
                        windowStart++;
                    }
                }
            }
        }
        
    }
  
  



};


// t에 중복된 char이 포함되어 있을 수 있다.

// console.log(minWindow('ADO B ECODEBANC', 'ABC'))
console.log(minWindow('A DOBECODEBA NC', 'ABC'))
// console.log(minWindow('a', 'a'))
// console.log(minWindow('aa', 'a'))
// console.log(minWindow('a', 'aa'))
// console.log(minWindow('aabb', 'aba'))