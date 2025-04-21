// Implement a basic LRU cache

/**
 * An LRU Cache is a data structure that:
 *  Has a fixed capacity
 *  Stores key-value pairs
 *  On every get or put, it marks the key as recently used
 *  If capacity is full, it removes the least recently used item before inserting a new one
 */

class LRUCache {
    constructor(capacity) {
      this.capacity = capacity;
      this.cache = new Map();
    }
  
    get(key) {
      if (!this.cache.has(key)) return -1;
  
      const value = this.cache.get(key);
      // Re-insert key to mark it as recently used
      this.cache.delete(key);
      this.cache.set(key, value);
  
      return value;
    }
  
    put(key, value) {
      if (this.cache.has(key)) {
        // Remove old entry
        this.cache.delete(key);
      } else if (this.cache.size >= this.capacity) {
        // Remove least recently used (first inserted key)
        const leastUsedKey = this.cache.keys().next().value;
        this.cache.delete(leastUsedKey);
      }
  
      // Insert new key
      this.cache.set(key, value);
    }
  }
  

  const lru = new LRUCache(3);

  lru.put(1, 'A');
  lru.put(2, 'B');
  lru.put(3, 'C');
  
  console.log(lru.get(2)); // B → marks key 2 as recently used
  
  lru.put(4, 'D'); // Evicts key 1 (least recently used)
  
  console.log(lru.get(1)); // -1 (not found)
  console.log(lru.get(3)); // C