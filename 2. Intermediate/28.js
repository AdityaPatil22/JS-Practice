// Simulate the `instanceof` operator

function myInstanceOf(obj, constructor) {
    // Get the prototype of the object
    let proto = Object.getPrototypeOf(obj);
  
    // Keep walking up the prototype chain
    while (proto !== null) {
      if (proto === constructor.prototype) {
        return true;
      }
      proto = Object.getPrototypeOf(proto);
    }
  
    return false;
  }
  