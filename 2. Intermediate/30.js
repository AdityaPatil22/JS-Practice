// Implement a simple promise-like structure

const samplePromise = async (req, res) => {
    try {
        const result = await fetch("https://locahost/3000")
        const data = await result.json();
        res.json(data);
    } catch (error) {
        console.error(error)
    }
    res.status(500).json({ error: "Something went wrong" });
}