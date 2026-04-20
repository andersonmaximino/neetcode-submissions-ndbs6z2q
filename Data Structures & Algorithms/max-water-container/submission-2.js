class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(height) {
            const set1 = new Set();
    let prefix = 0;
    let sufix = height.length - 1;
    let heightLen = height.length - 1;
    while(prefix < sufix){
        if(height[prefix] < height[sufix]){
            set1.add(height[prefix] * heightLen);
            prefix++;
            heightLen--;
        }else{
            set1.add(height[sufix] * heightLen);
            sufix--;
            heightLen--;
        }
        // console.log(set1)
    }
    let maxValue = 0;
    for(const value of set1){
        // console.log(value)
        if(maxValue < value) maxValue = value;
    }
    return maxValue;
    }
}
