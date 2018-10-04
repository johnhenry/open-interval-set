# Open Interval Set
SetInterval, but open source and with the callback at the end.

# Usage

```javascript
const intervalSet = require("open-interval-set");
const timer0 = intervalSet(() => {
    console.log("I'm called at the very beginning of the next event loop.")
});
const timer1 = 0 intervalSet(100, () => {
    console.log("I'm 100 ms later.")
});
const timer2 = 0 intervalSet(2000, 1, 2, (...args) => {
    console.log("I'm 100 ms later with these arguments:", ...args);
});
clearInterval(timer0);// unless you're cancelled
clearInterval(timer1);// unless you're cancelled
clearInterval(timer2);// unless you're cancelled
```
