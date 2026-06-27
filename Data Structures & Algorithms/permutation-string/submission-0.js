class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
            const map1 = new Map();
    const map2 = new Map();
    let left = 0;
    let right = s1.length - 1;

    for(let i = 0;i < s1.length;i++){
        map1.set(s1[i], map1.get(s1[i]) + 1 || 1);
        map2.set(s2[i], map2.get(s2[i]) + 1 || 1);
    }

    while(right < s2.length){
        if(isEqual(map1, map2)){
            return true;
        }else{
            if(map2.get(s2[left]) > 1){
                map2.set(s2[left], map2.get(s2[left]) - 1);
            }else{
                map2.delete(s2[left]);
            }
        } 

        left++;
        right++;

        map2.set(s2[right], map2.get(s2[right]) + 1 || 1);
    }

    return false;

    function isEqual(hash1, hash2){
        if(hash1.size !== hash2.size){
            return false;
        }
        for(const key of hash1.keys()){
            if(hash1.get(key) !== hash2.get(key)){
                return false;
            }
        } 
        return true;
    }
    }
}
