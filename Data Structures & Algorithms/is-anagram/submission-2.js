class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length) return false;
        const sSort = s.split('').sort();
        const tSort = t.split('').sort();

        for(let x = 0;x < sSort.length;x++){
            if(sSort[x] !== tSort[x]) return false;
        }
        return true;
        
    }
}
