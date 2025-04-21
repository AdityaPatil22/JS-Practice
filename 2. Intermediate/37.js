// Implement `once()` function (executes only once).

const once = (fn) => {
    let called = false;
    let result;

    return function(...args) {
        if(!called) {
            called = true;
            result = fn.apply(this.args);
        }

        return result
    };
}

const sayHiOnce = once(() => {
    console.log("Hello");
    return "Greeted"
})

sayHiOnce()
sayHiOnce()
sayHiOnce()