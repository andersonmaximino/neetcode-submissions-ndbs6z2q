class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const map1 = new Map();
        for(let i = 0;i < numbers.length;i++){
            if(map1.has(target - numbers[i])){
                return [map1.get(target - numbers[i]) + 1, i + 1];
            }else{
                map1.set(numbers[i], i);
            }
        }
    }
}
