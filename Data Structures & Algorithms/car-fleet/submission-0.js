class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
    let stack = [];
    let cars = [];
    if(position.length === 1) return 1
    for(let i = 0;i < position.length;i++){
        cars.push([position[i], speed[i]]);
    }
    cars = cars.sort((a, b) => b[0] - a[0]);
    console.log(cars);
    for(let i = 0;i < cars.length;i++){
        let car = cars[i];
        let time = (target - car[0]) / car[1];
        while(!stack.length || time > stack.at(-1)){
            stack.push(time);
        }
    }
    console.log(stack)
    return stack.length;
    }
}
