  // string t를 map으로 만든다.
  // p1, p2에서 two pointer
  // string t의 character를 모두 찾을 때까지 p2을 이동시킨다.
  // 만약에 t character를 다 찾았다면 count가 string p의 length와 같다는 조건을 만족할 때까지 while문을 이용해서 P1을 이동한다.
  // ADOBEC의 경우 while문을 돌 때 A가 해당되면서 count를 -- 조건불만족되므로 p1은 D로 이동하고 break;
  // p1은 D인 상태 count === p.length 조건문에 걸릴 때까지 p2 이동
  // A DOBECODEBA NC 여기서 count === p.length
  // DOBECODEBA 에서 p1이동되면서 count가 p.length 만족시키는지 확인하면서 계속 이동
  // ODEBA 이동 다시 count === p.length 조건문에 걸릴 때까지 p2 이동
  // ODEBANC에서 count === p.length 조건 만족하므로 다시 p1이동 BANC

  /**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let p1= 0, p2 =0 , count = 0; 
    let len = Number.MAX_SAFE_INTEGER;
    let minString = ''
    const map = new Map();


    for (let x of t) {
        map.set(x, (map.get(x) || 0) + 1);
    }


    while (p2 < s.length) {
        if (map.has(s[p2])) {
            if (map.get(s[p2]) > 0) {
                count++;    
            }
            map.set(s[p2], map.get(s[p2]) - 1);
        }
        p2++

        while (count === t.length) {
            if (p2 - p1 < len) {
                minString = s.slice(p1, p2);
                len = p2 - p1;
            }

            if (map.has(s[p1])) {
                if (map.get(s[p1]) === 0) {
                    count--;    
                }
                map.set(s[p1], map.get(s[p1]) + 1);
            }
            p1++;
        }

    }

    return minString;



};

console.log(minWindow('ADOBECODEBANC', 'ABC'))