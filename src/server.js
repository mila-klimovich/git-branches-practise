const express = require("express");
const app = express();

//create a webserver :: 3000

const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello, world!");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});