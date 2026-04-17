class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
            let prefix = 0;
    let sufix = numbers.length - 1;
    while(prefix < sufix){
        if(numbers[prefix] + numbers[sufix] < target){
            prefix++;
        }else if(numbers[prefix] + numbers[sufix] === target){
            return [prefix + 1, sufix + 1];
        }else{
            sufix--;
        }
    }
    }
}
