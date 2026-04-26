function moveZeros(nums) {
    let j = 0;

    for( let i=0; i< nums.length; i++) {
        if(nums[i] !== 0) {
            [nums[j], nums[i]] = [nums[i], nums[j]];
            j++;
        }
    }

    return nums;
}

console.log(moveZeros([0, 1, 0, 3, 12]))