class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefix = [];
        const sufix = [];

        for(let i = 0;i < nums.length;i++){
            if(i === 0){
                prefix[i] = 1;
            }else{
                prefix[i] = nums[i - 1] * prefix[i - 1];
            }
        }   
        console.log(prefix);
        for(let i = nums.length - 1;i >= 0; i--){   
            if(i === nums.length - 1){
                sufix[i] = 1;
            }else{
                sufix[i] = nums[i + 1] * sufix[i + 1];
            }
        }
        console.log(sufix);
        const result = [];
        for(let i = 0;i < nums.length;i++){
            result[i] = prefix[i] * sufix[i];
        }

        return result;
    }
}
