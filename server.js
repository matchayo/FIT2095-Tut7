const express = require("express");
const app = express();

app.use(express.json());

app.get("/actor", function (req, res) {
    let obj = req.body;
    console.log(obj);
    obj.marks.splice(1, 1);
    res.json(obj);
});

app.get("/actor/add", function (req, res) {
    let newActorDetails = req.body;
    console.log(newActorDetails);
    res.json(newActorDetails);
});

app.listen(8080);