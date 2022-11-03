const express = require('express');
const cors = require('cors')

const app = express();
app.use(cors());

app.get('/list', (req, res) => {
    const list = [
        {id: 5, name: "Spike", note: "dog"},
        {id: 10, name: "Tom", note: "cat"},
        {id: 44, name: "Tyke ", note: "puppy"},
        {id: 29, name: "Jerry", note: "mouse"},
    ];


    setTimeout(() => {
        res.send(list);
    }, 2000)
});

app.listen(3000, () => {
    console.log('Server start');
});
