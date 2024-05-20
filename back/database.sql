
-- Entidad que representa a los usuarios del sistema, pueden ser administradores, médicos, nutricionistas, etc.
CREATE TABLE Usuario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    rol VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Entidad que representa al niño, niña o adolescente que recibe la atención del programa.
CREATE TABLE Beneficiario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    apellido VARCHAR(255) NOT NULL,
    fechaNacimiento DATE NOT NULL,
    identificacion VARCHAR(255) NOT NULL, -- Esto es, la cedula, tarjeta de identidad, pasaporte, etc...
    lugarNacimiento VARCHAR(255) NOT NULL, -- Ciudad y departamento de nacimiento.
    imc FLOAT, -- indice de masa corporal
    estadoNutricional VARCHAR(255) NOT NULL, -- Esto nutricional del niño: puede ser normal, desnutrido, obeso, etc.
    region VARCHAR(255), -- Hay solo 7 regiones. Centro, Caribe, Amazonia, Orinoquia, Pacífico, Andina, Atlántica.
    estado VARCHAR(255) NOT NULL -- Estado del beneficiario: Activo, Inactivo, Fallecido.
);

CREATE TABLE ConsultaMedica (
    id INT PRIMARY KEY AUTO_INCREMENT,
    beneficiarioId INT,
    usuarioId INT,
    fechaConsulta DATE NOT NULL,
    diagnostico VARCHAR(255) NOT NULL,
    tratamiento VARCHAR(255) NOT NULL,
    FOREIGN KEY (beneficiarioId) REFERENCES Beneficiario(id),
    FOREIGN KEY (usuarioId) REFERENCES Usuario(id)
);
