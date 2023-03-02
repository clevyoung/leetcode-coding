/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    if (s === t) return s;
    if(s.length < t.length) return ''
    if (t.length === 1 && s.includes(t)) return t;
    
    let windowStart = 0;
    let minSubStr = '';
    const charMap = {};
    const tMap = {};

    for (let x = 0; x < t.length; x++){
        tMap[t[x]] = x;
    }

  
    for (let windowEnd = 0; windowEnd < s.length; windowEnd++){
        const currentChar = s[windowEnd];
        console.log(currentChar)
        if (t.includes(currentChar)) {
            if (!charMap[currentChar]) {
                charMap[currentChar] = 1;
                
            } else {
                charMap[currentChar]++;
            }
            
        }

        

        if (Object.keys(charMap).length === Object.keys(tMap).length) {
            let currentSubStr = s.substring(windowStart, windowEnd + 1);
            console.log('[currentSubStr]' + currentSubStr)
            console.log('[minSubStr]' + minSubStr)
            console.log(charMap)
            if (minSubStr) {
                minSubStr = minSubStr.length < currentSubStr.length ? minSubStr : currentSubStr
            } else {
                minSubStr = currentSubStr;
            }

            if (t.includes(s[windowStart])) {
                if (charMap[s[windowStart]] > 1) {
                    charMap[s[windowStart]]--
                    windowEnd--
                    
                } else {
                    delete charMap[s[windowStart]];    
                }
                windowStart++
            } else {
                windowStart++;
                windowEnd--
            }
        } 

    }

    return minSubStr;



};


// t에 중복된 char이 포함되어 있을 수 있다.

// console.log(minWindow('ADOBECODEBANC', 'ABC'))
console.log(minWindow('ADOBECODEBANC', 'ABC'))
// console.log(minWindow('a', 'a'))
// console.log(minWindow('aa', 'a'))
// console.log(minWindow('a', 'aa'))
// console.log(minWindow('aabb', 'aba'))