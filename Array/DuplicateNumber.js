let nums = [1,3,3,4,3,2,4,2];

const duplicateNumber = (nums) => {
    for(let i = 0;i< nums.length;i++){
        for(let j = i+1;j<nums.length;j++){
            if(nums[i] == nums[j]){
                return true
            }
     
        }
        
    }
    return false
}



console.log(duplicateNumber(nums));