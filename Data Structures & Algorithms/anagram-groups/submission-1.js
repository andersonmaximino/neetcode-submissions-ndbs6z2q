class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map1 = new Map();
        let arr = [];
        for(let i = 0;i < strs.length;i++){
            let sortStr = strs[i].split('').sort().join('');
            if(map1.has(sortStr)){
                map1.get(sortStr).push(i);
            }else{
                map1.set(sortStr, [i])
            }
        }
        for(let [key, value] of map1){
            if(!value.length > 1){
                arr.push(strs[value]);
            }else{
                var arrTemp = []
                for(let i = 0;i < value.length;i++){
                    arrTemp.push(strs[value[i]]);
                }
                arr.push(arrTemp);
            }
        }
        return arr;
    }
}
