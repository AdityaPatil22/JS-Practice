// Write a function to group objects by a key

const groupBy = (arr, key) => {
    return arr.reduce((acc, obj) => {
        const groupKey = obj[key];
        if(!acc[groupKey]) {
            acc[groupKey] = [];
        }
        acc[groupKey].push(obj);
        return acc;
    }, {})
}

const users = [
    { name: "Aditya", role: "Frontend" },
    { name: "Sana", role: "Backend" },
    { name: "Raj", role: "Frontend" },
    { name: "Zoya", role: "Design" },
    { name: "Aman", role: "Backend" }
  ];
  
  const groupedByRole = groupBy(users, "role");
  
  console.log(groupedByRole);
  