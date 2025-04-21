// Write a function to check if an object is empty.

const obj = {
    "1": "Aditya"
};

const emptyObj = {};

const checkIsEmpty = (object) => {
    if (Object.keys(object).length === 0) {
        console.log("Empty");
    } else {
        console.log("Not Empty");
    }
};

checkIsEmpty(obj);       
checkIsEmpty(emptyObj);  
