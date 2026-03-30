class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const map1 = new Map();
        const map2 = new Map();

        if(s.length !== t.length) {
            return false;
        }

        const setMap = function(map, str){
            for(var i = 0; i < str.length; i++) {
                if(map.has(str.charAt(i))){
                    map.set(str.charAt(i), map.get(str.charAt(i)) + 1);
                } else {
                    map.set(str.charAt(i), 1);
                }
            }
        }

        setMap(map1, s);
        setMap(map2, t);

        for(var [key, val] of map1){
            var testVal = map2.get(key);
            if(testVal !== val){
                return false;
            }
        }
        return true;
    }
}
