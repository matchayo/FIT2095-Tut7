const express = require("express");
const app = express();

app.use(express.json());

app.get("/actor", function (req, res) {
    let obj = req.body;
    console.log(obj);
    obj.marks.splice(1, 1);
    res.json(obj);
});

app.listen(8080);