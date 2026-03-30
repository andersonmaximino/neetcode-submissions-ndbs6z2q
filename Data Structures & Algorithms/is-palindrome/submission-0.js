class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const newS = s.toLowerCase().replace(/[^a-z0-9]/g, '');
        if(newS === newS.split('').reverse().join('')){
            return true;
        }
        return false;
    }
}
