class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map1 = new Map();
        let arr = [];
        for(let i = 0;i < nums.length;i++){
            if(map1.has(nums[i])){
                map1.set(nums[i], map1.get(nums[i]) + 1);
            }else{
                map1.set(nums[i], 1);
            }
        }
        var sortMap = [...map1.entries()].sort((a, b) => b[1] - a[1]);
        for(let i = 0;i < k;i++){
            arr.push(sortMap[i][0]);
        }
        return arr;
    }
}
