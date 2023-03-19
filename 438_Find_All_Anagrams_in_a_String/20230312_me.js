var findAnagrams = function(s, p) {
    let p1 = 0, p2 = 0;
    const pMap = new Map();
    const curMap = new Map();
    const anagramArr = [];

    for(let x of p){
       if(!pMap.has(x)){
           pMap.set(x, 0);
       }
       pMap.set(x, pMap.get(x) + 1);
    }

    while(p2 < s.length){
        // cbaebabacd
        const curChar = s[p2];
        if(!pMap.has(curChar)){
            p1 = p2+1;
            curMap.clear();
            
        } else {
            if(!curMap.has(curChar)){
                curMap.set(curChar, 1)
            } else {
                if(!(curMap.get(curChar) >= pMap.get(curChar))){
                    curMap.set(curChar , curMap.get(curChar)+1);
                } else {
                    console.log(p1)
                    console.log(p2)
                    p1++
                    curMap.set(curChar , curMap.get(curChar)-1)   
                }
            }
           
            if (p.length === p2 - p1 + 1) {
                console.log(p1)
                console.log(p2)
                anagramArr.push(p1);
                curMap.set(s[p1], curMap.get(s[p1])-1)
                p1++;
               }
        }
         p2++;
    }

    return anagramArr
};

console.log(findAnagrams('cbaebabacd', 'abc'))