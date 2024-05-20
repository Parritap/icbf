INSERT INTO Usuario (nombre, rol, email, password) VALUES
('Carlos Perez', 'Medico', 'carlos.perez@example.com', 'password1'),
('Ana Gomez', 'Nutricionista', 'ana.gomez@example.com', 'password2'),
('Luis Martinez', 'Medico', 'luis.martinez@example.com', 'password3'),
('Marta Sanchez', 'Administrador', 'marta.sanchez@example.com', 'password4'),
('Jose Diaz', 'Medico', 'jose.diaz@example.com', 'password5');


INSERT INTO Beneficiario (nombre, apellido, fechaNacimiento, identificacion, lugarNacimiento, imc, estadoNutricional, region, estado) VALUES
('Juan', 'Lopez', '2010-05-20', 'TI123456', 'Bogota, Cundinamarca', 14.2, 'Desnutrido', 'Centro', 'Activo'),
('Maria', 'Hernandez', '2008-11-30', 'TI654321', 'Medellin, Antioquia', 18.5, 'Normal', 'Andina', 'Activo'),
('Pedro', 'Castillo', '2012-02-15', 'TI112233', 'Cali, Valle del Cauca', 30.1, 'Obeso', 'Pacífico', 'Activo'),
('Lucia', 'Vargas', '2011-07-25', 'TI445566', 'Barranquilla, Atlántico', 15.3, 'Desnutrido', 'Caribe', 'Activo'),
('Carlos', 'Rivera', '2009-04-10', 'TI778899', 'Villavicencio, Meta', 19.0, 'Normal', 'Orinoquia', 'Activo');


INSERT INTO ConsultaMedica (beneficiarioId, usuarioId, fechaConsulta, diagnostico, tratamiento) VALUES
(1, 1, '2024-01-15', 'Desnutrición severa', 'Suplementos nutricionales'),
(2, 2, '2024-01-20', 'Buen estado de salud', 'Continuar con dieta balanceada'),
(3, 3, '2024-01-25', 'Obesidad infantil', 'Ejercicio diario y dieta'),
(4, 4, '2024-01-30', 'Desnutrición moderada', 'Suplementos y control mensual'),
(5, 5, '2024-02-05', 'Buen estado de salud', 'Continuar con dieta actual');
