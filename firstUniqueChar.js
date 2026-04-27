function firstUniqChar(s) { 
    const map = {};

    for ( let char of s) {
        map[char] =  (map[char]||0) + 1;  
    }

    for( let i = 0; i < s.length; i++) {
        if(map[s[i]] === 1) return i;
    }

    return -1
}

console.log(firstUniqChar("leetcode"));   // 0 → 'l' is first unique
console.log(firstUniqChar("loveleetcode")); // 2 → 'v' is first unique
console.log(firstUniqChar("aabb"));        // -1 → no unique char