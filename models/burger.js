var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", cb);
    },
    insertOne: function(name, cb) {
        orm.insertOne("burgers", ["burger_name", "devoured"], name, cb);
    },
    updateOne: function(col, val, id, cb) {
        orm.updateOne("burgers", col, val, id, response => {
            cb(response);
        });
    },
}

module.exports = burger;