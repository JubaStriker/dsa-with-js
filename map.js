const map = new Map([['a', 1], ['b', 2]]);

map.set('c', 4)
console.log(map.size);
console.log(map.has('b'));
map.delete('c')
console.log(map.size);

for (const [key, value] of map) {
    console.log(`${key}:${value}`);
}