class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
    for(let i = 0;i < matrix.length;i++){
        let prefix = 0;
        let sufix = matrix[i].length - 1;
        while(prefix <= sufix){
            if(matrix[i][prefix] === target || matrix[i][sufix] === target){
                return true;
            }else{
                prefix++;
                sufix--;
            }
        }
    }
    return false;
    }
}
