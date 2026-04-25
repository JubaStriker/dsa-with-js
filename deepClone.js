function deepClone(obj, map = new WeakMap()) {
    if ( obj === null || typeof obj !== 'object') return obj

    const clone = Array.isArray(obj) ? [] : {};
    map.set(obj, clone);

    for(let key in obj) {
        clone[key] = deepClone(obj[key], map)
    }

    return clone
};

const original = {
  name: "Alice",
  address: { city: "Dhaka", zip: "1207" },
  meta: { scores: { math: 95, eng: 88 } }
};

const clone = deepClone(original);

// Mutate the clone
clone.name = "Bob";
clone.address.city = "Chittagong";
clone.meta.scores.math = 0;

console.log("original.name     :", original.name);
console.log("clone.name        :", clone.name);
console.log("original.address  :", original.address.city);
console.log("clone.address     :", clone.address.city);
console.log("original.math     :", original.meta.scores.math);
console.log("clone.math        :", clone.meta.scores.math);