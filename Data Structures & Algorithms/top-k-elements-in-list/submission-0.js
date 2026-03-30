class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map1 = new Map();
        for(let elem of nums){
            if(map1.has(elem)){
                map1.set(elem, map1.get(elem) + 1);
            }else{
                map1.set(elem, 1)
            }
        }
        const sortedMap = [...map1.entries()].sort((a, b) => b[1] - a[1]);
        const arr = [];
        console.log(sortedMap);
        for(let i = 0; i < k;i++){
            arr.push(sortedMap[i][0]);
        }
        return arr;
    }
}
