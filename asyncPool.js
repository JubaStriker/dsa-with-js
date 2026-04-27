async function asyncPool(limit, tasks) {
    const executing = []
    const results = []
    let i = 0;

    async function enqueue() {
        if( i === tasks.length) return

        const taskindex = i++;
        const p = tasks[taskindex]().then(res=>{
            results[taskindex] = res
        });

        executing.push(p);

        if(executing.length >= limit) {
            Promise.race(executing);
            executing.splice(executing.findIndex(e => e === p) ,1);
        }

        await enqueue();
    }

    await enqueue();
    await Promise.all(executing);

    return results;
} 