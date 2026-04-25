function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }
}

const log = debounce((msg) => console.log('Fired:', msg), 300);
log('a'); log('b'); log('c'); // only 'c' fires after 300ms

// Three ways to call a function — they're all equivalent when args are known:
// fn(a, b)
// direct call — loses this if called from wrong context
// fn.call(ctx, a, b)
// set this = ctx, pass args individually
// fn.apply(ctx,[a,b])
// set this = ctx, pass args as array ← debounce uses this
// fn.bind(ctx)(a, b)
// returns new fn with this bound, call later

function throttle(fn, limit) {
    let lastCall = 0;

    return function (...args) {
        let now = Date.now();
        if (now - lastCall > limit) {
            fn.apply(this, args);
        }
    }
}