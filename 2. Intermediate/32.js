// Write a custom event emitter (Pub/Sub)


class EventEmitter {
    constructor() {
      this.events = {};
    }
  
    // Subscribe to an event
    on(eventName, callback) {
      if (!this.events[eventName]) {
        this.events[eventName] = [];
      }
      this.events[eventName].push(callback);
    }
  
    // Unsubscribe from an event
    off(eventName, callback) {
      if (!this.events[eventName]) return;
  
      this.events[eventName] = this.events[eventName].filter(fn => fn !== callback);
    }
  
    // Emit (publish) an event
    emit(eventName, data) {
      if (!this.events[eventName]) return;
  
      this.events[eventName].forEach(callback => callback(data));
    }
  
    // Listen once
    once(eventName, callback) {
      const wrapper = (data) => {
        callback(data);
        this.off(eventName, wrapper);
      };
      this.on(eventName, wrapper);
    }
  }
  