function flatten(obj, parent='', res = {}) {
    for (let key in obj) {
        let newKey = parent? `${parent}.${key}` : key;
        if(typeof obj[key] === 'object' && obj[key] != null) {
            flatten(obj[key], newKey, res)
        } else {
            res[newKey] = obj[key]
        }
    }
    return res;
}

const obj = {
    name: 'Jubair',
    education: {
        college: 'ACC',
        university: {
            name: 'HSTU',
            degree: 'EEE'
        }
    }
}

console.log(flatten(obj))