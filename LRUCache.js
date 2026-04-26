class LRUCache {
    constructor(limit) {
        this.cache = new Map();
        this.limit = limit
    }

    get(key) {
        if(!this.cache.has(key)) return -1

        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        
        return value;
    }

    put(key, value) {
        if(this.cache.has(key)) {
            this.cache.delete(key)
        }

        this.cache.set(key, value)

        if(this.cache.size > this.limit) {
            let firstKey = this.cache.get().next().value;
            this.cache.delete(firstKey)
        }
    }
}