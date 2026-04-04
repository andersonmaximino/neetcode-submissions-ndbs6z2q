class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = [];
        let sufix = [];
        let total = 1;
        let output = [];
        for(let i = 0;i < nums.length;i++){
            total *= nums[i];
            prefix.push(total);
        }
        total = 1;

        for(let i = nums.length - 1;i >= 0;i--){
            total *= nums[i];
            sufix.unshift(total);
        }        
        total = 1;

        prefix.unshift(1);
        sufix.push(1);
        for(let i = 0;i < nums.length;i++){
            output.push(prefix[i] * sufix[i + 1]);
        }

        return output;
    }
}
