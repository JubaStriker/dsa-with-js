function intersectionOfArray(nums1, nums2) {
    let set1 = new Set(nums1);
    let res = new Set();

    for( let num of nums2) {
        if(set1.has(num)) res.add(num)
    }

    return [...res]
}

// Example 1: Common elements between two arrays
console.log(intersectionOfArray([1, 2, 2, 1], [2, 2]));
// Output: [2]

// Example 2: Multiple common elements
console.log(intersectionOfArray([4, 9, 5], [9, 4, 9, 8, 4]));
// Output: [9, 4]

// Example 3: No common elements
console.log(intersectionOfArray([1, 2, 3], [4, 5, 6]));
// Output: []

// Example 4: Duplicates in both — result contains unique values only
console.log(intersectionOfArray([1, 1, 2, 2, 3], [2, 2, 3, 3, 4]));
// Output: [2, 3]