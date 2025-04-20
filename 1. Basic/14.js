// Implement a debounce function

const debounce = (fn, delay) =>{
    let timerId;
    return function(...arg) {
        clearTimeout(timerId)
        timerId = setTimeout(() => {
            fn(...arg)
        }, delay)
    }
}

const search = (query) => {
    console.log("Search for: ", query)
}

const searchWithDebounce = debounce(search, 1000)

searchWithDebounce("H")
searchWithDebounce("Hey")
searchWithDebounce("Hey Whats")
searchWithDebounce("Hey Whats Up")