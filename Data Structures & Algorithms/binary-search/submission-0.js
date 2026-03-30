class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
            const set1 = new Set(nums)
    if(set1.has(target)){
        while(nums.length >= 1){
            if(nums.length % 2 !== 0) nums.push(nums[nums.length - 1] + 1);
            if(nums[(nums.length / 2) - 1] >= target){
                if(nums[(nums.length / 2) - 1] === target) return [...set1].indexOf(target);
                nums = nums.slice(0, nums.length / 2);
            }else{
                nums = nums.slice(nums.length / 2, nums.length);
            }
        }
    }else{
        return -1;
    }
    }
}
