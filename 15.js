// Implement a throttle function

const throttle = (fn, delay) => {
    let lastCall = 0;
    return function(...args) {
        const now = Date.now();
        if(now - lastCall < delay){
            return;
        }
        lastCall = now;
        return fn(...args)
    }
}

const sendChatMessage = (msg) => {
    console.log("Sending Message", msg)
}

const sendChatMessageWithSlowMode = throttle(sendChatMessage, 2 * 1000)

sendChatMessageWithSlowMode("Hey")
setTimeout(() => {
    sendChatMessageWithSlowMode("how")
}, 1100)
setTimeout(() => {
    sendChatMessageWithSlowMode("are")
}, 3300)
sendChatMessageWithSlowMode("you")