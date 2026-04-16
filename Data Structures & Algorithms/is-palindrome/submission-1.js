class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
    const str = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let i = 0;
    let j = str.length - 1;
    console.log(str)
    console.log(j)
    while(i < j){
        if(str[i] !== str[j]) return false;
        i++;
        j--;
    }
    return true;
    }
}
