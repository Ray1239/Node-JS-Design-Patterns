const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use('/public',express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.send('<h1>Hello There!</h1>')
});

app.listen(port, () => {
    console.log(`The server is listening to port: ${port}`)
})