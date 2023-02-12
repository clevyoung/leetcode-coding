/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(!s) return true; // empty string
    if(s.trim().length === 0 && s.length !== 0){ // empty string that has length
        return true;
    }
    // string - remove white space, comma and toLowercase check if alphanumeric letters and replace non-alphanumeric letters with empty string  
    let str = s.replaceAll(
          /[^A-Za-z0-9]/g, "").toLowerCase();

    let reversedStr = str.split('').reverse().join('').toLowerCase();

    // compare string and reversed string 
    return str == reversedStr
 
    
};