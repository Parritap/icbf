'use strict';
var dbConn = require('./../../config/db.config');


const Beneficiario = function (beneficiario) {
    this.id = beneficiario.id;
    this.nombre = beneficiario.nombre;
    this.apellido = beneficiario.apellido;
    this.fechaNacimiento = beneficiario.fechaNacimiento;
    this.identificacion = beneficiario.identificacion;
    this.lugarNacimiento = beneficiario.lugarNacimiento;
    this.imc = beneficiario.imc;
    this.estadoNutricional = beneficiario.estadoNutricional;
    this.region = beneficiario.region;
    this.estado = beneficiario.estado;
};


Beneficiario.create = function (newBeneficiario, result) {
    dbConn.query("INSERT INTO Beneficiario set ?", newBeneficiario, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Beneficiario.findById = function (id, result) {
    dbConn.query("Select * from Beneficiario where id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
}

Beneficiario.findAll = function (result) {
    dbConn.query("Select * from Beneficiario", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log("beneficiarios : ", res);
            result(null, res);
        }
    });
}


module.exports = Beneficiario;
