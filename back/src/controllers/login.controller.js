"use strict";
const Users = require("../models/users.model");

// Crea un método para el login. Sus parametros serán el email y la contraseña. Luego busca si existe
// un usuario con ese email y contraseña en la base de datos. Si existe, retorna el usuario encontrado.
// Si no existe, retorna un mensaje indicando que el usuario no existe.

exports.login = function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  Users.login(email, password, function (err, users) {
    if (err) res.send(err);
    if (users.length > 0) {
      res.json(users);
    } else {
     res.json({ error: false, access:"denied", message: "Usuario no encontrado" });
    }
  });
};