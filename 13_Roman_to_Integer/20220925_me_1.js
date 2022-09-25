var romanToInt = function(s) {
  const romanMap = {
      'I' : 1,
      'V' : 5,
      'X' : 10,
      'L' : 50,
      'C' : 100,
      'D' : 500,
      'M' : 1000
  }  
  
  let sum = 0;
  
  for(let i=0; i<s.length;i++){
    if (s[i] === 'I') {
          if(s[i+1] === 'V' || s[i+1] === 'X'){
              sum += romanMap[s[i+1]] -romanMap[s[i]]
            i++;
            continue;
              
          } 
      }else if(s[i] === 'X'){
          if(s[i+1] === 'L' || s[i+1] === 'C'){
              sum += romanMap[s[i+1]] - romanMap[s[i]]
            i++;
            continue;
          } 
          
      }else if(s[i] === 'C'){
          if(s[i+1] === 'D' ||s[i+1] === 'M' ){
            sum += romanMap[s[i+1]] - romanMap[s[i]]
            i++
            continue;
          } 
    } 
    sum += romanMap[s[i]];     
      
      
  }

  return sum;
  
};