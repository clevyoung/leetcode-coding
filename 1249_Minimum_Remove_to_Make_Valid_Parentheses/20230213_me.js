/**
 * @param {string} s
 * @return {string}
 */
// Test Cases는 다 통과했는대 Output Limit Exceeded가 뜬다.
var minRemoveToMakeValid = function(s) {
    // verify constraints
    // iterate over the string
    const stack = [];

    for(let i =0 ;i < s.length;i++){
        if(s[i] === '('){
            stack.push(s[i]);
        }else if(s[i] === ')'){
            if(stack.length === 0){
                s = s.slice(0, i) + s.slice(i+1, s.length+1);
                console.log(s)
                i--;
            }else{
                stack.pop();
            }
        }
    }
    
    if(stack.length){
        let index = 1;
         while(index <= stack.length){
         let position = s.lastIndexOf('(');
         s = s.slice(0, position) + s.slice(position + 1, s.length+1);
         index++;
     }
    }
    

    /**
        leet((c)o)(de(
        ))(( 
        these cases are not working 
    
     */

    return s;
};