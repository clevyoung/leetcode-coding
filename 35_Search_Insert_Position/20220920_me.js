// var searchInsert = function(nums, target) {
//     for(let i=0; i< nums.length; i++){
//         if(target <= nums[i]){
//             return i;
//         }

//         if(i === nums.length -1 ){
//             return i+1;
//         }
//     }
// };

var searchInsert = function (nums, target) {
  let lowIdx = 0;
  let highIdx = nums.length;

  if (target < nums[0]) return 0;
  if (target > nums[nums.length - 1]) return nums.length;

  while (lowIdx < highIdx) {
    let midIdx = Math.floor((lowIdx + highIdx) / 2);

    if (target === nums[midIdx]) {
      return midIdx;
    } else if (target > nums[midIdx]) {
      if (target < nums[midIdx + 1]) {
        return midIdx + 1;
      }
      lowIdx = midIdx;
    } else if (target < nums[midIdx]) {
      if (target > nums[midIdx - 1]) {
        return midIdx;
      }
      highIdx = midIdx;
    }
  }
};

console.log(searchInsert([1, 3, 5, 6], 2));
