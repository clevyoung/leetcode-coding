/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let left = 0, right =0;
    let sMap = {}, pMap = {};
    let anagramArr = [];
  
    for(let x of p){
        if(!pMap[x]){
            pMap[x] = 0;
        }
        pMap[x]++;
    }
  
    while(right < s.length){
        const curChar = s[right];
        if(pMap[curChar]){
            if(sMap[curChar]){
                if(sMap[curChar] >= pMap[curChar]){
                  const lastIndexOfCurChar = s.slice(0, right).lastIndexOf(curChar);
                  left = lastIndexOfCurChar + 1;
                  sMap = {};
                  sMap[s[left]] = 1;
                  right = left;                
                }else{
                    sMap[curChar]++;
                }
            }else{
                sMap[curChar] = 0;
                sMap[curChar]++;
            }
        }else{
            sMap = {};
            left = right + 1;
        }
  
        if(right - left + 1 === p.length){
            anagramArr.push(left);
        }
  
        right++;
    }
  
    return anagramArr;
  
  };