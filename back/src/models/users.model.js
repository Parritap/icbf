"use strict";
var dbConn = require("./../../config/db.config");

//Employee object create
var User = function (user) {
  this.id = user.id;
  this.nombre = user.nombre;
  this.rol = user.rol;
  this.email = user.email;
  this.password = user.password;
};


User.login = function (email, password, result) {
  dbConn.query("Select * from Usuario where email = ? and password = ?", [email, password], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
}


User.create = function (newUser, result) {
  dbConn.query("INSERT INTO Usuario set ?", newUser, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

User.findById = function (id, result) {
    dbConn.query("Select * from Usuario where id = ? ", id, function (err, res) {
        if (err) {
        console.log("error: ", err);
        result(err, null);
        } else {
        result(null, res);
        }
    });
    };

User.findAll = function (result) {
    dbConn.query("Select * from Usuario", function (err, res) {
        if (err) {
        console.log("error: ", err);
        result(null, err);
        } else {
        console.log("users : ", res);
        result(null, res);
        }
    });
}

module.exports = User;