/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s.length <= 1) return s.length;

    let windowStart = 0;
    let windowEnd = 0;
    let seenChars = {};
    let longest = 0;

    while (windowEnd < s.length) {
        if (seenChars[s[windowEnd]] >= windowStart) { // seenChars[s[windowEnd]]가 0일 때 false로 평가된다.
            longest = Math.max(longest, windowEnd-windowStart);
            windowStart = seenChars[s[windowEnd]] + 1;
        } else {
            longest = Math.max(longest, windowEnd - windowStart + 1)
            
        }
        seenChars[s[windowEnd]] = windowEnd;
        windowEnd++;
    }// abcabcbb

    return longest

};

console.log(lengthOfLongestSubstring('abcabcbb'))