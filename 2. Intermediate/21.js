// Create a function that deep clones an object

const original = {
    name: "Aditya",
    age: "23",
    skills: {
        frontend: ["React", "Vue"],
        backend: ["Node", "Express"]
    }
}

const shallowCopy1 = Object.assign({}, original) // Creatinga Shallow copy using Object.assign

const shallowCopy2 = {...original} // Using spread operator

const deepCopy1 = JSON.parse(JSON.stringify(original));

const deepCopy2 = structuredClone(original)

original.skills.frontend.push("Angular")

console.log("Original:", original);
console.log("Shallow Copy 1 (Object.assign):", shallowCopy1);
console.log("Shallow Copy 2 (Spread):", shallowCopy2);
console.log("Deep Copy 1 (JSON):", deepCopy1);
console.log("Deep Copy 2 (structuredClone):", deepCopy2);
