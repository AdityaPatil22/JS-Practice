// Evaluate a simple mathematical expression string (e.g. "2 + 3 * 4")

const evaluateExpression = (expr) => {
    try {
        return eval(expr)
    } catch (error) {
        return "Invali expression"
    }
}

console.log(evaluateExpression("2 + 3 * 4"));