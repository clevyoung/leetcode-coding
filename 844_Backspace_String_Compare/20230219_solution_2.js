/**
 * 1st Hint : Utilize the original strings.
 * 2nd Hint : Use the 2 pointer technique.
 * 3rd Hint : Start from the end of the strings!
 * 
 * Optimal Solution
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
*/

var backspaceCompare = function (s, t) { 
    let p1 = s.length - 1, p2 = t.length - 1;

    while (p1 >= 0 && p2 >= 0) {
        if (s[p1] === '#' || t[p2] === '#') {
            if (s[p1] === '#') {
                let backCount = 2;
                while (backCount >= 0) {
                    p1--;
                    backCount--;
                    if (s[p1] === '#') {
                        backCount = backCount + 2;
                    }
                }
            }

            if (t[p2] === '#') {
                let backCount = 2;
                while (backCount >= 0) {
                    p2--;
                    backCount--;
                    if (t[p2] === '#') {
                        backCount = backCount + 2;
                    }
                }
            }
        } else {
            if (s[p1] !== t[p2]) {
                return false;
            }
        }
    }

    return true;

}