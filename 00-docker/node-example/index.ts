import * as express from 'express';

var app = express();


app.get('/', (req, res) => {
    res.send(`Hello World`)
})
app.listen(8000, () => {
    console.log("app works on http://localhost:8000");
});

