import express from 'express'
const app = express()

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// });

// Get a list of 5 jokes
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "Joke 1",
            content: "Joke 1 content"
        },
        {
            id: 2,
            title: "Joke 2",
            content: "Joke 2 content"
        },
        {
            id: 3,
            title: "Joke 3",
            content: "Joke 3 content"
        },
        {
            id: 4,
            title: "Joke 4",
            content: "Joke 4 content"
        },
        {
            id: 5,
            title: "Joke 5",
            content: "Joke 5 content"
        },
    ]
    res.send(jokes)
});

const port = process.env.PORT || 3000;

app.listen(port , () => console.log("Listening on port " + port));