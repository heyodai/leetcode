/**
 * Given an array of integers nums which is sorted in ascending order, and an 
 * integer target, write a function to search target in nums. If target exists, 
 * then return its index. Otherwise, return -1.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 * 
 * @see https://leetcode.com/problems/binary-search/
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
    /**
     * This is a standard binary search problem. Guess at the halfway point, then
     * keep adjusting until the target is reached or there are no targets left.
     */
    const NOT_FOUND = -1;

    let floor = -1;
    let ceiling = nums.length;
    while (floor + 1 < ceiling) {
        const size = (ceiling - floor);
        const half = Math.floor(size / 2);
        const guess = floor + half;

        if (nums[guess] === target) {
            return guess;
        }
        else if (nums[guess] > target) { // target is smaller
            ceiling = guess;
        }
        else { // target is bigger
            floor = guess;
        }
    }

    return NOT_FOUND;
};