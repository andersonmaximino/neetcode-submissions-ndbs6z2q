class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
    const set1 = new Set(nums);
    const map1 = new Map();
    let total = 0;
    for(let i = 0;i < nums.length;i++){
        if(!set1.has(nums[i] - 1)){
            map1.set(nums[i], 1);
        }       
    }
    for(const[key, value] of map1){
        let count = 1;
        while(set1.has(key + count)){
            map1.set(key, value + 1);
            count++;
        }
        if(total < count)total = count;
    }
    return total;
    }
}
