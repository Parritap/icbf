'use strict';

const Beneficiario = require('../models/beneficiario.model');

exports.findAll = function (req, res) {
    Beneficiario.findAll(function (err, beneficiario) {
        console.log('controller')
        if (err) res.send(err);
        console.log('res', beneficiario);
        res.send(beneficiario);
    });
}

exports.findById = function (req, res) {
    Beneficiario.findById(req.params.id, function (err, beneficiario) {
        if (err) res.send(err);
        res.json(beneficiario);
    });
}

exports.create = function (req, res) {
    const new_beneficiario = new Beneficiario(req.body);
    //handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Beneficiario.create(new_beneficiario, function (err, beneficiario) {
            if (err) res.send(err);
            res.json({ error: false, message: "Beneficiario added successfully!", data: beneficiario });
        });
    }
}