const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/Example 5 - Train and Test Perceptron.html")
});

app.use(express.static("static"));

server.listen(3000, () => {
    console.log("listening on *: 3000")
})