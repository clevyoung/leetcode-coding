/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for(let i=0; i < nums.length; i++){
         for(let x=i+1; x < nums.length; x++){
             if(nums[i] + nums[x] === target){
                 return [i, x]
             }
        }
    }
};