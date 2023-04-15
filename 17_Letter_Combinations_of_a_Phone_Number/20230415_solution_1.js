/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const map = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    }

    const output = [];
    
    const backtrack = (current, i) => {
       if(i > digits.length -1){
        output.push(current);
        return;
       }
       // 123
       const letters = map[digits[i]]
       for(let l of letters){
            backtrack(current+l, i+1)
       }
    }
    backtrack('', 0);
    return output
};

console.log(letterCombinations('23'))