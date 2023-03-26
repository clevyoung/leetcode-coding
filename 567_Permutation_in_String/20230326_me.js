/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let p1 = 0, p2 = 0;
    const map = new Map();

    for(let x of s1){
        map.set(x, (map.get(x) || 0) +1);
    }

    while(p2 < s2.length){
        const curChar = s2[p2];
        if(map.get(curChar) > 0){
            map.set(curChar, map.get(curChar)-1);
            p2++;
            if(p2-p1 === s1.length){
                return true;
            }
        }else if(p1 === p2){
            p1++;
            p2++;
        }else{
            map.set(s2[p1], map.get(s2[p1])+1);
            p1++;
        }
    }

    return false;
};