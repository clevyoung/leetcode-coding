/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // requirement - the length of the longest substring without repeating characters
    if(s.length === 1 || s.length ===0) return s.length;
    let p1 = 0;
    let maxLength = 0;
    const charMap = {};

    for(let p2=0; p2 < s.length; p2++){
        const curChar = s[p2];
        if(charMap.hasOwnProperty(curChar)&& charMap[curChar] >= p1){
            p1 = charMap[curChar]+1;
            maxLength = Math.max(maxLength, p2-p1);
        }else{
            maxLength = Math.max(maxLength, p2-p1+1);
        }

        charMap[curChar] = p2;
    }

    return maxLength;
};