/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let p1=0, p2=0,minLength=Number.MAX_SAFE_INTEGER, sum=0;
    while(p2< nums.length){
        sum += nums[p2];
        while(sum >= target){
            minLength = Math.min(p2-p1+1, minLength);
            sum -= nums[p1];
            p1++;
        }
        p2++;
    }
  
    return minLength === Number.MAX_SAFE_INTEGER ? 0 : minLength;
};