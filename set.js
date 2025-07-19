const set = new Set([1, 2, 3]);

console.log(set);

set.add({ name: 'Jubair' })

console.log(set.has(1));
console.log(set.size);

for (const item of set) {
    console.log(item);
}