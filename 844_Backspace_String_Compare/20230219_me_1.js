/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const buildString = (str) => {
    const builtArray = [];

    for (let i = 0; i < str.length; i++){
        if (str[i] === '#') {
            builtArray.pop();
        } else {
            builtArray.push(str[i]);
        }
            
    }

    return builtArray

}

var backspaceCompare = function(s, t) {
    const finalS = buildString(s);    
    const finalT = buildString(t);

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
