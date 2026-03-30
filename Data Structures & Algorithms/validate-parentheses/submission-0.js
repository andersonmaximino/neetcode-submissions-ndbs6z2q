class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
            const map1 = new Map([[')','('],[']','['],['}','{']]);
    let arr = [];
    for(let i = 0;i < s.length;i++){
        if(arr.length > 0 && arr[arr.length - 1] === map1.get(s[i])){
            arr.pop();
        }else{
            arr.push(s[i]);
        }
    }
    return arr.length === 0;
    }
}
