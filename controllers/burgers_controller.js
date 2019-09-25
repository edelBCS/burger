var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

router.get("/", (req, res) => {
    burger.selectAll((err, data) => {
        if(err) throw err;
        console.log(data);
        res.render("index", {burgers: data});
    });
});
//change to .get when URL testing
router.post("/api/add/:name", (req, res) => {
    burger.insertOne(req.params.name, (err, data) => {
        if(err) throw err;
        console.log("Added Burger: " + data);
        res.redirect("/");
    });
});

router.put("/api/update/:id/:name", (req, res) => {
    var col = ""; //column that needs to be changed
    var val = ""; //new val of that col
    var id = req.params.id;

    burger.updateOne(col, val, id, (err, data) => {
        if(err) throw err;
        console.log("Update Burger: ID" + req.params.id);
        res.redirect("/");
    });
});

module.exports = router;