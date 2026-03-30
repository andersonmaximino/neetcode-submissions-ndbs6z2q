class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const set1 = new Set();

        for(let i = 0;i < nums.length;i++){
            if(set1.has(nums[i])) return true;
            set1.add(nums[i]);
        }
        return false;
    }
}
