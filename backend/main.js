const express = require("express");
const ApiV1 = require("./routes/api");
const app = express();

app.use("/api/v1", ApiV1);

app.listen(8080, () => {
    console.log("Backend listening on port 8080");
});