function groupAnagrams(strs) {
    const map = new Map();

    for( let str of strs) {
        const key = str.split('').sort().join(); // sorted

        if(!map.has(key)) map.set(key, []);

        map.get(key).push(str);
    }

    return [...map.values()]
}

const arr = ["eat","tea","tan","ate","nat","bat"]

console.log(groupAnagrams(arr))