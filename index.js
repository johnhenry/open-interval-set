module.exports = (...args) => {
    const func = args.pop();
    if (typeof func !== "function") {
        throw new Error("Final argument must be a function");
    }
    const time = args.shift();
    return setInterval(func, time, ...args);
};
