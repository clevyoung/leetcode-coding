/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s === s.split('').reverse().join('') ) return s;
    let p1 =0, p2 =0;
    let longest = '';

    while(p2 < s.length){
        if(s[p1] === s[p2]){
            const substring = s.slice(p1, p2+1);
            if(substring === substring.split('').reverse().join('') ){
                if(substring.length > longest.length){
                    longest = substring;
                }
            }
        }

        p2++;

        if(p2 === s.length){
            p1++;
            p2 = p1+1;
        }
        
    }

    return longest;

};