/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // bracket map
    const bracketMap = {
        '(' : ')',
        '[' : ']',
        '{' : '}'
    }
 
    const bracketStack = [];
 
    for(let x of s) {
        if(x in bracketMap){
            bracketStack.push(x);
        }else{
            if(x === bracketMap[bracketStack[bracketStack.length-1]]){
                bracketStack.pop();
            }else{
                return false;
            }
        }
 
    }
 
    if(bracketStack.length) return false;
 
     return true;
 
        
 };