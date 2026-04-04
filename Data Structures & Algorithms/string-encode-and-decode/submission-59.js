class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let sizes = [];
        let str = '';
        for(let st of strs){
            sizes.push(st.length);
        }
        for(let sz of sizes){
            str += sz + ',';
        }
        str += '#';
        for(let st of strs){
            str += st;
        }
        return str;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let strs = [];
        let sizes = [];
        let i = 0;
        // console.log(str);

        while(str[i] !== '#'){
            let cur = '';
            while(str[i] !== ','){
                cur += str[i];
                i++;
            }
            sizes.push(parseInt(cur));
            i++;
        }
        i++;

        for(let sz of sizes){
            strs.push(str.substr(i, sz));
            i += sz;
        }
        console.log(strs);
        return strs;
    }
}
