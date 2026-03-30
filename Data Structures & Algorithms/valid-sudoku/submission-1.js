class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for(let i = 0;i < 9;i++){
            const set1 = new Set();
            for(let j = 0;j < 9;j++){
                if(board[i][j] === '.') continue;
                if(set1.has(board[i][j])) return false;
                set1.add(board[i][j]);
            }
        }
        for(let i = 0;i < 9;i++){
            const set1 = new Set();
            for(let j = 0;j < 9;j++){
                if(board[j][i] === '.') continue;
                if(set1.has(board[j][i])) return false;
                set1.add(board[j][i]);
            }
        }
        for(let square = 0;square < 9;square++){
            const set1 = new Set();
            for(let i = 0;i < 3;i++){
                for(let j = 0;j < 3;j++){
                    let row = Math.floor(square / 3) * 3 + i;
                    let col = (square % 3) * 3 + j;
                    if(board[row][col] === '.') continue;
                    if(set1.has(board[row][col])) return false;                   
                    set1.add(board[row][col]);
                }
            }
        }
        return true;
    }
}
