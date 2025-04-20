// Implement a curry function

function add(a){
    return function(b){
        return function(c){
            return a + b + c 
        }
    }
}

// This function can also be written as 
const add = (a) = (b) = (c) => {
    return a + b + c;
}

// The add function will only execute if all the three parameters are passed to the funciton 
console.log(add(2)(3)(5))