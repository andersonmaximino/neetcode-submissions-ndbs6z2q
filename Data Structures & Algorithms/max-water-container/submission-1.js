class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
    const set1 = new Set();
    let l = 0;
    let r = heights.length - 1;
    let diff = 0
    while(l < r){
        diff = (r - l);
        set1.add(diff * Math.min(heights[l], heights[r]));
        if(heights[l] < heights[r]){
            l++;
        }else{
            r--;
        }
    }
    const maxValue = Math.max(...set1);
    return maxValue;
    }
}
