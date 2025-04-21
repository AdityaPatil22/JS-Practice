// Compose multiple functions together

const compose = (...fns) => {
    return (intialValue) => {
        return fns.reduceRight((acc, fn) => fn(acc), intialValue);
    }
}