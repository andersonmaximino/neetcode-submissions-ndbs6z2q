class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if(nums.length === 0) return false;
        for(var i = 0;i < nums.length;i++){
            var j = i + 1;
            while(j <= nums.length){
                if(i === nums.length - 1 && j === nums.length){
                    return false;
                }else if(nums[i] === nums[j]){
                    return true;
                }
                j++;
            }
        }
    }
}
