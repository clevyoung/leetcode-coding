/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {

  let sum = BigInt(a) + BigInt(b);
  let sumString = sum.toString().split('');

  let binarySum = '';

  for (let i = sumString.length - 1; i >= 0; i--){
    if (parseInt(sumString[i]) >= 2) {
      if (!sumString[i - 1]) {
        binarySum = '1' + (parseInt(sumString[i]) - 2) + binarySum; 
        return binarySum
      }      
      binarySum = (parseInt(sumString[i]) - 2) + binarySum;
      sumString[i - 1] = (parseInt(sumString[i - 1]) + 1).toString();
      
     } else {
      binarySum = sumString[i] + binarySum; 
     }
     
   }

  return binarySum;
   
 };

console.log(addBinary("10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101", "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"))
 


  