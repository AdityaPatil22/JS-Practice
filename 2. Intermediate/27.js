// Simulate the `new` keyword in JS.

function myNew(constructor, ...args) {
    // 1. Create a new empty object
    const obj = {};
  
    // 2. Set the prototype of the object to constructor's prototype
    Object.setPrototypeOf(obj, constructor.prototype);
  
    // 3. Call the constructor with `this` pointing to the new object
    const result = constructor.apply(obj, args);
  
    // 4. If the constructor returns an object, use it; otherwise, use `obj`
    return result !== null && (typeof result === 'object' || typeof result === 'function') ? result : obj;
  }
  