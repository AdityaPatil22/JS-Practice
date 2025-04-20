// Implement a function that checks deep equality.

function isDeepEqual(a, b) {
    // Check strict equality first
    if(a === b ) console.log(true);

    // Check for null of non-object types
    if(a === null || b === null || typeof a !== 'object' || typeof b !== 'object'){
        console.log(false);
    }

    // Get keys of both objects
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    // If number of keys id different, not equal
    if(keysA.length !== keysB.length) console.log(false);

    // Check if all keys and values are equal recursvely
    for(let key of keysA){
        if(!keysB.includes(key)) console.log(false);

        if(!isDeepEqual(a[key], b[key])) console.log(false)
    }

    console.log(true)
}