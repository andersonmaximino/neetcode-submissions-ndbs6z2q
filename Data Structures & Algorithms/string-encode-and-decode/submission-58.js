class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let sizes = [], str = '';
        for(let s of strs){
            sizes.push(s.length);
        }
        str += sizes.join(',');
        str += '#';

        for(let s of strs){
            str += s;
        }
        
        return str;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let sizes = [];
        let strs = [];
        let i = 0;
        
        if (str[0] === '#') {
            i++;
        } else {
            while(i < str.length && str[i] !== '#'){
                let temp = '';
                while(str[i] !== ',' && str[i] !== '#'){
                    temp += str[i];
                    i++;
                }

                sizes.push(parseInt(temp));
                if (str[i] === ',') i++;
            }
            i++;
        }
        
        for(let sz of sizes){
            strs.push(str.substr(i, sz));
            i += sz
        }

        return strs;
    }
}