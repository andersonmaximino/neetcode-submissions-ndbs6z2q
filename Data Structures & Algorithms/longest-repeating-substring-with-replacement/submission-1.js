class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let count = 0;
    const map1 = new Map();
    let left = 0;
    let right = 0;
    let max = 0;
    
    while(right < s.length){
        // console.log(right - left + 1);
        map1.set(s[right], map1.get(s[right]) + 1 || 1);

        if(map1.get(s[right]) > max) max = map1.get(s[right]);

        if(right - left + 1 - max > k){
            map1.set(s[left], map1.get(s[left]) - 1 || 0)
            left++;
        }
        right++;
    }
    // console.log(map1)
    return right - left;
    }
}
