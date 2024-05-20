import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Beneficiario } from '../dto/beneficiario';
import { HttpServiceService } from '../service/http-service.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {


  infoMenorForm: FormGroup;

  constructor(private fb: FormBuilder, private httpService: HttpServiceService) {
    this.infoMenorForm = this.fb.group({
      nombre: [''],
      apellido: [''],
      fechaNacimiento: [''],
      identificacion: [''],
      lugarNacimiento: [''],
      estadoNutricional: [''],
      imc: [''],
      region: [''],
      estado: ['']
    });
  }

  /**
   * Metodo que guarda la informacion del beneficiario
   */
  save() {
    
    let formValue = this.infoMenorForm.value;

    let beneficiario = new Beneficiario(
      formValue.nombre,
      formValue.apellido,
      formValue.fechaNacimiento,
      formValue.identificacion,
      formValue.lugarNacimiento,
      formValue.imc,
      formValue.estadoNutricional,
      formValue.region,
      formValue.estado
    );

   // Method to save the beneficiario object into the database
    this.httpService.saveBeneficiario(beneficiario).subscribe((data) => {
      console.log(data);
    });
  }
}
