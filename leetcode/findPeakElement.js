// leetcode 162
var findPeakElement = function(nums) {
    let res = 0
    
    for (let i = 0 ; i < nums.length; i++) {
        if(nums[res] < nums[i]){
            res = i
        }
    }
    return res
    
};

console.log(findPeakElement([1,2,1,3,5,6,4]));