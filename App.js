const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sendGrid = require("@sendGrid/mail");
const { send } = require("@sendGrid/mail");

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
    res.setHeader("Access-Contro-Allow_Origin", "*");
    res.setHeader("Access-Contro-Allow_Methods", "GET, POST, PUT, PATCH, DELETE");
    res.setHeader("Access-Contro-Allow_Headers", "Content-Type, Aithorization");
    next();
})

app.get("/api", (req, res, next)=> {
    res.send("API Status: Running")
})

app.post("/api/email",(req, res, next)=> {
    sendGrid.setApiKey("")
})

app.listen(3030, "0.0.0.0")