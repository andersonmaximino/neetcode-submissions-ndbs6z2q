class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const map1 = new Map();
        let length = 0;
        for(let i = 0;i < s.length;i++){
            if(map1.has(s[i])){
                i = map1.get(s[i]) + 1;
                map1.clear();
            }
            map1.set(s[i], i);
            if(map1.size > length) length = map1.size;
        }
        return length;
    }
}
