/**
 *  Pollyfills in JS
 *  A Polyfill is a piece of code use to provide modeer functionality on older browsers that
 *  do not natively support it.
*/

// Array.prototype.map
Array.prototype.myMap = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this))
    }

    return result;
}

// Array.prototype.myFilter
Array.prototype.myFilter = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i])
        }
    }
    return result;
}

// Array.prototype.myForEach
Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

// Array.prototype.myReduce 

Array.prototype.myReduce = function (callback, initialValue) {
    if (typeof callback !== "function") {
        throw new TypeError(callback + "is not a function")
    }

    const arr = this;
    const hadInitial = arguments.length > 1;
    let accumulator = hasInitail ? initialValue : arr[0];
    let startIndex = hasInitail ? 0 : 1;

    for (let i = startIndex; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i], i, arr);
    }

    return accumulator;
}