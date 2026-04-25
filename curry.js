function curry(fn) {
    return function curried(...args) {
        if(args.length >= fn.length) {
            return fn(...args)
        } 
        return (...next) => curried(...args, ...next);
    }
}


const logger = (transport, level, message) => {
  console.log(`[${transport}] [${level}]: ${message}`);
};

// Curried version
const curriedLogger = curry(logger);

//1. Specialize by transport (e.g., Sentry)
const sentryLogger = curriedLogger("SENTRY");

// 2. Specialize by level (e.g., Error)
const sentryError = sentryLogger("ERROR");

// 3. Use it anywhere in the app with just the message
sentryError("Database connection failed!"); 
// Output: [SENTRY] [ERROR]: Database connection failed!