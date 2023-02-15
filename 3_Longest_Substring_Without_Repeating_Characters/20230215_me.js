/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // abcabcbb
  
    // pwwkew
  
    // b b b b b
  
    // vfvd
  
    // au
  
    // a
    if(s === '') return 0;
    let p1 = 0;
    let p2 = 0;
    let maxLength = 1;
  
    while(p2 < s.length) {
        if(p1 === p2){
            p2++
        }else if(p2 > p1){
          if(s.substring(p1, p2).indexOf(s[p2]) !== -1){
              maxLength = Math.max(maxLength, p2-p1)
              p1++;
          }else{
              maxLength = Math.max(maxLength, p2-p1+1)
              p2++;
          }
        }
    }
  
    return maxLength;
  
  };