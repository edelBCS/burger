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

router.post("/api/addburger/:name", (req, res) => {
    console.log("test")
    burger.insertOne(req.params.name, (err, data) => {
        if(err) throw err;
        console.log("Added Burger: " + data);
        res.redirect("/");
    });
});

module.exports = router;