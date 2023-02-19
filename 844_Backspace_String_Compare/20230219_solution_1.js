/**
 * verify the constrains
 * 1. What happens when two #'s appear beside each other?
 * Delete the two values before the first #.
 * 2. What happen to # when there is no character to remove?
 * It deletes nothing then, just like backspace would.
 * 3. Are two empty strings equal to each other?
 * Yes, consider two empty  strings equal to each other.
 * 4. Does case sensitivity matter?
 * Yes it does, "a" does not equal "A".
 * 
 * Brute force solution
 * Time Complexity - O(a+b)
 * Space Complexity - O(a+b)
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const buildString = (str) => {
    const builtArray = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== '#') {
            builtArray.push(str[i])
        } else {    
            builtArray.pop()
        }
    }   

    return builtArray
}
var backspaceCompare = function(s, t) {
    const finalS = buildString(s)
    const finalT = buildString(t)

    if (finalS.length !== finalT.length) {
        return false;
    } else {
        for (let i = 0; i < finalS.length; i++){
            if (finalS[i] !== finalT[i]) {
                return false;
            }
        }
    }

    return true;

};


