class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set1 = new Set(nums);
        let arr = [];
        let len = 0;
        for(let i = 0;i < nums.length;i++){
            if(!set1.has(nums[i] - 1)){
                arr = [];
                arr.push(nums[i]);
                let checkout = true;
                while(checkout){
                    if(set1.has(arr[arr.length - 1] + 1)){
                        arr.push(arr[arr.length - 1] + 1);
                    }else{
                        if(arr.length > len){
                            len = arr.length;
                        }
                        checkout = !checkout;
                    }
                }
            }
        }
        return len;
    }
}
