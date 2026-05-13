class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
    let speed = 1;
    let maxPile = Math.max(...piles)
    for(let i = 0;i < maxPile;i++){
        let total = 0;
        for(let j = 0;j < piles.length;j++){
            total += Math.ceil(piles[j] / speed);
        }
        if(total <= h) return speed; 
        speed += 1;
    }
    }
}
