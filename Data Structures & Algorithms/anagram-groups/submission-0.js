class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map1 = new Map();
        for(let str of strs){
            const strSorted = str.split('').sort().join('');
            if(map1.has(strSorted)){
                map1.set(strSorted, [...map1.get(strSorted), str]);
            }else {
                map1.set(strSorted, [str]);
            }
        }
        return Array.from(map1.values());
    }
}
