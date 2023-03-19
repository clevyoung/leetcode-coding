var findAnagrams = function(s, p) {
    let p1 = 0;
    let p2 = 0;
    let pMap = {}
    let sMap = {}
    let anagramArr = [];
 
    for(let x of p){
        if(!pMap[x]){
            pMap[x] = 0;
        }
        pMap[x]++;
    }
 
    while(p2 < s.length){
        const curChar = s[p2];
        // cbaeb abacd
        if(pMap[curChar]){
            if(!sMap[curChar]){
                sMap[curChar] = 1;
            }else{
                if (sMap[curChar] >= pMap[curChar]) {
                  sMap[s[p1]]--;
                  p1++;
                } else {
                    console.log(sMap)
                    sMap[curChar]++;
                }
            }
        }else{
            p1 = p2+1;
            sMap = {};
        }
        if (p2 - p1 + 1 === p.length) {
            anagramArr.push(p1);
            sMap[s[p1]]--;
            p1++;
        }
        p2++;
    }
 
     return anagramArr
};
 
console.log(findAnagrams('abaacbabc', 'abc'))
console.log(findAnagrams('cbaebabacd', 'abc'))
console.log(findAnagrams('abab', 'ab'))