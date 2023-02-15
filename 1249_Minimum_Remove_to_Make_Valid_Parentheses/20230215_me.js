/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    const stack = [];
    const strArr = s.split('');
    for(let i=0; i<strArr.length;i++){
        if(strArr[i] === '('){
            stack.push(i);
        }else if(strArr[i] === ')'){
            if(stack.length === 0){
                strArr[i] = '';
            }else{
                stack.pop();
            }
            
        }
    }

    if(stack.length > 0){
         let index = 0;
        while(index < stack.length ){
            strArr[stack[index]] = '';
            index++
        }
    }
   

    return strArr.join('');


};