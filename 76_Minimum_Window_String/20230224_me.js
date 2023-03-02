/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const charMap = {};
    let windowStart = 0;
    let minChar = '';

    // 빈도수 넣는 것으로 다시 시도 

    for(let windowEnd = 0; windowEnd<s.length; windowEnd++){
        const currentChar = s[windowEnd];

        if(t.includes(currentChar)){
            charMap[currentChar] = windowEnd;

        }

        if (Object.keys(charMap).length === t.length) {
            let currentSubStr = s.substring(windowStart, windowEnd + 1);
            console.log(currentSubStr)
            console.log(windowStart)
            console.log(windowEnd)
            if (minChar.length === 0) {
                    minChar = currentSubStr
            } else {
                minChar = minChar.length < currentSubStr.length ? minChar : currentSubStr;
            }

            if (t.includes(s[windowStart])) {
                console.log(currentSubStr)
                console.log(windowStart)
                if (charMap[s[windowStart]] !== undefined) {
                    console.log(charMap)
                    delete charMap[s[windowStart]]
                    if (Object.keys(charMap).length === t.length) {
                        console.log(currentSubStr)
                    }
                    windowStart++
                    
                }
            } else {
                console.log(currentSubStr)
                windowStart++
                windowEnd--
            }
           

        }

        

    }


    return minChar;

};

console.log(minWindow('ADOBECODEBANC', 'ABC'))