const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.json({ msg: "hello!" }).status(200);
});

app.listen(8080, () => {
    console.log("Backend listening on port 8080");
});