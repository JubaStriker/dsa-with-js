function promiseAll(promises) {
    return new Promise((resolve, reject)=>{
        let completed =  0;
        let result = [];

        if(promises.length === 0) resolve([]);

        promises.forEach((p,i)=> {
            Promise.resolve(p)
            .then(res => {
                result[i] = res;
                completed ++;

                if(result.length === promises.length) {
                    resolve(result)
                }
            }).catch(reject)
        })
    }) 
}

// Example usage
const p1 = Promise.resolve(1);
const p2 = new Promise(resolve => setTimeout(() => resolve(2), 100));
const p3 = Promise.resolve(3);

promiseAll([p1, p2, p3]).then(values => {
    console.log(values); // [1, 2, 3]
});

promiseAll([]).then(values => {
    console.log(values); // []
});

const pFail = Promise.reject(new Error("something went wrong"));
promiseAll([p1, pFail, p3]).catch(err => {
    console.error(err.message); // something went wrong
});