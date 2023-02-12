var lengthOfLongestSubstring = function(s) {
      // edge cases - empty string '', '  '...
    // iterate through the string 
    // comes to my mind first - for loop and find tne same letter as current except itself - 첫 번째 letter가 아닌 나머징 문자가 중복될 수 있다.
    // comes to my mind second - 
    // brute forceㅠㅠ??
    /**
    for - 
        for - 
        b랑 같은 문자가 x ~ y 사이에 존재? 
        c랑 같은 문자가 x index y index 사이에 존재? 체크하고 나서 멈춘다. 

     */
     /**
        if a
      */
        if(!s) return 0; 
        let maxLength = 1; // string이 empty string이 아닌 경우 default는 1이다.
       for(let x = 0; x < s.length;x++){
           for(let y = x+1; y < s.length; y++){
               let subStr = s.slice(x, y);
               if(subStr.indexOf(s[y]) !== -1){
                   break;
               }else{
                   maxLength = Math.max(maxLength, subStr.length+1);
               }
           }
       }
    
      return maxLength;
};

