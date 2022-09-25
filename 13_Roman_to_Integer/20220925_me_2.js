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
  
  for (let i = 0; i < s.length; i++){
    let special = s[i] + s[i + 1];
    if (special === 'IV' || special === 'IX' || special === 'XL' || special === 'XC' || special === 'CD' || special === 'CM') {
      sum += romanMap[s[i+1]] -romanMap[s[i]]
      i++;
      continue;
    }
   
    sum += romanMap[s[i]];     
  }

  return sum;
  
};

console.log(romanToInt('IX'))