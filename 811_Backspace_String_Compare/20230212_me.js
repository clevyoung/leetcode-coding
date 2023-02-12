/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    for(let i=0; i < s.length;i++) {
        // loop through the string and find an # index
        // remove previous letter and #
        // caution index dynamically changes so we need to deal with that??
        if(s[i] === '#'){
            if(i === 0){
                s = s.slice(1, s.length+1);
                i = i -1;
            }else{
                 s = s.slice(0, i-1) + s.slice(i+1, s.length + 1);
                 i = i -2;
            }
         
        }
    }

     for(let i=0; i < t.length;i++) {
        // loop through the string and find an # index
        // remove previous letter and #
        // caution index dynamically changes so we need to deal with that??
        if(t[i] === '#'){
            if(i == 0){
                t = t.slice(1, t.length + 1);
                i = i -1;
                
            }else{
                t = t.slice(0, i-1) + t.slice(i +1, t.length + 1);
                i = i -2;
            }
            
            
        }
    }

    // compare s and t 
   return s===t;

};