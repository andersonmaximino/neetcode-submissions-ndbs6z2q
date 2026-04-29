class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
      let stack = [];

      for(let i = 0;i < tokens.length;i++){
        if(!isNaN(tokens[i])){
            stack.push(tokens[i]);
            if(tokens.length === 1) return Number(stack[0]);
        }else{
            let result = 0;
            if(tokens[i] === '+'){
                result = Number(stack[stack.length - 2]) + Number(stack[stack.length - 1]);
            }else if(tokens[i] === '-'){
                result = Number(stack[stack.length - 2]) - Number(stack[stack.length - 1]);
            }else if(tokens[i] === '*'){
                result = Number(stack[stack.length - 2]) * Number(stack[stack.length - 1]);
            }else{
                result = Number(stack[stack.length - 2]) / Number(stack[stack.length - 1]);
            }
            result = Math.abs(result) < 1 ? 0 : Math.trunc(result);

            stack.pop();
            stack.pop();
            stack.push(result);       
        }
      }  
      return stack[0];
    }
}
