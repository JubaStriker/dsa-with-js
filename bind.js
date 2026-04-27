// Real-world: passing a method as a callback loses 'this'
const timer = {
  name: 'Timer A',
  start() {
    console.log('Started: ' + this.name);
  }
};

const random = {
    name: 'I am not timer'
}

// ✗ BROKEN — 'this' is lost when passed as callback
setTimeout(timer.start, 10);         // → "Started: undefined"

// ✓ FIXED with bind — 'this' is locked to timer object
setTimeout(timer.start.bind(random), 10);  // → "Started: Timer A"


// Bind implementation
Function.prototype.myBind = function (context, ...args) {
  const fn = this;
  return function (...newArgs) {
    return fn.apply(context, [...args, ...newArgs])
  }
}