class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
            let stack = [temperatures[0]];
    let output = [];
    for(let i = 0;i < temperatures.length;i++){
        let count = 1;
        if(stack.at(-1) < temperatures[i + 1]){
            // stack.pop();
            stack.push(temperatures[i + 1]);
            output.push(1);
        }else{
            let j = i + 1;
            while(stack.at(-1) >= temperatures[j]){
                count++;
                j++;
                if(j === temperatures.length){
                    count = 0;
                    break;
                }
            }
            output.push(count);

            // stack.pop();
            stack.push(temperatures[i + 1]);
        }
    }
    output[output.length - 1] = 0;
    return output;
    }
}
