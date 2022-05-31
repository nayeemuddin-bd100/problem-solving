var findMaxConsecutiveOnes = function(nums) {
    let count = 0;
    let max = 0
    
    nums.map((num)=> {
        if(num == 1){
            count++
        } else {
            if(max < count){
                max = count
            }
            count = 0
        }

        if(max < count){
            max = count
        }
    })
    
    return max
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))