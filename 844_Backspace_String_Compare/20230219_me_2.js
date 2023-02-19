/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var backspaceCompare = function(s, t) {
    let p1 = s.length - 1;
    let p2 = t.length - 1;

    while (p1 >= 0 || p2 >= 0) {
        if (s[p1] === '#' || t[p2] === '#') {
            if (s[p1] === '#') {
                let count = 2;
                while (count > 0) {
                    p1--;
                    count--;
                    if (s[p1] === '#') {
                        count = count + 2;
                    }
                }
            }

            if (t[p2] === '#') {
                let count = 2;
                while (count > 0) {
                    p2--;
                    count--;
                    if (t[p2] === '#') {
                        count = count + 2;
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

};
