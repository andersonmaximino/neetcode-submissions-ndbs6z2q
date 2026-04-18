class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
            let arr = [];
    let sortedNums = nums.sort((a, b) => a - b)
    console.log(sortedNums);
    for(let i = 0;i < sortedNums.length;i++){
        let j = i + 1;
        let k = sortedNums.length - 1;
        while(j < k){
            if(j === i){
                i++;
                
            }
            let sum = sortedNums[i] + sortedNums[j] + sortedNums[k]; 
            if(sum === 0){
                arr.push([sortedNums[i], sortedNums[j], sortedNums[k]]);
                ++j;
                --k;
            }else if(sortedNums[i] + sortedNums[j] + sortedNums[k] > 0){
                k--;
            }else{
                j++;
            }
        }
    }
    const oneEach = [...new Set(arr.map(a => JSON.stringify((a))))].map((a) => JSON.parse(a));
    return oneEach;
    }
}
