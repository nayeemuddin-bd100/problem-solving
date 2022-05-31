// brutforce way 
// time complexity o(n^2) 🤔

var twoSum = function(nums, target) {
    for(let i = 0 ; i<nums.length; i++){
      for(let j = 1 ; j <= nums.length;j++){
        if(nums[i] + nums[j] === target){
         if(i === j){
            continue;
          }else{
            return [i,j]
          }
        }
      }
    }
};


// Two pointer way  o(n)
// didnt't check uniqe value!

var twoSum = function(nums, target) {
    let start = 0
    let end = nums.length -1
    let res = []

    for(let i = 0 ; i = nums.length; i++){

            if(start < end){
                if(nums[start] + nums[end] == target){
                    res.push(start,end)
                    break;
                }else if(nums[start] + nums[end] > target){
                    end --
                } else{
                    start ++
                }
            } else {
                return res
            }
    }
    return res
    
};

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
