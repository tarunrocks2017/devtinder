const express = require("express");

const app = express();
app.enable('strict routing');

app.use("/",(req, res) => {
    res.send("hey test1")
});

app.use("/test",(req, res) => {
    res.send("hey test")
});

app.listen(3000,() => {
    console.log("app started at port 3000");
})