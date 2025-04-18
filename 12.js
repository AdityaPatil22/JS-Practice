//Write a custom implementation of `.map()`

const studentsData = [
    {
        "ID" : "1",
        "name" : "Aditya"
    }, 
    {
        "ID" : "2",
        "name" : "Akash"
    },
    {
        "ID" : "3",
        "name" : "Shubham"
    }
]

const mapFunc = () => {
    studentsData.map((items) => {
        console.log(items.ID)
        console.log(items.name)
    })
}

mapFunc()