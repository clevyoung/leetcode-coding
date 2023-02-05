/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    const map = {};
   for (let i = 0; i < nums.length; i++){
       const val1 = target - nums[i]
       if (map.hasOwnProperty(val1)) {
           return [map[val1], i]
       }
       map[nums[i]] = i;
   }
};