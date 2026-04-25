var twoSum = function (nums, target) {
    for (let i = 0; i <= nums.length; i++) {
        for (let j = i + 1; j <= nums.length - 1; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
};


function twoSumOptimal(nums, target) {
    const map = new Map();

    for (let i = 0; i <= nums.length; i++) {
        const compliment = target - nums[i];

        if (map.has(compliment)) {
            return [map.get(compliment), i]
        }

        map.set(nums[i], i)
    }
}

function twoSumPointers(nums, target) {
    let L = 0, R = nums.length - 1

    while (L < R) {
        let sum = nums[L] + nums[R];
        if (sum === target) return [L, R]
        else if (sum < target) L++;
        else R--;
    }
}


//console.log(twoSumOptimal([2, 7, 11, 15], 9));
console.log(twoSumPointers([2, 3, 7, 11, 15], 9))