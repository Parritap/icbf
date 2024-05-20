export class Beneficiario {

    constructor(
        public nombre: string,
        public apellido: string,
        public fechaNacimiento: string,
        public identificacion: string,
        public lugarNacimiento: string,
        public imc: string,
        public estadoNutricional: string,
        public region: string,
        public estado: string
      ) {}
}