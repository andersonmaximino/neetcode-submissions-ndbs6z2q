class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set1 = new Set(nums);
        console.log(set1);
        let longest = 0;
        
        for(let n of set1){
            if(!set1.has(n - 1)){
                let length = 1;

                while(set1.has(n + length)){
                    length++;
                }

                longest = Math.max(longest, length);
            }
        }

        return longest
    }
}
