// Write your own version of `bind`

Function.prototype.myBind = function (context, ...args) {
    const fn = this; // original function

    return function (...moreArgs) {
        return fn.apply(context, [...args, ...moreArgs]);
    };
};
